``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-MCBROW : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|           Method |     Mean |    Error |  StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) |
|----------------- |---------:|---------:|--------:|--------:|---------:|---------:|---------:|------:|---------------- |
|         ToString | 732.1 ns | 10.41 ns | 9.74 ns | 2.51 ns | 713.4 ns | 746.6 ns | 729.1 ns |  1.00 |            Base |
| Decimal_ToString | 145.8 ns |  1.59 ns | 1.33 ns | 0.37 ns | 143.9 ns | 148.8 ns | 145.8 ns |  0.20 |          Faster |
