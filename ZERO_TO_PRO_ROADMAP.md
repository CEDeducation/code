# FabReady 3 — Zero to professional programmer and AI engineer

## Target and study method

Start with no programming experience. Aim for independent professional coding, then specialize in applied AI or industrial software. The personal employment goal is Kaohsiung and strictly above NT$100,000 fixed monthly base salary (before bonus/stock/allowances). It is not a guarantee.

Plan approximately 96 weeks or longer at a sustainable 10–15 hours per week (roughly 960–1,440 hours over 96 weeks). This is a planning assumption, not a deadline. Spend about 25% reading and tracing, 45% solving and debugging, 20% building projects, 10% reviewing and preparing interviews. Advance based on demonstrated ability, not the calendar.

Each week: read the next few chapters in order, reproduce examples, solve fresh practice problems without the answer, write tests, commit a small artifact, and record the first error you diagnosed. Use the AI tutor for explanations after attempting a problem; turn it off during independent tests. Revisit topics after one day, one week and one month.

## Complete curriculum in recommended order

### 01 · Zero to first program (Weeks 1–8)

**Exit gate:** Write, run and debug simple programs from a blank file; explain every line.

#### 00 · Orientation & career map

Define your target job, assess your starting point, and learn how the platform works.
- **How to use this textbook** — Learn the read → reproduce → troubleshoot → ship cycle.
- **Choose a Kaohsiung job track** — Understand Data Scientist, Data Engineer, CIM and AI Software Engineer differences.
- **From bioinformatics to manufacturing** — Translate existing high-dimensional skills without exaggerating.

#### 28 · Absolute zero: computers and first programs

From files and terminals to running, tracing and correcting your first Python programs.
- **Files, folders and the terminal** — Locate a file and run it deliberately.
- **Values, types and expressions** — Trace a simple expression without running it.
- **Conditions and Boolean reasoning** — Design branches that cover every input.
- **Loops, state and tracing** — Follow changing variables line by line.
- **Functions, contracts and errors** — Separate reusable logic from input and output.

#### 02 · Computer & developer tools

Command line, VS Code, Git, environments, notebooks, and reproducible work.
- **Windows, terminal and folders** — Learn paths, terminal commands and why reproducible projects use folders.
- **VS Code, Python environment and notebooks** — Install tools and separate experimentation from reusable source.
- **Git, GitHub and meaningful commits** — Learn version control, branches, diffs and safe collaboration.
- **Debugging, testing and software hygiene** — Use tracebacks, assertions, pytest and deterministic checks.

#### 03 · Python from zero

Build a reliable language foundation before writing production data pipelines.
- **Values, types and expressions** — Use numeric, string, bool and None values accurately.
- **Conditions, loops and collections** — Process records without losing meaning.
- **Functions, exceptions and modules** — Write reusable data-processing code with contracts.
- **Files, packages and structured logging** — Move from a notebook to reliable scripts.

### 02 · Independent Python programmer (Weeks 9–20)

**Exit gate:** Pass unseen functions, algorithms and SQL; explain complexity and edge cases.

#### 29 · Python fluency and object model

Containers, references, iteration, object-oriented design and reliable file handling.
- **Lists, tuples, dictionaries and sets** — Choose a collection based on its required behavior.
- **References, copying and mutation** — Predict aliasing and avoid shared-state bugs.
- **Comprehensions, iterators and generators** — Process collections without unnecessary materialization.
- **Classes, composition and interfaces** — Model state and behavior without unnecessary inheritance.
- **Files, JSON, CSV and context managers** — Read and write data with explicit encoding and failure handling.

#### 30 · Data structures and algorithms from scratch

