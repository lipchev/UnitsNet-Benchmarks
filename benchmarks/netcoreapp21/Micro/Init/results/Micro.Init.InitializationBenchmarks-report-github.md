``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-DJXYGA : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                     Method |       Mean |    Error |   StdDev |   StdErr |        Min |        Max |     Median |    Gen 0 |    Gen 1 | Gen 2 | Allocated |
|--------------------------- |-----------:|---------:|---------:|---------:|-----------:|-----------:|-----------:|---------:|---------:|------:|----------:|
| InitUnitAbbreviationsCache | 3,018.1 μs | 55.13 μs | 63.49 μs | 14.20 μs | 2,890.7 μs | 3,128.4 μs | 3,031.8 μs | 250.0000 | 125.0000 |     - | 1592.1 KB |
|          InitUnitConverter |   629.1 μs | 16.70 μs | 46.26 μs |  4.90 μs |   535.5 μs |   747.3 μs |   625.5 μs |        - |        - |     - | 718.66 KB |
