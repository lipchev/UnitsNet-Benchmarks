window.BENCHMARK_DATA = {
  "lastUpdate": 1621693918962,
  "repoUrl": "https://github.com/lipchev/UnitsNet-Benchmarks",
  "entries": {
    "Micro.Construction.UnitFromString-report-rescaled": [
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
          "id": "b28d03926b63bbd5c5b8c64b5e3c487189ca05f0",
          "message": "Response code 404 (Not Found)",
          "timestamp": "2021-05-22T17:15:43+03:00",
          "tree_id": "f4c419cb0893742777cdef9e2bdf0b02587d8831",
          "url": "https://github.com/lipchev/UnitsNet-Benchmarks/commit/b28d03926b63bbd5c5b8c64b5e3c487189ca05f0"
        },
        "date": 1621693865540,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Micro.Construction.UnitFromString.TryParseUnit_Valid",
            "value": 818.3959559537132,
            "unit": "ns",
            "range": "± 14.675160022689774"
          },
          {
            "name": "Micro.Construction.UnitFromString.ParseUnit",
            "value": 833.1093030792479,
            "unit": "ns",
            "range": "± 10.9557501012283"
          },
          {
            "name": "Micro.Construction.UnitFromString.UnitParser_TryParse",
            "value": 1022.7097316033969,
            "unit": "ns",
            "range": "± 20.889186167149557"
          },
          {
            "name": "Micro.Construction.UnitFromString.UnitParser_Parse",
            "value": 1050.171713062437,
            "unit": "ns",
            "range": "± 23.799338470088873"
          },
          {
            "name": "Micro.Construction.UnitFromString.TryParseUnit_Invalid",
            "value": 1936.4192986340254,
            "unit": "ns",
            "range": "± 37.041536821161536"
          }
        ]
      }
    ]
  }
}