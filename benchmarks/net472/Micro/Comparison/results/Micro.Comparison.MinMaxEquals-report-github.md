``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-PEEUQA : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|           Method |                          Categories |           x |           y |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------- |------------------------------------ |------------ |------------ |---------:|---------:|---------:|---------:|---------:|---------:|---------:|-------:|------:|------:|----------:|
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 10.26 ns | 0.138 ns | 0.122 ns | 0.033 ns | 10.04 ns | 10.47 ns | 10.26 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 10.29 ns | 0.168 ns | 0.157 ns | 0.040 ns | 10.01 ns | 10.59 ns | 10.26 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 11.76 ns | 0.139 ns | 0.130 ns | 0.034 ns | 11.47 ns | 11.98 ns | 11.75 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 11.80 ns | 0.214 ns | 0.201 ns | 0.052 ns | 11.44 ns | 12.12 ns | 11.78 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 11.85 ns | 0.258 ns | 0.242 ns | 0.062 ns | 11.46 ns | 12.30 ns | 11.77 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 12.27 ns | 0.184 ns | 0.163 ns | 0.044 ns | 12.05 ns | 12.62 ns | 12.25 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 13.32 ns | 0.277 ns | 0.272 ns | 0.068 ns | 12.89 ns | 13.83 ns | 13.37 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 13.34 ns | 0.212 ns | 0.198 ns | 0.051 ns | 12.93 ns | 13.72 ns | 13.30 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 13.34 ns | 0.159 ns | 0.148 ns | 0.038 ns | 13.07 ns | 13.58 ns | 13.37 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 16.59 ns | 0.219 ns | 0.183 ns | 0.051 ns | 16.33 ns | 16.98 ns | 16.64 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 16.77 ns | 0.334 ns | 0.312 ns | 0.081 ns | 16.24 ns | 17.37 ns | 16.73 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 18.25 ns | 0.239 ns | 0.224 ns | 0.058 ns | 17.88 ns | 18.59 ns | 18.30 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 18.53 ns | 0.294 ns | 0.275 ns | 0.071 ns | 18.15 ns | 19.02 ns | 18.46 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 18.63 ns | 0.255 ns | 0.239 ns | 0.062 ns | 18.24 ns | 18.98 ns | 18.67 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 19.01 ns | 0.341 ns | 0.319 ns | 0.082 ns | 18.57 ns | 19.72 ns | 18.95 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 19.50 ns | 0.396 ns | 0.389 ns | 0.097 ns | 18.94 ns | 20.37 ns | 19.38 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 19.51 ns | 0.321 ns | 0.300 ns | 0.078 ns | 19.13 ns | 20.13 ns | 19.61 ns | 0.0050 |     - |     - |      32 B |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 20.17 ns | 0.330 ns | 0.309 ns | 0.080 ns | 19.49 ns | 20.66 ns | 20.20 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 20.42 ns | 0.359 ns | 0.318 ns | 0.085 ns | 19.75 ns | 20.90 ns | 20.44 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 20.60 ns | 0.287 ns | 0.269 ns | 0.069 ns | 20.20 ns | 21.11 ns | 20.52 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 20.92 ns | 0.181 ns | 0.151 ns | 0.042 ns | 20.65 ns | 21.11 ns | 20.98 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 23.41 ns | 0.299 ns | 0.249 ns | 0.069 ns | 22.96 ns | 23.98 ns | 23.42 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 23.84 ns | 0.417 ns | 0.390 ns | 0.101 ns | 23.20 ns | 24.59 ns | 23.75 ns | 0.0050 |     - |     - |      32 B |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 23.99 ns | 0.285 ns | 0.238 ns | 0.066 ns | 23.48 ns | 24.38 ns | 24.01 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 24.43 ns | 0.395 ns | 0.370 ns | 0.096 ns | 23.89 ns | 25.15 ns | 24.38 ns |      - |     - |     - |         - |
