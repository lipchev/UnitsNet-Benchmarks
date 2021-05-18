``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-BCXGEP : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                     Method |       Mean |    Error |    StdDev |   StdErr |     Median |        Min |        Max |   Gen 0 |   Gen 1 | Gen 2 |  Allocated |
|--------------------------- |-----------:|---------:|----------:|---------:|-----------:|-----------:|-----------:|--------:|--------:|------:|-----------:|
| InitUnitAbbreviationsCache | 1,788.9 μs | 42.56 μs | 125.48 μs | 12.55 μs | 1,793.7 μs | 1,580.9 μs | 2,015.0 μs | 46.8750 | 23.4375 |     - | 1234.65 KB |
|          InitUnitConverter |   631.2 μs | 20.50 μs |  60.11 μs |  6.04 μs |   614.0 μs |   531.7 μs |   788.5 μs |       - |       - |     - |  718.66 KB |
