``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-JTVBTC : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|             Method |                        Categories |    quantity | format | culture |       Mean |    Error |   StdDev |   StdErr |     Median |        Min |        Max |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------- |---------------------------------- |------------ |------- |-------- |-----------:|---------:|---------:|---------:|-----------:|-----------:|-----------:|-------:|------:|------:|----------:|
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      v |         |   512.7 ns | 10.28 ns | 19.05 ns |  2.90 ns |   503.9 ns |   488.7 ns |   550.6 ns | 0.0267 |     - |     - |     192 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      v |         |   529.8 ns | 10.49 ns | 19.44 ns |  2.96 ns |   538.5 ns |   498.4 ns |   566.0 ns | 0.0267 |     - |     - |     192 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      a |         |   906.4 ns | 18.10 ns | 28.19 ns |  4.98 ns |   897.5 ns |   869.0 ns |   985.1 ns | 0.0992 |     - |     - |     648 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      a |         |   969.9 ns | 12.52 ns | 11.10 ns |  2.97 ns |   966.9 ns |   949.8 ns |   988.8 ns | 0.0954 |     - |     - |     648 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |     a2 |         | 1,317.7 ns | 26.07 ns | 24.38 ns |  6.30 ns | 1,323.4 ns | 1,272.4 ns | 1,354.5 ns | 0.1068 |     - |     - |     712 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |     a2 |         | 1,363.4 ns | 14.31 ns | 13.39 ns |  3.46 ns | 1,361.4 ns | 1,348.7 ns | 1,388.8 ns | 0.1068 |     - |     - |     712 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,819.8 ns | 26.63 ns | 23.60 ns |  6.31 ns | 1,825.8 ns | 1,780.5 ns | 1,870.6 ns | 0.1144 |     - |     - |     768 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,837.7 ns | 35.01 ns | 34.38 ns |  8.60 ns | 1,835.0 ns | 1,789.2 ns | 1,889.9 ns | 0.1068 |     - |     - |     768 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,363.2 ns | 46.45 ns | 49.70 ns | 11.71 ns | 2,362.0 ns | 2,290.1 ns | 2,486.6 ns | 0.1411 |     - |     - |     976 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,394.1 ns | 40.55 ns | 31.66 ns |  9.14 ns | 2,396.5 ns | 2,320.4 ns | 2,442.1 ns | 0.1411 |     - |     - |     976 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,476.6 ns | 49.42 ns | 48.54 ns | 12.13 ns | 2,459.0 ns | 2,412.5 ns | 2,572.3 ns | 0.1488 |     - |     - |    1024 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,491.6 ns | 42.50 ns | 45.48 ns | 10.72 ns | 2,480.6 ns | 2,417.1 ns | 2,572.7 ns | 0.1488 |     - |     - |    1024 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,494.0 ns | 44.57 ns | 54.73 ns | 11.67 ns | 2,479.2 ns | 2,431.8 ns | 2,639.4 ns | 0.1411 |     - |     - |     976 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,502.5 ns | 40.49 ns | 37.87 ns |  9.78 ns | 2,508.2 ns | 2,414.4 ns | 2,555.9 ns | 0.1411 |     - |     - |     984 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,533.7 ns | 50.32 ns | 63.64 ns | 13.27 ns | 2,521.4 ns | 2,431.4 ns | 2,680.9 ns | 0.1411 |     - |     - |     976 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,555.0 ns | 30.27 ns | 26.84 ns |  7.17 ns | 2,550.1 ns | 2,523.6 ns | 2,610.2 ns | 0.1411 |     - |     - |     984 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,557.3 ns | 43.02 ns | 38.14 ns | 10.19 ns | 2,546.2 ns | 2,504.2 ns | 2,639.4 ns | 0.1411 |     - |     - |     968 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,599.3 ns | 38.82 ns | 34.41 ns |  9.20 ns | 2,590.3 ns | 2,561.8 ns | 2,675.0 ns | 0.1411 |     - |     - |     968 B |
