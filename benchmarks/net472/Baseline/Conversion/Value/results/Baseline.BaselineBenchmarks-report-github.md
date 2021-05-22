``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-ZNEGLD : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|          Method |         Mean |      Error |     StdDev |    StdErr |          Min |          Max |       Median |  Ratio | MannWhitney(5%) | RatioSD |
|---------------- |-------------:|-----------:|-----------:|----------:|-------------:|-------------:|-------------:|-------:|---------------- |--------:|
|         ToValue |     9.793 ns |  0.0942 ns |  0.0787 ns | 0.0218 ns |     9.637 ns |     9.915 ns |     9.790 ns |   1.00 |            Base |    0.00 |
| Decimal_ToValue | 1,032.992 ns | 12.0583 ns | 11.2793 ns | 2.9123 ns | 1,017.575 ns | 1,053.710 ns | 1,029.263 ns | 105.44 |          Slower |    1.31 |
