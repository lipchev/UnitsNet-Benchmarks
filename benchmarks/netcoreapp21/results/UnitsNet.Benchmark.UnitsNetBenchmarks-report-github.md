``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-QMPBWP : .NET Core 2.1.27 (CoreCLR 4.6.29916.01, CoreFX 4.6.29916.03), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                 Method |          Mean |         Error |        StdDev |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     13.354 ns |     0.2423 ns |     0.2266 ns |      - |      - |     - |         - |
|         Constructor_SI |    637.024 ns |     9.5153 ns |     8.9006 ns | 0.0286 |      - |     - |     192 B |
|             FromMethod |     31.104 ns |     0.5095 ns |     0.4766 ns |      - |      - |     - |         - |
|             ToProperty |      9.992 ns |     0.1409 ns |     0.1318 ns |      - |      - |     - |         - |
|                     As |     10.039 ns |     0.1126 ns |     0.0998 ns |      - |      - |     - |         - |
|                  As_SI |    617.772 ns |     6.8587 ns |     6.4156 ns | 0.0286 |      - |     - |     192 B |
|                 ToUnit |     21.417 ns |     0.2629 ns |     0.2459 ns |      - |      - |     - |         - |
|              ToUnit_SI |    639.744 ns |     8.5610 ns |     8.0080 ns | 0.0286 |      - |     - |     192 B |
|           ToStringTest |  2,471.774 ns |    35.7786 ns |    33.4673 ns | 0.1411 |      - |     - |     952 B |
|                  Parse | 73,051.691 ns | 1,199.7481 ns | 1,122.2451 ns | 6.8359 | 0.2441 |     - |   44816 B |
|          TryParseValid | 71,901.861 ns | 1,101.6953 ns | 1,030.5264 ns | 6.8359 | 0.2441 |     - |   44792 B |
|        TryParseInvalid | 77,854.365 ns |   986.3918 ns |   922.6715 ns | 6.7139 | 0.2441 |     - |   44392 B |
|           QuantityFrom |  1,952.632 ns |    79.0602 ns |   226.8386 ns |      - |      - |     - |      56 B |
|           IQuantity_As |     23.674 ns |     0.3886 ns |     0.3635 ns | 0.0038 |      - |     - |      24 B |
|        IQuantity_As_SI |    626.726 ns |    11.1163 ns |    10.3981 ns | 0.0286 |      - |     - |     192 B |
|       IQuantity_ToUnit |     32.144 ns |     0.5942 ns |     0.5267 ns | 0.0088 |      - |     - |      56 B |
| IQuantity_ToStringTest |  2,415.250 ns |    45.7008 ns |    42.7486 ns | 0.1411 |      - |     - |     952 B |
