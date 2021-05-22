``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-FPIYXP : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|           Method |     Mean |   Error |  StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) |
|----------------- |---------:|--------:|--------:|--------:|---------:|---------:|---------:|------:|---------------- |
|         ToString | 281.8 ns | 4.41 ns | 3.91 ns | 1.04 ns | 275.4 ns | 288.4 ns | 281.7 ns |  1.00 |            Base |
| Decimal_ToString | 113.4 ns | 2.04 ns | 1.91 ns | 0.49 ns | 109.5 ns | 116.1 ns | 113.5 ns |  0.40 |          Faster |
