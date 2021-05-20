``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-UVEXDV : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  Categories=Micro,Construction,Unit,String  

```
|                           Method |       Mean |    Error |   StdDev |  StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |-----------:|---------:|---------:|--------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|        TryParseUnit(validString) |   766.0 ns | 15.25 ns | 31.15 ns | 4.36 ns |   715.6 ns |   831.4 ns |   761.2 ns |  0.96 |            Same |    0.05 | 0.0698 |     - |     - |     473 B |
|           ParseUnit(validString) |   809.2 ns | 16.06 ns | 14.24 ns | 3.81 ns |   785.4 ns |   831.2 ns |   806.0 ns |  1.00 |            Base |    0.00 | 0.0728 |     - |     - |     497 B |
|    UnitParser.Parse(validString) |   861.8 ns | 16.37 ns | 16.81 ns | 4.08 ns |   838.0 ns |   897.4 ns |   863.2 ns |  1.07 |            Same |    0.04 | 0.0858 |     - |     - |     545 B |
| UnitParser.TryParse(validString) |   889.2 ns | 10.77 ns |  8.99 ns | 2.49 ns |   876.9 ns |   906.0 ns |   888.2 ns |  1.10 |          Slower |    0.02 | 0.0782 |     - |     - |     521 B |
|        TryParseUnit(invalidUnit) | 1,642.7 ns | 27.09 ns | 24.01 ns | 6.42 ns | 1,608.9 ns | 1,693.6 ns | 1,643.5 ns |  2.03 |          Slower |    0.04 | 0.1486 |     - |     - |    1003 B |
