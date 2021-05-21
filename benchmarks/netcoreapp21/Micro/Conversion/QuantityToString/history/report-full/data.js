window.BENCHMARK_DATA = {
  "lastUpdate": 1621626892194,
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
        "date": 1621565489719,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: \"v\", culture: )",
            "value": 483.9691850874159,
            "unit": "ns",
            "range": "± 10.203967909427261"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: \"v\", culture: )",
            "value": 490.34481915560633,
            "unit": "ns",
            "range": "± 11.66311957839281"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: \"a\", culture: )",
            "value": 821.0543155670166,
            "unit": "ns",
            "range": "± 16.877446682585617"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: \"a\", culture: )",
            "value": 835.530880335215,
            "unit": "ns",
            "range": "± 28.401646296098516"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 ft, format: \"a2\", culture: )",
            "value": 1151.291936635971,
            "unit": "ns",
            "range": "± 35.16352528007587"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 ft, format: \"a2\", culture: )",
            "value": 1200.132315499442,
            "unit": "ns",
            "range": "± 19.629732667965335"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: \"f2\", culture: )",
            "value": 1640.8745002746582,
            "unit": "ns",
            "range": "± 30.5774262153752"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: \"f2\", culture: )",
            "value": 1652.8941594637358,
            "unit": "ns",
            "range": "± 44.12751009399472"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: null, culture: )",
            "value": 2243.0681705474854,
            "unit": "ns",
            "range": "± 56.29813457619585"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 8.1e-04 m, format: null, culture: )",
            "value": 2261.1135482788086,
            "unit": "ns",
            "range": "± 47.38966312146462"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 8.1e-04 m, format: null, culture: )",
            "value": 2272.2610361435836,
            "unit": "ns",
            "range": "± 45.16650224136736"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 ft, format: null, culture: ru-RU)",
            "value": 2338.496815074574,
            "unit": "ns",
            "range": "± 73.90779708868003"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 ft, format: null, culture: ru-RU)",
            "value": 2360.2591473123302,
            "unit": "ns",
            "range": "± 58.54115677475465"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 ft, format: null, culture: )",
            "value": 2473.8089667426216,
            "unit": "ns",
            "range": "± 50.025445226182235"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 ft, format: null, culture: )",
            "value": 2474.1024218107523,
            "unit": "ns",
            "range": "± 53.862490183337435"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 8.1e-04 m, format: \"s4\", culture: )",
            "value": 2514.4103622436523,
            "unit": "ns",
            "range": "± 72.85725407674683"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: null, culture: )",
            "value": 2519.344395228795,
            "unit": "ns",
            "range": "± 81.92684656622595"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 8.1e-04 m, format: \"s4\", culture: )",
            "value": 2695.6075917119565,
            "unit": "ns",
            "range": "± 64.81248938680763"
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
        "date": 1621626861569,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: \"v\", culture: )",
            "value": 421.98331356048584,
            "unit": "ns",
            "range": "± 11.29262649778911"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: \"v\", culture: )",
            "value": 434.47833855946857,
            "unit": "ns",
            "range": "± 4.7641545820828135"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: \"a\", culture: )",
            "value": 775.9510199228922,
            "unit": "ns",
            "range": "± 9.58563086142054"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: \"a\", culture: )",
            "value": 789.832623799642,
            "unit": "ns",
            "range": "± 20.165901889296403"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 ft, format: \"a2\", culture: )",
            "value": 962.9711786905924,
            "unit": "ns",
            "range": "± 12.884397713554467"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 ft, format: \"a2\", culture: )",
            "value": 1187.3197237650554,
            "unit": "ns",
            "range": "± 44.18307340217416"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: \"f2\", culture: )",
            "value": 1457.745361328125,
            "unit": "ns",
            "range": "± 28.952376589321013"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: \"f2\", culture: )",
            "value": 1570.8664894104004,
            "unit": "ns",
            "range": "± 65.21264898658289"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 ft, format: null, culture: ru-RU)",
            "value": 2066.3173039754233,
            "unit": "ns",
            "range": "± 76.66978170314778"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: null, culture: )",
            "value": 2087.4282201131186,
            "unit": "ns",
            "range": "± 36.533994095194366"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 8.1e-04 m, format: \"s4\", culture: )",
            "value": 2173.3851750691733,
            "unit": "ns",
            "range": "± 80.87817903398398"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 ft, format: null, culture: ru-RU)",
            "value": 2223.8917032877603,
            "unit": "ns",
            "range": "± 67.45063188393927"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 8.1e-04 m, format: null, culture: )",
            "value": 2281.572469075521,
            "unit": "ns",
            "range": "± 124.73976370407269"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 ft, format: null, culture: )",
            "value": 2342.70076751709,
            "unit": "ns",
            "range": "± 50.92636459983874"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 8.1e-04 m, format: \"s4\", culture: )",
            "value": 2374.414316813151,
            "unit": "ns",
            "range": "± 24.816930898949963"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 8.1e-04 m, format: null, culture: )",
            "value": 2455.967903137207,
            "unit": "ns",
            "range": "± 65.47402898500354"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: null, culture: )",
            "value": 2479.345385233561,
            "unit": "ns",
            "range": "± 42.98219613035978"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 ft, format: null, culture: )",
            "value": 2592.332331339518,
            "unit": "ns",
            "range": "± 69.65465791033881"
          }
        ]
      }
    ]
  }
}