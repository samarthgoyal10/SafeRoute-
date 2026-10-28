// === FILE: components/LucideIcons.js ===
/**
 * SafeRoute Lucide Icons SVG Component
 * Provides crisp, offline-ready vector icons conforming strictly to the Lucide icon set.
 */
window.LucideIcon = function ({
  name,
  size = 20,
  className = '',
  color = 'currentColor',
  strokeWidth = 2
}) {
  const icons = {
    shield: /*#__PURE__*/React.createElement("path", {
      d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
    }),
    shieldCheck: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m9 12 2 2 4-4"
    })),
    shieldAlert: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 8v4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 16h.01"
    })),
    mapPin: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "10",
      r: "3"
    })),
    navigation: /*#__PURE__*/React.createElement("polygon", {
      points: "3 11 22 2 13 21 11 13 3 11"
    }),
    compass: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("polygon", {
      points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
    })),
    locate: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
      x1: "2",
      x2: "5",
      y1: "12",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "19",
      x2: "22",
      y1: "12",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      x2: "12",
      y1: "2",
      y2: "5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      x2: "12",
      y1: "19",
      y2: "22"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "7"
    })),
    clock: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "12 6 12 12 16 14"
    })),
    timer: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
      x1: "10",
      x2: "14",
      y1: "2",
      y2: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      x2: "15",
      y1: "14",
      y2: "11"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "14",
      r: "8"
    })),
    users: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22 21v-2a4 4 0 0 0-3-3.87"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 3.13a4 4 0 0 1 0 7.75"
    })),
    user: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "7",
      r: "4"
    })),
    userPlus: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "19",
      x2: "19",
      y1: "8",
      y2: "14"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "22",
      x2: "16",
      y1: "11",
      y2: "11"
    })),
    heartHandshake: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m14 15 2 2"
    })),
    phone: /*#__PURE__*/React.createElement("path", {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    }),
    phoneCall: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 2a8 8 0 0 1 8 8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 6a4 4 0 0 1 4 4"
    })),
    settings: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
    })),
    search: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21",
      x2: "16.65",
      y1: "21",
      y2: "16.65"
    })),
    checkCircle2: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m9 12 2 2 4-4"
    })),
    alertTriangle: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      x2: "12",
      y1: "9",
      y2: "13"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      x2: "12.01",
      y1: "17",
      y2: "17"
    })),
    alertCircle: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      x2: "12",
      y1: "8",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      x2: "12.01",
      y1: "16",
      y2: "16"
    })),
    arrowRight: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
      x1: "5",
      x2: "19",
      y1: "12",
      y2: "12"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "12 5 19 12 12 19"
    })),
    arrowLeftRight: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "m8 3 4 8 5-5 5 15H2L8 3z"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "20 17 4 17 8 13"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "4 7 20 7 16 11"
    })),
    chevronRight: /*#__PURE__*/React.createElement("polyline", {
      points: "9 18 15 12 9 6"
    }),
    chevronDown: /*#__PURE__*/React.createElement("polyline", {
      points: "6 9 12 15 18 9"
    }),
    plus: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
      x1: "12",
      x2: "12",
      y1: "5",
      y2: "19"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "5",
      x2: "19",
      y1: "12",
      y2: "12"
    })),
    x: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
      x1: "18",
      x2: "6",
      y1: "6",
      y2: "18"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      x2: "18",
      y1: "6",
      y2: "18"
    })),
    trash2: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M3 6h18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "10",
      x2: "10",
      y1: "11",
      y2: "17"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "14",
      x2: "14",
      y1: "11",
      y2: "17"
    })),
    edit3: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M12 20h9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"
    })),
    pause: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
      x: "6",
      y: "4",
      width: "4",
      height: "16",
      rx: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "4",
      width: "4",
      height: "16",
      rx: "1"
    })),
    play: /*#__PURE__*/React.createElement("polygon", {
      points: "5 3 19 12 5 21 5 3"
    }),
    square: /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2"
    }),
    share2: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "5",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "6",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "19",
      r: "3"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8.59",
      x2: "15.42",
      y1: "13.51",
      y2: "17.49"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "15.41",
      x2: "8.59",
      y1: "6.51",
      y2: "10.49"
    })),
    bell: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
    })),
    home: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "9 22 9 12 15 12 15 22"
    })),
    car: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "7",
      cy: "17",
      r: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 17h6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "17",
      cy: "17",
      r: "2"
    })),
    bus: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M8 6v6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 6v6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2 12h20"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "3",
      width: "20",
      height: "15",
      rx: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 18v3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20 18v3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "7",
      cy: "15",
      r: "1.5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "17",
      cy: "15",
      r: "1.5"
    })),
    footprints: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.67-2 8.5v2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.67 2 8.5v2"
    })),
    hospital: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M12 6v4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 8h-4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18 18h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18 22H6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2Z"
    })),
    info: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 16v-4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 8h.01"
    })),
    refreshCw: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 3v5h-5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 16H3v5"
    })),
    lock: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
      width: "18",
      height: "11",
      x: "3",
      y: "11",
      rx: "2",
      ry: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 11V7a5 5 0 0 1 10 0v4"
    })),
    sparkles: /*#__PURE__*/React.createElement("path", {
      d: "m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z"
    }),
    fileText: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 2v4a2 2 0 0 0 2 2h4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 9H8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 13H8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 17H8"
    }))
  };
  const iconSvg = icons[name] || icons.shield;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: `inline-block shrink-0 ${className}`
  }, iconSvg);
};

// === FILE: components/Header.js ===
/**
 * SafeRoute Top Bar Header Component
 * Editorial styling in Warm Ivory & Deep Plum with location status, SOS trigger, notifications, and profile menu.
 */
window.SafeHerHeader = function ({
  currentTab,
  setCurrentTab,
  activeSOS,
  activeJourney,
  onTriggerSOS,
  locationStatus = 'prompt',
  onRequestLocation
}) {
  const profile = window.SafeRouteStore ? window.SafeRouteStore.getProfile() : {
    name: 'Aanya Sharma'
  };
  const [notificationOpen, setNotificationOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    className: "sticky top-0 z-40 bg-[#FFFFFF] border-b border-[#E6DDD4] shadow-sm px-4 sm:px-6 lg:px-8 py-3.5 transition-all"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto flex items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setCurrentTab('home'),
    className: "flex items-center space-x-3 cursor-pointer select-none group shrink-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-2xl bg-[#24152F] text-[#B8E0D2] flex items-center justify-center font-bold shadow-sm group-hover:scale-105 transition-transform border border-[#3D254F]"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "shield",
    size: 22,
    color: "#B8E0D2",
    strokeWidth: 2.4
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-display font-black text-xl text-[#24152F] tracking-tight"
  }, "SafeRoute"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-black px-2 py-0.5 rounded-full bg-[#FFEAE7] text-[#FF6B55] border border-[#FF6B55]/30 tracking-wider uppercase"
  }, "Demo")), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-[#6E6672] hidden md:block"
  }, "Your journey. Your people. Your safety."))), /*#__PURE__*/React.createElement("div", {
    className: "hidden sm:flex items-center space-x-3 text-xs"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onRequestLocation,
    className: "flex items-center space-x-2.5 px-3.5 py-1.5 rounded-xl bg-[#F7F1E8] border border-[#E6DDD4] text-[#302A32] hover:bg-[#EFE6D8] transition",
    title: "Click to check or update device geolocation"
  }, /*#__PURE__*/React.createElement("span", {
    className: `w-2 h-2 rounded-full ${locationStatus === 'granted' ? 'bg-[#206352] animate-ping' : 'bg-[#FF6B55]'}`
  }), /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "mapPin",
    size: 14,
    color: "#24152F"
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-[#24152F]"
  }, locationStatus === 'granted' ? 'DLF Cyber City (Live GPS)' : 'Gurugram (Demo Pin)'), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-[#6E6672] pl-1 border-l border-[#E6DDD4]"
  }, locationStatus === 'granted' ? 'GPS Synced' : 'Allow Access →')), activeJourney && /*#__PURE__*/React.createElement("div", {
    onClick: () => setCurrentTab('journey'),
    className: "cursor-pointer flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-[#E0F3EC] text-[#206352] border border-[#B8E0D2] font-bold hover:bg-[#B8E0D2]/40 transition"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-[#206352] animate-ping"
  }), /*#__PURE__*/React.createElement("span", null, "Safe Journey Active"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2.5 sm:space-x-3 shrink-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setNotificationOpen(!notificationOpen),
    className: "p-2 rounded-xl bg-[#F7F1E8] hover:bg-[#EFE6D8] border border-[#E6DDD4] text-[#24152F] transition relative",
    title: "Notifications"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "bell",
    size: 18,
    color: "#24152F"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#FF6B55]"
  })), notificationOpen && /*#__PURE__*/React.createElement("div", {
    className: "absolute right-0 mt-2 w-72 bg-[#FFFFFF] rounded-2xl shadow-xl border border-[#E6DDD4] p-3 text-xs space-y-2 z-50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-1 border-b border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-[#24152F]"
  }, "Safety Notifications"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-[#206352] font-semibold"
  }, "All Systems Active")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 text-[11px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-2 rounded-xl bg-[#F7F1E8] border border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-[#24152F] block"
  }, "✓ Watchdog Armed"), /*#__PURE__*/React.createElement("span", {
    className: "text-[#6E6672]"
  }, "Automated check-ins active on next departure.")), /*#__PURE__*/React.createElement("div", {
    className: "p-2 rounded-xl bg-[#E0F3EC] border border-[#B8E0D2]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-[#206352] block"
  }, "● Guardians Ready"), /*#__PURE__*/React.createElement("span", {
    className: "text-[#206352]"
  }, "Trusted contacts configured for emergency alerts."))))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCurrentTab('settings'),
    className: "flex items-center space-x-2 p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-[#F7F1E8] hover:bg-[#EFE6D8] border border-[#E6DDD4] transition text-left",
    title: "Profile & Settings"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-7 h-7 rounded-lg bg-[#24152F] text-white flex items-center justify-center font-bold text-xs shadow-sm"
  }, profile.name ? profile.name.charAt(0) : 'A'), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-[#24152F] hidden lg:inline"
  }, profile.name || 'Profile')), /*#__PURE__*/React.createElement("button", {
    onClick: () => onTriggerSOS('tap_header'),
    className: `px-3.5 sm:px-4 py-2 rounded-xl font-black text-xs flex items-center space-x-1.5 transition shadow-sm active:scale-95 ${activeSOS ? 'bg-[#E8533D] text-white sr-sos-pulse' : 'bg-[#FF6B55] hover:bg-[#E8533D] text-white shadow-coral/20'}`,
    title: "Emergency SOS activation"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "alertTriangle",
    size: 16,
    color: "#FFFFFF",
    strokeWidth: 2.5
  }), /*#__PURE__*/React.createElement("span", {
    className: "tracking-wide"
  }, "SOS")))));
};

// === FILE: components/Sidebar.js ===
/**
 * SafeRoute Desktop Sidebar Navigation Rail
 * Strict 260-275px width, full-height Deep Plum (#24152F).
 * Active state: Coral-tinted background with dark plum text (#FFEAE7 / #24152F).
 * Bottom: Restrained subtle illustrated artwork of safe journey under night sky.
 */
window.SafeHerSidebar = function ({
  currentTab,
  setCurrentTab,
  activeSOS,
  activeJourney,
  onTriggerSOS
}) {
  const navItems = [{
    id: 'home',
    label: 'Home',
    icon: 'home'
  }, {
    id: 'saferoute',
    label: 'Safe Journey',
    icon: 'navigation',
    badge: Boolean(activeJourney)
  }, {
    id: 'vault',
    label: 'My Journeys',
    icon: 'fileText'
  }, {
    id: 'safeplaces',
    label: 'Nearby Help',
    icon: 'hospital'
  }, {
    id: 'contacts',
    label: 'Trusted Contacts',
    icon: 'users'
  }, {
    id: 'settings',
    label: 'Settings',
    icon: 'settings'
  }];
  return /*#__PURE__*/React.createElement("aside", {
    className: "hidden lg:flex flex-col w-[270px] bg-[#24152F] text-[#F7F1E8] border-r border-[#3D254F] min-h-[calc(100vh-65px)] p-4 shrink-0 select-none justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setCurrentTab('home'),
    className: "px-2 pt-2 cursor-pointer select-none group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-3 mb-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#3D254F] to-[#24152F] border border-[#D8C6E6]/30 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "shield",
    size: 22,
    color: "#B8E0D2",
    strokeWidth: 2.4
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-display font-black text-xl text-white tracking-tight"
  }, "SafeRoute"), /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] font-black px-2 py-0.5 rounded-full bg-[#FF6B55]/20 text-[#FF6B55] border border-[#FF6B55]/40 tracking-wider uppercase"
  }, "DEMO")))), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-[#D8C6E6]/80 font-medium leading-relaxed pl-0.5"
  }, "“Your journey. Your people. Your safety.”")), /*#__PURE__*/React.createElement("nav", {
    className: "space-y-1.5 pt-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-3 pb-2 text-[10px] font-black uppercase tracking-wider text-[#D8C6E6]/50"
  }, "Navigation"), navItems.map(item => {
    const isActive = currentTab === item.id || item.id === 'saferoute' && currentTab === 'journey';
    return /*#__PURE__*/React.createElement("button", {
      key: item.id,
      onClick: () => setCurrentTab(item.id),
      className: `w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs transition-all ${isActive ? 'bg-[#FFEAE7] text-[#24152F] font-black shadow-sm' : 'text-[#E9DEEF] hover:bg-[#3D254F] hover:text-white font-semibold'}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3"
    }, /*#__PURE__*/React.createElement(window.LucideIcon, {
      name: item.icon,
      size: 18,
      color: isActive ? '#FF6B55' : '#D8C6E6',
      strokeWidth: isActive ? 2.5 : 2
    }), /*#__PURE__*/React.createElement("span", null, item.label)), item.badge && /*#__PURE__*/React.createElement("span", {
      className: "w-2.5 h-2.5 rounded-full bg-[#B8E0D2] animate-ping"
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pt-4 mt-6 border-t border-[#3D254F]/70 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl p-3 bg-[#190E21] border border-[#3D254F] relative overflow-hidden group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative h-20 w-full rounded-xl overflow-hidden bg-gradient-to-b from-[#3D254F] to-[#190E21] flex items-end justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-2 right-4 w-4 h-4 rounded-full bg-[#F7F1E8] shadow-sm opacity-90"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-4 left-6 w-1 h-1 rounded-full bg-[#D8C6E6] opacity-75"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-7 left-14 w-1 h-1 rounded-full bg-[#B8E0D2] opacity-60"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-3 left-24 w-1 h-1 rounded-full bg-[#F7F1E8] opacity-80"
  }), /*#__PURE__*/React.createElement("svg", {
    className: "w-full h-14",
    viewBox: "0 0 200 60",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,60 L0,45 L15,45 L15,35 L28,35 L28,48 L40,48 L40,30 L55,30 L55,42 L70,42 L70,25 L85,25 L85,50 L105,50 L105,32 L120,32 L120,44 L140,44 L140,28 L155,28 L155,46 L175,46 L175,38 L190,38 L190,48 L200,48 L200,60 Z",
    fill: "#24152F"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20,60 L20,50 L35,50 L35,40 L48,40 L48,60 Z",
    fill: "#1A0F23",
    opacity: "0.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "55",
    r: "2.5",
    fill: "#B8E0D2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "52",
    r: "2.5",
    fill: "#FF6B55"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "150",
    cy: "54",
    r: "2.5",
    fill: "#B8E0D2"
  })), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#B8E0D2]/40 via-[#FF6B55]/50 to-[#B8E0D2]/40"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 text-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold text-[#D8C6E6]/90 block"
  }, "Protected Navigation Shield"), /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] text-[#D8C6E6]/50"
  }, "Offline Local-First Storage"))), /*#__PURE__*/React.createElement("div", {
    className: "text-center px-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-[#D8C6E6]/40"
  }, "SafeRoute Prototype v2.5"))));
};

// === FILE: components/BottomNav.js ===
/**
 * SafeRoute Mobile Bottom Navigation Component
 * Optimized for mobile touch, hidden on desktop (lg:hidden).
 */
window.SafeHerBottomNav = function ({
  currentTab,
  setCurrentTab,
  activeSOS,
  activeJourney
}) {
  const navTabs = [{
    id: 'home',
    label: 'Home',
    icon: 'home'
  }, {
    id: 'saferoute',
    label: 'Journey',
    icon: 'navigation',
    badge: Boolean(activeJourney)
  }, {
    id: 'vault',
    label: 'History',
    icon: 'fileText'
  }, {
    id: 'safeplaces',
    label: 'Nearby',
    icon: 'hospital'
  }, {
    id: 'contacts',
    label: 'Contacts',
    icon: 'users'
  }];
  return /*#__PURE__*/React.createElement("nav", {
    className: "lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FFFFFF] border-t border-[#E6DDD4] shadow-lg safe-bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-around px-2 py-2"
  }, navTabs.map(tab => {
    const isActive = currentTab === tab.id || tab.id === 'saferoute' && currentTab === 'journey';
    return /*#__PURE__*/React.createElement("button", {
      key: tab.id,
      onClick: () => setCurrentTab(tab.id),
      className: `flex-1 py-1.5 flex flex-col items-center justify-center relative transition-all rounded-xl ${isActive ? 'text-[#24152F] font-bold' : 'text-[#6E6672] hover:text-[#24152F]'}`
    }, /*#__PURE__*/React.createElement("div", {
      className: `p-1 rounded-xl transition ${isActive ? 'bg-[#B8E0D2]' : ''}`
    }, /*#__PURE__*/React.createElement(window.LucideIcon, {
      name: tab.icon,
      size: 20,
      color: isActive ? '#24152F' : '#6E6672',
      strokeWidth: isActive ? 2.5 : 2
    })), /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] mt-0.5 tracking-tight font-medium"
    }, tab.label), tab.badge && /*#__PURE__*/React.createElement("span", {
      className: "absolute top-1.5 right-1/4 w-2 h-2 rounded-full bg-[#206352] animate-ping"
    }));
  })));
};

// === FILE: components/SOSButton.js ===
/**
 * SafeRoute Press-and-Hold SOS Button Component
 * Color: Electric Coral (#FF6B55) strictly for emergency actions.
 * Features 3-second radial progress hold to prevent accidental activation.
 */
window.SafeHerSOSButton = function ({
  onTrigger,
  holdDuration = 3,
  size = "large"
}) {
  const [holding, setHolding] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const holdInterval = React.useRef(null);
  const startTime = React.useRef(null);
  const startHold = e => {
    if (e.type === 'touchstart') e.preventDefault();
    setHolding(true);
    startTime.current = Date.now();
    setProgress(0);
    const totalMs = holdDuration * 1000;
    holdInterval.current = setInterval(() => {
      const elapsed = Date.now() - startTime.current;
      const pct = Math.min(100, elapsed / totalMs * 100);
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(holdInterval.current);
        setHolding(false);
        setProgress(0);
        onTrigger('hold_button');
      }
    }, 30);
  };
  const endHold = () => {
    if (holdInterval.current) {
      clearInterval(holdInterval.current);
    }
    setHolding(false);
    setProgress(0);
  };
  const isLarge = size === "large";
  const btnSize = isLarge ? "w-44 h-44 sm:w-48 sm:h-48" : "w-32 h-32";
  const radius = isLarge ? 88 : 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - progress / 100 * circumference;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center justify-center select-none py-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: `relative ${btnSize} flex items-center justify-center cursor-pointer group`
  }, /*#__PURE__*/React.createElement("div", {
    className: `absolute inset-0 rounded-full bg-[#FF6B55]/15 transition-all ${holding ? 'scale-110 bg-[#FF6B55]/30' : 'sr-sos-pulse'}`
  }), /*#__PURE__*/React.createElement("svg", {
    className: "absolute inset-0 w-full h-full -rotate-90 pointer-events-none",
    viewBox: "0 0 200 200"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "100",
    r: radius,
    stroke: "#E6DDD4",
    strokeWidth: "8",
    fill: "transparent"
  }), /*#__PURE__*/React.createElement("circle", {
    className: "progress-ring__circle",
    cx: "100",
    cy: "100",
    r: radius,
    stroke: "#FF6B55",
    strokeWidth: "8",
    strokeDasharray: circumference,
    strokeDashoffset: strokeDashoffset,
    strokeLinecap: "round",
    fill: "transparent"
  })), /*#__PURE__*/React.createElement("button", {
    onMouseDown: startHold,
    onMouseUp: endHold,
    onMouseLeave: endHold,
    onTouchStart: startHold,
    onTouchEnd: endHold,
    onTouchCancel: endHold,
    className: `relative z-10 rounded-full bg-gradient-to-tr from-[#E8533D] to-[#FF6B55] text-white flex flex-col items-center justify-center shadow-xl shadow-coral/30 active:scale-95 transition-transform ${isLarge ? 'w-36 h-36 sm:w-40 sm:h-40' : 'w-26 h-26'}`,
    style: {
      touchAction: 'none'
    }
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "alertTriangle",
    size: isLarge ? 38 : 28,
    color: "#FFFFFF",
    strokeWidth: 2.5
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-black text-2xl tracking-wider mt-1"
  }, "SOS"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold uppercase tracking-wider text-white/90"
  }, holding ? `${Math.ceil((100 - progress) / 33.3)}s Hold` : `Hold ${holdDuration}s`))), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-[#6E6672] text-center mt-3 max-w-xs font-medium"
  }, "Press and hold for ", holdDuration, " seconds to trigger emergency broadcast and location sharing."));
};

