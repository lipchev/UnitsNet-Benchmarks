``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-QHBJZE : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                     Method |       Mean |    Error |   StdDev |   StdErr |        Min |        Max |     Median |    Gen 0 |    Gen 1 | Gen 2 |  Allocated |
|--------------------------- |-----------:|---------:|---------:|---------:|-----------:|-----------:|-----------:|---------:|---------:|------:|-----------:|
| InitUnitAbbreviationsCache | 3,059.0 μs | 59.86 μs | 61.47 μs | 14.91 μs | 2,955.6 μs | 3,155.4 μs | 3,070.4 μs | 253.9063 | 125.0000 |     - | 1638.61 KB |
|          InitUnitConverter |   685.7 μs | 19.98 μs | 57.34 μs |  5.88 μs |   564.0 μs |   827.9 μs |   681.8 μs |        - |        - |     - |  720.88 KB |
