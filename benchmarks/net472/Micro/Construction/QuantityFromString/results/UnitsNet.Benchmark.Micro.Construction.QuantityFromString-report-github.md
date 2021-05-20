``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-FYLMHQ : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|            TryParse(validString) | 60.50 μs | 1.133 μs | 1.004 μs | 0.268 μs | 58.60 μs | 62.30 μs | 60.78 μs |  0.98 |            Same |    0.02 | 8.0967 | 0.3327 |     - |  52.53 KB |
|               Parse(validString) | 61.56 μs | 0.842 μs | 0.787 μs | 0.203 μs | 60.16 μs | 63.04 μs | 61.51 μs |  1.00 |            Base |    0.00 | 8.0967 | 0.3327 |     - |  52.55 KB |
|          TryParse(invalidNumber) | 66.51 μs | 1.071 μs | 1.002 μs | 0.259 μs | 64.48 μs | 68.38 μs | 66.30 μs |  1.08 |          Slower |    0.02 | 8.0228 | 0.2588 |     - |   52.1 KB |
| Quantity.TryParse(invalidNumber) | 67.91 μs | 1.354 μs | 1.390 μs | 0.337 μs | 66.12 μs | 70.99 μs | 67.90 μs |  1.10 |          Slower |    0.03 | 8.0228 | 0.2588 |     - |   52.1 KB |
|            TryParse(invalidUnit) | 74.52 μs | 1.327 μs | 1.861 μs | 0.358 μs | 71.60 μs | 78.73 μs | 73.96 μs |  1.21 |          Slower |    0.03 | 8.0228 | 0.2588 |     - |  51.92 KB |
|   Quantity.TryParse(invalidUnit) | 75.34 μs | 1.095 μs | 0.971 μs | 0.259 μs | 73.61 μs | 77.74 μs | 75.16 μs |  1.22 |          Slower |    0.02 | 8.0228 | 0.2588 |     - |  51.92 KB |
|      Quantity.Parse(validString) | 75.77 μs | 0.953 μs | 0.892 μs | 0.230 μs | 74.71 μs | 78.00 μs | 75.46 μs |  1.23 |          Slower |    0.02 | 8.5271 | 0.3876 |     - |  55.25 KB |
|   Quantity.TryParse(validString) | 77.06 μs | 1.513 μs | 1.857 μs | 0.396 μs | 73.73 μs | 80.83 μs | 76.82 μs |  1.26 |          Slower |    0.03 | 8.3979 | 0.4845 |     - |  55.25 KB |
