``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-PCSHJF : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|           Method |                          Categories |           x |           y |      Mean |      Error |    StdDev |    StdErr |       Min |       Max |    Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------- |------------------------------------ |------------ |------------ |----------:|-----------:|----------:|----------:|----------:|----------:|----------:|-------:|------:|------:|----------:|
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m |  9.858 ns |  0.8970 ns | 0.0492 ns | 0.0284 ns |  9.824 ns |  9.914 ns |  9.836 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm |  9.940 ns |  4.1392 ns | 0.2269 ns | 0.1310 ns |  9.717 ns | 10.171 ns |  9.933 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 10.877 ns |  4.3385 ns | 0.2378 ns | 0.1373 ns | 10.687 ns | 11.144 ns | 10.801 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 12.116 ns |  1.8766 ns | 0.1029 ns | 0.0594 ns | 12.014 ns | 12.219 ns | 12.114 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 12.242 ns |  8.7496 ns | 0.4796 ns | 0.2769 ns | 11.789 ns | 12.744 ns | 12.193 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 12.359 ns |  2.8927 ns | 0.1586 ns | 0.0915 ns | 12.176 ns | 12.455 ns | 12.445 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 13.521 ns |  7.3432 ns | 0.4025 ns | 0.2324 ns | 13.059 ns | 13.796 ns | 13.707 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 13.558 ns |  6.0037 ns | 0.3291 ns | 0.1900 ns | 13.206 ns | 13.858 ns | 13.610 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 13.711 ns |  1.9573 ns | 0.1073 ns | 0.0619 ns | 13.605 ns | 13.819 ns | 13.708 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 15.122 ns |  2.6896 ns | 0.1474 ns | 0.0851 ns | 15.010 ns | 15.289 ns | 15.066 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 15.297 ns |  6.1653 ns | 0.3379 ns | 0.1951 ns | 14.958 ns | 15.634 ns | 15.300 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 16.543 ns |  8.6095 ns | 0.4719 ns | 0.2725 ns | 16.030 ns | 16.959 ns | 16.639 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 16.892 ns |  3.9381 ns | 0.2159 ns | 0.1246 ns | 16.650 ns | 17.064 ns | 16.961 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 17.004 ns |  9.5283 ns | 0.5223 ns | 0.3015 ns | 16.401 ns | 17.307 ns | 17.305 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 19.684 ns |  6.3843 ns | 0.3499 ns | 0.2020 ns | 19.281 ns | 19.902 ns | 19.870 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 19.898 ns |  3.3867 ns | 0.1856 ns | 0.1072 ns | 19.744 ns | 20.104 ns | 19.845 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 19.940 ns |  4.9374 ns | 0.2706 ns | 0.1563 ns | 19.628 ns | 20.103 ns | 20.089 ns | 0.0050 |     - |     - |      32 B |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 20.068 ns |  5.0964 ns | 0.2794 ns | 0.1613 ns | 19.897 ns | 20.390 ns | 19.916 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 20.575 ns |  3.6826 ns | 0.2019 ns | 0.1165 ns | 20.406 ns | 20.798 ns | 20.520 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 21.783 ns |  4.4125 ns | 0.2419 ns | 0.1396 ns | 21.592 ns | 22.055 ns | 21.701 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 22.212 ns |  2.4187 ns | 0.1326 ns | 0.0765 ns | 22.084 ns | 22.349 ns | 22.202 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 22.435 ns |  9.4713 ns | 0.5192 ns | 0.2997 ns | 21.889 ns | 22.922 ns | 22.493 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 22.452 ns |  7.3477 ns | 0.4028 ns | 0.2325 ns | 22.042 ns | 22.847 ns | 22.468 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 24.310 ns |  8.6204 ns | 0.4725 ns | 0.2728 ns | 23.766 ns | 24.619 ns | 24.545 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 24.656 ns | 13.7930 ns | 0.7560 ns | 0.4365 ns | 23.987 ns | 25.476 ns | 24.504 ns | 0.0050 |     - |     - |      32 B |
