``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-MNZCJL : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|             Method |                        Categories |    quantity | format | culture |       Mean |       Error |    StdDev |   StdErr |        Min |        Max |     Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------- |---------------------------------- |------------ |------- |-------- |-----------:|------------:|----------:|---------:|-----------:|-----------:|-----------:|-------:|------:|------:|----------:|
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      v |         |   469.0 ns |   119.03 ns |   6.52 ns |  3.77 ns |   462.9 ns |   475.9 ns |   468.3 ns | 0.0267 |     - |     - |     192 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      v |         |   485.7 ns |    59.98 ns |   3.29 ns |  1.90 ns |   481.9 ns |   488.0 ns |   487.1 ns | 0.0267 |     - |     - |     192 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      a |         |   846.2 ns |   384.25 ns |  21.06 ns | 12.16 ns |   825.2 ns |   867.3 ns |   846.3 ns | 0.0992 |     - |     - |     648 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      a |         |   852.9 ns |   361.25 ns |  19.80 ns | 11.43 ns |   837.1 ns |   875.2 ns |   846.5 ns | 0.0992 |     - |     - |     648 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |     a2 |         | 1,155.8 ns |   817.95 ns |  44.83 ns | 25.89 ns | 1,127.1 ns | 1,207.5 ns | 1,132.9 ns | 0.1068 |     - |     - |     712 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |     a2 |         | 1,190.5 ns |   823.98 ns |  45.17 ns | 26.08 ns | 1,152.7 ns | 1,240.5 ns | 1,178.3 ns | 0.1068 |     - |     - |     712 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,600.1 ns |   428.18 ns |  23.47 ns | 13.55 ns | 1,573.0 ns | 1,614.4 ns | 1,612.9 ns | 0.1144 |     - |     - |     768 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,643.1 ns |   402.39 ns |  22.06 ns | 12.73 ns | 1,618.2 ns | 1,660.4 ns | 1,650.6 ns | 0.1144 |     - |     - |     768 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,273.4 ns |   416.89 ns |  22.85 ns | 13.19 ns | 2,249.2 ns | 2,294.6 ns | 2,276.4 ns | 0.1411 |     - |     - |     968 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,309.2 ns |   805.44 ns |  44.15 ns | 25.49 ns | 2,273.2 ns | 2,358.5 ns | 2,296.0 ns | 0.1411 |     - |     - |     976 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,329.6 ns | 1,793.28 ns |  98.30 ns | 56.75 ns | 2,264.0 ns | 2,442.6 ns | 2,282.2 ns | 0.1411 |     - |     - |     976 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,355.2 ns | 2,212.74 ns | 121.29 ns | 70.03 ns | 2,271.6 ns | 2,494.3 ns | 2,299.6 ns | 0.1411 |     - |     - |     976 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,426.7 ns |   306.14 ns |  16.78 ns |  9.69 ns | 2,407.9 ns | 2,439.9 ns | 2,432.4 ns | 0.1411 |     - |     - |     984 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,447.3 ns |   606.57 ns |  33.25 ns | 19.20 ns | 2,408.9 ns | 2,467.8 ns | 2,465.1 ns | 0.1411 |     - |     - |     968 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,496.0 ns |   262.35 ns |  14.38 ns |  8.30 ns | 2,480.8 ns | 2,509.3 ns | 2,497.9 ns | 0.1488 |     - |     - |    1024 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,498.8 ns | 1,072.56 ns |  58.79 ns | 33.94 ns | 2,448.1 ns | 2,563.2 ns | 2,484.9 ns | 0.1488 |     - |     - |    1024 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,637.2 ns |   923.83 ns |  50.64 ns | 29.24 ns | 2,601.0 ns | 2,695.1 ns | 2,615.6 ns | 0.1411 |     - |     - |     984 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,693.2 ns | 1,085.45 ns |  59.50 ns | 34.35 ns | 2,635.8 ns | 2,754.5 ns | 2,689.2 ns | 0.1411 |     - |     - |     976 B |
