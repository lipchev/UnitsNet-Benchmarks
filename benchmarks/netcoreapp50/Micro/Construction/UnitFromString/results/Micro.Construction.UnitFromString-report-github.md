``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-GDJZSV : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  Categories=Micro,Construction,Unit,String  

```
|                           Method |       Mean |    Error |   StdDev |  StdErr |      Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |-----------:|---------:|---------:|--------:|---------:|-----------:|-----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|           ParseUnit(validString) |   509.5 ns | 10.04 ns | 15.02 ns | 2.74 ns | 472.7 ns |   545.3 ns |   508.4 ns |  1.00 |            Base |    0.00 | 0.0273 |     - |     - |     433 B |
|        TryParseUnit(validString) |   662.7 ns | 12.67 ns | 12.44 ns | 3.11 ns | 642.8 ns |   681.4 ns |   662.5 ns |  1.32 |          Slower |    0.05 | 0.0258 |     - |     - |     409 B |
| UnitParser.TryParse(validString) |   680.4 ns | 13.54 ns | 13.91 ns | 3.37 ns | 657.9 ns |   710.2 ns |   677.0 ns |  1.35 |          Slower |    0.06 | 0.0290 |     - |     - |     471 B |
|    UnitParser.Parse(validString) |   735.2 ns | 14.34 ns | 15.34 ns | 3.62 ns | 709.4 ns |   756.4 ns |   738.2 ns |  1.45 |          Slower |    0.07 | 0.0303 |     - |     - |     495 B |
|        TryParseUnit(invalidUnit) | 1,039.8 ns | 20.35 ns | 31.08 ns | 5.58 ns | 986.4 ns | 1,118.9 ns | 1,034.2 ns |  2.04 |          Slower |    0.09 | 0.0576 |     - |     - |     925 B |
