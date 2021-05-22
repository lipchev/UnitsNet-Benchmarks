``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-XVUTFZ : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  Categories=Micro,Construction,Unit,String  

```
|                           Method |       Mean |    Error |   StdDev |  StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |-----------:|---------:|---------:|--------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|        TryParseUnit(validString) |   783.2 ns | 13.57 ns | 12.03 ns | 3.21 ns |   762.9 ns |   803.0 ns |   780.6 ns |  0.99 |            Same |    0.03 | 0.0713 |     - |     - |     473 B |
|           ParseUnit(validString) |   787.4 ns | 15.24 ns | 15.65 ns | 3.80 ns |   764.3 ns |   819.2 ns |   792.6 ns |  1.00 |            Base |    0.00 | 0.0758 |     - |     - |     497 B |
| UnitParser.TryParse(validString) |   905.7 ns | 15.74 ns | 14.73 ns | 3.80 ns |   888.4 ns |   930.5 ns |   905.5 ns |  1.15 |          Slower |    0.03 | 0.0795 |     - |     - |     521 B |
|    UnitParser.Parse(validString) |   914.4 ns | 17.40 ns | 21.37 ns | 4.56 ns |   879.1 ns |   957.3 ns |   912.3 ns |  1.17 |          Slower |    0.03 | 0.0858 |     - |     - |     545 B |
|        TryParseUnit(invalidUnit) | 1,879.5 ns | 35.88 ns | 41.31 ns | 9.24 ns | 1,783.3 ns | 1,951.3 ns | 1,871.3 ns |  2.39 |          Slower |    0.07 | 0.1516 |     - |     - |    1003 B |
