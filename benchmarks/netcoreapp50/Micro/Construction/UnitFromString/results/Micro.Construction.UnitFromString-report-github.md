``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-HJVOCT : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  Categories=Micro,Construction,Unit,String  

```
|                           Method |     Mean |    Error |   StdDev |  StdErr |      Min |        Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|--------:|---------:|-----------:|---------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|        TryParseUnit(validString) | 519.7 ns |  9.76 ns |  9.13 ns | 2.36 ns | 500.6 ns |   537.5 ns | 519.0 ns |  1.00 |            Same |    0.03 | 0.0212 |     - |     - |     409 B |
|           ParseUnit(validString) | 523.9 ns | 10.11 ns | 11.24 ns | 2.58 ns | 500.0 ns |   542.9 ns | 523.2 ns |  1.00 |            Base |    0.00 | 0.0227 |     - |     - |     433 B |
| UnitParser.TryParse(validString) | 685.7 ns | 13.15 ns | 15.66 ns | 3.42 ns | 641.1 ns |   713.0 ns | 685.8 ns |  1.31 |          Slower |    0.04 | 0.0240 |     - |     - |     471 B |
|    UnitParser.Parse(validString) | 740.9 ns | 14.77 ns | 22.55 ns | 4.05 ns | 698.4 ns |   780.5 ns | 742.2 ns |  1.42 |          Slower |    0.04 | 0.0252 |     - |     - |     495 B |
|        TryParseUnit(invalidUnit) | 960.6 ns | 18.92 ns | 26.53 ns | 5.11 ns | 914.6 ns | 1,015.9 ns | 961.1 ns |  1.84 |          Slower |    0.07 | 0.0485 |     - |     - |     925 B |
