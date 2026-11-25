# FabReady Professional — complete curriculum and skill-to-evidence matrix

**Career filter:** Kaohsiung worksite and **fixed monthly base salary strictly above NT$100,000**, excluding all bonuses, stock, allowances and overtime. Course completion cannot guarantee offers or top-percentile ranking.

There are **28 ordered modules and 111 lessons**. Each lesson has an objective, multi-paragraph theory, worked example, misconception/pitfall, question/task, answer, 4-choice concept quiz and reference. Introductory modules establish prerequisites; advanced modules include professional engineering tradeoffs. **Textbook coverage is not exhaustive expertise**: independently reproduce examples and complete external work.

## Complete lesson catalog

### 00 · Orientation & career map — 3 lessons (Starter)
Define your target job, assess your starting point, and learn how the platform works.

- **How to use this textbook** — Learn the read → reproduce → troubleshoot → ship cycle.
- **Choose a Kaohsiung job track** — Understand Data Scientist, Data Engineer, CIM and AI Software Engineer differences.
- **From bioinformatics to manufacturing** — Translate existing high-dimensional skills without exaggerating.

**Required evidence:** Read every lesson, pass its quiz, finish written exercise without copying, and submit at least one testable code artifact or analysis addressing the module. Self-marked activity alone is not proof of expert skill.

### 01 · Semiconductor manufacturing — 4 lessons (Starter)
Understand wafers, lots, yields, process steps, packaging, equipment data and factory workflows.

- **Wafer → die → package: the physical pipeline** — Understand what the factory makes and where software data originates.
- **Yield, defects and quality metrics** — Calculate valid yield rates and distinguish rates from counts.
- **Equipment, MES, SPC, FDC and APC** — Place real data systems in the factory workflow.
- **Wafer-map spatial defect patterns** — Connect image shapes with cautious manufacturing hypotheses.

**Required evidence:** Read every lesson, pass its quiz, finish written exercise without copying, and submit at least one testable code artifact or analysis addressing the module. Self-marked activity alone is not proof of expert skill.

### 02 · Computer & developer tools — 4 lessons (Starter)
Command line, VS Code, Git, environments, notebooks, and reproducible work.

- **Windows, terminal and folders** — Learn paths, terminal commands and why reproducible projects use folders.
- **VS Code, Python environment and notebooks** — Install tools and separate experimentation from reusable source.
- **Git, GitHub and meaningful commits** — Learn version control, branches, diffs and safe collaboration.
- **Debugging, testing and software hygiene** — Use tracebacks, assertions, pytest and deterministic checks.

**Required evidence:** Read every lesson, pass its quiz, finish written exercise without copying, and submit at least one testable code artifact or analysis addressing the module. Self-marked activity alone is not proof of expert skill.

### 03 · Python from zero — 4 lessons (Starter)
Build a reliable language foundation before writing production data pipelines.

- **Values, types and expressions** — Use numeric, string, bool and None values accurately.
- **Conditions, loops and collections** — Process records without losing meaning.
- **Functions, exceptions and modules** — Write reusable data-processing code with contracts.
- **Files, packages and structured logging** — Move from a notebook to reliable scripts.

**Required evidence:** Read every lesson, pass its quiz, finish written exercise without copying, and submit at least one testable code artifact or analysis addressing the module. Self-marked activity alone is not proof of expert skill.

### 04 · Statistics & math for ML — 4 lessons (Intermediate)
Probability, uncertainty, linear algebra, evaluation, and experimental design.

- **Probability, conditional probability and base rates** — Understand rare failures without being fooled by alerts.
- **Distributions, sampling and uncertainty** — Estimate variation instead of reporting one lucky number.
- **Vectors, matrices and gradient descent** — Connect feature tables to model parameters.
- **Hypothesis testing, experiments and confounding** — Separate correlation, significance and causation.

**Required evidence:** Read every lesson, pass its quiz, finish written exercise without copying, and submit at least one testable code artifact or analysis addressing the module. Self-marked activity alone is not proof of expert skill.

### 05 · Data engineering & pandas — 4 lessons (Intermediate)
Data cleaning, validation, ETL and feature engineering without leakage.

