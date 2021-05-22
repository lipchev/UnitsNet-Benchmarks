``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-OJTQMW : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|               Parse(validString) | 64.26 μs | 0.993 μs | 0.829 μs | 0.230 μs | 62.67 μs | 65.54 μs | 64.22 μs |  1.00 |            Base |    0.00 | 6.7657 | 0.2218 |     - |  43.36 KB |
|            TryParse(validString) | 65.87 μs | 1.291 μs | 2.121 μs | 0.359 μs | 62.11 μs | 70.44 μs | 65.97 μs |  1.03 |            Same |    0.04 | 6.7657 | 0.2218 |     - |  43.33 KB |
|          TryParse(invalidNumber) | 71.11 μs | 1.287 μs | 1.580 μs | 0.337 μs | 69.11 μs | 74.19 μs | 70.76 μs |  1.10 |          Slower |    0.03 | 6.7288 | 0.2588 |     - |  42.96 KB |
| Quantity.TryParse(invalidNumber) | 71.41 μs | 1.073 μs | 0.896 μs | 0.249 μs | 69.54 μs | 72.53 μs | 71.75 μs |  1.11 |          Slower |    0.02 | 6.7288 | 0.2588 |     - |  42.96 KB |
|   Quantity.TryParse(validString) | 76.27 μs | 1.304 μs | 1.156 μs | 0.309 μs | 73.94 μs | 78.65 μs | 76.21 μs |  1.19 |          Slower |    0.02 | 7.2351 | 0.3876 |     - |   46.2 KB |
|      Quantity.Parse(validString) | 76.93 μs | 1.425 μs | 1.333 μs | 0.344 μs | 75.42 μs | 80.31 μs | 76.57 μs |  1.20 |          Slower |    0.03 | 7.2351 | 0.3876 |     - |   46.2 KB |
|            TryParse(invalidUnit) | 77.92 μs | 1.512 μs | 1.485 μs | 0.371 μs | 75.84 μs | 81.06 μs | 77.47 μs |  1.22 |          Slower |    0.02 | 6.5217 | 0.1553 |     - |  42.79 KB |
|   Quantity.TryParse(invalidUnit) | 80.81 μs | 1.603 μs | 2.194 μs | 0.430 μs | 76.05 μs | 85.27 μs | 81.22 μs |  1.24 |          Slower |    0.04 | 6.5994 | 0.2588 |     - |  42.79 KB |
