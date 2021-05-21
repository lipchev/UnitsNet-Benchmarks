``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-WFEIOD : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|           Method |     Mean |     Error |   StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |
|----------------- |---------:|----------:|---------:|--------:|---------:|---------:|---------:|------:|---------------- |--------:|
|         ToString | 251.9 ns | 215.91 ns | 11.83 ns | 6.83 ns | 242.1 ns | 265.1 ns | 248.6 ns |  1.00 |            Base |    0.00 |
| Decimal_ToString | 131.8 ns |  61.73 ns |  3.38 ns | 1.95 ns | 129.4 ns | 135.6 ns | 130.2 ns |  0.52 |               ? |    0.04 |
