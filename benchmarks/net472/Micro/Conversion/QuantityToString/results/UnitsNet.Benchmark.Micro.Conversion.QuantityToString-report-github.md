``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-JDZEUK : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|             Method |                        Categories |    quantity | format | culture |       Mean |    Error |   StdDev |   StdErr |        Min |        Max |     Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------- |---------------------------------- |------------ |------- |-------- |-----------:|---------:|---------:|---------:|-----------:|-----------:|-----------:|-------:|------:|------:|----------:|
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      a |         |   657.4 ns | 12.74 ns | 11.91 ns |  3.08 ns |   638.4 ns |   679.2 ns |   657.6 ns | 0.1116 |     - |     - |     714 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      a |         |   662.6 ns | 11.63 ns |  9.71 ns |  2.69 ns |   647.7 ns |   682.0 ns |   662.9 ns | 0.1116 |     - |     - |     714 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      v |         |   911.4 ns | 17.20 ns | 15.25 ns |  4.07 ns |   889.9 ns |   940.1 ns |   906.8 ns | 0.0324 |     - |     - |     217 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      v |         |   912.8 ns | 15.81 ns | 14.01 ns |  3.75 ns |   894.3 ns |   942.3 ns |   911.1 ns | 0.0305 |     - |     - |     217 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |     a2 |         |   939.6 ns | 18.66 ns | 22.21 ns |  4.85 ns |   900.4 ns |   984.8 ns |   938.6 ns | 0.1183 |     - |     - |     762 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |     a2 |         |   946.3 ns | 15.39 ns | 14.40 ns |  3.72 ns |   921.4 ns |   974.8 ns |   951.3 ns | 0.1192 |     - |     - |     762 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |     f2 |         | 2,049.1 ns | 40.29 ns | 53.79 ns | 10.76 ns | 1,964.7 ns | 2,155.5 ns | 2,043.9 ns | 0.1602 |     - |     - |    1051 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |     f2 |         | 2,052.9 ns | 39.88 ns | 59.69 ns | 10.90 ns | 1,951.7 ns | 2,182.8 ns | 2,050.0 ns | 0.1602 |     - |     - |    1051 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,354.0 ns | 45.15 ns | 50.18 ns | 11.51 ns | 2,276.8 ns | 2,432.5 ns | 2,351.9 ns | 0.1945 |     - |     - |    1276 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,356.3 ns | 45.67 ns | 40.48 ns | 10.82 ns | 2,302.8 ns | 2,429.9 ns | 2,354.9 ns | 0.1945 |     - |     - |    1284 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,440.2 ns | 47.76 ns | 62.10 ns | 12.68 ns | 2,323.1 ns | 2,551.0 ns | 2,454.9 ns | 0.1945 |     - |     - |    1284 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,450.4 ns | 46.54 ns | 45.71 ns | 11.43 ns | 2,389.1 ns | 2,551.6 ns | 2,447.5 ns | 0.1945 |     - |     - |    1284 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,478.7 ns | 49.24 ns | 58.61 ns | 12.79 ns | 2,395.2 ns | 2,611.1 ns | 2,466.0 ns | 0.1945 |     - |     - |    1276 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,478.8 ns | 48.56 ns | 66.47 ns | 13.04 ns | 2,338.3 ns | 2,574.8 ns | 2,492.4 ns | 0.1945 |     - |     - |    1276 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,564.4 ns | 46.84 ns | 53.94 ns | 12.06 ns | 2,486.0 ns | 2,681.9 ns | 2,552.1 ns | 0.1945 |     - |     - |    1276 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,590.1 ns | 42.33 ns | 37.52 ns | 10.03 ns | 2,521.2 ns | 2,647.6 ns | 2,583.7 ns | 0.1945 |     - |     - |    1284 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,649.9 ns | 50.85 ns | 54.41 ns | 12.82 ns | 2,579.9 ns | 2,761.3 ns | 2,630.4 ns | 0.2060 |     - |     - |    1340 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,825.5 ns | 39.87 ns | 33.29 ns |  9.23 ns | 2,764.2 ns | 2,889.6 ns | 2,829.9 ns | 0.2060 |     - |     - |    1340 B |
