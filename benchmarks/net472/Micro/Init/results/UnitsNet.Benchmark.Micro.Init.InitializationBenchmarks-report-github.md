``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-SSMQCJ : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                     Method |       Mean |      Error |   StdDev |   StdErr |        Min |        Max |     Median |    Gen 0 |    Gen 1 | Gen 2 |  Allocated |
|--------------------------- |-----------:|-----------:|---------:|---------:|-----------:|-----------:|-----------:|---------:|---------:|------:|-----------:|
| InitUnitAbbreviationsCache | 2,708.0 μs | 1,811.3 μs | 99.28 μs | 57.32 μs | 2,612.0 μs | 2,810.3 μs | 2,701.7 μs | 253.9063 | 125.0000 |     - | 1638.61 KB |
|          InitUnitConverter |   683.0 μs |   571.5 μs | 31.32 μs | 18.08 μs |   663.5 μs |   719.1 μs |   666.3 μs |        - |        - |     - |  720.88 KB |
