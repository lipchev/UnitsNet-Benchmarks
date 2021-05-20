``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-VCGTDC : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  Categories=Micro,Construction,Unit,String  

```
|                           Method |       Mean |     Error |   StdDev |   StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |-----------:|----------:|---------:|---------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|        TryParseUnit(validString) |   705.8 ns |  68.25 ns |  3.74 ns |  2.16 ns |   703.0 ns |   710.0 ns |   704.3 ns |  0.96 |               ? |    0.04 | 0.0728 |     - |     - |     473 B |
|           ParseUnit(validString) |   732.6 ns | 555.86 ns | 30.47 ns | 17.59 ns |   698.9 ns |   758.1 ns |   740.8 ns |  1.00 |            Base |    0.00 | 0.0766 |     - |     - |     497 B |
| UnitParser.TryParse(validString) |   881.4 ns | 295.68 ns | 16.21 ns |  9.36 ns |   863.0 ns |   893.5 ns |   887.7 ns |  1.21 |               ? |    0.07 | 0.0782 |     - |     - |     521 B |
|    UnitParser.Parse(validString) |   890.0 ns | 352.68 ns | 19.33 ns | 11.16 ns |   868.6 ns |   906.3 ns |   895.0 ns |  1.22 |               ? |    0.07 | 0.0858 |     - |     - |     545 B |
|        TryParseUnit(invalidUnit) | 1,696.3 ns | 857.04 ns | 46.98 ns | 27.12 ns | 1,660.8 ns | 1,749.6 ns | 1,678.6 ns |  2.32 |               ? |    0.16 | 0.1486 |     - |     - |    1003 B |
