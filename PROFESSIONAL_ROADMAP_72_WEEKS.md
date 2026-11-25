# FabReady Professional — 72-week intensive learning and evidence plan

**Objective:** build credible, transferable applied-AI / data-science / ML engineering skills, with a Kaohsiung-first job search and a personal salary filter of NT$100,000+ **fixed gross monthly base**. This is not an offer prediction. Actual progress depends on academic preparation, available hours, experience, Mandarin proficiency, external review and local vacancies.

**Suggested time:** 12–18 genuinely focused hours per week. About 864–1,296 hours across 72 weeks; more if starting with no programming experience. Work full-time or research commitments may require stretching the calendar. Do not count passive video hours as equivalent to coding hours.

**Weekly work format:** study theory (25%), implement from scratch (40%), test/review/debug (20%), document/communicate (15%). Keep an evidence log containing command outputs, commits, tests and a short design retrospective. Revisit earlier concepts at increasing difficulty.

## Stage 1 — Zero to independent programmer (weeks 1–12)

| Week | Focus | Work product, not just a watched lesson |
|---:|---|---|
| 1 | Windows terminal, paths, files, GitHub account | Reproduce an environment setup guide and document command outputs |
| 2 | VS Code, Python installation, venv, pip | Clean repository, `.gitignore`, reproducible environment |
| 3 | Numbers, strings, booleans, conditions | 12 microproblems with explicit tests and edge cases |
| 4 | Lists, dictionaries, sets, loops | Script that validates and deduplicates fictional records |
| 5 | Functions, arguments, return values | Correct pooled-yield function with 8 test cases |
| 6 | Errors, exceptions, files, JSON, CSV | Input validation layer and meaningful failures |
| 7 | Git history, branches, pull requests | Self-review or peer-reviewed pull request with issue description |
| 8 | Basic shell/Linux/WSL workflow | Automated check script that runs successfully from scratch |
| 9 | Type hints, dataclasses, `pytest` | Refactor starter kit with tests for missing/wrong types |
| 10 | Logs, debugging, complexity thinking | Reproduce and fix 5 seeded bugs and describe root causes |
| 11 | Intro to algorithms, sorting, search | Three implementations with Big-O explanations |
| 12 | Unseen checkpoint | Complete one timed Python challenge plus independently written tests |

**Gate 1:** explain your code line by line, run it on fresh test data, identify bad input and show version-controlled, reviewed evidence.

## Stage 2 — Mathematics, statistics and SQL (weeks 13–24)

| Week | Focus | Work product |
|---:|---|---|
| 13 | Linear algebra, vectors, matrices | Hand-computed dot products; match NumPy output |
| 14 | Calculus and gradients | Derive gradient for a basic least-squares loss |
| 15 | Probability and Bayes | Base-rate and false-positive scenario, with numeric proof |
| 16 | Distributions and sampling | Sampling simulation and bootstrap interval explanation |
| 17 | Statistical testing and p-values | Written decision under assumptions and limitations |
| 18 | Experiment design and confounding | Valid randomized/observational study proposal |
| 19 | PostgreSQL and schema basics | Create normalized lots/tools/measurements schema |
| 20 | SELECT/WHERE/NULL/aggregations | Independent answer to 10 unseen SQL tasks |
| 21 | JOIN cardinality and grain | Demonstrate and fix row multiplication |
| 22 | Windows/CTEs/time-safe operations | LAG/ROW_NUMBER latest readings with deterministic ties |
| 23 | Indexes, EXPLAIN, transactions | Before/after query plan and transaction rollback demo |
| 24 | Unseen checkpoint | Timed SQL plus statistics oral defense |

**Gate 2:** never mix units, denominators, data grains, time order or false-discovery interpretations.

## Stage 3 — Production-quality data science (weeks 25–36)

| Week | Focus | Work product |
|---:|---|---|
| 25 | pandas, NumPy, schema contracts | Validated ETL with raw/processed separation |
| 26 | Missingness, outliers, leakage | Missing-data audit and written handling policy |
| 27 | Baseline models and experiment control | Reproducible logistic/majority models, fixed splits |
| 28 | Tree models, XGBoost, feature engineering | Controlled comparison under untouched holdout |
| 29 | Imbalanced data: PR, precision, recall | Operating-threshold report tied to false-alarm capacity |
| 30 | Calibration and uncertainty | Reliability diagram and comparison to baseline |
| 31 | Cross-validation and clustered records | Group/time-safe split proof |
| 32 | Explainability and failure modes | SHAP association analysis without causal overclaims |
| 33 | Causal inference fundamentals | DAG/confounder identification and sensitivity discussion |
| 34 | Time-series forecasting | Rolling-origin backtest vs seasonal naive |
| 35 | Drift, shift and changing base rates | Simulated changing population and monitoring plan |
| 36 | Unseen checkpoint | From raw data to defensible model card in a time box |

**Gate 3:** report failures, uncertainty, reproducibility and business costs. A single F1 or accuracy number is never enough.

## Stage 4 — Deep learning, vision and generative AI (weeks 37–48)

