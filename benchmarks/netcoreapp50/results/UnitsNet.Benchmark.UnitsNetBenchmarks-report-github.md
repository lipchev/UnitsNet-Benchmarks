``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-PYDZPN : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                 Method |          Mean |       Error |        StdDev |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     10.397 ns |   0.2236 ns |     0.2575 ns |      - |      - |     - |         - |
|         Constructor_SI |    338.251 ns |   5.9390 ns |     8.1293 ns | 0.0119 |      - |     - |     192 B |
|             FromMethod |     27.691 ns |   0.3147 ns |     0.2789 ns |      - |      - |     - |         - |
|             ToProperty |      8.297 ns |   0.0967 ns |     0.0807 ns |      - |      - |     - |         - |
|                     As |      8.427 ns |   0.1876 ns |     0.1927 ns |      - |      - |     - |         - |
|                  As_SI |    347.348 ns |   6.9744 ns |    12.0305 ns | 0.0119 |      - |     - |     192 B |
|                 ToUnit |     17.966 ns |   0.3625 ns |     0.4174 ns |      - |      - |     - |         - |
|              ToUnit_SI |    349.320 ns |   5.5856 ns |     4.9515 ns | 0.0119 |      - |     - |     192 B |
|           ToStringTest |  1,320.191 ns |   8.0872 ns |     6.3139 ns | 0.0591 |      - |     - |     944 B |
|                  Parse | 48,712.598 ns | 952.0754 ns | 1,058.2293 ns | 2.0752 | 0.0610 |     - |   33344 B |
|          TryParseValid | 48,484.365 ns | 812.2703 ns |   720.0565 ns | 2.0752 | 0.0610 |     - |   33321 B |
|        TryParseInvalid | 52,571.764 ns | 482.4877 ns |   402.8991 ns | 2.0752 | 0.0610 |     - |   32928 B |
|           QuantityFrom |  3,206.250 ns |  77.7144 ns |   224.2238 ns |      - |      - |     - |      56 B |
|           IQuantity_As |     18.008 ns |   0.2119 ns |     0.1878 ns | 0.0015 |      - |     - |      24 B |
|        IQuantity_As_SI |    331.041 ns |   5.8768 ns |     5.4972 ns | 0.0119 |      - |     - |     192 B |
|       IQuantity_ToUnit |     26.030 ns |   0.4900 ns |     0.4344 ns | 0.0035 |      - |     - |      56 B |
| IQuantity_ToStringTest |  1,372.397 ns |  26.4639 ns |    30.4759 ns | 0.0591 |      - |     - |     944 B |
