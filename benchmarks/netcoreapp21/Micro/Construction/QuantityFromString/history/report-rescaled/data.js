window.BENCHMARK_DATA = {
  "lastUpdate": 1621695574627,
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
        "date": 1621695526119,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Micro.Construction.QuantityFromString.Parse",
            "value": 64257.5924851546,
            "unit": "ns",
            "range": "± 829.0374311063"
          },
          {
            "name": "Micro.Construction.QuantityFromString.TryParse_Valid",
            "value": 65872.94492331093,
            "unit": "ns",
            "range": "± 2121.1440494971034"
          },
          {
            "name": "Micro.Construction.QuantityFromString.TryParse_InvalidNumber",
            "value": 71106.87170619237,
            "unit": "ns",
            "range": "± 1580.0117085444567"
          },
          {
            "name": "Micro.Construction.QuantityFromString.QuantityTryParse_InvalidNumber",
            "value": 71414.19812071986,
            "unit": "ns",
            "range": "± 896.2988006115434"
          },
          {
            "name": "Micro.Construction.QuantityFromString.Quantity_TryParse",
            "value": 76273.00756736803,
            "unit": "ns",
            "range": "± 1155.5812181217725"
          },
          {
            "name": "Micro.Construction.QuantityFromString.Quantity_Parse",
            "value": 76934.01033591731,
            "unit": "ns",
            "range": "± 1333.0395226125427"
          },
          {
            "name": "Micro.Construction.QuantityFromString.TryParse_InvalidUnit",
            "value": 77921.43342391304,
            "unit": "ns",
            "range": "± 1484.9850867638972"
          },
          {
            "name": "Micro.Construction.QuantityFromString.QuantityTryParse_InvalidUnit",
            "value": 80810.34151536868,
            "unit": "ns",
            "range": "± 2193.680175739973"
          }
        ]
      }
    ]
  }
}