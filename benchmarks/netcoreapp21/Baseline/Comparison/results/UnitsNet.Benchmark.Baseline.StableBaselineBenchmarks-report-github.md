``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-RAATXT : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|         Method |       Mean |     Error |    StdDev |    StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |-----------:|----------:|----------:|----------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|
|         Equals |  0.5835 ns | 0.0943 ns | 0.0052 ns | 0.0030 ns |  0.5778 ns |  0.5879 ns |  0.5847 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals |  8.5861 ns | 1.7279 ns | 0.0947 ns | 0.0547 ns |  8.4767 ns |  8.6437 ns |  8.6377 ns | 14.72 |               ? |    0.05 |
|         MinMax |  0.4054 ns | 0.1975 ns | 0.0108 ns | 0.0063 ns |  0.3983 ns |  0.4179 ns |  0.4001 ns |  0.69 |               ? |    0.01 |
| Decimal_MinMax | 10.1899 ns | 1.8926 ns | 0.1037 ns | 0.0599 ns | 10.1088 ns | 10.3068 ns | 10.1541 ns | 17.46 |               ? |    0.09 |
