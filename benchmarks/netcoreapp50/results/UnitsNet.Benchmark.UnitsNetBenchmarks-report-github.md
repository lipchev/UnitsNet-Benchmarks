``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-EHBAXH : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                 Method |          Mean |         Error |        StdDev |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |      9.875 ns |      2.943 ns |     0.1613 ns |      - |      - |     - |         - |
|         Constructor_SI |    312.556 ns |     60.768 ns |     3.3309 ns | 0.0119 |      - |     - |     192 B |
|             FromMethod |     26.854 ns |      5.262 ns |     0.2885 ns |      - |      - |     - |         - |
|             ToProperty |      8.230 ns |      3.072 ns |     0.1684 ns |      - |      - |     - |         - |
|                     As |      8.422 ns |      5.414 ns |     0.2968 ns |      - |      - |     - |         - |
|                  As_SI |    310.192 ns |    104.371 ns |     5.7209 ns | 0.0119 |      - |     - |     192 B |
|                 ToUnit |     17.476 ns |     10.154 ns |     0.5565 ns |      - |      - |     - |         - |
|              ToUnit_SI |    320.800 ns |     60.766 ns |     3.3308 ns | 0.0119 |      - |     - |     192 B |
|           ToStringTest |  1,277.948 ns |    743.047 ns |    40.7289 ns | 0.0591 |      - |     - |     944 B |
|                  Parse | 50,748.415 ns | 27,050.939 ns | 1,482.7533 ns | 2.0752 | 0.0610 |     - |   33344 B |
|          TryParseValid | 48,146.631 ns | 17,979.564 ns |   985.5206 ns | 2.0752 | 0.0610 |     - |   33320 B |
|        TryParseInvalid | 56,263.947 ns | 50,231.988 ns | 2,753.3848 ns | 2.0752 | 0.0610 |     - |   32928 B |
|           QuantityFrom |  3,466.667 ns | 11,729.073 ns |   642.9101 ns |      - |      - |     - |      56 B |
|           IQuantity_As |     17.627 ns |     26.432 ns |     1.4488 ns | 0.0015 |      - |     - |      24 B |
|        IQuantity_As_SI |    347.304 ns |     88.019 ns |     4.8246 ns | 0.0119 |      - |     - |     192 B |
|       IQuantity_ToUnit |     30.725 ns |     20.517 ns |     1.1246 ns | 0.0035 |      - |     - |      56 B |
| IQuantity_ToStringTest |  1,449.824 ns |    131.176 ns |     7.1902 ns | 0.0591 |      - |     - |     944 B |
