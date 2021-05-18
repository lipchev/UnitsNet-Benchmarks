``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-ELRMBY : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|           Method |     Mean |   Error |  StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |
|----------------- |---------:|--------:|--------:|--------:|---------:|---------:|---------:|------:|---------------- |--------:|
|         ToString | 289.3 ns | 5.74 ns | 8.76 ns | 1.57 ns | 265.8 ns | 298.4 ns | 291.1 ns |  1.00 |            Base |    0.00 |
| Decimal_ToString | 139.1 ns | 2.26 ns | 4.01 ns | 0.63 ns | 134.3 ns | 151.0 ns | 137.9 ns |  0.48 |          Faster |    0.03 |
