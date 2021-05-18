``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-CVYHSX : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|           Method |                          Categories |           x |           y |      Mean |     Error |    StdDev |    StdErr |       Min |       Max |    Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------- |------------------------------------ |------------ |------------ |----------:|----------:|----------:|----------:|----------:|----------:|----------:|-------:|------:|------:|----------:|
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m |  7.949 ns | 0.1805 ns | 0.1932 ns | 0.0455 ns |  7.534 ns |  8.292 ns |  7.944 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m |  8.084 ns | 0.1819 ns | 0.2165 ns | 0.0472 ns |  7.801 ns |  8.528 ns |  8.046 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm |  8.328 ns | 0.1773 ns | 0.1821 ns | 0.0442 ns |  8.071 ns |  8.662 ns |  8.311 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 10.636 ns | 0.1301 ns | 0.1086 ns | 0.0301 ns | 10.427 ns | 10.822 ns | 10.638 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 10.808 ns | 0.1557 ns | 0.1456 ns | 0.0376 ns | 10.556 ns | 11.104 ns | 10.826 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 11.029 ns | 0.2050 ns | 0.3252 ns | 0.0566 ns | 10.430 ns | 11.847 ns | 11.000 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 11.219 ns | 0.1663 ns | 0.1474 ns | 0.0394 ns | 10.887 ns | 11.418 ns | 11.269 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 11.447 ns | 0.2472 ns | 0.2943 ns | 0.0642 ns | 11.114 ns | 12.192 ns | 11.350 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 11.497 ns | 0.2237 ns | 0.3417 ns | 0.0614 ns | 11.064 ns | 12.378 ns | 11.478 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 12.656 ns | 0.2747 ns | 0.2570 ns | 0.0664 ns | 12.300 ns | 13.180 ns | 12.588 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 12.752 ns | 0.1891 ns | 0.1769 ns | 0.0457 ns | 12.454 ns | 13.101 ns | 12.788 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 13.054 ns | 0.2726 ns | 0.3030 ns | 0.0695 ns | 12.635 ns | 13.698 ns | 13.019 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 13.500 ns | 0.2010 ns | 0.1880 ns | 0.0485 ns | 13.171 ns | 13.742 ns | 13.545 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 13.770 ns | 0.3178 ns | 0.9370 ns | 0.0937 ns | 12.401 ns | 16.035 ns | 13.621 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 18.864 ns | 0.3902 ns | 0.4337 ns | 0.0995 ns | 18.098 ns | 19.903 ns | 18.802 ns | 0.0012 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 19.311 ns | 0.3938 ns | 0.5121 ns | 0.1045 ns | 18.461 ns | 20.397 ns | 19.226 ns | 0.0012 |     - |     - |      32 B |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 19.352 ns | 0.4102 ns | 0.6854 ns | 0.1142 ns | 17.885 ns | 20.810 ns | 19.238 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 19.401 ns | 0.4112 ns | 0.7824 ns | 0.1166 ns | 18.168 ns | 21.135 ns | 19.208 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 19.414 ns | 0.4031 ns | 0.8144 ns | 0.1152 ns | 17.967 ns | 21.393 ns | 19.307 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 19.656 ns | 0.4143 ns | 0.8555 ns | 0.1186 ns | 18.087 ns | 21.869 ns | 19.528 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 19.680 ns | 0.3930 ns | 0.5636 ns | 0.1065 ns | 18.900 ns | 21.086 ns | 19.503 ns | 0.0012 |     - |     - |      32 B |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 19.748 ns | 0.4113 ns | 0.7623 ns | 0.1163 ns | 18.148 ns | 20.976 ns | 19.634 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 20.180 ns | 0.3997 ns | 0.7000 ns | 0.1121 ns | 18.414 ns | 21.744 ns | 20.282 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 22.689 ns | 0.4492 ns | 0.4993 ns | 0.1146 ns | 21.566 ns | 23.368 ns | 22.718 ns | 0.0012 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 22.916 ns | 0.4691 ns | 0.6575 ns | 0.1265 ns | 21.920 ns | 24.552 ns | 22.868 ns | 0.0012 |     - |     - |      32 B |
