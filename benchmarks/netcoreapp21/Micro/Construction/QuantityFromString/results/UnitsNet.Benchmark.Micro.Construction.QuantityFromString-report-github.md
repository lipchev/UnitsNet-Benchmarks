``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-MLWRFX : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|               Parse(validString) | 74.54 μs | 0.769 μs | 0.642 μs | 0.178 μs | 73.58 μs | 75.91 μs | 74.42 μs |  1.00 |            Base |    0.00 | 6.5217 | 0.1553 |     - |  43.36 KB |
|            TryParse(validString) | 75.44 μs | 1.505 μs | 1.478 μs | 0.369 μs | 72.49 μs | 78.05 μs | 75.80 μs |  1.01 |            Same |    0.02 | 6.5994 | 0.1294 |     - |  43.33 KB |
|          TryParse(invalidNumber) | 80.42 μs | 1.164 μs | 1.088 μs | 0.281 μs | 78.56 μs | 82.71 μs | 80.43 μs |  1.08 |          Slower |    0.02 | 6.3665 | 0.1553 |     - |  42.96 KB |
| Quantity.TryParse(invalidNumber) | 82.64 μs | 1.121 μs | 1.049 μs | 0.271 μs | 80.43 μs | 84.27 μs | 82.56 μs |  1.11 |          Slower |    0.02 | 6.3665 | 0.1553 |     - |  42.96 KB |
|      Quantity.Parse(validString) | 90.04 μs | 1.287 μs | 1.204 μs | 0.311 μs | 88.00 μs | 92.46 μs | 89.90 μs |  1.21 |          Slower |    0.02 | 6.9444 | 0.3230 |     - |   46.2 KB |
|            TryParse(invalidUnit) | 90.42 μs | 1.788 μs | 2.325 μs | 0.475 μs | 86.44 μs | 96.23 μs | 89.97 μs |  1.20 |          Slower |    0.02 | 6.3665 | 0.1553 |     - |  42.79 KB |
|   Quantity.TryParse(validString) | 90.85 μs | 1.737 μs | 2.319 μs | 0.464 μs | 87.16 μs | 95.46 μs | 90.61 μs |  1.23 |          Slower |    0.03 | 6.9444 | 0.3230 |     - |   46.2 KB |
|   Quantity.TryParse(invalidUnit) | 92.14 μs | 1.839 μs | 2.118 μs | 0.474 μs | 89.07 μs | 97.13 μs | 91.89 μs |  1.23 |          Slower |    0.02 | 6.3665 | 0.1553 |     - |  42.79 KB |
