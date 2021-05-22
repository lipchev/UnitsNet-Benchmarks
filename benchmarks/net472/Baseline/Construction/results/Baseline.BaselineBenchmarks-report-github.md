``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-TCDEJB : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|        Method |  textValue |     Mean |   Error |  StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |
|-------------- |----------- |---------:|--------:|--------:|--------:|---------:|---------:|---------:|------:|---------------- |--------:|
|         Parse | 1234.56789 | 185.3 ns | 2.66 ns | 2.49 ns | 0.64 ns | 181.4 ns | 189.3 ns | 185.2 ns |  1.00 |            Base |    0.00 |
| Decimal_Parse | 1234.56789 | 305.7 ns | 4.09 ns | 3.82 ns | 0.99 ns | 298.0 ns | 311.9 ns | 305.5 ns |  1.65 |          Slower |    0.03 |
