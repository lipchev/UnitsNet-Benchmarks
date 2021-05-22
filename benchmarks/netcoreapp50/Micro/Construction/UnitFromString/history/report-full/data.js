window.BENCHMARK_DATA = {
  "lastUpdate": 1621697476578,
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
        "date": 1621697422104,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Micro.Construction.UnitFromString.ParseUnit",
            "value": 509.5012808537138,
            "unit": "ns",
            "range": "± 15.024178172927273"
          },
          {
            "name": "Micro.Construction.UnitFromString.TryParseUnit_Valid",
            "value": 662.6583928647248,
            "unit": "ns",
            "range": "± 12.44154610091597"
          },
          {
            "name": "Micro.Construction.UnitFromString.UnitParser_TryParse",
            "value": 680.4115649106056,
            "unit": "ns",
            "range": "± 13.90615094510807"
          },
          {
            "name": "Micro.Construction.UnitFromString.UnitParser_Parse",
            "value": 735.2436303339433,
            "unit": "ns",
            "range": "± 15.341356107068801"
          },
          {
            "name": "Micro.Construction.UnitFromString.TryParseUnit_Invalid",
            "value": 1039.756422400164,
            "unit": "ns",
            "range": "± 31.080567537335007"
          }
        ]
      }
    ]
  }
}