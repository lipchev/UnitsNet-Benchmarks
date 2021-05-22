``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-FFVAHO : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|         Method |       Mean |     Error |    StdDev |    StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |-----------:|----------:|----------:|----------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|
|         Equals |  0.6333 ns | 0.0124 ns | 0.0127 ns | 0.0031 ns |  0.6153 ns |  0.6578 ns |  0.6313 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals |  9.1678 ns | 0.1549 ns | 0.1373 ns | 0.0367 ns |  8.9351 ns |  9.3744 ns |  9.1615 ns | 14.46 |          Slower |    0.37 |
|         MinMax |  0.4016 ns | 0.0075 ns | 0.0070 ns | 0.0018 ns |  0.3912 ns |  0.4129 ns |  0.4014 ns |  0.63 |          Faster |    0.02 |
| Decimal_MinMax | 10.9680 ns | 0.1766 ns | 0.1565 ns | 0.0418 ns | 10.7738 ns | 11.3440 ns | 10.9057 ns | 17.30 |          Slower |    0.46 |
