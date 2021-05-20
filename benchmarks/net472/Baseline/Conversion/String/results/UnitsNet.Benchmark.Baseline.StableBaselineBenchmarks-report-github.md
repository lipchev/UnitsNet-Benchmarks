``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-IHTGOS : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|           Method |     Mean |    Error |  StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) |
|----------------- |---------:|---------:|--------:|--------:|---------:|---------:|---------:|------:|---------------- |
|         ToString | 616.9 ns | 10.51 ns | 9.83 ns | 2.54 ns | 601.2 ns | 632.4 ns | 617.1 ns |  1.00 |            Base |
| Decimal_ToString | 134.3 ns |  2.73 ns | 3.14 ns | 0.70 ns | 129.3 ns | 141.2 ns | 133.8 ns |  0.22 |          Faster |
