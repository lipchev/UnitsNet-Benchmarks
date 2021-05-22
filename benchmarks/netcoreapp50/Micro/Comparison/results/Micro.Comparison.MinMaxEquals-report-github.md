``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-OVNMGC : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|           Method |                          Categories |           x |           y |      Mean |     Error |    StdDev |    StdErr |       Min |       Max |    Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------- |------------------------------------ |------------ |------------ |----------:|----------:|----------:|----------:|----------:|----------:|----------:|-------:|------:|------:|----------:|
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm |  9.040 ns | 0.0641 ns | 0.0569 ns | 0.0152 ns |  8.929 ns |  9.145 ns |  9.038 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m |  9.484 ns | 0.1677 ns | 0.1569 ns | 0.0405 ns |  9.157 ns |  9.679 ns |  9.551 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m |  9.511 ns | 0.2122 ns | 0.2271 ns | 0.0535 ns |  9.143 ns |  9.933 ns |  9.510 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 11.805 ns | 0.1717 ns | 0.1522 ns | 0.0407 ns | 11.528 ns | 12.078 ns | 11.804 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 12.156 ns | 0.1724 ns | 0.1528 ns | 0.0408 ns | 11.965 ns | 12.458 ns | 12.116 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 12.182 ns | 0.1539 ns | 0.1440 ns | 0.0372 ns | 11.952 ns | 12.444 ns | 12.175 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 12.228 ns | 0.2179 ns | 0.2038 ns | 0.0526 ns | 11.775 ns | 12.554 ns | 12.235 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 12.252 ns | 0.2069 ns | 0.1935 ns | 0.0500 ns | 11.868 ns | 12.460 ns | 12.339 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 12.580 ns | 0.1419 ns | 0.1327 ns | 0.0343 ns | 12.265 ns | 12.829 ns | 12.581 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 14.250 ns | 0.2556 ns | 0.2266 ns | 0.0606 ns | 13.902 ns | 14.753 ns | 14.218 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 14.253 ns | 0.3064 ns | 0.3010 ns | 0.0752 ns | 13.668 ns | 14.790 ns | 14.215 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 15.744 ns | 0.2003 ns | 0.1775 ns | 0.0474 ns | 15.446 ns | 16.040 ns | 15.713 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 15.774 ns | 0.1983 ns | 0.1855 ns | 0.0479 ns | 15.420 ns | 16.061 ns | 15.796 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 15.782 ns | 0.2344 ns | 0.2192 ns | 0.0566 ns | 15.446 ns | 16.181 ns | 15.702 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 20.827 ns | 0.3325 ns | 0.3110 ns | 0.0803 ns | 20.471 ns | 21.403 ns | 20.832 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 20.913 ns | 0.2737 ns | 0.2285 ns | 0.0634 ns | 20.518 ns | 21.278 ns | 20.879 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 21.298 ns | 0.4292 ns | 0.4770 ns | 0.1094 ns | 20.509 ns | 22.000 ns | 21.214 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 21.308 ns | 0.3239 ns | 0.3030 ns | 0.0782 ns | 20.798 ns | 21.769 ns | 21.259 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 21.328 ns | 0.3815 ns | 0.3568 ns | 0.0921 ns | 20.757 ns | 22.140 ns | 21.332 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 22.941 ns | 0.4417 ns | 0.4131 ns | 0.1067 ns | 22.119 ns | 23.480 ns | 22.984 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 23.412 ns | 0.4793 ns | 0.8394 ns | 0.1344 ns | 21.758 ns | 25.348 ns | 23.436 ns | 0.0017 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 24.188 ns | 0.4829 ns | 0.5930 ns | 0.1264 ns | 22.870 ns | 25.308 ns | 24.179 ns | 0.0017 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 24.352 ns | 0.5007 ns | 0.8502 ns | 0.1398 ns | 22.906 ns | 25.848 ns | 24.333 ns | 0.0017 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 27.076 ns | 0.5367 ns | 0.7697 ns | 0.1455 ns | 25.887 ns | 28.595 ns | 27.116 ns | 0.0017 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 31.020 ns | 0.3714 ns | 0.3474 ns | 0.0897 ns | 30.329 ns | 31.573 ns | 31.074 ns | 0.0017 |     - |     - |      32 B |
