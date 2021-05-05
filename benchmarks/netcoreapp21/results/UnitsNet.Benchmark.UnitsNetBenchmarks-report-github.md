``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-QBYFHB : .NET Core 2.1.27 (CoreCLR 4.6.29916.01, CoreFX 4.6.29916.03), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                 Method |          Mean |         Error |        StdDev |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     10.592 ns |      4.962 ns |     0.2720 ns |      - |      - |     - |         - |
|         Constructor_SI |    535.133 ns |    148.003 ns |     8.1126 ns | 0.0286 |      - |     - |     192 B |
|             FromMethod |     26.568 ns |     11.545 ns |     0.6328 ns |      - |      - |     - |         - |
|             ToProperty |      8.825 ns |      1.622 ns |     0.0889 ns |      - |      - |     - |         - |
|                     As |      8.270 ns |      6.505 ns |     0.3566 ns |      - |      - |     - |         - |
|                  As_SI |    493.978 ns |    164.703 ns |     9.0279 ns | 0.0286 |      - |     - |     192 B |
|                 ToUnit |     17.466 ns |     12.428 ns |     0.6812 ns |      - |      - |     - |         - |
|              ToUnit_SI |    506.860 ns |    126.441 ns |     6.9306 ns | 0.0286 |      - |     - |     192 B |
|           ToStringTest |  1,891.772 ns |    585.514 ns |    32.0940 ns | 0.1469 |      - |     - |     952 B |
|                  Parse | 58,337.773 ns | 31,073.485 ns | 1,703.2426 ns | 6.8359 | 0.2441 |     - |   44816 B |
|          TryParseValid | 57,792.128 ns |  7,935.616 ns |   434.9779 ns | 6.9580 | 0.2441 |     - |   44792 B |
|        TryParseInvalid | 64,911.080 ns | 46,695.770 ns | 2,559.5527 ns | 6.7139 | 0.2441 |     - |   44392 B |
|           QuantityFrom |  1,933.333 ns |  2,786.775 ns |   152.7525 ns |      - |      - |     - |      56 B |
|           IQuantity_As |     20.194 ns |      9.387 ns |     0.5145 ns | 0.0038 |      - |     - |      24 B |
|        IQuantity_As_SI |    491.170 ns |    104.124 ns |     5.7074 ns | 0.0286 |      - |     - |     192 B |
|       IQuantity_ToUnit |     27.016 ns |      2.390 ns |     0.1310 ns | 0.0088 |      - |     - |      56 B |
| IQuantity_ToStringTest |  2,335.523 ns |  1,882.357 ns |   103.1783 ns | 0.1411 |      - |     - |     952 B |
