``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-QZVXHT : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|           Method |     Mean |   Error |  StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) |
|----------------- |---------:|--------:|--------:|--------:|---------:|---------:|---------:|------:|---------------- |
|         ToString | 258.4 ns | 3.70 ns | 3.28 ns | 0.88 ns | 252.6 ns | 263.2 ns | 258.7 ns |  1.00 |            Base |
| Decimal_ToString | 135.3 ns | 2.36 ns | 2.21 ns | 0.57 ns | 131.2 ns | 139.2 ns | 134.6 ns |  0.52 |          Faster |