- **NumPy and pandas fundamentals** — Transform a measurement table with explicit row and column meanings.
- **Data quality, missingness and leakage** — Prevent invalid data from becoming impressive-looking model results.
- **ETL, Parquet and data lineage** — Build traceable pipelines rather than manual spreadsheet transformations.
- **Designing a manufacturing feature table** — Choose grain and temporal joins before fitting any model.

**Required evidence:** Read every lesson, pass its quiz, finish written exercise without copying, and submit at least one testable code artifact or analysis addressing the module. Self-marked activity alone is not proof of expert skill.

### 06 · SQL & factory databases — 4 lessons (Intermediate)
Relational schemas, joins, aggregates, windows and production query patterns.

- **SELECT, WHERE, ORDER BY and NULL** — Query the right subset of manufacturing records.
- **JOINs, keys and row multiplication** — Combine lot, wafer and equipment tables without corrupting counts.
- **GROUP BY, HAVING and rate denominators** — Produce correct grouped quality dashboards.
- **Windows, CTEs and query plans** — Engineer time-ordered features and tune reliable queries.

**Required evidence:** Read every lesson, pass its quiz, finish written exercise without copying, and submit at least one testable code artifact or analysis addressing the module. Self-marked activity alone is not proof of expert skill.

### 07 · Machine learning & explainability — 4 lessons (Intermediate)
End-to-end learning with measured baselines, imbalance, calibration and SHAP.

- **Problem framing, baseline and data splitting** — Convert an operational need into a measurable ML experiment.
- **Logistic regression, trees and boosting** — Choose a justified model instead of the newest architecture.
- **Precision, recall, F1, PR-AUC and calibration** — Evaluate rare defects in terms of factory decisions.
- **SHAP, error analysis and model explanations** — Use explanations as hypotheses and audit model weaknesses.

**Required evidence:** Read every lesson, pass its quiz, finish written exercise without copying, and submit at least one testable code artifact or analysis addressing the module. Self-marked activity alone is not proof of expert skill.

### 08 · Smart manufacturing analytics — 4 lessons (Advanced)
SPC, equipment sensors, anomaly detection, time series and drift.

- **Statistical process control (SPC)** — Understand stable processes, control limits and false alarms.
- **Time-series resampling, windows and forecasting** — Handle actual sensor sequences and temporal leakage.
- **Anomaly detection and alert thresholds** — Identify unusual behavior under limited ground-truth labels.
- **Predictive maintenance: labels, RUL and costs** — Separate maintenance forecasting from yield classification.

**Required evidence:** Read every lesson, pass its quiz, finish written exercise without copying, and submit at least one testable code artifact or analysis addressing the module. Self-marked activity alone is not proof of expert skill.

### 09 · Wafer maps & computer vision — 4 lessons (Advanced)
Inspection pipelines, CNNs, wafer maps and manufacturing-aware model evaluation.

- **Images, channels and convolution intuition** — Understand spatial structure without a computer vision background.
- **WM-811K: labels, splits and imbalance** — Create a trustworthy computer-vision benchmark.
- **Training CNNs with PyTorch** — Learn datasets, dataloaders, loss, optimizer and training loops.
- **AOI deployment, drift and human review** — Turn a classifier into a realistic inspection support system.

**Required evidence:** Read every lesson, pass its quiz, finish written exercise without copying, and submit at least one testable code artifact or analysis addressing the module. Self-marked activity alone is not proof of expert skill.

### 10 · APIs, Docker & MLOps — 4 lessons (Advanced)
Package, test, deploy, monitor and improve reliable model systems.

- **From notebook to Python package** — Design clean boundaries for training and inference.
- **FastAPI, HTTP and API contracts** — Expose a model through a small validated web service.
- **Docker, containers and dependency isolation** — Package the same application to run consistently across machines.
- **CI/CD, monitoring and model drift** — Prove the system survives changing data and software.

**Required evidence:** Read every lesson, pass its quiz, finish written exercise without copying, and submit at least one testable code artifact or analysis addressing the module. Self-marked activity alone is not proof of expert skill.

### 11 · LLMs, RAG & factory assistants — 4 lessons (Advanced)
Grounded assistants with retrieval, citations, evaluation and access controls.

