``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-IHUYJD : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                     Method |       Mean |      Error |   StdDev |   StdErr |        Min |        Max |     Median |   Gen 0 |   Gen 1 | Gen 2 |  Allocated |
|--------------------------- |-----------:|-----------:|---------:|---------:|-----------:|-----------:|-----------:|--------:|--------:|------:|-----------:|
| InitUnitAbbreviationsCache | 1,938.9 μs | 1,189.5 μs | 65.20 μs | 37.64 μs | 1,883.7 μs | 2,010.9 μs | 1,922.2 μs | 80.0781 | 39.0625 |     - | 1234.65 KB |
|          InitUnitConverter |   564.1 μs |   292.8 μs | 16.05 μs |  9.27 μs |   548.1 μs |   580.2 μs |   564.0 μs |       - |       - |     - |  718.66 KB |
