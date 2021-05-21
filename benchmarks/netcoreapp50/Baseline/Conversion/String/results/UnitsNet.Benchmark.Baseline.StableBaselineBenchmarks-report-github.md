``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-NANMOV : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|           Method |     Mean |     Error |   StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) |
|----------------- |---------:|----------:|---------:|--------:|---------:|---------:|---------:|------:|---------------- |
|         ToString | 301.5 ns | 187.64 ns | 10.29 ns | 5.94 ns | 291.1 ns | 311.6 ns | 301.9 ns |  1.00 |            Base |
| Decimal_ToString | 124.3 ns |  45.34 ns |  2.49 ns | 1.43 ns | 122.7 ns | 127.2 ns | 123.0 ns |  0.41 |               ? |
