``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-EUVQRP : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|             Method |                        Categories |    quantity | format | culture |       Mean |    Error |   StdDev |  StdErr |        Min |        Max |     Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------- |---------------------------------- |------------ |------- |-------- |-----------:|---------:|---------:|--------:|-----------:|-----------:|-----------:|-------:|------:|------:|----------:|
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      v |         |   437.5 ns |  8.64 ns |  8.87 ns | 2.15 ns |   419.6 ns |   450.1 ns |   438.6 ns | 0.0119 |     - |     - |     192 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      v |         |   444.7 ns |  8.96 ns |  8.80 ns | 2.20 ns |   425.2 ns |   459.2 ns |   444.8 ns | 0.0119 |     - |     - |     192 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      a |         |   577.6 ns | 11.57 ns | 16.96 ns | 3.15 ns |   550.5 ns |   613.4 ns |   573.5 ns | 0.0401 |     - |     - |     640 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      a |         |   581.3 ns | 11.67 ns | 12.98 ns | 2.98 ns |   558.3 ns |   603.7 ns |   581.0 ns | 0.0401 |     - |     - |     640 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |     a2 |         |   714.7 ns | 14.34 ns | 18.13 ns | 3.78 ns |   681.8 ns |   744.3 ns |   714.1 ns | 0.0439 |     - |     - |     696 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |     a2 |         |   724.9 ns | 13.08 ns | 12.24 ns | 3.16 ns |   704.0 ns |   743.7 ns |   726.3 ns | 0.0439 |     - |     - |     696 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,253.5 ns | 23.65 ns | 22.12 ns | 5.71 ns | 1,213.0 ns | 1,290.8 ns | 1,255.7 ns | 0.0477 |     - |     - |     752 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,284.6 ns | 23.96 ns | 34.36 ns | 6.49 ns | 1,229.8 ns | 1,366.7 ns | 1,282.1 ns | 0.0477 |     - |     - |     752 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |      ? |         | 1,474.4 ns | 27.78 ns | 28.53 ns | 6.92 ns | 1,437.6 ns | 1,518.5 ns | 1,474.0 ns | 0.0591 |     - |     - |     952 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 1,512.0 ns | 24.38 ns | 26.08 ns | 6.15 ns | 1,468.3 ns | 1,550.9 ns | 1,519.2 ns | 0.0610 |     - |     - |     960 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 1,514.6 ns | 30.36 ns | 33.74 ns | 7.74 ns | 1,451.2 ns | 1,573.0 ns | 1,517.8 ns | 0.0610 |     - |     - |     960 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |      ? |         | 1,520.6 ns | 29.89 ns | 36.71 ns | 7.83 ns | 1,446.4 ns | 1,582.0 ns | 1,523.9 ns | 0.0591 |     - |     - |     952 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      ? |         | 1,575.0 ns | 30.73 ns | 32.88 ns | 7.75 ns | 1,527.1 ns | 1,631.2 ns | 1,574.6 ns | 0.0610 |     - |     - |     960 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 1,622.4 ns | 23.86 ns | 19.92 ns | 5.53 ns | 1,580.6 ns | 1,647.6 ns | 1,631.0 ns | 0.0629 |     - |     - |     992 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      ? |         | 1,630.6 ns | 30.31 ns | 28.35 ns | 7.32 ns | 1,592.2 ns | 1,689.7 ns | 1,617.2 ns | 0.0610 |     - |     - |     960 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 1,634.8 ns | 31.88 ns | 29.82 ns | 7.70 ns | 1,575.0 ns | 1,696.7 ns | 1,639.5 ns | 0.0629 |     - |     - |     992 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |         | 1,777.2 ns | 33.99 ns | 40.46 ns | 8.83 ns | 1,704.8 ns | 1,859.2 ns | 1,770.5 ns | 0.0610 |     - |     - |     976 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |         | 1,783.9 ns | 34.20 ns | 36.59 ns | 8.62 ns | 1,734.4 ns | 1,862.9 ns | 1,777.8 ns | 0.0610 |     - |     - |     976 B |
