``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-JFSQGK : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                 Method |          Mean |         Error |        StdDev |        Median |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     14.263 ns |     0.2741 ns |     0.2289 ns |     14.202 ns |      - |      - |     - |         - |
|         Constructor_SI |    552.136 ns |     7.6840 ns |     6.8117 ns |    551.019 ns | 0.0286 |      - |     - |     201 B |
|             FromMethod |     37.012 ns |     0.7684 ns |     1.1263 ns |     37.413 ns |      - |      - |     - |         - |
|             ToProperty |      9.726 ns |     0.1863 ns |     0.1743 ns |      9.692 ns |      - |      - |     - |         - |
|                     As |      9.543 ns |     0.1451 ns |     0.1212 ns |      9.546 ns |      - |      - |     - |         - |
|                  As_SI |    626.192 ns |     7.6693 ns |     7.1739 ns |    624.901 ns | 0.0286 |      - |     - |     201 B |
|                 ToUnit |     23.390 ns |     0.2969 ns |     0.2479 ns |     23.289 ns |      - |      - |     - |         - |
|              ToUnit_SI |    630.225 ns |     8.9560 ns |     8.3775 ns |    631.222 ns | 0.0286 |      - |     - |     201 B |
|           ToStringTest |  2,284.198 ns |    44.9591 ns |    49.9719 ns |  2,282.159 ns | 0.1831 |      - |     - |    1244 B |
|                  Parse | 74,330.879 ns | 1,454.8702 ns | 1,494.0445 ns | 74,481.982 ns | 8.1787 | 0.2441 |     - |   54377 B |
|          TryParseValid | 74,676.311 ns | 1,475.8232 ns | 1,380.4860 ns | 74,619.641 ns | 8.1787 | 0.2441 |     - |   54353 B |
|        TryParseInvalid | 78,660.757 ns | 1,472.0377 ns | 1,445.7378 ns | 78,859.357 ns | 8.1787 | 0.2441 |     - |   53895 B |
|           QuantityFrom |  2,522.892 ns |   118.5197 ns |   316.3532 ns |  2,400.000 ns |      - |      - |     - |    8192 B |
|           IQuantity_As |     24.695 ns |     0.4193 ns |     0.3922 ns |     24.832 ns | 0.0037 |      - |     - |      24 B |
|        IQuantity_As_SI |    628.284 ns |    12.5220 ns |    12.2982 ns |    625.715 ns | 0.0286 |      - |     - |     201 B |
|       IQuantity_ToUnit |     40.872 ns |     0.7478 ns |     0.6244 ns |     41.075 ns | 0.0087 |      - |     - |      56 B |
| IQuantity_ToStringTest |  2,275.000 ns |    45.0947 ns |   121.1439 ns |  2,309.679 ns | 0.1831 |      - |     - |    1244 B |
