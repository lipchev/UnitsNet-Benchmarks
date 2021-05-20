``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-FLSJHN : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|           Method |                          Categories |           x |           y |      Mean |     Error |    StdDev |    StdErr |       Min |      Max |    Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------- |------------------------------------ |------------ |------------ |----------:|----------:|----------:|----------:|----------:|---------:|----------:|-------:|------:|------:|----------:|
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m |  9.547 ns | 0.2106 ns | 0.2812 ns | 0.0562 ns |  9.047 ns | 10.10 ns |  9.555 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm |  9.922 ns | 0.2119 ns | 0.1982 ns | 0.0512 ns |  9.455 ns | 10.26 ns |  9.950 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 10.696 ns | 0.2188 ns | 0.1940 ns | 0.0518 ns | 10.206 ns | 11.05 ns | 10.676 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 11.551 ns | 0.2562 ns | 0.3050 ns | 0.0666 ns | 11.131 ns | 12.23 ns | 11.500 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 11.699 ns | 0.2542 ns | 0.2123 ns | 0.0589 ns | 11.325 ns | 12.00 ns | 11.765 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 11.832 ns | 0.2545 ns | 0.3398 ns | 0.0680 ns | 11.345 ns | 12.55 ns | 11.813 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 12.548 ns | 0.2765 ns | 0.2451 ns | 0.0655 ns | 12.024 ns | 12.99 ns | 12.571 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 12.975 ns | 0.2769 ns | 0.3600 ns | 0.0735 ns | 12.393 ns | 13.80 ns | 12.938 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 13.027 ns | 0.2714 ns | 0.2904 ns | 0.0684 ns | 12.580 ns | 13.45 ns | 12.951 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 15.579 ns | 0.3289 ns | 0.5217 ns | 0.0908 ns | 14.519 ns | 16.83 ns | 15.479 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 15.755 ns | 0.3262 ns | 0.4007 ns | 0.0854 ns | 15.171 ns | 16.53 ns | 15.646 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 15.868 ns | 0.3041 ns | 0.3847 ns | 0.0802 ns | 15.070 ns | 16.63 ns | 15.859 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 15.961 ns | 0.3311 ns | 0.4066 ns | 0.0867 ns | 15.288 ns | 16.52 ns | 15.942 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 17.444 ns | 0.3001 ns | 0.2807 ns | 0.0725 ns | 16.954 ns | 17.81 ns | 17.411 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 18.934 ns | 0.3550 ns | 0.5313 ns | 0.0970 ns | 17.867 ns | 20.03 ns | 18.921 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 19.172 ns | 0.3947 ns | 0.4387 ns | 0.1006 ns | 18.475 ns | 20.05 ns | 19.188 ns | 0.0050 |     - |     - |      32 B |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 19.234 ns | 0.3777 ns | 0.3533 ns | 0.0912 ns | 18.566 ns | 19.71 ns | 19.388 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 19.436 ns | 0.3998 ns | 0.4605 ns | 0.1030 ns | 18.632 ns | 20.33 ns | 19.468 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 19.487 ns | 0.3881 ns | 0.3630 ns | 0.0937 ns | 18.883 ns | 19.98 ns | 19.513 ns | 0.0050 |     - |     - |      32 B |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 20.272 ns | 0.4214 ns | 0.4853 ns | 0.1085 ns | 19.679 ns | 21.23 ns | 20.185 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 20.287 ns | 0.3378 ns | 0.3160 ns | 0.0816 ns | 19.553 ns | 20.65 ns | 20.376 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 22.802 ns | 0.4708 ns | 0.4835 ns | 0.1173 ns | 21.992 ns | 23.68 ns | 22.689 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 22.869 ns | 0.4743 ns | 0.6492 ns | 0.1273 ns | 21.558 ns | 23.94 ns | 22.795 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 23.331 ns | 0.4754 ns | 0.4882 ns | 0.1184 ns | 22.622 ns | 24.20 ns | 23.270 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 24.037 ns | 0.4728 ns | 0.4855 ns | 0.1178 ns | 23.130 ns | 24.84 ns | 24.051 ns | 0.0050 |     - |     - |      32 B |
