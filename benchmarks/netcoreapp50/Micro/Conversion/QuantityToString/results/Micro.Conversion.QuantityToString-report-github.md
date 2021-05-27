``` ini

BenchmarkDotNet=v0.13.0, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET SDK=5.0.203
  [Host]     : .NET 5.0.6 (5.0.621.22011), X64 RyuJIT
  Job-TGUZTB : .NET 5.0.6 (5.0.621.22011), X64 RyuJIT

Runtime=.NET 5.0  Toolchain=netcoreapp50  

```
|             Method |                        Categories |    quantity | format | culture |       Mean |    Error |   StdDev |  StdErr |        Min |        Max |     Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------- |---------------------------------- |------------ |------- |-------- |-----------:|---------:|---------:|--------:|-----------:|-----------:|-----------:|-------:|------:|------:|----------:|
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      v |         |   446.2 ns |  7.35 ns |  6.14 ns | 1.70 ns |   438.6 ns |   454.6 ns |   445.8 ns | 0.0095 |     - |     - |     192 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      v |         |   458.9 ns |  6.66 ns |  6.23 ns | 1.61 ns |   447.4 ns |   467.5 ns |   458.5 ns | 0.0100 |     - |     - |     192 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      a |         |   615.1 ns |  8.14 ns |  7.22 ns | 1.93 ns |   603.7 ns |   626.4 ns |   616.1 ns | 0.0334 |     - |     - |     640 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      a |         |   620.0 ns |  9.76 ns |  8.15 ns | 2.26 ns |   605.8 ns |   631.0 ns |   623.5 ns | 0.0334 |     - |     - |     640 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |     a2 |         |   789.1 ns | 12.76 ns | 11.31 ns | 3.02 ns |   766.5 ns |   804.9 ns |   790.0 ns | 0.0372 |     - |     - |     696 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |     a2 |         |   793.5 ns | 12.54 ns | 11.73 ns | 3.03 ns |   767.1 ns |   813.9 ns |   797.1 ns | 0.0372 |     - |     - |     696 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,330.9 ns | 25.48 ns | 33.13 ns | 6.76 ns | 1,272.5 ns | 1,386.0 ns | 1,324.5 ns | 0.0401 |     - |     - |     752 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,390.6 ns | 27.40 ns | 31.56 ns | 7.06 ns | 1,329.8 ns | 1,457.0 ns | 1,387.5 ns | 0.0401 |     - |     - |     752 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |      ? |         | 1,555.2 ns | 31.23 ns | 30.67 ns | 7.67 ns | 1,511.3 ns | 1,622.9 ns | 1,553.8 ns | 0.0496 |     - |     - |     952 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |      ? |         | 1,595.8 ns | 21.25 ns | 19.88 ns | 5.13 ns | 1,563.8 ns | 1,637.9 ns | 1,595.3 ns | 0.0496 |     - |     - |     952 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      ? |         | 1,675.9 ns | 33.14 ns | 32.55 ns | 8.14 ns | 1,611.2 ns | 1,720.6 ns | 1,682.0 ns | 0.0496 |     - |     - |     960 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 1,690.5 ns | 33.23 ns | 39.55 ns | 8.63 ns | 1,629.8 ns | 1,764.1 ns | 1,682.4 ns | 0.0496 |     - |     - |     960 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      ? |         | 1,701.1 ns | 33.35 ns | 35.69 ns | 8.41 ns | 1,650.2 ns | 1,767.6 ns | 1,697.4 ns | 0.0496 |     - |     - |     960 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 1,755.9 ns | 27.69 ns | 25.90 ns | 6.69 ns | 1,717.2 ns | 1,799.0 ns | 1,754.0 ns | 0.0496 |     - |     - |     960 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |         | 1,823.3 ns | 27.20 ns | 25.45 ns | 6.57 ns | 1,782.0 ns | 1,870.6 ns | 1,830.4 ns | 0.0515 |     - |     - |     976 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 1,833.0 ns | 28.40 ns | 26.57 ns | 6.86 ns | 1,790.8 ns | 1,892.2 ns | 1,829.7 ns | 0.0515 |     - |     - |     992 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |         | 1,837.8 ns | 36.65 ns | 39.22 ns | 9.24 ns | 1,789.9 ns | 1,913.2 ns | 1,828.7 ns | 0.0515 |     - |     - |     976 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 1,857.4 ns | 26.75 ns | 23.71 ns | 6.34 ns | 1,819.8 ns | 1,898.9 ns | 1,857.4 ns | 0.0515 |     - |     - |     992 B |
