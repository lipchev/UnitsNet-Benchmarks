window.BENCHMARK_DATA = {
  "lastUpdate": 1621564760309,
  "repoUrl": "https://github.com/lipchev/UnitsNet-Benchmarks",
  "entries": {
    "UnitsNet.Benchmark.Micro.Construction.UnitFromString-report-full": [
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
        "date": 1621564748329,
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