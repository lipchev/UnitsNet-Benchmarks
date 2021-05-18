``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-BVIBAQ : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  Categories=Micro,Construction,Unit,String  

```
|                           Method |       Mean |    Error |   StdDev |  StdErr |      Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |-----------:|---------:|---------:|--------:|---------:|-----------:|-----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|        TryParseUnit(validString) |   570.5 ns | 11.39 ns | 19.34 ns | 3.18 ns | 537.5 ns |   609.3 ns |   567.7 ns |  0.97 |            Same |    0.04 | 0.0152 |     - |     - |     409 B |
|           ParseUnit(validString) |   588.5 ns | 11.74 ns | 16.45 ns | 3.17 ns | 558.7 ns |   624.3 ns |   588.4 ns |  1.00 |            Base |    0.00 | 0.0159 |     - |     - |     433 B |
|    UnitParser.Parse(validString) |   785.3 ns | 15.70 ns | 33.79 ns | 4.52 ns | 701.6 ns |   843.0 ns |   786.3 ns |  1.33 |          Slower |    0.07 | 0.0177 |     - |     - |     495 B |
| UnitParser.TryParse(validString) |   795.1 ns | 15.90 ns | 30.25 ns | 4.51 ns | 739.5 ns |   863.4 ns |   795.6 ns |  1.36 |          Slower |    0.06 | 0.0177 |     - |     - |     471 B |
|        TryParseUnit(invalidUnit) | 1,054.6 ns | 20.92 ns | 40.80 ns | 5.95 ns | 962.0 ns | 1,146.0 ns | 1,049.3 ns |  1.79 |          Slower |    0.09 | 0.0349 |     - |     - |     925 B |
