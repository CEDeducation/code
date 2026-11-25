<!-- 4.1 maintenance release; see QA_REPORT_4_1.md -->
# FabReady 4.4 — Local runtime and verification update

**New:** Open Developer Studio from the sidebar for free-form code, file tabs, output, assertion tests, and an extension library. See [Developer Studio guide](DEVELOPER_STUDIO.md). Vercel now runs `npm install` and `npm run build` to prepare the optional Monaco editor; the existing `public` output directory is unchanged. Locally use `npm install`, `npm run build`, then `npm run dev`. Original curriculum below is retained.

# FabReady 3 — Zero-to-Professional Software & AI Engineering Academy

**A Vercel-ready interactive learning website, from programming foundations to advanced AI engineering and technical interviews.**

**Career focus:** help learners build evidence for high-value applied AI, data science, ML infrastructure, research and data engineering roles, with special attention to **Kaohsiung, Taiwan** and a personal target of **more than NT$100,000 fixed gross monthly base pay**. Bonuses, profit sharing, equity, allowances and overtime do **not** count toward the target. This is an aspiration and filtering criterion, **not** a guaranteed outcome, recruiter endorsement or salary prediction.

## What is inside (version 3.0)

| Component | Included | Real limitation |
|---|---|---|
| Digital textbook | **39 modules / 158 individual lessons**, worked examples, misconceptions, practice prompts, answers and quizzes | Lessons introduce and explain significant topics; they are not all comprehensive academic monographs or references for every library function |
| Software laboratory guides | **43 practical walkthroughs**: Python/VS Code, Git, SQL/PostgreSQL, PyTorch, Docker, FastAPI, RAG, WSL, tests, CI, Spark/Kafka/Airflow/dbt, MLflow, AWS/GCP, Kubernetes, metrics, security and more | Cloud operations require the learner to create authorized external accounts and manage costs; documentation changes over time |
| Interactive coding | **22 SQL + 38 Python + 12 JavaScript challenges (72 total, across two workbenches)**. SQL runs against fictional factory tables; Python code executes in a browser worker. Fourteen advanced Python tasks use multiple assertion tests | SQL engine is SQLite rather than PostgreSQL; full build installs and serves local sql.js and Pyodide assets; unit checks do not prove general engineering skill |
| Exam and tutor | Lesson-by-lesson MCQs, 10-question mixed exam, free-response exercises, optional lesson-aware AI tutor and limited offline heuristic hints | Self-study answers are not independently graded; the online tutor needs a server-side API key and is fallible |
| Advanced career tracks | **6 selectable specialist roles**, per-track check progress, **12 self-attested evidence gates**, portfolio links and job-fit tracker | Checkboxes/evidence links are self-reported; nothing verifies a hire, professional seniority or global top percentile |
| Senior interview practice | **12 demanding technical case interviews** with solution outlines and a transparent keyword-based rubric | The keyword rubric is *not* an AI examiner or official assessment |
| Industry project portfolio | **7 detailed multi-stage capstones and 8 coding project briefs**, spanning semiconductor vision/yield, RAG, healthcare, fintech, data platforms and forecasting; **3 runnable starter kits** | Capstones are specifications that the learner must independently implement. The starters are teaching examples, not completed trained production models |
| Career management | Local Kaohsiung role tracker and **fixed-base salary** field; distinguishes worksite and unverified salary | No live job board or independently verified offer feeds |
| Learning continuity | Browser local storage, progress export JSON | No login, cloud progress sync or independent grading yet |

## Topics, in deliberate order

**Foundation (modules 00–13):** software and computer setup, semiconductor manufacturing, Python, statistics, pandas, data modeling, SQL, supervised ML, sensor/anomaly analytics, computer vision, model APIs, Docker/MLOps basics, RAG, projects and Taiwanese career terminology.

**Professional depth (modules 14–27):** production Python contracts/testing/concurrency; algorithms/data structures; query plans and transactions; causal inference/calibration/statistical design; advanced ML; Transformer/attention/GPU training; LLM evaluation, agent and prompt-injection boundaries; Spark/Kafka/Airflow/dbt and data contracts; cloud/IAM/Kubernetes/observability; ML system design, SLOs, retries and cost; access control and privacy; healthcare/fintech/industrial applications; senior technical interviews; base-salary strategy and Kaohsiung worksite verification.

Start with **[ZERO_TO_PRO_ROADMAP.md](ZERO_TO_PRO_ROADMAP.md)**, which lists the entire updated curriculum in learning order. The earlier **[PROFESSIONAL_SKILL_MATRIX.md](PROFESSIONAL_SKILL_MATRIX.md)** and **[PROFESSIONAL_ROADMAP_72_WEEKS.md](PROFESSIONAL_ROADMAP_72_WEEKS.md)** document the inherited v2 AI-specialist path. The earlier **[LEARNING_ROADMAP.md](LEARNING_ROADMAP.md)** is a shorter 36-week foundation path; it is not sufficient by itself for senior-level roles.

