# Starter kit 3 — Authenticated toy FastAPI model service

This is an **API development template**. Its demo score is a deterministic formula, **not trained AI** or a real failure predictor. It returns HTTP 503 until `DEMO_API_TOKEN` is set on the server; never put this value in a publicly distributed client.

```bash
python -m venv .venv
# activate your virtual environment
pip install -r requirements.txt
python -m pytest -q
export DEMO_API_TOKEN=local-dev-only
uvicorn service:app --reload
```

On Windows PowerShell set the environment variable with `$env:DEMO_API_TOKEN='local-dev-only'`.

Test `/health` and POST `/predict` in the automatic `/docs` page. Use synthetic request `{"tool_id":"T01","temperature_c":72,"pressure_kpa":110}` and a matching header `x-api-token`. Build with `docker build -t fabready-toy-api .`; supply the token using Docker environment configuration when running locally. Keep Docker and external ports private during experimentation.

Professional upgrades: identity-based auth rather than a shared static token, robust rate limits, telemetry, trained model loading with provenance and a validated prediction contract, CI quality gates, load testing, secure HTTPS gateway and deployment/rollback plan.
