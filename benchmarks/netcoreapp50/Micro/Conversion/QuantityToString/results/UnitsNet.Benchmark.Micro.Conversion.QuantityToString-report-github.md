``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-HPQUSD : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|             Method |                        Categories |    quantity | format | culture |       Mean |    Error |   StdDev |  StdErr |        Min |        Max |     Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------- |---------------------------------- |------------ |------- |-------- |-----------:|---------:|---------:|--------:|-----------:|-----------:|-----------:|-------:|------:|------:|----------:|
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      v |         |   371.0 ns |  7.51 ns | 11.69 ns | 2.07 ns |   351.0 ns |   397.0 ns |   369.9 ns | 0.0072 |     - |     - |     192 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      v |         |   371.7 ns |  7.39 ns |  8.21 ns | 1.88 ns |   353.0 ns |   383.3 ns |   372.3 ns | 0.0072 |     - |     - |     192 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      a |         |   497.8 ns |  9.48 ns | 17.80 ns | 2.68 ns |   468.4 ns |   533.3 ns |   495.0 ns | 0.0238 |     - |     - |     640 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      a |         |   508.8 ns | 10.20 ns | 21.30 ns | 2.93 ns |   476.6 ns |   567.8 ns |   503.6 ns | 0.0238 |     - |     - |     640 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |     a2 |         |   623.7 ns | 12.39 ns | 18.55 ns | 3.39 ns |   594.4 ns |   664.7 ns |   622.1 ns | 0.0257 |     - |     - |     696 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |     a2 |         |   639.6 ns | 12.65 ns | 22.15 ns | 3.55 ns |   597.3 ns |   680.3 ns |   637.4 ns | 0.0257 |     - |     - |     696 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,045.8 ns | 20.18 ns | 22.43 ns | 5.15 ns | 1,007.6 ns | 1,080.7 ns | 1,042.6 ns | 0.0286 |     - |     - |     752 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,192.9 ns | 22.62 ns | 22.22 ns | 5.55 ns | 1,158.1 ns | 1,235.3 ns | 1,193.8 ns | 0.0286 |     - |     - |     752 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |      ? |         | 1,237.6 ns | 24.63 ns | 40.46 ns | 6.84 ns | 1,180.5 ns | 1,319.3 ns | 1,226.9 ns | 0.0362 |     - |     - |     952 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |      ? |         | 1,259.6 ns | 25.25 ns | 35.39 ns | 6.81 ns | 1,201.8 ns | 1,330.2 ns | 1,254.3 ns | 0.0362 |     - |     - |     952 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 1,326.2 ns | 26.58 ns | 50.57 ns | 7.54 ns | 1,233.0 ns | 1,447.4 ns | 1,325.0 ns | 0.0362 |     - |     - |     960 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      ? |         | 1,341.9 ns | 26.90 ns | 46.41 ns | 7.53 ns | 1,251.9 ns | 1,431.5 ns | 1,337.7 ns | 0.0362 |     - |     - |     960 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 1,350.0 ns | 26.91 ns | 38.59 ns | 7.29 ns | 1,287.8 ns | 1,422.3 ns | 1,340.4 ns | 0.0362 |     - |     - |     960 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      ? |         | 1,369.5 ns | 26.57 ns | 37.25 ns | 7.17 ns | 1,306.3 ns | 1,463.4 ns | 1,364.9 ns | 0.0362 |     - |     - |     960 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 1,377.8 ns | 27.66 ns | 42.24 ns | 7.59 ns | 1,300.4 ns | 1,471.5 ns | 1,383.6 ns | 0.0362 |     - |     - |     992 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 1,427.5 ns | 28.21 ns | 46.34 ns | 7.83 ns | 1,354.0 ns | 1,549.7 ns | 1,414.5 ns | 0.0362 |     - |     - |     992 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |         | 1,429.8 ns | 28.67 ns | 52.43 ns | 8.09 ns | 1,353.1 ns | 1,566.1 ns | 1,419.2 ns | 0.0362 |     - |     - |     976 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |         | 1,528.8 ns | 30.39 ns | 67.98 ns | 8.78 ns | 1,422.0 ns | 1,708.9 ns | 1,522.5 ns | 0.0362 |     - |     - |     976 B |
