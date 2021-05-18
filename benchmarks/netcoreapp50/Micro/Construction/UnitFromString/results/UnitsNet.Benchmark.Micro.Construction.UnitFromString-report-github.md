``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-HEFBOS : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  Categories=Micro,Construction,Unit,String  

```
|                           Method |     Mean |    Error |   StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|--------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|           ParseUnit(validString) | 474.9 ns |  9.07 ns | 13.85 ns | 2.49 ns | 449.4 ns | 502.8 ns | 474.7 ns |  1.00 |            Base |    0.00 | 0.0159 |     - |     - |     433 B |
|        TryParseUnit(validString) | 531.5 ns |  9.24 ns |  8.64 ns | 2.23 ns | 520.4 ns | 549.3 ns | 530.6 ns |  1.11 |          Slower |    0.05 | 0.0152 |     - |     - |     409 B |
|    UnitParser.Parse(validString) | 634.1 ns | 12.54 ns | 14.92 ns | 3.26 ns | 610.5 ns | 667.1 ns | 629.5 ns |  1.33 |          Slower |    0.05 | 0.0183 |     - |     - |     495 B |
| UnitParser.TryParse(validString) | 634.6 ns | 10.34 ns |  9.17 ns | 2.45 ns | 616.3 ns | 644.9 ns | 636.5 ns |  1.33 |          Slower |    0.05 | 0.0177 |     - |     - |     471 B |
|        TryParseUnit(invalidUnit) | 835.5 ns | 15.57 ns | 14.56 ns | 3.76 ns | 803.7 ns | 854.1 ns | 841.7 ns |  1.74 |          Slower |    0.08 | 0.0349 |     - |     - |     925 B |
