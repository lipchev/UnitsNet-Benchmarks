``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-IIKVZA : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|            TryParse(validString) | 65.15 μs | 1.065 μs | 0.945 μs | 0.252 μs | 63.58 μs | 66.98 μs | 65.32 μs |  0.99 |            Same |    0.04 | 8.3185 | 0.3327 |     - |  52.53 KB |
|               Parse(validString) | 65.48 μs | 1.307 μs | 1.744 μs | 0.349 μs | 61.63 μs | 68.40 μs | 65.94 μs |  1.00 |            Base |    0.00 | 8.2816 | 0.2588 |     - |  52.55 KB |
|          TryParse(invalidNumber) | 74.03 μs | 1.474 μs | 2.018 μs | 0.396 μs | 70.94 μs | 78.83 μs | 73.93 μs |  1.13 |          Slower |    0.04 | 8.1522 | 0.2588 |     - |  52.09 KB |
| Quantity.TryParse(invalidNumber) | 75.91 μs | 1.371 μs | 1.346 μs | 0.337 μs | 73.89 μs | 77.95 μs | 75.80 μs |  1.15 |          Slower |    0.04 | 8.1522 | 0.2588 |     - |   52.1 KB |
|   Quantity.TryParse(validString) | 81.82 μs | 1.617 μs | 2.610 μs | 0.448 μs | 76.93 μs | 88.28 μs | 81.28 μs |  1.26 |          Slower |    0.06 | 8.5594 | 0.4845 |     - |  55.25 KB |
|      Quantity.Parse(validString) | 82.18 μs | 1.581 μs | 1.882 μs | 0.411 μs | 79.04 μs | 85.60 μs | 82.02 μs |  1.25 |          Slower |    0.03 | 8.5594 | 0.4845 |     - |  55.25 KB |
|            TryParse(invalidUnit) | 84.48 μs | 1.661 μs | 3.079 μs | 0.469 μs | 78.21 μs | 91.52 μs | 84.20 μs |  1.29 |          Slower |    0.07 | 8.0745 | 0.3106 |     - |  51.92 KB |
|   Quantity.TryParse(invalidUnit) | 84.73 μs | 1.667 μs | 2.337 μs | 0.450 μs | 80.71 μs | 90.80 μs | 84.39 μs |  1.30 |          Slower |    0.05 | 8.0745 | 0.3106 |     - |  51.92 KB |
