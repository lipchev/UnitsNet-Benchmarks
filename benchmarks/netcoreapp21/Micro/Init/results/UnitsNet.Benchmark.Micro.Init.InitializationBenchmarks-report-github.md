``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-NKPUTO : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                     Method |       Mean |      Error |   StdDev |   StdErr |        Min |        Max |     Median |    Gen 0 |   Gen 1 | Gen 2 | Allocated |
|--------------------------- |-----------:|-----------:|---------:|---------:|-----------:|-----------:|-----------:|---------:|--------:|------:|----------:|
| InitUnitAbbreviationsCache | 2,921.9 μs | 1,170.2 μs | 64.14 μs | 37.03 μs | 2,875.4 μs | 2,995.1 μs | 2,895.3 μs | 246.0938 | 58.5938 |     - | 1592.1 KB |
|          InitUnitConverter |   735.7 μs | 1,505.8 μs | 82.54 μs | 47.65 μs |   654.6 μs |   819.6 μs |   732.8 μs |        - |       - |     - | 718.66 KB |
