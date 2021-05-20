``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-MLEGZR : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|             Method |                        Categories |    quantity | format | culture |       Mean |    Error |    StdDev |   StdErr |     Median |        Min |        Max |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------- |---------------------------------- |------------ |------- |-------- |-----------:|---------:|----------:|---------:|-----------:|-----------:|-----------:|-------:|------:|------:|----------:|
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      a |         |   639.9 ns | 12.82 ns |  30.72 ns |  3.73 ns |   632.3 ns |   595.9 ns |   706.3 ns | 0.1097 |     - |     - |     714 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      a |         |   706.7 ns | 11.68 ns |  10.35 ns |  2.77 ns |   705.9 ns |   687.7 ns |   729.1 ns | 0.1097 |     - |     - |     714 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      v |         |   838.3 ns | 12.78 ns |   9.98 ns |  2.88 ns |   842.2 ns |   815.9 ns |   849.3 ns | 0.0305 |     - |     - |     217 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      v |         |   839.6 ns | 16.49 ns |  16.93 ns |  4.11 ns |   840.5 ns |   809.2 ns |   872.2 ns | 0.0305 |     - |     - |     217 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |     a2 |         |   863.6 ns | 11.42 ns |  10.13 ns |  2.71 ns |   861.9 ns |   846.4 ns |   881.3 ns | 0.1173 |     - |     - |     762 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |     a2 |         |   866.0 ns | 12.56 ns |  10.49 ns |  2.91 ns |   864.6 ns |   849.3 ns |   881.9 ns | 0.1173 |     - |     - |     762 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,913.0 ns | 38.33 ns |  48.48 ns | 10.11 ns | 1,910.7 ns | 1,853.5 ns | 2,003.7 ns | 0.1526 |     - |     - |    1051 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,943.6 ns | 34.01 ns |  30.15 ns |  8.06 ns | 1,946.4 ns | 1,876.9 ns | 1,987.8 ns | 0.1526 |     - |     - |    1051 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,182.9 ns | 42.38 ns |  48.81 ns | 10.91 ns | 2,180.4 ns | 2,096.6 ns | 2,291.0 ns | 0.1907 |     - |     - |    1284 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,249.4 ns | 44.04 ns |  43.25 ns | 10.81 ns | 2,249.7 ns | 2,160.9 ns | 2,315.7 ns | 0.1869 |     - |     - |    1276 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,255.7 ns | 42.09 ns |  51.69 ns | 11.02 ns | 2,241.4 ns | 2,189.1 ns | 2,395.4 ns | 0.1907 |     - |     - |    1284 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,362.8 ns | 45.72 ns |  46.95 ns | 11.39 ns | 2,364.9 ns | 2,269.4 ns | 2,454.9 ns | 0.1869 |     - |     - |    1276 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,363.5 ns | 28.85 ns |  24.09 ns |  6.68 ns | 2,359.6 ns | 2,337.2 ns | 2,427.0 ns | 0.1907 |     - |     - |    1284 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,370.9 ns | 23.03 ns |  20.41 ns |  5.46 ns | 2,372.7 ns | 2,336.2 ns | 2,406.9 ns | 0.1869 |     - |     - |    1276 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,507.6 ns | 50.08 ns | 146.09 ns | 14.76 ns | 2,562.6 ns | 2,222.2 ns | 2,720.4 ns | 0.1869 |     - |     - |    1276 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,571.5 ns | 51.23 ns | 106.94 ns | 14.69 ns | 2,548.7 ns | 2,385.9 ns | 2,806.8 ns | 0.1907 |     - |     - |    1284 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,593.2 ns | 51.17 ns | 109.04 ns | 14.70 ns | 2,567.4 ns | 2,412.5 ns | 2,864.8 ns | 0.1984 |     - |     - |    1340 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,654.8 ns | 52.23 ns |  60.15 ns | 13.45 ns | 2,657.2 ns | 2,485.0 ns | 2,734.1 ns | 0.1984 |     - |     - |    1340 B |
