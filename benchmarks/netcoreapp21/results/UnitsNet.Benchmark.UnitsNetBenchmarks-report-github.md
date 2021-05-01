``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-UQYIGA : .NET Core 2.1.27 (CoreCLR 4.6.29916.01, CoreFX 4.6.29916.03), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=100  
LaunchCount=3  WarmupCount=15  

```
|                 Method |          Mean |         Error |        StdDev |        Median |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     12.900 ns |     0.0315 ns |     0.1613 ns |     12.878 ns |      - |      - |     - |         - |
|         Constructor_SI |    620.135 ns |     2.5915 ns |    13.4139 ns |    619.649 ns | 0.0286 |      - |     - |     192 B |
|             FromMethod |     32.214 ns |     0.1587 ns |     0.8241 ns |     32.245 ns |      - |      - |     - |         - |
|             ToProperty |      8.731 ns |     0.0507 ns |     0.2643 ns |      8.730 ns |      - |      - |     - |         - |
|                     As |      8.655 ns |     0.0705 ns |     0.3578 ns |      8.566 ns |      - |      - |     - |         - |
|                  As_SI |    566.252 ns |     3.2582 ns |    16.9521 ns |    567.045 ns | 0.0286 |      - |     - |     192 B |
|                 ToUnit |     19.752 ns |     0.1312 ns |     0.6840 ns |     19.704 ns |      - |      - |     - |         - |
|              ToUnit_SI |    554.091 ns |     4.4645 ns |    22.9895 ns |    547.867 ns | 0.0286 |      - |     - |     192 B |
|           ToStringTest |  2,107.820 ns |    13.2769 ns |    67.5287 ns |  2,104.066 ns | 0.1450 |      - |     - |     952 B |
|                  Parse | 73,728.670 ns |   653.1536 ns | 3,392.4747 ns | 73,371.478 ns | 6.8359 | 0.2441 |     - |   44816 B |
|          TryParseValid | 86,134.790 ns | 1,073.7694 ns | 5,558.0248 ns | 86,813.879 ns | 6.8359 | 0.2441 |     - |   44792 B |
|        TryParseInvalid | 86,100.075 ns |   783.3552 ns | 4,068.7411 ns | 86,125.085 ns | 6.8359 | 0.2441 |     - |   44392 B |
|           QuantityFrom |  2,356.401 ns |    34.1671 ns |   174.7087 ns |  2,400.000 ns |      - |      - |     - |      56 B |
|           IQuantity_As |     21.750 ns |     0.1129 ns |     0.5884 ns |     21.826 ns | 0.0038 |      - |     - |      24 B |
|        IQuantity_As_SI |    611.270 ns |     3.4357 ns |    17.8451 ns |    614.058 ns | 0.0286 |      - |     - |     192 B |
|       IQuantity_ToUnit |     31.799 ns |     0.2232 ns |     1.1594 ns |     31.984 ns | 0.0088 |      - |     - |      56 B |
| IQuantity_ToStringTest |  2,340.767 ns |    16.9086 ns |    87.9733 ns |  2,341.365 ns | 0.1450 |      - |     - |     952 B |
