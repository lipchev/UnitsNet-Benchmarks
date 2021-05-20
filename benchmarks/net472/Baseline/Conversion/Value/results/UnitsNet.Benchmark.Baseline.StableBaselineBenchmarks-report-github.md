``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-HOJSGT : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|          Method |       Mean |      Error |     StdDev |    StdErr |        Min |        Max |     Median |  Ratio | MannWhitney(5%) | RatioSD |
|---------------- |-----------:|-----------:|-----------:|----------:|-----------:|-----------:|-----------:|-------:|---------------- |--------:|
|         ToValue |   8.729 ns |   4.302 ns |  0.2358 ns | 0.1361 ns |   8.471 ns |   8.933 ns |   8.785 ns |   1.00 |            Base |    0.00 |
| Decimal_ToValue | 891.378 ns | 187.572 ns | 10.2814 ns | 5.9360 ns | 884.643 ns | 903.213 ns | 886.279 ns | 102.15 |               ? |    2.16 |
