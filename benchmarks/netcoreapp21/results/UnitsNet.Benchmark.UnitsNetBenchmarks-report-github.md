``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-EANKYJ : .NET Core 2.1.27 (CoreCLR 4.6.29916.01, CoreFX 4.6.29916.03), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                 Method |          Mean |         Error |        StdDev |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     11.536 ns |     0.2630 ns |     0.2701 ns |      - |      - |     - |         - |
|         Constructor_SI |    566.179 ns |     9.7202 ns |    13.3051 ns | 0.0286 |      - |     - |     192 B |
|             FromMethod |     27.357 ns |     0.5703 ns |     0.7212 ns |      - |      - |     - |         - |
|             ToProperty |      9.422 ns |     0.2029 ns |     0.1898 ns |      - |      - |     - |         - |
|                     As |      9.175 ns |     0.1919 ns |     0.1795 ns |      - |      - |     - |         - |
|                  As_SI |    526.517 ns |     8.6357 ns |     8.0779 ns | 0.0286 |      - |     - |     192 B |
|                 ToUnit |     18.528 ns |     0.3431 ns |     0.3209 ns |      - |      - |     - |         - |
|              ToUnit_SI |    530.580 ns |     9.4573 ns |     8.3836 ns | 0.0286 |      - |     - |     192 B |
|           ToStringTest |  2,082.342 ns |    24.3975 ns |    22.8215 ns | 0.1411 |      - |     - |     952 B |
|                  Parse | 59,725.214 ns |   558.1863 ns |   522.1278 ns | 6.9580 | 0.2441 |     - |   44816 B |
|          TryParseValid | 61,102.386 ns |   967.3249 ns |   904.8363 ns | 6.8359 | 0.2441 |     - |   44792 B |
|        TryParseInvalid | 69,639.311 ns | 1,349.3458 ns | 1,262.1789 ns | 6.7139 | 0.2441 |     - |   44392 B |
|           QuantityFrom |  1,609.574 ns |    41.1422 ns |   117.3811 ns |      - |      - |     - |      56 B |
|           IQuantity_As |     20.015 ns |     0.3990 ns |     0.3919 ns | 0.0038 |      - |     - |      24 B |
|        IQuantity_As_SI |    528.932 ns |    10.0301 ns |     9.8509 ns | 0.0286 |      - |     - |     192 B |
|       IQuantity_ToUnit |     28.686 ns |     0.5314 ns |     0.4971 ns | 0.0088 |      - |     - |      56 B |
| IQuantity_ToStringTest |  2,168.840 ns |    27.0053 ns |    23.9395 ns | 0.1411 |      - |     - |     952 B |
|             Min_Double | 12,524.071 ns |   234.6416 ns |   230.4494 ns |      - |      - |     - |         - |
