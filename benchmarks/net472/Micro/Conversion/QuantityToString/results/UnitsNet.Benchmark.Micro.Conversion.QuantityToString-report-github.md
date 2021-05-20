``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-XDCFQO : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|             Method |                        Categories |    quantity | format | culture |       Mean |      Error |    StdDev |   StdErr |        Min |        Max |     Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------- |---------------------------------- |------------ |------- |-------- |-----------:|-----------:|----------:|---------:|-----------:|-----------:|-----------:|-------:|------:|------:|----------:|
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      a |         |   633.3 ns |   203.7 ns |  11.17 ns |  6.45 ns |   624.6 ns |   645.9 ns |   629.4 ns | 0.1097 |     - |     - |     714 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      a |         |   753.8 ns |   413.4 ns |  22.66 ns | 13.08 ns |   730.1 ns |   775.3 ns |   756.0 ns | 0.1097 |     - |     - |     714 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      v |         |   832.3 ns |   429.6 ns |  23.55 ns | 13.59 ns |   807.5 ns |   854.4 ns |   834.8 ns | 0.0305 |     - |     - |     217 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      v |         |   854.5 ns |   212.0 ns |  11.62 ns |  6.71 ns |   841.1 ns |   861.4 ns |   861.0 ns | 0.0305 |     - |     - |     217 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |     a2 |         |   906.4 ns |   558.0 ns |  30.59 ns | 17.66 ns |   871.1 ns |   924.2 ns |   923.9 ns | 0.1173 |     - |     - |     762 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |     a2 |         | 1,023.5 ns |   282.9 ns |  15.51 ns |  8.95 ns | 1,005.6 ns | 1,033.0 ns | 1,031.9 ns | 0.1144 |     - |     - |     762 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,994.2 ns | 1,343.3 ns |  73.63 ns | 42.51 ns | 1,951.4 ns | 2,079.2 ns | 1,952.0 ns | 0.1526 |     - |     - |    1051 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,173.2 ns |   511.5 ns |  28.04 ns | 16.19 ns | 2,147.7 ns | 2,203.2 ns | 2,168.6 ns | 0.1907 |     - |     - |    1284 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |     f2 |         | 2,193.6 ns |   996.1 ns |  54.60 ns | 31.52 ns | 2,141.2 ns | 2,250.2 ns | 2,189.3 ns | 0.1526 |     - |     - |    1051 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,325.2 ns |   677.2 ns |  37.12 ns | 21.43 ns | 2,291.9 ns | 2,365.2 ns | 2,318.5 ns | 0.1869 |     - |     - |    1276 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,386.7 ns |   169.4 ns |   9.28 ns |  5.36 ns | 2,378.7 ns | 2,396.9 ns | 2,384.4 ns | 0.1907 |     - |     - |    1284 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,473.8 ns |   907.3 ns |  49.73 ns | 28.71 ns | 2,417.0 ns | 2,509.6 ns | 2,494.9 ns | 0.1869 |     - |     - |    1276 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,487.7 ns |   976.1 ns |  53.50 ns | 30.89 ns | 2,446.3 ns | 2,548.1 ns | 2,468.7 ns | 0.1869 |     - |     - |    1276 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,492.0 ns |   851.6 ns |  46.68 ns | 26.95 ns | 2,438.5 ns | 2,524.4 ns | 2,513.1 ns | 0.1907 |     - |     - |    1284 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,537.6 ns | 1,735.1 ns |  95.10 ns | 54.91 ns | 2,438.6 ns | 2,628.3 ns | 2,545.9 ns | 0.1907 |     - |     - |    1284 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,671.8 ns | 1,071.8 ns |  58.75 ns | 33.92 ns | 2,628.7 ns | 2,738.7 ns | 2,648.1 ns | 0.1984 |     - |     - |    1340 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,672.9 ns | 1,993.2 ns | 109.25 ns | 63.08 ns | 2,571.7 ns | 2,788.8 ns | 2,658.2 ns | 0.1984 |     - |     - |    1340 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,781.8 ns |   741.3 ns |  40.63 ns | 23.46 ns | 2,735.7 ns | 2,812.2 ns | 2,797.6 ns | 0.1869 |     - |     - |    1276 B |
