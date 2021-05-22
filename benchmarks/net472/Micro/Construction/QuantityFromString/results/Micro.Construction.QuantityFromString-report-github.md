``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-VQBNCJ : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|            TryParse(validString) | 66.20 μs | 1.294 μs | 1.541 μs | 0.336 μs | 63.45 μs | 68.41 μs | 66.48 μs |  0.99 |            Same |    0.03 | 8.2816 | 0.2588 |     - |  52.53 KB |
|               Parse(validString) | 67.17 μs | 0.938 μs | 0.831 μs | 0.222 μs | 64.88 μs | 68.06 μs | 67.44 μs |  1.00 |            Base |    0.00 | 8.3185 | 0.3327 |     - |  52.55 KB |
| Quantity.TryParse(invalidNumber) | 72.81 μs | 1.305 μs | 1.157 μs | 0.309 μs | 71.24 μs | 74.84 μs | 72.53 μs |  1.08 |          Slower |    0.02 | 8.1522 | 0.2588 |     - |  52.09 KB |
|          TryParse(invalidNumber) | 74.77 μs | 1.489 μs | 2.038 μs | 0.400 μs | 70.20 μs | 78.03 μs | 75.16 μs |  1.10 |          Slower |    0.03 | 8.1522 | 0.2588 |     - |  52.09 KB |
|            TryParse(invalidUnit) | 82.00 μs | 1.635 μs | 1.606 μs | 0.401 μs | 79.82 μs | 84.03 μs | 82.57 μs |  1.22 |          Slower |    0.02 | 8.0745 | 0.3106 |     - |  51.92 KB |
|   Quantity.TryParse(invalidUnit) | 83.64 μs | 1.661 μs | 2.217 μs | 0.443 μs | 79.53 μs | 87.54 μs | 83.26 μs |  1.25 |          Slower |    0.04 | 8.0745 | 0.3106 |     - |  51.92 KB |
|   Quantity.TryParse(validString) | 84.05 μs | 1.655 μs | 2.672 μs | 0.458 μs | 79.87 μs | 90.26 μs | 83.20 μs |  1.25 |          Slower |    0.05 | 8.5594 | 0.4845 |     - |  55.25 KB |
|      Quantity.Parse(validString) | 84.71 μs | 1.639 μs | 2.600 μs | 0.453 μs | 78.84 μs | 90.43 μs | 84.98 μs |  1.28 |          Slower |    0.03 | 8.5594 | 0.4845 |     - |  55.25 KB |
