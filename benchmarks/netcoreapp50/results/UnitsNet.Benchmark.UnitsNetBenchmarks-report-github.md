``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-GZWRZV : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationTime=125.0000 ms  

```
|                 Method |           Mean |         Error |        StdDev |         Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------------- |---------------:|--------------:|--------------:|---------------:|-------:|------:|------:|----------:|
|            Constructor |      10.848 ns |     0.2381 ns |     0.1989 ns |      10.883 ns |      - |     - |     - |         - |
|         Constructor_SI |     339.272 ns |     6.7823 ns |    17.9857 ns |     338.794 ns | 0.0118 |     - |     - |     192 B |
|             FromMethod |      29.399 ns |     0.6345 ns |     0.8024 ns |      29.419 ns |      - |     - |     - |         - |
|             ToProperty |       9.136 ns |     0.2112 ns |     0.3698 ns |       9.080 ns |      - |     - |     - |         - |
|                     As |       8.757 ns |     0.2227 ns |     0.3265 ns |       8.758 ns |      - |     - |     - |         - |
|                  As_SI |     366.817 ns |     7.1517 ns |    11.5487 ns |     364.879 ns | 0.0115 |     - |     - |     192 B |
|                 ToUnit |      18.987 ns |     0.4213 ns |     0.8218 ns |      18.985 ns |      - |     - |     - |         - |
|              ToUnit_SI |     355.709 ns |     7.0899 ns |    15.1091 ns |     358.279 ns | 0.0119 |     - |     - |     192 B |
|           ToStringTest |  19,009.524 ns |   378.4672 ns |   692.0488 ns |  18,800.000 ns |      - |     - |     - |     944 B |
|                  Parse | 117,634.483 ns | 2,331.1731 ns | 3,417.0033 ns | 116,500.000 ns |      - |     - |     - |   33632 B |
|          TryParseValid | 122,597.938 ns | 3,118.7523 ns | 9,048.0659 ns | 119,700.000 ns |      - |     - |     - |   33608 B |
|        TryParseInvalid | 116,522.222 ns | 2,266.3844 ns | 2,425.0059 ns | 115,400.000 ns |      - |     - |     - |   33216 B |
|           QuantityFrom |   3,383.673 ns |    66.5126 ns |   132.8328 ns |   3,400.000 ns |      - |     - |     - |      56 B |
|           IQuantity_As |      18.806 ns |     0.4543 ns |     1.3396 ns |      18.795 ns | 0.0015 |     - |     - |      24 B |
|        IQuantity_As_SI |     357.583 ns |     7.0670 ns |    13.0992 ns |     360.699 ns | 0.0112 |     - |     - |     192 B |
|       IQuantity_ToUnit |      27.247 ns |     0.6632 ns |     1.3547 ns |      27.146 ns | 0.0035 |     - |     - |      56 B |
| IQuantity_ToStringTest |   1,488.098 ns |    37.1430 ns |   108.9341 ns |   1,493.817 ns | 0.0527 |     - |     - |     944 B |
