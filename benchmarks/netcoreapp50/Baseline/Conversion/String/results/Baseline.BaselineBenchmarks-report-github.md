``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-NBBLTL : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|           Method |     Mean |   Error |  StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) |
|----------------- |---------:|--------:|--------:|--------:|---------:|---------:|---------:|------:|---------------- |
|         ToString | 287.5 ns | 4.97 ns | 4.65 ns | 1.20 ns | 279.8 ns | 296.6 ns | 287.6 ns |  1.00 |            Base |
| Decimal_ToString | 113.8 ns | 2.30 ns | 2.74 ns | 0.60 ns | 109.4 ns | 118.3 ns | 114.5 ns |  0.40 |          Faster |
