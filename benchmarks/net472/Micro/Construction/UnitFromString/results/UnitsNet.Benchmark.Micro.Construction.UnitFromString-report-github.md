``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-CAZZGF : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  Categories=Micro,Construction,Unit,String  

```
|                           Method |       Mean |    Error |   StdDev |   StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |-----------:|---------:|---------:|---------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|           ParseUnit(validString) |   791.6 ns | 15.58 ns | 14.57 ns |  3.76 ns |   769.5 ns |   811.7 ns |   791.3 ns |  1.00 |            Base |    0.00 | 0.0758 |     - |     - |     497 B |
|        TryParseUnit(validString) |   832.1 ns | 16.44 ns | 30.06 ns |  4.64 ns |   765.8 ns |   910.6 ns |   835.0 ns |  1.05 |            Same |    0.03 | 0.0713 |     - |     - |     473 B |
| UnitParser.TryParse(validString) |   928.7 ns | 18.48 ns | 23.37 ns |  4.87 ns |   881.4 ns |   977.1 ns |   925.0 ns |  1.17 |          Slower |    0.03 | 0.0795 |     - |     - |     521 B |
|    UnitParser.Parse(validString) |   937.6 ns | 18.64 ns | 37.22 ns |  5.32 ns |   876.9 ns | 1,025.5 ns |   939.4 ns |  1.21 |          Slower |    0.05 | 0.0858 |     - |     - |     545 B |
|        TryParseUnit(invalidUnit) | 1,853.9 ns | 36.74 ns | 60.36 ns | 10.20 ns | 1,718.2 ns | 1,972.1 ns | 1,846.0 ns |  2.36 |          Slower |    0.10 | 0.1516 |     - |     - |    1003 B |
