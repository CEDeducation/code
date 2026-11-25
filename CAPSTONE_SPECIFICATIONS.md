# Seven professional capstone projects — complete specifications

These are concrete design briefs, **not** finished deployed ML systems. You must build your own implementations, document ethical/licensing limitations, obtain authorized datasets, run tests and independently verify results. Built-in starter kits demonstrate coding/testing patterns on synthetic data.

**Nonnegotiable requirements for every capstone:** README, data provenance/license, leakage checks, reproducible environment, baseline, meaningful test suite, honest metrics, error analysis, service or usable demo where relevant, security review, cost/performance notes and a concise technical defense. Do not invent accuracy/F1, business savings, throughput or real manufacturer provenance.

## Project 1: Wafer-map defect classification
**Career tracks:** Applied AI Engineer · Computer Vision Engineer
**Problem:** Predict spatial wafer bin-map patterns to support an engineer’s analysis queue; this is not microscopic optical inspection or proof of actual physical causes.
**Data:** WM-811K — publicly released wafer maps (use labeled subset; verify download license)
**Data reference:** https://www.kaggle.com/datasets/qingyi/wm811k-wafer-map
**Architecture:** Labeled maps → label audit → group-aware train/validation/test → geometric-safe transforms → baseline + PyTorch CNN → per-class evaluation → FastAPI → Docker → monitoring stub.

### Milestones and acceptance tests

1. **Audit:** Count labeled/unknown patterns and map dimensions; list label source and unsupported patterns.
   - **Evidence to accept:** Data card includes counts and licensing, without claiming 811k labeled samples.
2. **Validate:** Identify lot/product/session grouping where metadata permits; avoid duplicate wafers across splits.
   - **Evidence to accept:** Split IDs and leakage audit committed to repository.
3. **Baseline:** Build a small, interpretable shape-feature or classical ML baseline.
   - **Evidence to accept:** Performance baseline and simple error analysis documented.
4. **Model:** Train CNN with class imbalance strategy and stable preprocessing.
   - **Evidence to accept:** Reproducible run with loss curves, seed and machine specification.
5. **Evaluate:** Report macro F1, per-class precision/recall, confusion matrix and minority examples.
   - **Evidence to accept:** Honest metrics with support counts and uncertainty if feasible.
6. **Serve:** Implement validated `/predict` on bin-map arrays with label-map version.
   - **Evidence to accept:** Docker/FastAPI service, unit tests, invalid-input handling.
7. **Monitor:** Simulate unknown map geometry and shifts in class prevalence.
   - **Evidence to accept:** Report fallback/abstention policy and latency benchmark.
8. **Defend:** Write an architecture decision and 5-minute research defense.
   - **Evidence to accept:** Explain why score alone does not establish manufacturing root cause.

**Pitfalls:** Label imbalance, data duplication, inconsistent geometry, meaningless flips, wrong “AOI” terminology, inflated weighted F1, model artifacts loaded from untrusted sources.
**Interview defense:** Why did you use macro F1? How do unknown patterns and product drift affect the service? How would you route an unsafe prediction to human review?

## Project 2: Manufacturing yield-risk prediction and SQL pipeline
**Career tracks:** Senior Data Scientist · Manufacturing Data Analyst · Applied ML Engineer
**Problem:** Build a reproducible candidate yield-risk prediction pipeline without inventing sensor meanings or claiming causal root causes.
**Data:** UCI SECOM — ~1,567 rows, 590 anonymized process features; tabular observations, not continuous equipment trajectories
**Data reference:** https://archive.ics.uci.edu/dataset/179/secom
**Architecture:** UCI data → quality audit → PostgreSQL feature store → train-only imputation/feature selection → calibrated baseline vs boosting → SHAP → FastAPI + Docker → drift report.

### Milestones and acceptance tests

1. **Ingest:** Download from official source and audit labels, dimensions, missingness, timestamp and duplicate records.
   - **Evidence to accept:** Data dictionary clearly states anonymized features and limited domain meaning.
2. **Model data:** Store observations/labels with stable IDs in PostgreSQL and document grain.
   - **Evidence to accept:** SQL joins never multiply observations or mix labels into inputs.
