``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-GNWQHK : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                 Method |          Mean |         Error |        StdDev |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|-------:|------:|------:|----------:|
|            Constructor |     10.618 ns |     0.1419 ns |     0.1257 ns |      - |     - |     - |         - |
|         Constructor_SI |    356.389 ns |     7.0204 ns |     6.5669 ns | 0.0072 |     - |     - |     192 B |
|             FromMethod |     29.070 ns |     0.5662 ns |     0.5561 ns |      - |     - |     - |         - |
|             ToProperty |      9.268 ns |     0.1291 ns |     0.1144 ns |      - |     - |     - |         - |
|                     As |      8.574 ns |     0.1922 ns |     0.1797 ns |      - |     - |     - |         - |
|                  As_SI |    363.888 ns |     7.3349 ns |     6.5022 ns | 0.0072 |     - |     - |     192 B |
|                 ToUnit |     19.219 ns |     0.4256 ns |     0.9341 ns |      - |     - |     - |         - |
|              ToUnit_SI |    369.366 ns |     7.1694 ns |     7.0413 ns | 0.0072 |     - |     - |     192 B |
|           ToStringTest |  1,480.628 ns |    28.5491 ns |    35.0609 ns | 0.0343 |     - |     - |     944 B |
|                  Parse | 53,785.369 ns |   706.9320 ns |   661.2646 ns | 1.2207 |     - |     - |   33344 B |
|          TryParseValid | 55,783.978 ns | 1,062.8103 ns | 1,137.1952 ns | 1.2207 |     - |     - |   33320 B |
|        TryParseInvalid | 54,296.478 ns |   916.1897 ns |   857.0044 ns | 1.2207 |     - |     - |   32929 B |
|           QuantityFrom |  3,132.609 ns |    75.6423 ns |   213.3504 ns |      - |     - |     - |      56 B |
|           IQuantity_As |     21.323 ns |     0.4563 ns |     0.6092 ns | 0.0009 |     - |     - |      24 B |
|        IQuantity_As_SI |    361.354 ns |     6.7659 ns |     6.6451 ns | 0.0072 |     - |     - |     192 B |
|       IQuantity_ToUnit |     29.782 ns |     0.6873 ns |     0.8693 ns | 0.0021 |     - |     - |      56 B |
| IQuantity_ToStringTest |  1,520.797 ns |    19.6734 ns |    16.4282 ns | 0.0343 |     - |     - |     944 B |