Search, sorting, stacks, queues, hash maps and complexity with invariant-based explanations.
- **Big-O, memory and input size** — Explain growth rather than guessing speed.
- **Binary search and boundary invariants** — Search sorted data correctly including absent targets.
- **Stacks, queues and parentheses** — Use LIFO and FIFO behavior deliberately.
- **Sorting, stable order and two pointers** — Use sorted order to simplify search and merging.
- **Graphs, BFS, DFS and dependencies** — Represent relationships and find reachable nodes.

#### 14 · Production Python engineering

Typing, packaging, testing, concurrency, profiling and code review for dependable software.
- **Typing, contracts and boundary validation** — Write Python functions whose assumptions are explicit and testable.
- **Package structure, dependency management and reproducible builds** — Convert a notebook into an installable, versioned Python project.
- **Pytest, property tests and continuous integration** — Use tests to catch quiet failures in scientific and AI code.
- **Async I/O, multiprocessing and performance profiling** — Choose concurrency based on the real bottleneck.

#### 15 · Algorithms and coding interviews

Runtime complexity, data structures, graph problems and independent interview practice.
- **Big-O, arrays, maps and sets** — Reason about performance before choosing a data structure.
- **Two pointers, sliding windows and time-order constraints** — Implement efficient rolling analysis without future leakage.
- **Trees, heaps and graph search** — Know when a priority queue or graph traversal beats brute force.
- **Dynamic programming and interview explanation** — Break a problem into reusable subproblems and prove the recurrence.

#### 06 · SQL & factory databases

Relational schemas, joins, aggregates, windows and production query patterns.
- **SELECT, WHERE, ORDER BY and NULL** — Query the right subset of manufacturing records.
- **JOINs, keys and row multiplication** — Combine lot, wafer and equipment tables without corrupting counts.
- **GROUP BY, HAVING and rate denominators** — Produce correct grouped quality dashboards.
- **Windows, CTEs and query plans** — Engineer time-ordered features and tune reliable queries.

#### 16 · Advanced SQL and databases

PostgreSQL query plans, indexing, transactions, schema design and analytical SQL.
- **Execution plans and index tradeoffs in PostgreSQL** — Read EXPLAIN before guessing why a query is slow.
- **Transactions, isolation and idempotent ingestion** — Keep manufacturing records consistent under retries and concurrency.
- **Window functions and event-time analytics** — Implement nontrivial analytical SQL correctly.
- **Dimensional modeling, slowly changing dimensions and data contracts** — Model data so a metric means the same thing across teams.

### 03 · Full-stack software developer (Weeks 21–36)

**Exit gate:** Build a tested web application with authentication, database and deployment.

#### 31 · Web foundations: HTML, CSS and JavaScript

Build accessible pages and understand the browser before frameworks.
- **HTML documents and accessible forms** — Build meaningful document structure.
- **CSS box model and responsive layout** — Control spacing and layouts without fixed-screen assumptions.
- **JavaScript values, functions and arrays** — Write predictable browser-side computations.
- **DOM events, rendering and form validation** — Connect UI actions to state without injection.
- **Promises, async/await and fetch** — Handle browser network failures and concurrent work.

#### 32 · TypeScript, React and frontend engineering

Type safety, component state, forms, effects and practical UI architecture.
- **TypeScript types and runtime boundaries** — Use types without confusing them with validation.
- **React components, props and state** — Render from state and handle updates correctly.
- **Effects, data loading and state machines** — Avoid race conditions and unnecessary effects.
- **Next.js routing and server/client separation** — Design a web app with safe execution boundaries.

#### 33 · Backend engineering, networking and APIs

HTTP, API contracts, authentication, relational transactions and reliable services.
- **HTTP, DNS, TLS and request lifecycle** — Trace a request from browser to service.
- **REST API contracts and validation** — Design consistent endpoints with explicit errors.
- **Authentication, authorization and tenant isolation** — Protect users and data at every endpoint.
- **Transactions, indexes and safe migrations** — Preserve data invariants under failures and concurrency.

#### 35 · Professional testing, debugging and security

