``` ini

BenchmarkDotNet=v0.13.0, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-NHEICL : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|           Method |                          Categories |           x |           y |     Mean |    Error |   StdDev |   StdErr |   Median |       Min |      Max |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------- |------------------------------------ |------------ |------------ |---------:|---------:|---------:|---------:|---------:|----------:|---------:|-------:|------:|------:|----------:|
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 10.52 ns | 0.236 ns | 0.242 ns | 0.059 ns | 10.45 ns | 10.094 ns | 11.01 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 11.14 ns | 0.266 ns | 0.766 ns | 0.078 ns | 11.19 ns |  9.636 ns | 13.08 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 11.32 ns | 0.248 ns | 0.434 ns | 0.070 ns | 11.41 ns | 10.487 ns | 12.13 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 11.42 ns | 0.252 ns | 0.486 ns | 0.072 ns | 11.41 ns | 10.466 ns | 12.36 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 11.88 ns | 0.272 ns | 0.798 ns | 0.080 ns | 11.84 ns | 10.590 ns | 14.13 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 12.29 ns | 0.306 ns | 0.902 ns | 0.090 ns | 12.46 ns | 10.200 ns | 14.61 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 12.36 ns | 0.265 ns | 0.325 ns | 0.069 ns | 12.28 ns | 11.855 ns | 12.98 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 12.46 ns | 0.271 ns | 0.430 ns | 0.075 ns | 12.45 ns | 11.673 ns | 13.33 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 13.89 ns | 0.301 ns | 0.830 ns | 0.088 ns | 14.23 ns | 12.007 ns | 15.08 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 15.18 ns | 0.321 ns | 0.663 ns | 0.092 ns | 15.25 ns | 13.766 ns | 16.58 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 15.23 ns | 0.323 ns | 0.787 ns | 0.094 ns | 15.15 ns | 13.818 ns | 17.20 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 15.59 ns | 0.428 ns | 1.263 ns | 0.126 ns | 15.16 ns | 13.558 ns | 18.57 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 16.01 ns | 0.340 ns | 0.775 ns | 0.098 ns | 15.98 ns | 14.592 ns | 17.58 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 17.80 ns | 0.484 ns | 1.427 ns | 0.143 ns | 17.56 ns | 15.003 ns | 20.56 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 18.26 ns | 0.358 ns | 0.871 ns | 0.104 ns | 18.24 ns | 16.480 ns | 20.66 ns | 0.0050 |     - |     - |      32 B |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 19.98 ns | 0.535 ns | 1.576 ns | 0.158 ns | 20.30 ns | 16.910 ns | 23.61 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 21.42 ns | 0.452 ns | 1.236 ns | 0.133 ns | 21.31 ns | 18.864 ns | 25.06 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 21.43 ns | 0.430 ns | 0.478 ns | 0.110 ns | 21.41 ns | 20.148 ns | 22.18 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 21.62 ns | 0.714 ns | 1.979 ns | 0.210 ns | 21.26 ns | 18.687 ns | 27.30 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 22.12 ns | 0.454 ns | 1.289 ns | 0.134 ns | 21.86 ns | 19.729 ns | 24.98 ns | 0.0050 |     - |     - |      32 B |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 23.05 ns | 0.512 ns | 1.503 ns | 0.151 ns | 22.81 ns | 20.910 ns | 27.31 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 24.17 ns | 0.501 ns | 0.890 ns | 0.141 ns | 24.28 ns | 21.745 ns | 25.89 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 24.27 ns | 0.219 ns | 0.205 ns | 0.053 ns | 24.29 ns | 23.942 ns | 24.62 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 25.01 ns | 0.512 ns | 0.503 ns | 0.126 ns | 25.05 ns | 24.036 ns | 25.70 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 27.52 ns | 0.991 ns | 2.921 ns | 0.292 ns | 28.82 ns | 20.033 ns | 30.92 ns | 0.0050 |     - |     - |      32 B |
