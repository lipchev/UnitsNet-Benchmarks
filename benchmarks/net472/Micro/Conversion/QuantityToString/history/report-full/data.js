window.BENCHMARK_DATA = {
  "lastUpdate": 1621625566108,
  "repoUrl": "https://github.com/lipchev/UnitsNet-Benchmarks",
  "entries": {
    "UnitsNet.Benchmark.Micro.Conversion.QuantityToString-report-full": [
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
        "date": 1621566334456,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: \"a\", culture: )",
            "value": 639.8628683651195,
            "unit": "ns",
            "range": "± 30.72156249098057"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: \"a\", culture: )",
            "value": 706.7232745034354,
            "unit": "ns",
            "range": "± 10.351466149744084"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: \"v\", culture: )",
            "value": 838.2554610570272,
            "unit": "ns",
            "range": "± 9.981147115028964"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: \"v\", culture: )",
            "value": 839.5748166476978,
            "unit": "ns",
            "range": "± 16.934472295168778"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 ft, format: \"a2\", culture: )",
            "value": 863.5917118617466,
            "unit": "ns",
            "range": "± 10.126805676126496"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 ft, format: \"a2\", culture: )",
            "value": 866.029196519118,
            "unit": "ns",
            "range": "± 10.487135343749815"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: \"f2\", culture: )",
            "value": 1913.022522304369,
            "unit": "ns",
            "range": "± 48.480173175821086"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: \"f2\", culture: )",
            "value": 1943.6123711722237,
            "unit": "ns",
            "range": "± 30.145224642463788"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 ft, format: null, culture: ru-RU)",
            "value": 2182.918472290039,
            "unit": "ns",
            "range": "± 48.806966890225425"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: null, culture: )",
            "value": 2249.4009494781494,
            "unit": "ns",
            "range": "± 43.24862667383593"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 ft, format: null, culture: ru-RU)",
            "value": 2255.7159597223454,
            "unit": "ns",
            "range": "± 51.68984970161733"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 ft, format: null, culture: )",
            "value": 2362.7954595229203,
            "unit": "ns",
            "range": "± 46.953834255436426"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 8.1e-04 m, format: null, culture: )",
            "value": 2363.4782791137695,
            "unit": "ns",
            "range": "± 24.09096487548939"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 ft, format: null, culture: )",
            "value": 2370.9033693586075,
            "unit": "ns",
            "range": "± 20.41187317846046"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: null, culture: )",
            "value": 2507.6314770445533,
            "unit": "ns",
            "range": "± 146.09282363836144"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 8.1e-04 m, format: null, culture: )",
            "value": 2571.5317096350327,
            "unit": "ns",
            "range": "± 106.94435430816209"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 8.1e-04 m, format: \"s4\", culture: )",
            "value": 2593.242655667392,
            "unit": "ns",
            "range": "± 109.03958901283507"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 8.1e-04 m, format: \"s4\", culture: )",
            "value": 2654.8108673095703,
            "unit": "ns",
            "range": "± 60.14741786581278"
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
        "date": 1621625536267,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: \"a\", culture: )",
            "value": 679.9062728881836,
            "unit": "ns",
            "range": "± 8.99478732733436"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: \"a\", culture: )",
            "value": 708.5903326670328,
            "unit": "ns",
            "range": "± 23.50511226813164"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: \"v\", culture: )",
            "value": 962.6813570658366,
            "unit": "ns",
            "range": "± 35.41099081814937"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: \"v\", culture: )",
            "value": 986.7003122965494,
            "unit": "ns",
            "range": "± 21.872176341522785"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 ft, format: \"a2\", culture: )",
            "value": 989.2985661824545,
            "unit": "ns",
            "range": "± 21.38868264506611"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 ft, format: \"a2\", culture: )",
            "value": 1027.112642923991,
            "unit": "ns",
            "range": "± 46.25335062429887"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: \"f2\", culture: )",
            "value": 2130.4848988850913,
            "unit": "ns",
            "range": "± 41.11388230807052"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: \"f2\", culture: )",
            "value": 2305.6667963663735,
            "unit": "ns",
            "range": "± 79.54987984772569"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: null, culture: )",
            "value": 2418.0862426757812,
            "unit": "ns",
            "range": "± 45.05804186503106"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: null, culture: )",
            "value": 2462.2575759887695,
            "unit": "ns",
            "range": "± 69.65136218882765"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 ft, format: null, culture: ru-RU)",
            "value": 2470.062510172526,
            "unit": "ns",
            "range": "± 57.30752616653366"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 ft, format: null, culture: ru-RU)",
            "value": 2486.857541402181,
            "unit": "ns",
            "range": "± 57.50624443755581"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 8.1e-04 m, format: null, culture: )",
            "value": 2593.3924992879233,
            "unit": "ns",
            "range": "± 42.20168083563217"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 8.1e-04 m, format: null, culture: )",
            "value": 2622.9583740234375,
            "unit": "ns",
            "range": "± 30.162294807224107"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 ft, format: null, culture: )",
            "value": 2626.8285751342773,
            "unit": "ns",
            "range": "± 22.87583556241191"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 ft, format: null, culture: )",
            "value": 2663.1638209025064,
            "unit": "ns",
            "range": "± 63.67561419986097"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 8.1e-04 m, format: \"s4\", culture: )",
            "value": 2780.9885025024414,
            "unit": "ns",
            "range": "± 50.50575085225097"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 8.1e-04 m, format: \"s4\", culture: )",
            "value": 2867.689832051595,
            "unit": "ns",
            "range": "± 70.07363432284522"
          }
        ]
      }
    ]
  }
}