``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-WMYHRH : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|         Method |       Mean |     Error |    StdDev |    StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |-----------:|----------:|----------:|----------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|
|         Equals |  0.6306 ns | 0.0111 ns | 0.0104 ns | 0.0027 ns |  0.6208 ns |  0.6511 ns |  0.6275 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals |  9.2966 ns | 0.1841 ns | 0.3224 ns | 0.0516 ns |  8.9342 ns | 10.1259 ns |  9.1575 ns | 15.06 |          Slower |    0.72 |
|         MinMax |  0.4011 ns | 0.0047 ns | 0.0044 ns | 0.0011 ns |  0.3942 ns |  0.4088 ns |  0.3997 ns |  0.64 |          Faster |    0.01 |
| Decimal_MinMax | 10.7229 ns | 0.1471 ns | 0.1376 ns | 0.0355 ns | 10.5592 ns | 10.9805 ns | 10.6798 ns | 17.01 |          Slower |    0.31 |
