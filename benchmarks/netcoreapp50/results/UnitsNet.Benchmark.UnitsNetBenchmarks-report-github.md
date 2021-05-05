``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-ZMWLBQ : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                 Method |         Mean |         Error |       StdDev |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |-------------:|--------------:|-------------:|-------:|-------:|------:|----------:|
|            Constructor |     11.46 ns |      2.924 ns |     0.160 ns |      - |      - |     - |         - |
|         Constructor_SI |    375.91 ns |     86.626 ns |     4.748 ns | 0.0100 |      - |     - |     192 B |
|             FromMethod |     29.09 ns |      7.554 ns |     0.414 ns |      - |      - |     - |         - |
|             ToProperty |     10.13 ns |      2.531 ns |     0.139 ns |      - |      - |     - |         - |
|                     As |     10.15 ns |      3.947 ns |     0.216 ns |      - |      - |     - |         - |
|                  As_SI |    381.18 ns |     85.504 ns |     4.687 ns | 0.0100 |      - |     - |     192 B |
|                 ToUnit |     19.35 ns |      3.281 ns |     0.180 ns |      - |      - |     - |         - |
|              ToUnit_SI |    378.63 ns |     82.020 ns |     4.496 ns | 0.0100 |      - |     - |     192 B |
|           ToStringTest |  1,385.62 ns |    934.233 ns |    51.208 ns | 0.0496 |      - |     - |     944 B |
|                  Parse | 49,976.56 ns | 16,698.740 ns |   915.314 ns | 1.7700 | 0.0610 |     - |   33344 B |
|          TryParseValid | 51,146.29 ns | 46,239.722 ns | 2,534.555 ns | 1.7700 | 0.0610 |     - |   33320 B |
|        TryParseInvalid | 54,726.87 ns | 14,518.171 ns |   795.790 ns | 1.7090 | 0.0610 |     - |   32928 B |
|           QuantityFrom |  3,333.33 ns |  6,406.985 ns |   351.188 ns |      - |      - |     - |      56 B |
|           IQuantity_As |     24.15 ns |      6.101 ns |     0.334 ns | 0.0013 |      - |     - |      24 B |
|        IQuantity_As_SI |    368.25 ns |     99.264 ns |     5.441 ns | 0.0100 |      - |     - |     192 B |
|       IQuantity_ToUnit |     32.95 ns |      5.770 ns |     0.316 ns | 0.0030 |      - |     - |      56 B |
| IQuantity_ToStringTest |  1,422.50 ns |    308.600 ns |    16.915 ns | 0.0496 |      - |     - |     944 B |
