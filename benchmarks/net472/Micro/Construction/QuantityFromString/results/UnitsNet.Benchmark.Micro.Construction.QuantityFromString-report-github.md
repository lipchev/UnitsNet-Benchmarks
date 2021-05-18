``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-YCJJPA : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|            TryParse(validString) | 65.87 μs | 1.243 μs | 1.101 μs | 0.294 μs | 63.99 μs | 67.72 μs | 65.90 μs |  0.98 |            Same |    0.02 | 8.2816 | 0.2588 |     - |  52.53 KB |
|               Parse(validString) | 67.63 μs | 1.280 μs | 1.197 μs | 0.309 μs | 65.95 μs | 69.96 μs | 67.65 μs |  1.00 |            Base |    0.00 | 8.3185 | 0.3327 |     - |  52.55 KB |
|          TryParse(invalidNumber) | 72.38 μs | 1.282 μs | 1.839 μs | 0.348 μs | 68.39 μs | 75.57 μs | 72.57 μs |  1.07 |          Slower |    0.04 | 8.2816 | 0.2588 |     - |   52.1 KB |
| Quantity.TryParse(invalidNumber) | 74.27 μs | 1.475 μs | 2.115 μs | 0.400 μs | 70.62 μs | 79.00 μs | 74.04 μs |  1.09 |          Slower |    0.04 | 8.2816 | 0.2588 |     - |   52.1 KB |
|            TryParse(invalidUnit) | 82.03 μs | 1.507 μs | 2.112 μs | 0.406 μs | 78.05 μs | 85.75 μs | 82.08 μs |  1.22 |          Slower |    0.04 | 8.0745 | 0.3106 |     - |  51.92 KB |
|   Quantity.TryParse(invalidUnit) | 82.97 μs | 1.651 μs | 1.767 μs | 0.416 μs | 80.09 μs | 86.10 μs | 83.07 μs |  1.23 |          Slower |    0.03 | 8.0745 | 0.3106 |     - |  51.92 KB |
|   Quantity.TryParse(validString) | 84.39 μs | 1.595 μs | 1.638 μs | 0.397 μs | 80.80 μs | 87.33 μs | 84.31 μs |  1.25 |          Slower |    0.04 | 8.7209 | 0.4845 |     - |  55.25 KB |
|      Quantity.Parse(validString) | 87.51 μs | 1.744 μs | 3.601 μs | 0.499 μs | 80.87 μs | 95.61 μs | 87.25 μs |  1.30 |          Slower |    0.06 | 8.7209 | 0.4845 |     - |  55.25 KB |
