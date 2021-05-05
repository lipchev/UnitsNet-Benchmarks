``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-NSDANP : .NET Core 2.1.27 (CoreCLR 4.6.29916.01, CoreFX 4.6.29916.03), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                 Method |          Mean |         Error |        StdDev |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     13.019 ns |      7.042 ns |     0.3860 ns |      - |      - |     - |         - |
|         Constructor_SI |    613.269 ns |    312.327 ns |    17.1197 ns | 0.0286 |      - |     - |     192 B |
|             FromMethod |     31.695 ns |     16.080 ns |     0.8814 ns |      - |      - |     - |         - |
|             ToProperty |      9.494 ns |      2.374 ns |     0.1301 ns |      - |      - |     - |         - |
|                     As |      9.030 ns |      2.588 ns |     0.1419 ns |      - |      - |     - |         - |
|                  As_SI |    560.685 ns |    296.384 ns |    16.2458 ns | 0.0286 |      - |     - |     192 B |
|                 ToUnit |     18.566 ns |      3.442 ns |     0.1887 ns |      - |      - |     - |         - |
|              ToUnit_SI |    533.851 ns |     31.814 ns |     1.7438 ns | 0.0286 |      - |     - |     192 B |
|           ToStringTest |  2,024.372 ns |    564.153 ns |    30.9231 ns | 0.1411 |      - |     - |     952 B |
|                  Parse | 63,299.715 ns | 41,006.702 ns | 2,247.7157 ns | 6.9580 | 0.2441 |     - |   44816 B |
|          TryParseValid | 66,005.082 ns | 11,122.087 ns |   609.6391 ns | 6.8359 | 0.2441 |     - |   44792 B |
|        TryParseInvalid | 80,723.743 ns | 20,008.287 ns | 1,096.7218 ns | 6.7139 | 0.2441 |     - |   44392 B |
|           QuantityFrom |  1,833.333 ns |  3,797.734 ns |   208.1666 ns |      - |      - |     - |      56 B |
|           IQuantity_As |     22.076 ns |     12.832 ns |     0.7034 ns | 0.0038 |      - |     - |      24 B |
|        IQuantity_As_SI |    527.370 ns |    108.559 ns |     5.9505 ns | 0.0286 |      - |     - |     192 B |
|       IQuantity_ToUnit |     28.675 ns |     10.542 ns |     0.5779 ns | 0.0088 |      - |     - |      56 B |
| IQuantity_ToStringTest |  2,166.204 ns |    553.833 ns |    30.3574 ns | 0.1411 |      - |     - |     952 B |
