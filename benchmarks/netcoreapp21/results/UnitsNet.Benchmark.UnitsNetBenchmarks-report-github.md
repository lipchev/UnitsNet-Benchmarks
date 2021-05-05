``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-VDIYGH : .NET Core 2.1.27 (CoreCLR 4.6.29916.01, CoreFX 4.6.29916.03), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                 Method |          Mean |         Error |        StdDev |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     13.018 ns |     0.1549 ns |     0.1373 ns |      - |      - |     - |         - |
|         Constructor_SI |    654.104 ns |    11.1827 ns |    10.4603 ns | 0.0286 |      - |     - |     192 B |
|             FromMethod |     30.511 ns |     0.4776 ns |     0.4467 ns |      - |      - |     - |         - |
|             ToProperty |      9.647 ns |     0.1287 ns |     0.1204 ns |      - |      - |     - |         - |
|                     As |      9.575 ns |     0.2377 ns |     0.2919 ns |      - |      - |     - |         - |
|                  As_SI |    622.748 ns |    10.2992 ns |     9.1300 ns | 0.0286 |      - |     - |     192 B |
|                 ToUnit |     21.551 ns |     0.4227 ns |     0.3954 ns |      - |      - |     - |         - |
|              ToUnit_SI |    619.217 ns |     5.4287 ns |     4.5333 ns | 0.0286 |      - |     - |     192 B |
|           ToStringTest |  2,369.700 ns |    43.2559 ns |    40.4616 ns | 0.1411 |      - |     - |     952 B |
|                  Parse | 66,642.413 ns | 1,098.2356 ns |   917.0765 ns | 6.8359 | 0.2441 |     - |   44816 B |
|          TryParseValid | 67,995.784 ns | 1,217.3020 ns | 1,138.6650 ns | 6.8359 | 0.2441 |     - |   44792 B |
|        TryParseInvalid | 74,977.938 ns |   934.9868 ns |   828.8415 ns | 6.7139 | 0.2441 |     - |   44392 B |
|           QuantityFrom |  1,993.750 ns |    68.5505 ns |   197.7838 ns |      - |      - |     - |      56 B |
|           IQuantity_As |     24.046 ns |     0.5025 ns |     0.4701 ns | 0.0038 |      - |     - |      24 B |
|        IQuantity_As_SI |    586.309 ns |    11.7094 ns |    10.9529 ns | 0.0286 |      - |     - |     192 B |
|       IQuantity_ToUnit |     31.999 ns |     0.3611 ns |     0.3201 ns | 0.0088 |      - |     - |      56 B |
| IQuantity_ToStringTest |  2,336.831 ns |    44.9382 ns |    46.1482 ns | 0.1411 |      - |     - |     952 B |