// === FILE: components/ActiveSOSModal.js ===
/**
 * SafeRoute Active Emergency SOS Screen Modal
 * Color: Electric Coral (#FF6B55) & Deep Plum (#24152F)
 * Provides real-time response assurance countdown, location broadcast, and false-alarm cancel PIN flow.
 */
window.SafeHerActiveSOSModal = function ({
  incident,
  onCancelSOS,
  onSimulateAck
}) {
  if (!incident) return null;
  const [pin, setPin] = React.useState('');
  const [cancelReason, setCancelReason] = React.useState('Accidental touch / False Alarm');
  const [cancelModalOpen, setCancelModalOpen] = React.useState(false);
  const [cancelError, setCancelError] = React.useState('');
  const [ackCountdown, setAckCountdown] = React.useState(60);

  // 60-second response assurance ticker
  React.useEffect(() => {
    const timer = setInterval(() => {
      setAckCountdown(prev => prev > 0 ? prev - 1 : 60);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const handleCancelSubmit = async e => {
    e.preventDefault();
    setCancelError('');
    const res = await onCancelSOS(incident.id, pin || '1234', cancelReason);
    if (!res || !res.success) {
      setCancelError(res?.error || 'Invalid PIN. (Demo PIN: 1234)');
    }
  };
  const handleQuickBypass = async () => {
    await onCancelSOS(incident.id, '1234', 'Quick Demo Bypass');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 bg-[#24152F]/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 overflow-y-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-2xl w-full mx-auto space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-5 border-2 border-[#FF6B55] shadow-2xl text-center space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFF2F0] text-[#E8533D] border border-[#FFC5BD] text-xs font-black uppercase tracking-wider sr-sos-pulse"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-[#FF6B55] animate-ping"
  }), /*#__PURE__*/React.createElement("span", null, "Emergency SOS Active")), /*#__PURE__*/React.createElement("h1", {
    className: "font-display text-2xl sm:text-3xl font-black text-[#24152F]"
  }, "Alert Prepared & Dispatched"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-[#6E6672]"
  }, "Incident ID: ", /*#__PURE__*/React.createElement("strong", {
    className: "font-mono text-[#24152F]"
  }, incident.id), " • Triggered at ", new Date(incident.triggered_at || incident.created_at).toLocaleTimeString())), /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-5 border border-[#E6DDD4] shadow-md space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-xs pb-2 border-b border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold uppercase tracking-wider text-[#6E6672]"
  }, "Live GPS Telemetry"), /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-[#206352] bg-[#E0F3EC] px-2.5 py-0.5 rounded-lg border border-[#B8E0D2]"
  }, "Precision: ±12m Lock")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-3 text-xs text-[#302A32]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-xl bg-[#F7F1E8] border border-[#E6DDD4] flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "mapPin",
    size: 20,
    color: "#FF6B55"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "font-bold block"
  }, "Current Coordinates"), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-[11px] text-[#6E6672]"
  }, incident.lat ? incident.lat.toFixed(5) : '28.49520', ", ", incident.lng ? incident.lng.toFixed(5) : '77.08950', " (DLF Cyber City corridor)"))), /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-2xl bg-[#F7F1E8] border border-[#E6DDD4] flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[#FF6B55]"
  }, "🎙️"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-[#24152F] block"
  }, "Audio Evidence Buffering"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-[#6E6672]"
  }, "AES-256 local demo buffer active"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1 bg-[#24152F] sound-bar rounded-full"
  }), /*#__PURE__*/React.createElement("span", {
    className: "w-1 bg-[#24152F] sound-bar rounded-full"
  }), /*#__PURE__*/React.createElement("span", {
    className: "w-1 bg-[#24152F] sound-bar rounded-full"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-5 border border-[#E6DDD4] shadow-md space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-xs pb-2 border-b border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold uppercase tracking-wider text-[#6E6672]"
  }, "Response Assurance Engine"), /*#__PURE__*/React.createElement("span", {
    className: "font-mono font-bold text-[#E8533D] bg-[#FFF2F0] px-2.5 py-0.5 rounded-lg border border-[#FFC5BD]"
  }, ackCountdown, "s to Escalation")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-[#6E6672]"
  }, "Simulated emergency notification sent to your trusted guardians. Tap below to simulate guardian acknowledgement:"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, (incident.notified_contacts || []).map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "flex items-center justify-between p-3 rounded-2xl bg-[#F7F1E8] border border-[#E6DDD4] text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-8 h-8 rounded-xl bg-[#24152F] text-white flex items-center justify-center font-bold text-xs"
  }, c.name ? c.name.charAt(0) : 'G'), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-[#24152F] block"
  }, c.name), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-[#6E6672] font-mono"
  }, c.phone))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onSimulateAck(incident.id, c.id),
    className: "px-3 py-1.5 rounded-xl bg-[#E0F3EC] hover:bg-[#B8E0D2] text-[#206352] font-bold text-[11px] border border-[#B8E0D2] transition active:scale-95"
  }, "✓ Simulate Ack"))))), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-[#EFE7F6] border border-[#D8C6E6] text-xs text-[#5F3F7A] flex items-start space-x-2.5"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "info",
    size: 16,
    color: "#5F3F7A",
    className: "mt-0.5"
  }), /*#__PURE__*/React.createElement("div", {
    className: "leading-relaxed"
  }, /*#__PURE__*/React.createElement("strong", null, "Demo Safety Notice:"), " SafeRoute is in prototype evaluation mode. Emergency alerts and police dispatch workflows are simulated. No real emergency services or cellular lines have been called."))), /*#__PURE__*/React.createElement("div", {
    className: "max-w-2xl w-full mx-auto pt-4 space-y-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setCancelModalOpen(true),
    className: "w-full py-4 rounded-2xl bg-[#FFFFFF] hover:bg-[#F7F1E8] text-[#24152F] font-black text-sm uppercase tracking-wider border-2 border-[#24152F] shadow-lg transition active:scale-98 flex items-center justify-center space-x-2"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "x",
    size: 18,
    color: "#24152F",
    strokeWidth: 2.5
  }), /*#__PURE__*/React.createElement("span", null, "I Am Safe — Cancel SOS Alert")), /*#__PURE__*/React.createElement("button", {
    onClick: handleQuickBypass,
    className: "w-full text-center text-xs text-[#E9DEEF] hover:underline py-1 font-medium"
  }, "⚡ 1-Tap Quick Demo Cancel (Bypass PIN)")), cancelModalOpen && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-60 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-6 max-w-sm w-full border border-[#E6DDD4] shadow-2xl text-[#302A32] space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-[#FFF2F0] text-[#FF6B55] border border-[#FFC5BD] mx-auto flex items-center justify-center text-xl mb-2"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "lock",
    size: 24,
    color: "#FF6B55"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-black font-display text-[#24152F]"
  }, "Cancel Emergency SOS"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-[#6E6672] mt-0.5"
  }, "Enter your 4-digit False-Alarm PIN to confirm your safety.")), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleCancelSubmit,
    className: "space-y-3.5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-[11px] font-bold text-[#6E6672] block mb-1"
  }, "Security PIN"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    maxLength: "4",
    required: true,
    placeholder: "••••",
    value: pin,
    onChange: e => setPin(e.target.value),
    className: "w-full bg-[#F7F1E8] border border-[#E6DDD4] rounded-xl p-3 text-center text-lg font-mono tracking-widest text-[#24152F] focus:outline-none focus:border-[#24152F]"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setPin('1234'),
    className: "mt-2 w-full text-center text-[11px] font-bold text-[#5F3F7A] bg-[#EFE7F6] py-1.5 rounded-lg border border-[#D8C6E6] hover:bg-[#D8C6E6]/40 transition"
  }, "💡 Demo PIN is 1234 (Click to Auto-Fill)")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-[11px] font-bold text-[#6E6672] block mb-1"
  }, "Cancellation Reason"), /*#__PURE__*/React.createElement("select", {
    value: cancelReason,
    onChange: e => setCancelReason(e.target.value),
    className: "w-full bg-[#F7F1E8] border border-[#E6DDD4] rounded-xl p-2.5 text-xs text-[#302A32] focus:outline-none"
  }, /*#__PURE__*/React.createElement("option", {
    value: "Accidental touch / False Alarm"
  }, "Accidental touch / False Alarm"), /*#__PURE__*/React.createElement("option", {
    value: "Reached safe location"
  }, "Reached safe location"), /*#__PURE__*/React.createElement("option", {
    value: "Threat resolved safely"
  }, "Threat resolved safely"), /*#__PURE__*/React.createElement("option", {
    value: "Testing demo functionality"
  }, "Testing demo functionality"))), cancelError && /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-[#FF6B55] font-bold text-center"
  }, cancelError), /*#__PURE__*/React.createElement("div", {
    className: "flex space-x-2 pt-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setCancelModalOpen(false),
    className: "flex-1 py-3 rounded-xl bg-[#F7F1E8] hover:bg-[#EFE6D8] text-[#302A32] text-xs font-bold border border-[#E6DDD4]"
  }, "Back"), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "flex-1 py-3 rounded-xl bg-[#24152F] hover:bg-[#190E21] text-white text-xs font-bold shadow-md"
  }, "Confirm Cancel"))))));
};

// === FILE: components/SafeArrivalModal.js ===
/**
 * SafeRoute Safe Arrival Verification Modal
 * Confirms that user reached destination safely with PIN 5678 or one-tap confirm.
 */
window.SafeHerSafeArrivalModal = function ({
  isOpen,
  onClose,
  journey,
  onConfirmArrival
}) {
  if (!isOpen || !journey) return null;
  const [pin, setPin] = React.useState('5678');
  const [notes, setNotes] = React.useState('Reached home safely. Thanks!');
  const [error, setError] = React.useState('');
  const [submitting, setSubmitting] = React.useState(false);
  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    const res = await onConfirmArrival(journey.id, pin, notes);
    setSubmitting(false);
    if (!res || !res.success) {
      setError(res?.error || 'Incorrect Safe Arrival PIN (Default: 5678)');
    } else {
      onClose();
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 bg-[#24152F]/75 backdrop-blur-sm flex items-center justify-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl max-w-sm w-full p-6 border border-[#E6DDD4] shadow-2xl text-[#302A32] space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-14 h-14 rounded-full bg-[#E0F3EC] text-[#206352] mx-auto flex items-center justify-center text-2xl mb-2 shadow-sm border border-[#B8E0D2]"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "checkCircle2",
    size: 28,
    color: "#206352",
    strokeWidth: 2.5
  })), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-black font-display text-[#24152F]"
  }, "Safe Arrival Verification"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-[#6E6672] mt-1"
  }, "Arrived at ", /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-[#24152F]"
  }, journey.destination_name))), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "space-y-3.5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-[11px] font-bold text-[#6E6672] block mb-1"
  }, "Safe Arrival Verification PIN"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    maxLength: "4",
    value: pin,
    onChange: e => setPin(e.target.value),
    className: "w-full bg-[#F7F1E8] border border-[#E6DDD4] rounded-xl p-2.5 text-center text-base font-mono tracking-widest text-[#24152F] focus:outline-none focus:border-[#24152F]",
    placeholder: "••••"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setPin('5678'),
    className: "mt-1.5 w-full text-center text-[10px] text-[#5F3F7A] font-semibold hover:underline"
  }, "💡 Demo Arrival PIN is 5678 (Click to Auto-Fill)")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-[11px] font-bold text-[#6E6672] block mb-1"
  }, "Arrival Note for Guardians"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: notes,
    onChange: e => setNotes(e.target.value),
    className: "w-full bg-[#F7F1E8] border border-[#E6DDD4] rounded-xl px-3 py-2 text-xs text-[#302A32] focus:outline-none focus:border-[#24152F]"
  })), error && /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-[#FF6B55] text-center font-bold"
  }, error), /*#__PURE__*/React.createElement("div", {
    className: "flex space-x-2 pt-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    className: "flex-1 py-3 rounded-xl bg-[#F7F1E8] hover:bg-[#EFE6D8] text-[#302A32] text-xs font-bold border border-[#E6DDD4]"
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: submitting,
    className: "flex-1 py-3 rounded-xl bg-[#24152F] hover:bg-[#190E21] text-white text-xs font-bold shadow-md transition active:scale-95"
  }, submitting ? 'Verifying...' : 'Confirm Arrival')))));
};

// === FILE: components/LeafletMap.js ===
/**
 * SafeRoute Leaflet Interactive Map Component
 * Powered by OpenStreetMap standard tiles (Zero API Key required, 100% Free).
 * Includes auto-fitBounds, invalidateSize on resize/tab change, and waypoint pins.
 */
