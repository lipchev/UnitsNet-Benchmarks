``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-WGFMFJ : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|        Method |  textValue |     Mean |   Error |  StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |
|-------------- |----------- |---------:|--------:|--------:|--------:|---------:|---------:|---------:|------:|---------------- |--------:|
|         Parse | 1234.56789 | 166.4 ns | 2.71 ns | 2.90 ns | 0.68 ns | 161.9 ns | 173.1 ns | 166.1 ns |  1.00 |            Base |    0.00 |
| Decimal_Parse | 1234.56789 | 271.2 ns | 5.38 ns | 5.03 ns | 1.30 ns | 260.3 ns | 279.9 ns | 271.8 ns |  1.63 |          Slower |    0.04 |
