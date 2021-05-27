``` ini

BenchmarkDotNet=v0.13.0, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET SDK=5.0.203
  [Host]     : .NET 5.0.6 (5.0.621.22011), X64 RyuJIT
  Job-JJZJGA : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET Framework 4.7.2  Toolchain=net472  Categories=Micro,Construction,Quantity,String  

```
|                           Method |     Mean |    Error |   StdDev |   StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|--------------------------------- |---------:|---------:|---------:|---------:|---------:|---------:|---------:|------:|---------------- |--------:|-------:|-------:|------:|----------:|
|            TryParse(validString) | 61.00 μs | 1.176 μs | 1.043 μs | 0.279 μs | 59.18 μs | 62.77 μs | 61.18 μs |  0.99 |            Same |    0.03 | 8.3185 | 0.3327 |     - |     53 KB |
|               Parse(validString) | 61.35 μs | 1.136 μs | 1.062 μs | 0.274 μs | 59.65 μs | 63.27 μs | 61.12 μs |  1.00 |            Base |    0.00 | 8.3185 | 0.3327 |     - |     53 KB |
|          TryParse(invalidNumber) | 65.62 μs | 0.556 μs | 0.493 μs | 0.132 μs | 64.43 μs | 66.33 μs | 65.56 μs |  1.07 |          Slower |    0.02 | 8.2816 | 0.2588 |     - |     52 KB |
| Quantity.TryParse(invalidNumber) | 68.53 μs | 1.124 μs | 1.203 μs | 0.284 μs | 66.88 μs | 71.29 μs | 68.45 μs |  1.12 |          Slower |    0.03 | 8.2816 | 0.2588 |     - |     52 KB |
|   Quantity.TryParse(invalidUnit) | 75.26 μs | 1.151 μs | 1.021 μs | 0.273 μs | 74.10 μs | 77.36 μs | 75.06 μs |  1.23 |          Slower |    0.02 | 8.0745 | 0.3106 |     - |     52 KB |
|   Quantity.TryParse(validString) | 76.50 μs | 1.113 μs | 0.987 μs | 0.264 μs | 75.27 μs | 78.20 μs | 76.49 μs |  1.25 |          Slower |    0.03 | 8.7855 | 0.5168 |     - |     55 KB |
|      Quantity.Parse(validString) | 77.12 μs | 1.167 μs | 1.092 μs | 0.282 μs | 75.78 μs | 79.24 μs | 76.77 μs |  1.26 |          Slower |    0.02 | 8.7855 | 0.5168 |     - |     55 KB |
|            TryParse(invalidUnit) | 79.39 μs | 1.577 μs | 3.655 μs | 0.457 μs | 73.99 μs | 88.59 μs | 78.40 μs |  1.24 |          Slower |    0.04 | 8.1522 | 0.2588 |     - |     52 KB |
