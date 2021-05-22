``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-FIETTW : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                     Method |       Mean |    Error |   StdDev |  StdErr |        Min |        Max |     Median |   Gen 0 |   Gen 1 | Gen 2 |  Allocated |
|--------------------------- |-----------:|---------:|---------:|--------:|-----------:|-----------:|-----------:|--------:|--------:|------:|-----------:|
| InitUnitAbbreviationsCache | 1,844.4 μs | 36.28 μs | 41.78 μs | 9.34 μs | 1,779.9 μs | 1,914.3 μs | 1,839.7 μs | 66.4063 | 33.2031 |     - | 1234.65 KB |
|          InitUnitConverter |   561.9 μs | 16.47 μs | 47.77 μs | 4.85 μs |   414.5 μs |   669.2 μs |   565.4 μs |       - |       - |     - |  718.66 KB |
