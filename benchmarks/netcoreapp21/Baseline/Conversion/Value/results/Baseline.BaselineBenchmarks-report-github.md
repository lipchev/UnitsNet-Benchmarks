``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-JILRVH : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|          Method |        Mean |     Error |    StdDev |   StdErr |       Min |         Max |      Median | Ratio | MannWhitney(5%) | RatioSD |
|---------------- |------------:|----------:|----------:|---------:|----------:|------------:|------------:|------:|---------------- |--------:|
|         ToValue |    10.60 ns |  0.143 ns |  0.127 ns | 0.034 ns |  10.37 ns |    10.87 ns |    10.57 ns |  1.00 |            Base |    0.00 |
| Decimal_ToValue | 1,008.73 ns | 12.371 ns | 11.572 ns | 2.988 ns | 985.09 ns | 1,022.21 ns | 1,013.37 ns | 95.38 |          Slower |    1.35 |