| Week | Focus | Work product |
|---:|---|---|
| 37 | Tensors, autograd, batch training | Implement train/val loop without copying a notebook |
| 38 | CNNs, image augmentation, imbalance | Reproducible wafer/medical-image baseline |
| 39 | Optimizers, regularization, numerical stability | Diagnose divergent training with controlled experiments |
| 40 | Attention and Transformer internals | Work through scaled dot-product attention with dimensions |
| 41 | Transfer learning and model selection | Parameter/latency/memory vs performance comparison |
| 42 | GPU and mixed-precision fundamentals | Structured benchmark and fallback plan |
| 43 | Embeddings and retrieval baselines | Exact and vector retrieval comparison; recall@K |
| 44 | RAG architecture and source citations | Synthetic document assistant with citations and abstention |
| 45 | LLM evaluation and security | Prompt-injection, unsupported-answer and access-control tests |
| 46 | Agent tooling and control boundaries | Constrained tool-calling workflow with audit logs |
| 47 | Advanced model tradeoffs and research reading | Summarize paper with assumptions, methods and limits |
| 48 | Unseen checkpoint | ML + LLM system debugging defense |

**Gate 4:** independently debug training, measure model quality and distinguish generated answers from source-supported findings.

## Stage 5 — Systems, platforms, security and production (weeks 49–60)

| Week | Focus | Work product |
|---:|---|---|
| 49 | FastAPI, Pydantic, REST APIs | Validated scoring endpoint, health/readiness, API contract |
| 50 | pytest, integration tests, CI | Automated unit/integration checks on push |
| 51 | Docker and environment reproducibility | Build, run and roll back pinned image versions |
| 52 | Data engineering architecture and data contracts | Idempotent ingestion with event ID and replay test |
| 53 | Airflow and dbt foundations | Scheduled synthetic ETL with tests and backfill |
| 54 | Kafka and streaming semantics | Retry/out-of-order/duplicate-event experiment |
| 55 | Spark and performance | Local parallel data aggregation and shuffle diagnosis |
| 56 | MLflow, model registry, experiment tracking | Versioned run, feature and model artifact traceability |
| 57 | Cloud IAM and cost | Least-privilege deployment plan with spending guardrails |
| 58 | Kubernetes, rollout and rollback | Isolated sandbox deployment with health probes |
| 59 | Observability, p95/SLOs, security | Trace slow requests, test auth, write incident runbook |
| 60 | Unseen checkpoint | Design a resilient ML system under fixed cost and failure constraints |

**Gate 5:** independently demonstrate a tested service, repeatable deployment, least-privilege access, observability and recovery plan. **The starter demos are not themselves production readiness.**

## Stage 6 — Specialization, interview defense and hiring (weeks 61–72)

| Week | Focus | Work product |
|---:|---|---|
| 61 | Choose role track and job requirements | Verified Kaohsiung role matrix: must-have vs nice-to-have |
| 62 | Capstone A: data/source audit | Traceable public dataset, license and leakage protocol |
| 63 | Capstone A: implement and compare | Tested baseline + model, honest error analysis |
| 64 | Capstone A: release and explain | API, model card, reproducibility instructions, video walkthrough |
| 65 | Capstone B: data pipeline | SQL/data-engineering pipeline with reliable retry behavior |
| 66 | Capstone B: reliability | Security, performance, monitoring and failure-response evidence |
| 67 | Capstone C: specialist choice | RAG/healthcare/vision/fintech project matched to desired industry |
| 68 | Capstone C: validation | Independent test set and adverse-case evaluation |
| 69 | Senior engineering interviews | 12 cases, whiteboard architecture, timed Python and SQL |
| 70 | Technical communication, workplace Mandarin | 5-minute project pitch, bilingual problem clarification |
| 71 | Applications with strict salary filter | Only independently verified worksite and fixed-base expectations prioritized |
| 72 | External portfolio reviews and retrospective | Fix reviewer objections; identify next 3–6 months' targeted improvements |

**Gate 6:** publish at least **three substantial, independently built and reviewable projects**, with code, tests, README, system diagram, metrics and limitations. Pass mock interviews by independent reviewers; check each salary/worksite in writing. Do not equate this gate with guaranteed employment.

## Competence grading standard

| Level | Observable proof |
|---|---|
| A — Understand | Explain theory, assumptions and failure modes without notes |
| B — Implement | Solve an unfamiliar task with meaningful tests and reproducible code |
| C — Defend | Explain architecture, tradeoffs, security, errors, latency and operations under probing follow-ups |
| D — Demonstrated | Code reviewed by an independent reviewer, reproduced externally and defended in a timed interview or real collaboration |

For highly paid roles, aim for **D** in at least one specialization and **B/C** in all relevant foundations. These are local curriculum standards—not psychometrically validated population percentiles, certificates or recruiter promises.

## When to start applying

Do **not** wait for every module if you have a competitive research portfolio already. After Gate 3, start tracking jobs and practice real interviews; after Gate 5 and one strong capstone, begin selective applications. After Gate 6, review offers against location and written monthly base. The availability of >NT$100k base roles in Kaohsiung is a market constraint independent of your study progress.
