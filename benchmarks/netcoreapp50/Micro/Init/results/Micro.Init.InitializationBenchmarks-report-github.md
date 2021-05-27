``` ini

BenchmarkDotNet=v0.13.0, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET SDK=5.0.203
  [Host]     : .NET 5.0.6 (5.0.621.22011), X64 RyuJIT
  Job-OYANID : .NET 5.0.6 (5.0.621.22011), X64 RyuJIT

Runtime=.NET 5.0  Toolchain=netcoreapp50  

```
|                     Method |       Mean |    Error |   StdDev |  StdErr |        Min |        Max |     Median |   Gen 0 |   Gen 1 | Gen 2 | Allocated |
|--------------------------- |-----------:|---------:|---------:|--------:|-----------:|-----------:|-----------:|--------:|--------:|------:|----------:|
| InitUnitAbbreviationsCache | 1,933.2 μs | 37.46 μs | 35.04 μs | 9.05 μs | 1,876.7 μs | 1,985.7 μs | 1,934.0 μs | 66.4063 | 33.2031 |     - |  1,235 KB |
|          InitUnitConverter |   575.1 μs | 10.25 μs | 17.13 μs | 2.85 μs |   536.9 μs |   603.9 μs |   573.5 μs |       - |       - |     - |    719 KB |
