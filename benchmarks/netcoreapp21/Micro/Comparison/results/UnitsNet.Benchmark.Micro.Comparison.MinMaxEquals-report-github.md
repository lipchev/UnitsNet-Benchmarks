``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-BSORYE : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|           Method |                          Categories |           x |           y |      Mean |     Error |    StdDev |    StdErr |       Min |      Max |    Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------- |------------------------------------ |------------ |------------ |----------:|----------:|----------:|----------:|----------:|---------:|----------:|-------:|------:|------:|----------:|
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm |  9.999 ns | 1.6466 ns | 0.0903 ns | 0.0521 ns |  9.918 ns | 10.10 ns |  9.984 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 10.071 ns | 0.7091 ns | 0.0389 ns | 0.0224 ns | 10.026 ns | 10.10 ns | 10.088 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 10.961 ns | 4.1612 ns | 0.2281 ns | 0.1317 ns | 10.775 ns | 11.22 ns | 10.893 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 11.961 ns | 6.1301 ns | 0.3360 ns | 0.1940 ns | 11.693 ns | 12.34 ns | 11.851 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 12.065 ns | 1.7790 ns | 0.0975 ns | 0.0563 ns | 11.959 ns | 12.15 ns | 12.086 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 12.146 ns | 3.1055 ns | 0.1702 ns | 0.0983 ns | 11.966 ns | 12.30 ns | 12.167 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 13.210 ns | 4.3072 ns | 0.2361 ns | 0.1363 ns | 13.021 ns | 13.47 ns | 13.135 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 13.245 ns | 3.2047 ns | 0.1757 ns | 0.1014 ns | 13.123 ns | 13.45 ns | 13.167 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 13.392 ns | 2.6062 ns | 0.1429 ns | 0.0825 ns | 13.240 ns | 13.52 ns | 13.413 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 15.239 ns | 2.8880 ns | 0.1583 ns | 0.0914 ns | 15.069 ns | 15.38 ns | 15.265 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 15.384 ns | 1.3460 ns | 0.0738 ns | 0.0426 ns | 15.324 ns | 15.47 ns | 15.362 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 16.021 ns | 4.6192 ns | 0.2532 ns | 0.1462 ns | 15.797 ns | 16.30 ns | 15.969 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 16.503 ns | 1.2448 ns | 0.0682 ns | 0.0394 ns | 16.435 ns | 16.57 ns | 16.504 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 16.544 ns | 1.5407 ns | 0.0844 ns | 0.0488 ns | 16.453 ns | 16.62 ns | 16.558 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 19.524 ns | 4.7785 ns | 0.2619 ns | 0.1512 ns | 19.304 ns | 19.81 ns | 19.455 ns | 0.0050 |     - |     - |      32 B |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 19.640 ns | 5.7373 ns | 0.3145 ns | 0.1816 ns | 19.374 ns | 19.99 ns | 19.560 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 19.739 ns | 1.4316 ns | 0.0785 ns | 0.0453 ns | 19.664 ns | 19.82 ns | 19.734 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 20.371 ns | 2.0092 ns | 0.1101 ns | 0.0636 ns | 20.244 ns | 20.45 ns | 20.422 ns | 0.0050 |     - |     - |      32 B |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 20.410 ns | 6.3564 ns | 0.3484 ns | 0.2012 ns | 20.141 ns | 20.80 ns | 20.286 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 21.352 ns | 1.8051 ns | 0.0989 ns | 0.0571 ns | 21.241 ns | 21.43 ns | 21.386 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 21.707 ns | 5.9996 ns | 0.3289 ns | 0.1899 ns | 21.487 ns | 22.08 ns | 21.548 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 21.854 ns | 3.0091 ns | 0.1649 ns | 0.0952 ns | 21.670 ns | 21.99 ns | 21.906 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 22.561 ns | 9.2849 ns | 0.5089 ns | 0.2938 ns | 22.090 ns | 23.10 ns | 22.493 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 24.148 ns | 2.8997 ns | 0.1589 ns | 0.0918 ns | 24.049 ns | 24.33 ns | 24.064 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 24.563 ns | 9.0419 ns | 0.4956 ns | 0.2861 ns | 24.260 ns | 25.13 ns | 24.294 ns | 0.0050 |     - |     - |      32 B |
