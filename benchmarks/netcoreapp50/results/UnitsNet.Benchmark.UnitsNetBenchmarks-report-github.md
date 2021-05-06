``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-AWZQJC : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                 Method |          Mean |       Error |      StdDev |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|------------:|------------:|-------:|-------:|------:|----------:|
|            Constructor |     11.445 ns |   0.2565 ns |   0.2399 ns |      - |      - |     - |         - |
|         Constructor_SI |    358.903 ns |   5.9150 ns |   7.2642 ns | 0.0119 |      - |     - |     192 B |
|             FromMethod |     30.754 ns |   0.5455 ns |   0.5103 ns |      - |      - |     - |         - |
|             ToProperty |     10.031 ns |   0.1842 ns |   0.1632 ns |      - |      - |     - |         - |
|                     As |      9.933 ns |   0.1904 ns |   0.1781 ns |      - |      - |     - |         - |
|                  As_SI |    370.874 ns |   6.5631 ns |   5.8180 ns | 0.0119 |      - |     - |     192 B |
|                 ToUnit |     19.362 ns |   0.2501 ns |   0.2340 ns |      - |      - |     - |         - |
|              ToUnit_SI |    367.440 ns |   6.5914 ns |   6.1656 ns | 0.0119 |      - |     - |     192 B |
|           ToStringTest |  1,567.268 ns |  15.7615 ns |  13.9722 ns | 0.0591 |      - |     - |     944 B |
|                  Parse | 53,590.878 ns | 616.8578 ns | 546.8283 ns | 2.0752 | 0.0610 |     - |   33344 B |
|          TryParseValid | 53,141.456 ns | 991.1195 ns | 927.0938 ns | 2.0752 | 0.0610 |     - |   33320 B |
|        TryParseInvalid | 57,421.170 ns | 930.0324 ns | 824.4495 ns | 2.0752 |      - |     - |   32928 B |
|           QuantityFrom |  3,377.320 ns |  84.3582 ns | 244.7384 ns |      - |      - |     - |      56 B |
|           IQuantity_As |     20.148 ns |   0.3770 ns |   0.3342 ns | 0.0015 |      - |     - |      24 B |
|        IQuantity_As_SI |    363.823 ns |   6.2325 ns |   5.5250 ns | 0.0119 |      - |     - |     192 B |
|       IQuantity_ToUnit |     29.561 ns |   0.6823 ns |   0.8379 ns | 0.0035 |      - |     - |      56 B |
| IQuantity_ToStringTest |  1,464.137 ns |  24.9199 ns |  23.3101 ns | 0.0591 |      - |     - |     944 B |
