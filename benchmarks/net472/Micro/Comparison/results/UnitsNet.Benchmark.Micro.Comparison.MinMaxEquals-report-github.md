``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-FLZESV : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|           Method |                          Categories |           x |           y |      Mean |     Error |    StdDev |    StdErr |       Min |       Max |    Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------- |------------------------------------ |------------ |------------ |----------:|----------:|----------:|----------:|----------:|----------:|----------:|-------:|------:|------:|----------:|
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m |  8.962 ns |  2.148 ns | 0.1178 ns | 0.0680 ns |  8.846 ns |  9.081 ns |  8.959 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm |  9.157 ns |  5.909 ns | 0.3239 ns | 0.1870 ns |  8.955 ns |  9.530 ns |  8.984 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 10.056 ns |  4.242 ns | 0.2325 ns | 0.1343 ns |  9.834 ns | 10.298 ns | 10.037 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 10.326 ns |  1.374 ns | 0.0753 ns | 0.0435 ns | 10.267 ns | 10.411 ns | 10.300 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 10.355 ns |  4.446 ns | 0.2437 ns | 0.1407 ns | 10.081 ns | 10.548 ns | 10.437 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 10.735 ns |  3.265 ns | 0.1790 ns | 0.1033 ns | 10.562 ns | 10.920 ns | 10.723 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 10.749 ns |  3.715 ns | 0.2036 ns | 0.1176 ns | 10.610 ns | 10.983 ns | 10.654 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 10.978 ns |  5.359 ns | 0.2937 ns | 0.1696 ns | 10.807 ns | 11.318 ns | 10.811 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 11.014 ns | 17.407 ns | 0.9541 ns | 0.5509 ns | 10.232 ns | 12.077 ns | 10.732 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 13.921 ns |  4.304 ns | 0.2359 ns | 0.1362 ns | 13.716 ns | 14.179 ns | 13.867 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 14.969 ns | 11.301 ns | 0.6194 ns | 0.3576 ns | 14.448 ns | 15.654 ns | 14.806 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 15.905 ns | 17.235 ns | 0.9447 ns | 0.5454 ns | 15.023 ns | 16.902 ns | 15.791 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 17.054 ns |  5.934 ns | 0.3253 ns | 0.1878 ns | 16.720 ns | 17.369 ns | 17.072 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 17.232 ns |  8.026 ns | 0.4399 ns | 0.2540 ns | 16.815 ns | 17.692 ns | 17.190 ns | 0.0050 |     - |     - |      32 B |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 17.295 ns |  8.439 ns | 0.4626 ns | 0.2671 ns | 16.881 ns | 17.794 ns | 17.211 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 17.338 ns |  8.947 ns | 0.4904 ns | 0.2832 ns | 16.934 ns | 17.884 ns | 17.196 ns | 0.0050 |     - |     - |      32 B |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 18.559 ns | 22.254 ns | 1.2198 ns | 0.7043 ns | 17.522 ns | 19.903 ns | 18.252 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 18.587 ns |  2.624 ns | 0.1438 ns | 0.0830 ns | 18.429 ns | 18.710 ns | 18.621 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 19.164 ns | 19.523 ns | 1.0701 ns | 0.6178 ns | 18.344 ns | 20.374 ns | 18.772 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 19.340 ns |  9.077 ns | 0.4975 ns | 0.2873 ns | 18.812 ns | 19.799 ns | 19.410 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 20.439 ns | 11.196 ns | 0.6137 ns | 0.3543 ns | 19.732 ns | 20.825 ns | 20.761 ns | 0.0050 |     - |     - |      32 B |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 20.894 ns |  6.079 ns | 0.3332 ns | 0.1924 ns | 20.679 ns | 21.278 ns | 20.726 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 21.800 ns |  9.127 ns | 0.5003 ns | 0.2889 ns | 21.226 ns | 22.145 ns | 22.029 ns | 0.0050 |     - |     - |      32 B |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 22.004 ns | 16.454 ns | 0.9019 ns | 0.5207 ns | 21.413 ns | 23.042 ns | 21.556 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 37.390 ns | 33.127 ns | 1.8158 ns | 1.0484 ns | 35.692 ns | 39.305 ns | 37.173 ns |      - |     - |     - |         - |
