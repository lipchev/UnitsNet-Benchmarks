``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-YSKQOR : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  Categories=Micro,Construction,Unit,String  

```
|                           Method |       Mean |    Error |   StdDev |   StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |-----------:|---------:|---------:|---------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|        TryParseUnit(validString) |   553.6 ns | 177.1 ns |  9.71 ns |  5.60 ns |   547.4 ns |   564.8 ns |   548.6 ns |  0.95 |               ? |    0.03 | 0.0637 |     - |     - |     418 B |
|           ParseUnit(validString) |   585.6 ns | 255.6 ns | 14.01 ns |  8.09 ns |   577.3 ns |   601.8 ns |   577.8 ns |  1.00 |            Base |    0.00 | 0.0675 |     - |     - |     442 B |
| UnitParser.TryParse(validString) |   738.5 ns | 236.2 ns | 12.95 ns |  7.48 ns |   726.2 ns |   752.0 ns |   737.2 ns |  1.26 |               ? |    0.05 | 0.0719 |     - |     - |     483 B |
|    UnitParser.Parse(validString) |   748.9 ns | 377.4 ns | 20.69 ns | 11.94 ns |   734.4 ns |   772.6 ns |   739.7 ns |  1.28 |               ? |    0.01 | 0.0757 |     - |     - |     507 B |
|        TryParseUnit(invalidUnit) | 1,193.2 ns | 900.4 ns | 49.35 ns | 28.49 ns | 1,152.8 ns | 1,248.2 ns | 1,178.5 ns |  2.04 |               ? |    0.04 | 0.1471 |     - |     - |     964 B |
