``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-ACHSPE : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|             Method |                        Categories |    quantity | format | culture |       Mean |    Error |   StdDev |  StdErr |        Min |        Max |     Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------- |---------------------------------- |------------ |------- |-------- |-----------:|---------:|---------:|--------:|-----------:|-----------:|-----------:|-------:|------:|------:|----------:|
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      v |         |   441.8 ns |  5.76 ns |  5.10 ns | 1.36 ns |   430.7 ns |   451.5 ns |   441.8 ns | 0.0100 |     - |     - |     192 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      v |         |   443.6 ns |  8.65 ns |  8.50 ns | 2.12 ns |   426.9 ns |   460.5 ns |   443.3 ns | 0.0100 |     - |     - |     192 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      a |         |   583.3 ns | 11.26 ns | 13.41 ns | 2.93 ns |   559.1 ns |   612.5 ns |   583.8 ns | 0.0334 |     - |     - |     640 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      a |         |   601.9 ns | 12.12 ns | 23.36 ns | 3.44 ns |   549.9 ns |   653.0 ns |   600.5 ns | 0.0334 |     - |     - |     640 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |     a2 |         |   763.8 ns | 15.03 ns | 14.76 ns | 3.69 ns |   737.8 ns |   797.9 ns |   760.5 ns | 0.0372 |     - |     - |     696 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |     a2 |         |   780.4 ns | 15.46 ns | 14.46 ns | 3.73 ns |   753.8 ns |   796.7 ns |   787.1 ns | 0.0372 |     - |     - |     696 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,303.1 ns | 26.09 ns | 24.40 ns | 6.30 ns | 1,243.9 ns | 1,348.2 ns | 1,298.6 ns | 0.0401 |     - |     - |     752 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,318.4 ns | 17.94 ns | 16.78 ns | 4.33 ns | 1,290.9 ns | 1,344.7 ns | 1,316.1 ns | 0.0401 |     - |     - |     752 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |      ? |         | 1,483.7 ns | 19.70 ns | 18.42 ns | 4.76 ns | 1,446.0 ns | 1,512.0 ns | 1,486.6 ns | 0.0496 |     - |     - |     952 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |      ? |         | 1,562.5 ns | 31.02 ns | 33.19 ns | 7.82 ns | 1,510.6 ns | 1,629.3 ns | 1,560.3 ns | 0.0496 |     - |     - |     952 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 1,590.3 ns | 26.36 ns | 24.66 ns | 6.37 ns | 1,554.9 ns | 1,640.2 ns | 1,596.3 ns | 0.0496 |     - |     - |     960 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 1,611.3 ns | 29.44 ns | 27.54 ns | 7.11 ns | 1,554.0 ns | 1,665.3 ns | 1,608.4 ns | 0.0496 |     - |     - |     960 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      ? |         | 1,646.0 ns | 31.81 ns | 35.36 ns | 8.11 ns | 1,589.4 ns | 1,713.0 ns | 1,640.1 ns | 0.0496 |     - |     - |     960 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 1,662.9 ns | 32.05 ns | 34.30 ns | 8.08 ns | 1,610.5 ns | 1,715.5 ns | 1,666.3 ns | 0.0515 |     - |     - |     992 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      ? |         | 1,671.6 ns | 24.48 ns | 21.70 ns | 5.80 ns | 1,626.0 ns | 1,709.0 ns | 1,675.7 ns | 0.0496 |     - |     - |     960 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 1,682.1 ns | 29.68 ns | 27.76 ns | 7.17 ns | 1,645.7 ns | 1,733.8 ns | 1,673.9 ns | 0.0515 |     - |     - |     992 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |         | 1,718.2 ns | 33.17 ns | 31.03 ns | 8.01 ns | 1,667.4 ns | 1,764.7 ns | 1,713.6 ns | 0.0515 |     - |     - |     976 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |         | 1,753.4 ns | 20.22 ns | 17.93 ns | 4.79 ns | 1,722.5 ns | 1,784.7 ns | 1,751.9 ns | 0.0515 |     - |     - |     976 B |
