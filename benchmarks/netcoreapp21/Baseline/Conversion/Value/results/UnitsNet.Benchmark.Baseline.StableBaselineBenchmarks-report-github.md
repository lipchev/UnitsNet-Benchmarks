``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-PCXMDA : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|          Method |       Mean |     Error |    StdDev |    StdErr |        Min |        Max |     Median |  Ratio | MannWhitney(5%) | RatioSD |
|---------------- |-----------:|----------:|----------:|----------:|-----------:|-----------:|-----------:|-------:|---------------- |--------:|
|         ToValue |   8.874 ns |  1.057 ns | 0.0580 ns | 0.0335 ns |   8.807 ns |   8.914 ns |   8.900 ns |   1.00 |            Base |    0.00 |
| Decimal_ToValue | 934.458 ns | 38.893 ns | 2.1318 ns | 1.2308 ns | 932.439 ns | 936.687 ns | 934.249 ns | 105.31 |               ? |    0.68 |
