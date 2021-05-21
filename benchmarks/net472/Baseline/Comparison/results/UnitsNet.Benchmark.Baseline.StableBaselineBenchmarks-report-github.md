``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-XJDAOY : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|         Method |       Mean |      Error |    StdDev |    StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |-----------:|-----------:|----------:|----------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|
|         Equals |  0.6138 ns |  0.4169 ns | 0.0229 ns | 0.0132 ns |  0.5971 ns |  0.6399 ns |  0.6045 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals |  9.4840 ns |  3.5593 ns | 0.1951 ns | 0.1126 ns |  9.3335 ns |  9.7045 ns |  9.4142 ns | 15.47 |               ? |    0.78 |
|         MinMax |  0.3339 ns |  0.1804 ns | 0.0099 ns | 0.0057 ns |  0.3257 ns |  0.3449 ns |  0.3312 ns |  0.54 |               ? |    0.03 |
| Decimal_MinMax | 12.9668 ns | 12.0453 ns | 0.6602 ns | 0.3812 ns | 12.5291 ns | 13.7263 ns | 12.6450 ns | 21.12 |               ? |    0.37 |
