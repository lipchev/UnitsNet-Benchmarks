``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-NJDSOU : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=100  
LaunchCount=3  WarmupCount=15  

```
|                 Method |         Mean |      Error |     StdDev |       Median |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |-------------:|-----------:|-----------:|-------------:|-------:|-------:|------:|----------:|
|            Constructor |     15.11 ns |   0.034 ns |   0.178 ns |     15.10 ns |      - |      - |     - |         - |
|         Constructor_SI |    579.62 ns |   1.184 ns |   6.140 ns |    579.28 ns | 0.0296 |      - |     - |     201 B |
|             FromMethod |     39.17 ns |   1.002 ns |   5.215 ns |     35.80 ns |      - |      - |     - |         - |
|             ToProperty |     10.60 ns |   0.022 ns |   0.116 ns |     10.61 ns |      - |      - |     - |         - |
|                     As |     10.61 ns |   0.024 ns |   0.124 ns |     10.61 ns |      - |      - |     - |         - |
|                  As_SI |    574.29 ns |   1.051 ns |   5.449 ns |    573.74 ns | 0.0296 |      - |     - |     201 B |
|                 ToUnit |     23.29 ns |   0.045 ns |   0.233 ns |     23.27 ns |      - |      - |     - |         - |
|              ToUnit_SI |    594.29 ns |   2.631 ns |  13.642 ns |    589.29 ns | 0.0296 |      - |     - |     201 B |
|           ToStringTest |  2,104.43 ns |   4.714 ns |  24.230 ns |  2,103.34 ns | 0.1869 |      - |     - |    1244 B |
|                  Parse | 61,663.04 ns | 125.002 ns | 639.179 ns | 61,601.44 ns | 8.3008 | 0.2441 |     - |   54377 B |
|          TryParseValid | 62,234.01 ns | 150.060 ns | 772.710 ns | 62,122.68 ns | 8.3008 | 0.2441 |     - |   54353 B |
|        TryParseInvalid | 67,792.59 ns | 162.851 ns | 823.843 ns | 67,707.21 ns | 8.3008 | 0.2441 |     - |   53895 B |
|           QuantityFrom |  1,883.21 ns |  26.262 ns | 132.133 ns |  1,900.00 ns |      - |      - |     - |    8192 B |
|           IQuantity_As |     21.78 ns |   0.053 ns |   0.271 ns |     21.76 ns | 0.0038 |      - |     - |      24 B |
|        IQuantity_As_SI |    574.81 ns |   1.868 ns |   9.637 ns |    573.50 ns | 0.0296 |      - |     - |     201 B |
|       IQuantity_ToUnit |     34.46 ns |   0.086 ns |   0.446 ns |     34.45 ns | 0.0088 |      - |     - |      56 B |
| IQuantity_ToStringTest |  2,107.49 ns |   5.079 ns |  25.971 ns |  2,108.25 ns | 0.1869 |      - |     - |    1244 B |
