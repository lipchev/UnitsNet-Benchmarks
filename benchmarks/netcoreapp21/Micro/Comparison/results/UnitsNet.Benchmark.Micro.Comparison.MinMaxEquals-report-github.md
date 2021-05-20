``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-HTBWYS : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|           Method |                          Categories |           x |           y |      Mean |     Error |    StdDev |    StdErr |       Min |       Max |    Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------- |------------------------------------ |------------ |------------ |----------:|----------:|----------:|----------:|----------:|----------:|----------:|-------:|------:|------:|----------:|
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm |  9.492 ns |  4.109 ns | 0.2252 ns | 0.1300 ns |  9.352 ns |  9.751 ns |  9.371 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m |  9.807 ns |  1.815 ns | 0.0995 ns | 0.0574 ns |  9.694 ns |  9.883 ns |  9.844 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 10.255 ns |  6.347 ns | 0.3479 ns | 0.2008 ns |  9.992 ns | 10.649 ns | 10.123 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 11.492 ns |  4.439 ns | 0.2433 ns | 0.1405 ns | 11.322 ns | 11.771 ns | 11.384 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 11.552 ns |  5.334 ns | 0.2924 ns | 0.1688 ns | 11.301 ns | 11.873 ns | 11.482 ns |      - |     - |     - |         - |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 11.924 ns |  5.566 ns | 0.3051 ns | 0.1761 ns | 11.589 ns | 12.187 ns | 11.994 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 12.548 ns |  2.845 ns | 0.1560 ns | 0.0900 ns | 12.433 ns | 12.726 ns | 12.486 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 12.690 ns |  3.964 ns | 0.2173 ns | 0.1254 ns | 12.478 ns | 12.912 ns | 12.681 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 12.743 ns |  4.082 ns | 0.2237 ns | 0.1292 ns | 12.537 ns | 12.981 ns | 12.712 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 14.631 ns |  3.483 ns | 0.1909 ns | 0.1102 ns | 14.461 ns | 14.837 ns | 14.595 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 14.850 ns |  5.994 ns | 0.3286 ns | 0.1897 ns | 14.600 ns | 15.222 ns | 14.729 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 15.363 ns |  8.189 ns | 0.4489 ns | 0.2592 ns | 14.934 ns | 15.830 ns | 15.326 ns |      - |     - |     - |         - |
|           Equals |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 15.604 ns |  2.370 ns | 0.1299 ns | 0.0750 ns | 15.455 ns | 15.697 ns | 15.659 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 15.646 ns |  4.430 ns | 0.2428 ns | 0.1402 ns | 15.500 ns | 15.926 ns | 15.511 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm | 1,234.56 cm | 18.457 ns |  5.626 ns | 0.3084 ns | 0.1781 ns | 18.259 ns | 18.813 ns | 18.300 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |         0 m | 18.645 ns |  4.423 ns | 0.2424 ns | 0.1400 ns | 18.458 ns | 18.919 ns | 18.559 ns | 0.0050 |     - |     - |      32 B |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 18.754 ns |  3.352 ns | 0.1837 ns | 0.1061 ns | 18.611 ns | 18.962 ns | 18.690 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity |  1,234.56 m |  1,234.56 m | 18.955 ns |  8.325 ns | 0.4563 ns | 0.2635 ns | 18.446 ns | 19.328 ns | 19.092 ns | 0.0050 |     - |     - |      32 B |
|  Equals_Relative |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 19.474 ns |  3.558 ns | 0.1950 ns | 0.1126 ns | 19.295 ns | 19.682 ns | 19.446 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 20.801 ns |  7.149 ns | 0.3918 ns | 0.2262 ns | 20.407 ns | 21.191 ns | 20.806 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 20.830 ns |  3.073 ns | 0.1684 ns | 0.0972 ns | 20.646 ns | 20.976 ns | 20.867 ns |      - |     - |     - |         - |
|  Equals_Absolute |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 20.837 ns |  3.980 ns | 0.2182 ns | 0.1260 ns | 20.706 ns | 21.089 ns | 20.716 ns |      - |     - |     - |         - |
| IQuantity_Equals | Interface,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 20.901 ns |  7.292 ns | 0.3997 ns | 0.2308 ns | 20.480 ns | 21.275 ns | 20.947 ns |      - |     - |     - |         - |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |         0 m | 23.039 ns | 12.173 ns | 0.6672 ns | 0.3852 ns | 22.272 ns | 23.485 ns | 23.359 ns | 0.0050 |     - |     - |      32 B |
|           MinMax |    Struct,Micro,Comparison,Quantity | 1,234.56 cm |        0 km | 23.240 ns | 16.290 ns | 0.8929 ns | 0.5155 ns | 22.246 ns | 23.975 ns | 23.498 ns | 0.0050 |     - |     - |      32 B |
