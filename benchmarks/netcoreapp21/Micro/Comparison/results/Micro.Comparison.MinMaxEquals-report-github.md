``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-YUVJWC : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|           Method |                          Categories |           x |           y |     Mean |    Error |   StdDev |   StdErr |       Min |      Max |   Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------- |------------------------------------ |------------ |------------ |---------:|---------:|---------:|---------:|----------:|---------:|---------:|-------:|------:|------:|----------:|
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 10.15 ns | 0.215 ns | 0.221 ns | 0.053 ns |  9.869 ns | 10.60 ns | 10.09 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 10.17 ns | 0.203 ns | 0.278 ns | 0.055 ns |  9.774 ns | 10.85 ns | 10.12 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 10.22 ns | 0.219 ns | 0.216 ns | 0.054 ns |  9.965 ns | 10.65 ns | 10.21 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 10.40 ns | 0.229 ns | 0.281 ns | 0.060 ns |  9.854 ns | 10.90 ns | 10.41 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 10.44 ns | 0.225 ns | 0.260 ns | 0.058 ns | 10.045 ns | 10.90 ns | 10.45 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 10.67 ns | 0.227 ns | 0.177 ns | 0.051 ns | 10.360 ns | 11.00 ns | 10.68 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 10.70 ns | 0.203 ns | 0.190 ns | 0.049 ns | 10.448 ns | 11.03 ns | 10.64 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 10.76 ns | 0.231 ns | 0.275 ns | 0.060 ns | 10.272 ns | 11.21 ns | 10.77 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 11.22 ns | 0.243 ns | 0.308 ns | 0.064 ns | 10.666 ns | 11.64 ns | 11.24 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 15.09 ns | 0.301 ns | 0.296 ns | 0.074 ns | 14.726 ns | 15.68 ns | 15.05 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 15.17 ns | 0.322 ns | 0.461 ns | 0.087 ns | 14.544 ns | 16.26 ns | 15.10 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 15.59 ns | 0.283 ns | 0.278 ns | 0.070 ns | 15.074 ns | 16.02 ns | 15.62 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 16.20 ns | 0.343 ns | 0.321 ns | 0.083 ns | 15.687 ns | 16.79 ns | 16.17 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 16.63 ns | 0.346 ns | 0.370 ns | 0.087 ns | 16.003 ns | 17.26 ns | 16.58 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 18.09 ns | 0.300 ns | 0.266 ns | 0.071 ns | 17.437 ns | 18.50 ns | 18.11 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 18.28 ns | 0.376 ns | 0.433 ns | 0.097 ns | 17.433 ns | 18.84 ns | 18.34 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 18.46 ns | 0.364 ns | 0.374 ns | 0.091 ns | 17.867 ns | 19.30 ns | 18.37 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 18.75 ns | 0.340 ns | 0.349 ns | 0.085 ns | 18.021 ns | 19.29 ns | 18.80 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 18.76 ns | 0.367 ns | 0.377 ns | 0.091 ns | 18.245 ns | 19.43 ns | 18.73 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 18.83 ns | 0.382 ns | 0.455 ns | 0.099 ns | 18.033 ns | 19.71 ns | 18.88 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 19.05 ns | 0.391 ns | 0.535 ns | 0.105 ns | 18.192 ns | 20.14 ns | 18.90 ns | 0.0050 |     - |     - |      32 B |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 21.28 ns | 0.438 ns | 0.469 ns | 0.110 ns | 20.539 ns | 22.07 ns | 21.32 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 21.44 ns | 0.446 ns | 0.639 ns | 0.121 ns | 20.344 ns | 23.01 ns | 21.29 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 23.30 ns | 0.423 ns | 0.471 ns | 0.108 ns | 22.426 ns | 24.24 ns | 23.33 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 23.31 ns | 0.384 ns | 0.411 ns | 0.097 ns | 22.618 ns | 24.19 ns | 23.37 ns | 0.0050 |     - |     - |      32 B |
