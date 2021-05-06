``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-ERHUNN : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                 Method |          Mean |         Error |        StdDev |        Median |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     11.631 ns |     0.2578 ns |     0.2532 ns |     11.543 ns |      - |      - |     - |         - |
|         Constructor_SI |    440.801 ns |     6.6950 ns |     5.5906 ns |    438.391 ns | 0.0300 |      - |     - |     201 B |
|             FromMethod |     31.788 ns |     0.3533 ns |     0.3132 ns |     31.838 ns |      - |      - |     - |         - |
|             ToProperty |      7.266 ns |     0.1370 ns |     0.1215 ns |      7.257 ns |      - |      - |     - |         - |
|                     As |      7.256 ns |     0.1667 ns |     0.1638 ns |      7.208 ns |      - |      - |     - |         - |
|                  As_SI |    443.406 ns |     7.6454 ns |     6.7775 ns |    442.412 ns | 0.0300 |      - |     - |     201 B |
|                 ToUnit |     17.904 ns |     0.3593 ns |     0.5595 ns |     17.775 ns |      - |      - |     - |         - |
|              ToUnit_SI |    457.059 ns |     6.2078 ns |     5.8068 ns |    455.778 ns | 0.0300 |      - |     - |     201 B |
|           ToStringTest |  1,564.115 ns |    27.5831 ns |    24.4517 ns |  1,568.949 ns | 0.1907 |      - |     - |    1244 B |
|                  Parse | 49,874.959 ns |   728.4600 ns |   645.7609 ns | 49,970.114 ns | 8.4229 | 0.3662 |     - |   54376 B |
|          TryParseValid | 50,494.089 ns |   986.4762 ns | 1,096.4657 ns | 50,090.234 ns | 8.1787 | 0.2441 |     - |   54353 B |
|        TryParseInvalid | 53,298.895 ns | 1,063.3927 ns |   942.6699 ns | 52,965.771 ns | 8.3618 | 0.3052 |     - |   53895 B |
|           QuantityFrom |  1,956.842 ns |    54.9085 ns |   157.5427 ns |  1,900.000 ns |      - |      - |     - |    8192 B |
|           IQuantity_As |     16.186 ns |     0.2813 ns |     0.2493 ns |     16.129 ns | 0.0037 |      - |     - |      24 B |
|        IQuantity_As_SI |    439.603 ns |     3.8414 ns |     3.2078 ns |    439.694 ns | 0.0300 |      - |     - |     201 B |
|       IQuantity_ToUnit |     26.247 ns |     0.3383 ns |     0.2641 ns |     26.261 ns | 0.0087 |      - |     - |      56 B |
| IQuantity_ToStringTest |  1,548.115 ns |    20.6453 ns |    17.2398 ns |  1,550.583 ns | 0.1907 |      - |     - |    1244 B |
|             Min_Double |  7,670.193 ns |   145.6380 ns |   136.2299 ns |  7,650.130 ns |      - |      - |     - |         - |
