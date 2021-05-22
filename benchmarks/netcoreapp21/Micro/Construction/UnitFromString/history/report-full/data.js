window.BENCHMARK_DATA = {
  "lastUpdate": 1621695649894,
  "repoUrl": "https://github.com/lipchev/UnitsNet-Benchmarks",
  "entries": {
    "Micro.Construction.UnitFromString-report-full": [
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
        "date": 1621695596465,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Micro.Construction.UnitFromString.TryParseUnit_Valid",
            "value": 506.48672379745045,
            "unit": "ns",
            "range": "± 14.51826089497983"
          },
          {
            "name": "Micro.Construction.UnitFromString.ParseUnit",
            "value": 519.2385906448011,
            "unit": "ns",
            "range": "± 15.54884288674962"
          },
          {
            "name": "Micro.Construction.UnitFromString.UnitParser_TryParse",
            "value": 664.8798709163899,
            "unit": "ns",
            "range": "± 18.981564864230894"
          },
          {
            "name": "Micro.Construction.UnitFromString.UnitParser_Parse",
            "value": 669.2520568145114,
            "unit": "ns",
            "range": "± 15.873015445327118"
          },
          {
            "name": "Micro.Construction.UnitFromString.TryParseUnit_Invalid",
            "value": 1066.7404592517107,
            "unit": "ns",
            "range": "± 29.149539032125254"
          }
        ]
      }
    ]
  }
}