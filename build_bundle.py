"""
SafeRoute Bundle Builder
Concatenates all components, views, and app code in exact dependency order
and compiles JSX to clean standard JavaScript using Babel in JSC.
"""
import os
import subprocess

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STATIC_DIR = os.path.join(BASE_DIR, 'static')
JS_DIR = os.path.join(STATIC_DIR, 'js')
BABEL_PATH = os.path.join(STATIC_DIR, 'vendor', 'babel.min.js')
JSC_PATH = '/System/Library/Frameworks/JavaScriptCore.framework/Versions/Current/Helpers/jsc'
OUTPUT_BUNDLE = os.path.join(JS_DIR, 'bundle.js')

ORDERED_FILES = [
    'components/LucideIcons.js',
    'components/Header.js',
    'components/Sidebar.js',
    'components/BottomNav.js',
    'components/SOSButton.js',
    'components/ActiveSOSModal.js',
    'components/SafeArrivalModal.js',
    'components/LeafletMap.js',
    'views/HomeView.js',
    'views/SafeRouteView.js',
    'views/JourneyView.js',
    'views/EmergencyView.js',
    'views/SafePlacesView.js',
    'views/VaultView.js',
    'views/ContactsView.js',
    'views/SettingsView.js',
    'app.js'
]

combined_code = []
for rel_path in ORDERED_FILES:
    full_path = os.path.join(JS_DIR, rel_path)
    if not os.path.exists(full_path):
        print(f"Warning: File {full_path} does not exist.")
        continue
    with open(full_path, 'r', encoding='utf-8') as fp:
        combined_code.append(f"// === FILE: {rel_path} ===\n" + fp.read() + "\n")

raw_combined = "\n".join(combined_code)

# Compile using JSC + Babel Standalone
driver_script = f"""
var console = {{
    debug: function() {{}},
    log: function() {{}},
    warn: function() {{}},
    error: function() {{}}
}};
load("{BABEL_PATH}");
try {{
    var res = Babel.transform({repr(raw_combined)}, {{ presets: [["react", {{ runtime: "classic" }}]] }});
    print(res.code);
}} catch (e) {{
    print("FATAL_ERROR: " + e.message);
}}
"""

res = subprocess.run([JSC_PATH, '-e', driver_script], capture_output=True, text=True)
compiled_js = res.stdout

if "FATAL_ERROR" in compiled_js or not compiled_js.strip():
    print("Bundle compilation failed:")
    print(compiled_js)
    print(res.stderr)
else:
    with open(OUTPUT_BUNDLE, 'w', encoding='utf-8') as out_fp:
        out_fp.write(compiled_js)
    print(f"Bundle successfully created: {OUTPUT_BUNDLE} ({len(compiled_js)} bytes)")
