"""Optional Chromium smoke test: pip install playwright; set CHROMIUM_PATH if needed."""
import os, subprocess, sys, time, socket, urllib.request
from pathlib import Path
from playwright.sync_api import sync_playwright
root=Path(__file__).resolve().parents[1]
base=os.environ.get('FABREADY_TEST_URL','').rstrip('/')
with socket.socket() as s:
 s.bind(('127.0.0.1',0)); port=s.getsockname()[1]
server=subprocess.Popen([sys.executable,'-m','http.server',str(port),'--bind','127.0.0.1','--directory',str(root/'public')],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
try:
 for _ in range(50):
  try:
   with urllib.request.urlopen(f'http://127.0.0.1:{port}',timeout=1): pass
   break
  except OSError: time.sleep(.1)
 else: raise RuntimeError('Local server unavailable')
 with sync_playwright() as p:
  browser=p.chromium.launch(**({'executable_path':os.environ['CHROMIUM_PATH']} if os.environ.get('CHROMIUM_PATH') else {}),args=['--no-sandbox'])
  page=browser.new_page(viewport={'width':1440,'height':1000}); errors=[]
  page.on('pageerror',lambda e:errors.append(str(e)))
  page.goto((base or f'http://127.0.0.1:{port}')+'/#coding',wait_until='domcontentloaded')
  page.get_by_role('heading',name='Learn to code yourself.').wait_for()
  page.get_by_role('button',name='Independent · no hints or solutions').click()
  assert page.get_by_role('button',name='Reveal reference').count()==0
  page.locator('[data-action="coding-pick"][data-index="18"]').click()
  page.locator('#coding-editor').fill('function double(n){return n*2;}')
  page.get_by_role('button',name='Run tests →').click()
  page.get_by_text('PASS · All programmed assertions passed.',exact=False).wait_for(timeout=10000)
  assert page.evaluate("JSON.parse(localStorage.getItem('fabready.v2')).codingResults.j01.independent")
  page.locator('[data-action="coding-pick"][data-index="20"]').click()
  page.get_by_role('button',name='Run tests →').click()
  page.get_by_text('NOT PASSED · Read the first error',exact=False).wait_for(timeout=10000)
  page.reload(wait_until='domcontentloaded'); page.get_by_text('1/30 challenges passed',exact=False).wait_for()
  page.get_by_role('button',name='Start from absolute zero →').click();page.get_by_role('heading',name='Files, folders and the terminal').wait_for()
  page.set_viewport_size({'width':390,'height':844});page.goto((base or f'http://127.0.0.1:{port}')+'/#coding',wait_until='domcontentloaded');page.get_by_role('heading',name='Learn to code yourself.').wait_for()
  assert page.evaluate('document.documentElement.scrollWidth <= window.innerWidth + 2'), 'Mobile horizontal overflow'
  assert not errors,errors
  browser.close()
  print('PASS: Chromium desktop/mobile, JS worker pass and fail, independent mode, saved progress, navigation, no page errors.')
finally:
 server.terminate();server.wait()
