``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-UGCAAT : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|             Method |                        Categories |    quantity | format | culture |       Mean |    Error |   StdDev |   StdErr |        Min |        Max |     Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------- |---------------------------------- |------------ |------- |-------- |-----------:|---------:|---------:|---------:|-----------:|-----------:|-----------:|-------:|------:|------:|----------:|
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      v |         |   484.0 ns |  9.54 ns | 10.20 ns |  2.41 ns |   469.5 ns |   507.4 ns |   482.7 ns | 0.0267 |     - |     - |     192 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      v |         |   490.3 ns |  9.50 ns | 11.66 ns |  2.49 ns |   461.2 ns |   511.2 ns |   491.6 ns | 0.0267 |     - |     - |     192 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      a |         |   821.1 ns | 16.43 ns | 16.88 ns |  4.09 ns |   790.0 ns |   850.6 ns |   822.0 ns | 0.0992 |     - |     - |     648 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      a |         |   835.5 ns | 16.73 ns | 28.40 ns |  4.67 ns |   786.8 ns |   893.9 ns |   831.1 ns | 0.0992 |     - |     - |     648 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |     a2 |         | 1,151.3 ns | 22.59 ns | 35.16 ns |  6.22 ns | 1,087.9 ns | 1,231.5 ns | 1,148.2 ns | 0.1068 |     - |     - |     712 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |     a2 |         | 1,200.1 ns | 22.14 ns | 19.63 ns |  5.25 ns | 1,163.7 ns | 1,236.9 ns | 1,200.6 ns | 0.1068 |     - |     - |     712 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,640.9 ns | 32.69 ns | 30.58 ns |  7.90 ns | 1,583.4 ns | 1,689.1 ns | 1,634.1 ns | 0.1144 |     - |     - |     768 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,652.9 ns | 32.24 ns | 44.13 ns |  8.65 ns | 1,513.5 ns | 1,729.7 ns | 1,659.5 ns | 0.1144 |     - |     - |     768 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,243.1 ns | 43.30 ns | 56.30 ns | 11.49 ns | 2,137.8 ns | 2,356.3 ns | 2,223.2 ns | 0.1411 |     - |     - |     968 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,261.1 ns | 44.29 ns | 47.39 ns | 11.17 ns | 2,169.9 ns | 2,339.6 ns | 2,253.8 ns | 0.1411 |     - |     - |     976 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,272.3 ns | 43.98 ns | 45.17 ns | 10.95 ns | 2,193.0 ns | 2,334.9 ns | 2,262.5 ns | 0.1411 |     - |     - |     976 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,338.5 ns | 46.60 ns | 73.91 ns | 12.87 ns | 2,181.0 ns | 2,481.6 ns | 2,340.5 ns | 0.1411 |     - |     - |     976 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,360.3 ns | 46.29 ns | 58.54 ns | 12.21 ns | 2,247.5 ns | 2,466.5 ns | 2,364.7 ns | 0.1411 |     - |     - |     976 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,473.8 ns | 46.75 ns | 50.03 ns | 11.79 ns | 2,394.4 ns | 2,568.7 ns | 2,476.6 ns | 0.1411 |     - |     - |     984 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,474.1 ns | 48.46 ns | 53.86 ns | 12.36 ns | 2,412.2 ns | 2,571.8 ns | 2,464.9 ns | 0.1411 |     - |     - |     984 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,514.4 ns | 48.68 ns | 72.86 ns | 13.30 ns | 2,346.4 ns | 2,653.6 ns | 2,515.7 ns | 0.1488 |     - |     - |    1024 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,519.3 ns | 49.86 ns | 81.93 ns | 13.85 ns | 2,390.8 ns | 2,722.2 ns | 2,503.9 ns | 0.1411 |     - |     - |     968 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,695.6 ns | 51.25 ns | 64.81 ns | 13.51 ns | 2,563.2 ns | 2,820.6 ns | 2,694.3 ns | 0.1488 |     - |     - |    1024 B |
