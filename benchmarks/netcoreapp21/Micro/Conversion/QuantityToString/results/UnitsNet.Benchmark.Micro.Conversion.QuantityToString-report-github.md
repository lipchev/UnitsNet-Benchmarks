``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-HUOOEJ : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|             Method |                        Categories |    quantity | format | culture |       Mean |    Error |   StdDev |   StdErr |        Min |        Max |     Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------- |---------------------------------- |------------ |------- |-------- |-----------:|---------:|---------:|---------:|-----------:|-----------:|-----------:|-------:|------:|------:|----------:|
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      v |         |   460.8 ns |  3.99 ns |  3.73 ns |  0.96 ns |   453.2 ns |   466.8 ns |   461.4 ns | 0.0286 |     - |     - |     192 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      v |         |   468.8 ns |  6.32 ns |  5.91 ns |  1.53 ns |   461.2 ns |   479.8 ns |   467.8 ns | 0.0267 |     - |     - |     192 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      a |         |   811.1 ns | 12.91 ns | 12.07 ns |  3.12 ns |   788.4 ns |   838.7 ns |   810.0 ns | 0.0992 |     - |     - |     648 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      a |         |   811.3 ns | 12.13 ns | 11.35 ns |  2.93 ns |   786.1 ns |   826.7 ns |   813.9 ns | 0.0992 |     - |     - |     648 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |     a2 |         | 1,113.0 ns | 21.53 ns | 22.11 ns |  5.36 ns | 1,076.3 ns | 1,155.9 ns | 1,103.6 ns | 0.1068 |     - |     - |     712 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |     a2 |         | 1,135.7 ns | 11.67 ns |  9.11 ns |  2.63 ns | 1,122.7 ns | 1,151.2 ns | 1,134.4 ns | 0.1068 |     - |     - |     712 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,544.0 ns | 21.93 ns | 20.51 ns |  5.30 ns | 1,523.5 ns | 1,596.5 ns | 1,535.0 ns | 0.1144 |     - |     - |     768 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,607.0 ns | 23.24 ns | 21.74 ns |  5.61 ns | 1,577.4 ns | 1,641.5 ns | 1,606.2 ns | 0.1144 |     - |     - |     768 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,191.1 ns | 39.17 ns | 36.64 ns |  9.46 ns | 2,128.8 ns | 2,246.3 ns | 2,191.4 ns | 0.1411 |     - |     - |     976 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,221.3 ns | 35.80 ns | 33.49 ns |  8.65 ns | 2,177.1 ns | 2,300.5 ns | 2,225.1 ns | 0.1411 |     - |     - |     968 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,226.5 ns | 41.79 ns | 44.71 ns | 10.54 ns | 2,154.9 ns | 2,306.5 ns | 2,219.8 ns | 0.1411 |     - |     - |     976 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,226.8 ns | 41.34 ns | 38.67 ns |  9.98 ns | 2,173.9 ns | 2,321.1 ns | 2,206.6 ns | 0.1411 |     - |     - |     976 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,328.0 ns | 37.09 ns | 34.70 ns |  8.96 ns | 2,269.4 ns | 2,387.8 ns | 2,316.5 ns | 0.1411 |     - |     - |     976 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,353.1 ns | 46.26 ns | 49.49 ns | 11.67 ns | 2,267.0 ns | 2,436.4 ns | 2,351.3 ns | 0.1411 |     - |     - |     984 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,387.4 ns | 35.48 ns | 33.19 ns |  8.57 ns | 2,320.5 ns | 2,458.7 ns | 2,382.3 ns | 0.1411 |     - |     - |     968 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,389.5 ns | 38.99 ns | 36.48 ns |  9.42 ns | 2,337.6 ns | 2,470.3 ns | 2,391.0 ns | 0.1411 |     - |     - |     984 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,423.6 ns | 38.69 ns | 36.19 ns |  9.34 ns | 2,374.3 ns | 2,497.1 ns | 2,418.4 ns | 0.1488 |     - |     - |    1024 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,454.9 ns | 25.71 ns | 24.05 ns |  6.21 ns | 2,425.0 ns | 2,502.9 ns | 2,449.4 ns | 0.1488 |     - |     - |    1024 B |
