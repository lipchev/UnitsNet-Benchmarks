``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-INGJPZ : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|           Method |                          Categories |           x |           y |      Mean |     Error |    StdDev |    StdErr |    Median |       Min |       Max |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------- |------------------------------------ |------------ |------------ |----------:|----------:|----------:|----------:|----------:|----------:|----------:|-------:|------:|------:|----------:|
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m |  8.568 ns | 0.1871 ns | 0.1922 ns | 0.0466 ns |  8.561 ns |  8.257 ns |  8.974 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm |  8.832 ns | 0.1984 ns | 0.1759 ns | 0.0470 ns |  8.847 ns |  8.543 ns |  9.103 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m |  9.464 ns | 0.2096 ns | 0.5372 ns | 0.0612 ns |  9.250 ns |  8.798 ns | 10.963 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 10.302 ns | 0.2177 ns | 0.2036 ns | 0.0526 ns | 10.353 ns |  9.927 ns | 10.740 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 10.426 ns | 0.1469 ns | 0.1303 ns | 0.0348 ns | 10.431 ns | 10.174 ns | 10.610 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 10.507 ns | 0.2227 ns | 0.2817 ns | 0.0587 ns | 10.496 ns |  9.979 ns | 11.092 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 10.529 ns | 0.1057 ns | 0.0937 ns | 0.0250 ns | 10.548 ns | 10.310 ns | 10.653 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 10.690 ns | 0.2375 ns | 0.2640 ns | 0.0606 ns | 10.640 ns | 10.224 ns | 11.210 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 10.692 ns | 0.2069 ns | 0.1834 ns | 0.0490 ns | 10.713 ns | 10.440 ns | 10.992 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 13.584 ns | 0.2150 ns | 0.1796 ns | 0.0498 ns | 13.644 ns | 13.325 ns | 13.840 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 13.772 ns | 0.2869 ns | 0.2543 ns | 0.0680 ns | 13.698 ns | 13.367 ns | 14.234 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 14.701 ns | 0.3125 ns | 0.4772 ns | 0.0857 ns | 14.571 ns | 13.961 ns | 15.804 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 14.702 ns | 0.3177 ns | 0.5888 ns | 0.0898 ns | 14.561 ns | 13.864 ns | 16.104 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 15.014 ns | 0.3168 ns | 0.3254 ns | 0.0789 ns | 14.971 ns | 14.490 ns | 15.703 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 16.546 ns | 0.2211 ns | 0.1960 ns | 0.0524 ns | 16.547 ns | 16.191 ns | 16.929 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 16.570 ns | 0.3170 ns | 0.2810 ns | 0.0751 ns | 16.551 ns | 16.026 ns | 17.115 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 16.912 ns | 0.3366 ns | 0.4494 ns | 0.0899 ns | 16.888 ns | 16.186 ns | 18.011 ns | 0.0050 |     - |     - |      32 B |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 17.498 ns | 0.3610 ns | 0.4694 ns | 0.0958 ns | 17.344 ns | 16.971 ns | 18.686 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 17.570 ns | 0.2293 ns | 0.1915 ns | 0.0531 ns | 17.632 ns | 17.211 ns | 17.881 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 18.830 ns | 0.3407 ns | 0.3020 ns | 0.0807 ns | 18.941 ns | 18.264 ns | 19.179 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 20.643 ns | 0.4246 ns | 0.5953 ns | 0.1146 ns | 20.484 ns | 19.634 ns | 22.106 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 20.850 ns | 0.4735 ns | 1.3961 ns | 0.1396 ns | 20.762 ns | 18.187 ns | 23.633 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 21.041 ns | 0.4407 ns | 0.3907 ns | 0.1044 ns | 20.968 ns | 20.519 ns | 21.878 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 21.202 ns | 0.4308 ns | 0.6178 ns | 0.1168 ns | 21.176 ns | 20.274 ns | 22.463 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 23.903 ns | 0.4842 ns | 0.4973 ns | 0.1206 ns | 23.939 ns | 22.989 ns | 24.659 ns | 0.0050 |     - |     - |      32 B |
