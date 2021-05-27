``` ini

BenchmarkDotNet=v0.13.0, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-DVTPOI : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|             Method |                        Categories |    quantity | format | culture |       Mean |     Error |    StdDev |   StdErr |     Median |        Min |        Max |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------- |---------------------------------- |------------ |------- |-------- |-----------:|----------:|----------:|---------:|-----------:|-----------:|-----------:|-------:|------:|------:|----------:|
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      v |         |   430.9 ns |   8.68 ns |  15.64 ns |  2.44 ns |   427.0 ns |   402.3 ns |   473.2 ns | 0.0286 |     - |     - |     192 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      v |         |   503.5 ns |  10.17 ns |  19.10 ns |  2.88 ns |   504.3 ns |   448.5 ns |   555.0 ns | 0.0286 |     - |     - |     192 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      a |         |   804.8 ns |  23.53 ns |  67.52 ns |  6.93 ns |   779.1 ns |   733.3 ns |   995.9 ns | 0.0992 |     - |     - |     648 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      a |         |   810.0 ns |  22.93 ns |  67.62 ns |  6.76 ns |   807.6 ns |   687.6 ns |   942.1 ns | 0.0992 |     - |     - |     648 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |     a2 |         | 1,144.0 ns |  29.14 ns |  82.67 ns |  8.57 ns | 1,129.6 ns | 1,027.6 ns | 1,380.1 ns | 0.1068 |     - |     - |     712 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |     a2 |         | 1,167.2 ns |  23.11 ns |  40.47 ns |  6.48 ns | 1,163.4 ns | 1,112.9 ns | 1,265.8 ns | 0.1068 |     - |     - |     712 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,435.9 ns |  28.18 ns |  40.41 ns |  7.64 ns | 1,430.3 ns | 1,360.8 ns | 1,508.5 ns | 0.1144 |     - |     - |     768 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,581.6 ns |  30.69 ns |  71.12 ns |  8.89 ns | 1,576.1 ns | 1,451.9 ns | 1,732.9 ns | 0.1144 |     - |     - |     768 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,028.5 ns |  40.55 ns | 112.37 ns | 11.91 ns | 2,027.0 ns | 1,826.2 ns | 2,324.5 ns | 0.1411 |     - |     - |     976 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,105.6 ns |  42.16 ns |  93.42 ns | 12.16 ns | 2,081.1 ns | 1,944.2 ns | 2,340.3 ns | 0.1411 |     - |     - |     968 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,131.7 ns |  42.59 ns | 115.16 ns | 12.49 ns | 2,120.2 ns | 1,900.4 ns | 2,418.8 ns | 0.1411 |     - |     - |     968 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,139.6 ns |  42.51 ns | 114.21 ns | 12.46 ns | 2,114.2 ns | 1,972.0 ns | 2,474.4 ns | 0.1488 |     - |     - |   1,024 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,188.2 ns |  38.30 ns |  87.23 ns | 11.08 ns | 2,176.6 ns | 2,024.8 ns | 2,408.7 ns | 0.1488 |     - |     - |   1,024 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,329.7 ns |  44.97 ns |  60.03 ns | 12.01 ns | 2,330.4 ns | 2,238.0 ns | 2,436.6 ns | 0.1411 |     - |     - |     976 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,359.1 ns |  47.16 ns | 113.00 ns | 13.70 ns | 2,351.8 ns | 2,152.7 ns | 2,599.4 ns | 0.1411 |     - |     - |     976 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,437.7 ns |  61.95 ns | 180.71 ns | 18.25 ns | 2,459.8 ns | 2,057.0 ns | 2,826.2 ns | 0.1411 |     - |     - |     984 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,441.2 ns | 104.12 ns | 302.06 ns | 30.67 ns | 2,358.3 ns | 2,024.6 ns | 3,192.0 ns | 0.1411 |     - |     - |     984 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,482.1 ns |  71.36 ns | 210.41 ns | 21.04 ns | 2,436.6 ns | 2,154.6 ns | 3,046.6 ns | 0.1411 |     - |     - |     976 B |