Reproduce defects, write useful tests, review changes and protect applications.
- **Systematic debugging and stack traces** — Find the first incorrect assumption.
- **Unit, integration, end-to-end and property tests** — Choose tests that catch real regressions.
- **Git branches, code review and CI workflows** — Collaborate without breaking the main branch.
- **Threat modeling and secure input handling** — Design defensively from the beginning.

### 04 · Advanced software engineering (Weeks 37–48)

**Exit gate:** Explain concurrency, network failures, security and architecture; recover a failed deployment.

#### 34 · Computer systems, OS and concurrency

Understand processes, memory, threads, asynchronous IO and networks.
- **Processes, memory and operating systems** — Understand what runs beneath your code.
- **Concurrency, locks and race conditions** — Reason about interleavings and shared state.
- **Async IO, queues and backpressure** — Bound work and avoid overloaded services.
- **Caching, latency and distributed consistency** — Explain why distributed systems can fail partially.

#### 37 · Low-level programming and language transfer

C memory, Java and transferable programming concepts; optional systems specialization.
- **C values, pointers and memory safety** — Understand addresses and explicit lifetime.
- **Java, static types and managed memory** — Transfer core concepts to enterprise backends.
- **Memory, recursion and numerical representation** — Connect language behavior to underlying computation.

#### 36 · Software architecture and engineering design

Build maintainable systems with interfaces, observability and clear tradeoffs.
- **Requirements, interfaces and modularity** — Turn a vague idea into testable software.
- **Reliability, observability and incidents** — Operate software and diagnose production-style failures.
- **System design: scalable data and ML services** — Estimate workloads and defend architectural choices.
- **Performance measurement and optimization** — Optimize with evidence, not intuition.

#### 10 · APIs, Docker & MLOps

Package, test, deploy, monitor and improve reliable model systems.
- **From notebook to Python package** — Design clean boundaries for training and inference.
- **FastAPI, HTTP and API contracts** — Expose a model through a small validated web service.
- **Docker, containers and dependency isolation** — Package the same application to run consistently across machines.
- **CI/CD, monitoring and model drift** — Prove the system survives changing data and software.

#### 24 · Security and responsible AI

Identity, secrets, private data, prompt injection, threat modeling and responsible release.
- **Threat modeling, auth and least privilege** — Secure AI and data systems from their first design.
- **Prompt injection, retrieval contamination and agent safety** — Recognize untrusted text masquerading as instructions.
- **Privacy, medical data governance and responsible deployment** — Make transferable AI skills safe in healthcare and enterprise settings.
- **Software supply-chain and model artifact security** — Protect dependencies, data pipelines and inference loading.

#### 22 · Cloud, Kubernetes and observability

Networking, cloud deployment, containers, autoscaling, monitoring and disaster recovery.
- **Cloud basics: IAM, storage, compute and networking** — Understand the primitives behind production architecture.
- **Docker layers, image security and reproducible releases** — Ship consistent artifacts rather than works-on-my-machine code.
- **Kubernetes objects and deployment operations** — Read a basic cluster deployment and know what it does not guarantee.
- **Observability, incident response and reliability objectives** — Operate services using measurable behavior.

### 05 · AI and data engineer (Weeks 49–68)

**Exit gate:** Train an evaluated model and build a reliable, cited AI service with reproducible data.

#### 04 · Statistics & math for ML

Probability, uncertainty, linear algebra, evaluation, and experimental design.
- **Probability, conditional probability and base rates** — Understand rare failures without being fooled by alerts.
- **Distributions, sampling and uncertainty** — Estimate variation instead of reporting one lucky number.
- **Vectors, matrices and gradient descent** — Connect feature tables to model parameters.
- **Hypothesis testing, experiments and confounding** — Separate correlation, significance and causation.

#### 05 · Data engineering & pandas

