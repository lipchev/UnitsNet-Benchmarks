``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-RDDYQR : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|           Method |     Mean |    Error |   StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) |
|----------------- |---------:|---------:|---------:|--------:|---------:|---------:|---------:|------:|---------------- |
|         ToString | 664.7 ns | 12.25 ns | 11.45 ns | 2.96 ns | 650.7 ns | 684.3 ns | 663.6 ns |  1.00 |            Base |
| Decimal_ToString | 139.4 ns |  2.32 ns |  2.38 ns | 0.58 ns | 135.3 ns | 143.9 ns | 139.1 ns |  0.21 |          Faster |
