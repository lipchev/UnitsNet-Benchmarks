``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-FUIBAJ : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                 Method |          Mean |         Error |        StdDev |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     14.451 ns |      5.095 ns |     0.2793 ns |      - |      - |     - |         - |
|         Constructor_SI |    556.948 ns |      8.873 ns |     0.4864 ns | 0.0296 |      - |     - |     201 B |
|             FromMethod |     61.239 ns |     13.989 ns |     0.7668 ns |      - |      - |     - |         - |
|             ToProperty |      9.096 ns |      3.892 ns |     0.2134 ns |      - |      - |     - |         - |
|                     As |      8.810 ns |      1.705 ns |     0.0934 ns |      - |      - |     - |         - |
|                  As_SI |    554.575 ns |     91.954 ns |     5.0403 ns | 0.0296 |      - |     - |     201 B |
|                 ToUnit |     22.605 ns |      3.818 ns |     0.2093 ns |      - |      - |     - |         - |
|              ToUnit_SI |    592.920 ns |    325.702 ns |    17.8528 ns | 0.0296 |      - |     - |     201 B |
|           ToStringTest |  1,987.815 ns |    685.858 ns |    37.5942 ns | 0.1907 |      - |     - |    1244 B |
|                  Parse | 61,113.806 ns | 11,624.663 ns |   637.1870 ns | 8.4229 | 0.2441 |     - |   54377 B |
|          TryParseValid | 61,298.031 ns | 18,377.283 ns | 1,007.3209 ns | 8.4229 | 0.2441 |     - |   54353 B |
|        TryParseInvalid | 65,354.557 ns | 23,040.172 ns | 1,262.9096 ns | 8.3008 | 0.2441 |     - |   53895 B |
|           QuantityFrom |  2,366.667 ns |  2,786.775 ns |   152.7525 ns |      - |      - |     - |    8192 B |
|           IQuantity_As |     19.547 ns |      8.720 ns |     0.4780 ns | 0.0038 |      - |     - |      24 B |
|        IQuantity_As_SI |    543.007 ns |     81.443 ns |     4.4641 ns | 0.0296 |      - |     - |     201 B |
|       IQuantity_ToUnit |     31.780 ns |      8.650 ns |     0.4741 ns | 0.0088 |      - |     - |      56 B |
| IQuantity_ToStringTest |  2,020.004 ns |    839.170 ns |    45.9977 ns | 0.1907 |      - |     - |    1244 B |
