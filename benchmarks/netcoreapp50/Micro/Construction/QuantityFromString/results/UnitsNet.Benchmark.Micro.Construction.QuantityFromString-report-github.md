``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8272CL CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-CMGAZU : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |     Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|----------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|            TryParse(validString) | 47.47 μs |  3.772 μs | 0.207 μs | 0.119 μs | 47.32 μs | 47.70 μs | 47.38 μs |  0.99 |               ? |    0.00 | 1.7253 |      - |     - |  32.32 KB |
|               Parse(validString) | 47.79 μs |  1.447 μs | 0.079 μs | 0.046 μs | 47.73 μs | 47.88 μs | 47.77 μs |  1.00 |            Base |    0.00 | 1.7253 |      - |     - |  32.34 KB |
|          TryParse(invalidNumber) | 51.90 μs |  3.321 μs | 0.182 μs | 0.105 μs | 51.75 μs | 52.10 μs | 51.84 μs |  1.09 |               ? |    0.01 | 1.7469 |      - |     - |  31.93 KB |
| Quantity.TryParse(invalidNumber) | 52.27 μs | 16.584 μs | 0.909 μs | 0.525 μs | 51.50 μs | 53.27 μs | 52.04 μs |  1.09 |               ? |    0.02 | 1.7469 |      - |     - |  31.93 KB |
|            TryParse(invalidUnit) | 56.81 μs |  0.422 μs | 0.023 μs | 0.013 μs | 56.79 μs | 56.84 μs | 56.81 μs |  1.19 |               ? |    0.00 | 1.6637 |      - |     - |  31.78 KB |
|      Quantity.Parse(validString) | 57.01 μs |  4.134 μs | 0.227 μs | 0.131 μs | 56.76 μs | 57.21 μs | 57.05 μs |  1.19 |               ? |    0.00 | 1.8303 | 0.1077 |     - |  35.36 KB |
|   Quantity.TryParse(invalidUnit) | 57.57 μs | 11.364 μs | 0.623 μs | 0.360 μs | 56.87 μs | 58.07 μs | 57.76 μs |  1.20 |               ? |    0.01 | 1.6637 |      - |     - |  31.78 KB |
|   Quantity.TryParse(validString) | 58.58 μs |  8.352 μs | 0.458 μs | 0.264 μs | 58.18 μs | 59.08 μs | 58.48 μs |  1.23 |               ? |    0.01 | 1.8303 | 0.1077 |     - |  35.36 KB |
