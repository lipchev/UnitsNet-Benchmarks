``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-TOWQSS : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  Categories=Micro,Construction,Unit,String  

```
|                           Method |     Mean |    Error |   StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|--------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|        TryParseUnit(validString) | 487.6 ns |  9.67 ns | 15.88 ns | 2.68 ns | 463.9 ns | 527.3 ns | 482.9 ns |  0.96 |            Same |    0.04 | 0.0258 |     - |     - |     409 B |
|           ParseUnit(validString) | 507.8 ns |  9.76 ns | 13.37 ns | 2.62 ns | 485.8 ns | 531.8 ns | 508.8 ns |  1.00 |            Base |    0.00 | 0.0273 |     - |     - |     433 B |
| UnitParser.TryParse(validString) | 666.3 ns | 13.03 ns | 18.26 ns | 3.51 ns | 622.0 ns | 697.2 ns | 665.9 ns |  1.31 |          Slower |    0.06 | 0.0290 |     - |     - |     471 B |
|    UnitParser.Parse(validString) | 680.8 ns | 13.49 ns | 20.19 ns | 3.69 ns | 642.9 ns | 732.6 ns | 680.8 ns |  1.34 |          Slower |    0.05 | 0.0303 |     - |     - |     495 B |
|        TryParseUnit(invalidUnit) | 885.8 ns | 17.21 ns | 16.90 ns | 4.23 ns | 852.3 ns | 913.6 ns | 886.4 ns |  1.73 |          Slower |    0.05 | 0.0576 |     - |     - |     925 B |
