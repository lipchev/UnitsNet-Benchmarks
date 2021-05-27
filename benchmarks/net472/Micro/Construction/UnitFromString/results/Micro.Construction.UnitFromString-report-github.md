``` ini

BenchmarkDotNet=v0.13.0, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET SDK=5.0.203
  [Host]     : .NET 5.0.6 (5.0.621.22011), X64 RyuJIT
  Job-GNUCEJ : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET Framework 4.7.2  Toolchain=net472  Categories=Micro,Construction,Unit,String  

```
|                           Method |       Mean |    Error |   StdDev |  StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |-----------:|---------:|---------:|--------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|           ParseUnit(validString) |   709.9 ns | 12.47 ns | 11.06 ns | 2.95 ns |   690.1 ns |   730.8 ns |   712.4 ns |  1.00 |            Base |    0.00 | 0.0773 |     - |     - |     497 B |
|        TryParseUnit(validString) |   716.5 ns | 12.78 ns | 10.67 ns | 2.96 ns |   696.8 ns |   730.9 ns |   719.7 ns |  1.01 |            Same |    0.02 | 0.0735 |     - |     - |     473 B |
| UnitParser.TryParse(validString) |   825.3 ns |  9.49 ns |  8.41 ns | 2.25 ns |   814.1 ns |   846.6 ns |   822.1 ns |  1.16 |          Slower |    0.02 | 0.0807 |     - |     - |     521 B |
|    UnitParser.Parse(validString) |   833.3 ns |  7.61 ns |  6.74 ns | 1.80 ns |   822.3 ns |   844.3 ns |   831.9 ns |  1.17 |          Slower |    0.02 | 0.0858 |     - |     - |     545 B |
|        TryParseUnit(invalidUnit) | 1,663.8 ns | 32.79 ns | 32.21 ns | 8.05 ns | 1,620.1 ns | 1,742.9 ns | 1,652.2 ns |  2.34 |          Slower |    0.07 | 0.1547 |     - |     - |   1,003 B |
