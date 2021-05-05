``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-DQHXZK : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                 Method |          Mean |         Error |      StdDev |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|------------:|-------:|------:|------:|----------:|
|            Constructor |     10.669 ns |      4.881 ns |   0.2675 ns |      - |     - |     - |         - |
|         Constructor_SI |    363.382 ns |     79.432 ns |   4.3540 ns | 0.0072 |     - |     - |     192 B |
|             FromMethod |     29.248 ns |     10.480 ns |   0.5744 ns |      - |     - |     - |         - |
|             ToProperty |      9.425 ns |      7.831 ns |   0.4292 ns |      - |     - |     - |         - |
|                     As |      8.579 ns |      2.413 ns |   0.1323 ns |      - |     - |     - |         - |
|                  As_SI |    357.641 ns |     74.653 ns |   4.0920 ns | 0.0072 |     - |     - |     192 B |
|                 ToUnit |     18.505 ns |      8.174 ns |   0.4481 ns |      - |     - |     - |         - |
|              ToUnit_SI |    374.000 ns |     59.189 ns |   3.2443 ns | 0.0072 |     - |     - |     192 B |
|           ToStringTest |  1,466.811 ns |  1,016.467 ns |  55.7160 ns | 0.0343 |     - |     - |     944 B |
|                  Parse | 55,980.098 ns | 10,201.695 ns | 559.1893 ns | 1.2207 |     - |     - |   33344 B |
|          TryParseValid | 53,202.812 ns | 11,234.334 ns | 615.7918 ns | 1.2207 |     - |     - |   33320 B |
|        TryParseInvalid | 57,108.374 ns | 14,843.228 ns | 813.6074 ns | 1.2207 |     - |     - |   32928 B |
|           QuantityFrom |  3,033.333 ns |  2,786.775 ns | 152.7525 ns |      - |     - |     - |      56 B |
|           IQuantity_As |     20.971 ns |     18.257 ns |   1.0007 ns | 0.0009 |     - |     - |      24 B |
|        IQuantity_As_SI |    372.939 ns |     96.045 ns |   5.2646 ns | 0.0072 |     - |     - |     192 B |
|       IQuantity_ToUnit |     30.336 ns |     18.066 ns |   0.9903 ns | 0.0021 |     - |     - |      56 B |
| IQuantity_ToStringTest |  1,536.550 ns |    519.931 ns |  28.4992 ns | 0.0343 |     - |     - |     944 B |
