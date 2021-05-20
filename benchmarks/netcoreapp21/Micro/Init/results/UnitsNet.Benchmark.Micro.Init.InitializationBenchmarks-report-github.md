``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-JEKFIA : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                     Method |       Mean |    Error |   StdDev |   StdErr |     Median |        Min |        Max |    Gen 0 |   Gen 1 | Gen 2 | Allocated |
|--------------------------- |-----------:|---------:|---------:|---------:|-----------:|-----------:|-----------:|---------:|--------:|------:|----------:|
| InitUnitAbbreviationsCache | 2,750.0 μs | 51.64 μs | 55.26 μs | 13.02 μs | 2,737.5 μs | 2,663.3 μs | 2,872.3 μs | 246.0938 | 58.5938 |     - | 1592.1 KB |
|          InitUnitConverter |   600.1 μs | 25.23 μs | 73.19 μs |  7.43 μs |   571.0 μs |   496.5 μs |   794.6 μs |        - |       - |     - | 718.66 KB |
