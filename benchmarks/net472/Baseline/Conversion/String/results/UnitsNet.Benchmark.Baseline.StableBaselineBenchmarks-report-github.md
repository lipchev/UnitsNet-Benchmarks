``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-HMJDNO : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|           Method |     Mean |    Error |   StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) |
|----------------- |---------:|---------:|---------:|--------:|---------:|---------:|---------:|------:|---------------- |
|         ToString | 715.4 ns | 11.37 ns | 10.64 ns | 2.75 ns | 693.5 ns | 728.5 ns | 717.1 ns |  1.00 |            Base |
| Decimal_ToString | 139.9 ns |  2.90 ns |  2.97 ns | 0.72 ns | 134.5 ns | 146.5 ns | 140.0 ns |  0.20 |          Faster |
