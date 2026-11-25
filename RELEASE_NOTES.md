## 4.3 — verification gate

Fixed duplicate route rendering, invalid draft restoration, worker-send error handling and tutor response validation. Made Monaco production build and FastAPI test dependencies mandatory. Added browser release gate and regression tests. Local checks passed; live browser and build blocked by environment. See QA_REPORT_4_3.md.

# Version 4.1 — Reliability audit

See [QA_REPORT_4_1.md](QA_REPORT_4_1.md) for the findings, verification and limitations. This release preserves the 4.0 curriculum and adds corrective changes and regression tests.

# Version 4.0 — Developer Studio

Added free-form local files, Python/JS/SQL execution, custom assertions, HTML/CSS preview, draft saving, optional Monaco, desktop VS Code recommendations and an extension tutorial library. All original modules retained. Source checks and Node-based Studio tests pass. Full Chromium navigation was blocked by policy and npm access was unavailable; live Monaco, browser runtime and Vercel deployment remain unverified. See DEVELOPER_STUDIO.md for details.

# FabReady 3.0 — release notes

## Added
- 11 new modules / 47 original lessons (39 modules / 158 lessons overall).
- 8 new software walkthroughs (43 total).
- New independent coding workbench with 18 Python and 12 JavaScript challenges. Combined with original 42 labs, total is 72 executable tasks. Seven of the new tasks are deliberately broken-code repair exercises.
- Six-phase, 96-week suggested pathway; 8 new coding project briefs plus inherited 7 specialized capstones; software/backend role track (6 tracks total).
- Independent mode hides help/reference code while attempting a problem; progress is local and self-assessed. It is not proctored or secure against inspecting the source.
- Updated optional tutor prompt for beginner code tracing and debugging. Requires separately configured private access code and API key; live calls are untested.

## Verification
- PASS: syntax and curriculum integrity, 158 reader views, 43 guides, route smoke tests, quiz and local progress handling, fallback tutor and access checks (`npm test`).
- PASS: all 30 new solutions execute correctly in CPython/Node against supplied assertions; all 30 unfinished/broken starters rejected (`npm run test:coding`).
- PASS: all 12 JavaScript worker solution/failure cases via local Node shim.
- PASS: 14 prior advanced SQL reference queries against seeded SQLite; three inherited starter kits' tests.
- BLOCKED: Chromium localhost navigation returned ERR_BLOCKED_BY_ADMINISTRATOR. Full browser/visual test, real CDN Python/SQL runtime, hosted tutor and Vercel deployment remain unverified. Optional browser test provided for use outside restricted environment.

## Remaining scope
The proposed long-term 500+ lesson / 3,000+ practice problem academy is not completed. Current lessons provide a structured, substantial foundation and project specs, not exhaustive software API references or all professional experience. C and Java are introductory; primary languages are Python, SQL and JavaScript/TypeScript. Coding tests cover supplied cases, not all possible inputs, complexity requirements or independent skill. The target salary is not guaranteed. Run only trusted learner code; the browser worker is not a hostile-code security boundary. No user login or cloud progress sync yet. No live Vercel deployment.

## 4.4 — Local runtime and verification edition

Same-origin Monaco, Pyodide and sql.js runtime build; system fonts; dependency-free core check; real Node thread grading/cancellation regression; browser diagnostics and strict real-runtime CI gate. See QA_REPORT_4_4.md for actual results and remaining blockers. This release does not claim a successful full production build or browser test in the restricted environment.