Data cleaning, validation, ETL and feature engineering without leakage.
- **NumPy and pandas fundamentals** — Transform a measurement table with explicit row and column meanings.
- **Data quality, missingness and leakage** — Prevent invalid data from becoming impressive-looking model results.
- **ETL, Parquet and data lineage** — Build traceable pipelines rather than manual spreadsheet transformations.
- **Designing a manufacturing feature table** — Choose grain and temporal joins before fitting any model.

#### 07 · Machine learning & explainability

End-to-end learning with measured baselines, imbalance, calibration and SHAP.
- **Problem framing, baseline and data splitting** — Convert an operational need into a measurable ML experiment.
- **Logistic regression, trees and boosting** — Choose a justified model instead of the newest architecture.
- **Precision, recall, F1, PR-AUC and calibration** — Evaluate rare defects in terms of factory decisions.
- **SHAP, error analysis and model explanations** — Use explanations as hypotheses and audit model weaknesses.

#### 17 · Advanced statistics and experiments

Inference, uncertainty, causal thinking, A/B tests, process monitoring and experimental design.
- **Inference, confidence intervals and multiple testing** — Distinguish signal, sampling uncertainty and false discovery.
- **A/B experiments, power and sample size** — Design experiments before inspecting their results.
- **Causal inference and confounding in factory analytics** — Avoid confusing a correlated measurement with a changeable cause.
- **Statistical process control and sequential detection** — Interpret control charts and false alarms correctly.

#### 18 · Advanced applied machine learning

Validation strategy, calibration, uncertainty, representation, bias and interpretability.
- **Leakage-safe nested validation and hyperparameter tuning** — Estimate real generalization without using the test set to make choices.
- **Calibration, thresholds and decision costs** — Turn a prediction score into a rational business decision.
- **Distribution shift, drift and out-of-distribution detection** — Know when a successful model should stop being trusted.
- **Explainability, fairness and uncertainty under scrutiny** — Provide useful and appropriately limited explanations.

#### 09 · Wafer maps & computer vision

Inspection pipelines, CNNs, wafer maps and manufacturing-aware model evaluation.
- **Images, channels and convolution intuition** — Understand spatial structure without a computer vision background.
- **WM-811K: labels, splits and imbalance** — Create a trustworthy computer-vision benchmark.
- **Training CNNs with PyTorch** — Learn datasets, dataloaders, loss, optimizer and training loops.
- **AOI deployment, drift and human review** — Turn a classifier into a realistic inspection support system.

#### 19 · Deep learning and model internals

Autograd, attention, Transformers, transfer learning, efficient GPU training and evaluation.
- **Autograd, backpropagation and tensor debugging** — Understand training mechanics well enough to diagnose numerical failures.
- **Attention and Transformers from first principles** — Explain the core operation rather than memorize model names.
- **Transfer learning, imbalanced vision and segmentation** — Adapt pretrained models to industrial images without invalid evaluation.
- **Distributed training, mixed precision and inference efficiency** — Make GPU-intensive training measurable and repeatable.

#### 11 · LLMs, RAG & factory assistants

Grounded assistants with retrieval, citations, evaluation and access controls.
- **Embeddings, retrieval and grounded generation** — Understand how a factory assistant can cite its evidence.
- **ChromaDB, chunking and metadata** — Build a searchable document collection with provenance.
- **Prompt injection, permissions and uncertainty** — Make a responsible AI assistant rather than a confident chatbot.
- **RAG evaluation and an operator-facing interface** — Measure whether the assistant actually helps engineers.

#### 20 · LLM engineering and AI agents

LLM applications, retrieval, tool calling, fine-tuning, safety and measurable quality.
- **Prompt design, structured output and tool calling** — Build model integrations that do not silently invent machine data.
- **RAG retrieval, reranking and faithfulness evaluation** — Prove that retrieved evidence supports every important answer.
- **Fine-tuning, evaluation datasets and cost control** — Know when to fine-tune, retrieve or use simpler software.
- **Agent orchestration and failure containment** — Design multi-step AI workflows with explicit human control.

