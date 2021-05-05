``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-QPFTIT : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                 Method |          Mean |         Error |        StdDev |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     13.719 ns |     0.2729 ns |     0.2553 ns |      - |      - |     - |         - |
|         Constructor_SI |    529.979 ns |     7.3996 ns |     6.5596 ns | 0.0296 |      - |     - |     201 B |
|             FromMethod |     32.086 ns |     0.6799 ns |     0.6360 ns |      - |      - |     - |         - |
|             ToProperty |      9.327 ns |     0.2273 ns |     0.2126 ns |      - |      - |     - |         - |
|                     As |      9.235 ns |     0.2062 ns |     0.1722 ns |      - |      - |     - |         - |
|                  As_SI |    508.102 ns |     8.0745 ns |     7.1578 ns | 0.0296 |      - |     - |     201 B |
|                 ToUnit |     20.959 ns |     0.4421 ns |     0.4135 ns |      - |      - |     - |         - |
|              ToUnit_SI |    544.935 ns |    10.8936 ns |    17.5911 ns | 0.0296 |      - |     - |     201 B |
|           ToStringTest |  1,888.886 ns |    36.3789 ns |    41.8940 ns | 0.1926 |      - |     - |    1244 B |
|                  Parse | 55,818.754 ns |   900.0704 ns |   797.8890 ns | 8.4839 | 0.3052 |     - |   54376 B |
|          TryParseValid | 55,379.809 ns | 1,085.7623 ns | 1,373.1417 ns | 8.4839 | 0.3052 |     - |   54352 B |
|        TryParseInvalid | 65,179.111 ns |   982.1289 ns |   964.5819 ns | 8.3008 | 0.2441 |     - |   53896 B |
|           QuantityFrom |  1,731.250 ns |    64.6585 ns |   186.5546 ns |      - |      - |     - |    8192 B |
|           IQuantity_As |     19.119 ns |     0.4086 ns |     0.3822 ns | 0.0038 |      - |     - |      24 B |
|        IQuantity_As_SI |    514.637 ns |    10.1371 ns |     9.4822 ns | 0.0296 |      - |     - |     201 B |
|       IQuantity_ToUnit |     29.048 ns |     0.6669 ns |     0.6550 ns | 0.0088 |      - |     - |      56 B |
| IQuantity_ToStringTest |  1,911.289 ns |    32.5987 ns |    30.4928 ns | 0.1869 |      - |     - |    1244 B |
