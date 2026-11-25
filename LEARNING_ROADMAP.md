# FabReady — 36-week foundational study program (Version 1 foundation)

**Target:** first-round skill foundations for Kaohsiung data / AI / CIM-adjacent roles. The advanced 72-week professional roadmap adds substantial depth beyond this path. **Time assumption:** approximately 10–15 focused hours weekly (360–540 total study hours), adjusted for starting experience. This is a planning estimate, **not** an automatic hiring or percentile guarantee.

> **For the NT$100,000+ fixed monthly base-salary goal, use `PROFESSIONAL_ROADMAP_72_WEEKS.md` instead of treating these 36 weeks as sufficient. This older path is retained as a faster orientation.**

## Core weekly rhythm

- **3 hours:** read first-principles theory and take notes in your own language.
- **3 hours:** reproduce examples with full comprehension, then modify them.
- **3–5 hours:** solve unseen exercises, test edge cases and debug mistakes.
- **1–2 hours:** write clean code, commit evidence and document learning.
- **0.5–2 hours:** Mandarin speaking / interviewing / verified local vacancy review.

Do not progress only because you have watched or clicked through a lesson. Hold yourself to the assessment gates below.

## Phase 1 — Technical zero to independent basics (Weeks 1–8)

| Week | Focus | Observable output |
|---|---|---|
| 1 | Career map, job titles, fab vs OSAT, workstation setup | Genuine Kaohsiung job requirement matrix + VS Code and Python installed |
| 2 | Wafer/die/lot hierarchy; yields; MES/SPC/FDC/APC | 1-page explanation of grain and yield denominator; 10 bilingual terms |
| 3 | Terminal and Python types, expressions, `if`, loops | 10 tiny programs; pass first 4 Python lab tasks |
| 4 | Python functions, validation, unit testing | Tested yield_rate module with invalid-input behavior |
| 5 | File IO, paths, virtual environments, Git | Clean repository with README, requirements and pytest |
| 6 | Jupyter and pandas | Reproducible notebook + raw/processed data separation |
| 7 | Probability, confusion matrices and base rates | Hand-worked false-alarm and precision example |
| 8 | Sampling, uncertainty and experimental thinking | Explain confounding, uncertainty and lot clustering aloud |

**Gate A:** given unseen data, independently write a Python function with tests; explain wafer / die / lot and calculate a pooled yield without confusing the denominator.

## Phase 2 — Data engineering and statistical learning (Weeks 9–16)

| Week | Focus | Observable output |
|---|---|---|
| 9 | pandas grouping, joins, missingness and validation | Audited lot-wise yield aggregation |
| 10 | PostgreSQL setup; SELECT / WHERE / NULL | Database schema and basic queries |
| 11 | JOIN cardinality; GROUP BY/HAVING | SQL lab challenges 1–4 correct |
| 12 | Window functions, `LAG`, CTE, indexes | SQL lab challenges 5–8 correct; query plan notes |
| 13 | Train/validation/test splits, imputation and baselines | Baseline classifier with leakage audit |
| 14 | Tree ensembles, XGBoost / LightGBM | Model comparison under the same holdout |
| 15 | Imbalanced evaluation and calibration | Minority confusion matrix, PR-AUC, threshold note |
| 16 | SHAP and error analysis | Cautious candidate-signal report, no false causal claims |

**Gate B:** solve a new SQL problem without hints; diagnose a row-multiplying join; independently justify a split and explain minority-class recall and precision.

## Phase 3 — Industrial ML and vision (Weeks 17–24)

