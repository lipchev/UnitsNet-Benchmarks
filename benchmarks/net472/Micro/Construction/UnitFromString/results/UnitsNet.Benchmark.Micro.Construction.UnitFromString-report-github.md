``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-IMYEMS : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  Categories=Micro,Construction,Unit,String  

```
|                           Method |       Mean |    Error |   StdDev |   StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |-----------:|---------:|---------:|---------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|           ParseUnit(validString) |   661.2 ns | 115.9 ns |  6.35 ns |  3.67 ns |   654.0 ns |   666.2 ns |   663.4 ns |  1.00 |            Base |    0.00 | 0.0766 |     - |     - |     497 B |
|        TryParseUnit(validString) |   669.8 ns | 302.2 ns | 16.57 ns |  9.56 ns |   655.8 ns |   688.1 ns |   665.5 ns |  1.01 |               ? |    0.02 | 0.0728 |     - |     - |     473 B |
|    UnitParser.Parse(validString) |   804.6 ns | 144.7 ns |  7.93 ns |  4.58 ns |   795.7 ns |   810.9 ns |   807.1 ns |  1.22 |               ? |    0.00 | 0.0858 |     - |     - |     545 B |
| UnitParser.TryParse(validString) |   867.2 ns | 593.5 ns | 32.53 ns | 18.78 ns |   829.7 ns |   887.7 ns |   884.3 ns |  1.31 |               ? |    0.06 | 0.0782 |     - |     - |     521 B |
|        TryParseUnit(invalidUnit) | 1,554.1 ns | 384.7 ns | 21.09 ns | 12.17 ns | 1,530.5 ns | 1,571.1 ns | 1,560.7 ns |  2.35 |               ? |    0.05 | 0.1486 |     - |     - |    1003 B |
