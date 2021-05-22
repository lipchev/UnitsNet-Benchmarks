``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-QPYGPG : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|           Method |                          Categories |           x |           y |      Mean |     Error |    StdDev |    StdErr |       Min |       Max |    Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------- |------------------------------------ |------------ |------------ |----------:|----------:|----------:|----------:|----------:|----------:|----------:|-------:|------:|------:|----------:|
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m |  9.140 ns | 0.1980 ns | 0.2200 ns | 0.0505 ns |  8.847 ns |  9.505 ns |  9.120 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm |  9.759 ns | 0.2138 ns | 0.1895 ns | 0.0507 ns |  9.570 ns | 10.145 ns |  9.680 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 10.011 ns | 0.2174 ns | 0.2902 ns | 0.0580 ns |  9.586 ns | 10.633 ns |  9.936 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 12.308 ns | 0.1671 ns | 0.1563 ns | 0.0404 ns | 12.066 ns | 12.558 ns | 12.365 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 12.396 ns | 0.2021 ns | 0.1792 ns | 0.0479 ns | 12.204 ns | 12.790 ns | 12.363 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 12.405 ns | 0.2657 ns | 0.2954 ns | 0.0678 ns | 12.047 ns | 13.090 ns | 12.307 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 12.411 ns | 0.2696 ns | 0.2996 ns | 0.0687 ns | 12.036 ns | 12.960 ns | 12.292 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 12.623 ns | 0.1730 ns | 0.1534 ns | 0.0410 ns | 12.306 ns | 12.820 ns | 12.650 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 12.731 ns | 0.2644 ns | 0.2939 ns | 0.0674 ns | 12.297 ns | 13.400 ns | 12.742 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 14.648 ns | 0.2497 ns | 0.2085 ns | 0.0578 ns | 14.430 ns | 15.156 ns | 14.567 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 14.865 ns | 0.2760 ns | 0.2582 ns | 0.0667 ns | 14.501 ns | 15.264 ns | 14.901 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 16.221 ns | 0.3391 ns | 0.5379 ns | 0.0936 ns | 15.434 ns | 17.324 ns | 16.214 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 16.256 ns | 0.3433 ns | 0.5445 ns | 0.0948 ns | 15.651 ns | 17.405 ns | 16.203 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 16.835 ns | 0.3578 ns | 0.6266 ns | 0.1003 ns | 15.867 ns | 18.052 ns | 16.875 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 20.644 ns | 0.4237 ns | 0.3756 ns | 0.1004 ns | 20.226 ns | 21.549 ns | 20.561 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 21.189 ns | 0.4459 ns | 0.4956 ns | 0.1137 ns | 20.498 ns | 22.184 ns | 21.143 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 21.616 ns | 0.3024 ns | 0.2525 ns | 0.0700 ns | 21.291 ns | 22.036 ns | 21.526 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 21.870 ns | 0.4250 ns | 0.3768 ns | 0.1007 ns | 21.388 ns | 22.645 ns | 21.838 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 22.991 ns | 0.2212 ns | 0.2069 ns | 0.0534 ns | 22.659 ns | 23.291 ns | 23.007 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 23.379 ns | 0.2263 ns | 0.2006 ns | 0.0536 ns | 22.991 ns | 23.653 ns | 23.448 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 25.979 ns | 0.5334 ns | 0.5928 ns | 0.1360 ns | 25.111 ns | 27.110 ns | 26.011 ns | 0.0017 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 26.033 ns | 0.4171 ns | 0.3901 ns | 0.1007 ns | 25.271 ns | 26.580 ns | 26.181 ns | 0.0017 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 26.285 ns | 0.5296 ns | 0.6504 ns | 0.1387 ns | 24.852 ns | 27.520 ns | 26.270 ns | 0.0017 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 30.171 ns | 0.6153 ns | 0.6319 ns | 0.1533 ns | 29.580 ns | 31.652 ns | 29.978 ns | 0.0017 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 30.381 ns | 0.6092 ns | 0.7253 ns | 0.1583 ns | 29.551 ns | 31.909 ns | 30.115 ns | 0.0017 |     - |     - |      32 B |
