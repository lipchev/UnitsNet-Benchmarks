window.BENCHMARK_DATA = {
  "lastUpdate": 1621627346007,
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
        "date": 1621565635563,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.UnitFromString.TryParseUnit_Valid",
            "value": 555.9205439563733,
            "unit": "ns",
            "range": "± 10.861117802029424"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.UnitFromString.ParseUnit",
            "value": 559.8444417678757,
            "unit": "ns",
            "range": "± 13.125339175868689"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.UnitFromString.UnitParser_TryParse",
            "value": 746.0738921076478,
            "unit": "ns",
            "range": "± 15.470087542406441"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.UnitFromString.UnitParser_Parse",
            "value": 755.7063045058139,
            "unit": "ns",
            "range": "± 19.30438442067074"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.UnitFromString.TryParseUnit_Invalid",
            "value": 1192.6351055877515,
            "unit": "ns",
            "range": "± 27.399351451076985"
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
        "date": 1621627316277,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.UnitFromString.TryParseUnit_Valid",
            "value": 486.39004472373193,
            "unit": "ns",
            "range": "± 10.791747105963656"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.UnitFromString.ParseUnit",
            "value": 632.3981306814507,
            "unit": "ns",
            "range": "± 3.599402365950433"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.UnitFromString.UnitParser_Parse",
            "value": 825.5297073508827,
            "unit": "ns",
            "range": "± 7.908732662946753"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.UnitFromString.UnitParser_TryParse",
            "value": 837.564178913652,
            "unit": "ns",
            "range": "± 24.580739829485054"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.UnitFromString.TryParseUnit_Invalid",
            "value": 1179.5875691479039,
            "unit": "ns",
            "range": "± 121.63629970902198"
          }
        ]
      }
    ]
  }
}