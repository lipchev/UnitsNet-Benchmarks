``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-VSPWKN : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  Categories=Micro,Construction,Unit,String  

```
|                           Method |       Mean |       Error |    StdDev |   StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |-----------:|------------:|----------:|---------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|        TryParseUnit(validString) |   486.4 ns |   196.88 ns |  10.79 ns |  6.23 ns |   479.3 ns |   498.8 ns |   481.1 ns |  0.77 |               ? |    0.01 | 0.0637 |     - |     - |     418 B |
|           ParseUnit(validString) |   632.4 ns |    65.67 ns |   3.60 ns |  2.08 ns |   628.4 ns |   635.3 ns |   633.5 ns |  1.00 |            Base |    0.00 | 0.0675 |     - |     - |     442 B |
|    UnitParser.Parse(validString) |   825.5 ns |   144.28 ns |   7.91 ns |  4.57 ns |   816.9 ns |   832.5 ns |   827.2 ns |  1.31 |               ? |    0.01 | 0.0757 |     - |     - |     507 B |
| UnitParser.TryParse(validString) |   837.6 ns |   448.44 ns |  24.58 ns | 14.19 ns |   819.7 ns |   865.6 ns |   827.4 ns |  1.32 |               ? |    0.05 | 0.0719 |     - |     - |     483 B |
|        TryParseUnit(invalidUnit) | 1,179.6 ns | 2,219.10 ns | 121.64 ns | 70.23 ns | 1,058.7 ns | 1,302.0 ns | 1,178.1 ns |  1.87 |               ? |    0.19 | 0.1471 |     - |     - |     964 B |
