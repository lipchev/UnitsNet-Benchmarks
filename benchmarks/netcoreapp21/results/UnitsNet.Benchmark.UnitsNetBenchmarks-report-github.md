``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-NUFZUE : .NET Core 2.1.27 (CoreCLR 4.6.29916.01, CoreFX 4.6.29916.03), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                 Method |          Mean |         Error |        StdDev |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     12.420 ns |     0.2019 ns |     0.1889 ns |      - |      - |     - |         - |
|         Constructor_SI |    571.574 ns |    10.8907 ns |    10.1872 ns | 0.0286 |      - |     - |     192 B |
|             FromMethod |     30.095 ns |     0.5553 ns |     0.5195 ns |      - |      - |     - |         - |
|             ToProperty |      9.302 ns |     0.1240 ns |     0.1160 ns |      - |      - |     - |         - |
|                     As |      9.195 ns |     0.1900 ns |     0.1685 ns |      - |      - |     - |         - |
|                  As_SI |    571.441 ns |    10.8212 ns |    11.1126 ns | 0.0286 |      - |     - |     192 B |
|                 ToUnit |     20.486 ns |     0.3593 ns |     0.3185 ns |      - |      - |     - |         - |
|              ToUnit_SI |    604.332 ns |     6.2722 ns |     5.5602 ns | 0.0286 |      - |     - |     192 B |
|           ToStringTest |  2,281.423 ns |    44.9583 ns |    49.9710 ns | 0.1411 |      - |     - |     952 B |
|                  Parse | 66,088.861 ns | 1,115.4613 ns | 1,145.4967 ns | 6.8359 | 0.2441 |     - |   44816 B |
|          TryParseValid | 65,682.632 ns | 1,312.7916 ns | 1,289.3369 ns | 6.8359 | 0.2441 |     - |   44792 B |
|        TryParseInvalid | 72,495.292 ns | 1,083.8671 ns |   960.8200 ns | 6.7139 | 0.2441 |     - |   44392 B |
|           QuantityFrom |  1,810.870 ns |    36.9639 ns |   104.2572 ns |      - |      - |     - |      56 B |
|           IQuantity_As |     22.969 ns |     0.4670 ns |     0.4140 ns | 0.0038 |      - |     - |      24 B |
|        IQuantity_As_SI |    586.107 ns |    11.2795 ns |    10.5508 ns | 0.0286 |      - |     - |     192 B |
|       IQuantity_ToUnit |     31.174 ns |     0.7145 ns |     0.7337 ns | 0.0088 |      - |     - |      56 B |
| IQuantity_ToStringTest |  2,472.276 ns |    26.2835 ns |    24.5856 ns | 0.1411 |      - |     - |     952 B |
|             Min_Double | 13,720.073 ns |   169.9650 ns |   158.9853 ns |      - |      - |     - |         - |
