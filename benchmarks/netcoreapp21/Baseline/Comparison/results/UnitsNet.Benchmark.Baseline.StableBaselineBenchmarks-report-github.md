``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-LEQGOK : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|         Method |       Mean |     Error |    StdDev |    StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |-----------:|----------:|----------:|----------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|
|         Equals |  0.6619 ns | 0.1456 ns | 0.0080 ns | 0.0046 ns |  0.6529 ns |  0.6682 ns |  0.6645 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals | 10.1455 ns | 3.0549 ns | 0.1675 ns | 0.0967 ns |  9.9531 ns | 10.2581 ns | 10.2253 ns | 15.33 |               ? |    0.07 |
|         MinMax |  0.4315 ns | 0.1467 ns | 0.0080 ns | 0.0046 ns |  0.4237 ns |  0.4397 ns |  0.4310 ns |  0.65 |               ? |    0.01 |
| Decimal_MinMax | 11.3971 ns | 2.5695 ns | 0.1408 ns | 0.0813 ns | 11.2627 ns | 11.5436 ns | 11.3849 ns | 17.22 |               ? |    0.40 |
