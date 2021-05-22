``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-DBQHDX : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|           Method |     Mean |   Error |  StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |
|----------------- |---------:|--------:|--------:|--------:|---------:|---------:|---------:|------:|---------------- |--------:|
|         ToString | 259.6 ns | 5.21 ns | 7.80 ns | 1.42 ns | 248.9 ns | 278.5 ns | 258.1 ns |  1.00 |            Base |    0.00 |
| Decimal_ToString | 133.6 ns | 2.73 ns | 4.99 ns | 0.77 ns | 126.6 ns | 144.0 ns | 132.5 ns |  0.52 |          Faster |    0.03 |
