``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-OLHVVZ : .NET Core 2.1.27 (CoreCLR 4.6.29916.01, CoreFX 4.6.29916.03), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                 Method |          Mean |         Error |        StdDev |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     12.457 ns |     0.1468 ns |     0.1373 ns |      - |      - |     - |         - |
|         Constructor_SI |    635.544 ns |    12.5601 ns |    13.4392 ns | 0.0286 |      - |     - |     192 B |
|             FromMethod |     32.740 ns |     0.6665 ns |     0.7408 ns |      - |      - |     - |         - |
|             ToProperty |      8.907 ns |     0.1205 ns |     0.1127 ns |      - |      - |     - |         - |
|                     As |      8.838 ns |     0.1221 ns |     0.1082 ns |      - |      - |     - |         - |
|                  As_SI |    590.645 ns |    11.2812 ns |    10.5524 ns | 0.0286 |      - |     - |     192 B |
|                 ToUnit |     20.023 ns |     0.2976 ns |     0.2784 ns |      - |      - |     - |         - |
|              ToUnit_SI |    618.890 ns |     9.4345 ns |     8.8250 ns | 0.0286 |      - |     - |     192 B |
|           ToStringTest |  2,625.373 ns |    37.9868 ns |    33.6743 ns | 0.1450 |      - |     - |     952 B |
|                  Parse | 76,872.926 ns | 1,364.9720 ns | 1,139.8134 ns | 6.8359 | 0.2441 |     - |   44816 B |
|          TryParseValid | 76,616.418 ns |   864.1433 ns |   721.5988 ns | 6.8359 | 0.2441 |     - |   44792 B |
|        TryParseInvalid | 83,376.720 ns | 1,640.5384 ns | 2,299.8057 ns | 6.8359 | 0.2441 |     - |   44392 B |
|           QuantityFrom |  2,519.048 ns |    49.9650 ns |   114.8030 ns |      - |      - |     - |      56 B |
|           IQuantity_As |     21.251 ns |     0.4224 ns |     0.3744 ns | 0.0038 |      - |     - |      24 B |
|        IQuantity_As_SI |    582.789 ns |     6.5584 ns |     6.1347 ns | 0.0286 |      - |     - |     192 B |
|       IQuantity_ToUnit |     32.938 ns |     0.7452 ns |     0.8283 ns | 0.0088 |      - |     - |      56 B |
| IQuantity_ToStringTest |  2,797.488 ns |    42.1859 ns |    39.4607 ns | 0.1450 |      - |     - |     952 B |
