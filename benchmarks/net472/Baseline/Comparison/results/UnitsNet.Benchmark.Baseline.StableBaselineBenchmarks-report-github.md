``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-NWLKBN : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|         Method |       Mean |     Error |    StdDev |    StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |-----------:|----------:|----------:|----------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|
|         Equals |  0.6439 ns | 0.1987 ns | 0.0109 ns | 0.0063 ns |  0.6374 ns |  0.6564 ns |  0.6378 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals |  9.5504 ns | 1.8942 ns | 0.1038 ns | 0.0599 ns |  9.4471 ns |  9.6548 ns |  9.5492 ns | 14.84 |               ? |    0.40 |
|         MinMax |  0.3730 ns | 0.2955 ns | 0.0162 ns | 0.0094 ns |  0.3558 ns |  0.3879 ns |  0.3753 ns |  0.58 |               ? |    0.03 |
| Decimal_MinMax | 20.2749 ns | 3.8874 ns | 0.2131 ns | 0.1230 ns | 20.0769 ns | 20.5004 ns | 20.2475 ns | 31.50 |               ? |    0.81 |
