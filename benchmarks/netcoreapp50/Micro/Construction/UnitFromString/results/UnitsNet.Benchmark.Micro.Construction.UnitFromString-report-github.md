``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-YIRSBB : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  Categories=Micro,Construction,Unit,String  

```
|                           Method |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|           ParseUnit(validString) | 485.2 ns | 273.0 ns | 14.97 ns |  8.64 ns | 468.2 ns | 496.6 ns | 490.7 ns |  1.00 |            Base |    0.00 | 0.0273 |     - |     - |     433 B |
|        TryParseUnit(validString) | 491.0 ns | 339.3 ns | 18.60 ns | 10.74 ns | 472.8 ns | 509.9 ns | 490.4 ns |  1.01 |               ? |    0.07 | 0.0258 |     - |     - |     409 B |
|    UnitParser.Parse(validString) | 674.3 ns | 215.4 ns | 11.80 ns |  6.82 ns | 662.8 ns | 686.4 ns | 673.9 ns |  1.39 |               ? |    0.02 | 0.0303 |     - |     - |     495 B |
| UnitParser.TryParse(validString) | 705.5 ns | 405.1 ns | 22.20 ns | 12.82 ns | 679.9 ns | 718.4 ns | 718.3 ns |  1.45 |               ? |    0.01 | 0.0290 |     - |     - |     471 B |
|        TryParseUnit(invalidUnit) | 889.4 ns | 766.3 ns | 42.00 ns | 24.25 ns | 860.1 ns | 937.5 ns | 870.5 ns |  1.84 |               ? |    0.14 | 0.0576 |     - |     - |     925 B |
