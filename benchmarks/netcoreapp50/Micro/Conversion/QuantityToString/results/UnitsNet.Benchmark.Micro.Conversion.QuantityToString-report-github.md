``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-VOJHRM : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|             Method |                        Categories |    quantity | format | culture |       Mean |    Error |   StdDev |  StdErr |        Min |        Max |     Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------- |---------------------------------- |------------ |------- |-------- |-----------:|---------:|---------:|--------:|-----------:|-----------:|-----------:|-------:|------:|------:|----------:|
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      v |         |   391.0 ns |  6.69 ns |  6.26 ns | 1.62 ns |   381.5 ns |   404.9 ns |   389.7 ns | 0.0072 |     - |     - |     192 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      v |         |   398.1 ns |  6.97 ns |  8.03 ns | 1.80 ns |   381.6 ns |   415.8 ns |   395.7 ns | 0.0072 |     - |     - |     192 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      a |         |   545.2 ns | 10.21 ns |  9.55 ns | 2.47 ns |   518.3 ns |   556.3 ns |   549.2 ns | 0.0238 |     - |     - |     640 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      a |         |   555.7 ns | 10.91 ns | 22.28 ns | 3.12 ns |   516.6 ns |   608.4 ns |   551.5 ns | 0.0238 |     - |     - |     640 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |     a2 |         |   685.5 ns | 13.67 ns | 16.27 ns | 3.55 ns |   655.7 ns |   712.8 ns |   683.9 ns | 0.0257 |     - |     - |     696 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |     a2 |         |   725.7 ns |  9.28 ns |  7.75 ns | 2.15 ns |   715.1 ns |   739.8 ns |   724.4 ns | 0.0257 |     - |     - |     696 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,125.4 ns | 19.80 ns | 23.57 ns | 5.14 ns | 1,081.9 ns | 1,164.6 ns | 1,125.2 ns | 0.0286 |     - |     - |     752 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,138.8 ns | 22.14 ns | 31.03 ns | 5.97 ns | 1,084.5 ns | 1,208.6 ns | 1,136.6 ns | 0.0286 |     - |     - |     752 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |      ? |         | 1,363.6 ns | 26.79 ns | 40.91 ns | 7.35 ns | 1,294.0 ns | 1,451.3 ns | 1,360.0 ns | 0.0362 |     - |     - |     952 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |      ? |         | 1,380.5 ns | 26.84 ns | 31.95 ns | 6.97 ns | 1,324.6 ns | 1,449.4 ns | 1,375.0 ns | 0.0362 |     - |     - |     952 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      ? |         | 1,425.9 ns | 27.55 ns | 35.83 ns | 7.31 ns | 1,374.9 ns | 1,511.7 ns | 1,419.2 ns | 0.0362 |     - |     - |     960 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 1,475.7 ns | 28.61 ns | 36.18 ns | 7.54 ns | 1,407.8 ns | 1,540.5 ns | 1,480.7 ns | 0.0362 |     - |     - |     960 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      ? |         | 1,484.8 ns | 29.57 ns | 41.46 ns | 7.98 ns | 1,374.2 ns | 1,545.1 ns | 1,489.8 ns | 0.0362 |     - |     - |     960 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 1,492.6 ns | 28.90 ns | 37.58 ns | 7.67 ns | 1,427.6 ns | 1,564.6 ns | 1,486.8 ns | 0.0362 |     - |     - |     960 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 1,515.4 ns | 30.14 ns | 44.18 ns | 8.20 ns | 1,442.0 ns | 1,605.9 ns | 1,527.2 ns | 0.0362 |     - |     - |     992 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 1,551.2 ns | 26.09 ns | 25.63 ns | 6.41 ns | 1,511.2 ns | 1,598.4 ns | 1,550.5 ns | 0.0362 |     - |     - |     992 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |         | 1,562.9 ns | 27.05 ns | 25.30 ns | 6.53 ns | 1,509.8 ns | 1,603.8 ns | 1,564.6 ns | 0.0362 |     - |     - |     976 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |         | 1,601.1 ns | 20.84 ns | 19.50 ns | 5.03 ns | 1,564.8 ns | 1,640.5 ns | 1,599.7 ns | 0.0362 |     - |     - |     976 B |
