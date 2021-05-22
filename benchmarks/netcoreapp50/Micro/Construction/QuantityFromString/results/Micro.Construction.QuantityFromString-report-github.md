``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-YPUQQO : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|            TryParse(validString) | 57.74 μs | 1.146 μs | 1.643 μs | 0.311 μs | 55.08 μs | 60.94 μs | 57.40 μs |  0.97 |            Same |    0.04 | 2.1074 |      - |     - |  32.32 KB |
|               Parse(validString) | 59.43 μs | 1.172 μs | 1.718 μs | 0.319 μs | 55.71 μs | 62.48 μs | 59.42 μs |  1.00 |            Base |    0.00 | 2.1074 |      - |     - |  32.34 KB |
|          TryParse(invalidNumber) | 64.24 μs | 1.264 μs | 2.041 μs | 0.350 μs | 60.29 μs | 69.04 μs | 64.28 μs |  1.08 |          Slower |    0.05 | 2.0704 |      - |     - |  31.93 KB |
| Quantity.TryParse(invalidNumber) | 64.39 μs | 1.277 μs | 1.569 μs | 0.334 μs | 61.00 μs | 67.44 μs | 64.43 μs |  1.08 |          Slower |    0.04 | 2.0704 |      - |     - |  31.93 KB |
|            TryParse(invalidUnit) | 67.81 μs | 1.306 μs | 1.698 μs | 0.347 μs | 65.04 μs | 70.91 μs | 67.69 μs |  1.14 |          Slower |    0.04 | 2.0704 |      - |     - |  31.78 KB |
|   Quantity.TryParse(invalidUnit) | 69.65 μs | 1.386 μs | 1.897 μs | 0.372 μs | 66.27 μs | 73.39 μs | 69.11 μs |  1.17 |          Slower |    0.06 | 2.0704 |      - |     - |  31.78 KB |
|   Quantity.TryParse(validString) | 70.14 μs | 1.008 μs | 0.943 μs | 0.244 μs | 68.41 μs | 71.31 μs | 70.01 μs |  1.17 |          Slower |    0.04 | 2.1964 | 0.1292 |     - |  35.36 KB |
|      Quantity.Parse(validString) | 71.85 μs | 1.215 μs | 1.351 μs | 0.310 μs | 68.71 μs | 74.21 μs | 71.97 μs |  1.20 |          Slower |    0.05 | 2.1964 | 0.1292 |     - |  35.36 KB |
