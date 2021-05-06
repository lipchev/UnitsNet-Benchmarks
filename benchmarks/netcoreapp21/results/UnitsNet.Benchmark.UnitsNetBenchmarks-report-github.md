``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8272CL CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-BVNZME : .NET Core 2.1.27 (CoreCLR 4.6.29916.01, CoreFX 4.6.29916.03), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                 Method |          Mean |         Error |        StdDev |        Median |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     10.790 ns |     0.2379 ns |     0.2443 ns |     10.868 ns |      - |      - |     - |         - |
|         Constructor_SI |    518.625 ns |    10.2732 ns |    17.7207 ns |    527.013 ns | 0.0286 |      - |     - |     192 B |
|             FromMethod |     25.070 ns |     0.5278 ns |     0.7399 ns |     25.452 ns |      - |      - |     - |         - |
|             ToProperty |      8.113 ns |     0.1969 ns |     0.2344 ns |      8.193 ns |      - |      - |     - |         - |
|                     As |      8.009 ns |     0.1989 ns |     0.2978 ns |      8.159 ns |      - |      - |     - |         - |
|                  As_SI |    515.590 ns |     1.3775 ns |     1.2211 ns |    516.061 ns | 0.0286 |      - |     - |     192 B |
|                 ToUnit |     17.503 ns |     0.3608 ns |     0.3375 ns |     17.595 ns |      - |      - |     - |         - |
|              ToUnit_SI |    524.814 ns |     0.9814 ns |     0.9180 ns |    524.730 ns | 0.0286 |      - |     - |     192 B |
|           ToStringTest |  2,036.557 ns |    40.3733 ns |    80.6298 ns |  2,074.963 ns | 0.1411 |      - |     - |     952 B |
|                  Parse | 61,556.479 ns |   188.4820 ns |   157.3910 ns | 61,583.142 ns | 6.8359 | 0.2441 |     - |   44816 B |
|          TryParseValid | 61,602.011 ns | 1,153.3899 ns | 1,234.1143 ns | 62,039.789 ns | 6.8359 | 0.2441 |     - |   44792 B |
|        TryParseInvalid | 67,349.855 ns | 1,295.5768 ns | 1,272.4297 ns | 67,560.492 ns | 6.7139 | 0.2441 |     - |   44392 B |
|           QuantityFrom |  1,787.368 ns |    43.8044 ns |   125.6829 ns |  1,800.000 ns |      - |      - |     - |      56 B |
|           IQuantity_As |     21.325 ns |     0.4624 ns |     0.6173 ns |     21.408 ns | 0.0038 |      - |     - |      24 B |
|        IQuantity_As_SI |    522.890 ns |     1.7131 ns |     1.6025 ns |    522.634 ns | 0.0286 |      - |     - |     192 B |
|       IQuantity_ToUnit |     29.578 ns |     0.6688 ns |     1.0800 ns |     29.335 ns | 0.0088 |      - |     - |      56 B |
| IQuantity_ToStringTest |  2,152.060 ns |    42.2187 ns |    71.6905 ns |  2,174.314 ns | 0.1411 |      - |     - |     952 B |
