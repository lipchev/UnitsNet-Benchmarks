``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-DLCWKC : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|            TryParse(validString) | 54.46 μs | 1.035 μs | 0.968 μs | 0.250 μs | 52.68 μs | 55.95 μs | 54.46 μs |  0.98 |            Same |    0.04 | 1.7469 |      - |     - |  32.32 KB |
|               Parse(validString) | 54.98 μs | 1.089 μs | 1.415 μs | 0.289 μs | 52.56 μs | 58.04 μs | 54.97 μs |  1.00 |            Base |    0.00 | 1.7469 |      - |     - |  32.34 KB |
|          TryParse(invalidNumber) | 60.17 μs | 0.796 μs | 0.706 μs | 0.189 μs | 58.86 μs | 61.41 μs | 60.23 μs |  1.09 |          Slower |    0.03 | 1.6637 |      - |     - |  31.93 KB |
| Quantity.TryParse(invalidNumber) | 63.26 μs | 1.255 μs | 1.541 μs | 0.329 μs | 60.34 μs | 66.53 μs | 63.17 μs |  1.15 |          Slower |    0.04 | 1.6637 |      - |     - |  31.93 KB |
|            TryParse(invalidUnit) | 65.60 μs | 1.311 μs | 1.658 μs | 0.346 μs | 61.64 μs | 68.42 μs | 65.69 μs |  1.19 |          Slower |    0.05 | 1.6822 |      - |     - |  31.78 KB |
|   Quantity.TryParse(validString) | 66.36 μs | 1.272 μs | 1.250 μs | 0.312 μs | 63.60 μs | 67.98 μs | 66.77 μs |  1.20 |          Slower |    0.03 | 1.8088 |      - |     - |  35.36 KB |
|      Quantity.Parse(validString) | 68.22 μs | 1.346 μs | 1.321 μs | 0.330 μs | 66.24 μs | 69.96 μs | 67.86 μs |  1.24 |          Slower |    0.05 | 1.8303 | 0.1077 |     - |  35.36 KB |
|   Quantity.TryParse(invalidUnit) | 68.58 μs | 1.102 μs | 0.977 μs | 0.261 μs | 67.09 μs | 70.20 μs | 68.93 μs |  1.24 |          Slower |    0.04 | 1.6822 |      - |     - |  31.78 KB |
