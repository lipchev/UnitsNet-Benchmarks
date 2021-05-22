``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-CNGEJU : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  Categories=Micro,Construction,Unit,String  

```
|                           Method |       Mean |    Error |   StdDev |  StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |-----------:|---------:|---------:|--------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|        TryParseUnit(validString) |   586.1 ns |  6.78 ns |  6.01 ns | 1.61 ns |   576.8 ns |   596.3 ns |   584.9 ns |  0.97 |            Same |    0.02 | 0.0652 |     - |     - |     418 B |
|           ParseUnit(validString) |   600.5 ns | 11.76 ns | 11.55 ns | 2.89 ns |   584.9 ns |   619.8 ns |   599.1 ns |  1.00 |            Base |    0.00 | 0.0690 |     - |     - |     442 B |
|    UnitParser.Parse(validString) |   797.7 ns | 13.18 ns | 12.33 ns | 3.18 ns |   780.0 ns |   819.4 ns |   795.1 ns |  1.33 |          Slower |    0.02 | 0.0782 |     - |     - |     507 B |
| UnitParser.TryParse(validString) |   798.1 ns | 15.47 ns | 15.19 ns | 3.80 ns |   780.7 ns |   826.2 ns |   795.2 ns |  1.33 |          Slower |    0.03 | 0.0744 |     - |     - |     483 B |
|        TryParseUnit(invalidUnit) | 1,266.6 ns | 15.68 ns | 14.67 ns | 3.79 ns | 1,246.7 ns | 1,289.5 ns | 1,261.8 ns |  2.11 |          Slower |    0.05 | 0.1501 |     - |     - |     964 B |
