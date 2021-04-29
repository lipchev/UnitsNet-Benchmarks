``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-SLLTCX : .NET Core 2.1.27 (CoreCLR 4.6.29916.01, CoreFX 4.6.29916.03), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationTime=125.0000 ms  

```
|                 Method |           Mean |         Error |         StdDev |         Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------------- |---------------:|--------------:|---------------:|---------------:|-------:|------:|------:|----------:|
|            Constructor |      12.673 ns |     0.3005 ns |      0.5569 ns |      12.540 ns |      - |     - |     - |         - |
|         Constructor_SI |     668.651 ns |    12.0799 ns |     13.4268 ns |     667.021 ns | 0.0103 |     - |     - |     192 B |
|             FromMethod |      35.846 ns |     0.7009 ns |      0.6556 ns |      35.761 ns |      - |     - |     - |         - |
|             ToProperty |       9.769 ns |     0.2400 ns |      0.4010 ns |       9.722 ns |      - |     - |     - |         - |
|                     As |       9.333 ns |     0.2117 ns |      0.1981 ns |       9.332 ns |      - |     - |     - |         - |
|                  As_SI |     677.790 ns |    13.4910 ns |     25.3395 ns |     678.619 ns | 0.0104 |     - |     - |     192 B |
|                 ToUnit |      21.498 ns |     0.4787 ns |      0.8752 ns |      21.414 ns |      - |     - |     - |         - |
|              ToUnit_SI |     700.491 ns |    13.9536 ns |     27.2154 ns |     700.256 ns | 0.0063 |     - |     - |     192 B |
|           ToStringTest |  16,050.562 ns |   457.5875 ns |  1,267.9729 ns |  15,700.000 ns |      - |     - |     - |     952 B |
|                  Parse | 115,038.947 ns | 5,558.3178 ns | 15,947.8558 ns | 109,400.000 ns |      - |     - |     - |   44816 B |
|          TryParseValid | 112,536.842 ns | 4,374.1502 ns | 12,550.2569 ns | 109,200.000 ns |      - |     - |     - |   44792 B |
|        TryParseInvalid | 124,039.130 ns | 7,942.2147 ns | 22,401.1575 ns | 115,950.000 ns |      - |     - |     - |   44392 B |
|           QuantityFrom |   2,231.183 ns |    69.5325 ns |    197.2520 ns |   2,200.000 ns |      - |     - |     - |      56 B |
|           IQuantity_As |      22.719 ns |     0.4966 ns |      0.7280 ns |      22.682 ns | 0.0030 |     - |     - |      24 B |
|        IQuantity_As_SI |     679.016 ns |    13.4015 ns |     25.1712 ns |     680.512 ns | 0.0104 |     - |     - |     192 B |
|       IQuantity_ToUnit |      36.999 ns |     0.8391 ns |      1.5965 ns |      36.917 ns | 0.0077 |     - |     - |      56 B |
| IQuantity_ToStringTest |  16,010.588 ns |   525.6722 ns |  1,421.1852 ns |  15,900.000 ns |      - |     - |     - |     952 B |
