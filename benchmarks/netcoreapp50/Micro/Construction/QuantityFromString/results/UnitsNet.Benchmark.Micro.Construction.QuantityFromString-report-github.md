``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-USWYWF : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|            TryParse(validString) | 57.76 μs | 1.104 μs | 1.271 μs | 0.284 μs | 56.27 μs | 60.57 μs | 57.43 μs |  0.99 |            Same |    0.03 | 1.6637 |     - |     - |  32.32 KB |
|               Parse(validString) | 58.48 μs | 1.020 μs | 0.904 μs | 0.242 μs | 57.39 μs | 60.38 μs | 58.25 μs |  1.00 |            Base |    0.00 | 1.6637 |     - |     - |  32.34 KB |
|          TryParse(invalidNumber) | 65.24 μs | 1.283 μs | 1.880 μs | 0.349 μs | 62.43 μs | 68.49 μs | 65.06 μs |  1.11 |          Slower |    0.03 | 1.6637 |     - |     - |  31.93 KB |
| Quantity.TryParse(invalidNumber) | 66.39 μs | 1.321 μs | 2.381 μs | 0.372 μs | 63.49 μs | 71.76 μs | 65.47 μs |  1.17 |          Slower |    0.05 | 1.6822 |     - |     - |  31.93 KB |
|            TryParse(invalidUnit) | 70.29 μs | 1.397 μs | 2.623 μs | 0.396 μs | 67.46 μs | 77.49 μs | 69.48 μs |  1.20 |          Slower |    0.05 | 1.6822 |     - |     - |  31.78 KB |
|   Quantity.TryParse(validString) | 70.31 μs | 1.363 μs | 1.275 μs | 0.329 μs | 68.93 μs | 72.73 μs | 69.61 μs |  1.20 |          Slower |    0.03 | 1.8088 |     - |     - |  35.36 KB |
|   Quantity.TryParse(invalidUnit) | 70.63 μs | 1.390 μs | 1.707 μs | 0.364 μs | 68.81 μs | 74.32 μs | 69.96 μs |  1.22 |          Slower |    0.04 | 1.6822 |     - |     - |  31.78 KB |
|      Quantity.Parse(validString) | 71.68 μs | 1.414 μs | 1.887 μs | 0.377 μs | 69.02 μs | 76.29 μs | 71.29 μs |  1.22 |          Slower |    0.04 | 1.8088 |     - |     - |  35.36 KB |
