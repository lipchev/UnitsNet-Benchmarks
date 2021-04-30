``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-VIYDDA : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationTime=500.0000 ms  

```
|                 Method |          Mean |         Error |        StdDev |        Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|--------------:|-------:|------:|------:|----------:|
|            Constructor |     11.359 ns |     0.1457 ns |     0.1137 ns |     11.384 ns |      - |     - |     - |         - |
|         Constructor_SI |    365.589 ns |     7.1843 ns |    11.3950 ns |    368.679 ns | 0.0118 |     - |     - |     192 B |
|             FromMethod |     30.060 ns |     0.6421 ns |     0.8572 ns |     30.248 ns |      - |     - |     - |         - |
|             ToProperty |      9.116 ns |     0.2250 ns |     0.3154 ns |      9.141 ns |      - |     - |     - |         - |
|                     As |      8.686 ns |     0.0951 ns |     0.0794 ns |      8.690 ns |      - |     - |     - |         - |
|                  As_SI |    376.518 ns |     7.4967 ns |    13.3253 ns |    379.527 ns | 0.0119 |     - |     - |     192 B |
|                 ToUnit |     19.863 ns |     0.2864 ns |     0.2538 ns |     19.832 ns |      - |     - |     - |         - |
|              ToUnit_SI |    349.308 ns |     6.7021 ns |     6.8826 ns |    348.694 ns | 0.0116 |     - |     - |     192 B |
|           ToStringTest |  1,421.491 ns |    23.0769 ns |    19.2703 ns |  1,423.710 ns | 0.0594 |     - |     - |     944 B |
|                  Parse | 52,635.912 ns | 1,052.3222 ns | 1,252.7147 ns | 52,364.187 ns | 2.0377 |     - |     - |   33344 B |
|          TryParseValid | 55,132.044 ns | 1,099.8467 ns | 2,613.9021 ns | 55,076.824 ns | 2.0294 |     - |     - |   33320 B |
|        TryParseInvalid | 60,307.558 ns |   959.6550 ns |   897.6618 ns | 60,275.968 ns | 2.0989 |     - |     - |   32928 B |
|           QuantityFrom |  3,438.710 ns |    68.0934 ns |   155.0831 ns |  3,400.000 ns |      - |     - |     - |      56 B |
|           IQuantity_As |     19.914 ns |     0.4385 ns |     1.0589 ns |     19.552 ns | 0.0015 |     - |     - |      24 B |
|        IQuantity_As_SI |    355.719 ns |     5.6675 ns |     5.3014 ns |    354.497 ns | 0.0121 |     - |     - |     192 B |
|       IQuantity_ToUnit |     30.834 ns |     0.7326 ns |     2.0055 ns |     31.471 ns | 0.0035 |     - |     - |      56 B |
| IQuantity_ToStringTest |  1,623.276 ns |    24.6557 ns |    21.8566 ns |  1,619.694 ns | 0.0573 |     - |     - |     944 B |
