window.BENCHMARK_DATA = {
  "lastUpdate": 1621627122829,
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
        "date": 1621627091621,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromUnit.Constructor",
            "value": 15.787462664933926,
            "unit": "ns",
            "range": "± 0.22978364136681842"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromUnit.Constructor_FromUnit",
            "value": 35.61053384658466,
            "unit": "ns",
            "range": "± 0.5600960089627379"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromUnit.QuantityFromQuantityInfo",
            "value": 65.98125913607998,
            "unit": "ns",
            "range": "± 0.72942519209135"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromUnit.QuantityFrom",
            "value": 106.61616039078673,
            "unit": "ns",
            "range": "± 1.998336332302398"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromUnit.QuantityFrom_Generic",
            "value": 112.57910244706748,
            "unit": "ns",
            "range": "± 2.153215216503611"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromUnit.QuantityFrom_RandomUnit",
            "value": 149.76892254120568,
            "unit": "ns",
            "range": "± 4.10559523377695"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Construction.QuantityFromUnit.Constructor_UnitSystem",
            "value": 645.8438975964027,
            "unit": "ns",
            "range": "± 9.70253155598833"
          }
        ]
      }
    ]
  }
}