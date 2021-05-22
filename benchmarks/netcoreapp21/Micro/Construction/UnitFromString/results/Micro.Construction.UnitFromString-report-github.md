``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-OUFWLV : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  Categories=Micro,Construction,Unit,String  

```
|                           Method |       Mean |    Error |   StdDev |  StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |-----------:|---------:|---------:|--------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|        TryParseUnit(validString) |   539.6 ns |  7.07 ns |  6.26 ns | 1.67 ns |   529.8 ns |   551.6 ns |   538.8 ns |  0.99 |            Same |    0.02 | 0.0652 |     - |     - |     418 B |
|           ParseUnit(validString) |   546.2 ns |  8.66 ns |  7.23 ns | 2.01 ns |   529.8 ns |   557.6 ns |   546.9 ns |  1.00 |            Base |    0.00 | 0.0690 |     - |     - |     442 B |
| UnitParser.TryParse(validString) |   721.5 ns | 14.39 ns | 14.77 ns | 3.58 ns |   691.1 ns |   746.3 ns |   718.9 ns |  1.32 |          Slower |    0.03 | 0.0744 |     - |     - |     483 B |
|    UnitParser.Parse(validString) |   749.5 ns | 14.59 ns | 14.33 ns | 3.58 ns |   729.0 ns |   777.7 ns |   750.5 ns |  1.37 |          Slower |    0.04 | 0.0782 |     - |     - |     507 B |
|        TryParseUnit(invalidUnit) | 1,159.5 ns | 17.39 ns | 16.26 ns | 4.20 ns | 1,136.2 ns | 1,187.2 ns | 1,157.8 ns |  2.12 |          Slower |    0.04 | 0.1501 |     - |     - |     964 B |