3. **Split:** Use appropriate held-out strategy given available metadata; no fabricated lot IDs or time-series labels.
   - **Evidence to accept:** Explain limits of any group/time assumptions and prevent feature-selection leakage.
4. **Baseline:** Use logistic regression with imputation pipeline before boosted trees.
   - **Evidence to accept:** Performance by minority class; PR-AUC and confusion matrix.
5. **Explain:** Train XGBoost/LightGBM with evaluation and robust feature-importance analysis.
   - **Evidence to accept:** SHAP findings explicitly described as associations.
6. **Deploy:** Version schema, model artifact, feature order; expose model through validated API.
   - **Evidence to accept:** Tests for missing features, wrong dtype, numeric range and model version.
7. **Operationalize:** Monitor input drift and threshold false-positive load on simulated traffic.
   - **Evidence to accept:** A deployment plan distinguishing unknown model error from statistical drift.
8. **Defend:** Document decision costs and failed approaches.
   - **Evidence to accept:** Independent reviewer can reproduce core metrics.

**Pitfalls:** Calling SECOM a sensor time series, interpreting anonymous features as physical root causes, fitting imputers before splitting, averaging imbalanced accuracy, overstating production readiness.
**Interview defense:** How do you rule out leakage? Why is an important feature not necessarily causal? What happens when the failure prevalence changes?

## Project 3: Permission-aware maintenance RAG assistant
**Career tracks:** AI Application Engineer · LLM Engineer · AI Solutions Engineer
**Problem:** Help an engineer discover documented incidents and citations while refusing unsupported or unauthorized repair instructions.
**Data:** 100–300 clearly synthetic maintenance incidents plus permissively licensed public docs; no proprietary equipment manuals
**Data reference:** https://docs.trychroma.com/
**Architecture:** Versioned synthetic docs → chunk+metadata → hybrid retrieval → vector store → permissions filter → reranking → cited generation → benchmark+attack tests → API+logs.

### Milestones and acceptance tests

1. **Corpus:** Create realistic fictional incidents with timestamps, tool type, symptom, step, outcome and revision.
   - **Evidence to accept:** Every generated source clearly marked synthetic with stable document ID.
2. **Index:** Compare token-appropriate chunks, embeddings and metadata filtering.
   - **Evidence to accept:** No cross-team retrieval by unauthorized users.
3. **Baseline:** Make a keyword-search baseline before semantic search.
   - **Evidence to accept:** A labeled question-to-document set and retrieval recall@5.
4. **Answer:** Require citations to exact retrieved sections and no-answer abstention.
   - **Evidence to accept:** Citation verification and unsupported claim analysis.
5. **Secure:** Add prompt-injection tests, max-tool-call limits and permission enforcement.
   - **Evidence to accept:** Unauthorized documents never reach the model context.
6. **Evaluate:** Score at least 50 test questions with unsupported/ambiguous examples.
   - **Evidence to accept:** Accuracy, source support, abstention, cost and latency.
7. **Serve:** Deploy a rate-limited FastAPI backend with server-side secret configuration.
   - **Evidence to accept:** No API key in browser; structured logging and retry behavior.
8. **Defend:** Explain why your system sometimes deliberately says “unknown”.
   - **Evidence to accept:** Threat model and review-ready model/system card.

**Pitfalls:** Prompt-only permissions, fabricated citations, data leaked through vector index, unlimited tool loops, copyrighted/private maintenance documents, “hallucination-free” claims.
**Interview defense:** How do you measure retrieval recall, citation support, no-answer accuracy and resistance to prompt injection?

## Project 4: Healthcare risk prediction with privacy-safe data
**Career tracks:** Healthcare Data Scientist · Biomedical ML Engineer · AI Research Scientist
**Problem:** Create a research-only risk model with appropriate calibration, fairness limits, privacy protections and a clear nonclinical-use statement.
**Data:** UCI Heart Disease or another authorized public/synthetic dataset; not a clinically approved population
**Data reference:** https://archive.ics.uci.edu/dataset/45/heart+disease
**Architecture:** Authorized open data → data audit → patient-level split where IDs exist → train-only preprocessing → baseline+ensemble → calibration+subgroups → documented research API demo.

### Milestones and acceptance tests

