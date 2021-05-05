``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8272CL CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-DOYYIA : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                 Method |          Mean |         Error |      StdDev |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|------------:|-------:|-------:|------:|----------:|
|            Constructor |      9.605 ns |     0.1916 ns |   0.0105 ns |      - |      - |     - |         - |
|         Constructor_SI |    306.590 ns |    39.8873 ns |   2.1864 ns | 0.0100 |      - |     - |     192 B |
|             FromMethod |     24.279 ns |     0.7483 ns |   0.0410 ns |      - |      - |     - |         - |
|             ToProperty |      9.138 ns |     0.4219 ns |   0.0231 ns |      - |      - |     - |         - |
|                     As |      8.464 ns |     0.4861 ns |   0.0266 ns |      - |      - |     - |         - |
|                  As_SI |    298.520 ns |    25.8114 ns |   1.4148 ns | 0.0100 |      - |     - |     192 B |
|                 ToUnit |     16.265 ns |     0.2231 ns |   0.0122 ns |      - |      - |     - |         - |
|              ToUnit_SI |    309.626 ns |    24.6884 ns |   1.3533 ns | 0.0100 |      - |     - |     192 B |
|           ToStringTest |  1,205.955 ns |    94.3112 ns |   5.1695 ns | 0.0496 |      - |     - |     944 B |
|                  Parse | 40,975.926 ns | 2,351.5892 ns | 128.8985 ns | 1.7700 | 0.0610 |     - |   33344 B |
|          TryParseValid | 41,807.043 ns | 1,112.1910 ns |  60.9629 ns | 1.7700 | 0.0610 |     - |   33320 B |
|        TryParseInvalid | 44,357.182 ns | 1,037.7266 ns |  56.8813 ns | 1.7090 | 0.0610 |     - |   32928 B |
|           QuantityFrom |  2,900.000 ns | 7,952.2543 ns | 435.8899 ns |      - |      - |     - |      56 B |
|           IQuantity_As |     17.972 ns |     2.3379 ns |   0.1281 ns | 0.0013 |      - |     - |      24 B |
|        IQuantity_As_SI |    305.063 ns |    11.6686 ns |   0.6396 ns | 0.0100 |      - |     - |     192 B |
|       IQuantity_ToUnit |     24.307 ns |     7.3878 ns |   0.4049 ns | 0.0030 |      - |     - |      56 B |
| IQuantity_ToStringTest |  1,285.464 ns |   194.7099 ns |  10.6727 ns | 0.0496 |      - |     - |     944 B |
