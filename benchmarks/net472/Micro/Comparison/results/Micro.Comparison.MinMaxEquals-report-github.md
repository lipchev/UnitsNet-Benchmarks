``` ini

BenchmarkDotNet=v0.13.0, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET SDK=5.0.203
  [Host]     : .NET 5.0.6 (5.0.621.22011), X64 RyuJIT
  Job-GHXATF : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET Framework 4.7.2  Toolchain=net472  

```
|           Method |                          Categories |           x |           y |      Mean |     Error |    StdDev |    StdErr |       Min |       Max |    Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------- |------------------------------------ |------------ |------------ |----------:|----------:|----------:|----------:|----------:|----------:|----------:|-------:|------:|------:|----------:|
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm |  9.734 ns | 0.0964 ns | 0.0855 ns | 0.0228 ns |  9.602 ns |  9.886 ns |  9.732 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m |  9.879 ns | 0.2138 ns | 0.2287 ns | 0.0539 ns |  9.558 ns | 10.397 ns |  9.774 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 11.024 ns | 0.1339 ns | 0.1187 ns | 0.0317 ns | 10.788 ns | 11.267 ns | 11.008 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 11.140 ns | 0.1994 ns | 0.1768 ns | 0.0472 ns | 10.902 ns | 11.443 ns | 11.100 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 11.161 ns | 0.2263 ns | 0.2006 ns | 0.0536 ns | 10.861 ns | 11.531 ns | 11.154 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 11.456 ns | 0.1164 ns | 0.1032 ns | 0.0276 ns | 11.316 ns | 11.619 ns | 11.443 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 11.456 ns | 0.1720 ns | 0.1609 ns | 0.0415 ns | 11.214 ns | 11.804 ns | 11.442 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 11.676 ns | 0.1699 ns | 0.1590 ns | 0.0410 ns | 11.250 ns | 11.867 ns | 11.686 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 12.584 ns | 0.1283 ns | 0.1137 ns | 0.0304 ns | 12.319 ns | 12.771 ns | 12.607 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 14.855 ns | 0.1533 ns | 0.1359 ns | 0.0363 ns | 14.620 ns | 15.132 ns | 14.851 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 15.366 ns | 0.1895 ns | 0.1680 ns | 0.0449 ns | 15.163 ns | 15.729 ns | 15.326 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 16.573 ns | 0.3492 ns | 0.4158 ns | 0.0907 ns | 15.589 ns | 17.049 ns | 16.655 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 16.590 ns | 0.2620 ns | 0.2187 ns | 0.0607 ns | 16.393 ns | 17.071 ns | 16.505 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 16.974 ns | 0.3527 ns | 0.4331 ns | 0.0923 ns | 16.474 ns | 17.971 ns | 16.832 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 17.424 ns | 0.2197 ns | 0.1947 ns | 0.0520 ns | 17.155 ns | 17.832 ns | 17.367 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 17.685 ns | 0.1912 ns | 0.1789 ns | 0.0462 ns | 17.416 ns | 18.071 ns | 17.649 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 17.795 ns | 0.2943 ns | 0.2753 ns | 0.0711 ns | 17.457 ns | 18.182 ns | 17.792 ns | 0.0050 |     - |     - |      32 B |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 18.939 ns | 0.3796 ns | 0.3551 ns | 0.0917 ns | 18.494 ns | 19.659 ns | 18.907 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 18.968 ns | 0.3627 ns | 0.3393 ns | 0.0876 ns | 18.642 ns | 19.816 ns | 18.808 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 19.268 ns | 0.2376 ns | 0.1984 ns | 0.0550 ns | 18.906 ns | 19.678 ns | 19.221 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 19.567 ns | 0.4111 ns | 0.9023 ns | 0.1185 ns | 17.848 ns | 21.393 ns | 19.787 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 21.877 ns | 0.3755 ns | 0.3136 ns | 0.0870 ns | 21.341 ns | 22.452 ns | 21.950 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 21.898 ns | 0.4366 ns | 0.5521 ns | 0.1151 ns | 21.215 ns | 23.295 ns | 21.737 ns | 0.0050 |     - |     - |      32 B |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 21.904 ns | 0.3755 ns | 0.3513 ns | 0.0907 ns | 21.440 ns | 22.660 ns | 21.896 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 22.580 ns | 0.2912 ns | 0.2724 ns | 0.0703 ns | 22.190 ns | 23.053 ns | 22.627 ns |      - |     - |     - |         - |
