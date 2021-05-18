``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-UBAWFN : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|             Method |                        Categories |    quantity | format | culture |       Mean |    Error |   StdDev |   StdErr |     Median |        Min |        Max |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------- |---------------------------------- |------------ |------- |-------- |-----------:|---------:|---------:|---------:|-----------:|-----------:|-----------:|-------:|------:|------:|----------:|
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      v |         |   458.2 ns |  9.25 ns | 24.70 ns |  2.71 ns |   466.3 ns |   404.2 ns |   506.0 ns | 0.0067 |     - |     - |     192 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      v |         |   477.5 ns |  9.59 ns |  9.85 ns |  2.39 ns |   476.1 ns |   463.0 ns |   496.1 ns | 0.0067 |     - |     - |     192 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      a |         |   641.6 ns | 12.82 ns | 20.70 ns |  3.55 ns |   644.6 ns |   600.7 ns |   684.6 ns | 0.0238 |     - |     - |     640 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      a |         |   655.6 ns | 13.04 ns | 28.07 ns |  3.75 ns |   655.3 ns |   604.6 ns |   709.1 ns | 0.0238 |     - |     - |     640 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |     a2 |         |   838.5 ns | 16.47 ns | 24.65 ns |  4.50 ns |   842.4 ns |   796.9 ns |   887.1 ns | 0.0257 |     - |     - |     696 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |     a2 |         |   876.8 ns | 13.18 ns | 12.33 ns |  3.18 ns |   873.6 ns |   861.3 ns |   901.8 ns | 0.0257 |     - |     - |     696 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,318.4 ns | 24.43 ns | 22.85 ns |  5.90 ns | 1,310.4 ns | 1,287.6 ns | 1,353.5 ns | 0.0286 |     - |     - |     752 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,383.5 ns | 27.51 ns | 43.64 ns |  7.60 ns | 1,389.0 ns | 1,317.5 ns | 1,455.1 ns | 0.0286 |     - |     - |     752 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |      ? |         | 1,640.9 ns | 32.77 ns | 33.66 ns |  8.16 ns | 1,638.2 ns | 1,582.7 ns | 1,705.5 ns | 0.0362 |     - |     - |     952 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      ? |         | 1,691.3 ns | 33.54 ns | 55.11 ns |  9.32 ns | 1,693.1 ns | 1,582.4 ns | 1,803.1 ns | 0.0362 |     - |     - |     960 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |      ? |         | 1,693.0 ns | 33.46 ns | 50.09 ns |  9.14 ns | 1,698.7 ns | 1,526.4 ns | 1,760.3 ns | 0.0362 |     - |     - |     952 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 1,710.8 ns | 34.06 ns | 33.46 ns |  8.36 ns | 1,708.3 ns | 1,654.6 ns | 1,770.4 ns | 0.0362 |     - |     - |     992 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      ? |         | 1,715.4 ns | 33.88 ns | 61.10 ns |  9.54 ns | 1,706.6 ns | 1,627.7 ns | 1,869.9 ns | 0.0362 |     - |     - |     960 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 1,743.3 ns | 27.57 ns | 25.79 ns |  6.66 ns | 1,734.9 ns | 1,713.4 ns | 1,794.1 ns | 0.0362 |     - |     - |     992 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 1,793.6 ns | 35.92 ns | 49.16 ns |  9.64 ns | 1,803.2 ns | 1,667.7 ns | 1,859.9 ns | 0.0362 |     - |     - |     960 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 1,830.1 ns | 32.54 ns | 80.43 ns |  9.48 ns | 1,814.1 ns | 1,651.1 ns | 2,035.4 ns | 0.0362 |     - |     - |     960 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |         | 1,889.3 ns | 37.51 ns | 61.64 ns | 10.42 ns | 1,890.8 ns | 1,749.8 ns | 2,050.6 ns | 0.0362 |     - |     - |     976 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |         | 1,901.9 ns | 38.09 ns | 89.79 ns | 11.05 ns | 1,921.3 ns | 1,639.5 ns | 2,079.4 ns | 0.0343 |     - |     - |     976 B |
