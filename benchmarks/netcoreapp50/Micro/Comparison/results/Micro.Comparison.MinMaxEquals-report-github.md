``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-MNQURZ : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|           Method |                          Categories |           x |           y |      Mean |     Error |    StdDev |    StdErr |       Min |       Max |    Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------- |------------------------------------ |------------ |------------ |----------:|----------:|----------:|----------:|----------:|----------:|----------:|-------:|------:|------:|----------:|
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm |  8.451 ns | 0.1691 ns | 0.1581 ns | 0.0408 ns |  8.169 ns |  8.811 ns |  8.426 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m |  8.692 ns | 0.1592 ns | 0.1411 ns | 0.0377 ns |  8.331 ns |  8.872 ns |  8.725 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m |  8.756 ns | 0.1052 ns | 0.0932 ns | 0.0249 ns |  8.601 ns |  8.908 ns |  8.731 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 11.745 ns | 0.2527 ns | 0.2363 ns | 0.0610 ns | 11.422 ns | 12.160 ns | 11.713 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 11.807 ns | 0.2064 ns | 0.1931 ns | 0.0498 ns | 11.363 ns | 12.113 ns | 11.787 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 11.906 ns | 0.2136 ns | 0.1998 ns | 0.0516 ns | 11.445 ns | 12.260 ns | 11.914 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 12.327 ns | 0.1945 ns | 0.1819 ns | 0.0470 ns | 12.037 ns | 12.612 ns | 12.340 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 13.587 ns | 0.2185 ns | 0.1937 ns | 0.0518 ns | 13.270 ns | 13.938 ns | 13.638 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 13.593 ns | 0.2303 ns | 0.2154 ns | 0.0556 ns | 13.077 ns | 13.857 ns | 13.626 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 13.682 ns | 0.2176 ns | 0.1929 ns | 0.0516 ns | 13.327 ns | 14.068 ns | 13.655 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 13.885 ns | 0.3028 ns | 0.3110 ns | 0.0754 ns | 13.179 ns | 14.410 ns | 13.874 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 14.201 ns | 0.3030 ns | 0.2976 ns | 0.0744 ns | 13.655 ns | 14.705 ns | 14.249 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 14.253 ns | 0.2136 ns | 0.1998 ns | 0.0516 ns | 13.891 ns | 14.515 ns | 14.276 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 14.676 ns | 0.2756 ns | 0.2578 ns | 0.0666 ns | 14.331 ns | 15.064 ns | 14.756 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 19.558 ns | 0.4067 ns | 0.3804 ns | 0.0982 ns | 19.021 ns | 20.006 ns | 19.750 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 19.660 ns | 0.3848 ns | 0.3411 ns | 0.0912 ns | 19.181 ns | 20.487 ns | 19.625 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 19.754 ns | 0.4123 ns | 0.3857 ns | 0.0996 ns | 19.220 ns | 20.652 ns | 19.716 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 20.168 ns | 0.4058 ns | 0.3985 ns | 0.0996 ns | 19.499 ns | 20.847 ns | 20.155 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 20.409 ns | 0.4262 ns | 0.3779 ns | 0.1010 ns | 19.769 ns | 20.989 ns | 20.411 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 20.858 ns | 0.4282 ns | 0.7271 ns | 0.1195 ns | 19.912 ns | 22.849 ns | 20.774 ns | 0.0020 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 21.171 ns | 0.4197 ns | 0.5458 ns | 0.1114 ns | 20.153 ns | 22.004 ns | 21.199 ns | 0.0020 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 21.467 ns | 0.4413 ns | 0.7728 ns | 0.1238 ns | 20.247 ns | 23.877 ns | 21.531 ns | 0.0020 |     - |     - |      32 B |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 21.933 ns | 0.3314 ns | 0.2938 ns | 0.0785 ns | 21.401 ns | 22.349 ns | 21.891 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 24.834 ns | 0.4647 ns | 0.4347 ns | 0.1122 ns | 24.004 ns | 25.454 ns | 24.893 ns | 0.0020 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 24.952 ns | 0.5095 ns | 0.8652 ns | 0.1422 ns | 23.558 ns | 26.840 ns | 24.987 ns | 0.0020 |     - |     - |      32 B |
