window.BENCHMARK_DATA = {
  "lastUpdate": 1621625896760,
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
          "id": "a5d6bf983c8ffe01c4f77a18a7a365c879aab22a",
          "message": "Publish with max-parallel: 1",
          "timestamp": "2021-05-21T05:14:32+03:00",
          "tree_id": "64100eaefb345a9dd17d5a1fa6e6ccb124cdbe56",
          "url": "https://github.com/lipchev/UnitsNet-Benchmarks/commit/a5d6bf983c8ffe01c4f77a18a7a365c879aab22a"
        },
        "date": 1621566408972,
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
        "date": 1621625866014,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.TryParse_Valid",
            "value": 61745.319432120676,
            "unit": "ns",
            "range": "± 1708.3944448351879"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.Parse",
            "value": 66192.47325741891,
            "unit": "ns",
            "range": "± 405.84532764408664"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.TryParse_InvalidNumber",
            "value": 72122.37318840579,
            "unit": "ns",
            "range": "± 4011.4627894135106"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.TryParse_InvalidUnit",
            "value": 72194.4789510007,
            "unit": "ns",
            "range": "± 1106.9435775582112"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.QuantityTryParse_InvalidNumber",
            "value": 76085.77035886819,
            "unit": "ns",
            "range": "± 1784.0164146601412"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.Quantity_Parse",
            "value": 79750.85271317829,
            "unit": "ns",
            "range": "± 1683.137069167612"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.QuantityTryParse_InvalidUnit",
            "value": 81760.49861973774,
            "unit": "ns",
            "range": "± 3600.550202041547"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.Quantity_TryParse",
            "value": 83215.52540913007,
            "unit": "ns",
            "range": "± 2424.2155292893785"
          }
        ]
      }
    ]
  }
}