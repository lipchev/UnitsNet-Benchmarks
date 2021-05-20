``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-EBJSIE : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
| Quantity.TryParse(invalidNumber) | 52.28 μs | 1.035 μs | 1.517 μs | 0.282 μs | 49.94 μs | 55.45 μs | 52.09 μs |  0.97 |            Same |    0.04 | 1.1646 |      - |     - |  31.93 KB |
|            TryParse(validString) | 52.51 μs | 1.017 μs | 1.490 μs | 0.277 μs | 50.17 μs | 55.57 μs | 51.97 μs |  0.99 |            Same |    0.03 | 1.2616 |      - |     - |  32.32 KB |
|               Parse(validString) | 53.58 μs | 0.937 μs | 0.831 μs | 0.222 μs | 52.29 μs | 55.36 μs | 53.51 μs |  1.00 |            Base |    0.00 | 1.2616 |      - |     - |  32.34 KB |
|   Quantity.TryParse(invalidUnit) | 57.86 μs | 1.127 μs | 1.787 μs | 0.311 μs | 54.05 μs | 60.75 μs | 58.33 μs |  1.06 |          Slower |    0.04 | 1.2201 |      - |     - |  31.78 KB |
|   Quantity.TryParse(validString) | 58.12 μs | 1.142 μs | 1.778 μs | 0.314 μs | 54.30 μs | 62.08 μs | 58.39 μs |  1.09 |          Slower |    0.03 | 1.2920 | 0.1077 |     - |  35.36 KB |
|          TryParse(invalidNumber) | 58.21 μs | 1.137 μs | 1.217 μs | 0.287 μs | 56.74 μs | 60.50 μs | 57.83 μs |  1.09 |          Slower |    0.03 | 1.2201 |      - |     - |  31.93 KB |
|      Quantity.Parse(validString) | 60.60 μs | 1.205 μs | 3.399 μs | 0.354 μs | 55.87 μs | 69.74 μs | 59.76 μs |  1.20 |          Slower |    0.07 | 1.2920 | 0.1077 |     - |  35.36 KB |
|            TryParse(invalidUnit) | 62.52 μs | 1.057 μs | 0.937 μs | 0.250 μs | 60.57 μs | 64.07 μs | 62.56 μs |  1.17 |          Slower |    0.03 | 1.2201 |      - |     - |  31.78 KB |