window.SafeHerLeafletMap = function ({
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
      osmTileLayer.on('tileerror', function (error, tile) {
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
          L.marker(startPt, {
            icon: startIcon
          }).addTo(routesLayer.current).bindPopup(`<strong>Origin</strong><br/><span style="font-size:11px;">DLF Cyber City, Gurugram</span>`);

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
          L.marker(endPt, {
            icon: endIcon
          }).addTo(routesLayer.current).bindPopup(`<strong>Destination</strong><br/><span style="font-size:11px;">Saket Metro Station, South Delhi</span>`);
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
      L.marker([userLocation.lat, userLocation.lng], {
        icon: userIcon
      }).addTo(markersLayer.current).bindPopup(`<strong>Your Live Position</strong><br><span style="font-size:11px; color:#6E6672;">SafeRoute GPS Active</span>`);
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
        const m = L.marker([place.lat, place.lng], {
          icon: placeIcon
        }).addTo(markersLayer.current);
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
  return /*#__PURE__*/React.createElement("div", {
    className: "relative rounded-2xl overflow-hidden shadow-sm border border-[#E6DDD4]",
    style: {
      height
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: mapRef,
    style: {
      width: '100%',
      height: '100%'
    }
  }));
};

// === FILE: views/HomeView.js ===
/**
 * SafeRoute Screen 1 — Home Dashboard
 * Exact desktop hierarchy:
 * Main column (62%):
 *   1. Welcome Hero (Greeting, User Name, Heading, CTA buttons, Sunset vector artwork)
 *   4. Active Journey Card (Monitored state when running, inviting empty state when inactive)
 *   3. Journey Planner (Where heading, start point, mode selectors with mint active state, 5 quick shortcuts: Home 🏠, College 🎓, Metro 🚇, PG/Hostel 🏢, Work 💼, Plan button)
 *   7. Recent Journeys (Origin, destination, date/time, mode, duration, status, View All action)
 * Right column (38%):
 *   2. Current Location Card (Mint circular icon, heading, actual/demo location, permission button)
 *   5. SOS Panel (Deep plum #24152F, coral badge, large coral SOS action, supporting indicators)
 *   6. Trusted Guardians (Avatars, count connected, Open Contacts button)
 *   8. Nearby Help (Compact categories: Hospitals, Police, Pharmacies, Help Points, link to SafePlaces)
 *   9. Safety Checklist (Derived states for location, contacts, notifications)
 */
window.SafeHerHomeView = function ({
  userProfile,
  activeJourney,
  activeSOS,
  contacts = [],
  safePlaces = [],
  onNavigate,
  onTriggerSOS,
  locationStatus = 'prompt',
  onRequestLocation,
  onQuickPlan
}) {
  const [destinationInput, setDestinationInput] = React.useState('');
  const [destinationError, setDestinationError] = React.useState('');
  const [startPointInput, setStartPointInput] = React.useState('Current Location (DLF Cyber City)');
  const [selectedMode, setSelectedMode] = React.useState('cab');

  // Compute local greeting based on hour
  const currentHour = new Date().getHours();
  const timeGreeting = currentHour < 12 ? 'Good morning' : currentHour < 17 ? 'Good afternoon' : 'Good evening';
  const displayName = userProfile?.name?.split(' ')[0] || 'Aanya';
  const history = window.SafeRouteStore ? window.SafeRouteStore.getJourneyHistory() : [];
  const recentJourneys = history.slice(0, 3);
  const primaryContact = contacts.find(c => c.is_primary) || contacts[0];
  const modes = [{
    id: 'walk',
    label: 'Walk',
    icon: 'footprints'
  }, {
    id: 'bus',
    label: 'Bus',
    icon: 'bus'
  }, {
    id: 'auto',
    label: 'Auto',
    icon: 'car'
  }, {
    id: 'cab',
    label: 'Car',
    icon: 'navigation'
  }];
  const quickShortcuts = [{
    label: 'Home 🏠',
    address: 'Saket, New Delhi'
  }, {
    label: 'College 🎓',
    address: 'Delhi University South Campus'
  }, {
    label: 'Metro 🚇',
    address: 'Hauz Khas Metro Interchange'
  }, {
    label: 'PG / Hostel 🏢',
    address: 'Green Park Girls Hostel'
  }, {
    label: 'Work 💼',
    address: 'DLF CyberHub Central Plaza'
  }];
  const handleDestinationChange = e => {
    // Strictly prevent numbers in destination input
    const clean = e.target.value.replace(/[0-9]/g, '');
    setDestinationInput(clean);
    if (destinationError) setDestinationError('');
  };
  const handleStartPointChange = e => {
    // Strictly prevent numbers in starting point input
    const clean = e.target.value.replace(/[0-9]/g, '');
    setStartPointInput(clean);
    if (destinationError) setDestinationError('');
  };
  const handlePlanSubmit = e => {
    if (e && e.preventDefault) e.preventDefault();
    setDestinationError('');
    const finalDest = (destinationInput || '').trim();
    if (!finalDest) {
      setDestinationError('Please enter a destination name.');
      return;
    }
    if (/\d/.test(finalDest)) {
      setDestinationError('Destination cannot contain numbers. Please use letters only.');
      return;
    }
    if (finalDest.length < 3) {
      setDestinationError('Destination must contain at least 3 letters.');
      return;
    }
    onQuickPlan(finalDest, selectedMode);
    onNavigate('saferoute');
  };
  const handleShortcutClick = shortcut => {
    setDestinationInput(shortcut.address.replace(/[0-9]/g, ''));
    if (destinationError) setDestinationError('');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto space-y-6 pb-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl border border-[#E6DDD4] shadow-sm overflow-hidden relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row items-stretch"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-6 sm:p-7 md:w-3/5 flex flex-col justify-between space-y-4 z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFEAE7] text-[#FF6B55] border border-[#FF6B55]/30 text-xs font-black tracking-wide uppercase"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-[#FF6B55] animate-ping"
  }), /*#__PURE__*/React.createElement("span", null, "SafeRoute Active")), /*#__PURE__*/React.createElement("div", {
    className: "pt-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-[#6E6672] uppercase tracking-wider block"
  }, timeGreeting, ", ", displayName), /*#__PURE__*/React.createElement("h1", {
    className: "font-display text-2xl sm:text-3xl font-black text-[#24152F] tracking-tight leading-snug"
  }, "Ready for your next journey?")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-[#6E6672] leading-relaxed"
  }, "Plan your route, stay connected with your trusted contacts, and keep track of your journey.")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-3 pt-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('saferoute'),
    className: "px-5 py-3 rounded-2xl bg-[#FF6B55] hover:bg-[#E8533D] text-white font-black text-xs uppercase tracking-wider shadow-md shadow-coral/25 transition active:scale-95 flex items-center space-x-2"
  }, /*#__PURE__*/React.createElement("span", null, "Plan a Safe Journey"), /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "arrowRight",
    size: 15,
    color: "#FFFFFF"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('vault'),
    className: "px-4 py-3 rounded-2xl bg-[#F7F1E8] hover:bg-[#EFE6D8] border border-[#E6DDD4] text-[#24152F] font-bold text-xs transition"
  }, "View Recent Journeys"))), /*#__PURE__*/React.createElement("div", {
    className: "md:w-2/5 min-h-[190px] relative bg-gradient-to-br from-[#FCEBE7] via-[#F2D7E0] to-[#E3C9E2] flex items-end justify-center overflow-hidden"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 320 220",
    className: "w-full h-full object-cover select-none pointer-events-none",
    preserveAspectRatio: "xMidYMid slice",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "srSky",
    x1: "0%",
    y1: "0%",
    x2: "0%",
    y2: "100%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#311B3E"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "30%",
    stopColor: "#5E386C"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "60%",
    stopColor: "#EB725D"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "85%",
    stopColor: "#F9BC8F"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#FFF2E7"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "srSunGlow",
    cx: "50%",
    cy: "50%",
    r: "50%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#FFF5E0",
    stopOpacity: "1"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "35%",
    stopColor: "#FFC875",
    stopOpacity: "0.8"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "75%",
    stopColor: "#FF6B55",
    stopOpacity: "0.3"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#FF6B55",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "320",
    height: "220",
    fill: "url(#srSky)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "160",
    cy: "130",
    r: "42",
    fill: "url(#srSunGlow)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "160",
    cy: "130",
    r: "18",
    fill: "#FFF9ED"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0,150 Q70,138 140,145 T320,140 L320,220 L0,220 Z",
    fill: "#583563",
    opacity: "0.45"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M30,165 L30,145 L45,145 L45,165 L70,165 L70,132 L85,132 L85,165 L110,165 L110,140 L125,140 L125,165 L150,165 L150,128 L165,128 L165,165 L190,165 L190,138 L205,138 L205,165 L230,165 L230,145 L245,145 L245,165 Z",
    fill: "#4B2754",
    opacity: "0.65"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10,175 L10,148 L25,148 L25,175 L50,175 L50,136 L62,136 L62,175 L80,175 L80,144 L95,144 L95,175 L120,175 L120,130 L128,122 L136,130 L136,175 L160,175 L160,148 L175,148 L175,175 L200,175 L200,142 L215,142 L215,175 Z",
    fill: "#24152F"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "54",
    y: "145",
    width: "2",
    height: "3",
    fill: "#FFE3B8",
    opacity: "0.9"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "58",
    y: "152",
    width: "2",
    height: "3",
    fill: "#FFE3B8",
    opacity: "0.8"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "85",
    y: "150",
    width: "2",
    height: "3",
    fill: "#FFE3B8",
    opacity: "0.85"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "125",
    y: "138",
    width: "2",
    height: "3",
    fill: "#FFE3B8",
    opacity: "0.9"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "165",
    y: "155",
    width: "2",
    height: "3",
    fill: "#FFE3B8",
    opacity: "0.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20,192 C80,178 150,185 220,187",
    stroke: "#FF6B55",
    strokeWidth: "2",
    strokeDasharray: "4 3",
    opacity: "0.85"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M30,202 C100,188 170,195 240,196",
    stroke: "#B8E0D2",
    strokeWidth: "1.8",
    opacity: "0.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M185,220 Q215,160 320,150 L320,220 Z",
    fill: "#24152F"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M210,172 L320,160",
    stroke: "#3D254F",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M258,162 C256,150 260,138 267,133 C273,129 280,131 283,140 C286,148 284,162 282,172 Z",
    fill: "#24152F",
    stroke: "#FF8A7A",
    strokeWidth: "0.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M252,139 C250,134 254,129 260,130 L263,143 C262,150 256,153 252,149 Z",
    fill: "#3D254F",
    stroke: "#D8C6E6",
    strokeWidth: "0.8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "272",
    cy: "123",
    r: "7",
    fill: "#24152F"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M267,120 C263,117 255,119 252,123 C255,125 261,124 266,124 Z",
    fill: "#24152F"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M267,172 L266,204 L271,204 L274,174 L278,204 L283,204 L281,172 Z",
    fill: "#190E21"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M100,75 Q104,71 108,75 Q112,71 116,75",
    stroke: "#482753",
    strokeWidth: "1.2",
    fill: "none",
    opacity: "0.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M125,85 Q128,82 131,85 Q134,82 137,85",
    stroke: "#482753",
    strokeWidth: "1",
    fill: "none",
    opacity: "0.5"
  })), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-xl bg-[#24152F]/80 backdrop-blur-sm border border-[#D8C6E6]/30 text-[10px] font-bold text-[#F7F1E8]"
  }, /*#__PURE__*/React.createElement("span", null, "Delhi NCR Safe Corridors"))))), activeJourney ? /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-6 border-2 border-[#B8E0D2] shadow-sm space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-3 border-b border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-3 h-3 rounded-full bg-[#206352] animate-ping"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-sm font-black text-[#24152F]"
  }, "Safe Journey Currently Monitored"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-[#6E6672]"
  }, "Heading to ", activeJourney.destination_name))), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-black px-3 py-1 rounded-full bg-[#E0F3EC] text-[#206352] border border-[#B8E0D2] uppercase tracking-wider"
  }, "Live Watch • ", activeJourney.transport_mode)), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-[#F7F1E8] p-3 rounded-2xl border border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-[#6E6672] uppercase font-bold block"
  }, "Started"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-[#24152F]"
  }, new Date(activeJourney.started_at).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-[#F7F1E8] p-3 rounded-2xl border border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-[#6E6672] uppercase font-bold block"
  }, "Next Check-In"), /*#__PURE__*/React.createElement("span", {
    className: "font-mono font-black text-[#206352]"
  }, Math.floor((activeJourney.checkin_remaining_sec || 600) / 60), "m remaining")), /*#__PURE__*/React.createElement("div", {
    className: "bg-[#F7F1E8] p-3 rounded-2xl border border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-[#6E6672] uppercase font-bold block"
  }, "Mode"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-[#24152F] capitalize"
  }, activeJourney.transport_mode)), /*#__PURE__*/React.createElement("div", {
    className: "bg-[#F7F1E8] p-3 rounded-2xl border border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-[#6E6672] uppercase font-bold block"
  }, "Sharing"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-[#206352]"
  }, "Active (", contacts.length, " Guardians)"))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('journey'),
    className: "w-full py-3.5 rounded-2xl bg-[#24152F] hover:bg-[#190E21] text-white text-xs font-bold shadow-md transition flex items-center justify-center space-x-2"
  }, /*#__PURE__*/React.createElement("span", null, "Open Active Journey Controls & Check-In"), /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "arrowRight",
    size: 15,
    color: "#FFFFFF"
  }))) : /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-6 border border-[#E6DDD4] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-[#E0F3EC] text-[#206352] border border-[#B8E0D2] flex items-center justify-center shrink-0"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "shieldCheck",
    size: 24,
    color: "#206352"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-sm text-[#24152F]"
  }, "No Active Journey Monitored"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-[#6E6672] mt-0.5 max-w-md"
  }, "Start a monitored journey anytime to activate automated periodic check-ins and share live coordinates with your trusted contacts."))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('saferoute'),
    className: "px-4 py-2.5 rounded-2xl bg-[#24152F] hover:bg-[#190E21] text-white font-bold text-xs uppercase tracking-wider shrink-0 shadow-sm transition"
  }, "Start a Safe Journey →")), /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-6 sm:p-7 border border-[#E6DDD4] shadow-sm space-y-5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EFE7F6] text-[#5F3F7A] border border-[#D8C6E6] text-xs font-black tracking-wide uppercase mb-2"
  }, /*#__PURE__*/React.createElement("span", null, "Safe Corridor Routing")), /*#__PURE__*/React.createElement("h2", {
    className: "font-display text-xl sm:text-2xl font-black text-[#24152F]"
  }, "Where are you heading?"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-[#6E6672] mt-0.5"
  }, "Enter your destination to compare verified lighting, transit options, and guardian watch.")), /*#__PURE__*/React.createElement("form", {
    onSubmit: handlePlanSubmit,
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-[11px] font-bold uppercase tracking-wider text-[#6E6672] block mb-1"
  }, "Starting Point"), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#206352]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2.5 h-2.5 rounded-full bg-[#206352]"
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: startPointInput,
    onChange: handleStartPointChange,
    placeholder: "Enter starting point (letters only)",
    className: "w-full bg-[#F7F1E8] border border-[#E6DDD4] rounded-2xl py-3 pl-9 pr-4 text-xs font-semibold text-[#24152F] focus:outline-none focus:border-[#24152F] transition"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-[11px] font-bold uppercase tracking-wider text-[#6E6672] block mb-1"
  }, "Destination"), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6E6672]"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "search",
    size: 18,
    color: "#6E6672"
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Enter destination (e.g. Saket Metro, South Delhi)",
    value: destinationInput,
    onChange: handleDestinationChange,
    className: `w-full bg-[#F7F1E8] border rounded-2xl py-3.5 pl-11 pr-4 text-sm font-semibold text-[#24152F] placeholder-[#6E6672]/70 focus:outline-none transition ${destinationError ? 'border-[#FF6B55]' : 'border-[#E6DDD4] focus:border-[#24152F]'}`
  })), destinationError ? /*#__PURE__*/React.createElement("div", {
    className: "mt-1.5 p-2 rounded-xl bg-[#FFF2F0] border border-[#FFC5BD] text-[#E8533D] text-[11px] font-bold flex items-center space-x-1.5"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "alertTriangle",
    size: 13,
    color: "#E8533D"
  }), /*#__PURE__*/React.createElement("span", null, destinationError)) : /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-[#6E6672] mt-1 block"
  }, "Letters only — numbers are not accepted in destination.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-[11px] font-bold uppercase tracking-wider text-[#6E6672] block mb-2"
  }, "Transport Mode"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 sm:grid-cols-4 gap-2.5"
  }, modes.map(m => {
    const isSelected = selectedMode === m.id;
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: m.id,
      onClick: () => setSelectedMode(m.id),
      className: `py-3 px-2 rounded-2xl border text-xs font-black flex flex-col items-center justify-center space-y-1.5 transition ${isSelected ? 'bg-[#B8E0D2] text-[#206352] border-[#8ACDBA] shadow-sm' : 'bg-[#F7F1E8] text-[#302A32] border-[#E6DDD4] hover:bg-[#EFE6D8]'}`
    }, /*#__PURE__*/React.createElement(window.LucideIcon, {
      name: m.icon,
      size: 20,
      color: isSelected ? '#206352' : '#6E6672'
    }), /*#__PURE__*/React.createElement("span", null, m.label));
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-[11px] font-bold uppercase tracking-wider text-[#6E6672] block mb-2"
  }, "Quick Destination Shortcuts"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, quickShortcuts.map((s, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    type: "button",
    onClick: () => handleShortcutClick(s),
    className: "px-3 py-1.5 rounded-xl bg-[#F7F1E8] hover:bg-[#EFE6D8] border border-[#E6DDD4] text-xs font-semibold text-[#24152F] transition active:scale-95"
  }, s.label)))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "w-full py-4 rounded-2xl bg-[#24152F] hover:bg-[#190E21] text-white font-black text-xs uppercase tracking-wider shadow-md transition active:scale-98 flex items-center justify-center space-x-2"
  }, /*#__PURE__*/React.createElement("span", null, "Plan My Journey"), /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "arrowRight",
    size: 16,
    color: "#FFFFFF"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-6 border border-[#E6DDD4] shadow-sm space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-2 border-b border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "clock",
    size: 18,
    color: "#24152F"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-xs uppercase tracking-wider text-[#24152F]"
  }, "Recent Journeys")), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('vault'),
    className: "text-xs font-bold text-[#5F3F7A] hover:underline flex items-center space-x-1"
  }, /*#__PURE__*/React.createElement("span", null, "View All History"), /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "arrowRight",
    size: 13,
    color: "#5F3F7A"
  }))), recentJourneys.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-[#6E6672] py-2"
  }, "No past journeys saved yet.") : /*#__PURE__*/React.createElement("div", {
    className: "space-y-2.5"
  }, recentJourneys.map((j, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => {
      onQuickPlan(j.destination_name, j.transport_mode);
      onNavigate('saferoute');
    },
    className: "p-3.5 rounded-2xl bg-[#F7F1E8] hover:bg-[#EFE6D8] border border-[#E6DDD4] cursor-pointer flex items-center justify-between transition group text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-0.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-[#24152F] group-hover:text-[#5F3F7A] transition"
  }, j.destination_name), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E0F3EC] text-[#206352] border border-[#B8E0D2] uppercase"
  }, j.status || 'Completed')), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-[#6E6672] block"
  }, "From ", j.origin_name, " • ", j.duration_min || 32, " min • Mode: ", /*#__PURE__*/React.createElement("strong", {
    className: "capitalize text-[#24152F]"
  }, j.transport_mode))), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-black text-[#24152F] group-hover:translate-x-1 transition-transform"
  }, "Repeat →")))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-5 border border-[#E6DDD4] shadow-sm space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-2 border-b border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-8 h-8 rounded-full bg-[#E0F3EC] text-[#206352] flex items-center justify-center border border-[#B8E0D2]"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "mapPin",
    size: 16,
    color: "#206352"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-xs uppercase tracking-wider text-[#24152F]"
  }, "Current Location"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-[#6E6672]"
  }, "Device telemetry & pin"))), /*#__PURE__*/React.createElement("span", {
    className: `font-bold px-2.5 py-0.5 rounded-full text-[10px] ${locationStatus === 'granted' ? 'bg-[#E0F3EC] text-[#206352] border border-[#B8E0D2]' : 'bg-[#FFF2F0] text-[#E8533D] border border-[#FFC5BD]'}`
  }, locationStatus === 'granted' ? 'Live GPS' : 'Default Pin')), /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-2xl bg-[#F7F1E8] border border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-[#24152F] block"
  }, locationStatus === 'granted' ? 'DLF Cyber City, Sector 24, Gurugram' : 'DLF Cyber City, Gurugram (Simulated Demo Pin)'), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-[#6E6672] mt-0.5 block"
  }, "Lat: 28.4952° N • Long: 77.0895° E • Accuracy: 12m")), /*#__PURE__*/React.createElement("button", {
    onClick: onRequestLocation,
    className: "w-full py-2.5 rounded-xl bg-[#F7F1E8] hover:bg-[#EFE6D8] border border-[#E6DDD4] text-xs font-bold text-[#24152F] transition flex items-center justify-center space-x-1.5"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "navigation",
    size: 14,
    color: "#24152F"
  }), /*#__PURE__*/React.createElement("span", null, locationStatus === 'granted' ? 'Refresh GPS Coordinates' : 'Allow Browser Geolocation Access →'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-[#24152F] text-white rounded-3xl p-6 border border-[#3D254F] shadow-lg space-y-4 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FF6B55]/20 text-[#FF6B55] border border-[#FF6B55]/40 text-xs font-black tracking-wide uppercase"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-[#FF6B55] animate-ping"
  }), /*#__PURE__*/React.createElement("span", null, "Emergency")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "font-display text-xl font-black text-white"
  }, "Universal SOS"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-[#D8C6E6]/80 max-w-xs mx-auto leading-relaxed"
  }, "Press and hold to broadcast instant distress coordinates to your guardians and trigger safe corridor response.")), /*#__PURE__*/React.createElement("div", {
    className: "py-2"
  }, /*#__PURE__*/React.createElement(window.SafeHerSOSButton, {
    onTrigger: onTriggerSOS,
    holdDuration: userProfile?.hold_duration_sec || 3,
    size: "large"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 border-t border-[#3D254F] grid grid-cols-3 gap-2 text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-2 rounded-xl bg-[#190E21] border border-[#3D254F]/70"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] text-[#D8C6E6]/70 uppercase font-black block"
  }, "Location"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-bold text-[#B8E0D2] flex items-center space-x-1"
  }, /*#__PURE__*/React.createElement("span", null, "Continuous"))), /*#__PURE__*/React.createElement("div", {
    className: "p-2 rounded-xl bg-[#190E21] border border-[#3D254F]/70"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] text-[#D8C6E6]/70 uppercase font-black block"
  }, "Guardians"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-bold text-[#FF6B55]"
  }, contacts.length, " Connected")), /*#__PURE__*/React.createElement("div", {
    className: "p-2 rounded-xl bg-[#190E21] border border-[#3D254F]/70"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] text-[#D8C6E6]/70 uppercase font-black block"
  }, "Assistance"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-bold text-[#D8C6E6]"
  }, "Havens Ready")))), /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-5 border border-[#E6DDD4] shadow-sm space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-2 border-b border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "users",
    size: 16,
    color: "#24152F"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-xs uppercase tracking-wider text-[#24152F]"
  }, "Trusted Guardians")), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E0F3EC] text-[#206352] border border-[#B8E0D2]"
  }, contacts.length, " Active")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, contacts.slice(0, 3).map((c, idx) => /*#__PURE__*/React.createElement("div", {
    key: c.id || idx,
    className: "p-2.5 rounded-2xl bg-[#F7F1E8] border border-[#E6DDD4] flex items-center justify-between text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-8 h-8 rounded-xl bg-[#24152F] text-white flex items-center justify-center font-bold text-xs"
  }, c.name ? c.name.charAt(0) : 'G'), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-[#24152F] block"
  }, c.name), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-[#6E6672]"
  }, c.relationship, " • ", c.phone))), c.is_primary && /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#FFEAE7] text-[#FF6B55] border border-[#FF6B55]/30"
  }, "PRIMARY")))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('contacts'),
    className: "w-full py-2.5 rounded-xl bg-[#F7F1E8] hover:bg-[#EFE6D8] border border-[#E6DDD4] text-xs font-bold text-[#24152F] transition flex items-center justify-center space-x-1.5"
  }, /*#__PURE__*/React.createElement("span", null, "Open Contacts (", contacts.length, ") →"))), /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-5 border border-[#E6DDD4] shadow-sm space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-2 border-b border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "hospital",
    size: 16,
    color: "#206352"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-xs uppercase tracking-wider text-[#24152F]"
  }, "Nearby Assistance")), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('safeplaces'),
    className: "text-xs font-bold text-[#5F3F7A] hover:underline"
  }, "View Map →")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2 text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => onNavigate('safeplaces'),
    className: "p-3 rounded-2xl bg-[#F7F1E8] hover:bg-[#EFE6D8] border border-[#E6DDD4] cursor-pointer transition"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2 text-[#24152F] font-bold"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "hospital",
    size: 15,
    color: "#206352"
  }), /*#__PURE__*/React.createElement("span", null, "Hospitals")), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-[#6E6672] block mt-1"
  }, "Fortis & Max ER (1.2 km)")), /*#__PURE__*/React.createElement("div", {
    onClick: () => onNavigate('safeplaces'),
    className: "p-3 rounded-2xl bg-[#F7F1E8] hover:bg-[#EFE6D8] border border-[#E6DDD4] cursor-pointer transition"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2 text-[#24152F] font-bold"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "phone",
    size: 15,
    color: "#FF6B55"
  }), /*#__PURE__*/React.createElement("span", null, "Police Stations")), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-[#6E6672] block mt-1"
  }, "Pink Booth (0.8 km)")), /*#__PURE__*/React.createElement("div", {
    onClick: () => onNavigate('safeplaces'),
    className: "p-3 rounded-2xl bg-[#F7F1E8] hover:bg-[#EFE6D8] border border-[#E6DDD4] cursor-pointer transition"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2 text-[#24152F] font-bold"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "plus",
    size: 15,
    color: "#5F3F7A"
  }), /*#__PURE__*/React.createElement("span", null, "Pharmacies")), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-[#6E6672] block mt-1"
  }, "Apollo 24/7 (0.4 km)")), /*#__PURE__*/React.createElement("div", {
    onClick: () => onNavigate('safeplaces'),
    className: "p-3 rounded-2xl bg-[#F7F1E8] hover:bg-[#EFE6D8] border border-[#E6DDD4] cursor-pointer transition"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2 text-[#24152F] font-bold"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "shieldCheck",
    size: 15,
    color: "#24152F"
  }), /*#__PURE__*/React.createElement("span", null, "Help Points")), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-[#6E6672] block mt-1"
  }, "Metro Women Desk (0.6 km)")))), /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-5 border border-[#E6DDD4] shadow-sm space-y-3 text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-2 border-b border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "checkCircle2",
    size: 16,
    color: "#206352"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-xs uppercase tracking-wider text-[#24152F]"
  }, "Safety Checklist")), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E0F3EC] text-[#206352] border border-[#B8E0D2]"
  }, "Verified")), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2 text-[11px] text-[#302A32]"
  }, /*#__PURE__*/React.createElement("li", {
    className: "flex items-center justify-between p-2 rounded-xl bg-[#F7F1E8] border border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "mapPin",
    size: 14,
    color: locationStatus === 'granted' ? '#206352' : '#FF6B55'
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-semibold"
  }, "Location Access")), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-[#206352]"
  }, locationStatus === 'granted' ? '✓ Live GPS Active' : '● Default Pin Active')), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center justify-between p-2 rounded-xl bg-[#F7F1E8] border border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "users",
    size: 14,
    color: "#206352"
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-semibold"
  }, "Guardians Configured")), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-[#206352]"
  }, "✓ ", contacts.length, " Contacts Active")), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center justify-between p-2 rounded-xl bg-[#F7F1E8] border border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "bell",
    size: 14,
    color: "#206352"
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-semibold"
  }, "Emergency Alerts")), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-[#206352]"
  }, "✓ Ready & Armed")))))));
};

