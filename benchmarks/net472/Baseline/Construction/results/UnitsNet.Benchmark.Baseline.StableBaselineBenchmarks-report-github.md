``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-BYVZPL : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|        Method |  textValue |     Mean |   Error |  StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |
|-------------- |----------- |---------:|--------:|--------:|--------:|---------:|---------:|---------:|------:|---------------- |--------:|
|         Parse | 1234.56789 | 172.5 ns | 3.36 ns | 3.30 ns | 0.82 ns | 167.1 ns | 177.6 ns | 173.2 ns |  1.00 |            Base |    0.00 |
| Decimal_Parse | 1234.56789 | 276.5 ns | 5.39 ns | 6.42 ns | 1.40 ns | 264.4 ns | 287.7 ns | 277.9 ns |  1.60 |          Slower |    0.05 |
