``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-IASTXI : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                 Method |         Mean |        Error |       StdDev |       Median |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |-------------:|-------------:|-------------:|-------------:|-------:|-------:|------:|----------:|
|            Constructor |     15.76 ns |     0.360 ns |     0.516 ns |     15.77 ns |      - |      - |     - |         - |
|         Constructor_SI |    621.54 ns |    12.470 ns |    21.840 ns |    619.69 ns | 0.0296 |      - |     - |     201 B |
|             FromMethod |     37.50 ns |     0.796 ns |     1.006 ns |     37.39 ns |      - |      - |     - |         - |
|             ToProperty |     10.84 ns |     0.159 ns |     0.133 ns |     10.87 ns |      - |      - |     - |         - |
|                     As |     10.92 ns |     0.193 ns |     0.181 ns |     10.91 ns |      - |      - |     - |         - |
|                  As_SI |    613.78 ns |     8.725 ns |     8.161 ns |    613.73 ns | 0.0296 |      - |     - |     201 B |
|                 ToUnit |     24.25 ns |     0.529 ns |     0.759 ns |     24.43 ns |      - |      - |     - |         - |
|              ToUnit_SI |    645.99 ns |    11.273 ns |    10.545 ns |    644.11 ns | 0.0296 |      - |     - |     201 B |
|           ToStringTest |  2,369.31 ns |    44.025 ns |    60.261 ns |  2,364.47 ns | 0.1869 |      - |     - |    1244 B |
|                  Parse | 65,650.45 ns | 1,283.717 ns | 2,036.111 ns | 65,678.92 ns | 8.3008 | 0.2441 |     - |   54377 B |
|          TryParseValid | 68,016.19 ns | 1,360.002 ns | 2,868.705 ns | 67,684.83 ns | 8.3008 | 0.2441 |     - |   54353 B |
|        TryParseInvalid | 69,973.21 ns | 1,393.403 ns | 2,547.915 ns | 70,055.55 ns | 8.3008 | 0.2441 |     - |   53896 B |
|           QuantityFrom |  2,083.51 ns |    59.842 ns |   173.614 ns |  2,000.00 ns |      - |      - |     - |    8192 B |
|           IQuantity_As |     22.37 ns |     0.497 ns |     0.592 ns |     22.42 ns | 0.0038 |      - |     - |      24 B |
|        IQuantity_As_SI |    612.05 ns |    12.017 ns |    15.198 ns |    612.17 ns | 0.0296 |      - |     - |     201 B |
|       IQuantity_ToUnit |     34.92 ns |     0.813 ns |     1.403 ns |     35.11 ns | 0.0088 |      - |     - |      56 B |
| IQuantity_ToStringTest |  2,239.35 ns |    44.398 ns |    57.730 ns |  2,251.78 ns | 0.1869 |      - |     - |    1244 B |
