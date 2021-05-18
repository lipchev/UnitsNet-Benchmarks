``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-DCQQKT : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|        Method |  textValue |     Mean |   Error |  StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |
|-------------- |----------- |---------:|--------:|--------:|--------:|---------:|---------:|---------:|------:|---------------- |--------:|
|         Parse | 1234.56789 | 169.1 ns | 2.56 ns | 2.40 ns | 0.62 ns | 164.0 ns | 173.5 ns | 168.9 ns |  1.00 |            Base |    0.00 |
| Decimal_Parse | 1234.56789 | 294.1 ns | 4.18 ns | 3.71 ns | 0.99 ns | 288.3 ns | 299.9 ns | 293.3 ns |  1.74 |          Slower |    0.04 |
