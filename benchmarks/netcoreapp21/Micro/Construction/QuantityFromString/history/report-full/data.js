window.BENCHMARK_DATA = {
  "lastUpdate": 1621637114701,
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
          "id": "a5d6bf983c8ffe01c4f77a18a7a365c879aab22a",
          "message": "Publish with max-parallel: 1",
          "timestamp": "2021-05-21T05:14:32+03:00",
          "tree_id": "64100eaefb345a9dd17d5a1fa6e6ccb124cdbe56",
          "url": "https://github.com/lipchev/UnitsNet-Benchmarks/commit/a5d6bf983c8ffe01c4f77a18a7a365c879aab22a"
        },
        "date": 1621565565340,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.Parse",
            "value": 76442.36024844719,
            "unit": "ns",
            "range": "± 1868.1601887654244"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.TryParse_Valid",
            "value": 76496.12577639753,
            "unit": "ns",
            "range": "± 1402.0799947504"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.QuantityTryParse_InvalidNumber",
            "value": 83925.38980509745,
            "unit": "ns",
            "range": "± 2442.039769449295"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.TryParse_InvalidNumber",
            "value": 85637.43453903298,
            "unit": "ns",
            "range": "± 3463.087907931609"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.TryParse_InvalidUnit",
            "value": 92301.19491274773,
            "unit": "ns",
            "range": "± 2106.438848007816"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.Quantity_Parse",
            "value": 93802.23298880275,
            "unit": "ns",
            "range": "± 2735.392708419239"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.Quantity_TryParse",
            "value": 93904.20058139534,
            "unit": "ns",
            "range": "± 3268.5443960293724"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.QuantityTryParse_InvalidUnit",
            "value": 96967.91563146996,
            "unit": "ns",
            "range": "± 2818.66547353712"
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
        "date": 1621627197652,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.TryParse_Valid",
            "value": 73913.95445134577,
            "unit": "ns",
            "range": "± 7859.7730441438625"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.QuantityTryParse_InvalidNumber",
            "value": 74807.9089026915,
            "unit": "ns",
            "range": "± 945.9958817000637"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.Parse",
            "value": 82272.5,
            "unit": "ns",
            "range": "± 4780.864937791345"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.TryParse_InvalidNumber",
            "value": 84097.58799171842,
            "unit": "ns",
            "range": "± 2834.120128298614"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.Quantity_TryParse",
            "value": 91402.62704565031,
            "unit": "ns",
            "range": "± 1910.6228336981153"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.Quantity_Parse",
            "value": 91458.1126184324,
            "unit": "ns",
            "range": "± 2235.4656889293174"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.QuantityTryParse_InvalidUnit",
            "value": 91872.32142857142,
            "unit": "ns",
            "range": "± 4084.2156840259213"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.TryParse_InvalidUnit",
            "value": 94066.77018633542,
            "unit": "ns",
            "range": "± 3760.336628744595"
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
          "id": "039ade9a6c5b4c6dc5adc8b6c12e531df09ee6e8",
          "message": "Manual publish N1 (short)",
          "timestamp": "2021-05-22T01:07:01+03:00",
          "tree_id": "49ff670af70e4c4de72523822f7a08fb500e8b5e",
          "url": "https://github.com/lipchev/UnitsNet-Benchmarks/commit/039ade9a6c5b4c6dc5adc8b6c12e531df09ee6e8"
        },
        "date": 1621637071299,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.TryParse_Valid",
            "value": 80174.56004140787,
            "unit": "ns",
            "range": "± 744.2266223959832"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.Parse",
            "value": 83381.34057971014,
            "unit": "ns",
            "range": "± 2084.790523605908"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.QuantityTryParse_InvalidNumber",
            "value": 88374.22360248446,
            "unit": "ns",
            "range": "± 1971.157842973962"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.TryParse_InvalidNumber",
            "value": 89519.68944099378,
            "unit": "ns",
            "range": "± 3465.817156788787"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.QuantityTryParse_InvalidUnit",
            "value": 98393.44720496895,
            "unit": "ns",
            "range": "± 929.9688853736936"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.Quantity_TryParse",
            "value": 99975.04306632212,
            "unit": "ns",
            "range": "± 1885.0042389982455"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.TryParse_InvalidUnit",
            "value": 101029.6195652174,
            "unit": "ns",
            "range": "± 4736.667967920998"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.Quantity_Parse",
            "value": 101586.11111111111,
            "unit": "ns",
            "range": "± 523.3892843636701"
          }
        ]
      }
    ]
  }
}