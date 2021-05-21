``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-HXFCSR : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                     Method |       Mean |      Error |   StdDev |   StdErr |        Min |        Max |     Median |    Gen 0 |    Gen 1 | Gen 2 |  Allocated |
|--------------------------- |-----------:|-----------:|---------:|---------:|-----------:|-----------:|-----------:|---------:|---------:|------:|-----------:|
| InitUnitAbbreviationsCache | 2,391.6 μs |   141.8 μs |  7.77 μs |  4.49 μs | 2,386.1 μs | 2,400.5 μs | 2,388.2 μs | 253.9063 | 125.0000 |     - | 1638.61 KB |
|          InitUnitConverter |   578.8 μs | 1,038.0 μs | 56.89 μs | 32.85 μs |   533.4 μs |   642.6 μs |   560.3 μs |        - |        - |     - |  720.88 KB |
