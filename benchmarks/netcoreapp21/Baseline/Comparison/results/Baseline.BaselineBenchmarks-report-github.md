``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-QHYLGJ : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|         Method |       Mean |     Error |    StdDev |    StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |-----------:|----------:|----------:|----------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|
|         Equals |  0.9141 ns | 0.0136 ns | 0.0121 ns | 0.0032 ns |  0.8933 ns |  0.9308 ns |  0.9188 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals | 10.0140 ns | 0.1570 ns | 0.1469 ns | 0.0379 ns |  9.8122 ns | 10.2907 ns | 10.0251 ns | 10.96 |          Slower |    0.27 |
|         MinMax |  0.5071 ns | 0.0066 ns | 0.0056 ns | 0.0015 ns |  0.4994 ns |  0.5206 ns |  0.5066 ns |  0.56 |          Faster |    0.01 |
| Decimal_MinMax | 11.1953 ns | 0.1646 ns | 0.1540 ns | 0.0398 ns | 10.8817 ns | 11.4117 ns | 11.2412 ns | 12.27 |          Slower |    0.18 |
