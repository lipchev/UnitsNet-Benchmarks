``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-GPNWLU : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|           Method |     Mean |    Error |   StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) |
|----------------- |---------:|---------:|---------:|--------:|---------:|---------:|---------:|------:|---------------- |
|         ToString | 723.2 ns | 13.93 ns | 14.90 ns | 3.51 ns | 694.9 ns | 754.2 ns | 721.8 ns |  1.00 |            Base |
| Decimal_ToString | 139.8 ns |  2.90 ns |  5.44 ns | 0.82 ns | 130.3 ns | 151.1 ns | 139.7 ns |  0.20 |          Faster |
