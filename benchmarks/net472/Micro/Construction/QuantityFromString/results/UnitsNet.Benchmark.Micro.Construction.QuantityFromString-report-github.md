``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-EOQEML : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|               Parse(validString) | 65.81 μs | 46.81 μs | 2.566 μs | 1.481 μs | 62.85 μs | 67.36 μs | 67.23 μs |  1.00 |            Base |    0.00 | 8.0967 | 0.3327 |     - |  52.55 KB |
|            TryParse(validString) | 66.89 μs | 35.80 μs | 1.962 μs | 1.133 μs | 65.27 μs | 69.08 μs | 66.33 μs |  1.02 |               ? |    0.03 | 8.0967 | 0.3327 |     - |  52.53 KB |
|          TryParse(invalidNumber) | 67.40 μs | 41.21 μs | 2.259 μs | 1.304 μs | 65.89 μs | 70.00 μs | 66.31 μs |  1.02 |               ? |    0.04 | 8.0228 | 0.2588 |     - |   52.1 KB |
| Quantity.TryParse(invalidNumber) | 69.41 μs | 28.71 μs | 1.574 μs | 0.909 μs | 67.65 μs | 70.68 μs | 69.91 μs |  1.06 |               ? |    0.02 | 8.0228 | 0.2588 |     - |   52.1 KB |
|            TryParse(invalidUnit) | 75.07 μs | 32.02 μs | 1.755 μs | 1.013 μs | 73.62 μs | 77.02 μs | 74.57 μs |  1.14 |               ? |    0.05 | 7.9193 | 0.3106 |     - |  51.92 KB |
|      Quantity.Parse(validString) | 77.20 μs | 43.44 μs | 2.381 μs | 1.375 μs | 75.44 μs | 79.91 μs | 76.26 μs |  1.18 |               ? |    0.08 | 8.3979 | 0.4845 |     - |  55.25 KB |
|   Quantity.TryParse(validString) | 79.49 μs | 53.00 μs | 2.905 μs | 1.677 μs | 76.98 μs | 82.67 μs | 78.82 μs |  1.21 |               ? |    0.03 | 8.5271 | 0.3876 |     - |  55.25 KB |
|   Quantity.TryParse(invalidUnit) | 79.90 μs | 62.30 μs | 3.415 μs | 1.972 μs | 77.35 μs | 83.78 μs | 78.56 μs |  1.21 |               ? |    0.04 | 7.9193 | 0.3106 |     - |  51.92 KB |
