``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8272CL CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-IXQPCZ : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                     Method |       Mean |    Error |   StdDev |   StdErr |        Min |        Max |     Median |   Gen 0 |   Gen 1 | Gen 2 |  Allocated |
|--------------------------- |-----------:|---------:|---------:|---------:|-----------:|-----------:|-----------:|--------:|--------:|------:|-----------:|
| InitUnitAbbreviationsCache | 1,591.0 μs | 232.9 μs | 12.77 μs |  7.37 μs | 1,582.8 μs | 1,605.7 μs | 1,584.5 μs | 66.4063 | 33.2031 |     - | 1234.65 KB |
|          InitUnitConverter |   586.7 μs | 359.7 μs | 19.72 μs | 11.38 μs |   569.5 μs |   608.2 μs |   582.3 μs |       - |       - |     - |  718.66 KB |
