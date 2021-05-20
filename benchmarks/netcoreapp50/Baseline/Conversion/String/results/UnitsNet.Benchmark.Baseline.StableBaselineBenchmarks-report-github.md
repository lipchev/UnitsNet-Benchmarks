``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-CBRDCX : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|           Method |     Mean |    Error |  StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) |
|----------------- |---------:|---------:|--------:|--------:|---------:|---------:|---------:|------:|---------------- |
|         ToString | 286.3 ns | 42.07 ns | 2.31 ns | 1.33 ns | 284.4 ns | 288.9 ns | 285.7 ns |  1.00 |            Base |
| Decimal_ToString | 126.1 ns | 60.63 ns | 3.32 ns | 1.92 ns | 123.3 ns | 129.8 ns | 125.1 ns |  0.44 |               ? |
