# FabReady 4.4 — Local-runtime verification report

Date: 2026-11-25. Source based on FabReady 4.3. This is a **core-verified source release**, not a production-certified deployment. All 158 lessons, 39 modules, 43 guides and 72 coding exercises are retained.

## Changes

- Removed third-party font requests and use system font stacks.
- Pinned Monaco 0.52.2, Pyodide 0.27.7 and sql.js 1.12.0 as build dependencies; `npm run build` copies same-origin runtime files and explicitly fails if any required asset is missing. Standard Python and SQLite labs no longer request CDN assets at initialization. Additional Python packages may require separate downloads. A hosted site still needs a connection to its own origin.
- Added `npm run build:core` for source/curriculum validation without npm dependencies. The core profile supports reading, quizzes, local coach, basic editor and JavaScript source practice; Monaco and Python/SQL execution require installed assets. This is not the Vercel production build.
- Added runtime integration gate (`npm run test:runtimes`) that requires real installed Pyodide and sql.js and checks assets; CI requires it before browser checks.
- Added actual Node worker-thread execution tests for JavaScript, missing-runtime tests, packaging fixture tests, and infinite-loop termination checks. Fixture assets are temporary and are NOT part of the release.
- Added browser diagnostics at `/diagnostics.html` (linked in Studio) for storage, real JS/Python/SQL workers, and Monaco loader availability. It does not test full Monaco editing, all UI paths or the remote tutor.
- Starter-project pytest now disables ambient third-party plugin auto-loading for reproducible bundled tests.
- Browser checks accept an authorized deployment URL through `FABREADY_TEST_URL`.

## Actual local results

| Check | Result | Scope |
|---|---|---|
| `npm run build:core` | PASS | Source syntax, static assets, curriculum structure |
| `npm test` stages | PASS | Simulated navigation for 158 lessons and 43 guides, progress, tutor fallback, worker and restore regression tests, mocked API cases, packaging fixtures |
| 12 JS reference/starter pairs | PASS | Actual JS worker source on Node worker threads; infinite loop terminated |
| `python scripts/check_all_labs.py` | PASS (exit 0) | 22 native SQLite reference queries, 30 Python/JS drill references and 30 failing starters, 6 beginner Python examples, 14 advanced Python references and failing starters |
| `python scripts/check_starters.py` | PASS (exit 0) | 3 yield tests, 3 retrieval tests, 4 FastAPI tests |
| `npm install --ignore-scripts --fetch-retries=0 --fetch-timeout=8000 --no-audit --no-fund` | FAIL (exit 1) | `EAI_AGAIN registry.npmjs.org` |
| `npm run build` | FAIL (exit 1) | Required vendor binaries missing after failed install; intended strict behavior |
| `CHROMIUM_PATH=/usr/bin/chromium python scripts/check_browser.py` | BLOCKED (exit 1) | `net::ERR_BLOCKED_BY_ADMINISTRATOR` on ordinary localhost navigation before app executes |
| `npm run test:runtimes`, full Studio browser suite | NOT RUN | Require installed dependencies; no valid assets available |
| `npm audit`, hosted Vercel deployment, real AI provider request | NOT VERIFIED | Registry/hosting/credentials unavailable |

A combined local command timed out in this environment; the source test stages completed and the native exercise and starter suites were rerun separately with exit 0. No test is marked as passed based on an incomplete run. Real visual UI, accessibility, browser compatibility, full security review, textbook factual review and every source line remain unverified. Local VM/Node/native checks are not equivalent to browser WASM or live production tests. The new packaging logic passed synthetic fixtures, not a real vendor build. There is no package lockfile yet because npm installation failed; the direct runtime versions are pinned but transitive dependency resolution is not verified.

## Full release gate (on an unrestricted, authorized development computer or CI)

1. `npm install` (commit generated lockfile after reviewing it; then use `npm ci` for reproducibility).
2. `npm run build` and `npm run test:runtimes`.
3. `npm run test:all` (install Python starter requirements first).
4. `npm audit --audit-level=high` and review dependencies; resolve or document findings.
5. `pip install playwright` and `python -m playwright install chromium`.
6. `npm run test:browser` and visually inspect desktop/mobile/tablet, keyboard navigation and actual editor behavior.
7. Deploy through Vercel. Open `/diagnostics.html`, then run `FABREADY_TEST_URL=https://YOUR-AUTHORIZED-SITE.vercel.app npm run test:browser`.
8. If private tutor is enabled, configure server-side secrets and verify a real request. Public multi-user service requires durable auth/rate limiting and security review.

The website cannot alter network DNS or browser administrator policies. No attempt was made to bypass those controls. A passing release gate does not imply absence of every possible bug or guarantee employment. The test results are not a claim that the curriculum is world-class or exhaustive.

References for packaging choices: https://pyodide.org/en/0.27.7/usage/downloading-and-deploying.html ; https://app.unpkg.com/pyodide@0.27.7 ; https://sql.js.org/documentation/index.html .
