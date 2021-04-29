``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-MIQQGP : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationTime=125.0000 ms  

```
|                 Method |           Mean |         Error |        StdDev |         Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------------- |---------------:|--------------:|--------------:|---------------:|-------:|------:|------:|----------:|
|            Constructor |      10.500 ns |     0.2054 ns |     0.1715 ns |      10.471 ns |      - |     - |     - |         - |
|         Constructor_SI |     359.025 ns |     6.8124 ns |     8.6155 ns |     357.759 ns | 0.0114 |     - |     - |     192 B |
|             FromMethod |      28.904 ns |     0.3146 ns |     0.2627 ns |      28.839 ns |      - |     - |     - |         - |
|             ToProperty |       9.542 ns |     0.2095 ns |     0.2937 ns |       9.441 ns |      - |     - |     - |         - |
|                     As |       8.742 ns |     0.1617 ns |     0.1434 ns |       8.758 ns |      - |     - |     - |         - |
|                  As_SI |     361.810 ns |     6.1218 ns |     5.4268 ns |     360.797 ns | 0.0117 |     - |     - |     192 B |
|                 ToUnit |      18.402 ns |     0.3170 ns |     0.2811 ns |      18.427 ns |      - |     - |     - |         - |
|              ToUnit_SI |     366.845 ns |     7.0251 ns |     7.2143 ns |     367.222 ns | 0.0118 |     - |     - |     192 B |
|           ToStringTest |  20,368.421 ns |   406.1678 ns |   700.6195 ns |  20,400.000 ns |      - |     - |     - |     944 B |
|                  Parse | 117,191.304 ns | 2,286.1087 ns | 2,891.1956 ns | 116,000.000 ns |      - |     - |     - |   33632 B |
|          TryParseValid | 119,728.889 ns | 2,387.9683 ns | 4,543.3579 ns | 118,300.000 ns |      - |     - |     - |   33608 B |
|        TryParseInvalid | 116,872.222 ns | 2,288.3251 ns | 2,448.4823 ns | 116,100.000 ns |      - |     - |     - |   33216 B |
|           QuantityFrom |   3,304.000 ns |    50.9574 ns |   102.9365 ns |   3,300.000 ns |      - |     - |     - |      56 B |
|           IQuantity_As |      18.204 ns |     0.4114 ns |     0.3435 ns |      18.117 ns | 0.0014 |     - |     - |      24 B |
|        IQuantity_As_SI |     362.021 ns |     3.9076 ns |     3.0508 ns |     362.061 ns | 0.0117 |     - |     - |     192 B |
|       IQuantity_ToUnit |      30.430 ns |     0.7225 ns |     1.6745 ns |      29.732 ns | 0.0035 |     - |     - |      56 B |
| IQuantity_ToStringTest |   1,476.834 ns |    27.6190 ns |    24.4835 ns |   1,480.885 ns | 0.0484 |     - |     - |     944 B |
