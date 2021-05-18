``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-RQNYHV : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|        Method |  textValue |     Mean |   Error |  StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |
|-------------- |----------- |---------:|--------:|--------:|--------:|---------:|---------:|---------:|------:|---------------- |--------:|
|         Parse | 1234.56789 | 185.1 ns | 2.77 ns | 2.59 ns | 0.67 ns | 181.1 ns | 189.3 ns | 185.9 ns |  1.00 |            Base |    0.00 |
| Decimal_Parse | 1234.56789 | 294.0 ns | 4.60 ns | 4.31 ns | 1.11 ns | 284.6 ns | 300.4 ns | 294.9 ns |  1.59 |          Slower |    0.04 |