- **Embeddings, retrieval and grounded generation** — Understand how a factory assistant can cite its evidence.
- **ChromaDB, chunking and metadata** — Build a searchable document collection with provenance.
- **Prompt injection, permissions and uncertainty** — Make a responsible AI assistant rather than a confident chatbot.
- **RAG evaluation and an operator-facing interface** — Measure whether the assistant actually helps engineers.

**Required evidence:** Read every lesson, pass its quiz, finish written exercise without copying, and submit at least one testable code artifact or analysis addressing the module. Self-marked activity alone is not proof of expert skill.

### 12 · Three portfolio capstones — 4 lessons (Advanced)
Ship proof of capability: wafer classification, yield-risk modeling and grounded troubleshooting.

- **Capstone A · Wafer-map vision service** — Deliver a reproducible, well-evaluated image model and API.
- **Capstone B · SECOM yield-risk pipeline** — Ship a SQL + interpretable ML manufacturing analytics project.
- **Capstone C · Grounded maintenance RAG assistant** — Make a synthetic-document troubleshooting assistant with citations.
- **Portfolio review and engineering write-ups** — Turn three projects into credible interview evidence.

**Required evidence:** Read every lesson, pass its quiz, finish written exercise without copying, and submit at least one testable code artifact or analysis addressing the module. Self-marked activity alone is not proof of expert skill.

### 13 · Kaohsiung job launch — 4 lessons (Career)
Resumes, Chinese manufacturing vocabulary, interviews and role-focused applications.

- **The Kaohsiung-targeted job search** — Track actual location, team and job requirements.
- **Semiconductor Mandarin: job and factory terms** — Use practical bilingual words in meetings and interviews.
- **Technical interviews, SQL whiteboard and ML defense** — Practice communicating unknowns and reasoning under time pressure.
- **Readiness gates, mock interviews and application cadence** — Use measurable evidence instead of a fictional 100% guarantee.

**Required evidence:** Read every lesson, pass its quiz, finish written exercise without copying, and submit at least one testable code artifact or analysis addressing the module. Self-marked activity alone is not proof of expert skill.

### 14 · Production Python engineering — 4 lessons (Advanced)
Typing, packaging, testing, concurrency, profiling and code review for dependable software.

- **Typing, contracts and boundary validation** — Write Python functions whose assumptions are explicit and testable.
- **Package structure, dependency management and reproducible builds** — Convert a notebook into an installable, versioned Python project.
- **Pytest, property tests and continuous integration** — Use tests to catch quiet failures in scientific and AI code.
- **Async I/O, multiprocessing and performance profiling** — Choose concurrency based on the real bottleneck.

**Required evidence:** Read every lesson, pass its quiz, finish written exercise without copying, and submit at least one testable code artifact or analysis addressing the module. Self-marked activity alone is not proof of expert skill.

### 15 · Algorithms and coding interviews — 4 lessons (Advanced)
Runtime complexity, data structures, graph problems and independent interview practice.

- **Big-O, arrays, maps and sets** — Reason about performance before choosing a data structure.
- **Two pointers, sliding windows and time-order constraints** — Implement efficient rolling analysis without future leakage.
- **Trees, heaps and graph search** — Know when a priority queue or graph traversal beats brute force.
- **Dynamic programming and interview explanation** — Break a problem into reusable subproblems and prove the recurrence.

**Required evidence:** Read every lesson, pass its quiz, finish written exercise without copying, and submit at least one testable code artifact or analysis addressing the module. Self-marked activity alone is not proof of expert skill.

### 16 · Advanced SQL and databases — 4 lessons (Advanced)
PostgreSQL query plans, indexing, transactions, schema design and analytical SQL.

- **Execution plans and index tradeoffs in PostgreSQL** — Read EXPLAIN before guessing why a query is slow.
- **Transactions, isolation and idempotent ingestion** — Keep manufacturing records consistent under retries and concurrency.
- **Window functions and event-time analytics** — Implement nontrivial analytical SQL correctly.
- **Dimensional modeling, slowly changing dimensions and data contracts** — Model data so a metric means the same thing across teams.

