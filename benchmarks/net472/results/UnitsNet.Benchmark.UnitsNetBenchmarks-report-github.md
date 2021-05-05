``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-YBMYVO : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                 Method |         Mean |      Error |     StdDev |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |-------------:|-----------:|-----------:|-------:|-------:|------:|----------:|
|            Constructor |     15.04 ns |   0.110 ns |   0.092 ns |      - |      - |     - |         - |
|         Constructor_SI |    596.24 ns |   7.898 ns |   7.387 ns | 0.0296 |      - |     - |     201 B |
|             FromMethod |     35.64 ns |   0.520 ns |   0.486 ns |      - |      - |     - |         - |
|             ToProperty |     10.31 ns |   0.107 ns |   0.095 ns |      - |      - |     - |         - |
|                     As |     10.40 ns |   0.142 ns |   0.133 ns |      - |      - |     - |         - |
|                  As_SI |    575.58 ns |   4.935 ns |   4.616 ns | 0.0296 |      - |     - |     201 B |
|                 ToUnit |     23.09 ns |   0.346 ns |   0.324 ns |      - |      - |     - |         - |
|              ToUnit_SI |    584.09 ns |   7.344 ns |   6.870 ns | 0.0296 |      - |     - |     201 B |
|           ToStringTest |  2,102.07 ns |  26.072 ns |  24.387 ns | 0.1869 |      - |     - |    1244 B |
|                  Parse | 59,299.38 ns | 451.349 ns | 352.384 ns | 8.4839 | 0.3052 |     - |   54376 B |
|          TryParseValid | 61,031.75 ns | 386.579 ns | 361.606 ns | 8.4839 | 0.3052 |     - |   54352 B |
|        TryParseInvalid | 68,311.68 ns | 610.306 ns | 541.021 ns | 8.3008 | 0.2441 |     - |   53896 B |
|           QuantityFrom |  1,807.23 ns |  36.904 ns |  98.505 ns |      - |      - |     - |    8192 B |
|           IQuantity_As |     22.19 ns |   0.381 ns |   0.357 ns | 0.0038 |      - |     - |      24 B |
|        IQuantity_As_SI |    593.22 ns |   6.654 ns |   5.899 ns | 0.0296 |      - |     - |     201 B |
|       IQuantity_ToUnit |     32.76 ns |   0.572 ns |   0.535 ns | 0.0088 |      - |     - |      56 B |
| IQuantity_ToStringTest |  2,325.76 ns |  29.644 ns |  26.279 ns | 0.1869 |      - |     - |    1244 B |
