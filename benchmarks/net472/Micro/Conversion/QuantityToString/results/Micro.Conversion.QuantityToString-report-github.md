``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-OXLBEK : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|             Method |                        Categories |    quantity | format | culture |       Mean |    Error |   StdDev |   StdErr |        Min |        Max |     Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------- |---------------------------------- |------------ |------- |-------- |-----------:|---------:|---------:|---------:|-----------:|-----------:|-----------:|-------:|------:|------:|----------:|
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      a |         |   746.4 ns | 14.93 ns | 19.93 ns |  3.99 ns |   721.5 ns |   788.1 ns |   738.5 ns | 0.1116 |     - |     - |     714 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      a |         |   763.1 ns | 12.35 ns | 11.55 ns |  2.98 ns |   743.5 ns |   780.8 ns |   763.3 ns | 0.1116 |     - |     - |     714 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      v |         | 1,008.8 ns | 10.84 ns |  9.61 ns |  2.57 ns |   992.8 ns | 1,027.7 ns | 1,008.0 ns | 0.0305 |     - |     - |     217 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      v |         | 1,018.1 ns | 14.45 ns | 13.52 ns |  3.49 ns |   982.5 ns | 1,039.5 ns | 1,018.4 ns | 0.0305 |     - |     - |     217 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |     a2 |         | 1,024.6 ns | 16.84 ns | 14.92 ns |  3.99 ns | 1,003.7 ns | 1,056.9 ns | 1,021.8 ns | 0.1163 |     - |     - |     762 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |     a2 |         | 1,031.6 ns | 19.82 ns | 18.54 ns |  4.79 ns | 1,007.8 ns | 1,072.4 ns | 1,032.6 ns | 0.1163 |     - |     - |     762 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |     f2 |         | 2,257.8 ns | 35.60 ns | 33.30 ns |  8.60 ns | 2,202.7 ns | 2,327.3 ns | 2,248.0 ns | 0.1564 |     - |     - |    1051 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |     f2 |         | 2,295.0 ns | 18.74 ns | 16.61 ns |  4.44 ns | 2,259.8 ns | 2,330.4 ns | 2,294.9 ns | 0.1564 |     - |     - |    1051 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,588.4 ns | 43.11 ns | 40.33 ns | 10.41 ns | 2,509.2 ns | 2,644.4 ns | 2,595.9 ns | 0.1945 |     - |     - |    1284 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,603.4 ns | 37.36 ns | 34.95 ns |  9.02 ns | 2,544.2 ns | 2,665.8 ns | 2,602.9 ns | 0.1945 |     - |     - |    1284 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,675.3 ns | 43.34 ns | 38.42 ns | 10.27 ns | 2,588.9 ns | 2,727.2 ns | 2,676.8 ns | 0.1945 |     - |     - |    1276 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,676.0 ns | 40.53 ns | 37.91 ns |  9.79 ns | 2,617.5 ns | 2,746.2 ns | 2,670.2 ns | 0.1945 |     - |     - |    1276 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,759.1 ns | 46.18 ns | 43.20 ns | 11.15 ns | 2,685.6 ns | 2,837.4 ns | 2,743.1 ns | 0.1945 |     - |     - |    1284 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,796.5 ns | 50.71 ns | 44.95 ns | 12.01 ns | 2,723.0 ns | 2,895.6 ns | 2,786.6 ns | 0.1945 |     - |     - |    1276 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,807.6 ns | 54.64 ns | 53.66 ns | 13.41 ns | 2,688.2 ns | 2,875.7 ns | 2,812.9 ns | 0.1945 |     - |     - |    1284 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,817.7 ns | 46.78 ns | 43.76 ns | 11.30 ns | 2,731.3 ns | 2,876.8 ns | 2,814.8 ns | 0.1945 |     - |     - |    1276 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 3,043.1 ns | 56.44 ns | 55.44 ns | 13.86 ns | 2,966.9 ns | 3,175.7 ns | 3,042.1 ns | 0.2022 |     - |     - |    1340 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 3,085.5 ns | 54.01 ns | 50.52 ns | 13.04 ns | 2,968.4 ns | 3,154.9 ns | 3,090.8 ns | 0.2022 |     - |     - |    1340 B |
