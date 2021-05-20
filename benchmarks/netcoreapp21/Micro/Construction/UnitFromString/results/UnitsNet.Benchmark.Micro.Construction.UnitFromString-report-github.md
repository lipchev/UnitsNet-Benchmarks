``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-AAPXUF : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  Categories=Micro,Construction,Unit,String  

```
|                           Method |       Mean |    Error |   StdDev |  StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |-----------:|---------:|---------:|--------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|        TryParseUnit(validString) |   586.0 ns | 120.8 ns |  6.62 ns | 3.82 ns |   578.7 ns |   591.6 ns |   587.7 ns |  1.00 |               ? |    0.01 | 0.0637 |     - |     - |     418 B |
|           ParseUnit(validString) |   588.1 ns | 147.5 ns |  8.08 ns | 4.67 ns |   580.6 ns |   596.7 ns |   586.9 ns |  1.00 |            Base |    0.00 | 0.0675 |     - |     - |     442 B |
| UnitParser.TryParse(validString) |   797.1 ns | 112.5 ns |  6.16 ns | 3.56 ns |   790.2 ns |   802.2 ns |   798.8 ns |  1.36 |               ? |    0.02 | 0.0719 |     - |     - |     483 B |
|    UnitParser.Parse(validString) |   813.3 ns | 170.5 ns |  9.35 ns | 5.40 ns |   805.7 ns |   823.8 ns |   810.4 ns |  1.38 |               ? |    0.03 | 0.0757 |     - |     - |     507 B |
|        TryParseUnit(invalidUnit) | 1,256.5 ns | 257.8 ns | 14.13 ns | 8.16 ns | 1,245.4 ns | 1,272.4 ns | 1,251.8 ns |  2.14 |               ? |    0.04 | 0.1471 |     - |     - |     964 B |
