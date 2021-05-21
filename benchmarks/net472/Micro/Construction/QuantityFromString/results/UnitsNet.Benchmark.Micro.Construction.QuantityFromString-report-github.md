``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-PDRJLF : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |     Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|----------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|               Parse(validString) | 58.76 μs | 70.882 μs | 3.885 μs | 2.243 μs | 56.27 μs | 63.23 μs | 56.76 μs |  1.00 |            Base |    0.00 | 8.0967 | 0.3327 |     - |  52.55 KB |
|            TryParse(validString) | 62.18 μs | 65.292 μs | 3.579 μs | 2.066 μs | 59.97 μs | 66.31 μs | 60.27 μs |  1.06 |               ? |    0.01 | 8.0967 | 0.3327 |     - |  52.53 KB |
|          TryParse(invalidNumber) | 62.52 μs | 29.843 μs | 1.636 μs | 0.944 μs | 60.97 μs | 64.23 μs | 62.37 μs |  1.07 |               ? |    0.07 | 8.0967 | 0.3327 |     - |   52.1 KB |
| Quantity.TryParse(invalidNumber) | 70.79 μs | 58.902 μs | 3.229 μs | 1.864 μs | 67.13 μs | 73.24 μs | 72.00 μs |  1.21 |               ? |    0.06 | 8.0228 | 0.2588 |     - |   52.1 KB |
|      Quantity.Parse(validString) | 71.59 μs |  8.972 μs | 0.492 μs | 0.284 μs | 71.02 μs | 71.89 μs | 71.86 μs |  1.22 |               ? |    0.08 | 8.5271 | 0.3876 |     - |  55.25 KB |
|   Quantity.TryParse(invalidUnit) | 72.69 μs | 22.620 μs | 1.240 μs | 0.716 μs | 71.33 μs | 73.75 μs | 72.99 μs |  1.24 |               ? |    0.10 | 7.9193 | 0.3106 |     - |  51.92 KB |
|            TryParse(invalidUnit) | 74.91 μs |  9.505 μs | 0.521 μs | 0.301 μs | 74.33 μs | 75.34 μs | 75.06 μs |  1.28 |               ? |    0.08 | 8.0228 | 0.2588 |     - |  51.92 KB |
|   Quantity.TryParse(validString) | 75.79 μs | 32.687 μs | 1.792 μs | 1.034 μs | 74.67 μs | 77.86 μs | 74.84 μs |  1.29 |               ? |    0.10 | 8.5271 | 0.3876 |     - |  55.25 KB |
