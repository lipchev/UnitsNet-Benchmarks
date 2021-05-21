``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-ODUTHH : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|          Method |       Mean |      Error |    StdDev |    StdErr |        Min |        Max |     Median |  Ratio | MannWhitney(5%) | RatioSD |
|---------------- |-----------:|-----------:|----------:|----------:|-----------:|-----------:|-----------:|-------:|---------------- |--------:|
|         ToValue |   9.279 ns |   3.391 ns | 0.1859 ns | 0.1073 ns |   9.085 ns |   9.455 ns |   9.297 ns |   1.00 |            Base |    0.00 |
| Decimal_ToValue | 929.357 ns | 129.482 ns | 7.0973 ns | 4.0976 ns | 923.504 ns | 937.251 ns | 927.316 ns | 100.20 |               ? |    2.78 |
