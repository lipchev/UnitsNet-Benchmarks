``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-VOIXCL : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  Categories=Micro,Construction,Quantity,String  

```
|                           Method |      Mean |     Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |----------:|----------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|            TryParse(validString) |  80.17 μs | 13.577 μs | 0.744 μs | 0.430 μs |  79.42 μs |  80.90 μs |  80.21 μs |  0.96 |               ? |    0.03 | 6.5217 | 0.1553 |     - |  43.33 KB |
|               Parse(validString) |  83.38 μs | 38.034 μs | 2.085 μs | 1.204 μs |  80.98 μs |  84.67 μs |  84.50 μs |  1.00 |            Base |    0.00 | 6.5217 | 0.1553 |     - |  43.36 KB |
| Quantity.TryParse(invalidNumber) |  88.37 μs | 35.961 μs | 1.971 μs | 1.138 μs |  86.30 μs |  90.22 μs |  88.61 μs |  1.06 |               ? |    0.01 | 6.3665 | 0.1553 |     - |  42.96 KB |
|          TryParse(invalidNumber) |  89.52 μs | 63.229 μs | 3.466 μs | 2.001 μs |  87.20 μs |  93.50 μs |  87.86 μs |  1.07 |               ? |    0.07 | 6.3665 | 0.1553 |     - |  42.96 KB |
|   Quantity.TryParse(invalidUnit) |  98.39 μs | 16.966 μs | 0.930 μs | 0.537 μs |  97.57 μs |  99.40 μs |  98.21 μs |  1.18 |               ? |    0.04 | 6.3665 | 0.1553 |     - |  42.79 KB |
|   Quantity.TryParse(validString) |  99.98 μs | 34.389 μs | 1.885 μs | 1.088 μs |  98.58 μs | 102.12 μs |  99.22 μs |  1.20 |               ? |    0.03 | 6.9444 | 0.3230 |     - |   46.2 KB |
|            TryParse(invalidUnit) | 101.03 μs | 86.414 μs | 4.737 μs | 2.735 μs |  97.91 μs | 106.48 μs |  98.70 μs |  1.21 |               ? |    0.09 | 6.2112 | 0.1941 |     - |  42.79 KB |
|      Quantity.Parse(validString) | 101.59 μs |  9.549 μs | 0.523 μs | 0.302 μs | 101.22 μs | 102.19 μs | 101.35 μs |  1.22 |               ? |    0.04 | 6.6753 | 0.2153 |     - |   46.2 KB |
