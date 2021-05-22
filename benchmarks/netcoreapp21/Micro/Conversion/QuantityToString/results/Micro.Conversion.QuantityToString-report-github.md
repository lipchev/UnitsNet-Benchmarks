``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-XKYCLW : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|             Method |                        Categories |    quantity | format | culture |       Mean |    Error |   StdDev |   StdErr |        Min |        Max |     Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------- |---------------------------------- |------------ |------- |-------- |-----------:|---------:|---------:|---------:|-----------:|-----------:|-----------:|-------:|------:|------:|----------:|
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      v |         |   500.1 ns |  8.00 ns |  7.48 ns |  1.93 ns |   486.4 ns |   511.6 ns |   496.8 ns | 0.0286 |     - |     - |     192 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      v |         |   503.1 ns |  9.63 ns |  9.01 ns |  2.33 ns |   487.9 ns |   522.0 ns |   502.9 ns | 0.0286 |     - |     - |     192 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      a |         |   964.5 ns | 16.50 ns | 14.63 ns |  3.91 ns |   935.3 ns |   982.7 ns |   965.5 ns | 0.0992 |     - |     - |     648 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      a |         |   967.6 ns | 13.68 ns | 12.79 ns |  3.30 ns |   942.3 ns |   988.0 ns |   967.9 ns | 0.1011 |     - |     - |     648 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |     a2 |         | 1,266.6 ns | 24.10 ns | 22.54 ns |  5.82 ns | 1,235.2 ns | 1,314.0 ns | 1,266.7 ns | 0.1087 |     - |     - |     712 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |     a2 |         | 1,315.0 ns | 25.94 ns | 29.87 ns |  6.68 ns | 1,270.6 ns | 1,385.0 ns | 1,312.4 ns | 0.1087 |     - |     - |     712 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,780.6 ns | 34.87 ns | 35.80 ns |  8.68 ns | 1,718.4 ns | 1,858.0 ns | 1,776.6 ns | 0.1183 |     - |     - |     768 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,785.7 ns | 32.86 ns | 29.13 ns |  7.79 ns | 1,727.9 ns | 1,831.9 ns | 1,785.1 ns | 0.1183 |     - |     - |     768 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,468.2 ns | 41.25 ns | 36.56 ns |  9.77 ns | 2,409.9 ns | 2,535.3 ns | 2,464.3 ns | 0.1450 |     - |     - |     976 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,526.9 ns | 44.55 ns | 41.67 ns | 10.76 ns | 2,440.1 ns | 2,606.6 ns | 2,519.0 ns | 0.1450 |     - |     - |     976 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,527.7 ns | 32.86 ns | 30.74 ns |  7.94 ns | 2,486.6 ns | 2,600.4 ns | 2,526.5 ns | 0.1450 |     - |     - |     968 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,551.4 ns | 49.72 ns | 77.41 ns | 13.68 ns | 2,441.6 ns | 2,699.7 ns | 2,551.8 ns | 0.1450 |     - |     - |     976 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,564.3 ns | 50.27 ns | 70.47 ns | 13.56 ns | 2,425.9 ns | 2,708.4 ns | 2,548.0 ns | 0.1450 |     - |     - |     976 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,584.1 ns | 40.26 ns | 37.66 ns |  9.72 ns | 2,513.1 ns | 2,656.4 ns | 2,583.5 ns | 0.1450 |     - |     - |     968 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,678.2 ns | 47.45 ns | 50.77 ns | 11.97 ns | 2,595.9 ns | 2,766.9 ns | 2,678.3 ns | 0.1526 |     - |     - |    1024 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,678.9 ns | 52.49 ns | 51.55 ns | 12.89 ns | 2,557.5 ns | 2,747.5 ns | 2,684.8 ns | 0.1488 |     - |     - |     984 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,681.6 ns | 46.28 ns | 43.29 ns | 11.18 ns | 2,601.3 ns | 2,750.0 ns | 2,685.9 ns | 0.1488 |     - |     - |     984 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,776.2 ns | 50.90 ns | 47.61 ns | 12.29 ns | 2,693.6 ns | 2,859.1 ns | 2,789.0 ns | 0.1526 |     - |     - |    1024 B |
