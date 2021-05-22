``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-SUMLBI : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|             Method |                        Categories |    quantity | format | culture |       Mean |    Error |   StdDev |   StdErr |        Min |        Max |     Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------- |---------------------------------- |------------ |------- |-------- |-----------:|---------:|---------:|---------:|-----------:|-----------:|-----------:|-------:|------:|------:|----------:|
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      a |         |   736.5 ns | 11.82 ns |  9.87 ns |  2.74 ns |   708.6 ns |   749.8 ns |   738.4 ns | 0.1097 |     - |     - |     714 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      a |         |   748.0 ns | 14.36 ns | 13.44 ns |  3.47 ns |   731.2 ns |   768.3 ns |   745.0 ns | 0.1097 |     - |     - |     714 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      v |         | 1,004.9 ns | 19.46 ns | 19.98 ns |  4.85 ns |   972.8 ns | 1,045.5 ns | 1,000.9 ns | 0.0267 |     - |     - |     217 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      v |         | 1,015.6 ns | 20.03 ns | 19.67 ns |  4.92 ns |   972.7 ns | 1,052.6 ns | 1,020.1 ns | 0.0267 |     - |     - |     217 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |     a2 |         | 1,046.9 ns | 18.95 ns | 17.73 ns |  4.58 ns | 1,023.6 ns | 1,084.1 ns | 1,042.9 ns | 0.1144 |     - |     - |     762 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |     a2 |         | 1,067.2 ns | 17.94 ns | 16.78 ns |  4.33 ns | 1,036.2 ns | 1,086.2 ns | 1,071.6 ns | 0.1144 |     - |     - |     762 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |     f2 |         | 2,264.7 ns | 41.42 ns | 36.72 ns |  9.81 ns | 2,183.4 ns | 2,309.3 ns | 2,273.9 ns | 0.1526 |     - |     - |    1051 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |     f2 |         | 2,347.6 ns | 45.33 ns | 46.55 ns | 11.29 ns | 2,247.1 ns | 2,423.5 ns | 2,353.7 ns | 0.1526 |     - |     - |    1051 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,632.8 ns | 50.88 ns | 66.16 ns | 13.51 ns | 2,508.2 ns | 2,775.6 ns | 2,629.0 ns | 0.1869 |     - |     - |    1276 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,640.4 ns | 41.12 ns | 36.45 ns |  9.74 ns | 2,575.6 ns | 2,704.3 ns | 2,641.5 ns | 0.1907 |     - |     - |    1284 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,717.6 ns | 47.63 ns | 42.22 ns | 11.28 ns | 2,640.5 ns | 2,805.6 ns | 2,719.0 ns | 0.1869 |     - |     - |    1276 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,735.9 ns | 51.49 ns | 48.16 ns | 12.44 ns | 2,656.8 ns | 2,821.1 ns | 2,736.2 ns | 0.1907 |     - |     - |    1284 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,813.3 ns | 55.65 ns | 70.38 ns | 14.67 ns | 2,716.8 ns | 2,968.0 ns | 2,803.0 ns | 0.1907 |     - |     - |    1284 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,847.2 ns | 55.15 ns | 59.01 ns | 13.91 ns | 2,748.3 ns | 2,970.0 ns | 2,839.7 ns | 0.1869 |     - |     - |    1276 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,860.7 ns | 56.19 ns | 66.89 ns | 14.60 ns | 2,721.2 ns | 2,980.2 ns | 2,867.5 ns | 0.1907 |     - |     - |    1284 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,903.6 ns | 44.29 ns | 39.26 ns | 10.49 ns | 2,850.4 ns | 2,984.7 ns | 2,888.7 ns | 0.1869 |     - |     - |    1276 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 3,004.7 ns | 57.35 ns | 63.74 ns | 14.62 ns | 2,917.5 ns | 3,124.3 ns | 2,986.8 ns | 0.1984 |     - |     - |    1340 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 3,096.8 ns | 60.75 ns | 62.39 ns | 15.13 ns | 2,979.1 ns | 3,199.7 ns | 3,084.6 ns | 0.1984 |     - |     - |    1340 B |
