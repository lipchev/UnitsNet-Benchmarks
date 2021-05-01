``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-KLGMFA : .NET Core 2.1.27 (CoreCLR 4.6.29916.01, CoreFX 4.6.29916.03), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=100  
LaunchCount=3  WarmupCount=15  

```
|                 Method |          Mean |       Error |        StdDev |        Median |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|------------:|--------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     12.411 ns |   0.0672 ns |     0.3488 ns |     12.399 ns |      - |      - |     - |         - |
|         Constructor_SI |    576.704 ns |   3.4874 ns |    18.0824 ns |    577.741 ns | 0.0286 |      - |     - |     192 B |
|             FromMethod |     28.858 ns |   0.1900 ns |     0.9854 ns |     28.845 ns |      - |      - |     - |         - |
|             ToProperty |      9.221 ns |   0.0530 ns |     0.2757 ns |      9.222 ns |      - |      - |     - |         - |
|                     As |      9.224 ns |   0.0441 ns |     0.2285 ns |      9.228 ns |      - |      - |     - |         - |
|                  As_SI |    564.813 ns |   3.2139 ns |    16.7499 ns |    566.282 ns | 0.0286 |      - |     - |     192 B |
|                 ToUnit |     20.111 ns |   0.1075 ns |     0.5576 ns |     20.096 ns |      - |      - |     - |         - |
|              ToUnit_SI |    594.539 ns |   4.0898 ns |    21.3150 ns |    595.285 ns | 0.0286 |      - |     - |     192 B |
|           ToStringTest |  2,257.287 ns |  15.6222 ns |    81.4190 ns |  2,257.302 ns | 0.1411 |      - |     - |     952 B |
|                  Parse | 67,196.254 ns | 454.7019 ns | 2,361.7183 ns | 66,966.193 ns | 6.8359 | 0.2441 |     - |   44816 B |
|          TryParseValid | 67,188.505 ns | 458.1211 ns | 2,375.4009 ns | 66,925.110 ns | 6.8359 | 0.2441 |     - |   44792 B |
|        TryParseInvalid | 75,236.077 ns | 497.7928 ns | 2,527.3459 ns | 75,144.019 ns | 6.7139 | 0.2441 |     - |   44392 B |
|           QuantityFrom |  1,872.696 ns |  40.9152 ns |   210.6868 ns |  1,800.000 ns |      - |      - |     - |      56 B |
|           IQuantity_As |     22.248 ns |   0.1581 ns |     0.8224 ns |     22.237 ns | 0.0038 |      - |     - |      24 B |
|        IQuantity_As_SI |    575.479 ns |   3.3294 ns |    17.2928 ns |    575.577 ns | 0.0286 |      - |     - |     192 B |
|       IQuantity_ToUnit |     30.317 ns |   0.1957 ns |     1.0079 ns |     30.255 ns | 0.0088 |      - |     - |      56 B |
| IQuantity_ToStringTest |  2,261.056 ns |  12.9605 ns |    67.4320 ns |  2,258.288 ns | 0.1411 |      - |     - |     952 B |
