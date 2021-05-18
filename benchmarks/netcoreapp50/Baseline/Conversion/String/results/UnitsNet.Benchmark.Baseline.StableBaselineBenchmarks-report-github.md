``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-LHJTQO : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|           Method |     Mean |   Error |  StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) |
|----------------- |---------:|--------:|--------:|--------:|---------:|---------:|---------:|------:|---------------- |
|         ToString | 272.4 ns | 4.43 ns | 4.14 ns | 1.07 ns | 265.7 ns | 279.7 ns | 271.1 ns |  1.00 |            Base |
| Decimal_ToString | 112.1 ns | 1.68 ns | 1.49 ns | 0.40 ns | 109.3 ns | 115.2 ns | 112.0 ns |  0.41 |          Faster |
