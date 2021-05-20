``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-TRKHHX : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                     Method |       Mean |      Error |    StdDev |   StdErr |        Min |        Max |     Median |    Gen 0 |    Gen 1 | Gen 2 |  Allocated |
|--------------------------- |-----------:|-----------:|----------:|---------:|-----------:|-----------:|-----------:|---------:|---------:|------:|-----------:|
| InitUnitAbbreviationsCache | 2,631.4 μs | 1,143.5 μs |  62.68 μs | 36.19 μs | 2,584.6 μs | 2,702.6 μs | 2,607.0 μs | 253.9063 | 125.0000 |     - | 1638.61 KB |
|          InitUnitConverter |   661.1 μs | 2,047.2 μs | 112.22 μs | 64.79 μs |   565.8 μs |   784.8 μs |   632.8 μs |        - |        - |     - |  720.88 KB |