1. **Governance:** Document source, license, patient identifier availability and permitted publication.
   - **Evidence to accept:** Do not publish raw restricted health data or claim clinical clearance.
2. **Prediction time:** Identify which features are legitimately available before a prediction decision.
   - **Evidence to accept:** Leakage table distinguishing past information from future diagnosis.
3. **Baseline:** Fit a simple logistic model with appropriate preprocessing.
   - **Evidence to accept:** Cross-validated uncertainty and baseline metrics.
4. **Comparison:** Evaluate boosted trees with separated tuning and test decisions.
   - **Evidence to accept:** Calibration and subgroup limits, not just AUROC.
5. **Explain:** Describe potential confounding and missing population representation.
   - **Evidence to accept:** Model card and literature/context limitations.
6. **Demo:** Create a protected synthetic-input-only API/demonstration.
   - **Evidence to accept:** Validation and abnormal-input tests.
7. **Review:** Write prospective/independent validation requirements.
   - **Evidence to accept:** Explicit non-medical-device and clinician-review statement.
8. **Defend:** Compare clinical usefulness vs retrospective discrimination.
   - **Evidence to accept:** Can explain threshold tradeoffs without medical advice.

**Pitfalls:** Patient leakage, post-outcome features, clinical overclaiming, private data uploads, biased subgroup reporting and uncalibrated risk output.
**Interview defense:** Why does 0.9 AUROC not mean a model is ready for patient care? What external validation is needed?

## Project 5: Fintech fraud detection and capacity-aware risk scoring
**Career tracks:** Financial Data Scientist · Fraud ML Engineer · Applied AI Engineer
**Problem:** Prioritize a fixed daily number of fraud investigations without overblocking legitimate users.
**Data:** Fully synthetic transaction records generated in Python, with explicit planted fraud patterns and drift
**Data reference:** https://scikit-learn.org/stable/modules/model_evaluation.html
**Architecture:** Synthetic transactions → chronological features → account-aware split → baseline vs boosted model → precision@K + cost simulation → safe scoring API → drift dashboard.

### Milestones and acceptance tests

1. **Simulate:** Generate transactions with account ID, timestamp, merchant, amount and delayed review label.
   - **Evidence to accept:** Dataset and fraud-generation assumptions are fully disclosed as synthetic.
2. **Features:** Compute rolling account behavior using only past transactions.
   - **Evidence to accept:** Point-in-time feature tests eliminate future transaction leakage.
3. **Validation:** Use held-out future time segments with account limitations discussed.
   - **Evidence to accept:** Compare class prevalence and drift across periods.
4. **Evaluate:** Report precision@K, recall, false positives and reviewer capacity.
   - **Evidence to accept:** Business decision table under multiple false-positive costs.
5. **Calibrate:** Assess whether risk probability is calibrated under held-out prevalence.
   - **Evidence to accept:** Calibration plot and threshold policy.
6. **Deploy:** Build authenticated low-latency scoring API with explicit schema.
   - **Evidence to accept:** Load test and p95 latency report.
7. **Monitor:** Simulate an emerging fraud pattern and changed base rate.
   - **Evidence to accept:** Alert, reviewer workload and fallback plan.
8. **Defend:** Describe fraud-label selection bias and governance.
   - **Evidence to accept:** Can explain why fake data does not guarantee real-world accuracy.

**Pitfalls:** Tuning on test, using future chargeback fields, unrealistic balanced fraud data, hardcoded 0.5 threshold, treating synthetic results as bank validation.
**Interview defense:** How does changing fraud prevalence affect precision? How would you keep daily review load under a fixed staffing budget?

## Project 6: Production-grade data and ML platform engineering
**Career tracks:** Senior Data Engineer · AI Platform Engineer · MLOps Engineer
**Problem:** Show that a system can ingest, process, serve, observe and recover—not merely achieve a model benchmark.
**Data:** Generator-created fictional equipment and transactional logs (1M+ events if machine permits)
**Data reference:** https://airflow.apache.org/docs/apache-airflow/stable/
**Architecture:** Python synthetic events → Kafka/batch → ingestion sink → SQL/dbt tests → Airflow DAG → model registry → FastAPI inference → Docker/Kubernetes → monitoring+runbook.

### Milestones and acceptance tests

