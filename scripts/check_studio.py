"""Real browser release gate. Run after npm install and npm run build.
Requires Chromium (Playwright install chromium, or set CHROMIUM_PATH), and a full runtime build.
Set FABREADY_TEST_URL to a deployed site to test that actual deployment instead.
"""
import os, socket, subprocess, sys, time, urllib.request
from pathlib import Path
from playwright.sync_api import sync_playwright
root=Path(__file__).resolve().parents[1]
server=None
base=os.environ.get('FABREADY_TEST_URL','').rstrip('/')
try:
    if not base:
        if not (root/'public/vendor/monaco/vs/loader.js').is_file():
            raise SystemExit('FAIL: Monaco build missing. Run npm install and npm run build first.')
        with socket.socket() as s:
            s.bind(('127.0.0.1',0)); port=s.getsockname()[1]
        base=f'http://127.0.0.1:{port}'
        server=subprocess.Popen([sys.executable,'-m','http.server',str(port),'--bind','127.0.0.1','--directory',str(root/'public')],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
        for _ in range(50):
            try:
                with urllib.request.urlopen(base,timeout=1): pass
                break
            except OSError: time.sleep(.1)
        else: raise RuntimeError('Local server unavailable')
    with sync_playwright() as p:
        options={'args':['--no-sandbox']}
        if os.environ.get('CHROMIUM_PATH'): options['executable_path']=os.environ['CHROMIUM_PATH']
        browser=p.chromium.launch(**options)
        page=browser.new_page(viewport={'width':1440,'height':1000}); errors=[]
        page.on('pageerror',lambda e:errors.append(str(e)))
        page.goto(base+'/#workspace',wait_until='domcontentloaded',timeout=20000)
        page.get_by_role('heading',name='Your coding workspace').wait_for()
        def select(i): page.locator(f'.ide-explorer [data-index="{i}"]').click()
        def run(code, expected, timeout=10000):
            page.locator('#workspace-code').fill(code)
            page.get_by_role('button',name='▶ Run code').click()
            page.wait_for_function('(s)=>document.querySelector(".ide-console pre").textContent.includes(s)',arg=expected,timeout=timeout)
        select(1)
        run('console.log(2+3);','\n5')
        run('throw new TypeError("test error");','TypeError: test error')
        page.reload(wait_until='domcontentloaded')
        assert page.locator('#workspace-code').input_value()=='throw new TypeError("test error");'
        page.locator('#workspace-code').fill('function double(x){return 2*x;}')
        page.locator('.ide-test summary').click()
        page.locator('#workspace-test-toggle').check()
        page.locator('#workspace-tests').fill('eq(double(5),10);')
        page.get_by_role('button',name='▶ Run code').click()
        page.get_by_text('PASS · Your written assertions passed.',exact=False).wait_for()
        # Required actual WASM runtimes. No fixture or simulated result can satisfy these assertions.
        select(0); run('print(6 * 7)','\n42',timeout=75000)
        select(2); run('SELECT COUNT(*) AS wafer_count FROM wafers','wafer_count\n8',timeout=35000)
        select(3); page.get_by_role('button',name='Preview page').click()
        page.frame_locator('#workspace-preview iframe').get_by_role('heading',name='My first webpage').wait_for()
        select(1); page.get_by_role('button',name='Enable smart editor').click()
        page.get_by_text('Monaco · VS Code editor core',exact=True).wait_for(timeout=20000)
        assert page.locator('.monaco-editor').count()>0
        # Editor model must really be editable and save back to the persisted workspace.
        page.locator('.monaco-editor textarea.inputarea').focus()
        page.keyboard.press('Control+a'); page.keyboard.insert_text('console.log(123);')
        page.wait_for_function('JSON.parse(localStorage.getItem("fabready.workspace.v1")).files[1].code.includes("console.log(123);")')
        for width in (1440,768,390):
            page.set_viewport_size({'width':width,'height':844})
            page.wait_for_timeout(250)
            assert page.evaluate('document.documentElement.scrollWidth <= window.innerWidth+2'),f'Horizontal overflow at {width}px'
        assert not errors,errors
        browser.close()
        print('PASS: actual browser JS, Python WASM, SQLite WASM, Monaco edit/save, HTML preview, mobile/tablet/desktop width, no page errors.')
finally:
    if server: server.terminate();server.wait(timeout=5)
