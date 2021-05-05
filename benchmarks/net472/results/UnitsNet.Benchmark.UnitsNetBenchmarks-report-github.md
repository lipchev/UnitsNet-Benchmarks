``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-YYGQPZ : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                 Method |          Mean |          Error |        StdDev |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|---------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     14.739 ns |      1.5968 ns |     0.0875 ns |      - |      - |     - |         - |
|         Constructor_SI |    565.590 ns |    116.6989 ns |     6.3967 ns | 0.0296 |      - |     - |     201 B |
|             FromMethod |     35.886 ns |      6.7686 ns |     0.3710 ns |      - |      - |     - |         - |
|             ToProperty |      9.042 ns |      1.7090 ns |     0.0937 ns |      - |      - |     - |         - |
|                     As |      8.995 ns |      1.4740 ns |     0.0808 ns |      - |      - |     - |         - |
|                  As_SI |    556.549 ns |    116.2112 ns |     6.3699 ns | 0.0296 |      - |     - |     201 B |
|                 ToUnit |     22.546 ns |      0.9559 ns |     0.0524 ns |      - |      - |     - |         - |
|              ToUnit_SI |    577.871 ns |     64.6154 ns |     3.5418 ns | 0.0296 |      - |     - |     201 B |
|           ToStringTest |  1,989.170 ns |    366.0561 ns |    20.0648 ns | 0.1907 |      - |     - |    1244 B |
|                  Parse | 63,109.290 ns | 21,889.1782 ns | 1,199.8197 ns | 8.4229 | 0.2441 |     - |   54377 B |
|          TryParseValid | 62,241.073 ns |  7,565.4662 ns |   414.6887 ns | 8.4229 | 0.2441 |     - |   54353 B |
|        TryParseInvalid | 67,242.163 ns | 18,181.2476 ns |   996.5755 ns | 8.3008 | 0.2441 |     - |   53895 B |
|           QuantityFrom |  2,633.333 ns |  2,786.7747 ns |   152.7525 ns |      - |      - |     - |    8192 B |
|           IQuantity_As |     19.854 ns |      2.1669 ns |     0.1188 ns | 0.0038 |      - |     - |      24 B |
|        IQuantity_As_SI |    549.225 ns |     30.0186 ns |     1.6454 ns | 0.0296 |      - |     - |     201 B |
|       IQuantity_ToUnit |     31.615 ns |      2.1797 ns |     0.1195 ns | 0.0088 |      - |     - |      56 B |
| IQuantity_ToStringTest |  2,042.930 ns |    306.5213 ns |    16.8015 ns | 0.1907 |      - |     - |    1244 B |
