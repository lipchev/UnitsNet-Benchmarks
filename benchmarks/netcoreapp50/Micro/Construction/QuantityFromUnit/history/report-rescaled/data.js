window.BENCHMARK_DATA = {
  "lastUpdate": 1621525662150,
  "repoUrl": "https://github.com/lipchev/UnitsNet-Benchmarks",
  "entries": {
    "UnitsNet Benchmarks (netcoreapp50)": [
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
          "id": "9f238a6690c1d3ca1bc790fba3b4563a564f2964",
          "message": "adding namespace\n\nTODO would be better if it were removed from the file name altogether",
          "timestamp": "2021-05-20T18:37:25+03:00",
          "tree_id": "270cc5b1099bef7c8aaf968b9caee4998a775883",
          "url": "https://github.com/lipchev/UnitsNet-Benchmarks/commit/9f238a6690c1d3ca1bc790fba3b4563a564f2964"
        },
        "date": 1621525631681,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromUnit.Constructor",
            "value": 13.430378915853877,
            "unit": "ns",
            "range": "± 0.17817466471111612"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromUnit.Constructor_FromUnit",
            "value": 29.163424726845566,
            "unit": "ns",
            "range": "± 0.5070535631122084"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromUnit.QuantityFromQuantityInfo",
            "value": 59.09477509792493,
            "unit": "ns",
            "range": "± 1.490355892113634"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromUnit.QuantityFrom",
            "value": 77.0403072489186,
            "unit": "ns",
            "range": "± 0.8489727343272759"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromUnit.QuantityFrom_Generic",
            "value": 79.5447541862788,
            "unit": "ns",
            "range": "± 1.4466912849760196"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromUnit.QuantityFrom_RandomUnit",
            "value": 109.01936280307808,
            "unit": "ns",
            "range": "± 2.8184431257868603"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromUnit.Constructor_UnitSystem",
            "value": 344.0853142590256,
            "unit": "ns",
            "range": "± 7.301894238505006"
          }
        ]
      }
    ]
  }
}