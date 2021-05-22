``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-WDLKKY : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|            TryParse(validString) | 70.88 μs | 1.311 μs | 1.162 μs | 0.311 μs | 69.64 μs | 73.39 μs | 70.51 μs |  1.00 |            Same |    0.04 | 8.0228 | 0.2588 |     - |  52.53 KB |
|               Parse(validString) | 71.02 μs | 1.419 μs | 1.743 μs | 0.372 μs | 67.92 μs | 75.13 μs | 70.57 μs |  1.00 |            Base |    0.00 | 8.0228 | 0.2588 |     - |  52.55 KB |
|          TryParse(invalidNumber) | 79.14 μs | 1.311 μs | 1.227 μs | 0.317 μs | 76.54 μs | 80.99 μs | 79.23 μs |  1.11 |          Slower |    0.04 | 8.0228 | 0.2588 |     - |   52.1 KB |
| Quantity.TryParse(invalidNumber) | 80.74 μs | 1.455 μs | 1.361 μs | 0.352 μs | 78.96 μs | 83.26 μs | 80.67 μs |  1.14 |          Slower |    0.03 | 7.9193 | 0.3106 |     - |   52.1 KB |
|            TryParse(invalidUnit) | 87.87 μs | 1.331 μs | 1.180 μs | 0.315 μs | 85.18 μs | 89.31 μs | 88.00 μs |  1.24 |          Slower |    0.04 | 7.9193 | 0.3106 |     - |  51.92 KB |
|   Quantity.TryParse(invalidUnit) | 90.54 μs | 1.054 μs | 0.986 μs | 0.255 μs | 89.01 μs | 92.45 μs | 90.25 μs |  1.27 |          Slower |    0.04 | 7.9193 | 0.3106 |     - |  51.92 KB |
|      Quantity.Parse(validString) | 91.39 μs | 1.824 μs | 1.873 μs | 0.454 μs | 89.01 μs | 94.72 μs | 91.07 μs |  1.28 |          Slower |    0.04 | 8.3979 | 0.4845 |     - |  55.25 KB |
|   Quantity.TryParse(validString) | 92.91 μs | 1.813 μs | 1.780 μs | 0.445 μs | 90.09 μs | 95.10 μs | 93.07 μs |  1.31 |          Slower |    0.05 | 8.3979 | 0.4845 |     - |  55.25 KB |
