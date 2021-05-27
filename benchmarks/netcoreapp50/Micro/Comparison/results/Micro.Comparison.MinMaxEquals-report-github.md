``` ini

BenchmarkDotNet=v0.13.0, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET SDK=5.0.203
  [Host]     : .NET 5.0.6 (5.0.621.22011), X64 RyuJIT
  Job-LJQQAX : .NET 5.0.6 (5.0.621.22011), X64 RyuJIT

Runtime=.NET 5.0  Toolchain=netcoreapp50  

```
|           Method |                          Categories |           x |           y |      Mean |     Error |    StdDev |    StdErr |       Min |       Max |    Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------- |------------------------------------ |------------ |------------ |----------:|----------:|----------:|----------:|----------:|----------:|----------:|-------:|------:|------:|----------:|
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m |  8.507 ns | 0.1891 ns | 0.1769 ns | 0.0457 ns |  8.237 ns |  8.874 ns |  8.538 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm |  8.528 ns | 0.0965 ns | 0.0855 ns | 0.0229 ns |  8.429 ns |  8.677 ns |  8.531 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m |  8.686 ns | 0.1094 ns | 0.1024 ns | 0.0264 ns |  8.493 ns |  8.871 ns |  8.677 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 12.402 ns | 0.1712 ns | 0.1518 ns | 0.0406 ns | 12.073 ns | 12.628 ns | 12.380 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 12.724 ns | 0.1859 ns | 0.1739 ns | 0.0449 ns | 12.437 ns | 12.955 ns | 12.802 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 12.781 ns | 0.2159 ns | 0.2020 ns | 0.0521 ns | 12.527 ns | 13.200 ns | 12.737 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 12.824 ns | 0.2224 ns | 0.2184 ns | 0.0546 ns | 12.520 ns | 13.171 ns | 12.810 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 12.987 ns | 0.2332 ns | 0.2182 ns | 0.0563 ns | 12.627 ns | 13.368 ns | 13.074 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 13.123 ns | 0.2890 ns | 0.2838 ns | 0.0710 ns | 12.711 ns | 13.707 ns | 13.033 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 14.848 ns | 0.3187 ns | 0.4468 ns | 0.0860 ns | 14.105 ns | 15.972 ns | 14.689 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 14.917 ns | 0.3239 ns | 0.3029 ns | 0.0782 ns | 14.503 ns | 15.529 ns | 14.913 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 15.680 ns | 0.2095 ns | 0.1857 ns | 0.0496 ns | 15.385 ns | 16.013 ns | 15.671 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 16.140 ns | 0.1637 ns | 0.1451 ns | 0.0388 ns | 15.840 ns | 16.420 ns | 16.164 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 16.387 ns | 0.3221 ns | 0.3013 ns | 0.0778 ns | 16.003 ns | 17.093 ns | 16.391 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 21.842 ns | 0.2819 ns | 0.2499 ns | 0.0668 ns | 21.539 ns | 22.445 ns | 21.807 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 21.986 ns | 0.3472 ns | 0.3248 ns | 0.0839 ns | 21.587 ns | 22.773 ns | 21.912 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 22.094 ns | 0.2050 ns | 0.1712 ns | 0.0475 ns | 21.695 ns | 22.426 ns | 22.087 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 22.574 ns | 0.3992 ns | 0.3734 ns | 0.0964 ns | 21.878 ns | 23.087 ns | 22.539 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 23.375 ns | 0.3114 ns | 0.2912 ns | 0.0752 ns | 22.830 ns | 23.800 ns | 23.381 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 24.745 ns | 0.5139 ns | 0.7204 ns | 0.1386 ns | 23.794 ns | 25.859 ns | 24.579 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 25.378 ns | 0.4958 ns | 0.5510 ns | 0.1264 ns | 24.319 ns | 26.442 ns | 25.371 ns | 0.0017 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 25.851 ns | 0.4538 ns | 0.4023 ns | 0.1075 ns | 25.150 ns | 26.573 ns | 25.813 ns | 0.0017 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 26.172 ns | 0.5173 ns | 0.5081 ns | 0.1270 ns | 25.358 ns | 27.242 ns | 26.110 ns | 0.0017 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 29.343 ns | 0.4315 ns | 0.4036 ns | 0.1042 ns | 28.502 ns | 30.086 ns | 29.314 ns | 0.0017 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 30.203 ns | 0.6122 ns | 0.5726 ns | 0.1479 ns | 29.408 ns | 31.314 ns | 30.166 ns | 0.0017 |     - |     - |      32 B |
