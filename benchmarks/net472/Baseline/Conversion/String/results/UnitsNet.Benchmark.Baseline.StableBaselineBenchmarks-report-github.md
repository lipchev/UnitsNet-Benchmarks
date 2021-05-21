``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-KYPRVI : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|           Method |     Mean |     Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) |
|----------------- |---------:|----------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |
|         ToString | 736.5 ns | 346.03 ns | 18.97 ns | 10.95 ns | 725.4 ns | 758.4 ns | 725.8 ns |  1.00 |            Base |
| Decimal_ToString | 163.4 ns |  90.62 ns |  4.97 ns |  2.87 ns | 157.8 ns | 167.3 ns | 165.1 ns |  0.22 |               ? |
