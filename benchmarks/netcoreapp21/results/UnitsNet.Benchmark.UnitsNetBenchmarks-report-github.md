``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-WZHLMP : .NET Core 2.1.27 (CoreCLR 4.6.29916.01, CoreFX 4.6.29916.03), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                 Method |          Mean |         Error |        StdDev |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     12.084 ns |      8.703 ns |     0.4771 ns |      - |      - |     - |         - |
|         Constructor_SI |    553.965 ns |    144.135 ns |     7.9006 ns | 0.0286 |      - |     - |     192 B |
|             FromMethod |     31.306 ns |      9.030 ns |     0.4950 ns |      - |      - |     - |         - |
|             ToProperty |      9.344 ns |      3.387 ns |     0.1856 ns |      - |      - |     - |         - |
|                     As |      9.327 ns |     14.673 ns |     0.8043 ns |      - |      - |     - |         - |
|                  As_SI |    562.297 ns |    385.541 ns |    21.1328 ns | 0.0286 |      - |     - |     192 B |
|                 ToUnit |     20.534 ns |      7.690 ns |     0.4215 ns |      - |      - |     - |         - |
|              ToUnit_SI |    564.877 ns |     87.201 ns |     4.7798 ns | 0.0286 |      - |     - |     192 B |
|           ToStringTest |  2,198.264 ns |    927.968 ns |    50.8650 ns | 0.1450 |      - |     - |     952 B |
|                  Parse | 76,803.377 ns | 38,763.759 ns | 2,124.7724 ns | 6.8359 | 0.2441 |     - |   44816 B |
|          TryParseValid | 78,384.648 ns | 30,897.504 ns | 1,693.5964 ns | 6.8359 | 0.2441 |     - |   44792 B |
|        TryParseInvalid | 78,045.882 ns | 22,106.900 ns | 1,211.7538 ns | 6.8359 | 0.2441 |     - |   44392 B |
|           QuantityFrom |  2,133.333 ns |  4,213.207 ns |   230.9401 ns |      - |      - |     - |      56 B |
|           IQuantity_As |     19.779 ns |      4.497 ns |     0.2465 ns | 0.0038 |      - |     - |      24 B |
|        IQuantity_As_SI |    543.954 ns |    137.099 ns |     7.5149 ns | 0.0286 |      - |     - |     192 B |
|       IQuantity_ToUnit |     30.531 ns |      4.549 ns |     0.2493 ns | 0.0088 |      - |     - |      56 B |
| IQuantity_ToStringTest |  2,234.464 ns |    466.270 ns |    25.5578 ns | 0.1450 |      - |     - |     952 B |
