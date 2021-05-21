``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-EIKIVL : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |     Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|----------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|            TryParse(validString) | 73.91 μs | 143.39 μs | 7.860 μs | 4.538 μs | 67.26 μs | 82.59 μs | 71.89 μs |  0.90 |               ? |    0.15 | 6.5217 | 0.1553 |     - |  43.33 KB |
| Quantity.TryParse(invalidNumber) | 74.81 μs |  17.26 μs | 0.946 μs | 0.546 μs | 74.10 μs | 75.88 μs | 74.44 μs |  0.91 |               ? |    0.07 | 6.3665 | 0.1553 |     - |  42.96 KB |
|               Parse(validString) | 82.27 μs |  87.22 μs | 4.781 μs | 2.760 μs | 76.87 μs | 85.94 μs | 84.01 μs |  1.00 |            Base |    0.00 | 6.5217 | 0.1553 |     - |  43.36 KB |
|          TryParse(invalidNumber) | 84.10 μs |  51.70 μs | 2.834 μs | 1.636 μs | 81.75 μs | 87.24 μs | 83.30 μs |  1.02 |               ? |    0.07 | 6.3665 | 0.1553 |     - |  42.96 KB |
|   Quantity.TryParse(validString) | 91.40 μs |  34.86 μs | 1.911 μs | 1.103 μs | 89.97 μs | 93.57 μs | 90.67 μs |  1.11 |               ? |    0.09 | 6.9444 | 0.3230 |     - |   46.2 KB |
|      Quantity.Parse(validString) | 91.46 μs |  40.78 μs | 2.235 μs | 1.291 μs | 89.89 μs | 94.02 μs | 90.47 μs |  1.12 |               ? |    0.09 | 6.9444 | 0.3230 |     - |   46.2 KB |
|   Quantity.TryParse(invalidUnit) | 91.87 μs |  74.51 μs | 4.084 μs | 2.358 μs | 87.72 μs | 95.88 μs | 92.02 μs |  1.12 |               ? |    0.12 | 6.2112 | 0.1941 |     - |  42.79 KB |
|            TryParse(invalidUnit) | 94.07 μs |  68.60 μs | 3.760 μs | 2.171 μs | 89.89 μs | 97.19 μs | 95.12 μs |  1.14 |               ? |    0.02 | 6.2112 | 0.1941 |     - |  42.79 KB |
