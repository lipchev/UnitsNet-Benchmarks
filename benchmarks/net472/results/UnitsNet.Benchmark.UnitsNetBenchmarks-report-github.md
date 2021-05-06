``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-ATCIPS : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                 Method |          Mean |         Error |        StdDev |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     15.263 ns |     0.1795 ns |     0.1679 ns |      - |      - |     - |         - |
|         Constructor_SI |    612.256 ns |     9.8355 ns |     9.2002 ns | 0.0286 |      - |     - |     201 B |
|             FromMethod |     37.286 ns |     0.7816 ns |     0.6929 ns |      - |      - |     - |         - |
|             ToProperty |      9.519 ns |     0.1189 ns |     0.1054 ns |      - |      - |     - |         - |
|                     As |      9.439 ns |     0.2299 ns |     0.3069 ns |      - |      - |     - |         - |
|                  As_SI |    580.346 ns |    11.6238 ns |    19.7380 ns | 0.0286 |      - |     - |     201 B |
|                 ToUnit |     23.119 ns |     0.5082 ns |     0.5853 ns |      - |      - |     - |         - |
|              ToUnit_SI |    627.089 ns |    12.3607 ns |    16.5012 ns | 0.0286 |      - |     - |     201 B |
|           ToStringTest |  2,083.741 ns |    41.1932 ns |    86.8904 ns | 0.1831 |      - |     - |    1244 B |
|                  Parse | 65,468.512 ns | 1,297.2995 ns | 2,404.6277 ns | 8.1787 | 0.2441 |     - |   54377 B |
|          TryParseValid | 63,797.243 ns | 1,272.5138 ns | 2,421.0897 ns | 8.1787 | 0.2441 |     - |   54353 B |
|        TryParseInvalid | 70,172.251 ns | 1,402.7078 ns | 3,595.6762 ns | 8.1787 | 0.2441 |     - |   53895 B |
|           QuantityFrom |  2,421.538 ns |    48.1244 ns |   112.4893 ns |      - |      - |     - |    8192 B |
|           IQuantity_As |     21.789 ns |     0.4690 ns |     1.1326 ns | 0.0037 |      - |     - |      24 B |
|        IQuantity_As_SI |    587.035 ns |    11.7731 ns |    25.0894 ns | 0.0286 |      - |     - |     201 B |
|       IQuantity_ToUnit |     35.682 ns |     0.7702 ns |     1.6580 ns | 0.0087 |      - |     - |      56 B |
| IQuantity_ToStringTest |  2,304.873 ns |    45.8048 ns |    94.5948 ns | 0.1831 |      - |     - |    1244 B |
