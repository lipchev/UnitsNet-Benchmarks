``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-VIQSFS : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                 Method |          Mean |         Error |        StdDev |        Median |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     15.262 ns |     0.2541 ns |     0.2377 ns |     15.187 ns |      - |      - |     - |         - |
|         Constructor_SI |    582.059 ns |    10.7190 ns |    10.0265 ns |    583.373 ns | 0.0296 |      - |     - |     201 B |
|             FromMethod |     35.996 ns |     0.2904 ns |     0.2716 ns |     36.109 ns |      - |      - |     - |         - |
|             ToProperty |      9.889 ns |     0.1676 ns |     0.1568 ns |      9.929 ns |      - |      - |     - |         - |
|                     As |      9.861 ns |     0.1230 ns |     0.1151 ns |      9.878 ns |      - |      - |     - |         - |
|                  As_SI |    562.906 ns |     9.1454 ns |     8.1072 ns |    562.135 ns | 0.0296 |      - |     - |     201 B |
|                 ToUnit |     23.487 ns |     0.3284 ns |     0.3072 ns |     23.466 ns |      - |      - |     - |         - |
|              ToUnit_SI |    589.162 ns |     5.1208 ns |     4.5395 ns |    588.426 ns | 0.0296 |      - |     - |     201 B |
|           ToStringTest |  2,190.797 ns |    27.8635 ns |    26.0635 ns |  2,190.510 ns | 0.1869 |      - |     - |    1244 B |
|                  Parse | 61,501.256 ns |   893.9500 ns |   836.2014 ns | 61,284.937 ns | 8.4839 | 0.3052 |     - |   54376 B |
|          TryParseValid | 61,457.564 ns |   544.2197 ns |   509.0634 ns | 61,538.940 ns | 8.3008 | 0.2441 |     - |   54353 B |
|        TryParseInvalid | 67,073.356 ns | 1,229.9487 ns | 1,150.4947 ns | 67,255.725 ns | 8.3008 | 0.2441 |     - |   53896 B |
|           QuantityFrom |  2,086.316 ns |    73.2516 ns |   210.1724 ns |  2,000.000 ns |      - |      - |     - |    8192 B |
|           IQuantity_As |     23.441 ns |     0.2286 ns |     0.2139 ns |     23.374 ns | 0.0038 |      - |     - |      24 B |
|        IQuantity_As_SI |    579.614 ns |     7.5118 ns |     7.0265 ns |    579.420 ns | 0.0296 |      - |     - |     201 B |
|       IQuantity_ToUnit |     34.649 ns |     0.3580 ns |     0.2990 ns |     34.712 ns | 0.0088 |      - |     - |      56 B |
| IQuantity_ToStringTest |  2,180.772 ns |    26.8481 ns |    25.1137 ns |  2,178.345 ns | 0.1869 |      - |     - |    1244 B |
|             Min_Double | 10,192.814 ns |   138.6126 ns |   129.6583 ns | 10,223.154 ns |      - |      - |     - |         - |
