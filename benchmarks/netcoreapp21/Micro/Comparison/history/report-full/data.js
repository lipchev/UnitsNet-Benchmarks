window.BENCHMARK_DATA = {
  "lastUpdate": 1621627453716,
  "repoUrl": "https://github.com/lipchev/UnitsNet-Benchmarks",
  "entries": {
    "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals-report-full": [
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
        "date": 1621565838728,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals(x: 1,234.56 m, y: 1,234.56 m)",
            "value": 9.547279119491577,
            "unit": "ns",
            "range": "± 0.28119257496352057"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals(x: 1,234.56 cm, y: 1,234.56 cm)",
            "value": 9.922471741835276,
            "unit": "ns",
            "range": "± 0.198181336556581"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals(x: 1,234.56 m, y: 0 m)",
            "value": 10.695570494447436,
            "unit": "ns",
            "range": "± 0.1939968793119879"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Relative(x: 1,234.56 cm, y: 1,234.56 cm)",
            "value": 11.55051759311131,
            "unit": "ns",
            "range": "± 0.30503492744493815"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Relative(x: 1,234.56 m, y: 1,234.56 m)",
            "value": 11.699049518658565,
            "unit": "ns",
            "range": "± 0.21227672480778692"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Relative(x: 1,234.56 m, y: 0 m)",
            "value": 11.832333028316498,
            "unit": "ns",
            "range": "± 0.3397620282014017"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Absolute(x: 1,234.56 cm, y: 1,234.56 cm)",
            "value": 12.548377152000155,
            "unit": "ns",
            "range": "± 0.24507929997748754"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Absolute(x: 1,234.56 m, y: 0 m)",
            "value": 12.974716226259867,
            "unit": "ns",
            "range": "± 0.3600443980164848"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Absolute(x: 1,234.56 m, y: 1,234.56 m)",
            "value": 13.02725432647599,
            "unit": "ns",
            "range": "± 0.29039578603548866"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.IQuantity_Equals(x: 1,234.56 m, y: 1,234.56 m)",
            "value": 15.578856657851826,
            "unit": "ns",
            "range": "± 0.5216921107272329"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals(x: 1,234.56 cm, y: 0 km)",
            "value": 15.75490100817247,
            "unit": "ns",
            "range": "± 0.4006562789321659"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.IQuantity_Equals(x: 1,234.56 cm, y: 1,234.56 cm)",
            "value": 15.868449405483577,
            "unit": "ns",
            "range": "± 0.384651759317518"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals(x: 1,234.56 cm, y: 0 m)",
            "value": 15.961392223834991,
            "unit": "ns",
            "range": "± 0.4065596111192699"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.IQuantity_Equals(x: 1,234.56 m, y: 0 m)",
            "value": 17.444089849789936,
            "unit": "ns",
            "range": "± 0.28069270956209946"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Relative(x: 1,234.56 cm, y: 0 km)",
            "value": 18.933579723040264,
            "unit": "ns",
            "range": "± 0.5313217633419458"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.MinMax(x: 1,234.56 m, y: 1,234.56 m)",
            "value": 19.171846383496334,
            "unit": "ns",
            "range": "± 0.4386855671965689"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Absolute(x: 1,234.56 cm, y: 0 km)",
            "value": 19.23361877600352,
            "unit": "ns",
            "range": "± 0.35329758411080725"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.MinMax(x: 1,234.56 cm, y: 1,234.56 cm)",
            "value": 19.436177164316177,
            "unit": "ns",
            "range": "± 0.46046607958510044"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.MinMax(x: 1,234.56 m, y: 0 m)",
            "value": 19.486956298351288,
            "unit": "ns",
            "range": "± 0.362988805091088"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Relative(x: 1,234.56 cm, y: 0 m)",
            "value": 20.272061973810196,
            "unit": "ns",
            "range": "± 0.48526469359556573"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Absolute(x: 1,234.56 cm, y: 0 m)",
            "value": 20.28667241334915,
            "unit": "ns",
            "range": "± 0.31602426204886125"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.IQuantity_Equals(x: 1,234.56 cm, y: 0 m)",
            "value": 22.80201841803158,
            "unit": "ns",
            "range": "± 0.48348093951474447"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.IQuantity_Equals(x: 1,234.56 cm, y: 0 km)",
            "value": 22.86891066111051,
            "unit": "ns",
            "range": "± 0.6491893233156825"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.MinMax(x: 1,234.56 cm, y: 0 km)",
            "value": 23.33137068678351,
            "unit": "ns",
            "range": "± 0.4882293987923621"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.MinMax(x: 1,234.56 cm, y: 0 m)",
            "value": 24.036856784540063,
            "unit": "ns",
            "range": "± 0.48554612403128267"
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
        "date": 1621627425439,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals(x: 1,234.56 cm, y: 1,234.56 cm)",
            "value": 9.543080627918243,
            "unit": "ns",
            "range": "± 0.2575877964940915"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals(x: 1,234.56 m, y: 1,234.56 m)",
            "value": 9.918670852979025,
            "unit": "ns",
            "range": "± 0.37710649643479455"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Relative(x: 1,234.56 m, y: 0 m)",
            "value": 9.95098277926445,
            "unit": "ns",
            "range": "± 0.09970458856751518"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals(x: 1,234.56 m, y: 0 m)",
            "value": 10.004337628682455,
            "unit": "ns",
            "range": "± 0.17303351856749313"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Relative(x: 1,234.56 m, y: 1,234.56 m)",
            "value": 11.144634087880453,
            "unit": "ns",
            "range": "± 0.4684067568012341"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Relative(x: 1,234.56 cm, y: 1,234.56 cm)",
            "value": 11.309955020745596,
            "unit": "ns",
            "range": "± 0.30475534035196905"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Absolute(x: 1,234.56 m, y: 1,234.56 m)",
            "value": 12.220814824104309,
            "unit": "ns",
            "range": "± 0.2664131328974968"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Absolute(x: 1,234.56 m, y: 0 m)",
            "value": 12.410839647054672,
            "unit": "ns",
            "range": "± 0.551190399500226"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Absolute(x: 1,234.56 cm, y: 1,234.56 cm)",
            "value": 13.429441551367441,
            "unit": "ns",
            "range": "± 0.6433122140038497"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.IQuantity_Equals(x: 1,234.56 m, y: 1,234.56 m)",
            "value": 13.9801025390625,
            "unit": "ns",
            "range": "± 0.1554714247248612"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals(x: 1,234.56 cm, y: 0 km)",
            "value": 14.40219779809316,
            "unit": "ns",
            "range": "± 0.12050908148851608"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals(x: 1,234.56 cm, y: 0 m)",
            "value": 14.630593856175741,
            "unit": "ns",
            "range": "± 1.2887150925569404"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.IQuantity_Equals(x: 1,234.56 cm, y: 1,234.56 cm)",
            "value": 15.193591515223185,
            "unit": "ns",
            "range": "± 0.6394060361294812"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.IQuantity_Equals(x: 1,234.56 m, y: 0 m)",
            "value": 16.305235028266907,
            "unit": "ns",
            "range": "± 0.4624152602672271"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.MinMax(x: 1,234.56 m, y: 0 m)",
            "value": 17.621958255767822,
            "unit": "ns",
            "range": "± 0.35678011688691186"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Relative(x: 1,234.56 cm, y: 0 m)",
            "value": 18.201833466688793,
            "unit": "ns",
            "range": "± 0.41608277014901596"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.MinMax(x: 1,234.56 m, y: 1,234.56 m)",
            "value": 18.543797731399536,
            "unit": "ns",
            "range": "± 0.74900574755445"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.MinMax(x: 1,234.56 cm, y: 1,234.56 cm)",
            "value": 18.640400966008503,
            "unit": "ns",
            "range": "± 1.256706306102304"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Relative(x: 1,234.56 cm, y: 0 km)",
            "value": 18.917598327000935,
            "unit": "ns",
            "range": "± 0.7410129549124878"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Absolute(x: 1,234.56 cm, y: 0 km)",
            "value": 20.889764030774433,
            "unit": "ns",
            "range": "± 1.12549714571033"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Absolute(x: 1,234.56 cm, y: 0 m)",
            "value": 20.923481384913128,
            "unit": "ns",
            "range": "± 0.6318433255201973"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.IQuantity_Equals(x: 1,234.56 cm, y: 0 m)",
            "value": 20.975127319494884,
            "unit": "ns",
            "range": "± 0.4122222622907636"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.MinMax(x: 1,234.56 cm, y: 0 km)",
            "value": 22.23501702149709,
            "unit": "ns",
            "range": "± 0.3266476320918387"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.IQuantity_Equals(x: 1,234.56 cm, y: 0 km)",
            "value": 22.50731736421585,
            "unit": "ns",
            "range": "± 0.6713710719317062"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.MinMax(x: 1,234.56 cm, y: 0 m)",
            "value": 23.03157647450765,
            "unit": "ns",
            "range": "± 1.4163425065783155"
          }
        ]
      }
    ]
  }
}