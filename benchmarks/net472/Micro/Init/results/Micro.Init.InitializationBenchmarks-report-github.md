``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-ZOWRQH : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                     Method |       Mean |    Error |   StdDev |   StdErr |        Min |        Max |     Median |    Gen 0 |    Gen 1 | Gen 2 | Allocated |
|--------------------------- |-----------:|---------:|---------:|---------:|-----------:|-----------:|-----------:|---------:|---------:|------:|----------:|
| InitUnitAbbreviationsCache | 3,250.0 μs | 64.85 μs | 63.69 μs | 15.92 μs | 3,164.8 μs | 3,377.6 μs | 3,237.2 μs | 257.8125 | 128.9063 |     - | 1638.6 KB |
|          InitUnitConverter |   663.6 μs | 12.78 μs | 15.69 μs |  3.35 μs |   614.7 μs |   687.4 μs |   665.1 μs |        - |        - |     - | 720.88 KB |
