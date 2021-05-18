``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-KINMSY : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|            TryParse(validString) | 51.43 μs | 0.982 μs | 1.242 μs | 0.259 μs | 49.28 μs | 53.67 μs | 51.30 μs |  1.00 |            Same |    0.04 | 1.2616 |      - |     - |  32.32 KB |
|               Parse(validString) | 51.64 μs | 1.009 μs | 1.312 μs | 0.268 μs | 48.96 μs | 54.16 μs | 51.83 μs |  1.00 |            Base |    0.00 | 1.2616 |      - |     - |  32.34 KB |
|          TryParse(invalidNumber) | 58.48 μs | 1.160 μs | 2.757 μs | 0.337 μs | 53.09 μs | 65.34 μs | 58.05 μs |  1.16 |          Slower |    0.07 | 1.1646 |      - |     - |  31.93 KB |
| Quantity.TryParse(invalidNumber) | 61.47 μs | 1.201 μs | 2.342 μs | 0.342 μs | 57.30 μs | 66.07 μs | 61.47 μs |  1.21 |          Slower |    0.06 | 1.2201 |      - |     - |  31.93 KB |
|            TryParse(invalidUnit) | 63.08 μs | 1.236 μs | 2.132 μs | 0.346 μs | 58.59 μs | 67.38 μs | 62.79 μs |  1.22 |          Slower |    0.04 | 1.2201 |      - |     - |  31.78 KB |
|   Quantity.TryParse(validString) | 65.92 μs | 1.282 μs | 2.470 μs | 0.364 μs | 61.93 μs | 71.83 μs | 65.31 μs |  1.28 |          Slower |    0.06 | 1.2920 | 0.1077 |     - |  35.36 KB |
|   Quantity.TryParse(invalidUnit) | 66.47 μs | 1.305 μs | 2.607 μs | 0.372 μs | 62.52 μs | 72.43 μs | 66.13 μs |  1.29 |          Slower |    0.07 | 1.1646 |      - |     - |  31.78 KB |
|      Quantity.Parse(validString) | 66.60 μs | 1.328 μs | 2.428 μs | 0.375 μs | 59.89 μs | 71.41 μs | 66.61 μs |  1.29 |          Slower |    0.06 | 1.2920 |      - |     - |  35.36 KB |
