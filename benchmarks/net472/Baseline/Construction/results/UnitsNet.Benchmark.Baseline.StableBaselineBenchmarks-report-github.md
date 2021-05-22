``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-VYQQWK : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|        Method |  textValue |     Mean |   Error |  StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |
|-------------- |----------- |---------:|--------:|--------:|--------:|---------:|---------:|---------:|------:|---------------- |--------:|
|         Parse | 1234.56789 | 171.8 ns | 3.22 ns | 3.01 ns | 0.78 ns | 167.7 ns | 176.6 ns | 171.6 ns |  1.00 |            Base |    0.00 |
| Decimal_Parse | 1234.56789 | 297.0 ns | 5.72 ns | 5.35 ns | 1.38 ns | 286.6 ns | 307.2 ns | 297.4 ns |  1.73 |          Slower |    0.05 |
