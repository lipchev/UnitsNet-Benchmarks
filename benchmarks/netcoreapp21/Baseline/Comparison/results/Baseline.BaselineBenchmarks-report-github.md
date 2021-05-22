``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-NNVEAZ : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|         Method |       Mean |     Error |    StdDev |    StdErr |       Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |-----------:|----------:|----------:|----------:|----------:|-----------:|-----------:|------:|---------------- |--------:|
|         Equals |  0.7748 ns | 0.0136 ns | 0.0127 ns | 0.0033 ns | 0.7523 ns |  0.7936 ns |  0.7749 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals |  8.8440 ns | 0.1704 ns | 0.2703 ns | 0.0470 ns | 8.4350 ns |  9.4447 ns |  8.7855 ns | 11.32 |          Slower |    0.33 |
|         MinMax |  0.4348 ns | 0.0086 ns | 0.0112 ns | 0.0023 ns | 0.4161 ns |  0.4519 ns |  0.4342 ns |  0.57 |          Faster |    0.02 |
| Decimal_MinMax | 10.1284 ns | 0.2025 ns | 0.5081 ns | 0.0591 ns | 9.2885 ns | 11.2403 ns | 10.1350 ns | 12.82 |          Slower |    0.53 |
