``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-ZLCUMN : .NET Core 2.1.27 (CoreCLR 4.6.29916.01, CoreFX 4.6.29916.03), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationTime=125.0000 ms  

```
|                 Method |           Mean |         Error |         StdDev |         Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------------- |---------------:|--------------:|---------------:|---------------:|-------:|------:|------:|----------:|
|            Constructor |      12.884 ns |     0.2691 ns |      0.3592 ns |      12.802 ns |      - |     - |     - |         - |
|         Constructor_SI |     612.592 ns |    12.0040 ns |     17.2158 ns |     616.042 ns | 0.0203 |     - |     - |     192 B |
|             FromMethod |      32.540 ns |     0.6694 ns |      0.8936 ns |      32.299 ns |      - |     - |     - |         - |
|             ToProperty |       8.389 ns |     0.2128 ns |      0.4395 ns |       8.436 ns |      - |     - |     - |         - |
|                     As |       8.419 ns |     0.2136 ns |      0.4733 ns |       8.461 ns |      - |     - |     - |         - |
|                  As_SI |     574.140 ns |    11.4978 ns |     24.9952 ns |     574.256 ns | 0.0233 |     - |     - |     192 B |
|                 ToUnit |      19.028 ns |     0.4080 ns |      0.4366 ns |      19.034 ns |      - |     - |     - |         - |
|              ToUnit_SI |     576.350 ns |    11.2912 ns |     14.6818 ns |     577.438 ns | 0.0230 |     - |     - |     192 B |
|           ToStringTest |  14,370.652 ns |   295.2116 ns |    832.6494 ns |  14,200.000 ns |      - |     - |     - |     952 B |
|                  Parse | 102,851.613 ns | 2,997.5045 ns |  8,503.4215 ns |  98,900.000 ns |      - |     - |     - |   44816 B |
|          TryParseValid | 108,664.286 ns | 4,936.8827 ns | 14,401.1186 ns | 107,200.000 ns |      - |     - |     - |   44792 B |
|        TryParseInvalid | 105,955.056 ns | 3,478.6552 ns |  9,639.3372 ns | 101,600.000 ns |      - |     - |     - |   44392 B |
|           QuantityFrom |   1,913.402 ns |    43.5513 ns |    126.3501 ns |   1,900.000 ns |      - |     - |     - |      56 B |
|           IQuantity_As |      20.011 ns |     0.4349 ns |      0.5177 ns |      20.053 ns | 0.0035 |     - |     - |      24 B |
|        IQuantity_As_SI |     572.853 ns |    11.4037 ns |     19.6707 ns |     572.221 ns | 0.0228 |     - |     - |     192 B |
|       IQuantity_ToUnit |      31.186 ns |     0.7337 ns |      1.8541 ns |      30.946 ns | 0.0082 |     - |     - |      56 B |
| IQuantity_ToStringTest |  14,502.128 ns |   298.0305 ns |    850.2977 ns |  14,250.000 ns |      - |     - |     - |     952 B |
