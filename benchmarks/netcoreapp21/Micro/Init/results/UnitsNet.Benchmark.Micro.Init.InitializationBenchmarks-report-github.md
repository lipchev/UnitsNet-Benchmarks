``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-BXZGXN : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                     Method |       Mean |    Error |   StdDev |  StdErr |        Min |        Max |     Median |    Gen 0 |   Gen 1 | Gen 2 | Allocated |
|--------------------------- |-----------:|---------:|---------:|--------:|-----------:|-----------:|-----------:|---------:|--------:|------:|----------:|
| InitUnitAbbreviationsCache | 2,644.6 μs | 35.27 μs | 31.27 μs | 8.36 μs | 2,567.5 μs | 2,686.2 μs | 2,645.2 μs | 246.0938 | 58.5938 |     - | 1592.1 KB |
|          InitUnitConverter |   572.4 μs | 22.21 μs | 64.09 μs | 6.54 μs |   473.9 μs |   730.4 μs |   559.4 μs |        - |       - |     - | 718.66 KB |
