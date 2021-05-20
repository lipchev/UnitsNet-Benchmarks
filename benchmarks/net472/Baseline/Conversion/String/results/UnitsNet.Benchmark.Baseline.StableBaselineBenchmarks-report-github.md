``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-WZGLHE : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|           Method |     Mean |     Error |  StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) |
|----------------- |---------:|----------:|--------:|--------:|---------:|---------:|---------:|------:|---------------- |
|         ToString | 753.1 ns | 115.06 ns | 6.31 ns | 3.64 ns | 746.1 ns | 758.4 ns | 754.7 ns |  1.00 |            Base |
| Decimal_ToString | 154.8 ns |   6.36 ns | 0.35 ns | 0.20 ns | 154.4 ns | 155.1 ns | 154.8 ns |  0.21 |               ? |
