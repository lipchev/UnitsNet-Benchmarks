``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-RBCOLX : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|               Parse(validString) | 65.74 μs | 1.132 μs | 1.431 μs | 0.298 μs | 63.59 μs | 69.04 μs | 65.50 μs |  1.00 |            Base |    0.00 | 1.2201 |     - |     - |  32.34 KB |
|            TryParse(validString) | 66.03 μs | 1.315 μs | 2.625 μs | 0.375 μs | 60.82 μs | 72.61 μs | 66.08 μs |  1.00 |            Same |    0.05 | 1.1646 |     - |     - |  32.32 KB |
| Quantity.TryParse(invalidNumber) | 66.68 μs | 1.325 μs | 2.251 μs | 0.370 μs | 60.52 μs | 71.46 μs | 67.13 μs |  1.02 |            Same |    0.03 | 1.1646 |     - |     - |  31.93 KB |
|          TryParse(invalidNumber) | 69.54 μs | 1.318 μs | 1.353 μs | 0.328 μs | 66.81 μs | 71.93 μs | 69.74 μs |  1.06 |            Same |    0.03 | 1.1646 |     - |     - |  31.93 KB |
|   Quantity.TryParse(validString) | 70.65 μs | 1.406 μs | 3.989 μs | 0.414 μs | 62.99 μs | 79.83 μs | 69.65 μs |  1.13 |            Same |    0.07 | 1.2920 |     - |     - |  35.36 KB |
|   Quantity.TryParse(invalidUnit) | 73.90 μs | 1.450 μs | 1.425 μs | 0.356 μs | 70.48 μs | 75.79 μs | 74.11 μs |  1.12 |          Slower |    0.04 | 1.1646 |     - |     - |  31.78 KB |
|            TryParse(invalidUnit) | 75.47 μs | 1.477 μs | 2.810 μs | 0.419 μs | 69.92 μs | 80.63 μs | 75.04 μs |  1.16 |          Slower |    0.05 | 1.2422 |     - |     - |  31.78 KB |
|      Quantity.Parse(validString) | 76.03 μs | 1.486 μs | 2.270 μs | 0.408 μs | 70.38 μs | 80.14 μs | 76.21 μs |  1.16 |          Slower |    0.04 | 1.2920 |     - |     - |  35.36 KB |
