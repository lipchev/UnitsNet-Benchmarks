``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-IQBRKN : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                     Method |       Mean |      Error |    StdDev |   StdErr |        Min |        Max |     Median |    Gen 0 |   Gen 1 | Gen 2 | Allocated |
|--------------------------- |-----------:|-----------:|----------:|---------:|-----------:|-----------:|-----------:|---------:|--------:|------:|----------:|
| InitUnitAbbreviationsCache | 2,999.4 μs | 1,718.6 μs |  94.20 μs | 54.39 μs | 2,902.6 μs | 3,090.8 μs | 3,004.8 μs | 246.0938 | 58.5938 |     - | 1592.1 KB |
|          InitUnitConverter |   690.6 μs | 2,049.2 μs | 112.33 μs | 64.85 μs |   566.8 μs |   786.0 μs |   719.0 μs |        - |       - |     - | 718.66 KB |
