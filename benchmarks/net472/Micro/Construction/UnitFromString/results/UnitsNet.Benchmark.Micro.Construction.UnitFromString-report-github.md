``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-IXURKK : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  Categories=Micro,Construction,Unit,String  

```
|                           Method |       Mean |    Error |   StdDev |   StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |-----------:|---------:|---------:|---------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|           ParseUnit(validString) |   753.8 ns | 554.1 ns | 30.37 ns | 17.54 ns |   732.1 ns |   788.5 ns |   740.7 ns |  1.00 |            Base |    0.00 | 0.0766 |     - |     - |     497 B |
|        TryParseUnit(validString) |   835.8 ns | 427.5 ns | 23.43 ns | 13.53 ns |   817.1 ns |   862.1 ns |   828.2 ns |  1.11 |               ? |    0.01 | 0.0698 |     - |     - |     473 B |
| UnitParser.TryParse(validString) |   897.0 ns | 851.9 ns | 46.69 ns | 26.96 ns |   845.4 ns |   936.4 ns |   909.1 ns |  1.19 |               ? |    0.04 | 0.0782 |     - |     - |     521 B |
|    UnitParser.Parse(validString) |   983.7 ns | 221.9 ns | 12.16 ns |  7.02 ns |   969.9 ns |   992.8 ns |   988.4 ns |  1.31 |               ? |    0.05 | 0.0858 |     - |     - |     545 B |
|        TryParseUnit(invalidUnit) | 1,704.1 ns | 811.3 ns | 44.47 ns | 25.67 ns | 1,667.9 ns | 1,753.8 ns | 1,690.8 ns |  2.26 |               ? |    0.13 | 0.1486 |     - |     - |    1003 B |