// === FILE: views/SafeRouteView.js ===
/**
 * SafeRoute Screen 2 — Safe Journey Planning
 * Complete journey planning flow with swap waypoints, transport mode selector,
 * check-in interval setting, trusted contacts share toggle, and demo map preview.
 */
window.SafeHerSafeRouteView = function ({
  routes,
  selectedRouteId,
  setSelectedRouteId,
  onStartJourney,
  onNavigate,
  defaultDestination = 'Saket Metro Station, South Delhi',
  defaultMode = 'cab',
  contacts
}) {
  const [origin, setOrigin] = React.useState('DLF Cyber City, Gurugram');
  const [dest, setDest] = React.useState(defaultDestination);
  const [destError, setDestError] = React.useState('');
  const [transportMode, setTransportMode] = React.useState(defaultMode);
  const [checkinInterval, setCheckinInterval] = React.useState(10);
  const [shareContacts, setShareContacts] = React.useState(true);
  React.useEffect(() => {
    if (defaultDestination) setDest(defaultDestination.replace(/[0-9]/g, ''));
  }, [defaultDestination]);
  React.useEffect(() => {
    if (defaultMode) setTransportMode(defaultMode);
  }, [defaultMode]);
  const handleSwap = () => {
    const tmp = origin;
    setOrigin(dest);
    setDest(tmp);
    if (destError) setDestError('');
  };
  const handleOriginChange = e => {
    // Strictly prevent numbers in origin
    const val = e.target.value.replace(/[0-9]/g, '');
    setOrigin(val);
    if (destError) setDestError('');
  };
  const handleDestChange = e => {
    // Strictly prevent numbers in destination
    const val = e.target.value.replace(/[0-9]/g, '');
    setDest(val);
    if (destError) setDestError('');
  };
  const handleStart = () => {
    setDestError('');
    const trimmedDest = (dest || '').trim();
    const trimmedOrigin = (origin || '').trim();
    if (!trimmedDest) {
      setDestError('Please enter a destination.');
      return;
    }
    if (/\d/.test(trimmedDest)) {
      setDestError('Destination cannot contain numbers. Please use letters only.');
      return;
    }
    if (trimmedDest.length < 3) {
      setDestError('Destination name must contain at least 3 letters.');
      return;
    }
    if (/\d/.test(trimmedOrigin)) {
      setDestError('Starting point cannot contain numbers.');
      return;
    }
    onStartJourney({
      origin_name: trimmedOrigin,
      destination_name: trimmedDest,
      transport_mode: transportMode,
      checkin_interval_min: parseInt(checkinInterval),
      share_contacts: shareContacts
    });
  };
  const modes = [{
    id: 'walk',
    label: 'Walk',
    icon: 'footprints',
    duration: '2h 10m'
  }, {
    id: 'bus',
    label: 'Bus',
    icon: 'bus',
    duration: '55 min'
  }, {
    id: 'auto',
    label: 'Auto',
    icon: 'car',
    duration: '40 min'
  }, {
    id: 'cab',
    label: 'Car / Cab',
    icon: 'navigation',
    duration: '32 min'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 max-w-6xl mx-auto pb-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-6 sm:p-7 border border-[#E6DDD4] shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EFE7F6] text-[#5F3F7A] border border-[#D8C6E6] text-xs font-bold uppercase tracking-wider mb-2"
  }, /*#__PURE__*/React.createElement("span", null, "Journey Planner")), /*#__PURE__*/React.createElement("h1", {
    className: "font-display text-2xl sm:text-3xl font-black text-[#24152F]"
  }, "Plan Your Monitored Journey"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-[#6E6672] mt-1 max-w-xl"
  }, "Configure your route, establish an automated check-in interval, and share live transit status with your trusted guardians.")), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-[#206352] bg-[#E0F3EC] px-3.5 py-2 rounded-2xl border border-[#B8E0D2] font-semibold self-start md:self-auto"
  }, "✓ Autonomous Check-In Watchdog Ready")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6 space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-6 border border-[#E6DDD4] shadow-sm space-y-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xs font-bold uppercase tracking-wider text-[#6E6672]"
  }, "Route Waypoints"), /*#__PURE__*/React.createElement("div", {
    className: "relative space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-[11px] font-bold text-[#6E6672] block mb-1"
  }, "Starting Point"), /*#__PURE__*/React.createElement("div", {
    className: "relative flex items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute left-3 w-3 h-3 rounded-full bg-[#206352]"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: origin,
    onChange: handleOriginChange,
    placeholder: "Enter starting point (letters only)",
    className: "w-full bg-[#F7F1E8] border border-[#E6DDD4] rounded-2xl py-3 pl-9 pr-3 text-xs font-semibold text-[#24152F] focus:outline-none focus:border-[#24152F]"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end -my-1 pr-3"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: handleSwap,
    className: "p-1.5 rounded-xl bg-[#FFFFFF] border border-[#E6DDD4] text-[#24152F] hover:bg-[#F7F1E8] shadow-sm text-xs font-bold transition flex items-center space-x-1",
    title: "Swap start and destination"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "arrowLeftRight",
    size: 14,
    color: "#24152F"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px]"
  }, "Swap"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-[11px] font-bold text-[#6E6672] block mb-1"
  }, "Destination"), /*#__PURE__*/React.createElement("div", {
    className: "relative flex items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute left-3 w-3 h-3 rounded-full bg-[#FF6B55]"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: dest,
    onChange: handleDestChange,
    placeholder: "Enter destination (e.g. Saket Metro, South Delhi)",
    className: `w-full bg-[#F7F1E8] border rounded-2xl py-3 pl-9 pr-3 text-xs font-semibold text-[#24152F] focus:outline-none transition ${destError ? 'border-[#FF6B55]' : 'border-[#E6DDD4] focus:border-[#24152F]'}`
  })), destError ? /*#__PURE__*/React.createElement("div", {
    className: "mt-1.5 p-2 rounded-xl bg-[#FFF2F0] border border-[#FFC5BD] text-[#E8533D] text-[11px] font-bold flex items-center space-x-1.5"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "alertTriangle",
    size: 13,
    color: "#E8533D"
  }), /*#__PURE__*/React.createElement("span", null, destError)) : /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-[#6E6672] mt-1 block"
  }, "Letters only — numbers are not accepted in destination.")))), /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-6 border border-[#E6DDD4] shadow-sm space-y-3"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xs font-bold uppercase tracking-wider text-[#6E6672]"
  }, "Transport Mode"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 sm:grid-cols-4 gap-2.5"
  }, modes.map(m => {
    const isSelected = transportMode === m.id;
    return /*#__PURE__*/React.createElement("button", {
      key: m.id,
      onClick: () => setTransportMode(m.id),
      className: `p-3 rounded-2xl border text-xs font-black flex flex-col items-center justify-center space-y-1 transition ${isSelected ? 'bg-[#B8E0D2] text-[#206352] border-[#8ACDBA] shadow-sm' : 'bg-[#F7F1E8] text-[#302A32] border-[#E6DDD4] hover:bg-[#EFE6D8]'}`
    }, /*#__PURE__*/React.createElement(window.LucideIcon, {
      name: m.icon,
      size: 20,
      color: isSelected ? '#206352' : '#6E6672'
    }), /*#__PURE__*/React.createElement("span", null, m.label), /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] font-normal opacity-80"
    }, m.duration));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-6 border border-[#E6DDD4] shadow-sm space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-xs font-bold uppercase tracking-wider text-[#24152F]"
  }, "Automated Check-In Interval"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-[#6E6672]"
  }, "SafeRoute will prompt you periodically during transit to confirm you are safe.")), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-xs font-bold px-2.5 py-1 rounded-xl bg-[#E0F3EC] text-[#206352] border border-[#B8E0D2]"
  }, "Every ", checkinInterval, "m")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-2 pt-1 text-xs font-bold"
  }, [5, 10, 15].map(interval => /*#__PURE__*/React.createElement("button", {
    key: interval,
    type: "button",
    onClick: () => setCheckinInterval(interval),
    className: `py-2.5 rounded-xl border transition ${checkinInterval === interval ? 'bg-[#24152F] text-white border-[#24152F]' : 'bg-[#F7F1E8] text-[#302A32] border-[#E6DDD4] hover:bg-[#EFE6D8]'}`
  }, interval, " Minutes")))), /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-5 border border-[#E6DDD4] shadow-sm flex items-center justify-between text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-0.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-[#24152F] block"
  }, "Share Live Trip with Trusted Contacts"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-[#6E6672]"
  }, "Notifies ", contacts.length, " guardians with live simulated tracking link")), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: shareContacts,
    onChange: e => setShareContacts(e.target.checked),
    className: "w-5 h-5 accent-[#24152F] rounded cursor-pointer"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: handleStart,
    className: "w-full py-4 rounded-2xl bg-[#24152F] hover:bg-[#190E21] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-plum/20 transition active:scale-98 flex items-center justify-center space-x-2"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "shieldCheck",
    size: 18,
    color: "#B8E0D2"
  }), /*#__PURE__*/React.createElement("span", null, "Start Safe Journey Watch"))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6 space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-6 border border-[#E6DDD4] shadow-sm space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-2 border-b border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-xs uppercase tracking-wider text-[#24152F]"
  }, "Route Preview & Telemetry"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-[#6E6672]"
  }, "Clear, honest transit metrics")), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#EFE7F6] text-[#5F3F7A] border border-[#D8C6E6]"
  }, "Demo Map Preview")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-2 text-center text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-2xl bg-[#F7F1E8] border border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-[#6E6672] uppercase font-bold block"
  }, "Distance"), /*#__PURE__*/React.createElement("span", {
    className: "font-black text-[#24152F] text-base"
  }, "14.2 ", /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-normal"
  }, "km"))), /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-2xl bg-[#F7F1E8] border border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-[#6E6672] uppercase font-bold block"
  }, "Est. Time"), /*#__PURE__*/React.createElement("span", {
    className: "font-black text-[#24152F] text-base"
  }, "32 ", /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-normal"
  }, "min"))), /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-2xl bg-[#F7F1E8] border border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-[#6E6672] uppercase font-bold block"
  }, "Safe Havens"), /*#__PURE__*/React.createElement("span", {
    className: "font-black text-[#206352] text-base"
  }, "5 ", /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-normal"
  }, "Points")))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl overflow-hidden border border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement(window.SafeHerLeafletMap, {
    routes: routes,
    selectedRouteId: selectedRouteId,
    center: [28.5080, 77.1500],
    zoom: 12,
    height: "340px"
  })), /*#__PURE__*/React.createElement("div", {
    className: "p-3.5 rounded-2xl bg-[#F7F1E8] border border-[#E6DDD4] text-[11px] text-[#6E6672] leading-relaxed"
  }, /*#__PURE__*/React.createElement("strong", null, "Honest Route Information:"), " SafeRoute visualizes routes through main arterial corridors (Mehrauli-Gurugram Highway). While streets are generally well-lit, no route can be guaranteed 100% safe. Always remain aware of your surroundings.")))));
};

