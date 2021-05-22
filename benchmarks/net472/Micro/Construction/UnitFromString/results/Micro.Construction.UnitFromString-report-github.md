``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-RLTDBD : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  Categories=Micro,Construction,Unit,String  

```
|                           Method |       Mean |    Error |   StdDev |  StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |-----------:|---------:|---------:|--------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|        TryParseUnit(validString) |   818.4 ns | 14.29 ns | 14.68 ns | 3.56 ns |   790.3 ns |   845.3 ns |   818.7 ns |  0.98 |            Same |    0.03 | 0.0698 |     - |     - |     473 B |
|           ParseUnit(validString) |   833.1 ns | 12.36 ns | 10.96 ns | 2.93 ns |   815.2 ns |   849.5 ns |   837.3 ns |  1.00 |            Base |    0.00 | 0.0728 |     - |     - |     497 B |
| UnitParser.TryParse(validString) | 1,022.7 ns | 20.34 ns | 20.89 ns | 5.07 ns |   979.7 ns | 1,053.5 ns | 1,021.8 ns |  1.23 |          Slower |    0.03 | 0.0782 |     - |     - |     521 B |
|    UnitParser.Parse(validString) | 1,050.2 ns | 18.82 ns | 23.80 ns | 4.96 ns | 1,019.2 ns | 1,098.6 ns | 1,047.7 ns |  1.27 |          Slower |    0.04 | 0.0858 |     - |     - |     545 B |
|        TryParseUnit(invalidUnit) | 1,936.4 ns | 37.72 ns | 37.04 ns | 9.26 ns | 1,885.4 ns | 2,012.8 ns | 1,929.1 ns |  2.32 |          Slower |    0.04 | 0.1486 |     - |     - |    1003 B |
