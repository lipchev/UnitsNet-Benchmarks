window.BENCHMARK_DATA = {
  "lastUpdate": 1621636761448,
  "repoUrl": "https://github.com/lipchev/UnitsNet-Benchmarks",
  "entries": {
    "UnitsNet.Benchmark.Micro.Conversion.QuantityToString-report-rescaled": [
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
        "date": 1621565523451,
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
        "date": 1621626919316,
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
          "id": "039ade9a6c5b4c6dc5adc8b6c12e531df09ee6e8",
          "message": "Manual publish N1 (short)",
          "timestamp": "2021-05-22T01:07:01+03:00",
          "tree_id": "49ff670af70e4c4de72523822f7a08fb500e8b5e",
          "url": "https://github.com/lipchev/UnitsNet-Benchmarks/commit/039ade9a6c5b4c6dc5adc8b6c12e531df09ee6e8"
        },
        "date": 1621636719787,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: \"v\", culture: )",
            "value": 429.6748964121558,
            "unit": "ns",
            "range": "± 5.977419303627079"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: \"v\", culture: )",
            "value": 444.9201727081302,
            "unit": "ns",
            "range": "± 3.0118375609923103"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: \"a\", culture: )",
            "value": 775.2641056297468,
            "unit": "ns",
            "range": "± 19.29558647283078"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: \"a\", culture: )",
            "value": 781.4049103772378,
            "unit": "ns",
            "range": "± 18.14047284224214"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 ft, format: \"a2\", culture: )",
            "value": 1058.888640632448,
            "unit": "ns",
            "range": "± 41.07400405201034"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 ft, format: \"a2\", culture: )",
            "value": 1090.658272721071,
            "unit": "ns",
            "range": "± 41.37710205240818"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: \"f2\", culture: )",
            "value": 1465.8862613616902,
            "unit": "ns",
            "range": "± 21.501735576362908"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: \"f2\", culture: )",
            "value": 1505.2764056237274,
            "unit": "ns",
            "range": "± 20.206370991525986"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: null, culture: )",
            "value": 2082.7127963088824,
            "unit": "ns",
            "range": "± 20.934603353513697"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 8.1e-04 m, format: null, culture: )",
            "value": 2115.554909762363,
            "unit": "ns",
            "range": "± 40.446048152287986"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 8.1e-04 m, format: null, culture: )",
            "value": 2134.1960955253053,
            "unit": "ns",
            "range": "± 90.05173925708145"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 ft, format: null, culture: ru-RU)",
            "value": 2157.646527002338,
            "unit": "ns",
            "range": "± 111.11508277092851"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 ft, format: null, culture: )",
            "value": 2223.2071561546572,
            "unit": "ns",
            "range": "± 15.373199432516289"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: null, culture: )",
            "value": 2242.0248269301187,
            "unit": "ns",
            "range": "± 30.45940716598356"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 8.1e-04 m, format: \"s4\", culture: )",
            "value": 2286.646120928749,
            "unit": "ns",
            "range": "± 13.17423224779031"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 8.1e-04 m, format: \"s4\", culture: )",
            "value": 2289.1882040595715,
            "unit": "ns",
            "range": "± 53.859945826836025"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 ft, format: null, culture: )",
            "value": 2416.045689304325,
            "unit": "ns",
            "range": "± 46.39111662114891"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 ft, format: null, culture: ru-RU)",
            "value": 2467.2801621268595,
            "unit": "ns",
            "range": "± 54.50695790605139"
          }
        ]
      }
    ]
  }
}