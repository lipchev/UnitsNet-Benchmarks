``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-IAGTQH : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                     Method |       Mean |    Error |   StdDev |  StdErr |        Min |        Max |     Median |   Gen 0 |   Gen 1 | Gen 2 |  Allocated |
|--------------------------- |-----------:|---------:|---------:|--------:|-----------:|-----------:|-----------:|--------:|--------:|------:|-----------:|
| InitUnitAbbreviationsCache | 1,613.7 μs | 26.09 μs | 21.79 μs | 6.04 μs | 1,578.4 μs | 1,657.5 μs | 1,611.4 μs | 46.8750 | 23.4375 |     - | 1234.65 KB |
|          InitUnitConverter |   555.9 μs | 25.03 μs | 72.23 μs | 7.37 μs |   429.6 μs |   731.6 μs |   541.9 μs |       - |       - |     - |  718.66 KB |
