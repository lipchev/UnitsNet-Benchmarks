window.BENCHMARK_DATA = {
  "lastUpdate": 1621637472192,
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
        "date": 1621627475322,
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
          "id": "039ade9a6c5b4c6dc5adc8b6c12e531df09ee6e8",
          "message": "Manual publish N1 (short)",
          "timestamp": "2021-05-22T01:07:01+03:00",
          "tree_id": "49ff670af70e4c4de72523822f7a08fb500e8b5e",
          "url": "https://github.com/lipchev/UnitsNet-Benchmarks/commit/039ade9a6c5b4c6dc5adc8b6c12e531df09ee6e8"
        },
        "date": 1621637429912,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals(x: 1,234.56 m, y: 1,234.56 m)",
            "value": 9.031325190868374,
            "unit": "ns",
            "range": "± 0.045045577102123736"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals(x: 1,234.56 cm, y: 1,234.56 cm)",
            "value": 9.106670330405061,
            "unit": "ns",
            "range": "± 0.2078542492634619"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals(x: 1,234.56 m, y: 0 m)",
            "value": 9.965004806554111,
            "unit": "ns",
            "range": "± 0.2178626388713517"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Relative(x: 1,234.56 m, y: 1,234.56 m)",
            "value": 11.09942611297015,
            "unit": "ns",
            "range": "± 0.09423695660421649"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Relative(x: 1,234.56 cm, y: 1,234.56 cm)",
            "value": 11.215054193238249,
            "unit": "ns",
            "range": "± 0.43937304390511744"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Relative(x: 1,234.56 m, y: 0 m)",
            "value": 11.321998632071981,
            "unit": "ns",
            "range": "± 0.1452593471940312"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Absolute(x: 1,234.56 m, y: 1,234.56 m)",
            "value": 12.386626814312688,
            "unit": "ns",
            "range": "± 0.3687451160982503"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Absolute(x: 1,234.56 m, y: 0 m)",
            "value": 12.420602363443106,
            "unit": "ns",
            "range": "± 0.30148397475300637"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Absolute(x: 1,234.56 cm, y: 1,234.56 cm)",
            "value": 12.560589052209963,
            "unit": "ns",
            "range": "± 0.09828577638510638"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.IQuantity_Equals(x: 1,234.56 cm, y: 1,234.56 cm)",
            "value": 13.853440058834193,
            "unit": "ns",
            "range": "± 0.1350634343311408"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.IQuantity_Equals(x: 1,234.56 m, y: 1,234.56 m)",
            "value": 14.014326096959001,
            "unit": "ns",
            "range": "± 0.309599178442261"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals(x: 1,234.56 cm, y: 0 km)",
            "value": 15.155102574798422,
            "unit": "ns",
            "range": "± 0.43233326928114607"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals(x: 1,234.56 cm, y: 0 m)",
            "value": 15.474798276480875,
            "unit": "ns",
            "range": "± 0.19775473023932313"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.IQuantity_Equals(x: 1,234.56 m, y: 0 m)",
            "value": 15.578289826816784,
            "unit": "ns",
            "range": "± 0.4784750082201739"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.MinMax(x: 1,234.56 m, y: 1,234.56 m)",
            "value": 18.033271706565877,
            "unit": "ns",
            "range": "± 0.32059374692611375"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.MinMax(x: 1,234.56 cm, y: 1,234.56 cm)",
            "value": 18.22897057832769,
            "unit": "ns",
            "range": "± 0.17006593795350924"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.MinMax(x: 1,234.56 m, y: 0 m)",
            "value": 18.26770636290562,
            "unit": "ns",
            "range": "± 0.2479354215124525"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Relative(x: 1,234.56 cm, y: 0 km)",
            "value": 18.384538039651947,
            "unit": "ns",
            "range": "± 0.2559228022036262"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Relative(x: 1,234.56 cm, y: 0 m)",
            "value": 18.849157223368643,
            "unit": "ns",
            "range": "± 0.1849271153106339"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Absolute(x: 1,234.56 cm, y: 0 km)",
            "value": 19.955943590607962,
            "unit": "ns",
            "range": "± 0.2215769292458625"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.IQuantity_Equals(x: 1,234.56 cm, y: 0 m)",
            "value": 20.348771088435775,
            "unit": "ns",
            "range": "± 0.12145555515527236"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Absolute(x: 1,234.56 cm, y: 0 m)",
            "value": 20.55301572271593,
            "unit": "ns",
            "range": "± 0.47561200932666553"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.IQuantity_Equals(x: 1,234.56 cm, y: 0 km)",
            "value": 20.569032429271864,
            "unit": "ns",
            "range": "± 0.3689714135089216"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.MinMax(x: 1,234.56 cm, y: 0 km)",
            "value": 22.27092239993681,
            "unit": "ns",
            "range": "± 0.4328816819145799"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.MinMax(x: 1,234.56 cm, y: 0 m)",
            "value": 22.587689881075843,
            "unit": "ns",
            "range": "± 0.6926303130861354"
          }
        ]
      }
    ]
  }
}