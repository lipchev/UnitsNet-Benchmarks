window.BENCHMARK_DATA = {
  "lastUpdate": 1621638351332,
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
        "date": 1621564608269,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: \"v\", culture: )",
            "value": 370.9696426987648,
            "unit": "ns",
            "range": "± 11.68937984355522"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: \"v\", culture: )",
            "value": 371.6580227801674,
            "unit": "ns",
            "range": "± 8.212106634946757"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: \"a\", culture: )",
            "value": 497.8279330513694,
            "unit": "ns",
            "range": "± 17.80208648617101"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: \"a\", culture: )",
            "value": 508.80411346003694,
            "unit": "ns",
            "range": "± 21.30064066675374"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 ft, format: \"a2\", culture: )",
            "value": 623.6892414093018,
            "unit": "ns",
            "range": "± 18.547518731470312"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 ft, format: \"a2\", culture: )",
            "value": 639.6336592160739,
            "unit": "ns",
            "range": "± 22.151330032648264"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: \"f2\", culture: )",
            "value": 1045.7963090193898,
            "unit": "ns",
            "range": "± 22.427172854205175"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: \"f2\", culture: )",
            "value": 1192.8605675697327,
            "unit": "ns",
            "range": "± 22.215402470171178"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 8.1e-04 m, format: null, culture: )",
            "value": 1237.5930922372002,
            "unit": "ns",
            "range": "± 40.463178935540135"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 8.1e-04 m, format: null, culture: )",
            "value": 1259.630478752984,
            "unit": "ns",
            "range": "± 35.393583107663375"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 ft, format: null, culture: ru-RU)",
            "value": 1326.180191040039,
            "unit": "ns",
            "range": "± 50.56649412050256"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: null, culture: )",
            "value": 1341.924672377737,
            "unit": "ns",
            "range": "± 46.407579091702154"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 ft, format: null, culture: ru-RU)",
            "value": 1349.9937670571464,
            "unit": "ns",
            "range": "± 38.59444004720631"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: null, culture: )",
            "value": 1369.4675869411892,
            "unit": "ns",
            "range": "± 37.253972247597154"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 8.1e-04 m, format: \"s4\", culture: )",
            "value": 1377.7982527209867,
            "unit": "ns",
            "range": "± 42.235861282171015"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 8.1e-04 m, format: \"s4\", culture: )",
            "value": 1427.5268363952637,
            "unit": "ns",
            "range": "± 46.34325853374728"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 ft, format: null, culture: )",
            "value": 1429.764461517334,
            "unit": "ns",
            "range": "± 52.42711804939545"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 ft, format: null, culture: )",
            "value": 1528.7817192077637,
            "unit": "ns",
            "range": "± 67.97780023979448"
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
        "date": 1621628196032,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: \"v\", culture: )",
            "value": 453.11641693115234,
            "unit": "ns",
            "range": "± 4.77489620999749"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: \"v\", culture: )",
            "value": 471.40124638875324,
            "unit": "ns",
            "range": "± 7.098850087468015"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: \"a\", culture: )",
            "value": 623.5064506530762,
            "unit": "ns",
            "range": "± 6.5378621837773965"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: \"a\", culture: )",
            "value": 643.3246612548828,
            "unit": "ns",
            "range": "± 11.676561218400343"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 ft, format: \"a2\", culture: )",
            "value": 788.7215614318848,
            "unit": "ns",
            "range": "± 18.680159479700503"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 ft, format: \"a2\", culture: )",
            "value": 803.9183934529623,
            "unit": "ns",
            "range": "± 16.77180016462849"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: \"f2\", culture: )",
            "value": 1314.9023056030273,
            "unit": "ns",
            "range": "± 30.095179979243493"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: \"f2\", culture: )",
            "value": 1330.7091395060222,
            "unit": "ns",
            "range": "± 31.711939869262654"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 8.1e-04 m, format: null, culture: )",
            "value": 1590.0757471720378,
            "unit": "ns",
            "range": "± 35.725692906791515"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 8.1e-04 m, format: null, culture: )",
            "value": 1594.772211710612,
            "unit": "ns",
            "range": "± 27.708726595842993"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: null, culture: )",
            "value": 1649.3174235026042,
            "unit": "ns",
            "range": "± 12.323189089252942"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 ft, format: null, culture: ru-RU)",
            "value": 1674.2299397786458,
            "unit": "ns",
            "range": "± 28.24023464366439"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: null, culture: )",
            "value": 1675.5114237467449,
            "unit": "ns",
            "range": "± 35.69618215400098"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 ft, format: null, culture: ru-RU)",
            "value": 1684.8457336425781,
            "unit": "ns",
            "range": "± 15.165380498927897"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 8.1e-04 m, format: \"s4\", culture: )",
            "value": 1709.898567199707,
            "unit": "ns",
            "range": "± 7.975609980110576"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 8.1e-04 m, format: \"s4\", culture: )",
            "value": 1713.582928975423,
            "unit": "ns",
            "range": "± 15.770176222927944"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 ft, format: null, culture: )",
            "value": 1723.3765284220378,
            "unit": "ns",
            "range": "± 9.340907663612443"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 ft, format: null, culture: )",
            "value": 1791.1242802937825,
            "unit": "ns",
            "range": "± 13.132497134926407"
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
        "date": 1621638309687,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: \"v\", culture: )",
            "value": 415.62050183614093,
            "unit": "ns",
            "range": "± 1.238062987735103"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: \"v\", culture: )",
            "value": 416.67622725168866,
            "unit": "ns",
            "range": "± 4.629611542284864"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: \"a\", culture: )",
            "value": 555.9172948201498,
            "unit": "ns",
            "range": "± 21.860243274727313"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: \"a\", culture: )",
            "value": 605.5566469828287,
            "unit": "ns",
            "range": "± 32.27011646746432"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 ft, format: \"a2\", culture: )",
            "value": 752.6738325754801,
            "unit": "ns",
            "range": "± 23.766593462544474"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 ft, format: \"a2\", culture: )",
            "value": 794.0602620442709,
            "unit": "ns",
            "range": "± 18.36922627923891"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: \"f2\", culture: )",
            "value": 1254.1301091512044,
            "unit": "ns",
            "range": "± 19.41375692163871"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: \"f2\", culture: )",
            "value": 1272.1005121866863,
            "unit": "ns",
            "range": "± 34.89339933727057"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 8.1e-04 m, format: null, culture: )",
            "value": 1466.899045308431,
            "unit": "ns",
            "range": "± 48.43854288541942"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 ft, format: null, culture: ru-RU)",
            "value": 1512.9630088806152,
            "unit": "ns",
            "range": "± 41.72088508086743"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 8.1e-04 m, format: null, culture: )",
            "value": 1544.871997833252,
            "unit": "ns",
            "range": "± 48.0298749708795"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 ft, format: null, culture: )",
            "value": 1574.8317400614421,
            "unit": "ns",
            "range": "± 32.937310877886866"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 1,234.56 m, format: null, culture: )",
            "value": 1588.837496439616,
            "unit": "ns",
            "range": "± 36.655039207297115"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 ft, format: null, culture: ru-RU)",
            "value": 1589.8902575174968,
            "unit": "ns",
            "range": "± 62.23516336510876"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 m, format: null, culture: )",
            "value": 1657.7945709228516,
            "unit": "ns",
            "range": "± 38.904021330973094"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 1,234.56 ft, format: null, culture: )",
            "value": 1664.8340861002605,
            "unit": "ns",
            "range": "± 45.961414179288134"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.IQuantity_ToString(quantity: 8.1e-04 m, format: \"s4\", culture: )",
            "value": 1688.270632425944,
            "unit": "ns",
            "range": "± 33.760614763787814"
          },
          {
            "name": "UnitsNet.Benchmark.Micro.Conversion.QuantityToString.ToString_(quantity: 8.1e-04 m, format: \"s4\", culture: )",
            "value": 1690.2821858723958,
            "unit": "ns",
            "range": "± 70.9275669490783"
          }
        ]
      }
    ]
  }
}