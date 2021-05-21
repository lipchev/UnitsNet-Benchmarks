window.BENCHMARK_DATA = {
  "lastUpdate": 1621565713492,
  "repoUrl": "https://github.com/lipchev/UnitsNet-Benchmarks",
  "entries": {
    "UnitsNet.Benchmark.Micro.Construction.QuantityFromUnit-report-full": [
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
        "date": 1621565703648,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromUnit.Constructor",
            "value": 15.06332622169612,
            "unit": "ns",
            "range": "± 0.42419460409143145"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromUnit.Constructor_FromUnit",
            "value": 33.3958069836025,
            "unit": "ns",
            "range": "± 0.9464997814247602"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromUnit.QuantityFromQuantityInfo",
            "value": 61.75799979603765,
            "unit": "ns",
            "range": "± 1.3069494390865182"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromUnit.QuantityFrom_Generic",
            "value": 98.43935969782503,
            "unit": "ns",
            "range": "± 2.0566727051688822"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromUnit.QuantityFrom",
            "value": 99.67118460410659,
            "unit": "ns",
            "range": "± 2.2821614669635166"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromUnit.QuantityFrom_RandomUnit",
            "value": 138.74136830626725,
            "unit": "ns",
            "range": "± 2.937914151366947"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromUnit.Constructor_UnitSystem",
            "value": 575.7502504228595,
            "unit": "ns",
            "range": "± 16.460459972489122"
          }
        ]
      }
    ]
  }
}