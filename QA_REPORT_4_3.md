# FabReady 4.3 — verification gate and regression audit

**Verdict: LOCAL TESTS PASS; PRODUCTION VERIFICATION BLOCKED.** This is a maintenance release of the actual 4.2 archive, not a claim of 100% correctness or an exhaustive line-by-line proof. All 39 modules, 158 lessons, 43 guides, 72 exercises and existing projects are retained. The verification steps deliberately distinguish local execution, simulated DOM, VM workers and live browser execution.

## Fixed in this release

- Route transitions previously rendered synchronously and again on hashchange, rebuilding editors and potentially losing transient state or launching duplicate editor loads. Centralized route-state resets, invalidated stale tutor requests immediately, and suppressed the redundant render. Browser history navigation remains handled.
- Malformed local editor drafts (objects, arrays or other non-string JSON) now fall back to the authored starter instead of becoming invalid code.
- Developer Studio handles synchronous worker postMessage failures immediately rather than leaving the interface running until its timeout. Remote tutor responses must contain a nonempty string. Lab clipboard failures produce actionable feedback.
- A production build now **fails** if Monaco is absent instead of silently claiming success with the fallback editor. Basic editing remains available during local development.
- Starter-kit test script fails if required FastAPI test dependencies are missing; it cannot silently report a skipped suite as a pass.
- Added regression tests for the route fix, corrupt drafts and worker messaging. Ran the actual JavaScript worker code in a Node VM against all 12 JS challenge references and incomplete starters.
- Added real Chromium test gate in GitHub Actions after dependency install, build and local tests. It requires actual Python/SQLite WASM, Monaco editing and persistence, JS execution and assertions, HTML preview and layout widths. The test code was syntax-checked, not successfully executed in this environment. It can be run against a live Vercel URL too.

## Results from this audit

| Verification | Status |
|---|---|
| `npm test`: 39 modules, 158 lesson routes, 43 guide routes, quiz/route structure, simulated UI and persistence, worker VM, mocked API, 4.3 regressions | PASS (exit 0) |
| `python scripts/check_all_labs.py`: 22 SQL references, 30 drill references and 30 failing starters, six beginner Python examples, 14 advanced Python references and 14 failing starters | PASS (exit 0) |
| `python scripts/check_starters.py`: 3 yield + 3 RAG + 4 FastAPI tests | PASS (exit 0) |
| Python syntax check for both browser test scripts | PASS |
| `npm install` | BLOCKED (EAI_AGAIN resolving registry.npmjs.org) |
| `npm run build` | FAIL / BLOCKED (Monaco dependency absent; correctly fails build now) |
| `npm audit --offline --audit-level=high` | BLOCKED (ENOLOCK, no dependency lock generated because install failed) |
| Chromium `check_browser.py` | BLOCKED (ERR_BLOCKED_BY_ADMINISTRATOR before page load) |
| Chromium `check_studio.py` | NOT RUN to completion; requires Monaco install, browser navigation and CDN access |
| GitHub Actions / live Vercel / actual paid AI tutor | NOT RUN |
| Visual layout, full accessibility, cross-browser/mobile compatibility, external links and comprehensive security/load tests | NOT VERIFIED |
| Every line of code and every educational claim manually reviewed and independently validated | NOT VERIFIED |

Local test results establish only the behavior exercised by those tests. The code runner executes user-provided code in browser workers; this is not a hardened sandbox or a secure exam environment. Run only trusted code. Python and SQL still depend on third-party CDN availability. Remote tutor is disabled by default and uses a private access code for personal use; public deployment needs proper authentication, rate limiting, privacy and abuse controls. Progress remains local; export backups. No guarantee of employment, salary, or global rank.

## Required release steps

1. On a network-enabled machine, unpack the archive. Run `npm install` (commit the generated lockfile), `npm run build`, `npm test`, `python scripts/check_all_labs.py`. Install `pip install -r starter-kits/fastapi-service/requirements.txt` and run `python scripts/check_starters.py`. Run `npm audit --audit-level=high`; review and remediate findings. Use the committed lockfile for future `npm ci` builds.
2. Install `pip install playwright` and `python -m playwright install chromium`. Run `npm run test:browser` (or set `CHROMIUM_PATH` to a local Chromium executable). Real browser tests must pass; inspect browser console and perform manual keyboard/accessibility/visual checks on target browsers. The test scripts are not substitutes for a complete visual inspection.
3. Push to GitHub and confirm the workflow in `.github/workflows/quality.yml` passes. Import repository into Vercel with the supplied configuration. Do not report production readiness if a required gate is red or skipped.
4. Run `FABREADY_TEST_URL=https://your-deployment.vercel.app python scripts/check_studio.py` (PowerShell: `$env:FABREADY_TEST_URL='https://your-deployment.vercel.app'; python scripts/check_studio.py`) and confirm the actual deployment. Check HTTP headers and optional tutor endpoint. For private tutor testing, configure server-side credentials and controlled usage as described in README; verify an actual request. Keep the remote feature disabled for public use until durable protections are implemented.
5. Independently verify textbook facts, external resources and exercise pedagogy. Conduct security and performance testing appropriate to the actual deployment. Record each result and fix failures before calling it fully tested.
