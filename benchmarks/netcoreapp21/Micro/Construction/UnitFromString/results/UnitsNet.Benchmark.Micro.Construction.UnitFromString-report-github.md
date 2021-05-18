``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-SMXYQC : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  Categories=Micro,Construction,Unit,String  

```
|                           Method |       Mean |    Error |   StdDev |  StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |-----------:|---------:|---------:|--------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|        TryParseUnit(validString) |   508.3 ns |  7.37 ns |  6.15 ns | 1.71 ns |   501.6 ns |   522.3 ns |   506.3 ns |  0.97 |            Same |    0.03 | 0.0637 |     - |     - |     418 B |
|           ParseUnit(validString) |   522.6 ns |  9.99 ns | 11.89 ns | 2.60 ns |   504.1 ns |   549.9 ns |   521.6 ns |  1.00 |            Base |    0.00 | 0.0675 |     - |     - |     442 B |
| UnitParser.TryParse(validString) |   711.2 ns | 13.60 ns | 11.36 ns | 3.15 ns |   688.8 ns |   721.9 ns |   716.6 ns |  1.36 |          Slower |    0.03 | 0.0719 |     - |     - |     483 B |
|    UnitParser.Parse(validString) |   723.7 ns | 14.34 ns | 17.61 ns | 3.75 ns |   691.3 ns |   753.7 ns |   723.9 ns |  1.39 |          Slower |    0.05 | 0.0757 |     - |     - |     507 B |
|        TryParseUnit(invalidUnit) | 1,090.1 ns | 20.25 ns | 20.80 ns | 5.04 ns | 1,043.8 ns | 1,121.9 ns | 1,087.6 ns |  2.09 |          Slower |    0.07 | 0.1471 |     - |     - |     964 B |
