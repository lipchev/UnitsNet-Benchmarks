``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-DWZZQI : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationTime=125.0000 ms  

```
|                 Method |           Mean |         Error |         StdDev |         Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------------- |---------------:|--------------:|---------------:|---------------:|-------:|------:|------:|----------:|
|            Constructor |      11.286 ns |     0.2724 ns |      0.4321 ns |      11.187 ns |      - |     - |     - |         - |
|         Constructor_SI |     377.449 ns |     7.5198 ns |      9.2350 ns |     376.917 ns | 0.0118 |     - |     - |     192 B |
|             FromMethod |      30.937 ns |     0.6708 ns |      1.1208 ns |      30.558 ns |      - |     - |     - |         - |
|             ToProperty |       9.424 ns |     0.2274 ns |      0.2127 ns |       9.365 ns |      - |     - |     - |         - |
|                     As |       9.459 ns |     0.2356 ns |      0.4248 ns |       9.335 ns |      - |     - |     - |         - |
|                  As_SI |     374.657 ns |     7.4596 ns |      8.8801 ns |     374.677 ns | 0.0119 |     - |     - |     192 B |
|                 ToUnit |      19.121 ns |     0.4276 ns |      0.6268 ns |      18.872 ns |      - |     - |     - |         - |
|              ToUnit_SI |     380.488 ns |     5.1590 ns |      6.8872 ns |     379.737 ns | 0.0121 |     - |     - |     192 B |
|           ToStringTest |  20,311.494 ns |   657.2885 ns |  1,799.3167 ns |  19,600.000 ns |      - |     - |     - |     944 B |
|                  Parse | 122,185.714 ns | 3,616.6297 ns | 10,141.4175 ns | 117,100.000 ns |      - |     - |     - |   33632 B |
|          TryParseValid | 117,034.286 ns | 2,332.3605 ns |  3,832.1352 ns | 115,800.000 ns |      - |     - |     - |   33608 B |
|        TryParseInvalid | 116,026.923 ns | 2,285.1083 ns |  3,127.8821 ns | 115,400.000 ns |      - |     - |     - |   33216 B |
|           QuantityFrom |   3,404.839 ns |    67.6616 ns |    154.0996 ns |   3,400.000 ns |      - |     - |     - |      56 B |
|           IQuantity_As |      20.200 ns |     0.4312 ns |      0.3600 ns |      20.112 ns | 0.0014 |     - |     - |      24 B |
|        IQuantity_As_SI |     378.320 ns |     7.5198 ns |     10.7846 ns |     375.168 ns | 0.0119 |     - |     - |     192 B |
|       IQuantity_ToUnit |      32.063 ns |     0.7511 ns |      1.4827 ns |      31.823 ns | 0.0033 |     - |     - |      56 B |
| IQuantity_ToStringTest |  19,750.000 ns |   394.0232 ns |  1,071.9691 ns |  19,300.000 ns |      - |     - |     - |     944 B |
