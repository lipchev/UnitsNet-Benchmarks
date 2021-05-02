``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-CZPEFL : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=100  
LaunchCount=3  WarmupCount=15  

```
|                 Method |          Mean |       Error |        StdDev |        Median |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|------------:|--------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     13.665 ns |   0.0922 ns |     0.4724 ns |     13.517 ns |      - |      - |     - |         - |
|         Constructor_SI |    513.240 ns |   2.1433 ns |    10.7445 ns |    511.213 ns | 0.0296 |      - |     - |     201 B |
|             FromMethod |     33.349 ns |   0.2154 ns |     1.0995 ns |     33.177 ns |      - |      - |     - |         - |
|             ToProperty |      8.354 ns |   0.0754 ns |     0.3856 ns |      8.270 ns |      - |      - |     - |         - |
|                     As |      8.248 ns |   0.0541 ns |     0.2770 ns |      8.192 ns |      - |      - |     - |         - |
|                  As_SI |    504.118 ns |   2.2626 ns |    11.3427 ns |    502.238 ns | 0.0296 |      - |     - |     201 B |
|                 ToUnit |     20.641 ns |   0.0927 ns |     0.4692 ns |     20.536 ns |      - |      - |     - |         - |
|              ToUnit_SI |    525.623 ns |   1.8597 ns |     9.3741 ns |    524.314 ns | 0.0296 |      - |     - |     201 B |
|           ToStringTest |  1,895.496 ns |  10.0140 ns |    49.8304 ns |  1,886.161 ns | 0.1945 |      - |     - |    1244 B |
|                  Parse | 57,185.102 ns | 219.4920 ns | 1,112.3855 ns | 56,925.900 ns | 8.5449 | 0.3052 |     - |   54376 B |
|          TryParseValid | 57,304.856 ns | 198.4270 ns | 1,005.6280 ns | 57,202.460 ns | 8.5449 | 0.3052 |     - |   54352 B |
|        TryParseInvalid | 61,817.408 ns | 288.7377 ns | 1,463.3230 ns | 61,591.324 ns | 8.3008 | 0.2441 |     - |   53895 B |
|           QuantityFrom |  2,583.333 ns |  26.9725 ns |   137.6761 ns |  2,600.000 ns |      - |      - |     - |    8192 B |
|           IQuantity_As |     18.375 ns |   0.1286 ns |     0.6495 ns |     18.242 ns | 0.0038 |      - |     - |      24 B |
|        IQuantity_As_SI |    506.024 ns |   2.0141 ns |    10.1522 ns |    504.448 ns | 0.0296 |      - |     - |     201 B |
|       IQuantity_ToUnit |     29.034 ns |   0.1315 ns |     0.6630 ns |     28.922 ns | 0.0088 |      - |     - |      56 B |
| IQuantity_ToStringTest |  1,923.817 ns |  15.9323 ns |    80.0160 ns |  1,908.463 ns | 0.1945 |      - |     - |    1244 B |
