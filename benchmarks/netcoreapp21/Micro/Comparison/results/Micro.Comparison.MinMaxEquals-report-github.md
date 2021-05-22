``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-SVQHOL : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|           Method |                          Categories |           x |           y |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------- |------------------------------------ |------------ |------------ |---------:|---------:|---------:|---------:|---------:|---------:|---------:|-------:|------:|------:|----------:|
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 11.94 ns | 0.160 ns | 0.133 ns | 0.037 ns | 11.71 ns | 12.26 ns | 11.89 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 11.94 ns | 0.179 ns | 0.167 ns | 0.043 ns | 11.68 ns | 12.22 ns | 11.94 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 11.99 ns | 0.077 ns | 0.068 ns | 0.018 ns | 11.89 ns | 12.13 ns | 12.00 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 12.02 ns | 0.090 ns | 0.085 ns | 0.022 ns | 11.90 ns | 12.18 ns | 11.99 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 12.12 ns | 0.167 ns | 0.156 ns | 0.040 ns | 11.81 ns | 12.40 ns | 12.14 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 12.54 ns | 0.115 ns | 0.096 ns | 0.027 ns | 12.35 ns | 12.75 ns | 12.53 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 12.57 ns | 0.139 ns | 0.124 ns | 0.033 ns | 12.29 ns | 12.76 ns | 12.58 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 12.66 ns | 0.219 ns | 0.205 ns | 0.053 ns | 12.34 ns | 13.01 ns | 12.66 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 12.95 ns | 0.136 ns | 0.121 ns | 0.032 ns | 12.73 ns | 13.12 ns | 12.94 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 17.75 ns | 0.236 ns | 0.210 ns | 0.056 ns | 17.45 ns | 18.20 ns | 17.74 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 17.84 ns | 0.275 ns | 0.257 ns | 0.066 ns | 17.50 ns | 18.37 ns | 17.88 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 18.41 ns | 0.311 ns | 0.291 ns | 0.075 ns | 18.09 ns | 19.02 ns | 18.37 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 18.54 ns | 0.255 ns | 0.238 ns | 0.061 ns | 18.12 ns | 18.95 ns | 18.50 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 19.85 ns | 0.324 ns | 0.303 ns | 0.078 ns | 19.34 ns | 20.37 ns | 19.89 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 21.35 ns | 0.303 ns | 0.283 ns | 0.073 ns | 20.84 ns | 21.78 ns | 21.34 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 21.35 ns | 0.316 ns | 0.296 ns | 0.076 ns | 20.75 ns | 21.85 ns | 21.40 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 21.86 ns | 0.289 ns | 0.270 ns | 0.070 ns | 21.42 ns | 22.42 ns | 21.90 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 21.96 ns | 0.297 ns | 0.278 ns | 0.072 ns | 21.15 ns | 22.32 ns | 21.93 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 22.13 ns | 0.336 ns | 0.315 ns | 0.081 ns | 21.73 ns | 22.72 ns | 21.98 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 22.44 ns | 0.441 ns | 0.413 ns | 0.107 ns | 21.99 ns | 23.26 ns | 22.32 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 22.46 ns | 0.307 ns | 0.287 ns | 0.074 ns | 21.98 ns | 22.89 ns | 22.49 ns | 0.0050 |     - |     - |      32 B |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 25.14 ns | 0.330 ns | 0.309 ns | 0.080 ns | 24.41 ns | 25.57 ns | 25.13 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 25.31 ns | 0.417 ns | 0.390 ns | 0.101 ns | 24.69 ns | 25.92 ns | 25.30 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 26.91 ns | 0.549 ns | 0.539 ns | 0.135 ns | 26.07 ns | 27.86 ns | 26.93 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 27.02 ns | 0.423 ns | 0.395 ns | 0.102 ns | 26.52 ns | 27.67 ns | 26.88 ns | 0.0050 |     - |     - |      32 B |