**Required evidence:** Read every lesson, pass its quiz, finish written exercise without copying, and submit at least one testable code artifact or analysis addressing the module. Self-marked activity alone is not proof of expert skill.

### 17 · Advanced statistics and experiments — 4 lessons (Expert)
Inference, uncertainty, causal thinking, A/B tests, process monitoring and experimental design.

- **Inference, confidence intervals and multiple testing** — Distinguish signal, sampling uncertainty and false discovery.
- **A/B experiments, power and sample size** — Design experiments before inspecting their results.
- **Causal inference and confounding in factory analytics** — Avoid confusing a correlated measurement with a changeable cause.
- **Statistical process control and sequential detection** — Interpret control charts and false alarms correctly.

**Required evidence:** Read every lesson, pass its quiz, finish written exercise without copying, and submit at least one testable code artifact or analysis addressing the module. Self-marked activity alone is not proof of expert skill.

### 18 · Advanced applied machine learning — 4 lessons (Expert)
Validation strategy, calibration, uncertainty, representation, bias and interpretability.

- **Leakage-safe nested validation and hyperparameter tuning** — Estimate real generalization without using the test set to make choices.
- **Calibration, thresholds and decision costs** — Turn a prediction score into a rational business decision.
- **Distribution shift, drift and out-of-distribution detection** — Know when a successful model should stop being trusted.
- **Explainability, fairness and uncertainty under scrutiny** — Provide useful and appropriately limited explanations.

**Required evidence:** Read every lesson, pass its quiz, finish written exercise without copying, and submit at least one testable code artifact or analysis addressing the module. Self-marked activity alone is not proof of expert skill.

### 19 · Deep learning and model internals — 4 lessons (Expert)
Autograd, attention, Transformers, transfer learning, efficient GPU training and evaluation.

- **Autograd, backpropagation and tensor debugging** — Understand training mechanics well enough to diagnose numerical failures.
- **Attention and Transformers from first principles** — Explain the core operation rather than memorize model names.
- **Transfer learning, imbalanced vision and segmentation** — Adapt pretrained models to industrial images without invalid evaluation.
- **Distributed training, mixed precision and inference efficiency** — Make GPU-intensive training measurable and repeatable.

**Required evidence:** Read every lesson, pass its quiz, finish written exercise without copying, and submit at least one testable code artifact or analysis addressing the module. Self-marked activity alone is not proof of expert skill.

### 20 · LLM engineering and AI agents — 4 lessons (Expert)
LLM applications, retrieval, tool calling, fine-tuning, safety and measurable quality.

- **Prompt design, structured output and tool calling** — Build model integrations that do not silently invent machine data.
- **RAG retrieval, reranking and faithfulness evaluation** — Prove that retrieved evidence supports every important answer.
- **Fine-tuning, evaluation datasets and cost control** — Know when to fine-tune, retrieve or use simpler software.
- **Agent orchestration and failure containment** — Design multi-step AI workflows with explicit human control.

**Required evidence:** Read every lesson, pass its quiz, finish written exercise without copying, and submit at least one testable code artifact or analysis addressing the module. Self-marked activity alone is not proof of expert skill.

### 21 · Modern data platforms — 4 lessons (Expert)
Spark, Airflow, Kafka, dbt, event semantics and warehouses for industrial-scale datasets.

- **Spark and distributed data fundamentals** — Understand partitioned computation and when it is actually needed.
- **Airflow orchestration, retries and data quality** — Build pipelines that can recover from interruption.
- **Kafka, event time and streaming correctness** — Reason about delivery, ordering and delayed messages.
- **dbt, warehouses and trustworthy metric definitions** — Deliver consistent analytical tables with lineage and tests.

**Required evidence:** Read every lesson, pass its quiz, finish written exercise without copying, and submit at least one testable code artifact or analysis addressing the module. Self-marked activity alone is not proof of expert skill.

### 22 · Cloud, Kubernetes and observability — 4 lessons (Expert)
Networking, cloud deployment, containers, autoscaling, monitoring and disaster recovery.

- **Cloud basics: IAM, storage, compute and networking** — Understand the primitives behind production architecture.
- **Docker layers, image security and reproducible releases** — Ship consistent artifacts rather than works-on-my-machine code.
- **Kubernetes objects and deployment operations** — Read a basic cluster deployment and know what it does not guarantee.
- **Observability, incident response and reliability objectives** — Operate services using measurable behavior.

