window.BENCHMARK_DATA = {
  "lastUpdate": 1621564877904,
  "repoUrl": "https://github.com/lipchev/UnitsNet-Benchmarks",
  "entries": {
    "UnitsNet.Benchmark.Micro.Construction.QuantityFromUnit-report-rescaled": [
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
          "id": "a5d6bf983c8ffe01c4f77a18a7a365c879aab22a",
          "message": "Publish with max-parallel: 1",
          "timestamp": "2021-05-21T05:14:32+03:00",
          "tree_id": "64100eaefb345a9dd17d5a1fa6e6ccb124cdbe56",
          "url": "https://github.com/lipchev/UnitsNet-Benchmarks/commit/a5d6bf983c8ffe01c4f77a18a7a365c879aab22a"
        },
        "date": 1621564868338,
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