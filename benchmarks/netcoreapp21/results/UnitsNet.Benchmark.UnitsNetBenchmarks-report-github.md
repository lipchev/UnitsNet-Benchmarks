``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-VFPFNB : .NET Core 2.1.27 (CoreCLR 4.6.29916.01, CoreFX 4.6.29916.03), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationTime=125.0000 ms  

```
|                 Method |           Mean |         Error |         StdDev |         Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------------- |---------------:|--------------:|---------------:|---------------:|-------:|------:|------:|----------:|
|            Constructor |      12.222 ns |     0.2733 ns |      0.4566 ns |      12.236 ns |      - |     - |     - |         - |
|         Constructor_SI |     653.579 ns |    13.0372 ns |     18.2763 ns |     651.796 ns | 0.0209 |     - |     - |     192 B |
|             FromMethod |      29.294 ns |     0.6186 ns |      0.5786 ns |      29.218 ns |      - |     - |     - |         - |
|             ToProperty |       8.885 ns |     0.2215 ns |      0.3639 ns |       8.834 ns |      - |     - |     - |         - |
|                     As |       8.365 ns |     0.2024 ns |      0.1893 ns |       8.308 ns |      - |     - |     - |         - |
|                  As_SI |     554.687 ns |     9.2293 ns |      7.7069 ns |     554.899 ns | 0.0219 |     - |     - |     192 B |
|                 ToUnit |      18.906 ns |     0.4020 ns |      0.4301 ns |      18.918 ns |      - |     - |     - |         - |
|              ToUnit_SI |     581.027 ns |    11.2580 ns |     15.7821 ns |     579.587 ns | 0.0229 |     - |     - |     192 B |
|           ToStringTest |  16,528.571 ns |   334.2552 ns |    937.2875 ns |  16,500.000 ns |      - |     - |     - |     952 B |
|                  Parse | 110,150.538 ns | 3,940.6422 ns | 11,178.9459 ns | 109,500.000 ns |      - |     - |     - |   44816 B |
|          TryParseValid | 109,930.208 ns | 4,065.8649 ns | 11,730.9498 ns | 111,700.000 ns |      - |     - |     - |   44792 B |
|        TryParseInvalid | 114,293.750 ns | 3,786.1195 ns | 10,923.8205 ns | 114,850.000 ns |      - |     - |     - |   44392 B |
|           QuantityFrom |   2,346.552 ns |    46.9087 ns |    102.9657 ns |   2,300.000 ns |      - |     - |     - |      56 B |
|           IQuantity_As |      20.718 ns |     0.4573 ns |      0.8919 ns |      20.571 ns | 0.0035 |     - |     - |      24 B |
|        IQuantity_As_SI |     600.040 ns |    11.1799 ns |     28.2531 ns |     593.057 ns | 0.0227 |     - |     - |     192 B |
|       IQuantity_ToUnit |      30.480 ns |     0.6465 ns |      0.5731 ns |      30.404 ns | 0.0085 |     - |     - |      56 B |
| IQuantity_ToStringTest |  15,615.385 ns |   416.7664 ns |  1,168.6576 ns |  15,500.000 ns |      - |     - |     - |     952 B |
