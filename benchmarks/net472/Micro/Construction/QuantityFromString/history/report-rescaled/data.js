window.BENCHMARK_DATA = {
  "lastUpdate": 1621693763824,
  "repoUrl": "https://github.com/lipchev/UnitsNet-Benchmarks",
  "entries": {
    "Micro.Construction.QuantityFromString-report-rescaled": [
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
        "date": 1621693710963,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Micro.Construction.QuantityFromString.TryParse_Valid",
            "value": 70878.52891156462,
            "unit": "ns",
            "range": "± 1162.244217715319"
          },
          {
            "name": "Micro.Construction.QuantityFromString.Parse",
            "value": 71024.46005081877,
            "unit": "ns",
            "range": "± 1742.9819093953404"
          },
          {
            "name": "Micro.Construction.QuantityFromString.TryParse_InvalidNumber",
            "value": 79136.74948240165,
            "unit": "ns",
            "range": "± 1226.5888883520636"
          },
          {
            "name": "Micro.Construction.QuantityFromString.QuantityTryParse_InvalidNumber",
            "value": 80740.08281573499,
            "unit": "ns",
            "range": "± 1361.402715984818"
          },
          {
            "name": "Micro.Construction.QuantityFromString.TryParse_InvalidUnit",
            "value": 87872.52994676132,
            "unit": "ns",
            "range": "± 1179.7564636898653"
          },
          {
            "name": "Micro.Construction.QuantityFromString.QuantityTryParse_InvalidUnit",
            "value": 90541.88923395444,
            "unit": "ns",
            "range": "± 985.803901209102"
          },
          {
            "name": "Micro.Construction.QuantityFromString.Quantity_Parse",
            "value": 91388.28089375285,
            "unit": "ns",
            "range": "± 1872.7170943022352"
          },
          {
            "name": "Micro.Construction.QuantityFromString.Quantity_TryParse",
            "value": 92909.84233688629,
            "unit": "ns",
            "range": "± 1780.37732242293"
          }
        ]
      }
    ]
  }
}