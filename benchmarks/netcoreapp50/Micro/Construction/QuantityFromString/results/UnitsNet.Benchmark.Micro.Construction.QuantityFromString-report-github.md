``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-UXINLF : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|            TryParse(validString) | 55.16 μs | 70.84 μs | 3.883 μs | 2.242 μs | 51.86 μs | 59.44 μs | 54.18 μs |  0.99 |               ? |    0.10 | 2.0380 |      - |     - |  32.32 KB |
|               Parse(validString) | 55.84 μs | 41.25 μs | 2.261 μs | 1.305 μs | 53.65 μs | 58.17 μs | 55.70 μs |  1.00 |            Base |    0.00 | 2.0380 |      - |     - |  32.34 KB |
|          TryParse(invalidNumber) | 58.12 μs | 19.20 μs | 1.052 μs | 0.608 μs | 56.91 μs | 58.73 μs | 58.72 μs |  1.04 |               ? |    0.06 | 1.9965 |      - |     - |  31.93 KB |
| Quantity.TryParse(invalidNumber) | 60.17 μs | 19.28 μs | 1.057 μs | 0.610 μs | 59.31 μs | 61.35 μs | 59.84 μs |  1.08 |               ? |    0.03 | 1.9965 |      - |     - |  31.93 KB |
|            TryParse(invalidUnit) | 65.98 μs | 45.54 μs | 2.496 μs | 1.441 μs | 64.18 μs | 68.83 μs | 64.92 μs |  1.18 |               ? |    0.03 | 2.0704 |      - |     - |  31.78 KB |
|   Quantity.TryParse(validString) | 66.17 μs | 16.30 μs | 0.894 μs | 0.516 μs | 65.38 μs | 67.14 μs | 66.00 μs |  1.19 |               ? |    0.05 | 2.1964 | 0.1292 |     - |  35.36 KB |
|      Quantity.Parse(validString) | 66.51 μs | 14.45 μs | 0.792 μs | 0.457 μs | 65.73 μs | 67.32 μs | 66.48 μs |  1.19 |               ? |    0.04 | 2.1964 | 0.1292 |     - |  35.36 KB |
|   Quantity.TryParse(invalidUnit) | 66.91 μs | 24.30 μs | 1.332 μs | 0.769 μs | 65.42 μs | 67.99 μs | 67.32 μs |  1.20 |               ? |    0.06 | 1.9965 |      - |     - |  31.78 KB |
