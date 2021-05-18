``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-XBJEXP : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|               Parse(validString) | 54.24 μs | 1.059 μs | 1.710 μs | 0.293 μs | 51.31 μs | 58.43 μs | 54.25 μs |  1.00 |            Base |    0.00 | 2.0380 |      - |     - |  32.34 KB |
|            TryParse(validString) | 56.25 μs | 0.834 μs | 0.780 μs | 0.201 μs | 54.77 μs | 57.29 μs | 56.43 μs |  1.03 |            Same |    0.03 | 2.0380 |      - |     - |  32.32 KB |
|          TryParse(invalidNumber) | 58.23 μs | 1.068 μs | 0.999 μs | 0.258 μs | 56.79 μs | 60.07 μs | 58.27 μs |  1.07 |          Slower |    0.04 | 1.9965 |      - |     - |  31.93 KB |
| Quantity.TryParse(invalidNumber) | 59.24 μs | 1.079 μs | 1.512 μs | 0.291 μs | 57.35 μs | 62.97 μs | 58.71 μs |  1.10 |          Slower |    0.05 | 1.9965 |      - |     - |  31.93 KB |
|   Quantity.TryParse(invalidUnit) | 65.33 μs | 1.287 μs | 1.377 μs | 0.325 μs | 62.48 μs | 67.24 μs | 65.65 μs |  1.20 |          Slower |    0.04 | 2.0704 |      - |     - |  31.78 KB |
|            TryParse(invalidUnit) | 65.99 μs | 1.039 μs | 0.971 μs | 0.251 μs | 64.86 μs | 67.99 μs | 65.64 μs |  1.21 |          Slower |    0.04 | 1.9965 |      - |     - |  31.78 KB |
|      Quantity.Parse(validString) | 66.04 μs | 1.306 μs | 1.222 μs | 0.315 μs | 64.36 μs | 68.70 μs | 65.99 μs |  1.21 |          Slower |    0.04 | 2.1964 | 0.1292 |     - |  35.36 KB |
|   Quantity.TryParse(validString) | 66.50 μs | 1.293 μs | 2.051 μs | 0.357 μs | 63.37 μs | 71.09 μs | 66.20 μs |  1.23 |          Slower |    0.05 | 2.1964 | 0.1292 |     - |  35.36 KB |
