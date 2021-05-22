``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-CCIETY : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|               Parse(validString) | 64.47 μs | 1.257 μs | 1.235 μs | 0.309 μs | 62.11 μs | 66.66 μs | 64.59 μs |  1.00 |            Base |    0.00 | 8.3185 | 0.3327 |     - |  52.55 KB |
|            TryParse(validString) | 64.51 μs | 1.275 μs | 1.193 μs | 0.308 μs | 63.17 μs | 67.03 μs | 64.23 μs |  1.00 |            Same |    0.03 | 8.3185 | 0.3327 |     - |  52.53 KB |
|          TryParse(invalidNumber) | 70.51 μs | 1.029 μs | 0.963 μs | 0.249 μs | 69.30 μs | 72.37 μs | 70.34 μs |  1.09 |          Slower |    0.02 | 8.1522 | 0.2588 |     - |  52.09 KB |
| Quantity.TryParse(invalidNumber) | 73.63 μs | 1.407 μs | 1.621 μs | 0.362 μs | 71.40 μs | 76.96 μs | 73.46 μs |  1.15 |          Slower |    0.04 | 8.1522 | 0.2588 |     - |   52.1 KB |
|      Quantity.Parse(validString) | 80.28 μs | 1.036 μs | 0.919 μs | 0.246 μs | 78.86 μs | 82.45 μs | 80.11 μs |  1.24 |          Slower |    0.02 | 8.5594 | 0.4845 |     - |  55.25 KB |
|            TryParse(invalidUnit) | 80.32 μs | 1.526 μs | 1.427 μs | 0.368 μs | 78.33 μs | 83.43 μs | 79.85 μs |  1.24 |          Slower |    0.03 | 8.0745 | 0.3106 |     - |  51.92 KB |
|   Quantity.TryParse(invalidUnit) | 81.27 μs | 1.479 μs | 1.384 μs | 0.357 μs | 79.27 μs | 84.44 μs | 80.86 μs |  1.26 |          Slower |    0.03 | 8.0745 | 0.3106 |     - |  51.92 KB |
|   Quantity.TryParse(validString) | 82.01 μs | 1.603 μs | 1.421 μs | 0.380 μs | 79.60 μs | 84.60 μs | 81.81 μs |  1.27 |          Slower |    0.03 | 8.5594 | 0.4845 |     - |  55.25 KB |
