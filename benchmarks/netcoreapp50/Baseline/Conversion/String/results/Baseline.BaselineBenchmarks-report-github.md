``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-KRJMEM : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|           Method |     Mean |   Error |  StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) |
|----------------- |---------:|--------:|--------:|--------:|---------:|---------:|---------:|------:|---------------- |
|         ToString | 295.1 ns | 5.62 ns | 5.52 ns | 1.38 ns | 284.8 ns | 304.2 ns | 295.7 ns |  1.00 |            Base |
| Decimal_ToString | 117.9 ns | 2.17 ns | 2.03 ns | 0.52 ns | 114.1 ns | 121.9 ns | 118.1 ns |  0.40 |          Faster |