#### 21 · Modern data platforms

Spark, Airflow, Kafka, dbt, event semantics and warehouses for industrial-scale datasets.
- **Spark and distributed data fundamentals** — Understand partitioned computation and when it is actually needed.
- **Airflow orchestration, retries and data quality** — Build pipelines that can recover from interruption.
- **Kafka, event time and streaming correctness** — Reason about delivery, ordering and delayed messages.
- **dbt, warehouses and trustworthy metric definitions** — Deliver consistent analytical tables with lineage and tests.

### 06 · Specialist and career launch (Weeks 69–96+)

**Exit gate:** Ship original capstones, get independent code reviews and pass real mock interviews.

#### 01 · Semiconductor manufacturing

Understand wafers, lots, yields, process steps, packaging, equipment data and factory workflows.
- **Wafer → die → package: the physical pipeline** — Understand what the factory makes and where software data originates.
- **Yield, defects and quality metrics** — Calculate valid yield rates and distinguish rates from counts.
- **Equipment, MES, SPC, FDC and APC** — Place real data systems in the factory workflow.
- **Wafer-map spatial defect patterns** — Connect image shapes with cautious manufacturing hypotheses.

#### 08 · Smart manufacturing analytics

SPC, equipment sensors, anomaly detection, time series and drift.
- **Statistical process control (SPC)** — Understand stable processes, control limits and false alarms.
- **Time-series resampling, windows and forecasting** — Handle actual sensor sequences and temporal leakage.
- **Anomaly detection and alert thresholds** — Identify unusual behavior under limited ground-truth labels.
- **Predictive maintenance: labels, RUL and costs** — Separate maintenance forecasting from yield classification.

#### 23 · ML system design and architecture

Service design, scaling, reliability, costs, feature stores and model delivery under constraints.
- **Design an end-to-end real-time equipment anomaly platform** — Convert vague requirements into an architecture with tradeoffs.
- **Online versus offline features and training-serving skew** — Ensure training inputs represent what will actually exist in production.
- **Capacity planning, cost engineering and reliability tradeoffs** — Estimate infrastructure costs and failure budgets before scaling.
- **Model governance and human-in-the-loop decision systems** — Deliver auditable changes and safe fallback behavior.

#### 25 · Industry specialization tracks

Healthcare, manufacturing, fintech, logistics and energy projects with domain metrics.
- **Healthcare AI specialization** — Transfer bioinformatics research into deployable health-data products.
- **Fintech fraud and risk modeling** — Apply imbalanced ML under financial and operational constraints.
- **Logistics, forecasting and optimization** — Build demand and delay models that support actual operational decisions.
- **Energy forecasting and industrial digital twins** — Model physical data while acknowledging domain constraints.

#### 12 · Three portfolio capstones

Ship proof of capability: wafer classification, yield-risk modeling and grounded troubleshooting.
- **Capstone A · Wafer-map vision service** — Deliver a reproducible, well-evaluated image model and API.
- **Capstone B · SECOM yield-risk pipeline** — Ship a SQL + interpretable ML manufacturing analytics project.
- **Capstone C · Grounded maintenance RAG assistant** — Make a synthetic-document troubleshooting assistant with citations.
- **Portfolio review and engineering write-ups** — Turn three projects into credible interview evidence.

#### 38 · Independent coding and professional product delivery

No-AI exercises, full-stack project execution, portfolio and interview evidence.
- **From problem statement to code without AI** — Develop repeatable independent problem-solving habits.
- **Build a full-stack product in vertical slices** — Deliver a maintainable application from an empty repository.
- **Build an AI assistant as a software system** — Implement retrieval and tool interfaces with evaluation.
- **Technical interview, evidence and salary filters** — Prepare to demonstrate ability instead of claiming a score.

#### 13 · Kaohsiung job launch

