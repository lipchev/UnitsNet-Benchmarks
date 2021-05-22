``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-NXOTUW : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                     Method |       Mean |    Error |   StdDev |   StdErr |        Min |        Max |     Median |    Gen 0 |    Gen 1 | Gen 2 |  Allocated |
|--------------------------- |-----------:|---------:|---------:|---------:|-----------:|-----------:|-----------:|---------:|---------:|------:|-----------:|
| InitUnitAbbreviationsCache | 2,815.7 μs | 42.67 μs | 39.92 μs | 10.31 μs | 2,760.2 μs | 2,902.3 μs | 2,798.7 μs | 257.8125 | 128.9063 |     - | 1638.62 KB |
|          InitUnitConverter |   643.0 μs | 15.16 μs | 43.25 μs |  4.46 μs |   576.7 μs |   765.6 μs |   638.6 μs |        - |        - |     - |  720.88 KB |
