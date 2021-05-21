``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-BYJKYQ : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|        Method |  textValue |     Mean |    Error |  StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |
|-------------- |----------- |---------:|---------:|--------:|--------:|---------:|---------:|---------:|------:|---------------- |--------:|
|         Parse | 1234.56789 | 182.4 ns | 100.7 ns | 5.52 ns | 3.19 ns | 176.3 ns | 187.2 ns | 183.5 ns |  1.00 |            Base |    0.00 |
| Decimal_Parse | 1234.56789 | 285.0 ns | 171.2 ns | 9.38 ns | 5.42 ns | 275.4 ns | 294.1 ns | 285.3 ns |  1.56 |               ? |    0.10 |
