``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-YVRCUC : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |     Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|----------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|               Parse(validString) | 57.95 μs | 13.497 μs | 0.740 μs | 0.427 μs | 57.12 μs | 58.54 μs | 58.19 μs |  1.00 |            Base |    0.00 | 1.6637 |     - |     - |  32.34 KB |
|            TryParse(validString) | 58.58 μs |  7.387 μs | 0.405 μs | 0.234 μs | 58.15 μs | 58.95 μs | 58.64 μs |  1.01 |               ? |    0.01 | 1.6637 |     - |     - |  32.32 KB |
|          TryParse(invalidNumber) | 65.10 μs |  7.471 μs | 0.409 μs | 0.236 μs | 64.63 μs | 65.39 μs | 65.29 μs |  1.12 |               ? |    0.02 | 1.6637 |     - |     - |  31.93 KB |
| Quantity.TryParse(invalidNumber) | 65.57 μs | 22.414 μs | 1.229 μs | 0.709 μs | 64.33 μs | 66.79 μs | 65.58 μs |  1.13 |               ? |    0.01 | 1.6637 |     - |     - |  31.93 KB |
|      Quantity.Parse(validString) | 69.30 μs | 15.879 μs | 0.870 μs | 0.503 μs | 68.31 μs | 69.94 μs | 69.65 μs |  1.20 |               ? |    0.00 | 1.8088 |     - |     - |  35.36 KB |
|   Quantity.TryParse(validString) | 69.97 μs | 23.201 μs | 1.272 μs | 0.734 μs | 68.84 μs | 71.35 μs | 69.72 μs |  1.21 |               ? |    0.04 | 1.8088 |     - |     - |  35.36 KB |
|            TryParse(invalidUnit) | 70.67 μs | 22.181 μs | 1.216 μs | 0.702 μs | 69.67 μs | 72.03 μs | 70.32 μs |  1.22 |               ? |    0.04 | 1.6822 |     - |     - |  31.78 KB |
|   Quantity.TryParse(invalidUnit) | 70.71 μs | 46.617 μs | 2.555 μs | 1.475 μs | 69.10 μs | 73.65 μs | 69.37 μs |  1.22 |               ? |    0.06 | 1.6822 |     - |     - |  31.78 KB |
