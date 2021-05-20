``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-EMBAGI : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                     Method |       Mean |    Error |   StdDev |   StdErr |        Min |        Max |     Median |    Gen 0 |    Gen 1 | Gen 2 |  Allocated |
|--------------------------- |-----------:|---------:|---------:|---------:|-----------:|-----------:|-----------:|---------:|---------:|------:|-----------:|
| InitUnitAbbreviationsCache | 2,778.7 μs | 45.20 μs | 42.28 μs | 10.92 μs | 2,715.2 μs | 2,854.9 μs | 2,767.2 μs | 253.9063 | 125.0000 |     - | 1638.61 KB |
|          InitUnitConverter |   662.5 μs | 21.94 μs | 63.65 μs |  6.46 μs |   567.6 μs |   850.1 μs |   653.1 μs |        - |        - |     - |  720.88 KB |
