``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-LNIBCG : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|             Method |                        Categories |    quantity | format | culture |       Mean |    Error |   StdDev |  StdErr |        Min |        Max |     Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------- |---------------------------------- |------------ |------- |-------- |-----------:|---------:|---------:|--------:|-----------:|-----------:|-----------:|-------:|------:|------:|----------:|
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      v |         |   459.5 ns |  7.89 ns |  7.38 ns | 1.91 ns |   448.4 ns |   471.5 ns |   458.8 ns | 0.0100 |     - |     - |     192 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      v |         |   460.0 ns |  8.79 ns |  8.23 ns | 2.12 ns |   448.2 ns |   473.8 ns |   459.7 ns | 0.0100 |     - |     - |     192 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      a |         |   654.5 ns | 11.05 ns |  9.79 ns | 2.62 ns |   642.9 ns |   673.3 ns |   652.1 ns | 0.0334 |     - |     - |     640 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      a |         |   660.9 ns | 13.19 ns | 24.78 ns | 3.74 ns |   624.6 ns |   722.3 ns |   658.1 ns | 0.0334 |     - |     - |     640 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |     a2 |         |   799.8 ns | 12.90 ns | 12.07 ns | 3.12 ns |   784.8 ns |   827.1 ns |   800.3 ns | 0.0372 |     - |     - |     696 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |     a2 |         |   821.3 ns | 16.54 ns | 19.69 ns | 4.30 ns |   791.4 ns |   862.6 ns |   816.5 ns | 0.0372 |     - |     - |     696 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,370.0 ns | 27.47 ns | 36.67 ns | 7.33 ns | 1,324.2 ns | 1,450.2 ns | 1,361.6 ns | 0.0401 |     - |     - |     752 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,382.2 ns | 22.59 ns | 21.13 ns | 5.46 ns | 1,356.8 ns | 1,422.7 ns | 1,378.4 ns | 0.0401 |     - |     - |     752 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |      ? |         | 1,600.4 ns | 31.05 ns | 31.88 ns | 7.73 ns | 1,553.6 ns | 1,651.7 ns | 1,599.1 ns | 0.0496 |     - |     - |     952 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |      ? |         | 1,632.7 ns | 27.80 ns | 37.11 ns | 7.42 ns | 1,575.2 ns | 1,698.4 ns | 1,625.0 ns | 0.0496 |     - |     - |     952 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 1,669.4 ns | 28.28 ns | 34.73 ns | 7.40 ns | 1,621.3 ns | 1,743.6 ns | 1,660.4 ns | 0.0496 |     - |     - |     960 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      ? |         | 1,674.7 ns | 32.75 ns | 36.40 ns | 8.35 ns | 1,630.4 ns | 1,762.0 ns | 1,666.6 ns | 0.0496 |     - |     - |     960 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 1,685.4 ns | 33.33 ns | 37.05 ns | 8.50 ns | 1,641.7 ns | 1,769.8 ns | 1,674.8 ns | 0.0515 |     - |     - |     992 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 1,713.1 ns | 21.67 ns | 20.27 ns | 5.23 ns | 1,688.0 ns | 1,752.5 ns | 1,708.2 ns | 0.0515 |     - |     - |     992 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 1,746.8 ns | 34.17 ns | 44.43 ns | 9.07 ns | 1,668.2 ns | 1,853.0 ns | 1,743.0 ns | 0.0496 |     - |     - |     960 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      ? |         | 1,762.3 ns | 35.00 ns | 47.90 ns | 9.39 ns | 1,703.4 ns | 1,877.1 ns | 1,743.3 ns | 0.0496 |     - |     - |     960 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |         | 1,790.0 ns | 32.88 ns | 27.46 ns | 7.62 ns | 1,757.4 ns | 1,833.9 ns | 1,784.9 ns | 0.0515 |     - |     - |     976 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |         | 1,867.3 ns | 37.36 ns | 36.70 ns | 9.17 ns | 1,821.2 ns | 1,936.2 ns | 1,859.5 ns | 0.0515 |     - |     - |     976 B |
