``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-SZUQHQ : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  Categories=Micro,Construction,Unit,String  

```
|                           Method |       Mean |     Error |   StdDev |   StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |-----------:|----------:|---------:|---------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|        TryParseUnit(validString) |   574.6 ns | 232.96 ns | 12.77 ns |  7.37 ns |   559.9 ns |   582.3 ns |   581.7 ns |  0.97 |               ? |    0.02 | 0.0212 |     - |     - |     409 B |
|           ParseUnit(validString) |   589.7 ns |  62.23 ns |  3.41 ns |  1.97 ns |   587.6 ns |   593.6 ns |   587.8 ns |  1.00 |            Base |    0.00 | 0.0227 |     - |     - |     433 B |
| UnitParser.TryParse(validString) |   734.5 ns | 639.13 ns | 35.03 ns | 20.23 ns |   705.5 ns |   773.4 ns |   724.4 ns |  1.25 |               ? |    0.06 | 0.0240 |     - |     - |     471 B |
|    UnitParser.Parse(validString) |   738.6 ns | 272.42 ns | 14.93 ns |  8.62 ns |   724.5 ns |   754.2 ns |   737.0 ns |  1.25 |               ? |    0.03 | 0.0252 |     - |     - |     495 B |
|        TryParseUnit(invalidUnit) | 1,031.9 ns |  69.30 ns |  3.80 ns |  2.19 ns | 1,028.5 ns | 1,036.0 ns | 1,031.2 ns |  1.75 |               ? |    0.02 | 0.0485 |     - |     - |     925 B |
