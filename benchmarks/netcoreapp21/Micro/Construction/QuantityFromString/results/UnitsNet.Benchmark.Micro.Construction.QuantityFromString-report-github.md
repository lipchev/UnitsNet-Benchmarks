``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-ETZXBH : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |     Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|----------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|               Parse(validString) | 74.51 μs |  8.206 μs | 0.450 μs | 0.260 μs | 74.00 μs | 74.86 μs | 74.66 μs |  1.00 |            Base |    0.00 | 6.5994 | 0.1294 |     - |  43.36 KB |
|            TryParse(validString) | 75.94 μs | 17.638 μs | 0.967 μs | 0.558 μs | 75.13 μs | 77.01 μs | 75.67 μs |  1.02 |               ? |    0.01 | 6.5994 | 0.1294 |     - |  43.33 KB |
| Quantity.TryParse(invalidNumber) | 80.87 μs | 38.416 μs | 2.106 μs | 1.216 μs | 78.45 μs | 82.28 μs | 81.88 μs |  1.09 |               ? |    0.02 | 6.3665 | 0.1553 |     - |  42.96 KB |
|          TryParse(invalidNumber) | 81.03 μs | 47.723 μs | 2.616 μs | 1.510 μs | 78.38 μs | 83.61 μs | 81.09 μs |  1.09 |               ? |    0.04 | 6.3665 | 0.1553 |     - |  42.96 KB |
|   Quantity.TryParse(validString) | 90.53 μs | 48.384 μs | 2.652 μs | 1.531 μs | 87.47 μs | 92.09 μs | 92.02 μs |  1.21 |               ? |    0.03 | 6.9444 | 0.3230 |     - |   46.2 KB |
|      Quantity.Parse(validString) | 91.26 μs | 42.789 μs | 2.345 μs | 1.354 μs | 89.21 μs | 93.82 μs | 90.75 μs |  1.23 |               ? |    0.04 | 6.9444 | 0.3230 |     - |   46.2 KB |
|            TryParse(invalidUnit) | 91.34 μs | 18.449 μs | 1.011 μs | 0.584 μs | 90.65 μs | 92.50 μs | 90.87 μs |  1.23 |               ? |    0.01 | 6.3665 | 0.1553 |     - |  42.79 KB |
|   Quantity.TryParse(invalidUnit) | 94.09 μs | 20.817 μs | 1.141 μs | 0.659 μs | 93.24 μs | 95.39 μs | 93.65 μs |  1.26 |               ? |    0.02 | 6.3665 | 0.1553 |     - |  42.79 KB |
