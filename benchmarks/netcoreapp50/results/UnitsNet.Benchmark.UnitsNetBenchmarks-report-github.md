``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-AATCCV : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=1  
IterationTime=100.0000 ms  LaunchCount=1  RunStrategy=ColdStart  
UnrollFactor=1  WarmupCount=1  

```
|                 Method |         Mean | Error | Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------------- |-------------:|------:|------:|------:|------:|----------:|
|            Constructor |     367.5 μs |    NA |     - |     - |     - |         - |
|         Constructor_SI |   1,866.8 μs |    NA |     - |     - |     - |     448 B |
|             FromMethod |     318.6 μs |    NA |     - |     - |     - |         - |
|             ToProperty |   1,286.7 μs |    NA |     - |     - |     - |         - |
|                     As |   1,672.0 μs |    NA |     - |     - |     - |         - |
|                  As_SI |   2,179.5 μs |    NA |     - |     - |     - |     448 B |
|                 ToUnit |   1,099.9 μs |    NA |     - |     - |     - |         - |
|              ToUnit_SI |   1,699.3 μs |    NA |     - |     - |     - |     448 B |
|           ToStringTest |  92,227.6 μs |    NA |     - |     - |     - |    1224 B |
|                  Parse |  89,630.6 μs |    NA |     - |     - |     - |   34128 B |
|          TryParseValid |  91,688.8 μs |    NA |     - |     - |     - |   34104 B |
|        TryParseInvalid |  85,924.5 μs |    NA |     - |     - |     - |   33592 B |
|           QuantityFrom | 837,382.6 μs |    NA |     - |     - |     - |      56 B |
|           IQuantity_As |   1,370.1 μs |    NA |     - |     - |     - |      24 B |
|        IQuantity_As_SI |   1,637.9 μs |    NA |     - |     - |     - |     448 B |
|       IQuantity_ToUnit |   1,073.9 μs |    NA |     - |     - |     - |      56 B |
| IQuantity_ToStringTest |  72,892.7 μs |    NA |     - |     - |     - |    1224 B |
