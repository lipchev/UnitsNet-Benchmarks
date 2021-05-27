``` ini

BenchmarkDotNet=v0.13.0, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET SDK=5.0.203
  [Host]     : .NET 5.0.6 (5.0.621.22011), X64 RyuJIT
  Job-QHMZIB : .NET 5.0.6 (5.0.621.22011), X64 RyuJIT

Runtime=.NET 5.0  Toolchain=netcoreapp50  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|            TryParse(validString) | 57.61 μs | 0.738 μs | 0.690 μs | 0.178 μs | 55.97 μs | 58.77 μs | 57.59 μs |  0.96 |            Same |    0.03 | 1.6637 |     - |     - |     32 KB |
|               Parse(validString) | 59.87 μs | 1.175 μs | 1.354 μs | 0.303 μs | 57.53 μs | 62.32 μs | 59.86 μs |  1.00 |            Base |    0.00 | 1.6637 |     - |     - |     32 KB |
|          TryParse(invalidNumber) | 64.46 μs | 1.202 μs | 1.066 μs | 0.285 μs | 62.46 μs | 66.40 μs | 64.70 μs |  1.08 |          Slower |    0.03 | 1.6822 |     - |     - |     32 KB |
| Quantity.TryParse(invalidNumber) | 64.92 μs | 1.207 μs | 1.070 μs | 0.286 μs | 63.10 μs | 66.38 μs | 65.27 μs |  1.09 |          Slower |    0.03 | 1.6822 |     - |     - |     32 KB |
|      Quantity.Parse(validString) | 68.16 μs | 0.751 μs | 0.666 μs | 0.178 μs | 67.13 μs | 69.13 μs | 68.25 μs |  1.14 |          Slower |    0.03 | 1.8088 |     - |     - |     35 KB |
|            TryParse(invalidUnit) | 70.03 μs | 1.307 μs | 1.399 μs | 0.330 μs | 67.70 μs | 72.63 μs | 69.77 μs |  1.17 |          Slower |    0.03 | 1.6822 |     - |     - |     32 KB |
|   Quantity.TryParse(invalidUnit) | 71.68 μs | 1.133 μs | 1.004 μs | 0.268 μs | 70.42 μs | 73.80 μs | 71.37 μs |  1.20 |          Slower |    0.03 | 1.6822 |     - |     - |     32 KB |
|   Quantity.TryParse(validString) | 72.26 μs | 1.302 μs | 1.825 μs | 0.351 μs | 68.55 μs | 76.69 μs | 72.26 μs |  1.21 |          Slower |    0.05 | 1.8088 |     - |     - |     35 KB |
