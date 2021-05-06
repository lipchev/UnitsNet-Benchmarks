``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-FQLGPW : .NET Core 2.1.27 (CoreCLR 4.6.29916.01, CoreFX 4.6.29916.03), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                 Method |          Mean |         Error |        StdDev |        Median |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     13.393 ns |     0.2652 ns |     0.2480 ns |     13.322 ns |      - |      - |     - |         - |
|         Constructor_SI |    644.645 ns |     7.6400 ns |     6.7727 ns |    645.278 ns | 0.0267 |      - |     - |     192 B |
|             FromMethod |     33.926 ns |     0.4323 ns |     0.3832 ns |     33.889 ns |      - |      - |     - |         - |
|             ToProperty |      9.724 ns |     0.1971 ns |     0.1843 ns |      9.683 ns |      - |      - |     - |         - |
|                     As |      9.762 ns |     0.1456 ns |     0.1362 ns |      9.761 ns |      - |      - |     - |         - |
|                  As_SI |    624.583 ns |     9.8712 ns |     9.2335 ns |    627.913 ns | 0.0267 |      - |     - |     192 B |
|                 ToUnit |     21.499 ns |     0.3812 ns |     0.3566 ns |     21.478 ns |      - |      - |     - |         - |
|              ToUnit_SI |    633.537 ns |     8.4128 ns |     7.8693 ns |    634.107 ns | 0.0267 |      - |     - |     192 B |
|           ToStringTest |  2,331.470 ns |    45.4325 ns |    42.4976 ns |  2,343.670 ns | 0.1373 |      - |     - |     952 B |
|                  Parse | 79,619.160 ns | 1,527.5075 ns | 1,759.0799 ns | 79,443.524 ns | 6.7139 | 0.2441 |     - |   44816 B |
|          TryParseValid | 78,696.417 ns | 1,499.0589 ns | 1,895.8295 ns | 78,565.942 ns | 6.7139 | 0.2441 |     - |   44792 B |
|        TryParseInvalid | 83,001.796 ns | 1,369.1779 ns | 1,280.7299 ns | 82,812.170 ns | 6.5918 | 0.2441 |     - |   44392 B |
|           QuantityFrom |  2,367.677 ns |    51.9686 ns |   152.4148 ns |  2,300.000 ns |      - |      - |     - |      56 B |
|           IQuantity_As |     22.752 ns |     0.2480 ns |     0.2198 ns |     22.741 ns | 0.0037 |      - |     - |      24 B |
|        IQuantity_As_SI |    631.162 ns |    10.6071 ns |     9.9219 ns |    631.796 ns | 0.0267 |      - |     - |     192 B |
|       IQuantity_ToUnit |     33.857 ns |     0.6649 ns |     0.5894 ns |     33.793 ns | 0.0087 |      - |     - |      56 B |
| IQuantity_ToStringTest |  2,423.022 ns |    46.2805 ns |    47.5266 ns |  2,428.254 ns | 0.1373 |      - |     - |     952 B |
|             Min_Double | 10,191.360 ns |   117.1907 ns |   103.8865 ns | 10,182.157 ns |      - |      - |     - |         - |
