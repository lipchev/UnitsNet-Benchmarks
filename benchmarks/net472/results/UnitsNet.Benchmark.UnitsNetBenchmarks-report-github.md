``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-UIMXTQ : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                 Method |          Mean |         Error |        StdDev |        Median |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     14.250 ns |     0.3039 ns |     0.2985 ns |     14.214 ns |      - |      - |     - |         - |
|         Constructor_SI |    554.132 ns |     6.2562 ns |     5.5460 ns |    552.731 ns | 0.0296 |      - |     - |     201 B |
|             FromMethod |     33.937 ns |     0.5522 ns |     0.5165 ns |     34.032 ns |      - |      - |     - |         - |
|             ToProperty |      9.641 ns |     0.2341 ns |     0.2787 ns |      9.624 ns |      - |      - |     - |         - |
|                     As |      9.356 ns |     0.2216 ns |     0.1964 ns |      9.404 ns |      - |      - |     - |         - |
|                  As_SI |    554.609 ns |    10.9334 ns |     9.6922 ns |    554.064 ns | 0.0296 |      - |     - |     201 B |
|                 ToUnit |     22.979 ns |     0.4386 ns |     0.4102 ns |     22.950 ns |      - |      - |     - |         - |
|              ToUnit_SI |    568.600 ns |    11.0794 ns |    13.6065 ns |    569.678 ns | 0.0296 |      - |     - |     201 B |
|           ToStringTest |  2,209.903 ns |    37.0378 ns |    30.9283 ns |  2,205.890 ns | 0.1869 |      - |     - |    1244 B |
|                  Parse | 57,696.416 ns | 1,109.3503 ns | 1,320.6026 ns | 57,690.796 ns | 8.4839 | 0.3052 |     - |   54376 B |
|          TryParseValid | 58,230.326 ns | 1,143.2198 ns | 1,486.5086 ns | 57,955.484 ns | 8.4839 | 0.3052 |     - |   54352 B |
|        TryParseInvalid | 63,673.447 ns | 1,256.4772 ns | 1,841.7281 ns | 63,670.447 ns | 8.3008 | 0.2441 |     - |   53896 B |
|           QuantityFrom |  1,968.421 ns |    39.0302 ns |    84.8484 ns |  2,000.000 ns |      - |      - |     - |    8192 B |
|           IQuantity_As |     22.341 ns |     0.4224 ns |     0.5188 ns |     22.320 ns | 0.0038 |      - |     - |      24 B |
|        IQuantity_As_SI |    543.329 ns |    10.3672 ns |    12.7319 ns |    541.545 ns | 0.0296 |      - |     - |     201 B |
|       IQuantity_ToUnit |     34.148 ns |     0.7987 ns |     0.8202 ns |     34.217 ns | 0.0088 |      - |     - |      56 B |
| IQuantity_ToStringTest |  2,183.887 ns |    43.4427 ns |   118.1892 ns |  2,164.644 ns | 0.1869 |      - |     - |    1244 B |
|             Min_Double |  9,073.887 ns |   177.0324 ns |   189.4227 ns |  9,055.631 ns |      - |      - |     - |         - |
