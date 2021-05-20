``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-LPYFYS : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  Categories=Micro,Construction,Unit,String  

```
|                           Method |       Mean |    Error |   StdDev |  StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |-----------:|---------:|---------:|--------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|        TryParseUnit(validString) |   555.9 ns | 10.58 ns | 10.86 ns | 2.63 ns |   536.5 ns |   571.8 ns |   559.3 ns |  0.99 |            Same |    0.04 | 0.0637 |     - |     - |     418 B |
|           ParseUnit(validString) |   559.8 ns | 11.03 ns | 13.13 ns | 2.86 ns |   538.8 ns |   588.1 ns |   556.4 ns |  1.00 |            Base |    0.00 | 0.0675 |     - |     - |     442 B |
| UnitParser.TryParse(validString) |   746.1 ns | 14.46 ns | 15.47 ns | 3.65 ns |   724.9 ns |   771.5 ns |   747.2 ns |  1.33 |          Slower |    0.05 | 0.0719 |     - |     - |     483 B |
|    UnitParser.Parse(validString) |   755.7 ns | 14.46 ns | 19.30 ns | 3.86 ns |   717.9 ns |   790.8 ns |   751.9 ns |  1.35 |          Slower |    0.05 | 0.0757 |     - |     - |     507 B |
|        TryParseUnit(invalidUnit) | 1,192.6 ns | 23.02 ns | 27.40 ns | 5.98 ns | 1,137.2 ns | 1,251.5 ns | 1,194.9 ns |  2.13 |          Slower |    0.07 | 0.1471 |     - |     - |     964 B |
