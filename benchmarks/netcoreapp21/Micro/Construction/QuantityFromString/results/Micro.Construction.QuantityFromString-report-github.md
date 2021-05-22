``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-ONEMNV : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|            TryParse(validString) | 76.85 μs | 1.490 μs | 1.464 μs | 0.366 μs | 74.54 μs | 79.77 μs | 76.68 μs |  0.98 |            Same |    0.02 | 6.6770 | 0.1553 |     - |  43.33 KB |
|               Parse(validString) | 78.41 μs | 1.548 μs | 1.448 μs | 0.374 μs | 76.70 μs | 80.91 μs | 77.83 μs |  1.00 |            Base |    0.00 | 6.6770 | 0.1553 |     - |  43.36 KB |
|          TryParse(invalidNumber) | 81.11 μs | 1.181 μs | 0.986 μs | 0.274 μs | 78.72 μs | 82.68 μs | 81.23 μs |  1.03 |            Same |    0.02 | 6.6770 | 0.1553 |     - |  42.96 KB |
| Quantity.TryParse(invalidNumber) | 85.82 μs | 1.183 μs | 1.049 μs | 0.280 μs | 83.96 μs | 87.13 μs | 85.78 μs |  1.09 |          Slower |    0.02 | 6.6770 | 0.1553 |     - |  42.96 KB |
|      Quantity.Parse(validString) | 90.03 μs | 1.741 μs | 2.072 μs | 0.452 μs | 86.49 μs | 94.02 μs | 89.78 μs |  1.15 |          Slower |    0.03 | 7.2674 | 0.3230 |     - |   46.2 KB |
|   Quantity.TryParse(validString) | 90.69 μs | 1.809 μs | 1.692 μs | 0.437 μs | 87.88 μs | 93.52 μs | 90.69 μs |  1.16 |          Slower |    0.03 | 7.2674 | 0.3230 |     - |   46.2 KB |
|            TryParse(invalidUnit) | 93.62 μs | 1.047 μs | 0.874 μs | 0.242 μs | 92.45 μs | 95.53 μs | 93.37 μs |  1.19 |          Slower |    0.03 | 6.6770 | 0.1553 |     - |  42.79 KB |
|   Quantity.TryParse(invalidUnit) | 94.65 μs | 1.879 μs | 2.164 μs | 0.484 μs | 91.63 μs | 98.98 μs | 94.43 μs |  1.21 |          Slower |    0.04 | 6.6770 | 0.1553 |     - |  42.79 KB |
