``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-XOCZQL : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |    Error |   StdDev |   StdErr |      Min |       Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|---------:|---------:|----------:|---------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|               Parse(validString) | 76.44 μs | 1.521 μs | 1.868 μs | 0.398 μs | 71.20 μs |  79.94 μs | 76.63 μs |  1.00 |            Base |    0.00 | 6.5217 | 0.1553 |     - |  43.36 KB |
|            TryParse(validString) | 76.50 μs | 1.499 μs | 1.402 μs | 0.362 μs | 74.07 μs |  79.13 μs | 76.28 μs |  1.01 |            Same |    0.03 | 6.5994 | 0.1294 |     - |  43.33 KB |
| Quantity.TryParse(invalidNumber) | 83.93 μs | 1.666 μs | 2.442 μs | 0.453 μs | 80.14 μs |  88.33 μs | 83.13 μs |  1.09 |          Slower |    0.03 | 6.3665 | 0.1553 |     - |  42.96 KB |
|          TryParse(invalidNumber) | 85.64 μs | 1.695 μs | 3.463 μs | 0.485 μs | 79.74 μs |  94.11 μs | 86.15 μs |  1.11 |          Slower |    0.05 | 6.3665 | 0.1553 |     - |  42.96 KB |
|            TryParse(invalidUnit) | 92.30 μs | 1.769 μs | 2.106 μs | 0.460 μs | 88.10 μs |  96.91 μs | 92.53 μs |  1.21 |          Slower |    0.05 | 6.3665 | 0.1553 |     - |  42.79 KB |
|      Quantity.Parse(validString) | 93.80 μs | 1.828 μs | 2.735 μs | 0.499 μs | 90.00 μs |  99.15 μs | 93.82 μs |  1.22 |          Slower |    0.05 | 6.9444 | 0.3230 |     - |   46.2 KB |
|   Quantity.TryParse(validString) | 93.90 μs | 1.839 μs | 3.269 μs | 0.517 μs | 88.06 μs | 100.40 μs | 93.41 μs |  1.22 |          Slower |    0.05 | 6.9444 | 0.3230 |     - |   46.2 KB |
|   Quantity.TryParse(invalidUnit) | 96.97 μs | 1.883 μs | 2.819 μs | 0.515 μs | 91.56 μs | 103.48 μs | 96.42 μs |  1.27 |          Slower |    0.05 | 6.3665 | 0.1553 |     - |  42.79 KB |
