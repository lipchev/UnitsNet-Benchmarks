window.BENCHMARK_DATA = {
  "lastUpdate": 1621628664314,
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
        "date": 1621628637012,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.UnitFromString.TryParseUnit_Valid",
            "value": 574.6365438583722,
            "unit": "ns",
            "range": "± 12.769328014822616"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.UnitFromString.ParseUnit",
            "value": 589.6852860539597,
            "unit": "ns",
            "range": "± 3.4110307136979645"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.UnitFromString.UnitParser_TryParse",
            "value": 734.4554128983635,
            "unit": "ns",
            "range": "± 35.032942273547704"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.UnitFromString.UnitParser_Parse",
            "value": 738.5791394137595,
            "unit": "ns",
            "range": "± 14.932128568115779"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.UnitFromString.TryParseUnit_Invalid",
            "value": 1031.9235349540631,
            "unit": "ns",
            "range": "± 3.7985209013257197"
          }
        ]
      }
    ]
  }
}