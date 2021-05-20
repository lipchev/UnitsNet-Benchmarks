window.BENCHMARK_DATA = {
  "lastUpdate": 1621525724914,
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
        "date": 1621525690696,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.UnitFromString.TryParseUnit_Valid",
            "value": 488.98024688881094,
            "unit": "ns",
            "range": "± 8.004524783377484"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.UnitFromString.ParseUnit",
            "value": 514.4841764777836,
            "unit": "ns",
            "range": "± 13.177650294122241"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.UnitFromString.UnitParser_TryParse",
            "value": 677.9601451469637,
            "unit": "ns",
            "range": "± 10.804536926517011"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.UnitFromString.UnitParser_Parse",
            "value": 702.7255903534804,
            "unit": "ns",
            "range": "± 19.949056566315665"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.UnitFromString.TryParseUnit_Invalid",
            "value": 912.4425901663503,
            "unit": "ns",
            "range": "± 25.258377682859944"
          }
        ]
      }
    ]
  }
}