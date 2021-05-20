``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-TFYDEM : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                     Method |       Mean |      Error |   StdDev |   StdErr |        Min |        Max |     Median |    Gen 0 |    Gen 1 | Gen 2 |  Allocated |
|--------------------------- |-----------:|-----------:|---------:|---------:|-----------:|-----------:|-----------:|---------:|---------:|------:|-----------:|
| InitUnitAbbreviationsCache | 3,016.6 μs |   649.1 μs | 35.58 μs | 20.54 μs | 2,975.6 μs | 3,038.9 μs | 3,035.3 μs | 253.9063 | 125.0000 |     - | 1638.61 KB |
|          InitUnitConverter |   756.6 μs | 1,126.1 μs | 61.73 μs | 35.64 μs |   708.5 μs |   826.2 μs |   735.1 μs |        - |        - |     - |  720.88 KB |
