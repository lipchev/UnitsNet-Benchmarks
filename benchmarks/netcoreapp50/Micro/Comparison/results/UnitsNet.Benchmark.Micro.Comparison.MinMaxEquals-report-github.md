``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-EJJBOW : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|           Method |                          Categories |           x |           y |      Mean |     Error |    StdDev |    StdErr |       Min |       Max |    Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------- |------------------------------------ |------------ |------------ |----------:|----------:|----------:|----------:|----------:|----------:|----------:|-------:|------:|------:|----------:|
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm |  7.310 ns | 0.1504 ns | 0.1334 ns | 0.0356 ns |  7.103 ns |  7.549 ns |  7.307 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m |  7.435 ns | 0.1640 ns | 0.2132 ns | 0.0435 ns |  7.139 ns |  7.870 ns |  7.404 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m |  8.382 ns | 0.1228 ns | 0.1089 ns | 0.0291 ns |  8.171 ns |  8.604 ns |  8.374 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 10.119 ns | 0.1801 ns | 0.1597 ns | 0.0427 ns |  9.809 ns | 10.433 ns | 10.125 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 10.164 ns | 0.2221 ns | 0.3040 ns | 0.0596 ns |  9.651 ns | 10.784 ns | 10.120 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 10.355 ns | 0.2199 ns | 0.2782 ns | 0.0580 ns |  9.988 ns | 10.931 ns | 10.280 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 11.300 ns | 0.2274 ns | 0.3403 ns | 0.0621 ns | 10.853 ns | 12.128 ns | 11.281 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 11.332 ns | 0.2467 ns | 0.2423 ns | 0.0606 ns | 10.980 ns | 11.865 ns | 11.302 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 11.390 ns | 0.1802 ns | 0.1686 ns | 0.0435 ns | 11.107 ns | 11.735 ns | 11.391 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 11.575 ns | 0.2403 ns | 0.2767 ns | 0.0619 ns | 11.131 ns | 12.158 ns | 11.514 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 11.913 ns | 0.2342 ns | 0.2076 ns | 0.0555 ns | 11.667 ns | 12.357 ns | 11.878 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 11.976 ns | 0.2590 ns | 0.2422 ns | 0.0625 ns | 11.655 ns | 12.365 ns | 11.907 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 12.923 ns | 0.2716 ns | 0.4307 ns | 0.0750 ns | 12.363 ns | 13.866 ns | 12.866 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 14.167 ns | 0.3032 ns | 0.3370 ns | 0.0773 ns | 13.600 ns | 14.673 ns | 14.020 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 17.260 ns | 0.3559 ns | 0.6044 ns | 0.0994 ns | 16.398 ns | 18.814 ns | 17.251 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 17.305 ns | 0.3576 ns | 0.3975 ns | 0.0912 ns | 16.412 ns | 17.988 ns | 17.319 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 17.378 ns | 0.3580 ns | 0.5678 ns | 0.0988 ns | 16.367 ns | 18.363 ns | 17.281 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 17.504 ns | 0.3292 ns | 0.3079 ns | 0.0795 ns | 16.987 ns | 17.980 ns | 17.463 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 18.174 ns | 0.3625 ns | 0.4175 ns | 0.0933 ns | 17.276 ns | 18.778 ns | 18.175 ns | 0.0012 |     - |     - |      32 B |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 18.732 ns | 0.3555 ns | 0.3491 ns | 0.0873 ns | 18.309 ns | 19.505 ns | 18.648 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 18.734 ns | 0.3927 ns | 0.6229 ns | 0.1084 ns | 17.604 ns | 20.077 ns | 18.614 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 20.289 ns | 0.4131 ns | 0.5514 ns | 0.1103 ns | 19.589 ns | 21.461 ns | 20.222 ns | 0.0012 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 21.022 ns | 0.4110 ns | 0.4733 ns | 0.1058 ns | 19.935 ns | 21.723 ns | 21.062 ns | 0.0012 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 21.206 ns | 0.4372 ns | 0.8318 ns | 0.1240 ns | 19.866 ns | 22.847 ns | 21.132 ns | 0.0012 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 23.649 ns | 0.6002 ns | 1.7698 ns | 0.1770 ns | 20.093 ns | 27.255 ns | 23.829 ns | 0.0012 |     - |     - |      32 B |
