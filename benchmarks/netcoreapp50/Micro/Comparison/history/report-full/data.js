window.BENCHMARK_DATA = {
  "lastUpdate": 1621628775292,
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
        "date": 1621564978941,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals(x: 1,234.56 cm, y: 1,234.56 cm)",
            "value": 7.309681496449879,
            "unit": "ns",
            "range": "± 0.1333691593061345"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals(x: 1,234.56 m, y: 0 m)",
            "value": 7.435274062057336,
            "unit": "ns",
            "range": "± 0.2132172567671972"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals(x: 1,234.56 m, y: 1,234.56 m)",
            "value": 8.38221673454557,
            "unit": "ns",
            "range": "± 0.10886899943226078"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Relative(x: 1,234.56 cm, y: 1,234.56 cm)",
            "value": 10.119112048830305,
            "unit": "ns",
            "range": "± 0.1596778211157763"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Relative(x: 1,234.56 m, y: 0 m)",
            "value": 10.16384821671706,
            "unit": "ns",
            "range": "± 0.3039853297486627"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Absolute(x: 1,234.56 m, y: 0 m)",
            "value": 10.354930292005124,
            "unit": "ns",
            "range": "± 0.27816457210099327"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Absolute(x: 1,234.56 cm, y: 1,234.56 cm)",
            "value": 11.300130734841028,
            "unit": "ns",
            "range": "± 0.3403060343652291"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals(x: 1,234.56 cm, y: 0 m)",
            "value": 11.332122702151537,
            "unit": "ns",
            "range": "± 0.2422891352332256"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Relative(x: 1,234.56 m, y: 1,234.56 m)",
            "value": 11.389780441919962,
            "unit": "ns",
            "range": "± 0.16860253678776493"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals(x: 1,234.56 cm, y: 0 km)",
            "value": 11.57523363828659,
            "unit": "ns",
            "range": "± 0.27672170207907737"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Absolute(x: 1,234.56 m, y: 1,234.56 m)",
            "value": 11.912940974746432,
            "unit": "ns",
            "range": "± 0.20758516984920788"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.IQuantity_Equals(x: 1,234.56 cm, y: 1,234.56 cm)",
            "value": 11.975756883621216,
            "unit": "ns",
            "range": "± 0.24223792128535157"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.IQuantity_Equals(x: 1,234.56 m, y: 0 m)",
            "value": 12.922831060308399,
            "unit": "ns",
            "range": "± 0.4307190268112923"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.IQuantity_Equals(x: 1,234.56 m, y: 1,234.56 m)",
            "value": 14.167058311010662,
            "unit": "ns",
            "range": "± 0.33702029535846373"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Absolute(x: 1,234.56 cm, y: 0 m)",
            "value": 17.25971207425401,
            "unit": "ns",
            "range": "± 0.6043746534885888"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.IQuantity_Equals(x: 1,234.56 cm, y: 0 km)",
            "value": 17.305282542580052,
            "unit": "ns",
            "range": "± 0.3974909662673443"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.IQuantity_Equals(x: 1,234.56 cm, y: 0 m)",
            "value": 17.377940000909746,
            "unit": "ns",
            "range": "± 0.5678239561229501"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Relative(x: 1,234.56 cm, y: 0 m)",
            "value": 17.5038609902064,
            "unit": "ns",
            "range": "± 0.307896221467782"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.MinMax(x: 1,234.56 cm, y: 1,234.56 cm)",
            "value": 18.173737227916718,
            "unit": "ns",
            "range": "± 0.41747193211893574"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Absolute(x: 1,234.56 cm, y: 0 km)",
            "value": 18.73207315802574,
            "unit": "ns",
            "range": "± 0.34910451912927587"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Relative(x: 1,234.56 cm, y: 0 km)",
            "value": 18.73394205714717,
            "unit": "ns",
            "range": "± 0.6229341323265525"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.MinMax(x: 1,234.56 m, y: 1,234.56 m)",
            "value": 20.28945505619049,
            "unit": "ns",
            "range": "± 0.551433477669563"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.MinMax(x: 1,234.56 cm, y: 0 m)",
            "value": 21.021950989961624,
            "unit": "ns",
            "range": "± 0.4732700384958205"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.MinMax(x: 1,234.56 cm, y: 0 km)",
            "value": 21.205752425723606,
            "unit": "ns",
            "range": "± 0.8317947797707704"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.MinMax(x: 1,234.56 m, y: 0 m)",
            "value": 23.648906648159027,
            "unit": "ns",
            "range": "± 1.7698010214368192"
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
        "date": 1621628744678,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals(x: 1,234.56 cm, y: 1,234.56 cm)",
            "value": 8.687938749790192,
            "unit": "ns",
            "range": "± 0.29850689602031094"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals(x: 1,234.56 m, y: 1,234.56 m)",
            "value": 8.709168434143066,
            "unit": "ns",
            "range": "± 0.1508585849837382"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals(x: 1,234.56 m, y: 0 m)",
            "value": 9.416410823663076,
            "unit": "ns",
            "range": "± 0.19087093722433277"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Absolute(x: 1,234.56 m, y: 1,234.56 m)",
            "value": 12.146654228369394,
            "unit": "ns",
            "range": "± 0.13835294993162173"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Absolute(x: 1,234.56 m, y: 0 m)",
            "value": 12.611426909764608,
            "unit": "ns",
            "range": "± 0.05031134520452997"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Relative(x: 1,234.56 m, y: 0 m)",
            "value": 12.64123817284902,
            "unit": "ns",
            "range": "± 0.27976174160340067"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Absolute(x: 1,234.56 cm, y: 1,234.56 cm)",
            "value": 12.643817067146301,
            "unit": "ns",
            "range": "± 0.16634986671346708"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Relative(x: 1,234.56 m, y: 1,234.56 m)",
            "value": 12.657229602336884,
            "unit": "ns",
            "range": "± 0.1762100780132161"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Relative(x: 1,234.56 cm, y: 1,234.56 cm)",
            "value": 12.806228796641031,
            "unit": "ns",
            "range": "± 0.3025602494558226"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals(x: 1,234.56 cm, y: 0 km)",
            "value": 14.722801248232523,
            "unit": "ns",
            "range": "± 0.14017691318408115"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals(x: 1,234.56 cm, y: 0 m)",
            "value": 15.01954197883606,
            "unit": "ns",
            "range": "± 0.2502106459082622"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.IQuantity_Equals(x: 1,234.56 m, y: 0 m)",
            "value": 15.776052077611288,
            "unit": "ns",
            "range": "± 0.18919503827560755"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.IQuantity_Equals(x: 1,234.56 cm, y: 1,234.56 cm)",
            "value": 15.83662231763204,
            "unit": "ns",
            "range": "± 0.43637904803230376"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.IQuantity_Equals(x: 1,234.56 m, y: 1,234.56 m)",
            "value": 16.23316506544749,
            "unit": "ns",
            "range": "± 0.4870741813379541"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Absolute(x: 1,234.56 cm, y: 0 km)",
            "value": 21.2091068426768,
            "unit": "ns",
            "range": "± 0.1554461290185762"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.IQuantity_Equals(x: 1,234.56 cm, y: 0 km)",
            "value": 21.48533562819163,
            "unit": "ns",
            "range": "± 0.10149157292862224"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.IQuantity_Equals(x: 1,234.56 cm, y: 0 m)",
            "value": 21.52751286824544,
            "unit": "ns",
            "range": "± 0.24315950974881426"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Absolute(x: 1,234.56 cm, y: 0 m)",
            "value": 21.926505366961162,
            "unit": "ns",
            "range": "± 0.1555854270119124"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Relative(x: 1,234.56 cm, y: 0 m)",
            "value": 22.960656881332397,
            "unit": "ns",
            "range": "± 0.30426009199841625"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.Equals_Relative(x: 1,234.56 cm, y: 0 km)",
            "value": 24.002552032470703,
            "unit": "ns",
            "range": "± 0.23516394936681626"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.MinMax(x: 1,234.56 m, y: 1,234.56 m)",
            "value": 24.98428573211034,
            "unit": "ns",
            "range": "± 0.6332693953465256"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.MinMax(x: 1,234.56 m, y: 0 m)",
            "value": 25.283828874429066,
            "unit": "ns",
            "range": "± 0.7410853763228733"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.MinMax(x: 1,234.56 cm, y: 1,234.56 cm)",
            "value": 25.702547033627827,
            "unit": "ns",
            "range": "± 0.6933037783989695"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.MinMax(x: 1,234.56 cm, y: 0 km)",
            "value": 30.336223045984905,
            "unit": "ns",
            "range": "± 0.7802345240833704"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Comparison.MinMaxEquals.MinMax(x: 1,234.56 cm, y: 0 m)",
            "value": 30.373462041219074,
            "unit": "ns",
            "range": "± 0.22432382917721502"
          }
        ]
      }
    ]
  }
}