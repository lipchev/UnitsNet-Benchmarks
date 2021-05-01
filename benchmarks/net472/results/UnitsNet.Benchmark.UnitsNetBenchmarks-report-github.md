``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-GNQDUL : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=100  
LaunchCount=3  WarmupCount=15  

```
|                 Method |          Mean |       Error |        StdDev |        Median |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|------------:|--------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     14.741 ns |   0.0315 ns |     0.1629 ns |     14.726 ns |      - |      - |     - |         - |
|         Constructor_SI |    565.435 ns |   3.6300 ns |    18.7897 ns |    570.328 ns | 0.0296 |      - |     - |     201 B |
|             FromMethod |     36.351 ns |   0.1786 ns |     0.9274 ns |     36.364 ns |      - |      - |     - |         - |
|             ToProperty |      8.978 ns |   0.0246 ns |     0.1264 ns |      8.963 ns |      - |      - |     - |         - |
|                     As |      8.521 ns |   0.0533 ns |     0.2728 ns |      8.462 ns |      - |      - |     - |         - |
|                  As_SI |    522.655 ns |   2.1600 ns |    11.2383 ns |    521.022 ns | 0.0296 |      - |     - |     201 B |
|                 ToUnit |     21.285 ns |   0.0743 ns |     0.3794 ns |     21.231 ns |      - |      - |     - |         - |
|              ToUnit_SI |    553.201 ns |   3.6886 ns |    19.0931 ns |    546.809 ns | 0.0296 |      - |     - |     201 B |
|           ToStringTest |  2,098.501 ns |  17.2768 ns |    90.0421 ns |  2,080.221 ns | 0.1907 |      - |     - |    1244 B |
|                  Parse | 67,576.632 ns | 258.1033 ns | 1,340.5864 ns | 67,393.036 ns | 8.4229 | 0.2441 |     - |   54377 B |
|          TryParseValid | 66,912.193 ns | 441.4701 ns | 2,273.2838 ns | 67,300.500 ns | 8.4229 | 0.2441 |     - |   54353 B |
|        TryParseInvalid | 68,395.463 ns | 226.9983 ns | 1,172.9577 ns | 68,296.729 ns | 8.3008 | 0.2441 |     - |   53895 B |
|           QuantityFrom |  2,328.620 ns |  37.2576 ns |   193.1840 ns |  2,300.000 ns |      - |      - |     - |    8192 B |
|           IQuantity_As |     19.889 ns |   0.0479 ns |     0.2482 ns |     19.875 ns | 0.0038 |      - |     - |      24 B |
|        IQuantity_As_SI |    566.243 ns |   1.5387 ns |     7.8820 ns |    565.226 ns | 0.0296 |      - |     - |     201 B |
|       IQuantity_ToUnit |     32.716 ns |   0.0824 ns |     0.4265 ns |     32.676 ns | 0.0088 |      - |     - |      56 B |
| IQuantity_ToStringTest |  2,105.406 ns |  15.8184 ns |    81.7375 ns |  2,092.846 ns | 0.1907 |      - |     - |    1244 B |
