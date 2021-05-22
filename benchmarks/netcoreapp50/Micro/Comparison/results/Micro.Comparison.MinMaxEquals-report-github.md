``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-IWYYPB : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|           Method |                          Categories |           x |           y |      Mean |     Error |    StdDev |    StdErr |       Min |       Max |    Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------- |------------------------------------ |------------ |------------ |----------:|----------:|----------:|----------:|----------:|----------:|----------:|-------:|------:|------:|----------:|
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm |  9.750 ns | 0.1515 ns | 0.1417 ns | 0.0366 ns |  9.490 ns |  9.980 ns |  9.720 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m |  9.802 ns | 0.2131 ns | 0.2093 ns | 0.0523 ns |  9.512 ns | 10.229 ns |  9.784 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m |  9.868 ns | 0.1461 ns | 0.1366 ns | 0.0353 ns |  9.553 ns | 10.080 ns |  9.858 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 12.341 ns | 0.0949 ns | 0.0793 ns | 0.0220 ns | 12.200 ns | 12.472 ns | 12.344 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 12.350 ns | 0.1457 ns | 0.1363 ns | 0.0352 ns | 12.119 ns | 12.520 ns | 12.332 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 12.386 ns | 0.2260 ns | 0.2114 ns | 0.0546 ns | 11.927 ns | 12.779 ns | 12.370 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 12.425 ns | 0.2194 ns | 0.2052 ns | 0.0530 ns | 11.987 ns | 12.691 ns | 12.471 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 12.470 ns | 0.2459 ns | 0.2734 ns | 0.0627 ns | 12.025 ns | 13.124 ns | 12.455 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 12.548 ns | 0.1801 ns | 0.1685 ns | 0.0435 ns | 12.236 ns | 12.782 ns | 12.502 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 14.588 ns | 0.2245 ns | 0.2100 ns | 0.0542 ns | 14.361 ns | 14.932 ns | 14.496 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 14.756 ns | 0.2975 ns | 0.2783 ns | 0.0718 ns | 14.362 ns | 15.128 ns | 14.765 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 15.885 ns | 0.2565 ns | 0.2399 ns | 0.0619 ns | 15.457 ns | 16.241 ns | 15.895 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 16.180 ns | 0.3424 ns | 0.6262 ns | 0.0966 ns | 15.329 ns | 17.690 ns | 16.058 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 16.425 ns | 0.1929 ns | 0.1805 ns | 0.0466 ns | 16.102 ns | 16.708 ns | 16.402 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 20.521 ns | 0.3146 ns | 0.2943 ns | 0.0760 ns | 20.116 ns | 21.022 ns | 20.559 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 20.830 ns | 0.3131 ns | 0.2775 ns | 0.0742 ns | 20.254 ns | 21.188 ns | 20.926 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 21.777 ns | 0.2553 ns | 0.2263 ns | 0.0605 ns | 21.234 ns | 22.061 ns | 21.823 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 21.828 ns | 0.3115 ns | 0.2913 ns | 0.0752 ns | 21.408 ns | 22.258 ns | 21.862 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 23.164 ns | 0.4718 ns | 0.5244 ns | 0.1203 ns | 22.166 ns | 24.119 ns | 23.127 ns | 0.0017 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 23.248 ns | 0.3792 ns | 0.3547 ns | 0.0916 ns | 22.703 ns | 23.864 ns | 23.204 ns | 0.0017 |     - |     - |      32 B |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 23.389 ns | 0.3549 ns | 0.3320 ns | 0.0857 ns | 22.779 ns | 23.958 ns | 23.301 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 23.770 ns | 0.4735 ns | 0.4197 ns | 0.1122 ns | 22.762 ns | 24.333 ns | 23.818 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 24.272 ns | 0.4869 ns | 0.5980 ns | 0.1275 ns | 23.030 ns | 25.059 ns | 24.386 ns | 0.0017 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 27.719 ns | 0.5603 ns | 0.8723 ns | 0.1542 ns | 26.237 ns | 29.919 ns | 27.555 ns | 0.0017 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 27.721 ns | 0.5271 ns | 0.4401 ns | 0.1221 ns | 27.022 ns | 28.753 ns | 27.649 ns | 0.0017 |     - |     - |      32 B |
