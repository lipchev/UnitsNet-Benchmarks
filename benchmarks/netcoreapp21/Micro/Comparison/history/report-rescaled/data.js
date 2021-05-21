window.BENCHMARK_DATA = {
  "lastUpdate": 1621565883326,
  "repoUrl": "https://github.com/lipchev/UnitsNet-Benchmarks",
  "entries": {
    "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals-report-rescaled": [
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
        "date": 1621565872146,
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
      }
    ]
  }
}