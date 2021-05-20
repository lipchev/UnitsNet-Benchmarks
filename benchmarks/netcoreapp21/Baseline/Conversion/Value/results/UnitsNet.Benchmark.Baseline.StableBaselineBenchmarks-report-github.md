``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-XKSBWC : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|          Method |       Mean |      Error |     StdDev |     StdErr |        Min |        Max |     Median |  Ratio | MannWhitney(5%) | RatioSD |
|---------------- |-----------:|-----------:|-----------:|-----------:|-----------:|-----------:|-----------:|-------:|---------------- |--------:|
|         ToValue |   8.541 ns |   3.915 ns |  0.2146 ns |  0.1239 ns |   8.345 ns |   8.770 ns |   8.507 ns |   1.00 |            Base |    0.00 |
| Decimal_ToValue | 920.233 ns | 600.265 ns | 32.9025 ns | 18.9963 ns | 898.507 ns | 958.088 ns | 904.105 ns | 107.73 |               ? |    1.49 |