Resumes, Chinese manufacturing vocabulary, interviews and role-focused applications.
- **The Kaohsiung-targeted job search** — Track actual location, team and job requirements.
- **Semiconductor Mandarin: job and factory terms** — Use practical bilingual words in meetings and interviews.
- **Technical interviews, SQL whiteboard and ML defense** — Practice communicating unknowns and reasoning under time pressure.
- **Readiness gates, mock interviews and application cadence** — Use measurable evidence instead of a fictional 100% guarantee.

#### 26 · Senior-level technical interviews

Coding, SQL, statistics, ML systems, case studies and explaining difficult tradeoffs.
- **Python and algorithm interviews at senior difficulty** — Explain correctness, complexity, test cases and tradeoffs live.
- **Advanced SQL interview defense** — Solve analytical queries with correct grain and deterministic results.
- **ML case studies and research defense** — Respond to ambiguous model failures with testable hypotheses.
- **System design interviews, incident leadership and tradeoff communication** — Present a feasible architecture and defend tradeoffs to senior reviewers.

#### 27 · NT$100k+ base career strategy

Salary definition, location filters, level expectations, negotiation and evidence-based targeting.
- **Base salary, total compensation and Taiwanese offer arithmetic** — Never confuse a bonus-inclusive package with your monthly base target.
- **High-salary roles and skill-to-evidence mapping** — Target positions where your portfolio demonstrates difficult production work.
- **Kaohsiung-only search, compensation screening and negotiation** — Filter opportunities using the actual worksite and salary breakdown.
- **Performance evidence and long-term career resilience** — Build a durable professional advantage rather than a tool collection.

## Coding project progression

### 1. Command-line calculator

Create a Python program with separate functions for arithmetic and unit conversion. Handle invalid inputs and division by zero.

Acceptance: At least 10 tests, clear prompts, no broad exception suppression, README run instructions.

### 2. Factory CSV report

Parse a fictional CSV, validate fields, aggregate passed/tested by tool and write a JSON summary.

Acceptance: Handle quoted fields, duplicates policy, missing data, zero denominator and invalid input; test all.

### 3. Algorithm toolkit

Implement search, stable merge, bracket validation, BFS and rolling sums without copying solutions.

Acceptance: Unit tests for edge cases, time/space complexity and comparison with simple baseline.

### 4. Responsive task dashboard

Build HTML/CSS/JavaScript task tracker with accessible forms, filtering and local persistence.

Acceptance: Keyboard-accessible, narrow-screen layout, no HTML injection, empty/error states, tests.

### 5. Full-stack incident manager

Build React/Next.js UI, API and PostgreSQL store for fictional equipment incidents. Use a maintained auth provider.

Acceptance: Per-user authorization, validated schemas, migration, integration and browser tests, Vercel demo using synthetic data.

### 6. Reliable job queue

Create API + worker + durable storage for retryable analytics jobs, with bounded concurrency.

Acceptance: Idempotency, retry/backoff, simulated worker failure and recovery, queue metrics and tests.

### 7. Model-powered quality dashboard

Train a leakage-safe model on licensed or synthetic data; expose predictions through an API and explain uncertainty.

Acceptance: Baseline, held-out metrics, versioning, tested data validation, monitoring and rollback plan.

### 8. Your own AI coding tutor

Create a tutor UI, lesson retrieval, model adapter, test-feedback explanation and permission controls.

Acceptance: No API secrets in browser, grounded explanations, mocked model tests, evaluation corpus, safe execution limits and cost notes.

Continue with the seven specialized AI capstone specifications in CAPSTONE_SPECIFICATIONS.md. These are assignments, not pre-completed products.

