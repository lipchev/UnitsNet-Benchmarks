``` ini

BenchmarkDotNet=v0.13.0, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET SDK=5.0.203
  [Host]     : .NET 5.0.6 (5.0.621.22011), X64 RyuJIT
  Job-CVBOTT : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET Framework 4.7.2  Toolchain=net472  

```
|                     Method |       Mean |    Error |   StdDev |   StdErr |        Min |        Max |     Median |    Gen 0 |    Gen 1 | Gen 2 | Allocated |
|--------------------------- |-----------:|---------:|---------:|---------:|-----------:|-----------:|-----------:|---------:|---------:|------:|----------:|
| InitUnitAbbreviationsCache | 2,660.1 μs | 49.02 μs | 45.86 μs | 11.84 μs | 2,584.3 μs | 2,737.7 μs | 2,661.0 μs | 257.8125 | 128.9063 |     - |  1,639 KB |
|          InitUnitConverter |   580.8 μs |  8.34 μs |  6.51 μs |  1.88 μs |   570.8 μs |   595.1 μs |   581.0 μs |        - |        - |     - |    721 KB |
