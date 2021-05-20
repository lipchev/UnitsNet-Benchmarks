window.BENCHMARK_DATA = {
  "lastUpdate": 1621525851138,
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
        "date": 1621525817037,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.QuantityTryParse_InvalidNumber",
            "value": 52275.64621707003,
            "unit": "ns",
            "range": "± 1516.8107237288343"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.TryParse_Valid",
            "value": 52511.47963964445,
            "unit": "ns",
            "range": "± 1490.2181236473862"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.Parse",
            "value": 53583.64712732919,
            "unit": "ns",
            "range": "± 831.045528724785"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.QuantityTryParse_InvalidUnit",
            "value": 57862.59881422924,
            "unit": "ns",
            "range": "± 1786.8564563608795"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.Quantity_TryParse",
            "value": 58115.31108688629,
            "unit": "ns",
            "range": "± 1778.1299970457576"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.TryParse_InvalidNumber",
            "value": 58211.29596766242,
            "unit": "ns",
            "range": "± 1216.880138342836"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.Quantity_Parse",
            "value": 60597.837438677336,
            "unit": "ns",
            "range": "± 3399.312897883797"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.TryParse_InvalidUnit",
            "value": 62519.09145645836,
            "unit": "ns",
            "range": "± 936.7128340678789"
          }
        ]
      }
    ]
  }
}