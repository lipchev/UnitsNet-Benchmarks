``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-ZCXTJK : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                 Method |          Mean |         Error |        StdDev |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|-------:|------:|------:|----------:|
|            Constructor |     12.040 ns |      1.421 ns |     0.0779 ns |      - |     - |     - |         - |
|         Constructor_SI |    349.322 ns |    288.330 ns |    15.8043 ns | 0.0072 |     - |     - |     192 B |
|             FromMethod |     33.340 ns |     26.527 ns |     1.4540 ns |      - |     - |     - |         - |
|             ToProperty |      9.770 ns |     18.005 ns |     0.9869 ns |      - |     - |     - |         - |
|                     As |      8.059 ns |      8.690 ns |     0.4763 ns |      - |     - |     - |         - |
|                  As_SI |    351.764 ns |    866.084 ns |    47.4730 ns | 0.0072 |     - |     - |     192 B |
|                 ToUnit |     15.205 ns |      3.157 ns |     0.1731 ns |      - |     - |     - |         - |
|              ToUnit_SI |    318.851 ns |    127.604 ns |     6.9944 ns | 0.0072 |     - |     - |     192 B |
|           ToStringTest |  1,187.305 ns |    658.010 ns |    36.0677 ns | 0.0343 |     - |     - |     944 B |
|                  Parse | 46,977.197 ns | 37,635.735 ns | 2,062.9416 ns | 1.2207 |     - |     - |   33344 B |
|          TryParseValid | 44,489.040 ns | 15,752.915 ns |   863.4704 ns | 1.2207 |     - |     - |   33320 B |
|        TryParseInvalid | 56,539.185 ns | 50,564.033 ns | 2,771.5853 ns | 1.2207 |     - |     - |   32928 B |
|           QuantityFrom |  4,033.333 ns | 12,943.189 ns |   709.4599 ns |      - |     - |     - |      56 B |
|           IQuantity_As |     18.395 ns |      8.884 ns |     0.4870 ns | 0.0009 |     - |     - |      24 B |
|        IQuantity_As_SI |    290.696 ns |    167.964 ns |     9.2067 ns | 0.0072 |     - |     - |     192 B |
|       IQuantity_ToUnit |     24.818 ns |      7.904 ns |     0.4332 ns | 0.0021 |     - |     - |      56 B |
| IQuantity_ToStringTest |  1,268.100 ns |  1,008.041 ns |    55.2541 ns | 0.0343 |     - |     - |     944 B |
