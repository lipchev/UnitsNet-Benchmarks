``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-JWYCBH : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|               Parse(validString) | 76.23 μs | 1.071 μs | 0.836 μs | 0.241 μs | 74.06 μs | 77.46 μs | 76.44 μs |  1.00 |            Base |    0.00 | 6.7288 | 0.1294 |     - |  43.36 KB |
|            TryParse(validString) | 77.92 μs | 1.496 μs | 1.536 μs | 0.373 μs | 76.10 μs | 80.83 μs | 77.87 μs |  1.02 |            Same |    0.02 | 6.6770 | 0.1553 |     - |  43.33 KB |
|          TryParse(invalidNumber) | 84.97 μs | 1.678 μs | 2.061 μs | 0.439 μs | 81.13 μs | 89.19 μs | 85.05 μs |  1.12 |          Slower |    0.03 | 6.6770 | 0.1553 |     - |  42.96 KB |
| Quantity.TryParse(invalidNumber) | 85.91 μs | 1.651 μs | 1.696 μs | 0.411 μs | 83.03 μs | 88.97 μs | 85.47 μs |  1.13 |          Slower |    0.03 | 6.6770 | 0.1553 |     - |  42.96 KB |
|   Quantity.TryParse(validString) | 90.87 μs | 1.742 μs | 2.139 μs | 0.456 μs | 86.49 μs | 95.69 μs | 90.99 μs |  1.18 |          Slower |    0.03 | 7.1059 | 0.3230 |     - |   46.2 KB |
|      Quantity.Parse(validString) | 91.96 μs | 1.763 μs | 2.165 μs | 0.462 μs | 88.01 μs | 95.32 μs | 92.83 μs |  1.22 |          Slower |    0.03 | 7.1059 | 0.3230 |     - |   46.2 KB |
|            TryParse(invalidUnit) | 93.35 μs | 1.825 μs | 1.707 μs | 0.441 μs | 90.37 μs | 96.30 μs | 93.23 μs |  1.22 |          Slower |    0.02 | 6.5217 | 0.1553 |     - |  42.79 KB |
|   Quantity.TryParse(invalidUnit) | 94.29 μs | 1.342 μs | 1.256 μs | 0.324 μs | 91.82 μs | 96.58 μs | 94.03 μs |  1.24 |          Slower |    0.02 | 6.5217 | 0.1553 |     - |  42.79 KB |
