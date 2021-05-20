``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-KZOEBC : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|            TryParse(validString) | 73.07 μs | 44.65 μs | 2.448 μs | 1.413 μs | 70.53 μs | 75.41 μs | 73.26 μs |  0.96 |               ? |    0.02 | 8.0228 | 0.2588 |     - |  52.53 KB |
|               Parse(validString) | 75.74 μs | 19.04 μs | 1.044 μs | 0.603 μs | 75.04 μs | 76.94 μs | 75.24 μs |  1.00 |            Base |    0.00 | 8.0228 | 0.2588 |     - |  52.55 KB |
| Quantity.TryParse(invalidNumber) | 81.47 μs | 46.37 μs | 2.542 μs | 1.467 μs | 79.06 μs | 84.13 μs | 81.21 μs |  1.08 |               ? |    0.04 | 7.9193 | 0.3106 |     - |   52.1 KB |
|          TryParse(invalidNumber) | 84.81 μs | 68.99 μs | 3.782 μs | 2.183 μs | 80.63 μs | 87.99 μs | 85.81 μs |  1.12 |               ? |    0.04 | 7.9193 | 0.3106 |     - |   52.1 KB |
|            TryParse(invalidUnit) | 88.43 μs | 33.68 μs | 1.846 μs | 1.066 μs | 86.94 μs | 90.50 μs | 87.86 μs |  1.17 |               ? |    0.04 | 7.9193 | 0.3106 |     - |  51.92 KB |
|   Quantity.TryParse(validString) | 94.42 μs | 19.29 μs | 1.057 μs | 0.610 μs | 93.67 μs | 95.63 μs | 93.97 μs |  1.25 |               ? |    0.00 | 8.3979 | 0.4845 |     - |  55.25 KB |
|   Quantity.TryParse(invalidUnit) | 95.00 μs | 55.71 μs | 3.054 μs | 1.763 μs | 92.30 μs | 98.32 μs | 94.38 μs |  1.25 |               ? |    0.05 | 7.9193 | 0.3106 |     - |  51.92 KB |
|      Quantity.Parse(validString) | 95.68 μs | 33.89 μs | 1.858 μs | 1.073 μs | 93.58 μs | 97.10 μs | 96.36 μs |  1.26 |               ? |    0.04 | 8.3979 | 0.4845 |     - |  55.25 KB |
