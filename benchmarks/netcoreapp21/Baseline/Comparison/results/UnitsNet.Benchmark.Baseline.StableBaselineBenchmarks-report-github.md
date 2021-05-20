``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-IYQQLX : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|         Method |       Mean |      Error |    StdDev |    StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |-----------:|-----------:|----------:|----------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|
|         Equals |  0.6644 ns |  0.2371 ns | 0.0130 ns | 0.0075 ns |  0.6520 ns |  0.6779 ns |  0.6632 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals |  9.6470 ns |  7.6392 ns | 0.4187 ns | 0.2418 ns |  9.2690 ns | 10.0971 ns |  9.5749 ns | 14.53 |               ? |    0.91 |
|         MinMax |  0.4091 ns |  0.2364 ns | 0.0130 ns | 0.0075 ns |  0.4002 ns |  0.4240 ns |  0.4031 ns |  0.62 |               ? |    0.01 |
| Decimal_MinMax | 11.5413 ns | 13.6715 ns | 0.7494 ns | 0.4327 ns | 10.8778 ns | 12.3541 ns | 11.3920 ns | 17.36 |               ? |    0.79 |
