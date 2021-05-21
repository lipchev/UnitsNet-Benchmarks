``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-BILBZT : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|           Method |     Mean |    Error |  StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) |
|----------------- |---------:|---------:|--------:|--------:|---------:|---------:|---------:|------:|---------------- |
|         ToString | 622.7 ns | 80.03 ns | 4.39 ns | 2.53 ns | 619.7 ns | 627.7 ns | 620.7 ns |  1.00 |            Base |
| Decimal_ToString | 142.7 ns | 57.59 ns | 3.16 ns | 1.82 ns | 139.2 ns | 145.3 ns | 143.5 ns |  0.23 |               ? |
