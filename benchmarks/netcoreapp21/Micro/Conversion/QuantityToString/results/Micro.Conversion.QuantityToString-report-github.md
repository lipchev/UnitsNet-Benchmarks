``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-QNGGPJ : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|             Method |                        Categories |    quantity | format | culture |       Mean |    Error |   StdDev |   StdErr |        Min |        Max |     Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------- |---------------------------------- |------------ |------- |-------- |-----------:|---------:|---------:|---------:|-----------:|-----------:|-----------:|-------:|------:|------:|----------:|
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      v |         |   450.9 ns |  6.34 ns |  5.62 ns |  1.50 ns |   444.2 ns |   463.5 ns |   448.6 ns | 0.0286 |     - |     - |     192 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      v |         |   467.9 ns |  6.37 ns |  5.65 ns |  1.51 ns |   456.3 ns |   478.6 ns |   467.8 ns | 0.0296 |     - |     - |     192 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      a |         |   812.2 ns | 16.23 ns | 15.94 ns |  3.99 ns |   787.8 ns |   844.9 ns |   811.5 ns | 0.1011 |     - |     - |     648 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      a |         |   819.9 ns | 12.61 ns | 11.18 ns |  2.99 ns |   801.0 ns |   837.3 ns |   819.1 ns | 0.1011 |     - |     - |     648 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |     a2 |         | 1,107.1 ns | 16.31 ns | 14.45 ns |  3.86 ns | 1,089.1 ns | 1,131.5 ns | 1,105.1 ns | 0.1087 |     - |     - |     712 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |     a2 |         | 1,115.9 ns | 21.10 ns | 19.73 ns |  5.10 ns | 1,093.3 ns | 1,153.0 ns | 1,112.0 ns | 0.1087 |     - |     - |     712 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,582.7 ns | 30.47 ns | 28.50 ns |  7.36 ns | 1,546.6 ns | 1,641.8 ns | 1,573.9 ns | 0.1183 |     - |     - |     768 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,608.8 ns | 20.22 ns | 18.91 ns |  4.88 ns | 1,583.0 ns | 1,646.8 ns | 1,606.1 ns | 0.1183 |     - |     - |     768 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,173.4 ns | 27.97 ns | 24.80 ns |  6.63 ns | 2,134.7 ns | 2,211.5 ns | 2,175.7 ns | 0.1488 |     - |     - |     976 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,179.5 ns | 35.28 ns | 31.27 ns |  8.36 ns | 2,134.3 ns | 2,225.0 ns | 2,172.6 ns | 0.1488 |     - |     - |     976 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,183.7 ns | 36.86 ns | 32.68 ns |  8.73 ns | 2,144.8 ns | 2,255.4 ns | 2,174.9 ns | 0.1488 |     - |     - |     976 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,198.2 ns | 40.36 ns | 37.76 ns |  9.75 ns | 2,150.7 ns | 2,280.1 ns | 2,186.0 ns | 0.1488 |     - |     - |     976 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,230.2 ns | 36.72 ns | 34.35 ns |  8.87 ns | 2,168.8 ns | 2,304.2 ns | 2,228.1 ns | 0.1450 |     - |     - |     968 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,259.2 ns | 33.16 ns | 29.40 ns |  7.86 ns | 2,216.9 ns | 2,312.4 ns | 2,259.5 ns | 0.1450 |     - |     - |     968 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,332.0 ns | 29.41 ns | 26.08 ns |  6.97 ns | 2,297.2 ns | 2,397.5 ns | 2,334.6 ns | 0.1488 |     - |     - |     984 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,374.5 ns | 23.27 ns | 19.43 ns |  5.39 ns | 2,329.2 ns | 2,402.7 ns | 2,374.9 ns | 0.1488 |     - |     - |     984 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,430.3 ns | 47.62 ns | 46.77 ns | 11.69 ns | 2,354.4 ns | 2,494.2 ns | 2,414.6 ns | 0.1564 |     - |     - |    1024 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,500.1 ns | 47.91 ns | 44.81 ns | 11.57 ns | 2,428.2 ns | 2,566.2 ns | 2,506.2 ns | 0.1564 |     - |     - |    1024 B |
