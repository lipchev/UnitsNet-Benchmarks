``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-ZFVBQF : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|           Method |                          Categories |           x |           y |      Mean |     Error |    StdDev |    StdErr |       Min |      Max |    Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------- |------------------------------------ |------------ |------------ |----------:|----------:|----------:|----------:|----------:|---------:|----------:|-------:|------:|------:|----------:|
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m |  9.627 ns | 0.2118 ns | 0.2678 ns | 0.0558 ns |  9.255 ns | 10.13 ns |  9.484 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm |  9.759 ns | 0.1878 ns | 0.2163 ns | 0.0484 ns |  9.337 ns | 10.28 ns |  9.716 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 10.368 ns | 0.2292 ns | 0.2815 ns | 0.0600 ns |  9.935 ns | 10.83 ns | 10.320 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 11.632 ns | 0.2477 ns | 0.3553 ns | 0.0671 ns | 11.077 ns | 12.41 ns | 11.544 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 11.834 ns | 0.2588 ns | 0.2980 ns | 0.0666 ns | 11.423 ns | 12.42 ns | 11.760 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 11.932 ns | 0.2614 ns | 0.3664 ns | 0.0705 ns | 11.363 ns | 12.63 ns | 11.915 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 11.975 ns | 0.2422 ns | 0.2266 ns | 0.0585 ns | 11.678 ns | 12.49 ns | 11.927 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 12.032 ns | 0.2600 ns | 0.3194 ns | 0.0681 ns | 11.548 ns | 12.72 ns | 11.961 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 12.040 ns | 0.2648 ns | 0.2943 ns | 0.0675 ns | 11.615 ns | 12.68 ns | 12.037 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 15.089 ns | 0.3158 ns | 0.3759 ns | 0.0820 ns | 14.404 ns | 15.82 ns | 14.982 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 15.373 ns | 0.3191 ns | 0.4149 ns | 0.0847 ns | 14.861 ns | 16.08 ns | 15.267 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 15.455 ns | 0.3296 ns | 0.4933 ns | 0.0901 ns | 14.497 ns | 16.54 ns | 15.333 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 15.788 ns | 0.3404 ns | 0.4883 ns | 0.0923 ns | 15.061 ns | 16.79 ns | 15.622 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 16.630 ns | 0.3507 ns | 0.5663 ns | 0.0971 ns | 15.707 ns | 17.71 ns | 16.591 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 18.250 ns | 0.2368 ns | 0.1978 ns | 0.0548 ns | 17.946 ns | 18.49 ns | 18.263 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 18.669 ns | 0.3330 ns | 0.3115 ns | 0.0804 ns | 18.320 ns | 19.35 ns | 18.591 ns | 0.0050 |     - |     - |      32 B |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 18.996 ns | 0.3954 ns | 0.4061 ns | 0.0985 ns | 18.454 ns | 19.62 ns | 18.867 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 19.171 ns | 0.3338 ns | 0.3123 ns | 0.0806 ns | 18.832 ns | 19.84 ns | 19.087 ns | 0.0050 |     - |     - |      32 B |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 19.370 ns | 0.3972 ns | 0.4728 ns | 0.1032 ns | 18.646 ns | 20.26 ns | 19.369 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 19.462 ns | 0.4083 ns | 0.4539 ns | 0.1041 ns | 18.982 ns | 20.38 ns | 19.268 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 19.560 ns | 0.3834 ns | 0.3587 ns | 0.0926 ns | 18.963 ns | 20.12 ns | 19.650 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 21.548 ns | 0.3657 ns | 0.3421 ns | 0.0883 ns | 21.127 ns | 22.29 ns | 21.519 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 22.272 ns | 0.4479 ns | 0.5824 ns | 0.1189 ns | 21.425 ns | 23.29 ns | 22.255 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 23.298 ns | 0.4648 ns | 0.5533 ns | 0.1207 ns | 22.229 ns | 24.09 ns | 23.320 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 24.012 ns | 0.4919 ns | 0.5051 ns | 0.1225 ns | 23.156 ns | 24.99 ns | 24.018 ns | 0.0050 |     - |     - |      32 B |
