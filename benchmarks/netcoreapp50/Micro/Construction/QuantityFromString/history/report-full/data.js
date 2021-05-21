window.BENCHMARK_DATA = {
  "lastUpdate": 1621638750051,
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
        "date": 1621564672459,
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
        "date": 1621628525136,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.Parse",
            "value": 57953.17953268264,
            "unit": "ns",
            "range": "± 739.8305830917745"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.TryParse_Valid",
            "value": 58576.538006506955,
            "unit": "ns",
            "range": "± 404.9296832659154"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.TryParse_InvalidNumber",
            "value": 65103.94483880509,
            "unit": "ns",
            "range": "± 409.49228371640294"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.QuantityTryParse_InvalidNumber",
            "value": 65569.04022478557,
            "unit": "ns",
            "range": "± 1228.6114732235694"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.Quantity_Parse",
            "value": 69299.38415159345,
            "unit": "ns",
            "range": "± 870.3742304659394"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.Quantity_TryParse",
            "value": 69968.01464254952,
            "unit": "ns",
            "range": "± 1271.705152701866"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.TryParse_InvalidUnit",
            "value": 70674.23654244306,
            "unit": "ns",
            "range": "± 1215.8022461120152"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.QuantityTryParse_InvalidUnit",
            "value": 70705.30538302277,
            "unit": "ns",
            "range": "± 2555.2336427775604"
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
        "date": 1621638708163,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.TryParse_Valid",
            "value": 55157.23343685301,
            "unit": "ns",
            "range": "± 3882.8760294745866"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.Parse",
            "value": 55839.74184782609,
            "unit": "ns",
            "range": "± 2260.843285661801"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.TryParse_InvalidNumber",
            "value": 58120.81854480922,
            "unit": "ns",
            "range": "± 1052.2315209084882"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.QuantityTryParse_InvalidNumber",
            "value": 60169.524548950016,
            "unit": "ns",
            "range": "± 1057.0662936145247"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.TryParse_InvalidUnit",
            "value": 65976.90648723257,
            "unit": "ns",
            "range": "± 2496.34856991222"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.Quantity_TryParse",
            "value": 66173.99655469424,
            "unit": "ns",
            "range": "± 893.5048061876663"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.Quantity_Parse",
            "value": 66508.78122308356,
            "unit": "ns",
            "range": "± 791.7992483190823"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromString.QuantityTryParse_InvalidUnit",
            "value": 66912.05634427683,
            "unit": "ns",
            "range": "± 1332.1805125947667"
          }
        ]
      }
    ]
  }
}