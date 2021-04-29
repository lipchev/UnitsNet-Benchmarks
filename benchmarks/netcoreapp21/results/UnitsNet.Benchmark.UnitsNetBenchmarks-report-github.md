``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-MCYPHG : .NET Core 2.1.27 (CoreCLR 4.6.29916.01, CoreFX 4.6.29916.03), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationTime=125.0000 ms  

```
|                 Method |           Mean |         Error |         StdDev |         Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------------- |---------------:|--------------:|---------------:|---------------:|-------:|------:|------:|----------:|
|            Constructor |      12.076 ns |     0.2768 ns |      0.7146 ns |      11.944 ns |      - |     - |     - |         - |
|         Constructor_SI |     606.027 ns |    12.0043 ns |     21.0246 ns |     603.304 ns | 0.0187 |     - |     - |     192 B |
|             FromMethod |      28.010 ns |     0.5672 ns |      0.9934 ns |      28.113 ns |      - |     - |     - |         - |
|             ToProperty |       9.661 ns |     0.2311 ns |      0.5264 ns |       9.644 ns |      - |     - |     - |         - |
|                     As |       9.327 ns |     0.2308 ns |      0.4391 ns |       9.335 ns |      - |     - |     - |         - |
|                  As_SI |     561.931 ns |    11.2693 ns |     21.9798 ns |     560.190 ns | 0.0218 |     - |     - |     192 B |
|                 ToUnit |      19.443 ns |     0.4268 ns |      1.0549 ns |      19.350 ns |      - |     - |     - |         - |
|              ToUnit_SI |     575.159 ns |    10.5871 ns |     19.3590 ns |     572.082 ns | 0.0181 |     - |     - |     192 B |
|           ToStringTest |  14,564.211 ns |   381.1837 ns |  1,093.6875 ns |  14,600.000 ns |      - |     - |     - |     952 B |
|                  Parse | 107,469.697 ns | 3,321.7073 ns |  9,741.9926 ns | 108,000.000 ns |      - |     - |     - |   44816 B |
|          TryParseValid | 103,054.167 ns | 4,396.5265 ns | 12,684.9842 ns | 105,750.000 ns |      - |     - |     - |   44792 B |
|        TryParseInvalid | 106,784.694 ns | 3,769.6173 ns | 10,996.1507 ns | 110,000.000 ns |      - |     - |     - |   44392 B |
|           QuantityFrom |   1,821.429 ns |   101.7482 ns |    296.8043 ns |   1,700.000 ns |      - |     - |     - |      56 B |
|           IQuantity_As |      20.725 ns |     0.4554 ns |      0.9405 ns |      20.643 ns | 0.0034 |     - |     - |      24 B |
|        IQuantity_As_SI |     567.604 ns |    11.1898 ns |     20.1775 ns |     563.790 ns | 0.0187 |     - |     - |     192 B |
|       IQuantity_ToUnit |      29.737 ns |     0.6313 ns |      1.1222 ns |      29.406 ns | 0.0082 |     - |     - |      56 B |
| IQuantity_ToStringTest |  15,076.667 ns |   362.5025 ns |  1,010.5122 ns |  15,100.000 ns |      - |     - |     - |     952 B |