// === FILE: views/JourneyView.js ===
/**
 * SafeRoute Screen 5 — Active Journey Monitoring & Check-In Watchdog
 * Provides live ticking check-in countdown, "I'm safe" check-in action,
 * pause/resume/end actions, missed check-in alerts, and breadcrumb map.
 */
window.SafeHerJourneyView = function ({
  journey,
  onStartNewJourney,
  onCheckIn,
  onPauseJourney,
  onResumeJourney,
  onOpenSafeArrivalModal,
  onTriggerSOS,
  onSimulateAction
}) {
  const [checkinRemainingSec, setCheckinRemainingSec] = React.useState(journey ? journey.checkin_remaining_sec || 600 : 600);
  const [checkinSuccess, setCheckinSuccess] = React.useState(false);
  const [missedAlert, setMissedAlert] = React.useState(false);

  // Sync state with journey props
  React.useEffect(() => {
    if (journey && journey.checkin_remaining_sec !== undefined) {
      setCheckinRemainingSec(journey.checkin_remaining_sec);
    }
  }, [journey?.id]);

  // Live Check-In Ticking Timer
  React.useEffect(() => {
    if (!journey || journey.status !== 'active') return;
    const interval = setInterval(() => {
      setCheckinRemainingSec(prev => {
        if (prev <= 1) {
          setMissedAlert(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [journey?.status]);
  const formatTimer = secs => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };
  const handleSafeCheckIn = () => {
    setMissedAlert(false);
    setCheckinSuccess(true);
    const resetSec = (journey?.checkin_interval_min || 10) * 60;
    setCheckinRemainingSec(resetSec);
    onCheckIn(resetSec);
    setTimeout(() => setCheckinSuccess(false), 3000);
  };

  // If no journey active, display an invitation to plan a journey
  if (!journey || journey.status === 'completed' || journey.status === 'cancelled') {
    return /*#__PURE__*/React.createElement("div", {
      className: "max-w-2xl mx-auto py-12 px-4 text-center space-y-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-16 h-16 rounded-3xl bg-[#E0F3EC] text-[#206352] mx-auto flex items-center justify-center border border-[#B8E0D2] shadow-sm"
    }, /*#__PURE__*/React.createElement(window.LucideIcon, {
      name: "navigation",
      size: 32,
      color: "#206352"
    })), /*#__PURE__*/React.createElement("h2", {
      className: "font-display text-2xl font-black text-[#24152F]"
    }, "No Active Journey"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-[#6E6672] max-w-sm mx-auto leading-relaxed"
    }, "You are not currently running a monitored trip. Plan your route to activate live corridor watch and periodic check-in prompts."), /*#__PURE__*/React.createElement("button", {
      onClick: () => onStartNewJourney(),
      className: "px-6 py-3.5 rounded-2xl bg-[#24152F] hover:bg-[#190E21] text-white font-bold text-xs uppercase tracking-wider shadow-md transition"
    }, "Plan a New Journey →"));
  }
  const isPaused = journey.status === 'paused';
  const breadcrumbs = journey.breadcrumbs || [];
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 max-w-6xl mx-auto pb-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-6 border border-[#E6DDD4] shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2 mb-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: `w-2.5 h-2.5 rounded-full ${isPaused ? 'bg-[#FF6B55]' : 'bg-[#206352] animate-ping'}`
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold uppercase tracking-wider text-[#24152F]"
  }, isPaused ? 'Journey Paused' : 'Safe Journey Watch Active')), /*#__PURE__*/React.createElement("h1", {
    className: "font-display text-2xl font-black text-[#24152F]"
  }, "En Route to ", journey.destination_name), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-[#6E6672]"
  }, "Started from ", journey.origin_name, " at ", new Date(journey.started_at).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  }), " • Mode: ", /*#__PURE__*/React.createElement("strong", {
    className: "capitalize text-[#24152F]"
  }, journey.transport_mode))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2"
  }, isPaused ? /*#__PURE__*/React.createElement("button", {
    onClick: onResumeJourney,
    className: "px-4 py-2.5 rounded-xl bg-[#206352] text-white font-bold text-xs flex items-center space-x-1.5 shadow-sm"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "play",
    size: 14,
    color: "#FFFFFF"
  }), /*#__PURE__*/React.createElement("span", null, "Resume Trip")) : /*#__PURE__*/React.createElement("button", {
    onClick: onPauseJourney,
    className: "px-4 py-2.5 rounded-xl bg-[#F7F1E8] text-[#302A32] hover:bg-[#EFE6D8] border border-[#E6DDD4] font-bold text-xs flex items-center space-x-1.5"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "pause",
    size: 14,
    color: "#302A32"
  }), /*#__PURE__*/React.createElement("span", null, "Pause Trip")), /*#__PURE__*/React.createElement("button", {
    onClick: onOpenSafeArrivalModal,
    className: "px-4 py-2.5 rounded-xl bg-[#24152F] hover:bg-[#190E21] text-white font-bold text-xs flex items-center space-x-1.5 shadow-sm"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "checkCircle2",
    size: 14,
    color: "#B8E0D2"
  }), /*#__PURE__*/React.createElement("span", null, "End Journey")))), missedAlert && /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFF2F0] border-2 border-[#FF6B55] rounded-3xl p-5 text-[#24152F] shadow-md space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2 text-[#E8533D] font-black text-sm"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "alertTriangle",
    size: 18,
    color: "#FF6B55"
  }), /*#__PURE__*/React.createElement("span", null, "Missed Safety Check-In Alert")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-[#6E6672] leading-relaxed"
  }, "Your scheduled check-in window elapsed without confirmation. Please confirm you are safe or trigger emergency escalation."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row gap-2 pt-1"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleSafeCheckIn,
    className: "flex-1 py-3 rounded-xl bg-[#206352] hover:bg-[#144538] text-white font-bold text-xs shadow-sm flex items-center justify-center space-x-2"
  }, /*#__PURE__*/React.createElement("span", null, "✓ I Am Safe (Reset Watchdog)")), /*#__PURE__*/React.createElement("button", {
    onClick: () => onTriggerSOS('missed_checkin_escalate'),
    className: "flex-1 py-3 rounded-xl bg-[#FF6B55] hover:bg-[#E8533D] text-white font-bold text-xs shadow-sm flex items-center justify-center space-x-2"
  }, /*#__PURE__*/React.createElement("span", null, "🚨 Escalate to Trusted Contacts")))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-6 border border-[#E6DDD4] shadow-sm text-center space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-xs pb-2 border-b border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold uppercase tracking-wider text-[#6E6672]"
  }, "Next Safety Check-In"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#EFE7F6] text-[#5F3F7A]"
  }, "Every ", journey.checkin_interval_min || 10, "m")), /*#__PURE__*/React.createElement("div", {
    className: "py-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-4xl sm:text-5xl font-black text-[#24152F] tracking-tight"
  }, formatTimer(checkinRemainingSec)), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-[#6E6672] mt-1"
  }, "Tap below whenever you feel comfortable to log safety.")), /*#__PURE__*/React.createElement("button", {
    onClick: handleSafeCheckIn,
    className: `w-full py-4 rounded-2xl font-black text-sm uppercase tracking-wider transition shadow-md active:scale-98 flex items-center justify-center space-x-2 ${checkinSuccess ? 'bg-[#E0F3EC] text-[#206352] border-2 border-[#206352]' : 'bg-[#B8E0D2] hover:bg-[#8ACDBA] text-[#24152F]'}`
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "checkCircle2",
    size: 20,
    color: "#24152F",
    strokeWidth: 2.5
  }), /*#__PURE__*/React.createElement("span", null, checkinSuccess ? "Checked In — You're Safe!" : "I'm Safe (Check In Now)")), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-[#6E6672] text-left pt-2 border-t border-[#E6DDD4] flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", null, "Completed check-ins:"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-[#24152F]"
  }, journey.total_checkins || 0, " times"))), /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-5 border border-[#E6DDD4] shadow-sm space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-2 border-b border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-sm"
  }, "🧪"), /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-xs uppercase tracking-wider text-[#24152F]"
  }, "Demo Simulation Controls")), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold text-[#5F3F7A] bg-[#EFE7F6] px-2 py-0.5 rounded"
  }, "Evaluator Mode")), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-[#6E6672]"
  }, "Use these buttons to test SafeRoute's response to edge cases during evaluation:"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2 text-xs"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onSimulateAction('step'),
    className: "p-2.5 rounded-xl bg-[#F7F1E8] hover:bg-[#EFE6D8] border border-[#E6DDD4] text-[#24152F] font-bold text-left transition"
  }, "▶️ Advance 1.5 km"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setCheckinRemainingSec(0);
      setMissedAlert(true);
    },
    className: "p-2.5 rounded-xl bg-[#FFF2F0] hover:bg-[#FFE2DE] border border-[#FFC5BD] text-[#E8533D] font-bold text-left transition"
  }, "⚠️ Trigger Missed Check-In")))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-5 border border-[#E6DDD4] shadow-sm space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-2 border-b border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-xs font-bold uppercase tracking-wider text-[#24152F]"
  }, "Live Transit Breadcrumbs"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-[#6E6672]"
  }, "Real-time location trail & accuracy radius")), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-semibold text-[#206352] bg-[#E0F3EC] px-2.5 py-0.5 rounded-lg border border-[#B8E0D2]"
  }, breadcrumbs.length, " Points Sampled")), /*#__PURE__*/React.createElement(window.SafeHerLeafletMap, {
    userLocation: {
      lat: journey.current_lat || 28.4952,
      lng: journey.current_lng || 77.0895,
      accuracy: 25
    },
    breadcrumbs: breadcrumbs,
    center: [journey.current_lat || 28.4952, journey.current_lng || 77.0895],
    zoom: 13,
    height: "440px"
  })))));
};

// === FILE: views/EmergencyView.js ===
/**
 * SafeRoute Screen 3 — SOS Emergency Flow
 * Color: Electric Coral (#FF6B55) & Deep Plum (#24152F).
 * Deliberate interaction, location capture, guardian notification list, and honest demo disclaimer.
 */
window.SafeHerEmergencyView = function ({
  userProfile,
  contacts,
  activeSOS,
  onTriggerSOS,
  locationStatus
}) {
  const [instantMode, setInstantMode] = React.useState(false);
  const emergencyContacts = contacts.filter(c => c.notify_emergency);
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 max-w-5xl mx-auto pb-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border-2 border-[#FF6B55]/40 shadow-sm text-center space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFF2F0] text-[#E8533D] border border-[#FFC5BD] text-xs font-bold uppercase tracking-wider"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "shieldAlert",
    size: 14,
    color: "#FF6B55"
  }), /*#__PURE__*/React.createElement("span", null, "Universal Emergency Alert")), /*#__PURE__*/React.createElement("h1", {
    className: "font-display text-2xl sm:text-4xl font-black text-[#24152F]"
  }, "Emergency SOS Center"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs sm:text-sm text-[#6E6672] max-w-xl mx-auto leading-relaxed"
  }, "Universal transport-independent emergency activation. Instantly notifies your trusted contacts, shares live GPS coordinates, and starts the response assurance escalation timer.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6 space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#E6DDD4] shadow-sm flex flex-col items-center justify-center text-center space-y-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xs font-bold uppercase tracking-wider text-[#6E6672]"
  }, "Deliberate SOS Trigger"), /*#__PURE__*/React.createElement(window.SafeHerSOSButton, {
    onTrigger: onTriggerSOS,
    holdDuration: userProfile?.hold_duration_sec || 3,
    size: "large"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-full pt-4 border-t border-[#E6DDD4] flex items-center justify-between text-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-[#302A32]"
  }, "Rapid 1-Tap Trigger Mode"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setInstantMode(!instantMode),
    className: `px-3 py-1.5 rounded-full text-xs font-bold transition ${instantMode ? 'bg-[#E8533D] text-white shadow-sm' : 'bg-[#F7F1E8] text-[#6E6672] border border-[#E6DDD4]'}`
  }, instantMode ? 'ARMED (1-Tap)' : 'Safe (3s Hold)')), instantMode && /*#__PURE__*/React.createElement("button", {
    onClick: () => onTriggerSOS('tap_rapid'),
    className: "w-full py-3.5 rounded-xl bg-[#E8533D] hover:bg-[#C93B26] text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-coral/30 sr-sos-pulse"
  }, "🚨 Instant SOS Trigger (Single Tap)")), /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-5 border border-[#E6DDD4] shadow-sm space-y-2.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-xs pb-2 border-b border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold uppercase tracking-wider text-[#6E6672]"
  }, "Location Payload"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-[#206352]"
  }, "Ready for broadcast")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-3 text-xs text-[#302A32]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-8 h-8 rounded-lg bg-[#F7F1E8] flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "mapPin",
    size: 16,
    color: "#FF6B55"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "font-bold block"
  }, "DLF Cyber City, Gurugram"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-[#6E6672] font-mono"
  }, "28.4952° N, 77.0895° E • Precision: ±12m"))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6 space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-6 border border-[#E6DDD4] shadow-sm space-y-3"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-xs font-bold uppercase tracking-wider text-[#24152F]"
  }, "Guardians Configured for Emergency Alert (", emergencyContacts.length, ")"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-[#6E6672]"
  }, "The moment SOS is activated, this simulated SMS payload is prepared for your selected guardians:"), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-[#F7F1E8] border border-[#E6DDD4] font-mono text-xs text-[#302A32] space-y-1.5 leading-relaxed"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[#E8533D] font-bold block"
  }, "[SafeRoute Emergency Alert - DEMO]"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, userProfile?.name || 'Aanya Sharma'), " has activated Emergency SOS!"), /*#__PURE__*/React.createElement("p", {
    className: "text-[#5F3F7A] underline"
  }, "https://saferoute.demo/live/track-demo?pin=1234"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-[#6E6672] block pt-1 border-t border-[#E6DDD4]"
  }, "Response Assurance: Please acknowledge within 60s or alert will escalate.")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 pt-1"
  }, emergencyContacts.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    className: "flex items-center justify-between p-3 rounded-2xl bg-[#FFFFFF] border border-[#E6DDD4] text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-7 h-7 rounded-lg bg-[#24152F] text-white flex items-center justify-center font-bold text-xs"
  }, c.name.charAt(0)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-[#24152F] block"
  }, c.name), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-[#6E6672]"
  }, c.relationship, " • ", c.phone))), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E0F3EC] text-[#206352]"
  }, "TIER ", c.tier || 1))))), /*#__PURE__*/React.createElement("div", {
    className: "p-5 rounded-3xl bg-[#EFE7F6] border border-[#D8C6E6] text-xs text-[#5F3F7A] space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2 font-bold text-sm"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "info",
    size: 16,
    color: "#5F3F7A"
  }), /*#__PURE__*/React.createElement("span", null, "Prototype Evaluation Notice")), /*#__PURE__*/React.createElement("p", {
    className: "leading-relaxed text-[11px] text-[#302A32]"
  }, "This is an interactive design prototype. When you activate SOS, an internal simulated incident is recorded in local demo history. No real police control rooms, emergency helplines (112), or real cellular SMS messages are dispatched.")))));
};

// === FILE: views/SafePlacesView.js ===
/**
 * SafeRoute Screen 6 — Nearby Help & Assistance Directory
 * Color: Warm Ivory (#F7F1E8) & Deep Plum (#24152F).
 * Shows nearby hospitals, police stations, 24/7 pharmacies, and Pink Helpdesks
 * with interactive map, search filter, and simulated phone call dialog.
 */