**New software engineering depth (modules 28–38):** absolute beginner programming, Python fluency, algorithms, web fundamentals, TypeScript/React/Next.js, backend, operating systems, testing, architecture, C/Java introductions and independent project delivery. The six-phase pathway is deliberately ordered by prerequisites rather than module numbering.

Click **Zero-to-pro coding** in the website sidebar. Use Guided practice initially, then use Independent mode without external help. This mode hides hints and references, but is not a proctored exam; all tests are inspectable in source. Use only your own trusted snippets in the local runners, not hostile code. Progress stays in your browser.

## File organization

```text
fabready-professional/
├── public/
│   ├── index.html
│   └── src/
│       ├── app.js                     # SPA, navigation, labs, tutor, salary/role tracker, interview cases
│       ├── curriculum.js              # Foundation modules and lessons
│       ├── coding-academy.js          # 47 new software engineering lessons
│       ├── coding-drills.js           # 30 new Python/JS challenges and reference tests
│       ├── coding-path.js             # six phases, eight coding project briefs
│       ├── coding-guides.js           # eight new software tutorials
│       ├── javascript-worker.js      # local educational JavaScript runner
│       ├── professional.js            # 56 detailed advanced lessons / 14 modules
│       ├── software.js                # 15 foundation software manuals
│       ├── professional-guides.js     # 20 additional professional software manuals
│       ├── professional-labs.js       # 28 additional interactive Python/SQL problems
│       ├── professional-projects.js   # 7 role-targeted, 8-stage capstone briefs
│       ├── sql-worker.js              # SQLite/WASM against entirely fictional factory tables
│       ├── python-worker.js           # Pyodide interpreter and assertion tests
│       └── style.css
├── starter-kits/
│   ├── factory-yield/                 # Correct pooled-yield functions with standard-library tests
│   ├── secure-rag/                    # Citation/permissions retrieval baseline with tests
│   └── fastapi-service/               # Toy validated API, tests and Dockerfile
├── api/tutor.js                       # Optional server-side OpenAI tutor
├── scripts/check.mjs                  # Static content and syntax checks
├── scripts/smoke.mjs                  # SPA route, quiz and storage smoke tests
├── PROFESSIONAL_SKILL_MATRIX.md
├── PROFESSIONAL_ROADMAP_72_WEEKS.md
├── CAPSTONE_SPECIFICATIONS.md
├── LEARNING_ROADMAP.md
├── vercel.json
└── package.json
```

## Run it on your computer

Requires Node.js **20+**, Python **3+**, and a modern browser. The core reading and JavaScript practice interface does not require npm packages. The full browser coding environment requires the pinned dependencies.

```bash
cd fabready-professional
npm install
npm run build
npm test
npm run dev
```

Visit **http://localhost:3000**. In Windows PowerShell, `npm run dev` requires Python accessible via the `python3` command; otherwise use `py -m http.server 3000 --directory public` from the project root.

Opening `public/index.html` directly with `file://` is not supported: module and worker security policies generally block it. Python and SQL labs use same-origin runtime files produced by the full build, not third-party CDNs. If you cannot install dependencies, run `npm run build:core` and `npm run dev` to use the textbook, quizzes, basic editor and JavaScript exercises. Python/SQL and Monaco will report missing assets until you complete the full build. Advanced third-party Python packages may still require internet access.

### Practice starter kits

```bash
cd starter-kits/factory-yield
python yield_analysis.py
python -m unittest discover -s tests -v

cd ../secure-rag
python -m unittest discover -s tests -v

cd ../fastapi-service
python -m venv .venv
# Activate your virtual environment
pip install -r requirements.txt
python -m pytest -q
```

The FastAPI kit includes `Dockerfile` and documents how to set a server-side demo token. Its score is a **toy rule** that is explicitly labeled as *not a trained model*.

## Deploy on Vercel

1. Push **the extracted folder contents** to a GitHub repository. Preserve `api/`, `public/` and `vercel.json` at the repository root. Never publish `.env` or personal credentials.
2. Open <https://vercel.com/new>; import that repository; choose **Framework Preset: Other** and root directory `/` (repo root). `vercel.json` specifies the static `public` output folder. The `npm run build` command validates content but does not bundle frontend files.
3. Deploy and verify the `/#dashboard`, `/#book`, `/#pro`, `/#interview`, `/#portfolio`, `/#career` and laboratory views.
4. Optional personal-use tutor: configure `OPENAI_API_KEY`, set `ENABLE_AI_TUTOR=1`, and set a long random `TUTOR_ACCESS_CODE` in **Project → Settings → Environment Variables**. Enter that private code in the lesson tutor panel (kept in the current page session, not written to local storage). Without all three values, the remote AI remains **off** and the limited local coach responds. Optional `OPENAI_MODEL` chooses the model. Redeploy after environment-variable changes.
5. **Do not enable a public paid AI endpoint without user authentication, durable rate limits, abuse protection, spend controls and privacy disclosures.** A shared access secret is only a basic gate for a personal prototype, not professional user authentication or durable rate limiting. The bundled function is not safe for unrestricted public traffic. An OpenAI API key is separately billed and not equivalent to a ChatGPT subscription.

