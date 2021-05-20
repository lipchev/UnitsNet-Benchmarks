``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-CNJHLT : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  Categories=Micro,Construction,Unit,String  

```
|                           Method |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|           ParseUnit(validString) | 529.7 ns | 129.1 ns |  7.08 ns |  4.09 ns | 521.5 ns | 534.3 ns | 533.2 ns |  1.00 |            Base |    0.00 | 0.0273 |     - |     - |     433 B |
|        TryParseUnit(validString) | 549.8 ns | 252.6 ns | 13.85 ns |  8.00 ns | 533.9 ns | 559.3 ns | 556.1 ns |  1.04 |               ? |    0.01 | 0.0258 |     - |     - |     409 B |
| UnitParser.TryParse(validString) | 705.2 ns | 379.0 ns | 20.78 ns | 11.99 ns | 681.8 ns | 721.3 ns | 712.7 ns |  1.33 |               ? |    0.05 | 0.0290 |     - |     - |     471 B |
|    UnitParser.Parse(validString) | 733.8 ns | 622.5 ns | 34.12 ns | 19.70 ns | 710.5 ns | 773.0 ns | 718.0 ns |  1.39 |               ? |    0.05 | 0.0303 |     - |     - |     495 B |
|        TryParseUnit(invalidUnit) | 954.8 ns | 280.9 ns | 15.40 ns |  8.89 ns | 941.7 ns | 971.8 ns | 950.9 ns |  1.80 |               ? |    0.05 | 0.0576 |     - |     - |     925 B |
