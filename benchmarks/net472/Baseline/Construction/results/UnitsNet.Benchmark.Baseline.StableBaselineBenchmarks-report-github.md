``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-PKCHYF : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|        Method |  textValue |     Mean |     Error |  StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |
|-------------- |----------- |---------:|----------:|--------:|--------:|---------:|---------:|---------:|------:|---------------- |--------:|
|         Parse | 1234.56789 | 154.4 ns |  96.07 ns | 5.27 ns | 3.04 ns | 148.7 ns | 158.9 ns | 155.7 ns |  1.00 |            Base |    0.00 |
| Decimal_Parse | 1234.56789 | 252.4 ns | 157.70 ns | 8.64 ns | 4.99 ns | 242.4 ns | 257.5 ns | 257.2 ns |  1.64 |               ? |    0.10 |
