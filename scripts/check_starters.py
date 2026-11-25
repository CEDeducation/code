"""Run bundled starter-kit tests in proper working directories."""
from pathlib import Path
import subprocess
import os
import sys
root=Path(__file__).resolve().parents[1]
for name in ('factory-yield','secure-rag'):
    cmd=[sys.executable,'-m','unittest','discover','-s','tests','-v']
    subprocess.run(cmd,cwd=root/'starter-kits'/name,check=True)
try:
    import fastapi,pytest,httpx  # noqa: F401
except ImportError:
    raise SystemExit('FAIL: FastAPI kit dependencies missing. Install starter-kits/fastapi-service/requirements.txt.')
else:
    subprocess.run([sys.executable,'-m','pytest','-q'],cwd=root/'starter-kits'/'fastapi-service',check=True,env={**os.environ,'PYTEST_DISABLE_PLUGIN_AUTOLOAD':'1'})
print('PASS: starter-kit checks completed')
