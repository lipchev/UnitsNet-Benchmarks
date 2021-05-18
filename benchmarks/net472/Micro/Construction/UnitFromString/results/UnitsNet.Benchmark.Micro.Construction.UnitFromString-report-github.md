``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-IIPXTH : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  Categories=Micro,Construction,Unit,String  

```
|                           Method |       Mean |    Error |   StdDev |  StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |-----------:|---------:|---------:|--------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|        TryParseUnit(validString) |   759.0 ns | 15.08 ns | 23.03 ns | 4.14 ns |   727.0 ns |   819.9 ns |   755.5 ns |  0.98 |            Same |    0.04 | 0.0728 | 0.0015 |     - |     473 B |
|           ParseUnit(validString) |   779.8 ns | 15.11 ns | 19.65 ns | 4.01 ns |   748.0 ns |   821.9 ns |   775.3 ns |  1.00 |            Base |    0.00 | 0.0758 | 0.0015 |     - |     497 B |
| UnitParser.TryParse(validString) |   922.8 ns | 18.05 ns | 26.45 ns | 4.91 ns |   877.0 ns |   976.3 ns |   914.0 ns |  1.18 |          Slower |    0.04 | 0.0807 | 0.0013 |     - |     521 B |
|    UnitParser.Parse(validString) |   931.1 ns | 18.15 ns | 24.23 ns | 4.85 ns |   879.3 ns |   983.6 ns |   930.0 ns |  1.19 |          Slower |    0.05 | 0.0858 |      - |     - |     545 B |
|        TryParseUnit(invalidUnit) | 1,845.5 ns | 36.68 ns | 53.77 ns | 9.98 ns | 1,745.8 ns | 1,973.4 ns | 1,838.9 ns |  2.36 |          Slower |    0.10 | 0.1547 |      - |     - |    1003 B |
