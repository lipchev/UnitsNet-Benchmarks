window.BENCHMARK_DATA = {
  "lastUpdate": 1621561565856,
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
          "id": "e4524cfe92bf8996444a5be8f44879817ad34fb7",
          "message": "Re-publish",
          "timestamp": "2021-05-21T04:45:08+03:00",
          "tree_id": "7ffac927877ee162a31192113eeebe98f25506cd",
          "url": "https://github.com/lipchev/UnitsNet-Benchmarks/commit/e4524cfe92bf8996444a5be8f44879817ad34fb7"
        },
        "date": 1621561555683,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.TryParse_Valid",
            "value": 60504.395360628725,
            "unit": "ns",
            "range": "± 1004.4258470897687"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.Parse",
            "value": 61562.292960662526,
            "unit": "ns",
            "range": "± 787.3624024986461"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.TryParse_InvalidNumber",
            "value": 66511.43978605936,
            "unit": "ns",
            "range": "± 1001.838650268861"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.QuantityTryParse_InvalidNumber",
            "value": 67906.90689319206,
            "unit": "ns",
            "range": "± 1390.0929531341812"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.TryParse_InvalidUnit",
            "value": 74524.02183498198,
            "unit": "ns",
            "range": "± 1860.6250486573817"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.QuantityTryParse_InvalidUnit",
            "value": 75342.13712658978,
            "unit": "ns",
            "range": "± 970.6326169710132"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.Quantity_Parse",
            "value": 75774.29285099053,
            "unit": "ns",
            "range": "± 891.7647460542788"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.Quantity_TryParse",
            "value": 77056.77340263095,
            "unit": "ns",
            "range": "± 1857.4859388891307"
          }
        ]
      }
    ]
  }
}