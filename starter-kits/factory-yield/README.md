# Starter kit 1 — Wafer-yield analysis, from correct math to tests

**Uses only synthetic example data.** This is a professional coding exercise, not a deployed semiconductor predictive model.

From this directory: `python yield_analysis.py` and `python -m unittest discover -s tests -v`.

The core learning goal is correct pooled yield. Averaging wafer-level ratios without weighting by tested die count can give incorrect lot-level results.

Extend it: (1) generate 100,000 synthetic wafer records with stable random seed; (2) load them into PostgreSQL; (3) write SQL that agrees with Python on lots and products; (4) add bad-data quarantine and structured logging; (5) package with pytest/CI; (6) document performance and abnormal-input behavior; (7) only then explore yield prediction using a properly separated train/test split.
