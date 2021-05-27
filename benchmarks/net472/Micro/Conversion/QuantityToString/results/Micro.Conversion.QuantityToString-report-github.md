``` ini

BenchmarkDotNet=v0.13.0, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET SDK=5.0.203
  [Host]     : .NET 5.0.6 (5.0.621.22011), X64 RyuJIT
  Job-ETZUZA : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET Framework 4.7.2  Toolchain=net472  

```
|             Method |                        Categories |    quantity | format | culture |       Mean |    Error |    StdDev |   StdErr |        Min |        Max |     Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------- |---------------------------------- |------------ |------- |-------- |-----------:|---------:|----------:|---------:|-----------:|-----------:|-----------:|-------:|------:|------:|----------:|
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      a |         |   594.8 ns |  9.05 ns |   7.55 ns |  2.09 ns |   584.2 ns |   608.9 ns |   595.9 ns | 0.1116 |     - |     - |     714 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      a |         |   638.1 ns |  5.77 ns |   5.40 ns |  1.39 ns |   630.2 ns |   649.8 ns |   637.0 ns | 0.1116 |     - |     - |     714 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      v |         |   814.6 ns |  9.28 ns |   8.68 ns |  2.24 ns |   801.7 ns |   831.5 ns |   812.9 ns | 0.0324 |     - |     - |     217 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      v |         |   830.6 ns | 11.08 ns |  10.36 ns |  2.68 ns |   817.9 ns |   847.8 ns |   828.5 ns | 0.0324 |     - |     - |     217 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |     a2 |         |   853.1 ns | 13.11 ns |  12.26 ns |  3.17 ns |   827.3 ns |   877.8 ns |   851.6 ns | 0.1192 |     - |     - |     762 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |     a2 |         | 1,004.2 ns | 19.92 ns |  25.20 ns |  5.25 ns |   964.1 ns | 1,067.1 ns |   997.2 ns | 0.1183 |     - |     - |     762 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,829.2 ns | 17.16 ns |  16.05 ns |  4.14 ns | 1,810.0 ns | 1,866.0 ns | 1,826.8 ns | 0.1640 |     - |     - |   1,051 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,889.4 ns | 22.34 ns |  18.65 ns |  5.17 ns | 1,856.2 ns | 1,926.5 ns | 1,888.8 ns | 0.1640 |     - |     - |   1,051 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,191.8 ns | 27.87 ns |  24.71 ns |  6.60 ns | 2,150.2 ns | 2,232.3 ns | 2,193.0 ns | 0.1945 |     - |     - |   1,284 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,201.5 ns | 23.72 ns |  21.03 ns |  5.62 ns | 2,161.8 ns | 2,226.6 ns | 2,204.5 ns | 0.1945 |     - |     - |   1,284 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,255.8 ns | 39.39 ns |  36.84 ns |  9.51 ns | 2,220.5 ns | 2,348.3 ns | 2,242.0 ns | 0.1945 |     - |     - |   1,276 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,272.9 ns | 44.07 ns |  47.15 ns | 11.11 ns | 2,217.3 ns | 2,362.3 ns | 2,270.0 ns | 0.1945 |     - |     - |   1,276 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,324.6 ns | 30.61 ns |  27.13 ns |  7.25 ns | 2,285.6 ns | 2,378.6 ns | 2,321.7 ns | 0.1945 |     - |     - |   1,284 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,387.4 ns | 42.38 ns |  39.64 ns | 10.24 ns | 2,350.9 ns | 2,491.1 ns | 2,373.7 ns | 0.1945 |     - |     - |   1,284 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,532.4 ns | 49.05 ns |  48.17 ns | 12.04 ns | 2,481.3 ns | 2,627.1 ns | 2,519.1 ns | 0.2060 |     - |     - |   1,340 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,558.1 ns | 51.20 ns |  92.33 ns | 14.42 ns | 2,347.7 ns | 2,756.6 ns | 2,562.7 ns | 0.1945 |     - |     - |   1,276 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,654.9 ns | 27.68 ns |  24.54 ns |  6.56 ns | 2,624.7 ns | 2,698.9 ns | 2,646.6 ns | 0.1945 |     - |     - |   1,276 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,694.2 ns | 53.69 ns | 135.67 ns | 15.67 ns | 2,508.5 ns | 3,040.7 ns | 2,664.1 ns | 0.2060 |     - |     - |   1,340 B |
