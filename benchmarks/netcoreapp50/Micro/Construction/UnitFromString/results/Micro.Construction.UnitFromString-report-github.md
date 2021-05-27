``` ini

BenchmarkDotNet=v0.13.0, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET SDK=5.0.203
  [Host]     : .NET 5.0.6 (5.0.621.22011), X64 RyuJIT
  Job-MUAIDM : .NET 5.0.6 (5.0.621.22011), X64 RyuJIT

Runtime=.NET 5.0  Toolchain=netcoreapp50  Categories=Micro,Construction,Unit,String  

```
|                           Method |       Mean |    Error |   StdDev |  StdErr |      Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |-----------:|---------:|---------:|--------:|---------:|-----------:|-----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|           ParseUnit(validString) |   564.2 ns |  7.72 ns |  7.22 ns | 1.86 ns | 553.7 ns |   578.6 ns |   563.6 ns |  1.00 |            Base |    0.00 | 0.0227 |     - |     - |     433 B |
|        TryParseUnit(validString) |   569.7 ns |  8.03 ns |  7.51 ns | 1.94 ns | 559.8 ns |   581.7 ns |   568.9 ns |  1.01 |            Same |    0.02 | 0.0212 |     - |     - |     409 B |
| UnitParser.TryParse(validString) |   748.5 ns | 14.18 ns | 16.32 ns | 3.65 ns | 712.3 ns |   777.8 ns |   748.5 ns |  1.33 |          Slower |    0.04 | 0.0240 |     - |     - |     471 B |
|    UnitParser.Parse(validString) |   753.6 ns | 14.26 ns | 14.64 ns | 3.55 ns | 731.2 ns |   782.2 ns |   753.0 ns |  1.34 |          Slower |    0.04 | 0.0252 |     - |     - |     495 B |
|        TryParseUnit(invalidUnit) | 1,035.7 ns | 19.49 ns | 20.02 ns | 4.85 ns | 993.6 ns | 1,065.3 ns | 1,038.9 ns |  1.84 |          Slower |    0.04 | 0.0485 |     - |     - |     925 B |
