``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-EWQCZL : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  Categories=Micro,Construction,Unit,String  

```
|                           Method |       Mean |    Error |   StdDev |  StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |-----------:|---------:|---------:|--------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|        TryParseUnit(validString) |   506.5 ns | 10.12 ns | 14.52 ns | 2.74 ns |   481.3 ns |   533.0 ns |   505.4 ns |  0.97 |            Same |    0.04 | 0.0644 |     - |     - |     418 B |
|           ParseUnit(validString) |   519.2 ns | 10.18 ns | 15.55 ns | 2.79 ns |   489.9 ns |   545.8 ns |   519.8 ns |  1.00 |            Base |    0.00 | 0.0682 |     - |     - |     442 B |
| UnitParser.TryParse(validString) |   664.9 ns | 13.24 ns | 18.98 ns | 3.59 ns |   633.5 ns |   702.4 ns |   660.2 ns |  1.28 |          Slower |    0.06 | 0.0732 |     - |     - |     483 B |
|    UnitParser.Parse(validString) |   669.3 ns | 12.92 ns | 15.87 ns | 3.38 ns |   637.6 ns |   702.6 ns |   667.4 ns |  1.28 |          Slower |    0.04 | 0.0770 |     - |     - |     507 B |
|        TryParseUnit(invalidUnit) | 1,066.7 ns | 20.79 ns | 29.15 ns | 5.61 ns | 1,019.3 ns | 1,123.2 ns | 1,062.9 ns |  2.06 |          Slower |    0.10 | 0.1501 |     - |     - |     964 B |
