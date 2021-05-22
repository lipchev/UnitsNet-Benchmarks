``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-XWBLZG : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  Categories=Micro,Construction,Unit,String  

```
|                           Method |       Mean |    Error |   StdDev |  StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |-----------:|---------:|---------:|--------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|           ParseUnit(validString) |   748.1 ns | 14.81 ns | 18.73 ns | 3.91 ns |   721.6 ns |   785.5 ns |   746.6 ns |  1.00 |            Base |    0.00 | 0.0758 | 0.0015 |     - |     497 B |
|        TryParseUnit(validString) |   748.4 ns | 14.34 ns | 13.41 ns | 3.46 ns |   732.3 ns |   773.1 ns |   750.2 ns |  1.00 |            Same |    0.03 | 0.0735 | 0.0008 |     - |     473 B |
| UnitParser.TryParse(validString) |   891.3 ns | 17.36 ns | 21.96 ns | 4.58 ns |   846.5 ns |   932.6 ns |   890.4 ns |  1.19 |          Slower |    0.04 | 0.0807 | 0.0013 |     - |     521 B |
|    UnitParser.Parse(validString) |   895.9 ns | 14.44 ns | 13.50 ns | 3.49 ns |   874.6 ns |   922.7 ns |   896.3 ns |  1.20 |          Slower |    0.04 | 0.0858 |      - |     - |     545 B |
|        TryParseUnit(invalidUnit) | 1,756.6 ns | 23.45 ns | 21.94 ns | 5.66 ns | 1,715.1 ns | 1,797.7 ns | 1,755.4 ns |  2.35 |          Slower |    0.07 | 0.1547 |      - |     - |    1003 B |
