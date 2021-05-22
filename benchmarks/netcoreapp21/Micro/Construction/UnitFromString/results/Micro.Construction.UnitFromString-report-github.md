``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-TEOASA : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  Categories=Micro,Construction,Unit,String  

```
|                           Method |       Mean |    Error |   StdDev |  StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |-----------:|---------:|---------:|--------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|        TryParseUnit(validString) |   592.2 ns |  9.10 ns |  8.06 ns | 2.15 ns |   581.4 ns |   609.7 ns |   591.6 ns |  0.98 |            Same |    0.02 | 0.0644 |     - |     - |     418 B |
|           ParseUnit(validString) |   604.5 ns | 11.45 ns | 11.75 ns | 2.85 ns |   582.0 ns |   625.8 ns |   608.6 ns |  1.00 |            Base |    0.00 | 0.0682 |     - |     - |     442 B |
|    UnitParser.Parse(validString) |   762.6 ns |  7.86 ns |  6.56 ns | 1.82 ns |   753.2 ns |   775.2 ns |   760.2 ns |  1.26 |          Slower |    0.04 | 0.0770 |     - |     - |     507 B |
| UnitParser.TryParse(validString) |   774.2 ns | 14.22 ns | 15.81 ns | 3.63 ns |   746.7 ns |   809.1 ns |   776.5 ns |  1.28 |          Slower |    0.04 | 0.0732 |     - |     - |     483 B |
|        TryParseUnit(invalidUnit) | 1,288.5 ns | 24.89 ns | 24.44 ns | 6.11 ns | 1,253.2 ns | 1,330.3 ns | 1,282.6 ns |  2.13 |          Slower |    0.06 | 0.1501 |     - |     - |     964 B |
