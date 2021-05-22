``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-KCCUCP : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|               Parse(validString) | 66.40 μs | 1.301 μs | 1.392 μs | 0.328 μs | 64.09 μs | 68.48 μs | 66.30 μs |  1.00 |            Base |    0.00 | 8.2816 | 0.2588 |     - |  52.55 KB |
|            TryParse(validString) | 67.05 μs | 1.243 μs | 1.572 μs | 0.328 μs | 63.86 μs | 69.80 μs | 67.17 μs |  1.01 |            Same |    0.03 | 8.2816 | 0.2588 |     - |  52.53 KB |
|          TryParse(invalidNumber) | 70.05 μs | 1.121 μs | 1.048 μs | 0.271 μs | 68.39 μs | 71.64 μs | 70.19 μs |  1.06 |            Same |    0.02 | 8.2816 | 0.2588 |     - |   52.1 KB |
| Quantity.TryParse(invalidNumber) | 71.90 μs | 0.989 μs | 0.825 μs | 0.229 μs | 70.76 μs | 73.90 μs | 71.72 μs |  1.09 |          Slower |    0.02 | 8.2816 | 0.2588 |     - |   52.1 KB |
|            TryParse(invalidUnit) | 81.59 μs | 1.374 μs | 1.285 μs | 0.332 μs | 79.22 μs | 84.20 μs | 81.41 μs |  1.23 |          Slower |    0.03 | 8.0745 | 0.3106 |     - |  51.92 KB |
|      Quantity.Parse(validString) | 81.94 μs | 1.596 μs | 1.900 μs | 0.415 μs | 79.53 μs | 86.78 μs | 81.30 μs |  1.23 |          Slower |    0.04 | 8.7209 | 0.4845 |     - |  55.25 KB |
|   Quantity.TryParse(invalidUnit) | 82.50 μs | 1.638 μs | 1.533 μs | 0.396 μs | 80.40 μs | 85.48 μs | 82.50 μs |  1.25 |          Slower |    0.04 | 8.0745 | 0.3106 |     - |  51.92 KB |
|   Quantity.TryParse(validString) | 82.58 μs | 1.334 μs | 1.182 μs | 0.316 μs | 80.68 μs | 84.73 μs | 82.64 μs |  1.25 |          Slower |    0.02 | 8.7209 | 0.4845 |     - |  55.25 KB |
