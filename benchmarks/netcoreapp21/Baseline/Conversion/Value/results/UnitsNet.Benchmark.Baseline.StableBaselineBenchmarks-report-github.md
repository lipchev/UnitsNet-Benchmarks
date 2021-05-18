``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-UAKXYI : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|          Method |       Mean |      Error |     StdDev |    StdErr |        Min |        Max |     Median |  Ratio | MannWhitney(5%) | RatioSD |
|---------------- |-----------:|-----------:|-----------:|----------:|-----------:|-----------:|-----------:|-------:|---------------- |--------:|
|         ToValue |   7.557 ns |  0.1235 ns |  0.1031 ns | 0.0286 ns |   7.351 ns |   7.781 ns |   7.568 ns |   1.00 |            Base |    0.00 |
| Decimal_ToValue | 829.369 ns | 16.1950 ns | 25.2136 ns | 4.4572 ns | 790.613 ns | 898.822 ns | 827.420 ns | 110.69 |          Slower |    4.18 |
