``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-TLYITT : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|             Method |                        Categories |    quantity | format | culture |       Mean |       Error |    StdDev |   StdErr |        Min |        Max |     Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------- |---------------------------------- |------------ |------- |-------- |-----------:|------------:|----------:|---------:|-----------:|-----------:|-----------:|-------:|------:|------:|----------:|
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      a |         |   724.8 ns |    90.88 ns |   4.98 ns |  2.88 ns |   719.2 ns |   728.6 ns |   726.6 ns | 0.1097 |     - |     - |     714 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      a |         |   785.9 ns |   196.58 ns |  10.78 ns |  6.22 ns |   773.8 ns |   794.4 ns |   789.7 ns | 0.1097 |     - |     - |     714 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      v |         |   999.0 ns |   112.28 ns |   6.15 ns |  3.55 ns |   992.2 ns | 1,004.2 ns | 1,000.7 ns | 0.0267 |     - |     - |     217 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      v |         | 1,041.8 ns |   118.38 ns |   6.49 ns |  3.75 ns | 1,034.6 ns | 1,047.1 ns | 1,043.7 ns | 0.0267 |     - |     - |     217 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |     a2 |         | 1,065.8 ns |   179.72 ns |   9.85 ns |  5.69 ns | 1,055.0 ns | 1,074.4 ns | 1,067.8 ns | 0.1144 |     - |     - |     762 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |     a2 |         | 1,077.1 ns |   589.29 ns |  32.30 ns | 18.65 ns | 1,048.6 ns | 1,112.2 ns | 1,070.7 ns | 0.1144 |     - |     - |     762 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |     f2 |         | 2,319.6 ns |   589.01 ns |  32.29 ns | 18.64 ns | 2,282.3 ns | 2,338.4 ns | 2,338.1 ns | 0.1526 |     - |     - |    1051 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |     f2 |         | 2,328.2 ns | 1,011.55 ns |  55.45 ns | 32.01 ns | 2,286.0 ns | 2,391.0 ns | 2,307.5 ns | 0.1526 |     - |     - |    1051 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,482.9 ns | 1,220.00 ns |  66.87 ns | 38.61 ns | 2,408.0 ns | 2,536.6 ns | 2,504.2 ns | 0.1907 |     - |     - |    1284 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,658.5 ns |   730.94 ns |  40.07 ns | 23.13 ns | 2,613.0 ns | 2,688.4 ns | 2,674.1 ns | 0.1869 |     - |     - |    1276 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,667.8 ns |   474.25 ns |  26.00 ns | 15.01 ns | 2,650.2 ns | 2,697.6 ns | 2,655.5 ns | 0.1869 |     - |     - |    1276 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,721.5 ns |   841.02 ns |  46.10 ns | 26.62 ns | 2,694.5 ns | 2,774.7 ns | 2,695.3 ns | 0.1907 |     - |     - |    1284 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,730.4 ns | 1,993.59 ns | 109.28 ns | 63.09 ns | 2,658.1 ns | 2,856.1 ns | 2,677.0 ns | 0.1907 |     - |     - |    1284 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,747.7 ns | 1,076.22 ns |  58.99 ns | 34.06 ns | 2,691.4 ns | 2,809.0 ns | 2,742.6 ns | 0.1869 |     - |     - |    1276 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,854.2 ns | 1,177.03 ns |  64.52 ns | 37.25 ns | 2,791.3 ns | 2,920.2 ns | 2,851.1 ns | 0.1869 |     - |     - |    1276 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,925.9 ns | 1,212.30 ns |  66.45 ns | 38.36 ns | 2,857.3 ns | 2,989.9 ns | 2,930.5 ns | 0.1907 |     - |     - |    1284 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,950.6 ns | 1,020.87 ns |  55.96 ns | 32.31 ns | 2,891.3 ns | 3,002.4 ns | 2,958.0 ns | 0.1984 |     - |     - |    1340 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 3,048.8 ns | 1,456.80 ns |  79.85 ns | 46.10 ns | 2,968.7 ns | 3,128.4 ns | 3,049.3 ns | 0.1984 |     - |     - |    1340 B |
