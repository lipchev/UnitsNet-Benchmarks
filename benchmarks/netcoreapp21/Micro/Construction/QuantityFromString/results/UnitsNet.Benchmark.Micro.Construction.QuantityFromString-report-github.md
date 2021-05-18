``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-TGYJYA : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|            TryParse(validString) | 74.33 μs | 1.284 μs | 1.138 μs | 0.304 μs | 72.12 μs | 76.04 μs | 74.55 μs |  0.99 |            Same |    0.04 | 6.5994 | 0.1294 |     - |  43.33 KB |
|               Parse(validString) | 75.04 μs | 1.493 μs | 1.834 μs | 0.391 μs | 72.45 μs | 78.23 μs | 74.58 μs |  1.00 |            Base |    0.00 | 6.5994 | 0.1294 |     - |  43.36 KB |
|          TryParse(invalidNumber) | 79.32 μs | 1.516 μs | 1.805 μs | 0.394 μs | 76.25 μs | 82.27 μs | 79.21 μs |  1.06 |            Same |    0.03 | 6.3665 | 0.1553 |     - |  42.96 KB |
| Quantity.TryParse(invalidNumber) | 80.31 μs | 1.317 μs | 1.232 μs | 0.318 μs | 78.26 μs | 83.03 μs | 80.23 μs |  1.07 |          Slower |    0.03 | 6.3665 | 0.1553 |     - |  42.96 KB |
|            TryParse(invalidUnit) | 88.07 μs | 1.367 μs | 1.211 μs | 0.324 μs | 85.99 μs | 89.90 μs | 88.24 μs |  1.18 |          Slower |    0.03 | 6.3665 | 0.1553 |     - |  42.79 KB |
|      Quantity.Parse(validString) | 90.24 μs | 1.665 μs | 2.960 μs | 0.468 μs | 85.71 μs | 98.31 μs | 89.88 μs |  1.22 |          Slower |    0.05 | 6.9444 | 0.3230 |     - |   46.2 KB |
|   Quantity.TryParse(validString) | 91.21 μs | 1.795 μs | 1.920 μs | 0.453 μs | 87.35 μs | 94.66 μs | 91.34 μs |  1.22 |          Slower |    0.04 | 6.9444 | 0.3230 |     - |   46.2 KB |
|   Quantity.TryParse(invalidUnit) | 91.59 μs | 1.802 μs | 3.296 μs | 0.509 μs | 87.49 μs | 99.03 μs | 90.79 μs |  1.24 |          Slower |    0.05 | 6.2112 | 0.1941 |     - |  42.79 KB |
