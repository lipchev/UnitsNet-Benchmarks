``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-HMWVGO : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  Categories=Micro,Construction,Unit,String  

```
|                           Method |       Mean |    Error |   StdDev |  StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |-----------:|---------:|---------:|--------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|           ParseUnit(validString) |   792.5 ns | 13.39 ns | 12.53 ns | 3.23 ns |   775.7 ns |   815.3 ns |   788.6 ns |  1.00 |            Base |    0.00 | 0.0758 |     - |     - |     497 B |
|        TryParseUnit(validString) |   820.9 ns | 16.27 ns | 25.33 ns | 4.48 ns |   776.4 ns |   881.5 ns |   823.4 ns |  1.02 |            Same |    0.03 | 0.0713 |     - |     - |     473 B |
|    UnitParser.Parse(validString) |   920.9 ns | 18.29 ns | 17.11 ns | 4.42 ns |   895.5 ns |   947.6 ns |   919.4 ns |  1.16 |          Slower |    0.03 | 0.0858 |     - |     - |     545 B |
| UnitParser.TryParse(validString) |   922.2 ns | 16.14 ns | 15.09 ns | 3.90 ns |   887.2 ns |   944.5 ns |   924.6 ns |  1.16 |          Slower |    0.03 | 0.0795 |     - |     - |     521 B |
|        TryParseUnit(invalidUnit) | 1,889.7 ns | 16.42 ns | 14.56 ns | 3.89 ns | 1,853.1 ns | 1,905.2 ns | 1,894.9 ns |  2.39 |          Slower |    0.04 | 0.1516 |     - |     - |    1003 B |
