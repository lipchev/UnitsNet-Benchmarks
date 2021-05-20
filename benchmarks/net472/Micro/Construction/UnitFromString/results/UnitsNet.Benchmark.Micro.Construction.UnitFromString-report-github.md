``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-OAVEKJ : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  Categories=Micro,Construction,Unit,String  

```
|                           Method |       Mean |    Error |   StdDev |   StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |-----------:|---------:|---------:|---------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|           ParseUnit(validString) |   846.9 ns | 210.5 ns | 11.54 ns |  6.66 ns |   834.1 ns |   856.6 ns |   850.0 ns |  1.00 |            Base |    0.00 | 0.0728 |     - |     - |     497 B |
|        TryParseUnit(validString) |   849.4 ns | 294.0 ns | 16.12 ns |  9.30 ns |   831.1 ns |   861.5 ns |   855.6 ns |  1.00 |               ? |    0.03 | 0.0698 |     - |     - |     473 B |
|    UnitParser.Parse(validString) |   999.7 ns | 470.1 ns | 25.77 ns | 14.88 ns |   975.1 ns | 1,026.5 ns |   997.4 ns |  1.18 |               ? |    0.04 | 0.0858 |     - |     - |     545 B |
| UnitParser.TryParse(validString) | 1,015.4 ns | 152.3 ns |  8.35 ns |  4.82 ns | 1,006.2 ns | 1,022.3 ns | 1,017.8 ns |  1.20 |               ? |    0.02 | 0.0782 |     - |     - |     521 B |
|        TryParseUnit(invalidUnit) | 1,955.7 ns | 786.2 ns | 43.10 ns | 24.88 ns | 1,906.2 ns | 1,984.8 ns | 1,976.2 ns |  2.31 |               ? |    0.07 | 0.1486 |     - |     - |    1003 B |
