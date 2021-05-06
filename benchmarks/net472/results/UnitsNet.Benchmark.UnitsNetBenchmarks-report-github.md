``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-CHCBSF : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                 Method |         Mean |      Error |     StdDev |       Median |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |-------------:|-----------:|-----------:|-------------:|-------:|-------:|------:|----------:|
|            Constructor |     15.42 ns |   0.201 ns |   0.188 ns |     15.43 ns |      - |      - |     - |         - |
|         Constructor_SI |    613.60 ns |  10.288 ns |  11.435 ns |    612.27 ns | 0.0296 |      - |     - |     201 B |
|             FromMethod |     36.07 ns |   0.592 ns |   0.749 ns |     35.81 ns |      - |      - |     - |         - |
|             ToProperty |     10.59 ns |   0.064 ns |   0.060 ns |     10.60 ns |      - |      - |     - |         - |
|                     As |     10.65 ns |   0.124 ns |   0.116 ns |     10.67 ns |      - |      - |     - |         - |
|                  As_SI |    586.63 ns |   4.138 ns |   3.871 ns |    586.96 ns | 0.0296 |      - |     - |     201 B |
|                 ToUnit |     23.48 ns |   0.161 ns |   0.151 ns |     23.50 ns |      - |      - |     - |         - |
|              ToUnit_SI |    605.37 ns |   3.950 ns |   3.695 ns |    605.49 ns | 0.0296 |      - |     - |     201 B |
|           ToStringTest |  2,247.27 ns |  39.471 ns |  34.990 ns |  2,246.08 ns | 0.1869 |      - |     - |    1244 B |
|                  Parse | 63,996.43 ns | 630.503 ns | 589.773 ns | 63,936.57 ns | 8.3008 | 0.2441 |     - |   54377 B |
|          TryParseValid | 64,317.36 ns | 692.603 ns | 647.861 ns | 64,324.22 ns | 8.3008 | 0.2441 |     - |   54353 B |
|        TryParseInvalid | 69,150.01 ns | 708.668 ns | 662.889 ns | 69,391.41 ns | 8.3008 | 0.2441 |     - |   53896 B |
|           QuantityFrom |  1,944.07 ns |  37.730 ns |  83.607 ns |  1,900.00 ns |      - |      - |     - |    8192 B |
|           IQuantity_As |     23.14 ns |   0.247 ns |   0.231 ns |     23.14 ns | 0.0038 |      - |     - |      24 B |
|        IQuantity_As_SI |    605.88 ns |   5.335 ns |   4.990 ns |    604.30 ns | 0.0296 |      - |     - |     201 B |
|       IQuantity_ToUnit |     35.03 ns |   0.804 ns |   0.860 ns |     35.12 ns | 0.0088 |      - |     - |      56 B |
| IQuantity_ToStringTest |  2,293.34 ns |  28.880 ns |  27.014 ns |  2,285.20 ns | 0.1869 |      - |     - |    1244 B |
