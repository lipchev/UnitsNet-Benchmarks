window.BENCHMARK_DATA = {
  "lastUpdate": 1621629212735,
  "repoUrl": "https://github.com/lipchev/UnitsNet-Benchmarks",
  "entries": {
    "UnitsNet.Benchmark.Baseline.StableBaselineBenchmarks-report-full": [
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
        "date": 1621563471901,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Baseline.StableBaselineBenchmarks.Parse(textValue: \"1234.56789\")",
            "value": 111.95238530635834,
            "unit": "ns",
            "range": "± 2.9396103620030214"
          },
          {
            "name": "UnitsNet.Benchmark.Baseline.StableBaselineBenchmarks.Decimal_Parse(textValue: \"1234.56789\")",
            "value": 124.85463482992989,
            "unit": "ns",
            "range": "± 4.1680843946246995"
          }
        ]
      },
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
          "id": "d92ef51c61a7e085132654a7e0f87c40a37690e6",
          "message": "manually publish the results (-job short)",
          "timestamp": "2021-05-21T22:29:31+03:00",
          "tree_id": "aa0beff90e0f3392d399f915ac9bf717d8f63a5f",
          "url": "https://github.com/lipchev/UnitsNet-Benchmarks/commit/d92ef51c61a7e085132654a7e0f87c40a37690e6"
        },
        "date": 1621629181545,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Baseline.StableBaselineBenchmarks.Parse(textValue: \"1234.56789\")",
            "value": 131.1868111292521,
            "unit": "ns",
            "range": "± 0.649648934668452"
          },
          {
            "name": "UnitsNet.Benchmark.Baseline.StableBaselineBenchmarks.Decimal_Parse(textValue: \"1234.56789\")",
            "value": 146.4844306310018,
            "unit": "ns",
            "range": "± 1.7986922466148898"
          }
        ]
      }
    ]
  }
}