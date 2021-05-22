``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-JVQZJE : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                     Method |       Mean |    Error |   StdDev |   StdErr |        Min |        Max |     Median |    Gen 0 |    Gen 1 | Gen 2 | Allocated |
|--------------------------- |-----------:|---------:|---------:|---------:|-----------:|-----------:|-----------:|---------:|---------:|------:|----------:|
| InitUnitAbbreviationsCache | 2,623.2 μs | 52.27 μs | 67.97 μs | 13.87 μs | 2,514.9 μs | 2,764.9 μs | 2,612.1 μs | 250.0000 | 125.0000 |     - | 1592.1 KB |
|          InitUnitConverter |   555.0 μs | 23.24 μs | 68.52 μs |  6.85 μs |   460.1 μs |   668.7 μs |   559.9 μs |        - |        - |     - | 718.66 KB |
