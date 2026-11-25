# FabReady 4.1 — reliability audit

**Scope:** Source-level maintenance release of FabReady 4.0. The 39 modules, 158 lessons, 43 software guides, 72 practice coding challenges, 19 extension guides and 15 project briefs remain. No guarantee of employment, salary or global ranking is implied.

## Findings and fixes

| Finding | Fix |
|---|---|
| SQL grader sorted answers, ignoring required order | Compare ordered rows, column names and row counts with numerical tolerance. Reject results exceeding 200 rows rather than silently grading a truncated prefix. |
| Multiple SQL statements could be silently compared using only the first result | Use SQL.js statement iteration, allow exactly one result-producing SELECT/WITH query, and set SQLite query_only. The conservative keyword filter may reject legitimate quoted text. |
| LEFT JOIN challenge claimed to include unused equipment but all seeded equipment was used | Added fictional T04 with no wafers or sensor readings. |
| A running lab could be switched to another challenge and credit the wrong index | Guard controls while busy and capture the challenge index at start. |
| Lab Python worker could retain interpreter state and accumulate error listeners | New Python worker per run; remove listeners when settled; terminate on failure or cancellation. |
| Long-running challenges could not be stopped | Stop controls on Python/SQL/JS challenge screens; clear Studio timer immediately on Stop and ignore late callbacks. |
| Preview lost on UI re-render | Restore isolated HTML/CSS preview for the active file. |
| Workspace exports could not be restored; malformed saved file index could break the editor | Validate backup names, extensions, data and selection; restore after explicit replacement confirmation. |
| Progress exports could not be restored | Add validated progress JSON import with replacement confirmation. |
| Corrupt saved progress or malformed URL encoding could crash views | Normalize stored data and guard URI decoding. |
| Leading newline could disappear in textareas | Preserve it during HTML parsing. |
| A remote lesson tutor response could arrive in another lesson | Ignore stale responses and prevent duplicate requests; client timeout. |
| A Python program could grow captured output without bound | Limit output capture; preserve trace output on errors. JS distinguishes a run from assertion testing. |
| Basic editor trapped Tab; failure to load Monaco offered no retry | Escape/Tab keyboard exit; Ctrl+M toggles indent; retry button, focus and reduced-motion improvements. |
| Tutor accepted the entire request before checking length | Bound streamed request body at 10 KB; compare private access secret with timing-safe comparison. Tutor remains disabled by default. |

## Checks performed in this session

- `npm test`: source syntax, all 158 lesson routes, all 43 guide routes, major UI route rendering (mock DOM), quiz/progress persistence and API fallback; Studio JavaScript worker and file/test persistence (VM); regression suite for cancellation, late response, backup restore/reject and SQL grading (stubbed iterator). See terminal results.
- `python scripts/check_sql.py`: 14 advanced reference SQL queries passed on actual SQLite via CPython, using the updated seed.
- `python scripts/check_starters.py`: three starter kits passed their local tests (Python unit tests and FastAPI pytest tests).
- Full `check_coding.py` reference-solution rerun did not complete within this session's execution limit. No new challenge content was added in this patch.
- Chromium navigation attempt failed with `ERR_BLOCKED_BY_ADMINISTRATOR`. No real browser rendering, mobile layout, live Monaco, Pyodide or SQL.js WASM tests were completed in this session. Source/VM checks are not a substitute.
- No live Vercel deployment or real paid AI request was made. Monaco dependency installation and vulnerability scan were not performed. API auth is a private-prototype gate, not durable multi-user rate limiting.

## Before deployment

1. Unzip and open the project root in desktop VS Code. Run `npm install`, `npm test`, `npm run build` and `npm run dev`. Open `http://localhost:3000`. If Monaco fails, basic editor remains available.
2. Run Python/JavaScript/SQL examples and tests, intentionally fail them, try Stop on an infinite loop, restore a backup, and check navigation and mobile layout. Use `python scripts/check_browser.py` and `python scripts/check_studio.py` with Playwright and Chromium installed; the latter tests the basic-editor fallback in a simulated missing-Monaco setup (it should not be run against a built vendor directory).
3. Run `npm audit` and review dependencies before deploying. Import into Vercel with output directory `public` and `npm run build`. Test on the real Vercel URL. Keep the tutor off until the key, private access code, and appropriate usage controls are configured.
4. Keep local backups. Storage is browser-specific, not an account-based synced system. Only execute trusted learning code, since workers are not a hostile-code security boundary.

## Remaining product gaps

A full multi-file IDE, true terminal/debugger, hidden server-graded tests, user accounts/cloud progress, durable rate limiting, offline runtimes, accessibility audit, real browser tests and a validated professional curriculum assessment remain future work. Use desktop VS Code for complete projects. Do not call this bug-free or equivalent to commercial professional learning systems.