| Week | Focus | Observable output |
|---|---|---|
| 17 | Process measurements, SPC, control vs specification limits | Chart with process-signal interpretation |
| 18 | Equipment telemetry, time alignment and windows | Time-safe sensor feature notebook (synthetic or permitted public data) |
| 19 | Anomaly detection and alert workload | Isolation Forest vs robust-statistical baseline |
| 20 | True predictive maintenance vs SECOM label limits | Written comparison of RUL data and quality classification |
| 21 | Wafer bin-map encoding, classes, visual inspections | WM-811K audit, class counts and legal data-access notes |
| 22 | PyTorch/CNN baseline and training loop | Simple reproducible training script |
| 23 | Imbalanced CV evaluation, lot-aware tests | Macro F1 and per-class error report, not made-up numbers |
| 24 | Error analysis and deployment design | Wafer classifier artifact, preprocessing, inference contract |

**Gate C:** explain a model failure by class, lot, time or product; demonstrate that the held-out evaluation is not contaminated by same-lot wafers.

## Phase 4 — Production AI engineering (Weeks 25–30)

| Week | Focus | Observable output |
|---|---|---|
| 25 | FastAPI + Pydantic contract | `/predict` and `/health` with input validation |
| 26 | Docker + environment isolation | Working container, one-command startup and smoke tests |
| 27 | GitHub Actions / CI / basic monitoring | Test pipeline, versioned artifact and latency/error metrics |
| 28 | Retrieval, embeddings, metadata and ChromaDB | Searchable synthetic maintenance notes |
| 29 | Source-grounded answers, versions and safe abstention | RAG citations and no-answer behavior |
| 30 | RAG evaluation and permissions | Evaluation report on at least 30 annotated questions |

**Gate D:** a fresh reviewer can build and test your API; you can explain why a live service might be statistically wrong even if HTTP is healthy.

## Phase 5 — Portfolio and local applications (Weeks 31–36)

| Week | Focus | Observable output |
|---|---|---|
| 31 | Finish capstone A | WM-811K README, code, metrics, tests and demo |
| 32 | Finish capstone B | UCI SECOM SQL schema, ETL, baselines, SHAP and API |
| 33 | Finish capstone C | Synthetic RAG corpus, citations, eval and demo |
| 34 | Resume and written project defenses | Role-targeted CV, 3 pinned repos and 5-minute demos |
| 35 | SQL/ML mock interviews + Mandarin | 2 timed technical mocks, 1 bilingual factory role-play |
| 36 | Kaohsiung vacancy verification and targeted applications | Application tracker, interview reflection and follow-up plan |

**Gate E:** demonstrate all three projects without referring to a tutorial, defend limitations, solve an unseen SQL/Python problem, and communicate one operational recommendation with explicit uncertainty.

## How to measure readiness without dishonest promises

Use a three-level skill rating for every topic:
1. **Explain:** can describe the idea and its assumptions without reading notes.
2. **Implement:** can solve an unfamiliar exercise and write tests without copying.
3. **Defend:** can explain errors, tradeoffs, edge cases and deployment limitations under follow-up questions.

Aim for **Implement** in all core areas and **Defend** in SQL, evaluation/leakage, data quality and your chosen specialty. These goals are observable; they are **not** a globally validated top-10% ranking or a guarantee of employment.

## Employer-specific evidence

- **ASE:** match actual published Kaohsiung openings to automation, software, data pipelines, quality/yield analytics or ML integration as the posting requires.
- **TSMC:** verify each current Kaohsiung role and required engineering background; do not presume that all AI/CIM jobs are open to all disciplines.
- **Foxconn:** verify the Kaohsiung worksite and specific business unit; Foxconn AI/HPC positions may not be semiconductor-process roles.

Job links: https://careers.tsmc.com/ · https://www.104.com.tw/company/yxcvx7k · https://www.104.com.tw/jobs/search/?area=6001016000&keyword=AI%20Python

### How this maps to Professional v2

The v2 textbook includes advanced modules on Linux/production Python, SQL transactions, causal inference, deep learning, LLM engineering, data platforms (Spark, Kafka, Airflow, dbt), MLflow, cloud/Kubernetes, systems design and security. The presence of a lesson or software manual does not constitute hands-on mastery; follow the 72-week roadmap and build independently reviewable capstones.
