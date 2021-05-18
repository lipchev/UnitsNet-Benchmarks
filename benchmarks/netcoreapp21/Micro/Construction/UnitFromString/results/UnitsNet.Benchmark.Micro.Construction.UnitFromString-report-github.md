``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-VZZAPV : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  Categories=Micro,Construction,Unit,String  

```
|                           Method |       Mean |    Error |   StdDev |  StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |-----------:|---------:|---------:|--------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|        TryParseUnit(validString) |   539.3 ns | 10.61 ns |  9.40 ns | 2.51 ns |   523.5 ns |   558.6 ns |   537.9 ns |  0.97 |            Same |    0.02 | 0.0637 |     - |     - |     418 B |
|           ParseUnit(validString) |   557.4 ns |  7.92 ns |  7.40 ns | 1.91 ns |   546.2 ns |   572.3 ns |   558.1 ns |  1.00 |            Base |    0.00 | 0.0675 |     - |     - |     442 B |
|    UnitParser.Parse(validString) |   741.7 ns |  7.77 ns |  6.07 ns | 1.75 ns |   729.4 ns |   754.8 ns |   741.3 ns |  1.33 |          Slower |    0.02 | 0.0757 |     - |     - |     507 B |
| UnitParser.TryParse(validString) |   752.2 ns | 13.82 ns | 12.93 ns | 3.34 ns |   733.0 ns |   775.5 ns |   753.3 ns |  1.35 |          Slower |    0.03 | 0.0719 |     - |     - |     483 B |
|        TryParseUnit(invalidUnit) | 1,152.4 ns |  9.56 ns |  8.95 ns | 2.31 ns | 1,133.1 ns | 1,169.6 ns | 1,154.7 ns |  2.07 |          Slower |    0.03 | 0.1471 |     - |     - |     964 B |
