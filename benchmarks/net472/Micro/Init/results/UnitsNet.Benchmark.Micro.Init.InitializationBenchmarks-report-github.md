``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-ERIQHA : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                     Method |       Mean |    Error |   StdDev |   StdErr |        Min |        Max |     Median |    Gen 0 |    Gen 1 | Gen 2 | Allocated |
|--------------------------- |-----------:|---------:|---------:|---------:|-----------:|-----------:|-----------:|---------:|---------:|------:|----------:|
| InitUnitAbbreviationsCache | 3,162.4 μs | 61.26 μs | 70.55 μs | 15.78 μs | 2,999.7 μs | 3,288.3 μs | 3,168.3 μs | 257.8125 | 128.9063 |     - | 1638.6 KB |
|          InitUnitConverter |   700.0 μs | 13.85 μs | 13.60 μs |  3.40 μs |   679.8 μs |   731.0 μs |   696.8 μs |        - |        - |     - | 720.88 KB |
