``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-LQOEAW : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|          Method |       Mean |     Error |    StdDev |    StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |
|---------------- |-----------:|----------:|----------:|----------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|
|         ToValue |   9.389 ns | 0.1800 ns | 0.2341 ns | 0.0478 ns |   9.040 ns |   9.791 ns |   9.474 ns |  1.00 |            Base |    0.00 |
| Decimal_ToValue | 383.400 ns | 7.1761 ns | 6.7126 ns | 1.7332 ns | 373.557 ns | 397.161 ns | 380.212 ns | 40.72 |          Slower |    1.48 |
