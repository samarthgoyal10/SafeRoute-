/**
 * SafeRoute Leaflet Interactive Map Component
 * Powered by OpenStreetMap standard tiles (Zero API Key required, 100% Free).
 * Includes auto-fitBounds, invalidateSize on resize/tab change, and waypoint pins.
 */
window.SafeHerLeafletMap = function({
  center = [28.4890, 77.1400],
  zoom = 12,
  routes = [],
  selectedRouteId = 'shield_route',
  userLocation = null,
  safePlaces = [],
  breadcrumbs = [],
  onSelectPlace = null,
  height = "380px"
}) {
  const mapRef = React.useRef(null);
  const leafletInstance = React.useRef(null);
  const markersLayer = React.useRef(null);
  const routesLayer = React.useRef(null);
  const breadcrumbLayer = React.useRef(null);

  // Initialize Map with OpenStreetMap Standard Tiles (No API key needed)
  React.useEffect(() => {
    if (!mapRef.current) return;
    if (leafletInstance.current) return;

    if (typeof L === 'undefined') {
      console.warn('Leaflet library not loaded yet');
      return;
    }

    try {
      const map = L.map(mapRef.current, {
        center: center,
        zoom: zoom,
        zoomControl: true,
        scrollWheelZoom: true
      });

      // Standard OpenStreetMap Tile Layer - 100% Free, No Watermark, No API Key Required
      const osmTileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        subdomains: ['a', 'b', 'c'],
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Handle tile error gracefully
      osmTileLayer.on('tileerror', function(error, tile) {
        console.warn('Tile load warning, retrying tile:', error);
      });

      markersLayer.current = L.layerGroup().addTo(map);
      routesLayer.current = L.layerGroup().addTo(map);
      breadcrumbLayer.current = L.layerGroup().addTo(map);

      leafletInstance.current = map;

      // Invalidate size after layout stabilization
      setTimeout(() => {
        if (leafletInstance.current) {
          leafletInstance.current.invalidateSize();
        }
      }, 300);

    } catch (err) {
      console.error('Map init failed:', err);
    }

    return () => {
      if (leafletInstance.current) {
        leafletInstance.current.remove();
        leafletInstance.current = null;
      }
    };
  }, []);

  // Update Routes Polyline & Auto-Fit Bounds
  React.useEffect(() => {
    if (!leafletInstance.current || !routesLayer.current) return;
    routesLayer.current.clearLayers();

    if (!routes || routes.length === 0) return;

    let selectedPolylineBounds = null;

    routes.forEach(route => {
      const isSelected = route.id === selectedRouteId;
      const isShield = route.id === 'shield_route';
      const isShortcut = route.id === 'shortcut_route';

      let color = '#8E8294'; // neutral slate
      let weight = 4;
      let dashArray = null;

      if (isShield) {
        color = '#24152F'; // Deep Plum
        weight = isSelected ? 6 : 4;
      } else if (isShortcut) {
        color = '#FF6B55'; // Coral caution
        weight = 3;
        dashArray = '6, 6';
      }

      if (route.coordinates && route.coordinates.length > 0) {
        const polyline = L.polyline(route.coordinates, {
          color: color,
          weight: weight,
          opacity: isSelected ? 0.95 : 0.45,
          dashArray: dashArray,
          lineJoin: 'round'
        }).addTo(routesLayer.current);

        polyline.bindPopup(`
          <div class="sr-map-popup p-1 text-xs">
            <strong style="color: #24152F; font-size: 13px;">${route.title}</strong>
            <br/><span style="color: #6E6672;">Estimated: ${route.duration_min} min • ${route.distance_km || 14.2} km</span>
          </div>
        `);

        if (isSelected) {
          selectedPolylineBounds = polyline.getBounds();

          // Add Start & Destination Pin Markers for Selected Route
          const startPt = route.coordinates[0];
          const endPt = route.coordinates[route.coordinates.length - 1];

          // Start Pin (Soft Mint Green)
          const startIcon = L.divIcon({
            className: 'custom-start-marker',
            html: `
              <div style="background: #206352; color: #FFFFFF; width: 28px; height: 28px; border-radius: 50%; border: 3px solid #FFFFFF; box-shadow: 0 3px 8px rgba(36,21,47,0.35); display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold;">
                A
              </div>
            `,
            iconSize: [28, 28],
            iconAnchor: [14, 14]
          });
          L.marker(startPt, { icon: startIcon })
            .addTo(routesLayer.current)
            .bindPopup(`<strong>Origin</strong><br/><span style="font-size:11px;">DLF Cyber City, Gurugram</span>`);

          // Destination Pin (Deep Plum)
          const endIcon = L.divIcon({
            className: 'custom-end-marker',
            html: `
              <div style="background: #24152F; color: #B8E0D2; width: 28px; height: 28px; border-radius: 50%; border: 3px solid #FFFFFF; box-shadow: 0 3px 8px rgba(36,21,47,0.35); display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold;">
                B
              </div>
            `,
            iconSize: [28, 28],
            iconAnchor: [14, 14]
          });
          L.marker(endPt, { icon: endIcon })
            .addTo(routesLayer.current)
            .bindPopup(`<strong>Destination</strong><br/><span style="font-size:11px;">Saket Metro Station, South Delhi</span>`);
        }
      }
    });

    // Auto-fit map viewport to route boundaries
    if (selectedPolylineBounds && leafletInstance.current) {
      try {
        leafletInstance.current.fitBounds(selectedPolylineBounds, {
          padding: [30, 30],
          maxZoom: 14
        });
      } catch (e) {}
    }

  }, [routes, selectedRouteId]);

  // Update Breadcrumbs & Fit
  React.useEffect(() => {
    if (!leafletInstance.current || !breadcrumbLayer.current) return;
    breadcrumbLayer.current.clearLayers();

    if (breadcrumbs && breadcrumbs.length > 1) {
      const pts = breadcrumbs.map(b => [b.lat, b.lng]);
      const line = L.polyline(pts, {
        color: '#206352',
        weight: 5,
        opacity: 0.9
      }).addTo(breadcrumbLayer.current);

      try {
        leafletInstance.current.fitBounds(line.getBounds(), {
          padding: [35, 35],
          maxZoom: 15
        });
      } catch (e) {}
    }
  }, [breadcrumbs]);

  // Update Markers (User location & Safe Places)
  React.useEffect(() => {
    if (!leafletInstance.current || !markersLayer.current) return;
    markersLayer.current.clearLayers();

    // 1. User Location Marker
    if (userLocation && userLocation.lat && userLocation.lng) {
      L.circle([userLocation.lat, userLocation.lng], {
        radius: userLocation.accuracy || 35,
        color: '#B8E0D2',
        fillColor: '#B8E0D2',
        fillOpacity: 0.25,
        weight: 1.5
      }).addTo(markersLayer.current);

      const userIcon = L.divIcon({
        className: 'custom-user-marker',
        html: `
          <div style="position: relative; width: 24px; height: 24px;">
            <div style="position: absolute; inset: 0; border-radius: 50%; background: #206352; opacity: 0.6; animation: mint-radar-pulse 2s infinite ease-out;"></div>
            <div style="width: 16px; height: 16px; margin: 4px; border-radius: 50%; background: #24152F; border: 3px solid #B8E0D2; box-shadow: 0 2px 6px rgba(36,21,47,0.3);"></div>
          </div>
        `,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });

      L.marker([userLocation.lat, userLocation.lng], { icon: userIcon })
        .addTo(markersLayer.current)
        .bindPopup(`<strong>Your Live Position</strong><br><span style="font-size:11px; color:#6E6672;">SafeRoute GPS Active</span>`);
    }

    // 2. Safe Places Markers
    if (safePlaces && safePlaces.length > 0) {
      const boundsCoords = [];

      safePlaces.forEach(place => {
        boundsCoords.push([place.lat, place.lng]);

        let iconBg = '#24152F';
        let emoji = '🛡️';
        if (place.category === 'pink_booth') {
          iconBg = '#C2185B';
          emoji = '👮‍♀️';
        } else if (place.category === 'police_station') {
          iconBg = '#24152F';
          emoji = '🚓';
        } else if (place.category === 'pharmacy_247') {
          iconBg = '#206352';
          emoji = '💊';
        } else if (place.category === 'hospital') {
          iconBg = '#FF6B55';
          emoji = '🏥';
        }

        const placeIcon = L.divIcon({
          className: 'safe-place-marker',
          html: `
            <div style="width: 30px; height: 30px; border-radius: 50%; background: ${iconBg}; border: 2.5px solid #FFFFFF; box-shadow: 0 3px 8px rgba(36,21,47,0.25); display: flex; align-items: center; justify-content: center; font-size: 14px;">
              ${emoji}
            </div>
          `,
          iconSize: [30, 30],
          iconAnchor: [15, 15]
        });

        const m = L.marker([place.lat, place.lng], { icon: placeIcon }).addTo(markersLayer.current);
        m.bindPopup(`
          <div style="font-family: inherit; font-size: 12px; line-height: 1.4; padding: 2px;">
            <strong style="color: #24152F; font-size: 13px;">${place.name}</strong>
            <br/><span style="color: #6E6672;">${place.address}</span>
            <br/><span style="color: #206352; font-weight: bold;">${place.is_open_247 ? '✓ 24/7 Verified Safe Haven' : ''}</span>
            ${place.distance_km ? ` • <strong>${place.distance_km} km away</strong>` : ''}
          </div>
        `);

        if (onSelectPlace) {
          m.on('click', () => onSelectPlace(place));
        }
      });

      // If viewing safe places directory and no routes are displayed, auto-fit to all safe places
      if (boundsCoords.length > 0 && (!routes || routes.length === 0) && leafletInstance.current) {
        try {
          leafletInstance.current.fitBounds(L.latLngBounds(boundsCoords), {
            padding: [35, 35],
            maxZoom: 14
          });
        } catch (e) {}
      }
    }

  }, [userLocation, safePlaces]);

  // Trigger resize observer / invalidateSize
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (leafletInstance.current) {
        leafletInstance.current.invalidateSize();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [height]);

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-sm border border-[#E6DDD4]" style={{ height }}>
      <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};
