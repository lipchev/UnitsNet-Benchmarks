``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-ZYRONI : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  Categories=Micro,Construction,Unit,String  

```
|                           Method |       Mean |     Error |   StdDev |   StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |-----------:|----------:|---------:|---------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|        TryParseUnit(validString) |   595.7 ns | 154.41 ns |  8.46 ns |  4.89 ns |   585.9 ns |   601.3 ns |   599.8 ns |  0.99 |               ? |    0.01 | 0.0637 |     - |     - |     418 B |
|           ParseUnit(validString) |   603.4 ns | 276.76 ns | 15.17 ns |  8.76 ns |   585.8 ns |   612.5 ns |   611.7 ns |  1.00 |            Base |    0.00 | 0.0675 |     - |     - |     442 B |
| UnitParser.TryParse(validString) |   799.1 ns | 128.49 ns |  7.04 ns |  4.07 ns |   791.1 ns |   804.1 ns |   802.3 ns |  1.33 |               ? |    0.04 | 0.0719 |     - |     - |     483 B |
|    UnitParser.Parse(validString) |   818.9 ns |  17.24 ns |  0.95 ns |  0.55 ns |   817.9 ns |   819.8 ns |   818.9 ns |  1.36 |               ? |    0.03 | 0.0757 |     - |     - |     507 B |
|        TryParseUnit(invalidUnit) | 1,257.5 ns | 558.32 ns | 30.60 ns | 17.67 ns | 1,227.3 ns | 1,288.5 ns | 1,256.8 ns |  2.09 |               ? |    0.10 | 0.1471 |     - |     - |     964 B |
