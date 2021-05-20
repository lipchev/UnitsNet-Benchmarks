``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-QFCACX : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|        Method |  textValue |     Mean |     Error |  StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) |
|-------------- |----------- |---------:|----------:|--------:|--------:|---------:|---------:|---------:|------:|---------------- |
|         Parse | 1234.56789 | 185.6 ns |  62.83 ns | 3.44 ns | 1.99 ns | 183.0 ns | 189.5 ns | 184.3 ns |  1.00 |            Base |
| Decimal_Parse | 1234.56789 | 303.4 ns | 135.30 ns | 7.42 ns | 4.28 ns | 297.5 ns | 311.7 ns | 301.0 ns |  1.64 |               ? |
