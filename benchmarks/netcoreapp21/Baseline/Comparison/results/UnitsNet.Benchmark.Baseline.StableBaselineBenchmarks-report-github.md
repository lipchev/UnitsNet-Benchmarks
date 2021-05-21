``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-FJVGQS : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|         Method |       Mean |     Error |    StdDev |    StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |-----------:|----------:|----------:|----------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|
|         Equals |  0.7103 ns | 0.2111 ns | 0.0116 ns | 0.0067 ns |  0.6974 ns |  0.7199 ns |  0.7135 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals |  9.4756 ns | 2.1396 ns | 0.1173 ns | 0.0677 ns |  9.3474 ns |  9.5774 ns |  9.5022 ns | 13.35 |               ? |    0.37 |
|         MinMax |  0.4374 ns | 0.1459 ns | 0.0080 ns | 0.0046 ns |  0.4310 ns |  0.4463 ns |  0.4349 ns |  0.62 |               ? |    0.02 |
| Decimal_MinMax | 11.3927 ns | 3.5841 ns | 0.1965 ns | 0.1134 ns | 11.2383 ns | 11.6138 ns | 11.3259 ns | 16.04 |               ? |    0.26 |
