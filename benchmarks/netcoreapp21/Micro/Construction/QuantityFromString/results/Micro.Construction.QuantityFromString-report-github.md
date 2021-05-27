``` ini

BenchmarkDotNet=v0.13.0, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-TAIZJY : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  Categories=Micro,Construction,Quantity,String  

```
|                           Method |      Mean |    Error |    StdDev |   StdErr |    Median |       Min |       Max | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |----------:|---------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|               Parse(validString) |  66.37 μs | 1.306 μs |  1.651 μs | 0.344 μs |  65.74 μs |  64.21 μs |  69.30 μs |  1.00 |            Base |    0.00 | 6.5217 | 0.1553 |     - |     43 KB |
|          TryParse(invalidNumber) |  89.54 μs | 3.722 μs | 10.975 μs | 1.097 μs |  86.57 μs |  74.10 μs | 114.82 μs |  1.35 |          Slower |    0.10 | 6.2112 | 0.1941 |     - |     43 KB |
|            TryParse(validString) |  91.13 μs | 4.876 μs | 14.376 μs | 1.438 μs |  95.79 μs |  63.50 μs | 111.93 μs |  1.01 |          Slower |    0.04 | 6.5994 | 0.1294 |     - |     43 KB |
| Quantity.TryParse(invalidNumber) |  97.15 μs | 2.938 μs |  8.663 μs | 0.866 μs |  95.67 μs |  74.65 μs | 118.12 μs |  1.51 |          Slower |    0.12 | 6.3665 | 0.1553 |     - |     43 KB |
|            TryParse(invalidUnit) | 101.00 μs | 3.037 μs |  8.714 μs | 0.894 μs |  98.75 μs |  86.80 μs | 124.34 μs |  1.46 |          Slower |    0.09 | 6.2112 | 0.1941 |     - |     43 KB |
|   Quantity.TryParse(invalidUnit) | 106.94 μs | 2.082 μs |  4.205 μs | 0.595 μs | 106.31 μs | 100.55 μs | 116.07 μs |  1.61 |          Slower |    0.08 | 6.2112 | 0.1941 |     - |     43 KB |
|      Quantity.Parse(validString) | 112.09 μs | 4.202 μs | 12.389 μs | 1.239 μs | 114.62 μs |  85.10 μs | 136.22 μs |  1.88 |          Slower |    0.11 | 6.6753 | 0.2153 |     - |     46 KB |
|   Quantity.TryParse(validString) | 113.70 μs | 3.456 μs | 10.190 μs | 1.019 μs | 111.55 μs |  99.59 μs | 137.97 μs |  1.71 |          Slower |    0.13 | 6.6753 | 0.2153 |     - |     46 KB |
