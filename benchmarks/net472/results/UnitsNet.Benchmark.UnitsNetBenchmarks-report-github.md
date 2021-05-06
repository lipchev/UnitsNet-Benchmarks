``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-CSBODF : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                 Method |          Mean |         Error |        StdDev |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     15.288 ns |     0.1912 ns |     0.1695 ns |      - |      - |     - |         - |
|         Constructor_SI |    612.221 ns |    12.2667 ns |    19.8084 ns | 0.0286 |      - |     - |     201 B |
|             FromMethod |     37.449 ns |     0.5257 ns |     0.4918 ns |      - |      - |     - |         - |
|             ToProperty |      9.504 ns |     0.1684 ns |     0.1575 ns |      - |      - |     - |         - |
|                     As |      9.735 ns |     0.2333 ns |     0.2182 ns |      - |      - |     - |         - |
|                  As_SI |    602.978 ns |     7.3310 ns |     6.8574 ns | 0.0286 |      - |     - |     201 B |
|                 ToUnit |     23.534 ns |     0.4971 ns |     0.4650 ns |      - |      - |     - |         - |
|              ToUnit_SI |    621.549 ns |    10.7442 ns |    10.0501 ns | 0.0286 |      - |     - |     201 B |
|           ToStringTest |  2,115.288 ns |    33.9748 ns |    31.7801 ns | 0.1831 |      - |     - |    1244 B |
|                  Parse | 65,093.686 ns | 1,186.3141 ns | 1,109.6790 ns | 8.1787 | 0.2441 |     - |   54377 B |
|          TryParseValid | 65,418.960 ns | 1,155.0631 ns | 1,080.4468 ns | 8.1787 | 0.2441 |     - |   54353 B |
|        TryParseInvalid | 72,480.282 ns | 1,000.9496 ns |   936.2889 ns | 8.1787 | 0.2441 |     - |   53895 B |
|           QuantityFrom |  2,452.688 ns |    78.4089 ns |   222.4329 ns |      - |      - |     - |    8192 B |
|           IQuantity_As |     20.650 ns |     0.2356 ns |     0.1968 ns | 0.0037 |      - |     - |      24 B |
|        IQuantity_As_SI |    607.818 ns |    11.7030 ns |    13.0079 ns | 0.0286 |      - |     - |     201 B |
|       IQuantity_ToUnit |     35.315 ns |     0.5926 ns |     0.5543 ns | 0.0087 |      - |     - |      56 B |
| IQuantity_ToStringTest |  2,179.645 ns |    41.5150 ns |    46.1438 ns | 0.1831 |      - |     - |    1244 B |
