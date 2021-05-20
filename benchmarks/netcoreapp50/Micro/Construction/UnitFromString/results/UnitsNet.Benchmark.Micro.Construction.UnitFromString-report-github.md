``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-CGRDHW : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  Categories=Micro,Construction,Unit,String  

```
|                           Method |     Mean |    Error |   StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|--------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|        TryParseUnit(validString) | 489.0 ns |  9.59 ns |  8.00 ns | 2.22 ns | 473.5 ns | 506.2 ns | 489.9 ns |  0.95 |            Same |    0.03 | 0.0152 |     - |     - |     409 B |
|           ParseUnit(validString) | 514.5 ns | 10.13 ns | 13.18 ns | 2.69 ns | 487.7 ns | 532.2 ns | 516.7 ns |  1.00 |            Base |    0.00 | 0.0159 |     - |     - |     433 B |
| UnitParser.TryParse(validString) | 678.0 ns | 11.55 ns | 10.80 ns | 2.79 ns | 661.1 ns | 696.9 ns | 678.5 ns |  1.33 |          Slower |    0.04 | 0.0177 |     - |     - |     471 B |
|    UnitParser.Parse(validString) | 702.7 ns | 12.81 ns | 19.95 ns | 3.53 ns | 670.2 ns | 751.2 ns | 702.2 ns |  1.37 |          Slower |    0.05 | 0.0177 |     - |     - |     495 B |
|        TryParseUnit(invalidUnit) | 912.4 ns | 18.02 ns | 25.26 ns | 4.86 ns | 865.8 ns | 969.7 ns | 907.8 ns |  1.78 |          Slower |    0.07 | 0.0349 |     - |     - |     925 B |
