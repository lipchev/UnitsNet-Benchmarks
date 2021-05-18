``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-KTTQFY : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                     Method |       Mean |    Error |   StdDev |   StdErr |        Min |        Max |     Median |    Gen 0 |    Gen 1 | Gen 2 |  Allocated |
|--------------------------- |-----------:|---------:|---------:|---------:|-----------:|-----------:|-----------:|---------:|---------:|------:|-----------:|
| InitUnitAbbreviationsCache | 3,040.5 μs | 59.10 μs | 74.75 μs | 15.59 μs | 2,898.6 μs | 3,191.1 μs | 3,051.7 μs | 257.8125 | 128.9063 |     - | 1638.62 KB |
|          InitUnitConverter |   644.3 μs | 15.49 μs | 44.45 μs |  4.56 μs |   567.9 μs |   763.1 μs |   641.4 μs |        - |        - |     - |  720.88 KB |