window.SafeHerSafePlacesView = function ({
  safePlaces = [],
  locationStatus = 'prompt'
}) {
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedPlace, setSelectedPlace] = React.useState(null);
  const [callModalPlace, setCallModalPlace] = React.useState(null);
  const categories = [{
    id: 'all',
    label: 'All Sanctuaries',
    icon: 'shield'
  }, {
    id: 'pink_booth',
    label: 'Pink Police Booths',
    icon: 'shieldCheck'
  }, {
    id: 'police_station',
    label: 'Police Stations',
    icon: 'phone'
  }, {
    id: 'pharmacy_247',
    label: '24/7 Pharmacies',
    icon: 'plus'
  }, {
    id: 'hospital',
    label: 'Hospitals & ER',
    icon: 'hospital'
  }];
  const filteredPlaces = safePlaces.filter(p => {
    const matchCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchQuery = !searchQuery.trim() || p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchQuery;
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 max-w-6xl mx-auto pb-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-6 sm:p-7 border border-[#E6DDD4] shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E0F3EC] text-[#206352] border border-[#B8E0D2] text-xs font-bold uppercase tracking-wider mb-2"
  }, /*#__PURE__*/React.createElement("span", null, "Verified Sanctuaries")), /*#__PURE__*/React.createElement("h1", {
    className: "font-display text-2xl sm:text-3xl font-black text-[#24152F]"
  }, "Nearby Help & Safe Havens"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-[#6E6672] mt-1 max-w-xl"
  }, "Community assistance points, 24/7 open pharmacies, hospitals, and designated pink police helpdesks within your vicinity.")), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-[#5F3F7A] bg-[#EFE7F6] px-3.5 py-2 rounded-2xl border border-[#D8C6E6] font-semibold self-start md:self-auto"
  }, "Sample Demo Data • 5 Verified Points")), /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-5 border border-[#E6DDD4] shadow-sm space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6E6672]"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "search",
    size: 18,
    color: "#6E6672"
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Search assistance points by name or street (e.g. Apollo, Metro, Max)...",
    value: searchQuery,
    onChange: e => setSearchQuery(e.target.value),
    className: "w-full bg-[#F7F1E8] border border-[#E6DDD4] rounded-2xl py-3 pl-11 pr-4 text-xs font-medium text-[#24152F] placeholder-[#6E6672]/70 focus:outline-none focus:border-[#24152F]"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2 overflow-x-auto pb-1"
  }, categories.map(c => {
    const isSelected = activeCategory === c.id;
    return /*#__PURE__*/React.createElement("button", {
      key: c.id,
      onClick: () => setActiveCategory(c.id),
      className: `px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition flex items-center space-x-1.5 ${isSelected ? 'bg-[#24152F] text-white shadow-sm' : 'bg-[#F7F1E8] text-[#302A32] border border-[#E6DDD4] hover:bg-[#EFE6D8]'}`
    }, /*#__PURE__*/React.createElement(window.LucideIcon, {
      name: c.icon,
      size: 14,
      color: isSelected ? '#B8E0D2' : '#6E6672'
    }), /*#__PURE__*/React.createElement("span", null, c.label));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6 space-y-3.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-xs text-[#6E6672] px-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold uppercase tracking-wider text-[#24152F]"
  }, filteredPlaces.length, " Havens in Vicinity"), /*#__PURE__*/React.createElement("span", null, "Sorted by Proximity")), filteredPlaces.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-8 text-center border border-[#E6DDD4] shadow-sm text-xs text-[#6E6672]"
  }, "No assistance points found matching \"", searchQuery, "\".") : filteredPlaces.map(place => {
    const isPink = place.category === 'pink_booth';
    return /*#__PURE__*/React.createElement("div", {
      key: place.id,
      className: `sr-card p-5 transition-all ${isPink ? 'border-2 border-[#D8C6E6] bg-gradient-to-r from-[#FFFFFF] to-[#F7F3FB]' : 'border-[#E6DDD4]'}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start justify-between gap-2"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-sm text-[#24152F]"
    }, place.name), isPink && /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#C2185B] text-white"
    }, "PINK BOOTH")), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-[#6E6672] mt-0.5"
    }, place.address)), /*#__PURE__*/React.createElement("div", {
      className: "text-right shrink-0"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-black text-[#24152F] block"
    }, place.distance_km, " km"), /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] text-[#206352] font-semibold"
    }, "~", Math.round(place.distance_km * 12), " min walk"))), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap gap-1.5 mt-3"
    }, place.is_open_247 && /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#E0F3EC] text-[#206352] border border-[#B8E0D2]"
    }, "✓ Open 24/7"), /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#F7F1E8] text-[#302A32] border border-[#E6DDD4]"
    }, place.category_label)), /*#__PURE__*/React.createElement("div", {
      className: "flex space-x-2 mt-4 pt-3 border-t border-[#E6DDD4]"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setCallModalPlace(place),
      className: "flex-1 py-2 rounded-xl bg-[#F7F1E8] hover:bg-[#EFE6D8] text-[#24152F] text-xs font-bold transition flex items-center justify-center space-x-1.5 border border-[#E6DDD4]"
    }, /*#__PURE__*/React.createElement(window.LucideIcon, {
      name: "phone",
      size: 14,
      color: "#24152F"
    }), /*#__PURE__*/React.createElement("span", null, "Simulate Call")), /*#__PURE__*/React.createElement("a", {
      href: `https://maps.google.com/?q=${place.lat},${place.lng}`,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "flex-1 py-2 rounded-xl bg-[#24152F] hover:bg-[#190E21] text-white text-xs font-bold transition flex items-center justify-center space-x-1.5 shadow-sm"
    }, /*#__PURE__*/React.createElement(window.LucideIcon, {
      name: "navigation",
      size: 14,
      color: "#B8E0D2"
    }), /*#__PURE__*/React.createElement("span", null, "Directions"))));
  })), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-5 border border-[#E6DDD4] shadow-sm space-y-3 sticky top-24"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-2 border-b border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-xs font-bold uppercase tracking-wider text-[#24152F]"
  }, "Safe Havens Geo-Map"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-[#6E6672]"
  }, "Click pin for address & emergency details")), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E0F3EC] text-[#206352]"
  }, "Active Radius")), /*#__PURE__*/React.createElement(window.SafeHerLeafletMap, {
    safePlaces: filteredPlaces,
    center: [28.4890, 77.1000],
    zoom: 13,
    onSelectPlace: p => setSelectedPlace(p),
    height: "500px"
  })))), callModalPlace && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 bg-[#24152F]/75 backdrop-blur-sm flex items-center justify-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-6 max-w-sm w-full border border-[#E6DDD4] text-[#302A32] text-center shadow-2xl space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 rounded-full bg-[#E0F3EC] text-[#206352] mx-auto flex items-center justify-center text-2xl border border-[#B8E0D2] animate-pulse"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "phoneCall",
    size: 28,
    color: "#206352"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-black font-display text-[#24152F]"
  }, callModalPlace.name), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-[#6E6672] mt-1 font-mono"
  }, callModalPlace.phone || '+91 124 238 6100')), /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-2xl bg-[#E0F3EC] border border-[#B8E0D2] text-xs text-[#206352] font-semibold"
  }, "Simulated Emergency Line Connected (Safe Haven Helpdesk)"), /*#__PURE__*/React.createElement("div", {
    className: "bg-[#EFE7F6] border border-[#D8C6E6] p-3 rounded-xl text-[10px] text-[#5F3F7A] text-left"
  }, /*#__PURE__*/React.createElement("strong", null, "Demo Disclaimer:"), " This call is simulated inside the SafeRoute prototype. No carrier telecommunication lines are opened."), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCallModalPlace(null),
    className: "w-full py-3 rounded-xl bg-[#24152F] hover:bg-[#190E21] text-white text-xs font-bold shadow-md"
  }, "End Call"))));
};

// === FILE: views/VaultView.js ===
/**
 * SafeRoute Screen 7 — My Journeys & Vault
 * History of past monitored trips, dates, durations, check-in records,
 * and emergency event dossiers saved in LocalStorage.
 */
window.SafeHerVaultView = function ({
  completedJourneys = [],
  sosHistory = [],
  onClearHistory
}) {
  const [activeTab, setActiveTab] = React.useState('journeys'); // 'journeys' | 'sos'

  const handleClear = () => {
    if (confirm('Are you sure you want to clear your local demo journey history?')) {
      onClearHistory();
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 max-w-6xl mx-auto pb-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-6 sm:p-7 border border-[#E6DDD4] shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EFE7F6] text-[#5F3F7A] border border-[#D8C6E6] text-xs font-bold uppercase tracking-wider mb-2"
  }, /*#__PURE__*/React.createElement("span", null, "Audit & Archive")), /*#__PURE__*/React.createElement("h1", {
    className: "font-display text-2xl sm:text-3xl font-black text-[#24152F]"
  }, "My Journeys & Safety Vault"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-[#6E6672] mt-1 max-w-xl"
  }, "Review past monitored journeys, safe arrival timestamps, check-in compliance logs, and emergency event dossiers.")), /*#__PURE__*/React.createElement("div", {
    className: "flex bg-[#F7F1E8] p-1 rounded-2xl border border-[#E6DDD4] self-start md:self-auto text-xs font-bold"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveTab('journeys'),
    className: `px-4 py-2 rounded-xl transition ${activeTab === 'journeys' ? 'bg-[#24152F] text-white shadow-sm' : 'text-[#6E6672] hover:text-[#24152F]'}`
  }, "Past Journeys (", completedJourneys.length, ")"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveTab('sos'),
    className: `px-4 py-2 rounded-xl transition ${activeTab === 'sos' ? 'bg-[#24152F] text-white shadow-sm' : 'text-[#6E6672] hover:text-[#24152F]'}`
  }, "SOS Dossiers (", sosHistory.length, ")"))), activeTab === 'journeys' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-xs text-[#6E6672] px-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold uppercase tracking-wider text-[#24152F]"
  }, "Archived Monitored Trips"), completedJourneys.length > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: handleClear,
    className: "text-[#FF6B55] hover:text-[#E8533D] font-bold hover:underline"
  }, "Clear Journey History")), completedJourneys.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-12 text-center border border-[#E6DDD4] shadow-sm space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-14 h-14 rounded-2xl bg-[#F7F1E8] mx-auto flex items-center justify-center text-[#24152F]"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "fileText",
    size: 24,
    color: "#24152F"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-display text-base font-bold text-[#24152F]"
  }, "No Past Journeys Found"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-[#6E6672] max-w-sm mx-auto"
  }, "Once you start and complete a trip using Safe Journey Watch, its record will be preserved here in LocalStorage.")) : /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-4"
  }, completedJourneys.map(j => {
    const isCompleted = j.status === 'completed';
    return /*#__PURE__*/React.createElement("div", {
      key: j.id,
      className: "sr-card p-5 border-[#E6DDD4] flex flex-col justify-between space-y-3"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start justify-between"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] font-bold text-[#6E6672] uppercase block tracking-wider"
    }, new Date(j.started_at).toLocaleDateString([], {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })), /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-sm text-[#24152F] mt-0.5"
    }, j.origin_name, " → ", j.destination_name)), /*#__PURE__*/React.createElement("span", {
      className: `text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase ${isCompleted ? 'bg-[#E0F3EC] text-[#206352] border border-[#B8E0D2]' : 'bg-[#FFF2F0] text-[#E8533D] border border-[#FFC5BD]'}`
    }, isCompleted ? 'SAFE ARRIVAL ✓' : j.status)), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-[#E6DDD4] text-xs"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-[#F7F1E8] p-2.5 rounded-xl border border-[#E6DDD4]"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[9px] text-[#6E6672] uppercase font-bold block"
    }, "Mode"), /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-[#24152F] capitalize"
    }, j.transport_mode)), /*#__PURE__*/React.createElement("div", {
      className: "bg-[#F7F1E8] p-2.5 rounded-xl border border-[#E6DDD4]"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[9px] text-[#6E6672] uppercase font-bold block"
    }, "Duration"), /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-[#24152F]"
    }, j.duration_min || 32, " min")), /*#__PURE__*/React.createElement("div", {
      className: "bg-[#F7F1E8] p-2.5 rounded-xl border border-[#E6DDD4]"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[9px] text-[#6E6672] uppercase font-bold block"
    }, "Check-Ins"), /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-[#206352]"
    }, j.total_checkins || 1, " logged")))), j.arrival_notes && /*#__PURE__*/React.createElement("p", {
      className: "text-[11px] text-[#5F3F7A] bg-[#EFE7F6] p-2.5 rounded-xl border border-[#D8C6E6]"
    }, /*#__PURE__*/React.createElement("strong", null, "Arrival Note:"), " ", j.arrival_notes));
  }))), activeTab === 'sos' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-xs text-[#6E6672] px-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold uppercase tracking-wider text-[#24152F]"
  }, "Emergency Event Dossiers")), sosHistory.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-12 text-center border border-[#E6DDD4] shadow-sm space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-14 h-14 rounded-2xl bg-[#E0F3EC] mx-auto flex items-center justify-center text-[#206352]"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "shieldCheck",
    size: 24,
    color: "#206352"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-display text-base font-bold text-[#24152F]"
  }, "No Emergency Events Recorded"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-[#6E6672] max-w-sm mx-auto"
  }, "No SOS emergency alerts have been triggered in this demo session.")) : /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, sosHistory.map(inc => /*#__PURE__*/React.createElement("div", {
    key: inc.id,
    className: "sr-card p-5 border-[#E6DDD4] space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "font-mono font-bold text-xs text-[#24152F]"
  }, inc.id), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-[#6E6672] block"
  }, "Triggered ", new Date(inc.triggered_at).toLocaleString())), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#E0F3EC] text-[#206352] border border-[#B8E0D2] uppercase"
  }, "Resolved via ", inc.resolution_reason || 'PIN')), /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-2xl bg-[#F7F1E8] border border-[#E6DDD4] text-xs space-y-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-[11px] text-[#302A32]"
  }, "Coordinates: ", inc.lat?.toFixed(5), ", ", inc.lng?.toFixed(5), " • Trigger: ", inc.trigger_type), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-[#6E6672] block"
  }, "Local simulated audio buffer hash preserved.")))))));
};

// === FILE: views/ContactsView.js ===
/**
 * SafeRoute Screen 4 — Trusted Contacts
 * Management of emergency guardians with Add/Edit/Delete actions,
 * primary contact selection, phone validation, and location sharing preview.
 */
