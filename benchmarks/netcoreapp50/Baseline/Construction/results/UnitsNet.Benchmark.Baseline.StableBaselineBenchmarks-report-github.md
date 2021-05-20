``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-MYYJOO : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|        Method |  textValue |     Mean |    Error |  StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) |
|-------------- |----------- |---------:|---------:|--------:|--------:|---------:|---------:|---------:|------:|---------------- |
|         Parse | 1234.56789 | 126.8 ns |  7.29 ns | 0.40 ns | 0.23 ns | 126.3 ns | 127.1 ns | 126.9 ns |  1.00 |            Base |
| Decimal_Parse | 1234.56789 | 153.0 ns | 22.45 ns | 1.23 ns | 0.71 ns | 151.8 ns | 154.3 ns | 152.9 ns |  1.21 |               ? |
