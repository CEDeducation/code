import unittest
from yield_analysis import pooled_yield, yield_by_lot

class YieldTests(unittest.TestCase):
    def test_weighted_not_unweighted(self):
        samples = [{"passed": 1, "tested": 2}, {"passed": 99, "tested": 100}]
        self.assertAlmostEqual(pooled_yield(samples), 100/102)
    def test_grouping(self):
        records = [{"lot_id": "A", "passed": 9, "tested": 10}, {"lot_id":"B", "passed":8, "tested":10}, {"lot_id":"A", "passed": 9, "tested": 10}]
        self.assertEqual(yield_by_lot(records), {"A":0.9,"B":0.8})
    def test_invalid_and_empty(self):
        with self.assertRaises(ValueError): pooled_yield([])
        with self.assertRaises(ValueError): pooled_yield([{"passed":2,"tested":1}])
        with self.assertRaises(TypeError): pooled_yield([{"passed":True,"tested":2}])

if __name__=='__main__': unittest.main()
