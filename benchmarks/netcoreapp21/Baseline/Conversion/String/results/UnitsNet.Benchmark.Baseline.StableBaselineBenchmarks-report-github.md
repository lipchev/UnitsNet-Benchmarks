``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-QTBLGF : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|           Method |     Mean |   Error |  StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |
|----------------- |---------:|--------:|--------:|--------:|---------:|---------:|---------:|------:|---------------- |--------:|
|         ToString | 225.7 ns | 3.72 ns | 3.48 ns | 0.90 ns | 218.3 ns | 230.1 ns | 226.8 ns |  1.00 |            Base |    0.00 |
| Decimal_ToString | 119.5 ns | 2.47 ns | 2.85 ns | 0.64 ns | 116.0 ns | 125.1 ns | 118.8 ns |  0.53 |          Faster |    0.02 |
