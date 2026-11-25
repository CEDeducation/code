"""Educational synthetic wafer-yield calculations.

No proprietary data. Preserves denominator and aggregation grain.
"""
from collections import defaultdict
from collections.abc import Iterable, Mapping
from math import isfinite


def pooled_yield(rows: Iterable[Mapping]) -> float:
    """Return passed dies / tested dies over rows; reject invalid input."""
    p_total = t_total = 0
    for record in rows:
        passed, tested = record["passed"], record["tested"]
        if isinstance(passed, bool) or isinstance(tested, bool) or not isinstance(passed, int) or not isinstance(tested, int):
            raise TypeError("Counts must be integer, not bool or float")
        if tested <= 0 or passed < 0 or passed > tested:
            raise ValueError(f"Invalid die counts: passed={passed}, tested={tested}")
        p_total += passed
        t_total += tested
    if t_total == 0:
        raise ValueError("Cannot compute pooled yield for an empty set")
    value = p_total / t_total
    assert isfinite(value) and 0 <= value <= 1
    return value


def yield_by_lot(rows: Iterable[Mapping]) -> dict[str, float]:
    grouped: dict[str, list[Mapping]] = defaultdict(list)
    for row in rows:
        lot = row["lot_id"]
        if not isinstance(lot, str) or not lot.strip():
            raise ValueError("Lot ID is required")
        grouped[lot].append(row)
    return {lot: pooled_yield(group) for lot, group in sorted(grouped.items())}


if __name__ == "__main__":
    example = [
        {"lot_id": "L1", "passed": 9, "tested": 10},
        {"lot_id": "L1", "passed": 49, "tested": 50},
        {"lot_id": "L2", "passed": 6, "tested": 10},
    ]
    print(yield_by_lot(example))  # L1 = 58/60, not mean(0.9, 0.98)
