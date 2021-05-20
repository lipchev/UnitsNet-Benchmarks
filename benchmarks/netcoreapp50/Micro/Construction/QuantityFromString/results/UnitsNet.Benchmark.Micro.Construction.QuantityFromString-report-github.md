``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-RYOXDL : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |     Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|----------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|            TryParse(validString) | 60.47 μs | 13.890 μs | 0.761 μs | 0.440 μs | 59.62 μs | 61.10 μs | 60.70 μs |  0.99 |               ? |    0.01 | 2.1074 |      - |     - |  32.32 KB |
|               Parse(validString) | 61.27 μs |  5.228 μs | 0.287 μs | 0.165 μs | 61.06 μs | 61.59 μs | 61.15 μs |  1.00 |            Base |    0.00 | 2.1074 |      - |     - |  32.34 KB |
| Quantity.TryParse(invalidNumber) | 65.78 μs | 51.505 μs | 2.823 μs | 1.630 μs | 62.52 μs | 67.54 μs | 67.27 μs |  1.07 |               ? |    0.04 | 2.0704 |      - |     - |  31.93 KB |
|          TryParse(invalidNumber) | 66.40 μs | 14.310 μs | 0.784 μs | 0.453 μs | 65.68 μs | 67.24 μs | 66.29 μs |  1.08 |               ? |    0.02 | 2.0704 |      - |     - |  31.93 KB |
|            TryParse(invalidUnit) | 70.27 μs | 22.658 μs | 1.242 μs | 0.717 μs | 69.41 μs | 71.69 μs | 69.71 μs |  1.15 |               ? |    0.01 | 2.0704 |      - |     - |  31.78 KB |
|   Quantity.TryParse(validString) | 71.31 μs | 16.623 μs | 0.911 μs | 0.526 μs | 70.62 μs | 72.34 μs | 70.97 μs |  1.16 |               ? |    0.02 | 2.1964 | 0.1292 |     - |  35.36 KB |
|   Quantity.TryParse(invalidUnit) | 71.91 μs | 20.961 μs | 1.149 μs | 0.663 μs | 70.59 μs | 72.58 μs | 72.57 μs |  1.17 |               ? |    0.02 | 2.0704 |      - |     - |  31.78 KB |
|      Quantity.Parse(validString) | 73.78 μs | 20.918 μs | 1.147 μs | 0.662 μs | 72.97 μs | 75.09 μs | 73.28 μs |  1.20 |               ? |    0.02 | 2.1964 | 0.1292 |     - |  35.36 KB |