## Software walkthroughs
- VS Code: Edit, run, debug and inspect a Python project.
- Python + venv + pip: Build isolated, reproducible Python environments.
- PowerShell + Linux shell: Navigate files, run tools, and understand shell differences.
- Git & GitHub: Commit a testable project and publish a clean portfolio.
- JupyterLab: Explore datasets and plots without creating hidden-state notebooks.
- PostgreSQL: Store factory-style relational data and query it with SQL.
- DBeaver: Browse schemas and execute/debug SQL queries in a GUI.
- pandas + NumPy: Inspect, transform and validate mixed-type manufacturing tables.
- scikit-learn: Make leakage-safe, benchmarked classifiers.
- PyTorch: Train a small reproducible classifier before scaling to wafer maps.
- Docker Desktop: Build an inference service that runs reproducibly.
- FastAPI + Postman: Define, validate, test and document inference endpoints.
- XGBoost + SHAP: Fit boosted trees and interpret model behavior carefully.
- ChromaDB + RAG: Ground answers in authorized documents and cite their sources.
- Vercel deployment: Publish this learning platform from a Git repository.
- WSL2 + Ubuntu Linux: Work in a reliable Unix terminal from Windows 11.
- Ruff + Pyright + pre-commit: Automate formatting, linting and type validation.
- pytest + coverage + Hypothesis: Write unit, integration and property-based tests.
- GitHub Actions CI: Run tests on every push and pull request.
- PostgreSQL EXPLAIN + psql: Diagnose SQL plans and compare index performance safely.
- Alembic database migrations: Version database schema changes without manual drift.
- Apache Spark / PySpark: Analyze partitioned data, inspect plans and joins.
- Apache Airflow DAGs: Orchestrate retry-safe ingest, validation and publish steps.
- Apache Kafka + event streams: Publish, consume and replay keyed event streams.
- dbt Core + analytical models: Build tested SQL models and documentation.
- MLflow tracking and model registry: Track experiments and promote evidence-backed model artifacts.
- Hugging Face Transformers + Datasets: Load, tokenize and evaluate pretrained language models reproducibly.
- Optuna tuning + experiment discipline: Search hyperparameters without leaking the final test set.
- kubectl + Kubernetes troubleshooting: Read workloads, diagnose errors and perform safe rollbacks.
- AWS IAM + S3 + compute fundamentals: Understand common AWS services with least-privilege and cost controls.
- Google Cloud IAM + Cloud Run: Deploy an authenticated test container and understand cost limits.
- OpenTelemetry + Prometheus / Grafana: Collect traces, request metrics and operational dashboards.
- Locust API load testing: Benchmark p95 latency, throughput and failure modes.
- OWASP API + AI security review: Review authorization, injection, secrets and AI prompt-injection risks.
- Architecture diagrams + ADRs: Document reliable AI systems and justify decisions.
- Browser DevTools: Inspect HTML, CSS, JavaScript, requests and accessibility.
- Node.js and npm: Run JavaScript outside the browser and manage project dependencies.
- TypeScript compiler: Use strict type checking and runtime validation.
- React component development: Build state-driven accessible components and test their behavior.
- Next.js App Router: Create a server/client web application and deploy it safely.
- Supabase PostgreSQL and Auth: Practice database migrations, authentication and row-level authorization.
- Playwright browser tests: Automate meaningful end-to-end user workflows.
- C compiler and debugger: Compile, diagnose and test small C programs.

## Independent graduation evidence

- Complete a 60–90 minute unseen programming assessment, with no AI or copied solutions; use documentation only if allowed. Explain complexity, correctness and boundaries to a reviewer.
- Debug a deliberately broken unfamiliar project, write a regression test, and explain the root cause.
- Build and deploy an original full-stack application with a real database, per-user permissions, tests, accessibility checks and documented failure behavior.
- Complete an AI specialization project with honest evaluation, baseline comparisons and model limitations.
- Have another engineer review at least two original repositories and conduct mock interviews.
- Apply only to roles whose actual worksite, language, experience expectations and fixed-base salary meet your requirements. Senior pay depends on hiring conditions and demonstrated experience, not course completion.
