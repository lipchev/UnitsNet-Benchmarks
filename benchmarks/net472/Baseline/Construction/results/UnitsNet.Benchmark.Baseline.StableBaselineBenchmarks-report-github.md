``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-IMELYR : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|        Method |  textValue |     Mean |    Error |  StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |
|-------------- |----------- |---------:|---------:|--------:|--------:|---------:|---------:|---------:|------:|---------------- |--------:|
|         Parse | 1234.56789 | 190.5 ns | 104.7 ns | 5.74 ns | 3.31 ns | 184.3 ns | 195.7 ns | 191.5 ns |  1.00 |            Base |    0.00 |
| Decimal_Parse | 1234.56789 | 282.7 ns | 116.1 ns | 6.36 ns | 3.67 ns | 275.3 ns | 286.8 ns | 285.9 ns |  1.49 |               ? |    0.07 |
