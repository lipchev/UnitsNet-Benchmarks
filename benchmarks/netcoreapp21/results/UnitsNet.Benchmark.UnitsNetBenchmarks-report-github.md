``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-KOSLSL : .NET Core 2.1.27 (CoreCLR 4.6.29916.01, CoreFX 4.6.29916.03), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                 Method |          Mean |         Error |        StdDev |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     12.652 ns |     0.1200 ns |     0.1122 ns |      - |      - |     - |         - |
|         Constructor_SI |    620.680 ns |     7.3988 ns |     6.9209 ns | 0.0286 |      - |     - |     192 B |
|             FromMethod |     31.692 ns |     0.2601 ns |     0.2306 ns |      - |      - |     - |         - |
|             ToProperty |      9.001 ns |     0.0849 ns |     0.0752 ns |      - |      - |     - |         - |
|                     As |      8.966 ns |     0.0617 ns |     0.0515 ns |      - |      - |     - |         - |
|                  As_SI |    584.235 ns |     5.2443 ns |     4.9055 ns | 0.0286 |      - |     - |     192 B |
|                 ToUnit |     20.412 ns |     0.2188 ns |     0.1940 ns |      - |      - |     - |         - |
|              ToUnit_SI |    628.910 ns |     5.3912 ns |     5.0430 ns | 0.0286 |      - |     - |     192 B |
|           ToStringTest |  2,270.092 ns |    23.1049 ns |    21.6123 ns | 0.1450 |      - |     - |     952 B |
|                  Parse | 75,697.437 ns | 1,405.1467 ns | 1,314.3751 ns | 6.8359 | 0.2441 |     - |   44816 B |
|          TryParseValid | 74,484.014 ns |   683.5029 ns |   570.7559 ns | 6.8359 | 0.2441 |     - |   44792 B |
|        TryParseInvalid | 79,203.818 ns |   613.6650 ns |   574.0227 ns | 6.8359 | 0.2441 |     - |   44392 B |
|           QuantityFrom |  2,311.905 ns |    45.5193 ns |    83.2346 ns |      - |      - |     - |      56 B |
|           IQuantity_As |     21.044 ns |     0.2272 ns |     0.2125 ns | 0.0038 |      - |     - |      24 B |
|        IQuantity_As_SI |    588.791 ns |     6.7597 ns |     5.9923 ns | 0.0286 |      - |     - |     192 B |
|       IQuantity_ToUnit |     31.336 ns |     0.4147 ns |     0.3879 ns | 0.0088 |      - |     - |      56 B |
| IQuantity_ToStringTest |  2,385.117 ns |    39.8054 ns |    37.2340 ns | 0.1450 |      - |     - |     952 B |
