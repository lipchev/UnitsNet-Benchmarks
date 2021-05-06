``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-IPTRIS : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                 Method |          Mean |       Error |      StdDev |        Median |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|------------:|------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     11.531 ns |   0.1681 ns |   0.1573 ns |     11.582 ns |      - |      - |     - |         - |
|         Constructor_SI |    409.057 ns |   3.3919 ns |   3.1728 ns |    409.230 ns | 0.0100 |      - |     - |     192 B |
|             FromMethod |     30.109 ns |   0.3740 ns |   0.3499 ns |     30.083 ns |      - |      - |     - |         - |
|             ToProperty |      9.546 ns |   0.0971 ns |   0.0909 ns |      9.527 ns |      - |      - |     - |         - |
|                     As |      9.918 ns |   0.0984 ns |   0.0920 ns |      9.935 ns |      - |      - |     - |         - |
|                  As_SI |    388.866 ns |   2.8496 ns |   2.5261 ns |    388.517 ns | 0.0100 |      - |     - |     192 B |
|                 ToUnit |     19.816 ns |   0.1620 ns |   0.1515 ns |     19.824 ns |      - |      - |     - |         - |
|              ToUnit_SI |    395.500 ns |   2.7326 ns |   2.5561 ns |    396.026 ns | 0.0100 |      - |     - |     192 B |
|           ToStringTest |  1,552.144 ns |  14.4906 ns |  12.8455 ns |  1,552.690 ns | 0.0496 |      - |     - |     944 B |
|                  Parse | 52,790.627 ns | 631.7495 ns | 590.9388 ns | 52,958.093 ns | 1.7700 | 0.0610 |     - |   33344 B |
|          TryParseValid | 52,960.780 ns | 439.3473 ns | 410.9658 ns | 52,980.902 ns | 1.7700 | 0.0610 |     - |   33320 B |
|        TryParseInvalid | 56,398.320 ns | 442.3563 ns | 392.1373 ns | 56,315.381 ns | 1.7090 | 0.0610 |     - |   32928 B |
|           QuantityFrom |  3,051.471 ns |  60.9724 ns | 146.0859 ns |  3,000.000 ns |      - |      - |     - |      56 B |
|           IQuantity_As |     24.115 ns |   0.1640 ns |   0.1370 ns |     24.089 ns | 0.0013 |      - |     - |      24 B |
|        IQuantity_As_SI |    399.162 ns |   1.9283 ns |   1.8037 ns |    399.588 ns | 0.0100 |      - |     - |     192 B |
|       IQuantity_ToUnit |     35.960 ns |   0.2668 ns |   0.2365 ns |     35.870 ns | 0.0030 |      - |     - |      56 B |
| IQuantity_ToStringTest |  1,549.461 ns |  13.8153 ns |  11.5364 ns |  1,549.808 ns | 0.0496 |      - |     - |     944 B |
|             Min_Double | 10,216.534 ns |  83.9043 ns |  74.3790 ns | 10,219.709 ns |      - |      - |     - |         - |
