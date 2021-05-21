window.BENCHMARK_DATA = {
  "lastUpdate": 1621565364709,
  "repoUrl": "https://github.com/lipchev/UnitsNet-Benchmarks",
  "entries": {
    "UnitsNet.Benchmark.Micro.Conversion.QuantityToValue-report-full": [
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
        "date": 1621565353400,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToValue.BaseQuantity_As",
            "value": 12.64441294699722,
            "unit": "ns",
            "range": "± 0.3096514137791255"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToValue.DerivedQuantity_As",
            "value": 13.10280070294998,
            "unit": "ns",
            "range": "± 0.5149696862265761"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToValue.IBaseQuantity_As",
            "value": 17.67963635830981,
            "unit": "ns",
            "range": "± 0.37439710297114864"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToValue.IDerivedQuantity_As",
            "value": 17.907309783268005,
            "unit": "ns",
            "range": "± 0.44624749677084863"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToValue.IRandomDerivedQuantity_AsBase",
            "value": 86.54848906998333,
            "unit": "ns",
            "range": "± 1.945420441711389"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToValue.IRandomBaseQuantity_As",
            "value": 89.64734838564249,
            "unit": "ns",
            "range": "± 2.25317986626463"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToValue.IRandomDerivedQuantity_As",
            "value": 117.43607030219684,
            "unit": "ns",
            "range": "± 2.126409263830764"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToValue.BaseQuantity_AsUnitSystem",
            "value": 581.8333975276591,
            "unit": "ns",
            "range": "± 7.9573115789035604"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToValue.DerivedQuantity_AsUnitSystem",
            "value": 654.3284269805068,
            "unit": "ns",
            "range": "± 11.138792339183402"
          }
        ]
      }
    ]
  }
}