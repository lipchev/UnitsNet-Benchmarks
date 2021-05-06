``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-LDKWNG : .NET Core 2.1.27 (CoreCLR 4.6.29916.01, CoreFX 4.6.29916.03), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                 Method |          Mean |         Error |        StdDev |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     12.438 ns |     0.2236 ns |     0.1982 ns |      - |      - |     - |         - |
|         Constructor_SI |    599.163 ns |    11.8257 ns |    16.1871 ns | 0.0286 |      - |     - |     192 B |
|             FromMethod |     30.240 ns |     0.6287 ns |     0.7485 ns |      - |      - |     - |         - |
|             ToProperty |      8.371 ns |     0.1204 ns |     0.1067 ns |      - |      - |     - |         - |
|                     As |      8.426 ns |     0.1127 ns |     0.0941 ns |      - |      - |     - |         - |
|                  As_SI |    563.043 ns |    10.6905 ns |    11.8825 ns | 0.0286 |      - |     - |     192 B |
|                 ToUnit |     20.060 ns |     0.2943 ns |     0.2753 ns |      - |      - |     - |         - |
|              ToUnit_SI |    634.255 ns |    12.6987 ns |    16.5119 ns | 0.0286 |      - |     - |     192 B |
|           ToStringTest |  2,414.517 ns |    30.4039 ns |    26.9523 ns | 0.1450 |      - |     - |     952 B |
|                  Parse | 74,211.161 ns | 1,207.1598 ns | 1,129.1780 ns | 6.8359 | 0.2441 |     - |   44816 B |
|          TryParseValid | 75,797.921 ns | 1,458.8332 ns | 1,679.9944 ns | 6.8359 | 0.2441 |     - |   44792 B |
|        TryParseInvalid | 81,341.979 ns | 1,310.5069 ns | 1,225.8490 ns | 6.8359 | 0.2441 |     - |   44392 B |
|           QuantityFrom |  2,491.139 ns |    49.3597 ns |   128.2924 ns |      - |      - |     - |      56 B |
|           IQuantity_As |     19.827 ns |     0.4239 ns |     0.4712 ns | 0.0038 |      - |     - |      24 B |
|        IQuantity_As_SI |    545.680 ns |    10.7692 ns |    10.5768 ns | 0.0286 |      - |     - |     192 B |
|       IQuantity_ToUnit |     29.629 ns |     0.6741 ns |     0.6305 ns | 0.0088 |      - |     - |      56 B |
| IQuantity_ToStringTest |  2,282.065 ns |    45.5086 ns |    50.5827 ns | 0.1450 |      - |     - |     952 B |
