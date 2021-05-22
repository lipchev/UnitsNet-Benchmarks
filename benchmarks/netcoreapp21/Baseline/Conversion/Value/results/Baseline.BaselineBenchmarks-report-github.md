``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-HHFIZD : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|          Method |       Mean |      Error |     StdDev |    StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |
|---------------- |-----------:|-----------:|-----------:|----------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|
|         ToValue |   8.914 ns |  0.1628 ns |  0.1523 ns | 0.0393 ns |   8.682 ns |   9.142 ns |   8.887 ns |  1.00 |            Base |    0.00 |
| Decimal_ToValue | 851.527 ns | 16.3400 ns | 22.9065 ns | 4.4084 ns | 815.762 ns | 905.894 ns | 844.999 ns | 95.89 |          Slower |    3.32 |
