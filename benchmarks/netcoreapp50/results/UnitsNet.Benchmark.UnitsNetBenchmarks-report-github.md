``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-OKVZFG : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationTime=125.0000 ms  

```
|                 Method |           Mean |         Error |        StdDev |         Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------------- |---------------:|--------------:|--------------:|---------------:|-------:|------:|------:|----------:|
|            Constructor |      10.828 ns |     0.2618 ns |     0.2571 ns |      10.795 ns |      - |     - |     - |         - |
|         Constructor_SI |     362.450 ns |     5.4186 ns |     5.0685 ns |     362.392 ns | 0.0117 |     - |     - |     192 B |
|             FromMethod |      29.257 ns |     0.4351 ns |     0.3857 ns |      29.120 ns |      - |     - |     - |         - |
|             ToProperty |       9.061 ns |     0.1718 ns |     0.1523 ns |       9.045 ns |      - |     - |     - |         - |
|                     As |       8.995 ns |     0.1333 ns |     0.1113 ns |       8.992 ns |      - |     - |     - |         - |
|                  As_SI |     377.088 ns |     4.2863 ns |     3.7997 ns |     377.106 ns | 0.0119 |     - |     - |     192 B |
|                 ToUnit |      19.118 ns |     0.4237 ns |     0.4709 ns |      18.941 ns |      - |     - |     - |         - |
|              ToUnit_SI |     381.903 ns |     7.4538 ns |     7.6545 ns |     382.347 ns | 0.0092 |     - |     - |     192 B |
|           ToStringTest |  22,704.819 ns |   633.3613 ns | 1,690.5695 ns |  22,600.000 ns |      - |     - |     - |     944 B |
|                  Parse | 123,469.118 ns | 2,466.3829 ns | 5,909.2959 ns | 124,050.000 ns |      - |     - |     - |   33632 B |
|          TryParseValid | 124,026.087 ns | 2,916.9626 ns | 8,227.3448 ns | 120,300.000 ns |      - |     - |     - |   33608 B |
|        TryParseInvalid | 121,826.866 ns | 2,420.9057 ns | 5,753.5386 ns | 122,100.000 ns |      - |     - |     - |   33216 B |
|           QuantityFrom |   3,768.182 ns |    69.0761 ns |   162.8204 ns |   3,750.000 ns |      - |     - |     - |      56 B |
|           IQuantity_As |      21.256 ns |     0.4587 ns |     0.6579 ns |      21.373 ns | 0.0014 |     - |     - |      24 B |
|        IQuantity_As_SI |     376.812 ns |     7.4516 ns |     7.3185 ns |     376.616 ns | 0.0093 |     - |     - |     192 B |
|       IQuantity_ToUnit |      29.558 ns |     0.8225 ns |     2.4252 ns |      29.202 ns | 0.0035 |     - |     - |      56 B |
| IQuantity_ToStringTest |  20,927.500 ns |   415.9579 ns |   739.3648 ns |  21,000.000 ns |      - |     - |     - |     944 B |
