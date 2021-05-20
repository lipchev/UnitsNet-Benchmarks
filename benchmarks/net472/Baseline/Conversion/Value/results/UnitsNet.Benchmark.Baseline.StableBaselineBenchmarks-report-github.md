``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-UGDSUL : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|          Method |         Mean |      Error |    StdDev |    StdErr |        Min |          Max |       Median |  Ratio | MannWhitney(5%) | RatioSD |
|---------------- |-------------:|-----------:|----------:|----------:|-----------:|-------------:|-------------:|-------:|---------------- |--------:|
|         ToValue |     9.565 ns |   2.463 ns | 0.1350 ns | 0.0779 ns |   9.484 ns |     9.721 ns |     9.489 ns |   1.00 |            Base |    0.00 |
| Decimal_ToValue | 1,008.994 ns | 170.948 ns | 9.3702 ns | 5.4099 ns | 998.537 ns | 1,016.630 ns | 1,011.815 ns | 105.51 |               ? |    2.43 |
