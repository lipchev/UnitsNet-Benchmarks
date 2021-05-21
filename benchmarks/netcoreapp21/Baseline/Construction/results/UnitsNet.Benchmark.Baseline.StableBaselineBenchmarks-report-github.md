``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-AMRDDI : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|        Method |  textValue |     Mean |    Error |  StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |
|-------------- |----------- |---------:|---------:|--------:|--------:|---------:|---------:|---------:|------:|---------------- |--------:|
|         Parse | 1234.56789 | 173.2 ns | 29.65 ns | 1.63 ns | 0.94 ns | 171.6 ns | 174.8 ns | 173.3 ns |  1.00 |            Base |    0.00 |
| Decimal_Parse | 1234.56789 | 286.9 ns | 13.37 ns | 0.73 ns | 0.42 ns | 286.4 ns | 287.8 ns | 286.6 ns |  1.66 |               ? |    0.02 |
