``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-LFKULM : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=100  
LaunchCount=3  WarmupCount=15  

```
|                 Method |          Mean |       Error |        StdDev |        Median |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|------------:|--------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     10.470 ns |   0.0481 ns |     0.2501 ns |     10.447 ns |      - |      - |     - |         - |
|         Constructor_SI |    338.510 ns |   2.1139 ns |    10.9983 ns |    337.929 ns | 0.0119 |      - |     - |     192 B |
|             FromMethod |     29.033 ns |   0.1539 ns |     0.8021 ns |     29.077 ns |      - |      - |     - |         - |
|             ToProperty |      9.191 ns |   0.0997 ns |     0.5169 ns |      9.178 ns |      - |      - |     - |         - |
|                     As |      8.930 ns |   0.1000 ns |     0.5138 ns |      8.801 ns |      - |      - |     - |         - |
|                  As_SI |    349.483 ns |   2.6049 ns |    13.5759 ns |    350.790 ns | 0.0119 |      - |     - |     192 B |
|                 ToUnit |     18.319 ns |   0.1138 ns |     0.5922 ns |     18.206 ns |      - |      - |     - |         - |
|              ToUnit_SI |    357.901 ns |   2.5594 ns |    13.2249 ns |    358.361 ns | 0.0119 |      - |     - |     192 B |
|           ToStringTest |  1,433.998 ns |  11.4903 ns |    59.6806 ns |  1,427.603 ns | 0.0591 |      - |     - |     944 B |
|                  Parse | 51,864.397 ns | 431.7162 ns | 2,238.4894 ns | 51,561.609 ns | 2.0752 | 0.0610 |     - |   33344 B |
|          TryParseValid | 50,585.196 ns | 362.3033 ns | 1,878.5770 ns | 50,422.760 ns | 2.0752 | 0.0610 |     - |   33320 B |
|        TryParseInvalid | 54,692.716 ns | 437.4020 ns | 2,279.6266 ns | 54,733.041 ns | 2.0752 | 0.0610 |     - |   32928 B |
|           QuantityFrom |  3,598.969 ns |  44.8057 ns |   229.9152 ns |  3,600.000 ns |      - |      - |     - |      56 B |
|           IQuantity_As |     19.138 ns |   0.1952 ns |     1.0086 ns |     19.020 ns | 0.0015 |      - |     - |      24 B |
|        IQuantity_As_SI |    365.450 ns |   1.9220 ns |    10.0167 ns |    367.936 ns | 0.0119 |      - |     - |     192 B |
|       IQuantity_ToUnit |     29.432 ns |   0.5024 ns |     2.6052 ns |     28.609 ns | 0.0035 |      - |     - |      56 B |
| IQuantity_ToStringTest |  1,413.094 ns |  10.1730 ns |    52.7480 ns |  1,406.568 ns | 0.0591 |      - |     - |     944 B |
