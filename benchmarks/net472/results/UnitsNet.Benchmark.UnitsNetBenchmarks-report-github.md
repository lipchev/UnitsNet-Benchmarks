``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-PJEUQR : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationTime=500.0000 ms  

```
|                 Method |          Mean |         Error |      StdDev |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|------------:|-------:|-------:|------:|----------:|
|            Constructor |     13.465 ns |     0.2872 ns |   0.2687 ns |      - |      - |     - |         - |
|         Constructor_SI |    507.134 ns |     7.5271 ns |   6.6726 ns | 0.0297 |      - |     - |     201 B |
|             FromMethod |     33.215 ns |     0.4961 ns |   0.4398 ns |      - |      - |     - |         - |
|             ToProperty |      8.446 ns |     0.2090 ns |   0.2146 ns |      - |      - |     - |         - |
|                     As |      8.144 ns |     0.1565 ns |   0.1387 ns |      - |      - |     - |         - |
|                  As_SI |    505.857 ns |     9.5877 ns |  10.6567 ns | 0.0299 |      - |     - |     201 B |
|                 ToUnit |     20.582 ns |     0.3083 ns |   0.2733 ns |      - |      - |     - |         - |
|              ToUnit_SI |    518.363 ns |     9.4432 ns |   8.3711 ns | 0.0301 |      - |     - |     201 B |
|           ToStringTest |  1,857.396 ns |    25.8698 ns |  21.6024 ns | 0.1890 |      - |     - |    1244 B |
|                  Parse | 56,064.445 ns |   849.8621 ns | 794.9616 ns | 8.4024 | 0.3317 |     - |   54377 B |
|          TryParseValid | 56,898.430 ns | 1,065.5493 ns | 996.7155 ns | 8.3808 | 0.3352 |     - |   54353 B |
|        TryParseInvalid | 60,200.057 ns |   887.4927 ns | 830.1612 ns | 8.2850 | 0.2367 |     - |   53894 B |
|           QuantityFrom |  2,122.642 ns |    41.6391 ns |  86.9162 ns |      - |      - |     - |    8192 B |
|           IQuantity_As |     18.763 ns |     0.3516 ns |   0.3289 ns | 0.0037 |      - |     - |      24 B |
|        IQuantity_As_SI |    507.515 ns |     7.3785 ns |   6.9019 ns | 0.0295 |      - |     - |     201 B |
|       IQuantity_ToUnit |     29.101 ns |     0.5963 ns |   0.5578 ns | 0.0088 |      - |     - |      56 B |
| IQuantity_ToStringTest |  1,888.484 ns |    37.3354 ns |  36.6683 ns | 0.1917 |      - |     - |    1244 B |
