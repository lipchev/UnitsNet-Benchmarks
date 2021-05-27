``` ini

BenchmarkDotNet=v0.13.0, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-BATGEH : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  Categories=Micro,Construction,Unit,String  

```
|                           Method |       Mean |    Error |   StdDev |  StdErr |     Median |        Min |        Max | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |-----------:|---------:|---------:|--------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|        TryParseUnit(validString) |   509.4 ns | 13.97 ns | 39.17 ns | 4.11 ns |   497.4 ns |   461.3 ns |   627.6 ns |  0.95 |          Faster |    0.08 | 0.0637 |     - |     - |     418 B |
|           ParseUnit(validString) |   539.4 ns | 10.73 ns | 27.32 ns | 3.13 ns |   537.4 ns |   485.2 ns |   636.2 ns |  1.00 |            Base |    0.00 | 0.0675 |     - |     - |     442 B |
|    UnitParser.Parse(validString) |   655.7 ns | 12.42 ns | 11.01 ns | 2.94 ns |   657.3 ns |   633.9 ns |   671.0 ns |  1.22 |          Slower |    0.07 | 0.0757 |     - |     - |     507 B |
| UnitParser.TryParse(validString) |   685.1 ns | 12.75 ns | 34.48 ns | 3.74 ns |   674.9 ns |   636.7 ns |   779.9 ns |  1.28 |          Slower |    0.09 | 0.0719 |     - |     - |     483 B |
|        TryParseUnit(invalidUnit) | 1,155.6 ns | 17.62 ns | 13.76 ns | 3.97 ns | 1,157.8 ns | 1,121.1 ns | 1,178.2 ns |  2.14 |          Slower |    0.13 | 0.1471 |     - |     - |     964 B |
