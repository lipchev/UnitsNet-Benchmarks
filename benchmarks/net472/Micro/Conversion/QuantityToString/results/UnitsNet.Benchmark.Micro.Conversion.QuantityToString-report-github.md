``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-WPTZZR : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|             Method |                        Categories |    quantity | format | culture |       Mean |      Error |   StdDev |   StdErr |        Min |        Max |     Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------- |---------------------------------- |------------ |------- |-------- |-----------:|-----------:|---------:|---------:|-----------:|-----------:|-----------:|-------:|------:|------:|----------:|
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      a |         |   679.9 ns |   164.1 ns |  8.99 ns |  5.19 ns |   669.6 ns |   686.0 ns |   684.1 ns | 0.1097 |     - |     - |     714 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      a |         |   708.6 ns |   428.8 ns | 23.51 ns | 13.57 ns |   681.5 ns |   723.9 ns |   720.4 ns | 0.1097 |     - |     - |     714 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      v |         |   962.7 ns |   646.0 ns | 35.41 ns | 20.44 ns |   924.9 ns |   995.1 ns |   968.0 ns | 0.0267 |     - |     - |     217 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      v |         |   986.7 ns |   399.0 ns | 21.87 ns | 12.63 ns |   961.7 ns | 1,002.2 ns |   996.2 ns | 0.0267 |     - |     - |     217 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |     a2 |         |   989.3 ns |   390.2 ns | 21.39 ns | 12.35 ns |   973.8 ns | 1,013.7 ns |   980.4 ns | 0.1144 |     - |     - |     762 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |     a2 |         | 1,027.1 ns |   843.8 ns | 46.25 ns | 26.70 ns |   988.5 ns | 1,078.4 ns | 1,014.5 ns | 0.1144 |     - |     - |     762 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |     f2 |         | 2,130.5 ns |   750.1 ns | 41.11 ns | 23.74 ns | 2,092.1 ns | 2,173.9 ns | 2,125.5 ns | 0.1526 |     - |     - |    1051 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |     f2 |         | 2,305.7 ns | 1,451.3 ns | 79.55 ns | 45.93 ns | 2,214.9 ns | 2,363.5 ns | 2,338.6 ns | 0.1526 |     - |     - |    1051 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,418.1 ns |   822.0 ns | 45.06 ns | 26.01 ns | 2,383.6 ns | 2,469.1 ns | 2,401.6 ns | 0.1869 |     - |     - |    1276 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,462.3 ns | 1,270.7 ns | 69.65 ns | 40.21 ns | 2,382.4 ns | 2,510.8 ns | 2,493.6 ns | 0.1869 |     - |     - |    1276 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,470.1 ns | 1,045.5 ns | 57.31 ns | 33.09 ns | 2,413.3 ns | 2,527.9 ns | 2,469.1 ns | 0.1907 |     - |     - |    1284 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,486.9 ns | 1,049.1 ns | 57.51 ns | 33.20 ns | 2,423.8 ns | 2,536.5 ns | 2,500.3 ns | 0.1907 |     - |     - |    1284 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,593.4 ns |   769.9 ns | 42.20 ns | 24.37 ns | 2,561.0 ns | 2,641.1 ns | 2,578.1 ns | 0.1907 |     - |     - |    1284 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,623.0 ns |   550.3 ns | 30.16 ns | 17.41 ns | 2,599.6 ns | 2,657.0 ns | 2,612.3 ns | 0.1907 |     - |     - |    1284 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,626.8 ns |   417.3 ns | 22.88 ns | 13.21 ns | 2,601.2 ns | 2,645.2 ns | 2,634.1 ns | 0.1869 |     - |     - |    1276 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,663.2 ns | 1,161.7 ns | 63.68 ns | 36.76 ns | 2,612.6 ns | 2,734.7 ns | 2,642.2 ns | 0.1869 |     - |     - |    1276 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,781.0 ns |   921.4 ns | 50.51 ns | 29.16 ns | 2,740.2 ns | 2,837.5 ns | 2,765.3 ns | 0.1984 |     - |     - |    1340 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,867.7 ns | 1,278.4 ns | 70.07 ns | 40.46 ns | 2,790.3 ns | 2,926.8 ns | 2,886.0 ns | 0.1984 |     - |     - |    1340 B |
