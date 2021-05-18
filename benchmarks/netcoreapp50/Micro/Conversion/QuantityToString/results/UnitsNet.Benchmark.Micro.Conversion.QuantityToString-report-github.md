``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-TDZZPE : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|             Method |                        Categories |    quantity | format | culture |       Mean |    Error |   StdDev |  StdErr |        Min |        Max |     Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------- |---------------------------------- |------------ |------- |-------- |-----------:|---------:|---------:|--------:|-----------:|-----------:|-----------:|-------:|------:|------:|----------:|
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      v |         |   418.9 ns |  8.41 ns | 12.84 ns | 2.31 ns |   392.8 ns |   442.8 ns |   418.7 ns | 0.0119 |     - |     - |     192 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      v |         |   425.8 ns |  5.69 ns |  5.05 ns | 1.35 ns |   419.2 ns |   437.3 ns |   425.7 ns | 0.0119 |     - |     - |     192 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      a |         |   569.4 ns | 11.37 ns | 20.21 ns | 3.20 ns |   521.6 ns |   613.0 ns |   569.6 ns | 0.0401 |     - |     - |     640 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      a |         |   583.3 ns | 11.71 ns | 17.52 ns | 3.20 ns |   549.3 ns |   616.0 ns |   588.4 ns | 0.0401 |     - |     - |     640 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |     a2 |         |   700.9 ns | 13.96 ns | 17.14 ns | 3.65 ns |   663.7 ns |   728.9 ns |   702.0 ns | 0.0439 |     - |     - |     696 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |     a2 |         |   704.2 ns | 14.22 ns | 21.71 ns | 3.90 ns |   659.0 ns |   744.0 ns |   700.0 ns | 0.0439 |     - |     - |     696 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,190.9 ns | 23.45 ns | 26.06 ns | 5.98 ns | 1,150.9 ns | 1,242.4 ns | 1,187.0 ns | 0.0477 |     - |     - |     752 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,251.5 ns | 25.03 ns | 27.83 ns | 6.38 ns | 1,172.6 ns | 1,283.8 ns | 1,256.3 ns | 0.0477 |     - |     - |     752 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |      ? |         | 1,423.8 ns | 25.93 ns | 24.25 ns | 6.26 ns | 1,383.6 ns | 1,474.1 ns | 1,429.0 ns | 0.0591 |     - |     - |     952 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |      ? |         | 1,465.8 ns | 28.55 ns | 45.29 ns | 7.88 ns | 1,387.2 ns | 1,551.3 ns | 1,466.3 ns | 0.0591 |     - |     - |     952 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 1,538.9 ns | 29.93 ns | 39.95 ns | 7.99 ns | 1,473.9 ns | 1,620.5 ns | 1,533.1 ns | 0.0610 |     - |     - |     960 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 1,545.4 ns | 27.87 ns | 56.94 ns | 7.97 ns | 1,444.0 ns | 1,691.8 ns | 1,534.7 ns | 0.0610 |     - |     - |     960 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      ? |         | 1,586.0 ns | 31.14 ns | 34.61 ns | 7.94 ns | 1,515.6 ns | 1,642.9 ns | 1,592.1 ns | 0.0610 |     - |     - |     960 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      ? |         | 1,602.7 ns | 32.06 ns | 32.93 ns | 7.99 ns | 1,550.6 ns | 1,664.7 ns | 1,600.6 ns | 0.0610 |     - |     - |     960 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 1,614.9 ns | 31.84 ns | 40.26 ns | 8.40 ns | 1,542.2 ns | 1,677.2 ns | 1,616.6 ns | 0.0629 |     - |     - |     992 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 1,622.7 ns | 30.67 ns | 28.69 ns | 7.41 ns | 1,585.1 ns | 1,665.9 ns | 1,618.6 ns | 0.0629 |     - |     - |     992 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |         | 1,630.2 ns | 31.14 ns | 33.32 ns | 7.85 ns | 1,566.0 ns | 1,698.7 ns | 1,626.3 ns | 0.0610 |     - |     - |     976 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |         | 1,644.5 ns | 32.57 ns | 37.51 ns | 8.39 ns | 1,585.6 ns | 1,731.6 ns | 1,646.4 ns | 0.0610 |     - |     - |     976 B |
