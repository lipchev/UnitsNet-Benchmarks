``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-CLBGVH : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationTime=125.0000 ms  

```
|                 Method |          Mean |        Error |       StdDev |        Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|-------------:|-------------:|--------------:|-------:|------:|------:|----------:|
|            Constructor |      15.27 ns |     0.352 ns |     0.406 ns |      14.99 ns |      - |     - |     - |         - |
|         Constructor_SI |     610.12 ns |    11.802 ns |    10.462 ns |     607.38 ns | 0.0193 |     - |     - |     201 B |
|             FromMethod |      35.94 ns |     0.732 ns |     0.684 ns |      35.98 ns |      - |     - |     - |         - |
|             ToProperty |      10.56 ns |     0.255 ns |     0.374 ns |      10.34 ns |      - |     - |     - |         - |
|                     As |      10.41 ns |     0.198 ns |     0.185 ns |      10.33 ns |      - |     - |     - |         - |
|                  As_SI |     597.81 ns |     4.710 ns |     3.933 ns |     596.90 ns | 0.0193 |     - |     - |     201 B |
|                 ToUnit |      23.71 ns |     0.507 ns |     0.604 ns |      23.83 ns |      - |     - |     - |         - |
|              ToUnit_SI |     624.21 ns |    12.409 ns |    14.290 ns |     622.04 ns | 0.0197 |     - |     - |     201 B |
|           ToStringTest |  18,653.93 ns |   371.552 ns | 1,029.569 ns |  18,500.00 ns |      - |     - |     - |    8192 B |
|                  Parse | 107,830.56 ns | 1,925.289 ns | 3,216.726 ns | 106,950.00 ns |      - |     - |     - |   57344 B |
|          TryParseValid | 109,091.89 ns | 2,127.095 ns | 3,611.969 ns | 108,600.00 ns |      - |     - |     - |   57344 B |
|        TryParseInvalid | 110,300.00 ns | 2,192.509 ns | 2,345.960 ns | 109,550.00 ns |      - |     - |     - |   57344 B |
|           QuantityFrom |   1,996.97 ns |    34.078 ns |    80.326 ns |   2,000.00 ns |      - |     - |     - |    8192 B |
|           IQuantity_As |      23.67 ns |     0.481 ns |     0.804 ns |      23.51 ns | 0.0033 |     - |     - |      24 B |
|        IQuantity_As_SI |     604.54 ns |    10.240 ns |    12.950 ns |     599.08 ns | 0.0191 |     - |     - |     201 B |
|       IQuantity_ToUnit |      34.18 ns |     0.738 ns |     0.654 ns |      33.93 ns | 0.0080 |     - |     - |      56 B |
| IQuantity_ToStringTest |  18,441.76 ns |   366.009 ns | 1,026.327 ns |  18,300.00 ns |      - |     - |     - |    8192 B |
