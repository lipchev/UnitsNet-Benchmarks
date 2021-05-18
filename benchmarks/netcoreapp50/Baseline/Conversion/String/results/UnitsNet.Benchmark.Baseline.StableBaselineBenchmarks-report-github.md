``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-VNNGFX : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|           Method |     Mean |   Error |  StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |
|----------------- |---------:|--------:|--------:|--------:|---------:|---------:|---------:|------:|---------------- |--------:|
|         ToString | 267.3 ns | 5.34 ns | 6.56 ns | 1.40 ns | 259.0 ns | 285.6 ns | 266.2 ns |  1.00 |            Base |    0.00 |
| Decimal_ToString | 109.7 ns | 2.24 ns | 3.98 ns | 0.63 ns | 103.7 ns | 120.1 ns | 108.2 ns |  0.41 |          Faster |    0.02 |