window.SafeHerContactsView = function ({
  contacts,
  onAddContact,
  onUpdateContact,
  onDeleteContact,
  onTestAlert
}) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [editingContact, setEditingContact] = React.useState(null);
  const [testResult, setTestResult] = React.useState(null);
  const [formData, setFormData] = React.useState({
    name: '',
    relationship: 'Sister',
    phone: '+91 ',
    is_primary: false,
    notify_journey: true,
    notify_emergency: true
  });
  const [formError, setFormError] = React.useState('');
  const openAddModal = () => {
    setEditingContact(null);
    setFormData({
      name: '',
      relationship: 'Sister',
      phone: '+91 ',
      is_primary: contacts.length === 0,
      notify_journey: true,
      notify_emergency: true
    });
    setFormError('');
    setModalOpen(true);
  };
  const openEditModal = c => {
    setEditingContact(c);
    setFormData({
      name: c.name,
      relationship: c.relationship,
      phone: c.phone,
      is_primary: Boolean(c.is_primary),
      notify_journey: Boolean(c.notify_journey),
      notify_emergency: Boolean(c.notify_emergency)
    });
    setFormError('');
    setModalOpen(true);
  };
  const formatPhoneNumber = input => {
    var raw = (input || '').trim();
    var hasPlus91 = raw.startsWith('+91') || raw.startsWith('+');
    var digits = raw.replace(/\D/g, '');
    if (!digits) return raw.startsWith('+') ? '+91 ' : '';
    var sub = digits;
    if (hasPlus91 && digits.startsWith('91') && digits.length > 2) {
      sub = digits.slice(2);
    } else if (!hasPlus91 && digits.startsWith('91') && digits.length > 10) {
      sub = digits.slice(2);
    }

    // STRICT RULE: Max 10 digits (cannot be greater than 10 digits)
    sub = sub.slice(0, 10);
    if (sub.length > 5) {
      return '+91 ' + sub.slice(0, 5) + ' ' + sub.slice(5);
    } else if (sub.length > 0) {
      return '+91 ' + sub;
    }
    return '+91 ';
  };
  const handleNameChange = e => {
    // Strictly prevent numbers in Contact Name (letters, spaces, dots, hyphens only)
    const val = e.target.value.replace(/[0-9]/g, '').slice(0, 35);
    setFormData(prev => ({
      ...prev,
      name: val
    }));
    if (formError) setFormError('');
  };
  const handlePhoneChange = e => {
    // Strictly prevent letters and clamp to max 10 digits
    const formatted = formatPhoneNumber(e.target.value);
    setFormData(prev => ({
      ...prev,
      phone: formatted
    }));
    if (formError) setFormError('');
  };
  const handleSubmit = e => {
    e.preventDefault();
    const nameTrimmed = (formData.name || '').trim();
    const phoneTrimmed = (formData.phone || '').trim();
    const digitsOnly = phoneTrimmed.replace(/\D/g, '');
    const subscriberDigits = digitsOnly.startsWith('91') && digitsOnly.length > 10 ? digitsOnly.slice(2) : digitsOnly;

    // 1. Contact Name Validation
    if (!nameTrimmed) {
      setFormError('Please enter a contact name.');
      return;
    }
    if (/\d/.test(nameTrimmed)) {
      setFormError('Contact name cannot contain numbers. Please use letters only.');
      return;
    }
    if (!/^[a-zA-Z\s.'-]+$/.test(nameTrimmed) || nameTrimmed.length < 2) {
      setFormError('Contact name must be at least 2 characters and contain letters only.');
      return;
    }

    // 2. Mobile Number Validation (Strictly 10 digits)
    if (!phoneTrimmed) {
      setFormError('Please enter a mobile phone number.');
      return;
    }
    if (/[a-zA-Z]/.test(phoneTrimmed)) {
      setFormError('Mobile number cannot contain letters. Please use digits only.');
      return;
    }
    if (subscriberDigits.length > 10) {
      setFormError('Mobile number cannot be greater than 10 digits.');
      return;
    }
    if (subscriberDigits.length < 10) {
      setFormError('Mobile number must be exactly 10 digits (excluding +91 country code).');
      return;
    }
    if (editingContact) {
      onUpdateContact(editingContact.id, {
        ...formData,
        name: nameTrimmed,
        phone: phoneTrimmed
      });
    } else {
      onAddContact({
        ...formData,
        name: nameTrimmed,
        phone: phoneTrimmed
      });
    }
    setModalOpen(false);
  };
  const triggerTestAlert = async contactId => {
    const res = await onTestAlert(contactId);
    setTestResult(res);
    setTimeout(() => setTestResult(null), 5000);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 max-w-6xl mx-auto pb-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-6 sm:p-7 border border-[#E6DDD4] shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EFE7F6] text-[#5F3F7A] border border-[#D8C6E6] text-xs font-bold uppercase tracking-wider mb-2"
  }, /*#__PURE__*/React.createElement("span", null, "Guardians & Circles")), /*#__PURE__*/React.createElement("h1", {
    className: "font-display text-2xl sm:text-3xl font-black text-[#24152F]"
  }, "Trusted Contacts"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-[#6E6672] mt-1 max-w-xl"
  }, "Your trusted circle receives routine journey notifications and immediate emergency escalation. Changes are saved to local persistent storage.")), /*#__PURE__*/React.createElement("button", {
    onClick: openAddModal,
    className: "px-5 py-3 rounded-2xl bg-[#24152F] hover:bg-[#190E21] text-white font-bold text-xs uppercase tracking-wider shadow-md transition flex items-center space-x-2 self-start md:self-auto"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "plus",
    size: 16,
    color: "#B8E0D2"
  }), /*#__PURE__*/React.createElement("span", null, "Add Guardian"))), testResult && /*#__PURE__*/React.createElement("div", {
    className: "bg-[#E0F3EC] border border-[#B8E0D2] rounded-2xl p-4 text-xs text-[#206352] shadow-sm space-y-1.5 animate-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between font-bold"
  }, /*#__PURE__*/React.createElement("span", null, "✓ Simulated SMS Dispatched to ", testResult.contact_name), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-[10px] text-[#206352]"
  }, testResult.delivered_at?.slice(11, 19))), /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-[11px] bg-[#FFFFFF] p-2.5 rounded-xl border border-[#B8E0D2] text-[#302A32]"
  }, testResult.simulated_sms), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-[#6E6672] block"
  }, testResult.disclaimer)), contacts.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-12 text-center border border-[#E6DDD4] shadow-sm space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 rounded-full bg-[#F7F1E8] text-[#24152F] mx-auto flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "users",
    size: 28,
    color: "#24152F"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-display text-lg font-bold text-[#24152F]"
  }, "No Trusted Contacts Added"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-[#6E6672] max-w-sm mx-auto"
  }, "Add friends, family members, or colleagues to receive your live location and automated emergency escalations."), /*#__PURE__*/React.createElement("button", {
    onClick: openAddModal,
    className: "px-5 py-2.5 rounded-xl bg-[#24152F] text-white font-bold text-xs uppercase"
  }, "Add Your First Contact")) :
  /*#__PURE__*/
  /* Contacts Multi-Column Grid (1 col mobile, 2 col tablet, 3 col desktop) */
  React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
  }, contacts.map(c => {
    const isPrimary = Boolean(c.is_primary);
    return /*#__PURE__*/React.createElement("div", {
      key: c.id,
      className: `sr-card p-5 flex flex-col justify-between transition-all ${isPrimary ? 'border-2 border-[#24152F] shadow-md' : 'border-[#E6DDD4]'}`
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start justify-between mb-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: `w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-sm ${isPrimary ? 'bg-[#24152F] text-[#B8E0D2]' : 'bg-[#F7F1E8] text-[#24152F]'}`
    }, c.name.charAt(0)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-sm text-[#24152F]"
    }, c.name), /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] px-2 py-0.5 rounded-full bg-[#F7F1E8] text-[#6E6672] font-semibold"
    }, c.relationship)), /*#__PURE__*/React.createElement("span", {
      className: "text-xs font-mono text-[#6E6672] block mt-0.5"
    }, c.phone))), isPrimary && /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] font-black px-2.5 py-0.5 rounded-full bg-[#EFE7F6] text-[#5F3F7A] border border-[#D8C6E6]"
    }, "PRIMARY")), /*#__PURE__*/React.createElement("div", {
      className: "bg-[#F7F1E8] rounded-2xl p-3 border border-[#E6DDD4] text-xs space-y-2 my-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between text-[#302A32]"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[11px]"
    }, "Routine Journey Updates"), /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: c.notify_journey !== false,
      onChange: e => onUpdateContact(c.id, {
        notify_journey: e.target.checked
      }),
      className: "w-4 h-4 accent-[#24152F] rounded cursor-pointer"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between border-t border-[#E6DDD4] pt-2 text-[#302A32]"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[11px]"
    }, "Emergency SOS Alerts"), /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: c.notify_emergency !== false,
      onChange: e => onUpdateContact(c.id, {
        notify_emergency: e.target.checked
      }),
      className: "w-4 h-4 accent-[#FF6B55] rounded cursor-pointer"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "pt-3 border-t border-[#E6DDD4] flex items-center justify-between text-xs"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => triggerTestAlert(c.id),
      className: "px-3 py-1.5 rounded-xl bg-[#EFE7F6] hover:bg-[#D8C6E6]/40 text-[#5F3F7A] font-bold text-[11px] border border-[#D8C6E6] transition flex items-center space-x-1"
    }, /*#__PURE__*/React.createElement("span", null, "🔔"), /*#__PURE__*/React.createElement("span", null, "Test Alert")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2"
    }, !isPrimary && /*#__PURE__*/React.createElement("button", {
      onClick: () => onUpdateContact(c.id, {
        is_primary: true
      }),
      className: "text-[11px] text-[#6E6672] hover:text-[#24152F] font-bold hover:underline"
    }, "Set Primary"), /*#__PURE__*/React.createElement("button", {
      onClick: () => openEditModal(c),
      className: "text-[#6E6672] hover:text-[#24152F] p-1",
      title: "Edit contact"
    }, /*#__PURE__*/React.createElement(window.LucideIcon, {
      name: "edit3",
      size: 14,
      color: "#6E6672"
    })), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        if (confirm(`Remove ${c.name} from your trusted contacts?`)) {
          onDeleteContact(c.id);
        }
      },
      className: "text-[#FF6B55] hover:text-[#E8533D] p-1",
      title: "Delete contact"
    }, /*#__PURE__*/React.createElement(window.LucideIcon, {
      name: "trash2",
      size: 14,
      color: "#FF6B55"
    })))));
  })), modalOpen && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 bg-[#24152F]/75 backdrop-blur-sm flex items-center justify-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-6 max-w-sm w-full border border-[#E6DDD4] shadow-2xl text-[#302A32] space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-2 border-b border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-display text-lg font-black text-[#24152F]"
  }, editingContact ? 'Edit Trusted Guardian' : 'Add Trusted Guardian'), /*#__PURE__*/React.createElement("button", {
    onClick: () => setModalOpen(false),
    className: "text-[#6E6672] hover:text-[#24152F]"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "x",
    size: 18,
    color: "#6E6672"
  }))), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "space-y-3.5 text-xs"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-[11px] font-bold text-[#6E6672] block mb-1"
  }, "Contact Name *"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    maxLength: 35,
    required: true,
    placeholder: "e.g. Priya Sharma",
    value: formData.name,
    onChange: handleNameChange,
    className: "w-full bg-[#F7F1E8] border border-[#E6DDD4] rounded-xl p-2.5 text-xs text-[#24152F] focus:outline-none focus:border-[#24152F]"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-[#6E6672] mt-0.5 block"
  }, "Alphabetic letters only (no numbers)")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-[11px] font-bold text-[#6E6672] block mb-1"
  }, "Relationship"), /*#__PURE__*/React.createElement("select", {
    value: formData.relationship,
    onChange: e => setFormData({
      ...formData,
      relationship: e.target.value
    }),
    className: "w-full bg-[#F7F1E8] border border-[#E6DDD4] rounded-xl p-2.5 text-xs text-[#24152F] focus:outline-none"
  }, /*#__PURE__*/React.createElement("option", {
    value: "Sister"
  }, "Sister"), /*#__PURE__*/React.createElement("option", {
    value: "Mother"
  }, "Mother"), /*#__PURE__*/React.createElement("option", {
    value: "Father"
  }, "Father"), /*#__PURE__*/React.createElement("option", {
    value: "Partner"
  }, "Partner"), /*#__PURE__*/React.createElement("option", {
    value: "Friend"
  }, "Friend"), /*#__PURE__*/React.createElement("option", {
    value: "Colleague"
  }, "Colleague"), /*#__PURE__*/React.createElement("option", {
    value: "Flatmate"
  }, "Flatmate"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-[11px] font-bold text-[#6E6672] block mb-1"
  }, "Mobile Number (10 Digits) *"), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    inputMode: "numeric",
    maxLength: 15,
    required: true,
    placeholder: "+91 98100 12345",
    value: formData.phone,
    onChange: handlePhoneChange,
    className: "w-full bg-[#F7F1E8] border border-[#E6DDD4] rounded-xl p-2.5 text-xs font-mono text-[#24152F] focus:outline-none focus:border-[#24152F]"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-[#6E6672] mt-0.5 block"
  }, "Exactly 10 digits (cannot exceed 10 digits)")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2 pt-1"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    id: "primaryCheck",
    checked: formData.is_primary,
    onChange: e => setFormData({
      ...formData,
      is_primary: e.target.checked
    }),
    className: "w-4 h-4 accent-[#24152F] rounded"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "primaryCheck",
    className: "text-xs font-semibold text-[#24152F] cursor-pointer"
  }, "Set as primary emergency guardian")), formError && /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-[#FF6B55] font-bold"
  }, formError), /*#__PURE__*/React.createElement("div", {
    className: "flex space-x-2 pt-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setModalOpen(false),
    className: "flex-1 py-3 rounded-xl bg-[#F7F1E8] hover:bg-[#EFE6D8] text-[#302A32] font-bold"
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "flex-1 py-3 rounded-xl bg-[#24152F] hover:bg-[#190E21] text-white font-bold shadow-md"
  }, "Save Contact"))))));
};

// === FILE: views/SettingsView.js ===
/**
 * SafeRoute Screen 8 — Profile & Settings
 * Color: Warm Ivory (#F7F1E8) & Deep Plum (#24152F).
 * User profile configuration, location permissions, check-in intervals,
 * security PINs, privacy notices, and demo data reset.
 */
window.SafeHerSettingsView = function ({
  userProfile,
  onUpdateProfile,
  onResetDemo,
  locationStatus,
  onRequestLocation,
  onNavigate
}) {
  const [formData, setFormData] = React.useState({
    name: userProfile?.name || 'Aanya Sharma',
    phone: userProfile?.phone || '+91 98101 23456',
    home_address: userProfile?.home_address || 'Saket, South Delhi',
    default_checkin_min: userProfile?.default_checkin_min || 10,
    false_alarm_pin: userProfile?.false_alarm_pin || '1234',
    safe_arrival_pin: userProfile?.safe_arrival_pin || '5678',
    hold_duration_sec: userProfile?.hold_duration_sec || 3,
    auto_share_contacts: userProfile?.auto_share_contacts !== false
  });
  const [savedSuccess, setSavedSuccess] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const formatPhoneNumber = input => {
    var raw = (input || '').trim();
    var hasPlus91 = raw.startsWith('+91') || raw.startsWith('+');
    var digits = raw.replace(/\D/g, '');
    if (!digits) return raw.startsWith('+') ? '+91 ' : '';
    var sub = digits;
    if (hasPlus91 && digits.startsWith('91') && digits.length > 2) {
      sub = digits.slice(2);
    } else if (!hasPlus91 && digits.startsWith('91') && digits.length > 10) {
      sub = digits.slice(2);
    }

    // STRICT RULE: Max 10 digits (cannot exceed 10 digits)
    sub = sub.slice(0, 10);
    if (sub.length > 5) {
      return '+91 ' + sub.slice(0, 5) + ' ' + sub.slice(5);
    } else if (sub.length > 0) {
      return '+91 ' + sub;
    }
    return '+91 ';
  };
  const handleNameChange = e => {
    // Strictly prevent numbers in Name
    const val = e.target.value.replace(/[0-9]/g, '').slice(0, 35);
    setFormData(prev => ({
      ...prev,
      name: val
    }));
    if (errorMessage) setErrorMessage('');
  };
  const handlePhoneChange = e => {
    // Strictly prevent letters and clamp to max 10 digits
    const formatted = formatPhoneNumber(e.target.value);
    setFormData(prev => ({
      ...prev,
      phone: formatted
    }));
    if (errorMessage) setErrorMessage('');
  };
  const handleSubmit = e => {
    e.preventDefault();
    setErrorMessage('');
    const nameTrimmed = (formData.name || '').trim();
    const phoneTrimmed = (formData.phone || '').trim();
    const digitsOnly = phoneTrimmed.replace(/\D/g, '');
    const subscriberDigits = digitsOnly.startsWith('91') && digitsOnly.length > 10 ? digitsOnly.slice(2) : digitsOnly;

    // Name Validation
    if (!nameTrimmed) {
      setErrorMessage('Please enter your display name.');
      return;
    }
    if (/\d/.test(nameTrimmed)) {
      setErrorMessage('Display name cannot contain numbers. Please use letters only.');
      return;
    }
    if (!/^[a-zA-Z\s.'-]+$/.test(nameTrimmed) || nameTrimmed.length < 2) {
      setErrorMessage('Display name must be at least 2 characters and contain letters only.');
      return;
    }

    // Phone Validation (Strictly 10 digits)
    if (!phoneTrimmed) {
      setErrorMessage('Please enter your mobile phone number.');
      return;
    }
    if (/[a-zA-Z]/.test(phoneTrimmed)) {
      setErrorMessage('Mobile number cannot contain letters. Please use digits only.');
      return;
    }
    if (subscriberDigits.length > 10) {
      setErrorMessage('Mobile number cannot be greater than 10 digits.');
      return;
    }
    if (subscriberDigits.length < 10) {
      setErrorMessage('Mobile number must be exactly 10 digits (excluding +91 country code).');
      return;
    }
    onUpdateProfile({
      ...formData,
      name: nameTrimmed,
      phone: phoneTrimmed
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 max-w-5xl mx-auto pb-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-6 sm:p-7 border border-[#E6DDD4] shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EFE7F6] text-[#5F3F7A] border border-[#D8C6E6] text-xs font-bold uppercase tracking-wider mb-2"
  }, /*#__PURE__*/React.createElement("span", null, "Preferences & Credentials")), /*#__PURE__*/React.createElement("h1", {
    className: "font-display text-2xl sm:text-3xl font-black text-[#24152F]"
  }, "Settings & Privacy"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-[#6E6672] mt-1 max-w-xl"
  }, "Manage your personal profile, safety intervals, cancellation PINs, and local device privacy settings.")), savedSuccess && /*#__PURE__*/React.createElement("div", {
    className: "px-4 py-2 rounded-2xl bg-[#E0F3EC] text-[#206352] border border-[#B8E0D2] font-bold text-xs animate-fade-in self-start md:self-auto"
  }, "✓ Preferences saved successfully!"), errorMessage && /*#__PURE__*/React.createElement("div", {
    className: "px-4 py-2 rounded-2xl bg-[#FFF2F0] text-[#E8533D] border border-[#FFC5BD] font-bold text-xs animate-fade-in self-start md:self-auto"
  }, "⚠️ ", errorMessage)), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6 space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-6 border border-[#E6DDD4] shadow-sm space-y-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xs font-bold uppercase tracking-wider text-[#24152F] pb-2 border-b border-[#E6DDD4]"
  }, "User Profile"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 text-xs"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-[11px] font-bold text-[#6E6672] block mb-1"
  }, "Display Name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    maxLength: 35,
    required: true,
    value: formData.name,
    onChange: handleNameChange,
    className: "w-full bg-[#F7F1E8] border border-[#E6DDD4] rounded-xl p-3 text-xs font-medium text-[#24152F] focus:outline-none focus:border-[#24152F]"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-[#6E6672] mt-0.5 block"
  }, "Letters only (no numbers allowed)")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-[11px] font-bold text-[#6E6672] block mb-1"
  }, "Mobile Phone Number (10 Digits)"), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    inputMode: "numeric",
    maxLength: 15,
    required: true,
    value: formData.phone,
    onChange: handlePhoneChange,
    className: "w-full bg-[#F7F1E8] border border-[#E6DDD4] rounded-xl p-3 text-xs font-mono text-[#24152F] focus:outline-none focus:border-[#24152F]"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-[#6E6672] mt-0.5 block"
  }, "Exactly 10 digits (cannot exceed 10 digits)")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-[11px] font-bold text-[#6E6672] block mb-1"
  }, "Default Home / Frequent Address"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: formData.home_address,
    onChange: e => setFormData({
      ...formData,
      home_address: e.target.value
    }),
    className: "w-full bg-[#F7F1E8] border border-[#E6DDD4] rounded-xl p-3 text-xs text-[#24152F] focus:outline-none focus:border-[#24152F]"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-6 border border-[#E6DDD4] shadow-sm space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-2 border-b border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-xs font-bold uppercase tracking-wider text-[#24152F]"
  }, "Device Geolocation"), /*#__PURE__*/React.createElement("span", {
    className: `text-[10px] font-bold px-2 py-0.5 rounded-full ${locationStatus === 'granted' ? 'bg-[#E0F3EC] text-[#206352]' : 'bg-[#FFF2F0] text-[#E8533D]'}`
  }, locationStatus === 'granted' ? 'Permission Granted' : 'Permission Not Active')), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-[#6E6672] leading-relaxed"
  }, "SafeRoute requests your browser location only when planning trips or triggering SOS. If permission is denied, a fallback default position is used so the prototype never crashes."), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onRequestLocation,
    className: "w-full py-2.5 rounded-xl bg-[#F7F1E8] hover:bg-[#EFE6D8] border border-[#E6DDD4] text-[#24152F] text-xs font-bold transition flex items-center justify-center space-x-1.5"
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "locate",
    size: 14,
    color: "#24152F"
  }), /*#__PURE__*/React.createElement("span", null, "Request / Test Browser Location Access"))), /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-5 border border-[#E6DDD4] shadow-sm flex items-center justify-between text-xs"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-[#24152F] block"
  }, "Emergency Guardians Circle"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-[#6E6672]"
  }, "Manage tiers and notification preferences")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onNavigate('contacts'),
    className: "px-3.5 py-2 rounded-xl bg-[#24152F] text-white font-bold"
  }, "Manage Contacts →"))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6 space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-6 border border-[#E6DDD4] shadow-sm space-y-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xs font-bold uppercase tracking-wider text-[#24152F] pb-2 border-b border-[#E6DDD4]"
  }, "Security PIN Controls"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3.5 rounded-2xl bg-[#F7F1E8] border border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-[11px] font-bold text-[#6E6672] block mb-1"
  }, "False-Alarm PIN"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    maxLength: "4",
    value: formData.false_alarm_pin,
    onChange: e => setFormData({
      ...formData,
      false_alarm_pin: e.target.value
    }),
    className: "w-full bg-[#FFFFFF] border border-[#E6DDD4] rounded-xl p-2.5 text-center text-sm font-mono font-bold text-[#24152F]"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-[#6E6672] block mt-1"
  }, "Cancels active SOS (Demo: 1234)")), /*#__PURE__*/React.createElement("div", {
    className: "p-3.5 rounded-2xl bg-[#F7F1E8] border border-[#E6DDD4]"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-[11px] font-bold text-[#6E6672] block mb-1"
  }, "Safe Arrival PIN"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    maxLength: "4",
    value: formData.safe_arrival_pin,
    onChange: e => setFormData({
      ...formData,
      safe_arrival_pin: e.target.value
    }),
    className: "w-full bg-[#FFFFFF] border border-[#E6DDD4] rounded-xl p-2.5 text-center text-sm font-mono font-bold text-[#206352]"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-[#6E6672] block mt-1"
  }, "Verifies safe arrival (Demo: 5678)")))), /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-6 border border-[#E6DDD4] shadow-sm space-y-3"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xs font-bold uppercase tracking-wider text-[#24152F] pb-2 border-b border-[#E6DDD4]"
  }, "Journey Check-In Preferences"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-[11px] font-bold text-[#6E6672] block mb-1"
  }, "Default Check-In Timer"), /*#__PURE__*/React.createElement("select", {
    value: formData.default_checkin_min,
    onChange: e => setFormData({
      ...formData,
      default_checkin_min: parseInt(e.target.value)
    }),
    className: "w-full bg-[#F7F1E8] border border-[#E6DDD4] rounded-xl p-3 text-xs text-[#24152F] focus:outline-none"
  }, /*#__PURE__*/React.createElement("option", {
    value: 5
  }, "Every 5 Minutes (Frequent Check-Ins)"), /*#__PURE__*/React.createElement("option", {
    value: 10
  }, "Every 10 Minutes (Recommended)"), /*#__PURE__*/React.createElement("option", {
    value: 15
  }, "Every 15 Minutes (Relaxed Transit)"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-[11px] font-bold text-[#6E6672] block mb-1"
  }, "SOS Button Hold Duration"), /*#__PURE__*/React.createElement("select", {
    value: formData.hold_duration_sec,
    onChange: e => setFormData({
      ...formData,
      hold_duration_sec: parseInt(e.target.value)
    }),
    className: "w-full bg-[#F7F1E8] border border-[#E6DDD4] rounded-xl p-3 text-xs text-[#24152F] focus:outline-none"
  }, /*#__PURE__*/React.createElement("option", {
    value: 1
  }, "1 Second (Rapid Trigger)"), /*#__PURE__*/React.createElement("option", {
    value: 3
  }, "3 Seconds (Recommended - Prevents Accidental Touch)"), /*#__PURE__*/React.createElement("option", {
    value: 5
  }, "5 Seconds (High Resistance)")))), /*#__PURE__*/React.createElement("div", {
    className: "p-5 rounded-3xl bg-[#EFE7F6] border border-[#D8C6E6] space-y-2 text-xs text-[#5F3F7A]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold uppercase tracking-wider block text-[11px]"
  }, "Privacy & Data Policy"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-[#302A32] leading-relaxed"
  }, "SafeRoute prioritizes user privacy. All preferences, contacts, and journey history are stored in your device's ", /*#__PURE__*/React.createElement("strong", null, "LocalStorage"), ". Location data is never sold or used for commercial analytics.")), /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFFFF] rounded-3xl p-5 border border-[#E6DDD4] shadow-sm text-center space-y-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold uppercase tracking-wider text-[#6E6672] block"
  }, "Demo Reset"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-[#6E6672]"
  }, "Restore initial sample contacts (Priya, Sunita) and clear mock triggers."), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      if (confirm('Reset SafeRoute back to initial clean demo state?')) {
        onResetDemo();
      }
    },
    className: "px-4 py-2.5 rounded-xl bg-[#F7F1E8] hover:bg-[#EFE6D8] border border-[#E6DDD4] text-[#FF6B55] text-xs font-bold transition"
  }, "🔄 Reset Demo Data")))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "w-full py-4 rounded-2xl bg-[#24152F] hover:bg-[#190E21] text-white font-bold text-xs uppercase tracking-wider shadow-md transition active:scale-98"
  }, "Save All Settings")));
};