**Required evidence:** Read every lesson, pass its quiz, finish written exercise without copying, and submit at least one testable code artifact or analysis addressing the module. Self-marked activity alone is not proof of expert skill.

### 23 · ML system design and architecture — 4 lessons (Expert)
Service design, scaling, reliability, costs, feature stores and model delivery under constraints.

- **Design an end-to-end real-time equipment anomaly platform** — Convert vague requirements into an architecture with tradeoffs.
- **Online versus offline features and training-serving skew** — Ensure training inputs represent what will actually exist in production.
- **Capacity planning, cost engineering and reliability tradeoffs** — Estimate infrastructure costs and failure budgets before scaling.
- **Model governance and human-in-the-loop decision systems** — Deliver auditable changes and safe fallback behavior.

**Required evidence:** Read every lesson, pass its quiz, finish written exercise without copying, and submit at least one testable code artifact or analysis addressing the module. Self-marked activity alone is not proof of expert skill.

### 24 · Security and responsible AI — 4 lessons (Expert)
Identity, secrets, private data, prompt injection, threat modeling and responsible release.

- **Threat modeling, auth and least privilege** — Secure AI and data systems from their first design.
- **Prompt injection, retrieval contamination and agent safety** — Recognize untrusted text masquerading as instructions.
- **Privacy, medical data governance and responsible deployment** — Make transferable AI skills safe in healthcare and enterprise settings.
- **Software supply-chain and model artifact security** — Protect dependencies, data pipelines and inference loading.

**Required evidence:** Read every lesson, pass its quiz, finish written exercise without copying, and submit at least one testable code artifact or analysis addressing the module. Self-marked activity alone is not proof of expert skill.

### 25 · Industry specialization tracks — 4 lessons (Advanced)
Healthcare, manufacturing, fintech, logistics and energy projects with domain metrics.

- **Healthcare AI specialization** — Transfer bioinformatics research into deployable health-data products.
- **Fintech fraud and risk modeling** — Apply imbalanced ML under financial and operational constraints.
- **Logistics, forecasting and optimization** — Build demand and delay models that support actual operational decisions.
- **Energy forecasting and industrial digital twins** — Model physical data while acknowledging domain constraints.

**Required evidence:** Read every lesson, pass its quiz, finish written exercise without copying, and submit at least one testable code artifact or analysis addressing the module. Self-marked activity alone is not proof of expert skill.

### 26 · Senior-level technical interviews — 4 lessons (Expert)
Coding, SQL, statistics, ML systems, case studies and explaining difficult tradeoffs.

- **Python and algorithm interviews at senior difficulty** — Explain correctness, complexity, test cases and tradeoffs live.
- **Advanced SQL interview defense** — Solve analytical queries with correct grain and deterministic results.
- **ML case studies and research defense** — Respond to ambiguous model failures with testable hypotheses.
- **System design interviews, incident leadership and tradeoff communication** — Present a feasible architecture and defend tradeoffs to senior reviewers.

**Required evidence:** Read every lesson, pass its quiz, finish written exercise without copying, and submit at least one testable code artifact or analysis addressing the module. Self-marked activity alone is not proof of expert skill.

### 27 · NT$100k+ base career strategy — 4 lessons (Career)
Salary definition, location filters, level expectations, negotiation and evidence-based targeting.

- **Base salary, total compensation and Taiwanese offer arithmetic** — Never confuse a bonus-inclusive package with your monthly base target.
- **High-salary roles and skill-to-evidence mapping** — Target positions where your portfolio demonstrates difficult production work.
- **Kaohsiung-only search, compensation screening and negotiation** — Filter opportunities using the actual worksite and salary breakdown.
- **Performance evidence and long-term career resilience** — Build a durable professional advantage rather than a tool collection.

**Required evidence:** Read every lesson, pass its quiz, finish written exercise without copying, and submit at least one testable code artifact or analysis addressing the module. Self-marked activity alone is not proof of expert skill.

## Tools and applications — full guided catalog

