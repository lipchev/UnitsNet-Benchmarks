``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-QMQECU : .NET Core 2.1.27 (CoreCLR 4.6.29916.01, CoreFX 4.6.29916.03), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                 Method |          Mean |         Error |        StdDev |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     12.605 ns |     0.2813 ns |     0.2889 ns |      - |      - |     - |         - |
|         Constructor_SI |    591.177 ns |     9.0840 ns |     8.0527 ns | 0.0286 |      - |     - |     192 B |
|             FromMethod |     29.026 ns |     0.3960 ns |     0.3704 ns |      - |      - |     - |         - |
|             ToProperty |      9.416 ns |     0.1599 ns |     0.1495 ns |      - |      - |     - |         - |
|                     As |      9.383 ns |     0.1535 ns |     0.1361 ns |      - |      - |     - |         - |
|                  As_SI |    581.016 ns |    11.2702 ns |    11.5737 ns | 0.0286 |      - |     - |     192 B |
|                 ToUnit |     20.510 ns |     0.3284 ns |     0.2912 ns |      - |      - |     - |         - |
|              ToUnit_SI |    583.101 ns |     9.7926 ns |     9.1600 ns | 0.0286 |      - |     - |     192 B |
|           ToStringTest |  2,431.313 ns |    47.7188 ns |    69.9457 ns | 0.1411 |      - |     - |     952 B |
|                  Parse | 68,693.028 ns | 1,308.9481 ns | 1,160.3484 ns | 6.8359 | 0.2441 |     - |   44816 B |
|          TryParseValid | 69,521.292 ns | 1,351.9620 ns | 1,981.6884 ns | 6.8359 | 0.2441 |     - |   44792 B |
|        TryParseInvalid | 77,136.244 ns |   821.0250 ns |   685.5930 ns | 6.7139 | 0.2441 |     - |   44392 B |
|           QuantityFrom |  1,898.947 ns |    51.4687 ns |   147.6733 ns |      - |      - |     - |      56 B |
|           IQuantity_As |     23.726 ns |     0.5084 ns |     0.5650 ns | 0.0038 |      - |     - |      24 B |
|        IQuantity_As_SI |    594.489 ns |     6.9407 ns |     5.7958 ns | 0.0286 |      - |     - |     192 B |
|       IQuantity_ToUnit |     32.984 ns |     0.6780 ns |     0.6342 ns | 0.0088 |      - |     - |      56 B |
| IQuantity_ToStringTest |  2,621.069 ns |    48.4400 ns |    45.3108 ns | 0.1411 |      - |     - |     952 B |
