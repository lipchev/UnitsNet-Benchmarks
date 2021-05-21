``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-WJDQCK : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                     Method |       Mean |    Error |   StdDev |   StdErr |        Min |        Max |     Median |   Gen 0 |   Gen 1 | Gen 2 |  Allocated |
|--------------------------- |-----------:|---------:|---------:|---------:|-----------:|-----------:|-----------:|--------:|--------:|------:|-----------:|
| InitUnitAbbreviationsCache | 1,958.0 μs | 655.8 μs | 35.95 μs | 20.75 μs | 1,930.4 μs | 1,998.7 μs | 1,945.0 μs | 66.4063 | 33.2031 |     - | 1234.65 KB |
|          InitUnitConverter |   596.1 μs | 224.4 μs | 12.30 μs |  7.10 μs |   588.9 μs |   610.3 μs |   589.1 μs |       - |       - |     - |  718.66 KB |
