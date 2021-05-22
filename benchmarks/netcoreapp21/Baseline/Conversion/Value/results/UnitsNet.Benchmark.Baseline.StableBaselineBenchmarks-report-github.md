``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-HMZFJX : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|          Method |      Mean |     Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |
|---------------- |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|
|         ToValue |  11.21 ns |  0.134 ns |  0.112 ns | 0.031 ns |  11.07 ns |  11.41 ns |  11.21 ns |  1.00 |            Base |    0.00 |
| Decimal_ToValue | 915.74 ns | 18.313 ns | 21.800 ns | 4.757 ns | 886.70 ns | 962.51 ns | 907.84 ns | 81.36 |          Slower |    2.04 |
