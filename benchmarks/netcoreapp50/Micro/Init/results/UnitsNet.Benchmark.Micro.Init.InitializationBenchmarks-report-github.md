``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-XZYHNE : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                     Method |       Mean |    Error |   StdDev |  StdErr |        Min |        Max |     Median |   Gen 0 |   Gen 1 | Gen 2 |  Allocated |
|--------------------------- |-----------:|---------:|---------:|--------:|-----------:|-----------:|-----------:|--------:|--------:|------:|-----------:|
| InitUnitAbbreviationsCache | 1,613.3 μs | 24.00 μs | 21.28 μs | 5.69 μs | 1,586.3 μs | 1,646.6 μs | 1,607.3 μs | 46.8750 | 23.4375 |     - | 1234.67 KB |
|          InitUnitConverter |   539.8 μs | 19.21 μs | 54.81 μs | 5.65 μs |   458.4 μs |   696.2 μs |   531.8 μs |       - |       - |     - |  718.66 KB |
