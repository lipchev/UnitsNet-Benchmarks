``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-JMDZQA : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationTime=125.0000 ms  

```
|                 Method |           Mean |         Error |         StdDev |         Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------------- |---------------:|--------------:|---------------:|---------------:|-------:|------:|------:|----------:|
|            Constructor |      11.083 ns |     0.2624 ns |      0.2577 ns |      11.040 ns |      - |     - |     - |         - |
|         Constructor_SI |     368.999 ns |     6.4498 ns |      7.6780 ns |     367.516 ns | 0.0116 |     - |     - |     192 B |
|             FromMethod |      29.736 ns |     0.6344 ns |      0.5934 ns |      29.702 ns |      - |     - |     - |         - |
|             ToProperty |       9.237 ns |     0.2291 ns |      0.2031 ns |       9.259 ns |      - |     - |     - |         - |
|                     As |       9.307 ns |     0.1979 ns |      0.1851 ns |       9.291 ns |      - |     - |     - |         - |
|                  As_SI |     375.220 ns |     5.9921 ns |      5.3119 ns |     376.398 ns | 0.0122 |     - |     - |     192 B |
|                 ToUnit |      19.296 ns |     0.4368 ns |      0.5030 ns |      19.220 ns |      - |     - |     - |         - |
|              ToUnit_SI |     387.240 ns |     7.5670 ns |     11.7809 ns |     383.270 ns | 0.0122 |     - |     - |     192 B |
|           ToStringTest |  20,387.692 ns |   405.5428 ns |    947.9431 ns |  20,500.000 ns |      - |     - |     - |     944 B |
|                  Parse | 121,994.505 ns | 3,012.1147 ns |  8,446.2926 ns | 117,700.000 ns |      - |     - |     - |   33632 B |
|          TryParseValid | 117,570.667 ns | 2,324.0178 ns |  5,873.0896 ns | 115,600.000 ns |      - |     - |     - |   33608 B |
|        TryParseInvalid | 120,798.889 ns | 4,302.9754 ns | 11,994.9755 ns | 117,250.000 ns |      - |     - |     - |   32928 B |
|           QuantityFrom |   3,279.348 ns |    65.1289 ns |    183.6971 ns |   3,300.000 ns |      - |     - |     - |      56 B |
|           IQuantity_As |      20.814 ns |     0.3938 ns |      0.3491 ns |      20.801 ns | 0.0015 |     - |     - |      24 B |
|        IQuantity_As_SI |     392.312 ns |     7.4822 ns |      8.3164 ns |     391.466 ns | 0.0093 |     - |     - |     192 B |
|       IQuantity_ToUnit |      32.175 ns |     0.7772 ns |      1.9211 ns |      32.149 ns | 0.0034 |     - |     - |      56 B |
| IQuantity_ToStringTest |  20,088.506 ns |   403.7713 ns |  1,105.3175 ns |  20,200.000 ns |      - |     - |     - |     944 B |
