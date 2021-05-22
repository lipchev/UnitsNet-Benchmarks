``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-OQCKCU : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|           Method |                          Categories |           x |           y |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------- |------------------------------------ |------------ |------------ |---------:|---------:|---------:|---------:|---------:|---------:|---------:|-------:|------:|------:|----------:|
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 11.23 ns | 0.203 ns | 0.190 ns | 0.049 ns | 10.92 ns | 11.53 ns | 11.20 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 11.36 ns | 0.154 ns | 0.144 ns | 0.037 ns | 11.08 ns | 11.58 ns | 11.39 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 12.86 ns | 0.265 ns | 0.260 ns | 0.065 ns | 12.35 ns | 13.34 ns | 12.88 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 12.96 ns | 0.163 ns | 0.153 ns | 0.039 ns | 12.72 ns | 13.15 ns | 12.94 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 12.99 ns | 0.282 ns | 0.314 ns | 0.072 ns | 12.60 ns | 13.57 ns | 12.88 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 13.52 ns | 0.214 ns | 0.200 ns | 0.052 ns | 13.16 ns | 13.81 ns | 13.54 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 13.98 ns | 0.157 ns | 0.139 ns | 0.037 ns | 13.69 ns | 14.20 ns | 14.00 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 14.16 ns | 0.305 ns | 0.285 ns | 0.074 ns | 13.69 ns | 14.70 ns | 14.28 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 14.51 ns | 0.316 ns | 0.443 ns | 0.085 ns | 13.75 ns | 15.43 ns | 14.49 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 18.23 ns | 0.282 ns | 0.264 ns | 0.068 ns | 17.66 ns | 18.68 ns | 18.32 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 18.63 ns | 0.211 ns | 0.187 ns | 0.050 ns | 18.37 ns | 19.06 ns | 18.61 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 19.34 ns | 0.406 ns | 0.399 ns | 0.100 ns | 18.85 ns | 20.06 ns | 19.36 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 20.04 ns | 0.315 ns | 0.279 ns | 0.075 ns | 19.56 ns | 20.50 ns | 20.05 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 20.52 ns | 0.210 ns | 0.196 ns | 0.051 ns | 20.25 ns | 20.84 ns | 20.60 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 21.74 ns | 0.301 ns | 0.282 ns | 0.073 ns | 21.20 ns | 22.37 ns | 21.64 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 21.75 ns | 0.447 ns | 0.478 ns | 0.113 ns | 21.19 ns | 22.57 ns | 21.72 ns | 0.0050 |     - |     - |      32 B |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 22.32 ns | 0.268 ns | 0.251 ns | 0.065 ns | 21.86 ns | 22.76 ns | 22.31 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 22.43 ns | 0.305 ns | 0.271 ns | 0.072 ns | 22.02 ns | 23.03 ns | 22.47 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 22.44 ns | 0.345 ns | 0.323 ns | 0.083 ns | 21.96 ns | 23.14 ns | 22.30 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 22.62 ns | 0.431 ns | 0.404 ns | 0.104 ns | 21.70 ns | 23.22 ns | 22.77 ns | 0.0050 |     - |     - |      32 B |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 22.83 ns | 0.254 ns | 0.238 ns | 0.061 ns | 22.38 ns | 23.18 ns | 22.89 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 26.00 ns | 0.426 ns | 0.398 ns | 0.103 ns | 25.29 ns | 26.50 ns | 26.19 ns | 0.0050 |     - |     - |      32 B |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 26.02 ns | 0.267 ns | 0.237 ns | 0.063 ns | 25.73 ns | 26.47 ns | 25.98 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 26.49 ns | 0.428 ns | 0.400 ns | 0.103 ns | 25.83 ns | 27.30 ns | 26.47 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 26.94 ns | 0.450 ns | 0.421 ns | 0.109 ns | 26.11 ns | 27.60 ns | 26.83 ns | 0.0050 |     - |     - |      32 B |
