``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-CLIJCX : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|          Method |       Mean |      Error |     StdDev |    StdErr |        Min |        Max |     Median |  Ratio | MannWhitney(5%) | RatioSD |
|---------------- |-----------:|-----------:|-----------:|----------:|-----------:|-----------:|-----------:|-------:|---------------- |--------:|
|         ToValue |   8.451 ns |  0.1679 ns |  0.2941 ns | 0.0471 ns |   8.039 ns |   9.167 ns |   8.347 ns |   1.00 |            Base |    0.00 |
| Decimal_ToValue | 892.121 ns | 16.6528 ns | 15.5770 ns | 4.0220 ns | 861.889 ns | 921.210 ns | 894.536 ns | 103.09 |          Slower |    3.47 |
