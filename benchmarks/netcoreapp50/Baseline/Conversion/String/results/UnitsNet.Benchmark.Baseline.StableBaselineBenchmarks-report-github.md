``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-NZURHC : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|           Method |     Mean |     Error |  StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) |
|----------------- |---------:|----------:|--------:|--------:|---------:|---------:|---------:|------:|---------------- |
|         ToString | 266.4 ns | 124.60 ns | 6.83 ns | 3.94 ns | 260.3 ns | 273.8 ns | 265.1 ns |  1.00 |            Base |
| Decimal_ToString | 114.0 ns |   5.64 ns | 0.31 ns | 0.18 ns | 113.6 ns | 114.2 ns | 114.1 ns |  0.43 |               ? |
