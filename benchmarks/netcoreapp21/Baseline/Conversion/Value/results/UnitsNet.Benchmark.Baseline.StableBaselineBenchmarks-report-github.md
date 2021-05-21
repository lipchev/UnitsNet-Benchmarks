``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-SADEZP : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|          Method |       Mean |      Error |     StdDev |     StdErr |        Min |        Max |     Median |  Ratio | MannWhitney(5%) | RatioSD |
|---------------- |-----------:|-----------:|-----------:|-----------:|-----------:|-----------:|-----------:|-------:|---------------- |--------:|
|         ToValue |   7.483 ns |   1.522 ns |  0.0834 ns |  0.0482 ns |   7.386 ns |   7.531 ns |   7.530 ns |   1.00 |            Base |    0.00 |
| Decimal_ToValue | 893.264 ns | 876.421 ns | 48.0396 ns | 27.7357 ns | 841.351 ns | 936.150 ns | 902.290 ns | 119.39 |               ? |    6.74 |
