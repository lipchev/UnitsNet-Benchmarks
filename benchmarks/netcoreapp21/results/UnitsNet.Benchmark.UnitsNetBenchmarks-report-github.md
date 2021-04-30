``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-FPNBLD : .NET Core 2.1.27 (CoreCLR 4.6.29916.01, CoreFX 4.6.29916.03), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationTime=500.0000 ms  

```
|                 Method |          Mean |         Error |        StdDev |        Median |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     11.492 ns |     0.2761 ns |     0.7077 ns |     11.448 ns |      - |      - |     - |         - |
|         Constructor_SI |    580.449 ns |    11.5698 ns |    31.6722 ns |    580.846 ns | 0.0259 |      - |     - |     192 B |
|             FromMethod |     33.363 ns |     0.6986 ns |     0.8046 ns |     33.450 ns |      - |      - |     - |         - |
|             ToProperty |      8.705 ns |     0.2198 ns |     0.4286 ns |      8.627 ns |      - |      - |     - |         - |
|                     As |      8.455 ns |     0.2191 ns |     0.5772 ns |      8.403 ns |      - |      - |     - |         - |
|                  As_SI |    575.678 ns |    11.5497 ns |    30.8284 ns |    574.010 ns | 0.0264 |      - |     - |     192 B |
|                 ToUnit |     19.034 ns |     0.4222 ns |     1.0358 ns |     18.928 ns |      - |      - |     - |         - |
|              ToUnit_SI |    663.387 ns |    13.2432 ns |    13.5997 ns |    664.542 ns | 0.0259 |      - |     - |     192 B |
|           ToStringTest |  2,203.454 ns |    55.7447 ns |   164.3645 ns |  2,209.238 ns | 0.1327 |      - |     - |     952 B |
|                  Parse | 74,299.317 ns | 1,546.3210 ns | 4,510.6911 ns | 74,189.586 ns | 6.5312 | 0.1451 |     - |   44816 B |
|          TryParseValid | 80,997.469 ns | 1,989.7942 ns | 5,866.9532 ns | 82,132.052 ns | 6.5174 | 0.1671 |     - |   44792 B |
|        TryParseInvalid | 82,501.754 ns | 1,843.2068 ns | 5,434.7368 ns | 81,923.548 ns | 6.3291 | 0.1862 |     - |   44392 B |
|           QuantityFrom |  1,958.163 ns |    58.2279 ns |   169.8535 ns |  1,900.000 ns |      - |      - |     - |      56 B |
|           IQuantity_As |     19.534 ns |     0.4312 ns |     0.9554 ns |     19.471 ns | 0.0037 |      - |     - |      24 B |
|        IQuantity_As_SI |    582.327 ns |    12.5173 ns |    36.9075 ns |    581.617 ns | 0.0261 |      - |     - |     192 B |
|       IQuantity_ToUnit |     35.990 ns |     0.7388 ns |     0.6549 ns |     36.147 ns | 0.0086 |      - |     - |      56 B |
| IQuantity_ToStringTest |  2,280.540 ns |    49.4280 ns |   145.7397 ns |  2,269.174 ns | 0.1343 |      - |     - |     952 B |
