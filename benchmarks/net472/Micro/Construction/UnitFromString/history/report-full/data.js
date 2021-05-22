window.BENCHMARK_DATA = {
  "lastUpdate": 1621716165611,
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
        "date": 1621693784520,
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
          "id": "fb5ca97684f9b8e84bd4bfbdf83bd511eba73370",
          "message": "Publish results (Test Run1)",
          "timestamp": "2021-05-22T23:26:55+03:00",
          "tree_id": "7d14fd79414a35099140e5b52af71b53051e0a4b",
          "url": "https://github.com/lipchev/UnitsNet-Benchmarks/commit/fb5ca97684f9b8e84bd4bfbdf83bd511eba73370"
        },
        "date": 1621716104011,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Micro.Construction.UnitFromString.ParseUnit",
            "value": 792.518257472826,
            "unit": "ns",
            "range": "± 12.525396523845922"
          },
          {
            "name": "Micro.Construction.UnitFromString.TryParseUnit_Valid",
            "value": 820.9312770677651,
            "unit": "ns",
            "range": "± 25.33444229221079"
          },
          {
            "name": "Micro.Construction.UnitFromString.UnitParser_Parse",
            "value": 920.9109031815245,
            "unit": "ns",
            "range": "± 17.108880643670428"
          },
          {
            "name": "Micro.Construction.UnitFromString.UnitParser_TryParse",
            "value": 922.2471031169251,
            "unit": "ns",
            "range": "± 15.094809688917564"
          },
          {
            "name": "Micro.Construction.UnitFromString.TryParseUnit_Invalid",
            "value": 1889.7380568225933,
            "unit": "ns",
            "range": "± 14.559734622853211"
          }
        ]
      }
    ]
  }
}