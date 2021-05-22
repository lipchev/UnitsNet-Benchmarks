``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-SDCMBP : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|           Method |                          Categories |           x |           y |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------- |------------------------------------ |------------ |------------ |---------:|---------:|---------:|---------:|---------:|---------:|---------:|-------:|------:|------:|----------:|
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 11.46 ns | 0.186 ns | 0.174 ns | 0.045 ns | 11.20 ns | 11.75 ns | 11.49 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 11.52 ns | 0.242 ns | 0.226 ns | 0.058 ns | 11.15 ns | 11.87 ns | 11.56 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 11.75 ns | 0.169 ns | 0.150 ns | 0.040 ns | 11.47 ns | 12.08 ns | 11.76 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 11.93 ns | 0.141 ns | 0.132 ns | 0.034 ns | 11.75 ns | 12.19 ns | 11.92 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 11.94 ns | 0.141 ns | 0.125 ns | 0.033 ns | 11.69 ns | 12.10 ns | 11.95 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 11.98 ns | 0.105 ns | 0.093 ns | 0.025 ns | 11.83 ns | 12.18 ns | 11.97 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 12.13 ns | 0.169 ns | 0.158 ns | 0.041 ns | 11.84 ns | 12.36 ns | 12.17 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 12.33 ns | 0.110 ns | 0.092 ns | 0.025 ns | 12.13 ns | 12.46 ns | 12.33 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 13.37 ns | 0.167 ns | 0.156 ns | 0.040 ns | 13.10 ns | 13.65 ns | 13.40 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 16.96 ns | 0.280 ns | 0.262 ns | 0.068 ns | 16.66 ns | 17.62 ns | 16.88 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 17.02 ns | 0.296 ns | 0.277 ns | 0.071 ns | 16.71 ns | 17.62 ns | 16.87 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 19.11 ns | 0.296 ns | 0.277 ns | 0.072 ns | 18.55 ns | 19.68 ns | 19.16 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 19.39 ns | 0.339 ns | 0.317 ns | 0.082 ns | 18.88 ns | 19.87 ns | 19.45 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 19.43 ns | 0.271 ns | 0.253 ns | 0.065 ns | 19.02 ns | 19.89 ns | 19.35 ns | 0.0050 |     - |     - |      32 B |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 19.46 ns | 0.332 ns | 0.310 ns | 0.080 ns | 18.96 ns | 19.88 ns | 19.45 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 19.50 ns | 0.305 ns | 0.286 ns | 0.074 ns | 18.90 ns | 19.87 ns | 19.58 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 20.01 ns | 0.346 ns | 0.324 ns | 0.084 ns | 19.47 ns | 20.76 ns | 20.00 ns | 0.0050 |     - |     - |      32 B |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 20.06 ns | 0.400 ns | 0.374 ns | 0.097 ns | 19.49 ns | 20.68 ns | 19.99 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 20.33 ns | 0.243 ns | 0.227 ns | 0.059 ns | 19.92 ns | 20.61 ns | 20.33 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 21.87 ns | 0.337 ns | 0.315 ns | 0.081 ns | 21.29 ns | 22.50 ns | 21.81 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 21.88 ns | 0.222 ns | 0.186 ns | 0.051 ns | 21.54 ns | 22.28 ns | 21.84 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 24.27 ns | 0.424 ns | 0.397 ns | 0.102 ns | 23.87 ns | 25.06 ns | 24.26 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 24.49 ns | 0.485 ns | 0.454 ns | 0.117 ns | 23.80 ns | 25.44 ns | 24.43 ns | 0.0050 |     - |     - |      32 B |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 25.24 ns | 0.298 ns | 0.278 ns | 0.072 ns | 24.75 ns | 25.62 ns | 25.19 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 25.81 ns | 0.455 ns | 0.426 ns | 0.110 ns | 25.19 ns | 26.51 ns | 25.75 ns |      - |     - |     - |         - |
