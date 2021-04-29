``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-NFCXFK : .NET Core 2.1.27 (CoreCLR 4.6.29916.01, CoreFX 4.6.29916.03), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationTime=250.0000 ms  

```
|                 Method |          Mean |         Error |        StdDev |        Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|--------------:|-------:|------:|------:|----------:|
|            Constructor |     11.992 ns |     0.2779 ns |     0.4566 ns |     11.980 ns |      - |     - |     - |         - |
|         Constructor_SI |    564.930 ns |    11.1706 ns |    18.0384 ns |    565.989 ns | 0.0250 |     - |     - |     192 B |
|             FromMethod |     29.542 ns |     0.6268 ns |     0.6707 ns |     29.460 ns |      - |     - |     - |         - |
|             ToProperty |      8.602 ns |     0.2092 ns |     0.2933 ns |      8.620 ns |      - |     - |     - |         - |
|                     As |      8.385 ns |     0.2050 ns |     0.2279 ns |      8.370 ns |      - |     - |     - |         - |
|                  As_SI |    551.768 ns |    11.0284 ns |    12.7003 ns |    554.119 ns | 0.0264 |     - |     - |     192 B |
|                 ToUnit |     19.059 ns |     0.4176 ns |     0.4809 ns |     18.995 ns |      - |     - |     - |         - |
|              ToUnit_SI |    573.019 ns |    11.2136 ns |    13.7713 ns |    574.430 ns | 0.0258 |     - |     - |     192 B |
|           ToStringTest |  2,118.513 ns |    41.8166 ns |    75.4039 ns |  2,096.184 ns | 0.1329 |     - |     - |     952 B |
|                  Parse | 71,308.622 ns | 1,425.8762 ns | 2,571.1489 ns | 70,522.106 ns | 6.4770 |     - |     - |   44816 B |
|          TryParseValid | 71,958.237 ns | 1,423.2421 ns | 1,694.2685 ns | 72,306.140 ns | 6.6983 |     - |     - |   44792 B |
|        TryParseInvalid | 75,659.190 ns | 1,486.2386 ns | 2,034.3802 ns | 75,915.308 ns | 6.3842 |     - |     - |   44392 B |
|           QuantityFrom |  2,153.608 ns |    55.8594 ns |   162.0583 ns |  2,100.000 ns |      - |     - |     - |      56 B |
|           IQuantity_As |     19.025 ns |     0.4205 ns |     0.5468 ns |     18.986 ns | 0.0036 |     - |     - |      24 B |
|        IQuantity_As_SI |    547.863 ns |    10.7095 ns |    14.6593 ns |    544.937 ns | 0.0257 |     - |     - |     192 B |
|       IQuantity_ToUnit |     29.953 ns |     0.6782 ns |     1.0559 ns |     29.774 ns | 0.0087 |     - |     - |      56 B |
| IQuantity_ToStringTest |  2,188.420 ns |    43.7642 ns |    66.8326 ns |  2,189.487 ns | 0.1361 |     - |     - |     952 B |
