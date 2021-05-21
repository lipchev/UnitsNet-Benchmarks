window.BENCHMARK_DATA = {
  "lastUpdate": 1621566556120,
  "repoUrl": "https://github.com/lipchev/UnitsNet-Benchmarks",
  "entries": {
    "UnitsNet.Benchmark.Micro.Construction.QuantityFromUnit-report-full": [
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
        "date": 1621566544509,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromUnit.Constructor",
            "value": 16.280057648165418,
            "unit": "ns",
            "range": "± 0.1391721203554808"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromUnit.Constructor_FromUnit",
            "value": 35.734348158047005,
            "unit": "ns",
            "range": "± 0.8824940464323457"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromUnit.QuantityFromQuantityInfo",
            "value": 70.76053876439838,
            "unit": "ns",
            "range": "± 1.1261199972520493"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromUnit.QuantityFrom_Generic",
            "value": 105.16116255729665,
            "unit": "ns",
            "range": "± 0.8901079877010123"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromUnit.QuantityFrom",
            "value": 106.41622331783427,
            "unit": "ns",
            "range": "± 1.4769959688773158"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromUnit.QuantityFrom_RandomUnit",
            "value": 156.26810745740212,
            "unit": "ns",
            "range": "± 1.737445924392728"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromUnit.Constructor_UnitSystem",
            "value": 575.1086602694746,
            "unit": "ns",
            "range": "± 6.316418084374169"
          }
        ]
      }
    ]
  }
}