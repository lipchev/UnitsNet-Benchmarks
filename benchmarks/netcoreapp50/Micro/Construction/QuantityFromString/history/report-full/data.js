window.BENCHMARK_DATA = {
  "lastUpdate": 1621697320726,
  "repoUrl": "https://github.com/lipchev/UnitsNet-Benchmarks",
  "entries": {
    "Micro.Construction.QuantityFromString-report-full": [
      {
        "commit": {
          "author": {
            "email": "lipchev@gmail.com",
            "name": "lipchev",
            "username": "lipchev"
          },
          "committer": {
            "email": "lipchev@gmail.com",
            "name": "lipchev",
            "username": "lipchev"
          },
          "distinct": true,
          "id": "b28d03926b63bbd5c5b8c64b5e3c487189ca05f0",
          "message": "Response code 404 (Not Found)",
          "timestamp": "2021-05-22T17:15:43+03:00",
          "tree_id": "f4c419cb0893742777cdef9e2bdf0b02587d8831",
          "url": "https://github.com/lipchev/UnitsNet-Benchmarks/commit/b28d03926b63bbd5c5b8c64b5e3c487189ca05f0"
        },
        "date": 1621697269837,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Micro.Construction.QuantityFromString.TryParse_Valid",
            "value": 57744.64721447585,
            "unit": "ns",
            "range": "± 1643.3445817152217"
          },
          {
            "name": "Micro.Construction.QuantityFromString.Parse",
            "value": 59431.55922038982,
            "unit": "ns",
            "range": "± 1717.8661905237966"
          },
          {
            "name": "Micro.Construction.QuantityFromString.TryParse_InvalidNumber",
            "value": 64242.50091340886,
            "unit": "ns",
            "range": "± 2041.219050848839"
          },
          {
            "name": "Micro.Construction.QuantityFromString.QuantityTryParse_InvalidNumber",
            "value": 64386.90652644457,
            "unit": "ns",
            "range": "± 1568.6389930006274"
          },
          {
            "name": "Micro.Construction.QuantityFromString.TryParse_InvalidUnit",
            "value": 67806.74926673569,
            "unit": "ns",
            "range": "± 1697.5612039055557"
          },
          {
            "name": "Micro.Construction.QuantityFromString.QuantityTryParse_InvalidUnit",
            "value": 69645.89056776556,
            "unit": "ns",
            "range": "± 1897.3353169264765"
          },
          {
            "name": "Micro.Construction.QuantityFromString.Quantity_TryParse",
            "value": 70139.63393626183,
            "unit": "ns",
            "range": "± 943.1163576766534"
          },
          {
            "name": "Micro.Construction.QuantityFromString.Quantity_Parse",
            "value": 71854.60900312799,
            "unit": "ns",
            "range": "± 1351.0080674139"
          }
        ]
      }
    ]
  }
}