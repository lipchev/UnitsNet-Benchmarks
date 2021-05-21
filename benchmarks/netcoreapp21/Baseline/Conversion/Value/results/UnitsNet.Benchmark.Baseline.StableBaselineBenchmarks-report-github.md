``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-IURHKI : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|          Method |       Mean |      Error |    StdDev |    StdErr |        Min |        Max |     Median |  Ratio | MannWhitney(5%) | RatioSD |
|---------------- |-----------:|-----------:|----------:|----------:|-----------:|-----------:|-----------:|-------:|---------------- |--------:|
|         ToValue |   9.456 ns |   5.213 ns | 0.2858 ns | 0.1650 ns |   9.213 ns |   9.771 ns |   9.384 ns |   1.00 |            Base |    0.00 |
| Decimal_ToValue | 946.318 ns | 129.780 ns | 7.1137 ns | 4.1071 ns | 938.147 ns | 951.129 ns | 949.678 ns | 100.13 |               ? |    2.87 |
