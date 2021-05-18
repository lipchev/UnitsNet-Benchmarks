``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-UAXHIE : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|           Method |     Mean |    Error |   StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) |
|----------------- |---------:|---------:|---------:|--------:|---------:|---------:|---------:|------:|---------------- |
|         ToString | 664.0 ns | 11.23 ns | 10.51 ns | 2.71 ns | 646.8 ns | 683.3 ns | 663.3 ns |  1.00 |            Base |
| Decimal_ToString | 143.4 ns |  2.88 ns |  2.55 ns | 0.68 ns | 140.2 ns | 149.4 ns | 143.9 ns |  0.22 |          Faster |
