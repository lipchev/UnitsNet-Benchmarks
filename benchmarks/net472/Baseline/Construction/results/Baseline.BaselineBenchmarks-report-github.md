``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-PUQXRU : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|        Method |  textValue |     Mean |   Error |  StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |
|-------------- |----------- |---------:|--------:|--------:|--------:|---------:|---------:|---------:|------:|---------------- |--------:|
|         Parse | 1234.56789 | 180.8 ns | 3.11 ns | 4.94 ns | 0.86 ns | 174.2 ns | 194.2 ns | 180.3 ns |  1.00 |            Base |    0.00 |
| Decimal_Parse | 1234.56789 | 309.3 ns | 4.75 ns | 4.44 ns | 1.15 ns | 299.8 ns | 315.3 ns | 309.3 ns |  1.70 |          Slower |    0.07 |
