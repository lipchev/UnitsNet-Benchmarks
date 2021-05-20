``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8272CL CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-LUVSIG : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  Categories=Micro,Construction,Unit,String  

```
|                           Method |     Mean |     Error |  StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|----------:|--------:|--------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|        TryParseUnit(validString) | 450.0 ns |  39.98 ns | 2.19 ns | 1.27 ns | 448.4 ns | 452.5 ns | 449.0 ns |  0.97 |               ? |    0.01 | 0.0212 |     - |     - |     409 B |
|           ParseUnit(validString) | 463.6 ns | 140.60 ns | 7.71 ns | 4.45 ns | 454.7 ns | 468.4 ns | 467.7 ns |  1.00 |            Base |    0.00 | 0.0227 |     - |     - |     433 B |
| UnitParser.TryParse(validString) | 583.2 ns | 181.27 ns | 9.94 ns | 5.74 ns | 575.1 ns | 594.3 ns | 580.2 ns |  1.26 |               ? |    0.02 | 0.0246 |     - |     - |     471 B |
|    UnitParser.Parse(validString) | 604.7 ns |  38.69 ns | 2.12 ns | 1.22 ns | 602.6 ns | 606.9 ns | 604.5 ns |  1.30 |               ? |    0.02 | 0.0259 |     - |     - |     495 B |
|        TryParseUnit(invalidUnit) | 835.8 ns |  96.64 ns | 5.30 ns | 3.06 ns | 830.5 ns | 841.1 ns | 835.9 ns |  1.80 |               ? |    0.04 | 0.0485 |     - |     - |     925 B |