There is no connected Vercel account in the package and no live domain has been published for you. A real deployment also requires Vercel account authorization. UI functionality has been smoke-tested in a mocked browser environment; no end-to-end browser or hosted service test is asserted.

## What the career goal means

- **Monthly base target:** Strictly **more than NT$100,000** gross fixed contractual monthly salary, not annual bonus divided by 12. The application tracker treats exactly NT$100,000 as **not above** target; the smallest integer eligible base is NT$100,001.
- **Kaohsiung-only worksite:** get the actual work location in writing; an employer's Taiwan headquarters location does not establish where the role is based.
- **Evidence beats course completion:** a passing quiz is not a professional skill credential. A senior-level claim requires an independent engineering work sample, tests, architecture/operations documentation, reviewers and interview performance.
- **High-paying roles may require experience:** academic PhD research may transfer strongly to research/data science, while platform operations and senior engineering roles frequently require production systems experience not replaceable by a course.

## Data/ethics/accuracy

- The built-in SQL database is **completely fictional**; do not present it as real fab telemetry.
- Public **UCI SECOM** data has manufacturing observations and labels, but is **not** verified continuous equipment predictive-maintenance time series.
- **WM-811K** has many more total maps than labeled maps. Verify exact label counts, licensing, mirrors and split leakage conditions in the dataset release you use.
- Never redistribute confidential fab, patient or customer records. Respect terms of datasets and standards. No clinical project is represented as a medical device.
- Offline tutor and interview rubric are limited heuristics; AI responses may be wrong and should be checked against code, tests and reputable sources.

## Current product boundaries

This release does **not** guarantee hiring, income, global ranking, or senior engineer status. It is not an exhaustive reference book covering every Python/PyTorch/SQL software API, and does not include real employer integrations, account sync, certified exams, full capstone implementations, GPU compute, or a production multi-user backend. It is a **real Vercel-ready learning application and sizable first advanced curriculum**, designed to be extended and to make independent work possible.


## Version 3 test results and constraints

`npm test`, `npm run test:coding`, `npm run test:sql`, and `npm run test:starters` passed locally. All 30 new reference implementations pass their supplied tests, and all 30 unfinished or deliberately broken starters fail. The JavaScript worker handler was also tested using a Node shim. The optional Chromium test (`python scripts/check_browser.py`, requires Playwright and Chromium) could not navigate to localhost in the restricted build environment (`ERR_BLOCKED_BY_ADMINISTRATOR`). Actual browser rendering, CDN-based Python/SQL runtimes and live Vercel/API behavior remain unverified. No deployment has been performed. This is a larger curriculum release, not the proposed future 500-lesson/3,000-exercise scale or an accredited degree.

## 4.1 reliability audit

See [QA_REPORT_4_1.md](QA_REPORT_4_1.md) for fixes, regression coverage, outstanding browser/deployment tests, and the pre-deployment checklist. Use the Export/Restore buttons to back up progress and workspace files separately.

## 4.2 verification

See [QA_REPORT_4_2.md](QA_REPORT_4_2.md). Run `npm test` and `python scripts/check_all_labs.py` for repeatable checks. The GitHub Actions workflow installs dependencies, builds, tests and performs a dependency audit on pushes/PRs. The workflow has not run in this environment. Real browser and live Vercel acceptance tests are still required. Advanced Python practice references are in `scripts/advanced_python_references.py`; try exercises independently before reading them.

## 4.3 verification status

See [QA_REPORT_4_3.md](QA_REPORT_4_3.md). Local tests passed, but the production build, dependency audit, real browser and live deployment are blocked/unverified. A missing Monaco dependency now fails the build; use `npm install` before `npm run build`. The CI workflow requires real browser tests (`npm run test:browser`) after installation and build. Do not treat a simulated DOM pass as a production pass.

## 4.4 current verification

See [QA_REPORT_4_4.md](QA_REPORT_4_4.md). The full build now requires Monaco, Pyodide and SQLite WASM, and copies their runtime files to `public/vendor`. Vercel runs this full build, not the core-only command. The first dependency installation needs internet access.

- `npm run build:core`: no-package source/curriculum validation; not a complete release build.
- `npm run test:all`: dependency-free JavaScript source and interface checks plus native Python/SQLite exercise checks and starter-project tests (the latter requires the listed Python dependencies).
- `npm install && npm run build && npm run test:runtimes`: real dependency build and WASM integration in Node.
- `npm run test:browser`: real Chromium end-to-end tests; install Playwright and Chromium first.
- `FABREADY_TEST_URL=https://YOUR-SITE.vercel.app npm run test:browser`: checks an actual hosted deployment. Use a real authorized deployment URL.
- `/diagnostics.html`: browser runtime self-check (not an external security audit).

The full build, browser tests, dependency audit and remote tutor still require verification outside the restricted environment. See report for actual results. The CI workflow is provided but has not been run on GitHub here.
