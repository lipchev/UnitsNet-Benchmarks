``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-HCWUEF : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|             Method |                        Categories |    quantity | format | culture |       Mean |    Error |    StdDev |   StdErr |        Min |        Max |     Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------- |---------------------------------- |------------ |------- |-------- |-----------:|---------:|----------:|---------:|-----------:|-----------:|-----------:|-------:|------:|------:|----------:|
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      v |         |   451.4 ns |  9.07 ns |   8.91 ns |  2.23 ns |   441.8 ns |   469.8 ns |   447.7 ns | 0.0296 |     - |     - |     192 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      v |         |   454.0 ns |  7.64 ns |   7.14 ns |  1.84 ns |   439.6 ns |   465.8 ns |   452.5 ns | 0.0296 |     - |     - |     192 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      a |         |   811.8 ns |  7.24 ns |   6.04 ns |  1.68 ns |   796.0 ns |   819.3 ns |   811.7 ns | 0.1011 |     - |     - |     648 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      a |         |   828.1 ns | 15.33 ns |  13.59 ns |  3.63 ns |   810.0 ns |   861.9 ns |   825.8 ns | 0.1011 |     - |     - |     648 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |     a2 |         | 1,096.4 ns | 20.79 ns |  18.43 ns |  4.93 ns | 1,075.3 ns | 1,139.5 ns | 1,092.6 ns | 0.1087 |     - |     - |     712 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |     a2 |         | 1,154.7 ns | 23.03 ns |  23.65 ns |  5.74 ns | 1,124.2 ns | 1,199.4 ns | 1,148.7 ns | 0.1087 |     - |     - |     712 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,606.2 ns | 31.68 ns |  44.41 ns |  8.55 ns | 1,529.3 ns | 1,701.9 ns | 1,617.6 ns | 0.1183 |     - |     - |     768 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,665.7 ns | 32.73 ns |  56.46 ns |  9.16 ns | 1,554.0 ns | 1,771.1 ns | 1,671.7 ns | 0.1183 |     - |     - |     768 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,267.5 ns | 43.07 ns |  88.94 ns | 12.33 ns | 2,123.2 ns | 2,453.4 ns | 2,259.9 ns | 0.1488 |     - |     - |     976 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,271.6 ns | 45.49 ns |  97.92 ns | 13.08 ns | 2,121.8 ns | 2,490.5 ns | 2,266.9 ns | 0.1450 |     - |     - |     968 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,308.2 ns | 45.69 ns | 106.81 ns | 13.25 ns | 2,117.1 ns | 2,602.7 ns | 2,300.2 ns | 0.1488 |     - |     - |     976 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,337.7 ns | 46.13 ns | 101.25 ns | 13.29 ns | 2,145.9 ns | 2,575.3 ns | 2,336.8 ns | 0.1450 |     - |     - |     968 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,434.6 ns | 53.58 ns | 156.29 ns | 15.79 ns | 2,139.6 ns | 2,850.1 ns | 2,448.4 ns | 0.1488 |     - |     - |     976 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,500.9 ns | 53.97 ns | 159.12 ns | 15.91 ns | 2,125.4 ns | 2,850.0 ns | 2,484.5 ns | 0.1488 |     - |     - |     976 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,501.5 ns | 50.07 ns | 137.07 ns | 14.70 ns | 2,253.2 ns | 2,804.5 ns | 2,497.6 ns | 0.1488 |     - |     - |     984 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,503.7 ns | 49.91 ns | 115.67 ns | 14.46 ns | 2,301.1 ns | 2,782.3 ns | 2,507.4 ns | 0.1488 |     - |     - |     984 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,535.4 ns | 50.47 ns | 113.92 ns | 14.59 ns | 2,357.9 ns | 2,814.4 ns | 2,503.7 ns | 0.1564 |     - |     - |    1024 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,585.9 ns | 52.82 ns | 155.75 ns | 15.57 ns | 2,339.9 ns | 2,998.5 ns | 2,555.3 ns | 0.1564 |     - |     - |    1024 B |
