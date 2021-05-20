``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-ITZZQM : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|             Method |                        Categories |    quantity | format | culture |       Mean |       Error |   StdDev |   StdErr |        Min |        Max |     Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------- |---------------------------------- |------------ |------- |-------- |-----------:|------------:|---------:|---------:|-----------:|-----------:|-----------:|-------:|------:|------:|----------:|
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      v |         |   457.5 ns |    97.62 ns |  5.35 ns |  3.09 ns |   451.6 ns |   462.0 ns |   458.9 ns | 0.0286 |     - |     - |     192 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      v |         |   461.6 ns |   123.28 ns |  6.76 ns |  3.90 ns |   454.5 ns |   468.0 ns |   462.3 ns | 0.0286 |     - |     - |     192 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      a |         |   819.0 ns |   516.36 ns | 28.30 ns | 16.34 ns |   793.1 ns |   849.2 ns |   814.6 ns | 0.0992 |     - |     - |     648 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      a |         |   832.4 ns |   123.33 ns |  6.76 ns |  3.90 ns |   827.0 ns |   840.0 ns |   830.3 ns | 0.0992 |     - |     - |     648 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |     a2 |         | 1,126.5 ns |    99.23 ns |  5.44 ns |  3.14 ns | 1,120.7 ns | 1,131.5 ns | 1,127.3 ns | 0.1068 |     - |     - |     712 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |     a2 |         | 1,156.7 ns |   816.95 ns | 44.78 ns | 25.85 ns | 1,112.1 ns | 1,201.7 ns | 1,156.4 ns | 0.1068 |     - |     - |     712 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,545.7 ns |   477.80 ns | 26.19 ns | 15.12 ns | 1,524.3 ns | 1,574.9 ns | 1,537.8 ns | 0.1144 |     - |     - |     768 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,593.5 ns |   618.18 ns | 33.88 ns | 19.56 ns | 1,573.2 ns | 1,632.6 ns | 1,574.6 ns | 0.1144 |     - |     - |     768 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,179.0 ns |   656.50 ns | 35.98 ns | 20.78 ns | 2,137.4 ns | 2,200.5 ns | 2,199.0 ns | 0.1411 |     - |     - |     968 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,201.0 ns | 1,114.13 ns | 61.07 ns | 35.26 ns | 2,155.1 ns | 2,270.3 ns | 2,177.6 ns | 0.1411 |     - |     - |     976 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,210.5 ns | 1,080.73 ns | 59.24 ns | 34.20 ns | 2,150.1 ns | 2,268.5 ns | 2,213.0 ns | 0.1411 |     - |     - |     976 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,224.4 ns |   268.77 ns | 14.73 ns |  8.51 ns | 2,207.4 ns | 2,233.5 ns | 2,232.2 ns | 0.1411 |     - |     - |     976 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,250.6 ns |   710.48 ns | 38.94 ns | 22.48 ns | 2,206.2 ns | 2,279.0 ns | 2,266.6 ns | 0.1411 |     - |     - |     976 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,299.5 ns | 1,243.43 ns | 68.16 ns | 39.35 ns | 2,241.1 ns | 2,374.4 ns | 2,282.8 ns | 0.1411 |     - |     - |     968 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,325.3 ns |   859.75 ns | 47.13 ns | 27.21 ns | 2,295.9 ns | 2,379.6 ns | 2,300.4 ns | 0.1411 |     - |     - |     984 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,339.6 ns |   482.52 ns | 26.45 ns | 15.27 ns | 2,312.2 ns | 2,365.0 ns | 2,341.7 ns | 0.1411 |     - |     - |     984 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,395.5 ns |   400.59 ns | 21.96 ns | 12.68 ns | 2,375.6 ns | 2,419.1 ns | 2,392.0 ns | 0.1488 |     - |     - |    1024 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,544.7 ns |   306.37 ns | 16.79 ns |  9.70 ns | 2,534.8 ns | 2,564.1 ns | 2,535.2 ns | 0.1488 |     - |     - |    1024 B |
