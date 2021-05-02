``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-EQKQIN : .NET Core 2.1.27 (CoreCLR 4.6.29916.01, CoreFX 4.6.29916.03), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=100  
LaunchCount=3  WarmupCount=15  

```
|                 Method |          Mean |       Error |        StdDev |        Median |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|------------:|--------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     13.067 ns |   0.0359 ns |     0.1864 ns |     13.047 ns |      - |      - |     - |         - |
|         Constructor_SI |    629.387 ns |   1.7787 ns |     9.2227 ns |    630.058 ns | 0.0286 |      - |     - |     192 B |
|             FromMethod |     30.664 ns |   0.0913 ns |     0.4734 ns |     30.635 ns |      - |      - |     - |         - |
|             ToProperty |      9.821 ns |   0.0269 ns |     0.1392 ns |      9.807 ns |      - |      - |     - |         - |
|                     As |      9.858 ns |   0.0239 ns |     0.1241 ns |      9.863 ns |      - |      - |     - |         - |
|                  As_SI |    593.366 ns |   1.8242 ns |     9.4588 ns |    592.379 ns | 0.0286 |      - |     - |     192 B |
|                 ToUnit |     21.150 ns |   0.0512 ns |     0.2654 ns |     21.129 ns |      - |      - |     - |         - |
|              ToUnit_SI |    611.631 ns |   1.6763 ns |     8.6770 ns |    611.151 ns | 0.0286 |      - |     - |     192 B |
|           ToStringTest |  2,343.653 ns |   6.7173 ns |    34.8300 ns |  2,343.443 ns | 0.1411 |      - |     - |     952 B |
|                  Parse | 69,671.782 ns | 206.4900 ns | 1,070.6699 ns | 69,498.315 ns | 6.8359 | 0.2441 |     - |   44816 B |
|          TryParseValid | 69,981.312 ns | 213.6101 ns | 1,107.5886 ns | 69,758.618 ns | 6.8359 | 0.2441 |     - |   44792 B |
|        TryParseInvalid | 76,564.578 ns | 224.0621 ns | 1,167.7539 ns | 76,430.615 ns | 6.7139 | 0.2441 |     - |   44392 B |
|           QuantityFrom |  1,654.514 ns |  20.4075 ns |   104.1664 ns |  1,600.000 ns |      - |      - |     - |      56 B |
|           IQuantity_As |     23.931 ns |   0.0625 ns |     0.3246 ns |     23.925 ns | 0.0038 |      - |     - |      24 B |
|        IQuantity_As_SI |    595.849 ns |   1.6801 ns |     8.7263 ns |    595.776 ns | 0.0286 |      - |     - |     192 B |
|       IQuantity_ToUnit |     32.736 ns |   0.1158 ns |     0.6017 ns |     32.664 ns | 0.0088 |      - |     - |      56 B |
| IQuantity_ToStringTest |  2,351.041 ns |   6.9030 ns |    35.9157 ns |  2,350.281 ns | 0.1411 |      - |     - |     952 B |
