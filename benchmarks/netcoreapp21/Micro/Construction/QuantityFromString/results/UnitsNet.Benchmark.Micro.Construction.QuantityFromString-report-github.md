``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-QVBOTZ : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|               Parse(validString) | 77.89 μs | 36.36 μs | 1.993 μs | 1.151 μs | 76.73 μs | 80.19 μs | 76.75 μs |  1.00 |            Base |    0.00 | 6.5217 | 0.1553 |     - |  43.36 KB |
|            TryParse(validString) | 78.41 μs | 12.58 μs | 0.689 μs | 0.398 μs | 77.85 μs | 79.18 μs | 78.21 μs |  1.01 |               ? |    0.03 | 6.5217 | 0.1553 |     - |  43.33 KB |
|          TryParse(invalidNumber) | 85.80 μs | 11.75 μs | 0.644 μs | 0.372 μs | 85.07 μs | 86.30 μs | 86.02 μs |  1.10 |               ? |    0.03 | 6.3665 | 0.1553 |     - |  42.96 KB |
| Quantity.TryParse(invalidNumber) | 89.08 μs | 13.23 μs | 0.725 μs | 0.419 μs | 88.25 μs | 89.59 μs | 89.41 μs |  1.14 |               ? |    0.02 | 6.3665 | 0.1553 |     - |  42.96 KB |
|   Quantity.TryParse(validString) | 93.38 μs | 31.70 μs | 1.738 μs | 1.003 μs | 91.64 μs | 95.12 μs | 93.39 μs |  1.20 |               ? |    0.02 | 6.9444 | 0.3230 |     - |   46.2 KB |
|      Quantity.Parse(validString) | 94.55 μs | 27.95 μs | 1.532 μs | 0.884 μs | 93.59 μs | 96.32 μs | 93.75 μs |  1.21 |               ? |    0.04 | 6.9444 | 0.3230 |     - |   46.2 KB |
|            TryParse(invalidUnit) | 94.97 μs | 10.73 μs | 0.588 μs | 0.340 μs | 94.32 μs | 95.46 μs | 95.14 μs |  1.22 |               ? |    0.04 | 6.3665 | 0.1553 |     - |  42.79 KB |
|   Quantity.TryParse(invalidUnit) | 97.12 μs | 20.15 μs | 1.105 μs | 0.638 μs | 96.08 μs | 98.28 μs | 96.98 μs |  1.25 |               ? |    0.02 | 6.2112 | 0.1941 |     - |  42.79 KB |
