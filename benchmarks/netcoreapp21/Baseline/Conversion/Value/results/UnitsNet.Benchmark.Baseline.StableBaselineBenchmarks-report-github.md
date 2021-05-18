``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-XOQWLJ : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|          Method |         Mean |      Error |     StdDev |    StdErr |        Min |         Max |       Median |  Ratio | MannWhitney(5%) | RatioSD |
|---------------- |-------------:|-----------:|-----------:|----------:|-----------:|------------:|-------------:|-------:|---------------- |--------:|
|         ToValue |     9.830 ns |  0.1811 ns |  0.3899 ns | 0.0521 ns |   9.317 ns |    10.82 ns |     9.698 ns |   1.00 |            Base |    0.00 |
| Decimal_ToValue | 1,003.433 ns | 19.8094 ns | 29.6498 ns | 5.4133 ns | 949.246 ns | 1,052.45 ns | 1,004.822 ns | 100.34 |          Slower |    6.38 |
