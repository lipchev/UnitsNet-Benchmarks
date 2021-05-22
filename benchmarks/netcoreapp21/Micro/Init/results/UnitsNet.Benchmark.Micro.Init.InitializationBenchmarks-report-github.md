``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-MXEFTF : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                     Method |       Mean |    Error |    StdDev |   StdErr |        Min |        Max |     Median |    Gen 0 |    Gen 1 | Gen 2 | Allocated |
|--------------------------- |-----------:|---------:|----------:|---------:|-----------:|-----------:|-----------:|---------:|---------:|------:|----------:|
| InitUnitAbbreviationsCache | 3,073.7 μs | 57.11 μs | 105.85 μs | 16.14 μs | 2,850.4 μs | 3,292.9 μs | 3,068.6 μs | 250.0000 | 125.0000 |     - | 1592.1 KB |
|          InitUnitConverter |   638.1 μs | 11.99 μs |  21.93 μs |  3.38 μs |   615.6 μs |   700.6 μs |   630.7 μs |        - |        - |     - | 718.66 KB |
