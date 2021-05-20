``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-UHKNFZ : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|           Method |     Mean |    Error |  StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) |
|----------------- |---------:|---------:|--------:|--------:|---------:|---------:|---------:|------:|---------------- |
|         ToString | 264.8 ns | 88.69 ns | 4.86 ns | 2.81 ns | 259.7 ns | 269.4 ns | 265.3 ns |  1.00 |            Base |
| Decimal_ToString | 132.7 ns | 15.99 ns | 0.88 ns | 0.51 ns | 131.9 ns | 133.6 ns | 132.6 ns |  0.50 |               ? |
