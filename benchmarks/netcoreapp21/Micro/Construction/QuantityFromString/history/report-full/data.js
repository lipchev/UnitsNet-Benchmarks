window.BENCHMARK_DATA = {
  "lastUpdate": 1621565576668,
  "repoUrl": "https://github.com/lipchev/UnitsNet-Benchmarks",
  "entries": {
    "UnitsNet.Benchmark.Micro.Construction.QuantityFromString-report-full": [
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
        "date": 1621565565340,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.Parse",
            "value": 76442.36024844719,
            "unit": "ns",
            "range": "± 1868.1601887654244"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.TryParse_Valid",
            "value": 76496.12577639753,
            "unit": "ns",
            "range": "± 1402.0799947504"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.QuantityTryParse_InvalidNumber",
            "value": 83925.38980509745,
            "unit": "ns",
            "range": "± 2442.039769449295"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.TryParse_InvalidNumber",
            "value": 85637.43453903298,
            "unit": "ns",
            "range": "± 3463.087907931609"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.TryParse_InvalidUnit",
            "value": 92301.19491274773,
            "unit": "ns",
            "range": "± 2106.438848007816"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.Quantity_Parse",
            "value": 93802.23298880275,
            "unit": "ns",
            "range": "± 2735.392708419239"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.Quantity_TryParse",
            "value": 93904.20058139534,
            "unit": "ns",
            "range": "± 3268.5443960293724"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.QuantityTryParse_InvalidUnit",
            "value": 96967.91563146996,
            "unit": "ns",
            "range": "± 2818.66547353712"
          }
        ]
      }
    ]
  }
}