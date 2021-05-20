``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-SARWRE : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|         Method |       Mean |     Error |    StdDev |    StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |-----------:|----------:|----------:|----------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|
|         Equals |  0.6609 ns | 0.0129 ns | 0.0180 ns | 0.0035 ns |  0.6261 ns |  0.6915 ns |  0.6566 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals |  9.9893 ns | 0.1861 ns | 0.1911 ns | 0.0463 ns |  9.6233 ns | 10.2973 ns |  9.9656 ns | 15.24 |          Slower |    0.56 |
|         MinMax |  0.4277 ns | 0.0081 ns | 0.0087 ns | 0.0020 ns |  0.4120 ns |  0.4460 ns |  0.4260 ns |  0.65 |          Faster |    0.03 |
| Decimal_MinMax | 10.9155 ns | 0.1661 ns | 0.1472 ns | 0.0393 ns | 10.6178 ns | 11.1804 ns | 10.9231 ns | 16.73 |          Slower |    0.52 |
