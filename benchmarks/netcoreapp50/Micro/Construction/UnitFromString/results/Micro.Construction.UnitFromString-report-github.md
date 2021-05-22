``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-AHLUYV : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  Categories=Micro,Construction,Unit,String  

```
|                           Method |     Mean |    Error |   StdDev |  StdErr |      Min |        Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|--------:|---------:|-----------:|---------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|        TryParseUnit(validString) | 533.0 ns | 10.62 ns | 15.24 ns | 2.88 ns | 504.9 ns |   562.9 ns | 532.9 ns |  1.00 |            Same |    0.05 | 0.0212 |     - |     - |     409 B |
|           ParseUnit(validString) | 535.2 ns | 10.58 ns | 17.96 ns | 2.95 ns | 498.5 ns |   572.7 ns | 529.8 ns |  1.00 |            Base |    0.00 | 0.0227 |     - |     - |     433 B |
| UnitParser.TryParse(validString) | 674.0 ns |  8.09 ns |  6.32 ns | 1.82 ns | 664.2 ns |   682.3 ns | 674.4 ns |  1.23 |          Slower |    0.04 | 0.0240 |     - |     - |     471 B |
|    UnitParser.Parse(validString) | 685.2 ns | 13.14 ns | 14.61 ns | 3.35 ns | 660.2 ns |   713.4 ns | 687.5 ns |  1.26 |          Slower |    0.05 | 0.0252 |     - |     - |     495 B |
|        TryParseUnit(invalidUnit) | 976.2 ns | 19.11 ns | 22.75 ns | 4.96 ns | 940.3 ns | 1,025.2 ns | 981.3 ns |  1.81 |          Slower |    0.07 | 0.0485 |     - |     - |     925 B |
