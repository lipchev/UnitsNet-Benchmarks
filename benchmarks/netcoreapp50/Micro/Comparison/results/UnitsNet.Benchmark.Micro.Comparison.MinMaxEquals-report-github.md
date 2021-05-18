``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-AQIWYX : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|           Method |                          Categories |           x |           y |      Mean |     Error |    StdDev |    StdErr |       Min |       Max |    Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------- |------------------------------------ |------------ |------------ |----------:|----------:|----------:|----------:|----------:|----------:|----------:|-------:|------:|------:|----------:|
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m |  7.848 ns | 0.1549 ns | 0.1449 ns | 0.0374 ns |  7.649 ns |  8.148 ns |  7.839 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m |  8.229 ns | 0.1632 ns | 0.1447 ns | 0.0387 ns |  8.036 ns |  8.431 ns |  8.215 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm |  8.336 ns | 0.1900 ns | 0.2188 ns | 0.0489 ns |  7.997 ns |  8.746 ns |  8.366 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 11.092 ns | 0.1770 ns | 0.1478 ns | 0.0410 ns | 10.843 ns | 11.394 ns | 11.069 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 11.129 ns | 0.2066 ns | 0.1725 ns | 0.0478 ns | 10.793 ns | 11.325 ns | 11.201 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 11.243 ns | 0.1919 ns | 0.1795 ns | 0.0463 ns | 10.919 ns | 11.559 ns | 11.242 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 11.940 ns | 0.2571 ns | 0.3158 ns | 0.0673 ns | 11.454 ns | 12.449 ns | 11.920 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 12.661 ns | 0.1529 ns | 0.1430 ns | 0.0369 ns | 12.405 ns | 12.938 ns | 12.635 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 12.962 ns | 0.2488 ns | 0.2327 ns | 0.0601 ns | 12.497 ns | 13.370 ns | 12.941 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 12.964 ns | 0.2553 ns | 0.2507 ns | 0.0627 ns | 12.654 ns | 13.494 ns | 12.933 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 13.046 ns | 0.1495 ns | 0.1249 ns | 0.0346 ns | 12.869 ns | 13.286 ns | 13.078 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 13.557 ns | 0.2746 ns | 0.2820 ns | 0.0684 ns | 13.163 ns | 14.220 ns | 13.620 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 13.587 ns | 0.2276 ns | 0.2129 ns | 0.0550 ns | 13.209 ns | 13.888 ns | 13.642 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 13.814 ns | 0.2899 ns | 0.2711 ns | 0.0700 ns | 13.521 ns | 14.434 ns | 13.782 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 18.525 ns | 0.3638 ns | 0.3573 ns | 0.0893 ns | 17.875 ns | 19.275 ns | 18.538 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 18.539 ns | 0.3007 ns | 0.2665 ns | 0.0712 ns | 18.132 ns | 19.001 ns | 18.459 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 18.557 ns | 0.3512 ns | 0.3285 ns | 0.0848 ns | 18.027 ns | 19.223 ns | 18.572 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 19.304 ns | 0.3950 ns | 0.4390 ns | 0.1007 ns | 18.710 ns | 20.100 ns | 19.148 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 19.337 ns | 0.3983 ns | 0.4427 ns | 0.1016 ns | 18.796 ns | 20.376 ns | 19.282 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 19.507 ns | 0.2816 ns | 0.2634 ns | 0.0680 ns | 18.930 ns | 19.979 ns | 19.558 ns | 0.0020 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 19.853 ns | 0.4058 ns | 0.5819 ns | 0.1100 ns | 18.892 ns | 21.221 ns | 19.768 ns | 0.0020 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 20.457 ns | 0.4068 ns | 0.6213 ns | 0.1116 ns | 19.513 ns | 21.941 ns | 20.466 ns | 0.0020 |     - |     - |      32 B |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 20.498 ns | 0.3673 ns | 0.3256 ns | 0.0870 ns | 20.032 ns | 21.134 ns | 20.425 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 23.715 ns | 0.4681 ns | 0.6248 ns | 0.1250 ns | 22.618 ns | 25.244 ns | 23.645 ns | 0.0020 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 23.980 ns | 0.4884 ns | 0.8554 ns | 0.1370 ns | 22.418 ns | 25.913 ns | 23.882 ns | 0.0020 |     - |     - |      32 B |
