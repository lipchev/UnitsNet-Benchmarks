``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-WFTVDN : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=100  
LaunchCount=3  WarmupCount=15  

```
|                 Method |          Mean |       Error |        StdDev |        Median |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|------------:|--------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     10.386 ns |   0.0458 ns |     0.2367 ns |     10.366 ns |      - |      - |     - |         - |
|         Constructor_SI |    347.489 ns |   3.1141 ns |    16.0357 ns |    348.169 ns | 0.0119 |      - |     - |     192 B |
|             FromMethod |     29.390 ns |   0.1626 ns |     0.8474 ns |     29.376 ns |      - |      - |     - |         - |
|             ToProperty |      9.377 ns |   0.1245 ns |     0.6489 ns |      9.514 ns |      - |      - |     - |         - |
|                     As |      9.121 ns |   0.0782 ns |     0.4068 ns |      9.121 ns |      - |      - |     - |         - |
|                  As_SI |    355.525 ns |   2.1184 ns |    10.9461 ns |    355.927 ns | 0.0119 |      - |     - |     192 B |
|                 ToUnit |     18.639 ns |   0.0996 ns |     0.5164 ns |     18.561 ns |      - |      - |     - |         - |
|              ToUnit_SI |    362.054 ns |   2.4384 ns |    12.7084 ns |    362.249 ns | 0.0119 |      - |     - |     192 B |
|           ToStringTest |  1,473.031 ns |  13.1996 ns |    68.7927 ns |  1,469.181 ns | 0.0591 |      - |     - |     944 B |
|                  Parse | 50,941.611 ns | 336.6952 ns | 1,745.7963 ns | 50,832.025 ns | 2.0752 | 0.0610 |     - |   33344 B |
|          TryParseValid | 52,634.828 ns | 361.8005 ns | 1,879.1889 ns | 52,313.705 ns | 2.0752 | 0.0610 |     - |   33320 B |
|        TryParseInvalid | 55,327.756 ns | 387.4677 ns | 2,009.0565 ns | 55,023.755 ns | 2.0752 | 0.0610 |     - |   32928 B |
|           QuantityFrom |  3,340.493 ns |  48.1676 ns |   244.1132 ns |  3,400.000 ns |      - |      - |     - |      56 B |
|           IQuantity_As |     22.004 ns |   0.1121 ns |     0.5782 ns |     22.061 ns | 0.0015 |      - |     - |      24 B |
|        IQuantity_As_SI |    382.411 ns |   0.8723 ns |     4.4919 ns |    381.991 ns | 0.0119 |      - |     - |     192 B |
|       IQuantity_ToUnit |     36.359 ns |   0.1444 ns |     0.7513 ns |     36.333 ns | 0.0035 |      - |     - |      56 B |
| IQuantity_ToStringTest |  1,600.279 ns |   5.8207 ns |    30.2844 ns |  1,592.965 ns | 0.0591 |      - |     - |     944 B |