// === FILE: app.js ===
/**
 * SafeRoute Main React Application Root
 * Cohesive integration of state, LocalStorage, navigation, and reactive safety flows.
 */
function SafeRouteApp() {
  const [currentTab, setCurrentTab] = React.useState('home');
  const [userProfile, setUserProfile] = React.useState(() => window.SafeRouteStore.getProfile());
  const [contacts, setContacts] = React.useState(() => window.SafeRouteStore.getContacts());
  const [activeJourney, setActiveJourney] = React.useState(() => window.SafeRouteStore.getActiveJourney());
  const [activeSOS, setActiveSOS] = React.useState(() => window.SafeRouteStore.getActiveSOS());
  const [journeyHistory, setJourneyHistory] = React.useState(() => window.SafeRouteStore.getJourneyHistory());
  const [sosHistory, setSosHistory] = React.useState(() => window.SafeRouteStore.getSOSHistory());
  const [safePlaces, setSafePlaces] = React.useState(() => window.SafeRouteStore.getSafePlaces());
  const [routes, setRoutes] = React.useState([]);
  const [selectedRouteId, setSelectedRouteId] = React.useState('shield_route');
  const [locationStatus, setLocationStatus] = React.useState('prompt');

  // Modals & temporary state
  const [safeArrivalModalOpen, setSafeArrivalModalOpen] = React.useState(false);
  const [quickPlanDest, setQuickPlanDest] = React.useState('Saket Metro Station, South Delhi');
  const [quickPlanMode, setQuickPlanMode] = React.useState('cab');

  // Load initial backend routes (with fallback)
  React.useEffect(() => {
    if (window.SafeHerAPI && window.SafeHerAPI.calculateRoutes) {
      window.SafeHerAPI.calculateRoutes("DLF Cyber City, Gurugram", 28.4952, 77.0895, "Saket Metro Station, South Delhi", 28.5208, 77.2144, "cab").then(res => {
        if (res?.routes) setRoutes(res.routes);
      }).catch(err => {
        console.warn("Using fallback local routes:", err);
      });
    }

    // Check browser geolocation permission if supported
    if (navigator.permissions && navigator.permissions.query) {
      navigator.permissions.query({
        name: 'geolocation'
      }).then(result => {
        setLocationStatus(result.state);
        result.onchange = () => setLocationStatus(result.state);
      }).catch(() => {});
    }
  }, []);

  // Request browser location
  const handleRequestLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser. Using simulated Gurugram coordinates.");
      setLocationStatus('denied');
      return;
    }
    navigator.geolocation.getCurrentPosition(pos => {
      setLocationStatus('granted');
      if (activeJourney) {
        const updated = window.SafeRouteStore.updateActiveJourney({
          current_lat: pos.coords.latitude,
          current_lng: pos.coords.longitude
        });
        setActiveJourney(updated);
      }
    }, err => {
      console.warn("Geolocation denied or error:", err);
      setLocationStatus('denied');
    }, {
      timeout: 8000,
      enableHighAccuracy: true
    });
  };

  // Quick Plan Handler
  const handleQuickPlan = (dest, mode) => {
    setQuickPlanDest(dest);
    setQuickPlanMode(mode);
  };

  // Start Journey
  const handleStartJourney = params => {
    const created = window.SafeRouteStore.startJourney(params);
    setActiveJourney(created);
    setCurrentTab('journey');
  };

  // Journey Check-In Action
  const handleCheckIn = remainingSec => {
    if (!activeJourney) return;
    const updated = window.SafeRouteStore.updateActiveJourney({
      checkin_remaining_sec: remainingSec,
      total_checkins: (activeJourney.total_checkins || 0) + 1
    });
    setActiveJourney(updated);
  };

  // Pause & Resume Journey
  const handlePauseJourney = () => {
    const updated = window.SafeRouteStore.updateActiveJourney({
      status: 'paused'
    });
    setActiveJourney(updated);
  };
  const handleResumeJourney = () => {
    const updated = window.SafeRouteStore.updateActiveJourney({
      status: 'active'
    });
    setActiveJourney(updated);
  };

  // Confirm Arrival
  const handleConfirmArrival = async (journeyId, pin, notes) => {
    const profile = window.SafeRouteStore.getProfile();
    // Validate PIN (Default demo PIN 5678 or profile PIN)
    if (pin && pin !== profile.safe_arrival_pin && pin !== '5678') {
      return {
        success: false,
        error: 'Incorrect Safe Arrival PIN (Default: 5678)'
      };
    }
    const finished = window.SafeRouteStore.completeActiveJourney(notes);
    setActiveJourney(null);
    setSafeArrivalModalOpen(false);
    setJourneyHistory(window.SafeRouteStore.getJourneyHistory());
    setCurrentTab('vault');
    return {
      success: true
    };
  };

  // Emergency SOS Activation
  const handleTriggerSOS = (triggerType = 'press_and_hold') => {
    const incident = window.SafeRouteStore.triggerSOS(triggerType);
    setActiveSOS(incident);
  };

  // Cancel Emergency SOS
  const handleCancelSOS = async (incidentId, pin, reason) => {
    const profile = window.SafeRouteStore.getProfile();
    if (pin && pin !== profile.false_alarm_pin && pin !== '1234') {
      return {
        success: false,
        error: 'Invalid PIN. (Demo PIN: 1234)'
      };
    }
    const cancelled = window.SafeRouteStore.cancelSOS(reason);
    setActiveSOS(null);
    setSosHistory(window.SafeRouteStore.getSOSHistory());
    return {
      success: true
    };
  };

  // Simulate Guardian Ack in SOS Screen
  const handleSimulateAck = (incidentId, contactId) => {
    if (!activeSOS) return;
    const updated = {
      ...activeSOS,
      timeline: [...activeSOS.timeline, {
        time: new Date().toLocaleTimeString(),
        title: 'Guardian Acknowledged Alert',
        desc: 'Simulated guardian confirmation received.'
      }]
    };
    window.SafeRouteStore.triggerSOS(); // update store
    setActiveSOS(updated);
  };

  // Simulation Controls for Journey
  const handleSimulateAction = action => {
    if (!activeJourney) return;
    if (action === 'step') {
      const nextLat = (activeJourney.current_lat || 28.4952) + 0.005;
      const nextLng = (activeJourney.current_lng || 77.0895) + 0.004;
      const updatedBreadcrumbs = [...(activeJourney.breadcrumbs || []), {
        lat: nextLat,
        lng: nextLng,
        time: new Date().toLocaleTimeString()
      }];
      const updated = window.SafeRouteStore.updateActiveJourney({
        current_lat: nextLat,
        current_lng: nextLng,
        breadcrumbs: updatedBreadcrumbs
      });
      setActiveJourney(updated);
    }
  };

  // Contacts CRUD
  const handleAddContact = data => {
    window.SafeRouteStore.addContact(data);
    setContacts(window.SafeRouteStore.getContacts());
  };
  const handleUpdateContact = (id, data) => {
    window.SafeRouteStore.updateContact(id, data);
    setContacts(window.SafeRouteStore.getContacts());
  };
  const handleDeleteContact = id => {
    window.SafeRouteStore.deleteContact(id);
    setContacts(window.SafeRouteStore.getContacts());
  };
  const handleTestAlert = async id => {
    const contact = contacts.find(c => c.id === id);
    return {
      success: true,
      contact_name: contact?.name || 'Guardian',
      simulated_sms: `[SafeRoute DEMO SMS] Aanya shared live journey: https://saferoute.demo/live/commute-101. Estimated arrival: 32 min.`,
      delivered_at: new Date().toISOString(),
      disclaimer: 'Sample alert simulated locally in prototype. No carrier network charges incurred.'
    };
  };

  // Profile Update & Reset Demo
  const handleUpdateProfile = data => {
    const updated = window.SafeRouteStore.saveProfile(data);
    setUserProfile(updated);
  };
  const handleClearHistory = () => {
    window.SafeRouteStore.clearJourneyHistory();
    setJourneyHistory([]);
  };
  const handleResetDemo = () => {
    window.SafeRouteStore.resetAllData();
    setUserProfile(window.SafeRouteStore.getProfile());
    setContacts(window.SafeRouteStore.getContacts());
    setActiveJourney(window.SafeRouteStore.getActiveJourney());
    setActiveSOS(window.SafeRouteStore.getActiveSOS());
    setJourneyHistory(window.SafeRouteStore.getJourneyHistory());
    setSosHistory(window.SafeRouteStore.getSOSHistory());
    setSafePlaces(window.SafeRouteStore.getSafePlaces());
    setCurrentTab('home');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen bg-[#F7F1E8] flex flex-col text-[#302A32]"
  }, /*#__PURE__*/React.createElement(window.SafeHerHeader, {
    currentTab: currentTab,
    setCurrentTab: setCurrentTab,
    activeSOS: activeSOS,
    activeJourney: activeJourney,
    onTriggerSOS: handleTriggerSOS,
    locationStatus: locationStatus,
    onRequestLocation: handleRequestLocation
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex w-full"
  }, /*#__PURE__*/React.createElement(window.SafeHerSidebar, {
    currentTab: currentTab,
    setCurrentTab: setCurrentTab,
    activeSOS: activeSOS,
    activeJourney: activeJourney,
    onTriggerSOS: handleTriggerSOS
  }), /*#__PURE__*/React.createElement("main", {
    className: "flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24 lg:pb-8"
  }, currentTab === 'home' && /*#__PURE__*/React.createElement(window.SafeHerHomeView, {
    userProfile: userProfile,
    activeJourney: activeJourney,
    activeSOS: activeSOS,
    contacts: contacts,
    safePlaces: safePlaces,
    onNavigate: setCurrentTab,
    onTriggerSOS: handleTriggerSOS,
    locationStatus: locationStatus,
    onRequestLocation: handleRequestLocation,
    onQuickPlan: handleQuickPlan
  }), currentTab === 'saferoute' && /*#__PURE__*/React.createElement(window.SafeHerSafeRouteView, {
    routes: routes,
    selectedRouteId: selectedRouteId,
    setSelectedRouteId: setSelectedRouteId,
    onStartJourney: handleStartJourney,
    onNavigate: setCurrentTab,
    defaultDestination: quickPlanDest,
    defaultMode: quickPlanMode,
    contacts: contacts
  }), currentTab === 'journey' && /*#__PURE__*/React.createElement(window.SafeHerJourneyView, {
    journey: activeJourney,
    onStartNewJourney: () => setCurrentTab('saferoute'),
    onCheckIn: handleCheckIn,
    onPauseJourney: handlePauseJourney,
    onResumeJourney: handleResumeJourney,
    onOpenSafeArrivalModal: () => setSafeArrivalModalOpen(true),
    onTriggerSOS: handleTriggerSOS,
    onSimulateAction: handleSimulateAction
  }), currentTab === 'sos' && /*#__PURE__*/React.createElement(window.SafeHerEmergencyView, {
    userProfile: userProfile,
    contacts: contacts,
    activeSOS: activeSOS,
    onTriggerSOS: handleTriggerSOS,
    locationStatus: locationStatus
  }), currentTab === 'safeplaces' && /*#__PURE__*/React.createElement(window.SafeHerSafePlacesView, {
    safePlaces: safePlaces,
    locationStatus: locationStatus
  }), currentTab === 'vault' && /*#__PURE__*/React.createElement(window.SafeHerVaultView, {
    completedJourneys: journeyHistory,
    sosHistory: sosHistory,
    onClearHistory: handleClearHistory
  }), currentTab === 'contacts' && /*#__PURE__*/React.createElement(window.SafeHerContactsView, {
    contacts: contacts,
    onAddContact: handleAddContact,
    onUpdateContact: handleUpdateContact,
    onDeleteContact: handleDeleteContact,
    onTestAlert: handleTestAlert
  }), currentTab === 'settings' && /*#__PURE__*/React.createElement(window.SafeHerSettingsView, {
    userProfile: userProfile,
    onUpdateProfile: handleUpdateProfile,
    onResetDemo: handleResetDemo,
    locationStatus: locationStatus,
    onRequestLocation: handleRequestLocation,
    onNavigate: setCurrentTab
  }))), /*#__PURE__*/React.createElement(window.SafeHerBottomNav, {
    currentTab: currentTab,
    setCurrentTab: setCurrentTab,
    activeSOS: activeSOS,
    activeJourney: activeJourney
  }), activeSOS && /*#__PURE__*/React.createElement(window.SafeHerActiveSOSModal, {
    incident: activeSOS,
    onCancelSOS: handleCancelSOS,
    onSimulateAck: handleSimulateAck
  }), /*#__PURE__*/React.createElement(window.SafeHerSafeArrivalModal, {
    isOpen: safeArrivalModalOpen,
    onClose: () => setSafeArrivalModalOpen(false),
    journey: activeJourney,
    onConfirmArrival: handleConfirmArrival
  }));
}

// Mount React Root cleanly
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(/*#__PURE__*/React.createElement(SafeRouteApp, null));
}
