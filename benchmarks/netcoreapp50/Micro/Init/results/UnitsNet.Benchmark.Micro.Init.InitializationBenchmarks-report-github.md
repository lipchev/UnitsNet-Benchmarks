``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-NDBOAP : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                     Method |       Mean |     Error |   StdDev |   StdErr |        Min |        Max |     Median |   Gen 0 |   Gen 1 | Gen 2 |  Allocated |
|--------------------------- |-----------:|----------:|---------:|---------:|-----------:|-----------:|-----------:|--------:|--------:|------:|-----------:|
| InitUnitAbbreviationsCache | 1,966.8 μs | 387.47 μs | 21.24 μs | 12.26 μs | 1,943.0 μs | 1,983.8 μs | 1,973.5 μs | 78.1250 | 39.0625 |     - | 1234.65 KB |
|          InitUnitConverter |   581.6 μs |  89.38 μs |  4.90 μs |  2.83 μs |   576.2 μs |   585.8 μs |   582.7 μs |       - |       - |     - |  718.66 KB |
