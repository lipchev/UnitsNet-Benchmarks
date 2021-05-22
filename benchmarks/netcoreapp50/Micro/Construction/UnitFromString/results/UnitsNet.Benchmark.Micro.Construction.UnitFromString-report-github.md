``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-RCTTRA : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  Categories=Micro,Construction,Unit,String  

```
|                           Method |       Mean |    Error |   StdDev |  StdErr |     Median |        Min |        Max | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |-----------:|---------:|---------:|--------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|        TryParseUnit(validString) |   553.7 ns |  7.32 ns |  6.11 ns | 1.69 ns |   553.8 ns |   546.2 ns |   562.8 ns |  0.97 |            Same |    0.03 | 0.0212 |     - |     - |     409 B |
|           ParseUnit(validString) |   580.3 ns | 11.48 ns | 18.86 ns | 3.19 ns |   575.7 ns |   553.1 ns |   621.9 ns |  1.00 |            Base |    0.00 | 0.0227 |     - |     - |     433 B |
|    UnitParser.Parse(validString) |   753.8 ns | 14.56 ns | 16.19 ns | 3.71 ns |   751.5 ns |   729.2 ns |   785.1 ns |  1.31 |          Slower |    0.05 | 0.0252 |     - |     - |     495 B |
| UnitParser.TryParse(validString) |   758.3 ns | 14.93 ns | 29.81 ns | 4.26 ns |   746.8 ns |   717.7 ns |   829.0 ns |  1.31 |          Slower |    0.06 | 0.0240 |     - |     - |     471 B |
|        TryParseUnit(invalidUnit) | 1,041.5 ns | 17.80 ns | 13.90 ns | 4.01 ns | 1,044.8 ns | 1,014.6 ns | 1,062.7 ns |  1.83 |          Slower |    0.06 | 0.0485 |     - |     - |     925 B |
