``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-TYZJQM : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|               Parse(validString) | 54.25 μs | 0.804 μs | 0.752 μs | 0.194 μs | 53.03 μs | 55.27 μs | 54.29 μs |  1.00 |            Base |    0.00 | 1.7469 |      - |     - |  32.34 KB |
|            TryParse(validString) | 55.29 μs | 1.061 μs | 0.886 μs | 0.246 μs | 53.20 μs | 56.54 μs | 55.49 μs |  1.02 |            Same |    0.02 | 1.7469 |      - |     - |  32.32 KB |
|          TryParse(invalidNumber) | 60.26 μs | 1.151 μs | 1.182 μs | 0.287 μs | 58.20 μs | 62.29 μs | 60.08 μs |  1.11 |          Slower |    0.03 | 1.6637 |      - |     - |  31.93 KB |
| Quantity.TryParse(invalidNumber) | 60.80 μs | 0.920 μs | 1.377 μs | 0.251 μs | 58.97 μs | 64.62 μs | 60.47 μs |  1.13 |          Slower |    0.03 | 1.6637 |      - |     - |  31.93 KB |
|      Quantity.Parse(validString) | 64.96 μs | 0.749 μs | 0.625 μs | 0.173 μs | 63.83 μs | 65.72 μs | 65.11 μs |  1.20 |          Slower |    0.02 | 1.8303 | 0.1077 |     - |  35.36 KB |
|   Quantity.TryParse(validString) | 65.30 μs | 1.106 μs | 0.924 μs | 0.256 μs | 63.01 μs | 66.12 μs | 65.58 μs |  1.20 |          Slower |    0.03 | 1.8088 |      - |     - |  35.36 KB |
|            TryParse(invalidUnit) | 65.36 μs | 1.267 μs | 1.185 μs | 0.306 μs | 63.22 μs | 67.72 μs | 65.15 μs |  1.21 |          Slower |    0.03 | 1.6637 |      - |     - |  31.78 KB |
|   Quantity.TryParse(invalidUnit) | 68.36 μs | 1.184 μs | 1.108 μs | 0.286 μs | 66.94 μs | 70.49 μs | 68.47 μs |  1.26 |          Slower |    0.03 | 1.6822 |      - |     - |  31.78 KB |
