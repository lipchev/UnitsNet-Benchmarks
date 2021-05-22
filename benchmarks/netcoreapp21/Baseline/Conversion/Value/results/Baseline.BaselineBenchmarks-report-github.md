``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-MHMQLU : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|          Method |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |
|---------------- |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|
|         ToValue |  11.37 ns | 0.219 ns | 0.225 ns | 0.055 ns |  11.10 ns |  11.90 ns |  11.29 ns |  1.00 |            Base |    0.00 |
| Decimal_ToValue | 906.51 ns | 6.272 ns | 4.897 ns | 1.414 ns | 897.80 ns | 913.81 ns | 907.68 ns | 79.70 |          Slower |    1.52 |
