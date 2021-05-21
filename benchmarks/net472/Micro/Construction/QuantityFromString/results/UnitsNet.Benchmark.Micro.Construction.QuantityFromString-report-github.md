``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-WDFAWO : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |     Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|----------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|            TryParse(validString) | 61.75 μs | 31.167 μs | 1.708 μs | 0.986 μs | 59.91 μs | 63.29 μs | 62.04 μs |  0.93 |               ? |    0.03 | 8.0967 | 0.3327 |     - |  52.53 KB |
|               Parse(validString) | 66.19 μs |  7.404 μs | 0.406 μs | 0.234 μs | 65.79 μs | 66.60 μs | 66.19 μs |  1.00 |            Base |    0.00 | 8.0228 | 0.2588 |     - |  52.55 KB |
|          TryParse(invalidNumber) | 72.12 μs | 73.184 μs | 4.011 μs | 2.316 μs | 67.49 μs | 74.55 μs | 74.33 μs |  1.09 |               ? |    0.07 | 8.0228 | 0.2588 |     - |   52.1 KB |
|            TryParse(invalidUnit) | 72.19 μs | 20.195 μs | 1.107 μs | 0.639 μs | 71.40 μs | 73.46 μs | 71.72 μs |  1.09 |               ? |    0.02 | 8.0228 | 0.2588 |     - |  51.92 KB |
| Quantity.TryParse(invalidNumber) | 76.09 μs | 32.547 μs | 1.784 μs | 1.030 μs | 74.16 μs | 77.68 μs | 76.42 μs |  1.15 |               ? |    0.03 | 8.0228 | 0.2588 |     - |   52.1 KB |
|      Quantity.Parse(validString) | 79.75 μs | 30.707 μs | 1.683 μs | 0.972 μs | 78.03 μs | 81.39 μs | 79.83 μs |  1.20 |               ? |    0.02 | 8.5271 | 0.3876 |     - |  55.25 KB |
|   Quantity.TryParse(invalidUnit) | 81.76 μs | 65.687 μs | 3.601 μs | 2.079 μs | 77.67 μs | 84.46 μs | 83.14 μs |  1.24 |               ? |    0.05 | 8.0228 | 0.2588 |     - |  51.92 KB |
|   Quantity.TryParse(validString) | 83.22 μs | 44.227 μs | 2.424 μs | 1.400 μs | 80.57 μs | 85.32 μs | 83.76 μs |  1.26 |               ? |    0.03 | 8.3979 | 0.4845 |     - |  55.25 KB |