1. **Contract:** Publish an event schema with event_id, tool_id, timestamps, units and invariants.
   - **Evidence to accept:** Reject bad types, duplicates and impossible measurements.
2. **Ingest:** Implement idempotent ingestion; replay events and simulate failures.
   - **Evidence to accept:** Recovery tests prove no duplicate records after retry.
3. **Transform:** Build versioned staging and analytical SQL models.
   - **Evidence to accept:** Uniqueness, freshness, range and metric-grain checks.
4. **Schedule:** Use Airflow or a documented scheduler to validate/publish data.
   - **Evidence to accept:** Backfill and failure scenarios tested.
5. **Model:** Register and serve a simple versioned predictive baseline.
   - **Evidence to accept:** Model schema, preprocessing and API contract.
6. **Deploy:** Containerize; CI runs lint, unit and API tests.
   - **Evidence to accept:** Health and readiness checks plus safe rollback strategy.
7. **Operate:** Load test with representative traffic and add basic metrics/traces.
   - **Evidence to accept:** p50/p95, failure rate, alert thresholds and cost estimate.
8. **Defend:** Write an ADR and conduct simulated outage incident review.
   - **Evidence to accept:** Can explain capacity, access control and tradeoffs.

**Pitfalls:** Tool-name collecting, missing idempotency, scripts that cannot be reproduced, secrets in Docker images, no failure tests, unbounded infrastructure cost.
**Interview defense:** What happens when a consumer retries after a successful database write? How do you measure reliability beyond HTTP status?

## Project 7: Energy and logistics forecasting engineering
**Career tracks:** Forecasting Data Scientist · Energy AI Engineer · Supply Chain Optimization Engineer
**Problem:** Forecast demand using only information available in advance and show the cost of resulting decisions.
**Data:** Public time-series energy-demand data or synthetic shipment records with known forecast cutoffs
**Data reference:** https://otexts.com/fpp3/
**Architecture:** Timestamped demand → cutoffs → seasonal baseline → rolling-origin backtest → boosted model → uncertainty → constrained scenario optimization → API/dashboard.

### Milestones and acceptance tests

1. **Frame:** Specify horizon, update frequency, operational decision and acceptable error.
   - **Evidence to accept:** Target/horizon and business meaning documented.
2. **Audit:** Check gaps, seasonality, delayed data and calendar changes.
   - **Evidence to accept:** No future weather or next-day actual values in features.
3. **Baseline:** Implement last-value and seasonal naive models.
   - **Evidence to accept:** Rolling-origin baseline metrics across multiple periods.
4. **Model:** Add feature-based forecasting with lag/holiday/calendar features.
   - **Evidence to accept:** Explicit time-safe feature creation tests.
5. **Evaluate:** Report MAE/WAPE and errors during peak demand.
   - **Evidence to accept:** Multiple forecast horizons and uncertainty.
6. **Optimize:** Simulate supply or inventory constraints from predictions.
   - **Evidence to accept:** Outcome under forecast uncertainty, not just chart quality.
7. **Ship:** Package a repeatable forecasting pipeline and REST API.
   - **Evidence to accept:** API checks for valid cutoff and unavailable future inputs.
8. **Defend:** Explain tradeoffs, physical assumptions and robust decisions.
   - **Evidence to accept:** Can argue when a simple baseline is better.

**Pitfalls:** Random train/test split for forecasting, future weather leakage, MAPE at zero actual, unvalidated digital-twin claims, unconstrained optimization.
**Interview defense:** What changes when tomorrow’s forecast weather differs from tomorrow’s observed weather? What is your backtesting protocol?

## Recommended minimum portfolio for a high-pay target

Finish one rigorous core ML project, one real deployment or data-platform project, and one industry-specific domain project. Do not mistake a notebook copied from Kaggle for an independent professional portfolio. The correct blend depends on actual Kaohsiung role requirements.

## Included runnable starter kits

- `starter-kits/factory-yield`: stdlib Python with pooled yield and tests.
- `starter-kits/secure-rag`: permission-filtered retrieval baseline and cited-source tests.
- `starter-kits/fastapi-service`: synthetic FastAPI scoring skeleton, validated payload and Dockerfile.

All are educational starting points, not model training results, genuine corporate data, or production-ready deployments.