Guides document installation/prerequisites, command workflow, hands-on task, expected success check and troubleshooting. Documentation and APIs may change: official manuals remain authoritative.

| Tool or workflow | Category / proficiency |
|---|---|
| VS Code | Editor / Beginner |
| Python + venv + pip | Language runtime / Beginner |
| PowerShell + Linux shell | Operating system / Beginner |
| Git & GitHub | Version control / Beginner |
| JupyterLab | Exploration / Beginner |
| PostgreSQL | Database / Intermediate |
| DBeaver | SQL GUI / Intermediate |
| pandas + NumPy | Data analysis / Intermediate |
| scikit-learn | Machine learning / Intermediate |
| PyTorch | Deep learning / Advanced |
| Docker Desktop | Deployment / Advanced |
| FastAPI + Postman | Backend / Advanced |
| XGBoost + SHAP | Explainable ML / Advanced |
| ChromaDB + RAG | LLM systems / Advanced |
| Vercel deployment | Web hosting / Beginner |
| WSL2 + Ubuntu Linux | Development / Advanced |
| Ruff + Pyright + pre-commit | Code quality / Advanced |
| pytest + coverage + Hypothesis | Testing / Advanced |
| GitHub Actions CI | DevOps / Advanced |
| PostgreSQL EXPLAIN + psql | Databases / Expert |
| Alembic database migrations | Databases / Advanced |
| Apache Spark / PySpark | Distributed analytics / Expert |
| Apache Airflow DAGs | Data pipelines / Expert |
| Apache Kafka + event streams | Streaming data / Expert |
| dbt Core + analytical models | Data transformations / Expert |
| MLflow tracking and model registry | MLOps / Expert |
| Hugging Face Transformers + Datasets | Deep learning / Expert |
| Optuna tuning + experiment discipline | ML optimization / Advanced |
| kubectl + Kubernetes troubleshooting | Infrastructure / Expert |
| AWS IAM + S3 + compute fundamentals | Cloud / Expert |
| Google Cloud IAM + Cloud Run | Cloud / Expert |
| OpenTelemetry + Prometheus / Grafana | Monitoring / Expert |
| Locust API load testing | Performance / Advanced |
| OWASP API + AI security review | Security / Expert |
| Architecture diagrams + ADRs | System design / Expert |

## Coding workbench

- SQL: **22 browser challenges** (8 foundation + 14 advanced), result-checked on SQLite fictional factory tables. SQL tasks include pooled yield, HAVING, window/ROW_NUMBER, partition and join correctness, moving averages, aggregates and LEFT JOIN semantics.
- Python: **20 browser challenges** (6 foundation + 14 advanced). Advanced tests use multiple assertions including edge cases; runner errors explain at least the failure type.
- Completing these does not replace full-length independent engineering assignments, system design or code review.

## Evidence requirements by targeted role

| Role | Evidence beyond quizzes | Important gaps that may require real experience |
|---|---|---|
| Applied AI / ML Engineer | Trained reproducible model + tested FastAPI service + CI + latency test + drift plan | Production traffic, cloud operations, stakeholder requirements |
| Senior Data Scientist | Leakage-safe study, confidence/calibration, causal limits, transparent business-impact analysis | Experience influencing real business decisions and independent peer review |
| AI Platform / MLOps Engineer | Versioned artifact, Kubernetes/cloud demo, model registry, observability, rollback and on-call plan | Real SLO ownership, deployment/security operations, budget accountability |
| Senior Data Engineer | Idempotent ingestion, SQL performance study, Spark/streaming tests, backfill and recoverability | Operational scale, changing schemas and production incident response |
| AI Research / Healthcare AI Scientist | Research experiment, robust evaluation, annotated limitations, reproducible manuscript-quality work | Published research or applied clinical/governance experience as role requires |

## Demonstration standard

1. **Explain:** articulate concepts, assumptions and limitations.
2. **Build:** solve unfamiliar problems unaided and write meaningful tests.
3. **Operate:** package, deploy, trace, secure and recover a system where relevant.
4. **Defend:** independent reviewer can reproduce and challenge the solution.
5. **Interview:** explain engineering and business tradeoffs under follow-up questions.

**No local checkbox establishes a real job offer, professional title or worldwide percentile.**
