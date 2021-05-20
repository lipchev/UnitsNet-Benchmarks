``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-XMLZWF : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|             Method |                        Categories |    quantity | format | culture |       Mean |     Error |   StdDev |   StdErr |        Min |        Max |     Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------- |---------------------------------- |------------ |------- |-------- |-----------:|----------:|---------:|---------:|-----------:|-----------:|-----------:|-------:|------:|------:|----------:|
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      v |         |   453.5 ns |  42.83 ns |  2.35 ns |  1.36 ns |   450.9 ns |   455.4 ns |   454.2 ns | 0.0119 |     - |     - |     192 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      v |         |   456.3 ns |  29.48 ns |  1.62 ns |  0.93 ns |   455.0 ns |   458.1 ns |   455.9 ns | 0.0119 |     - |     - |     192 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      a |         |   642.0 ns |  84.03 ns |  4.61 ns |  2.66 ns |   638.6 ns |   647.2 ns |   640.2 ns | 0.0401 |     - |     - |     640 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      a |         |   691.4 ns | 106.40 ns |  5.83 ns |  3.37 ns |   687.0 ns |   698.0 ns |   689.1 ns | 0.0401 |     - |     - |     640 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |     a2 |         |   773.3 ns | 454.92 ns | 24.94 ns | 14.40 ns |   744.8 ns |   790.8 ns |   784.4 ns | 0.0439 |     - |     - |     696 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |     a2 |         |   792.6 ns | 461.88 ns | 25.32 ns | 14.62 ns |   764.7 ns |   814.1 ns |   799.0 ns | 0.0439 |     - |     - |     696 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,324.7 ns |  84.16 ns |  4.61 ns |  2.66 ns | 1,320.5 ns | 1,329.6 ns | 1,324.0 ns | 0.0477 |     - |     - |     752 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,406.0 ns | 424.73 ns | 23.28 ns | 13.44 ns | 1,385.4 ns | 1,431.3 ns | 1,401.4 ns | 0.0477 |     - |     - |     752 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 1,509.8 ns | 643.21 ns | 35.26 ns | 20.36 ns | 1,484.6 ns | 1,550.1 ns | 1,494.8 ns | 0.0610 |     - |     - |     960 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |      ? |         | 1,527.7 ns | 494.54 ns | 27.11 ns | 15.65 ns | 1,498.6 ns | 1,552.2 ns | 1,532.4 ns | 0.0591 |     - |     - |     952 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 1,602.0 ns | 402.89 ns | 22.08 ns | 12.75 ns | 1,581.7 ns | 1,625.5 ns | 1,598.7 ns | 0.0610 |     - |     - |     960 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |      ? |         | 1,607.4 ns | 274.90 ns | 15.07 ns |  8.70 ns | 1,590.0 ns | 1,616.2 ns | 1,616.0 ns | 0.0591 |     - |     - |     952 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 1,631.2 ns | 436.11 ns | 23.90 ns | 13.80 ns | 1,604.3 ns | 1,649.9 ns | 1,639.5 ns | 0.0629 |     - |     - |     992 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      ? |         | 1,662.9 ns | 253.33 ns | 13.89 ns |  8.02 ns | 1,649.3 ns | 1,677.1 ns | 1,662.3 ns | 0.0610 |     - |     - |     960 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |         | 1,743.6 ns | 370.82 ns | 20.33 ns | 11.74 ns | 1,721.2 ns | 1,760.8 ns | 1,748.9 ns | 0.0610 |     - |     - |     976 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      ? |         | 1,753.1 ns | 445.30 ns | 24.41 ns | 14.09 ns | 1,737.2 ns | 1,781.2 ns | 1,740.9 ns | 0.0610 |     - |     - |     960 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 1,767.9 ns | 157.04 ns |  8.61 ns |  4.97 ns | 1,760.2 ns | 1,777.2 ns | 1,766.4 ns | 0.0629 |     - |     - |     992 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |         | 1,769.1 ns | 198.04 ns | 10.86 ns |  6.27 ns | 1,756.8 ns | 1,777.4 ns | 1,773.0 ns | 0.0610 |     - |     - |     976 B |
