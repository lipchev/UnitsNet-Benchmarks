``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-BPYJFE : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|             Method |                        Categories |    quantity | format | culture |       Mean |       Error |    StdDev |   StdErr |        Min |        Max |     Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------- |---------------------------------- |------------ |------- |-------- |-----------:|------------:|----------:|---------:|-----------:|-----------:|-----------:|-------:|------:|------:|----------:|
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      v |         |   422.0 ns |   206.02 ns |  11.29 ns |  6.52 ns |   415.4 ns |   435.0 ns |   415.5 ns | 0.0286 |     - |     - |     192 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      v |         |   434.5 ns |    86.92 ns |   4.76 ns |  2.75 ns |   429.4 ns |   438.8 ns |   435.2 ns | 0.0286 |     - |     - |     192 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      a |         |   776.0 ns |   174.88 ns |   9.59 ns |  5.53 ns |   766.5 ns |   785.6 ns |   775.8 ns | 0.0992 |     - |     - |     648 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      a |         |   789.8 ns |   367.90 ns |  20.17 ns | 11.64 ns |   774.8 ns |   812.7 ns |   782.0 ns | 0.0992 |     - |     - |     648 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |     a2 |         |   963.0 ns |   235.06 ns |  12.88 ns |  7.44 ns |   950.1 ns |   975.9 ns |   962.9 ns | 0.1068 |     - |     - |     712 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |     a2 |         | 1,187.3 ns |   806.06 ns |  44.18 ns | 25.51 ns | 1,148.4 ns | 1,235.4 ns | 1,178.2 ns | 0.1068 |     - |     - |     712 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,457.7 ns |   528.20 ns |  28.95 ns | 16.72 ns | 1,424.5 ns | 1,477.0 ns | 1,471.7 ns | 0.1144 |     - |     - |     768 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,570.9 ns | 1,189.72 ns |  65.21 ns | 37.65 ns | 1,510.4 ns | 1,639.9 ns | 1,562.3 ns | 0.1144 |     - |     - |     768 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,066.3 ns | 1,398.74 ns |  76.67 ns | 44.27 ns | 1,983.5 ns | 2,134.9 ns | 2,080.6 ns | 0.1411 |     - |     - |     976 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,087.4 ns |   666.52 ns |  36.53 ns | 21.09 ns | 2,051.7 ns | 2,124.8 ns | 2,085.8 ns | 0.1411 |     - |     - |     968 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,173.4 ns | 1,475.52 ns |  80.88 ns | 46.70 ns | 2,115.9 ns | 2,265.9 ns | 2,138.4 ns | 0.1488 |     - |     - |    1024 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,223.9 ns | 1,230.55 ns |  67.45 ns | 38.94 ns | 2,174.1 ns | 2,300.7 ns | 2,196.9 ns | 0.1411 |     - |     - |     976 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,281.6 ns | 2,275.72 ns | 124.74 ns | 72.02 ns | 2,141.3 ns | 2,380.1 ns | 2,323.4 ns | 0.1411 |     - |     - |     976 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,342.7 ns |   929.09 ns |  50.93 ns | 29.40 ns | 2,285.3 ns | 2,382.6 ns | 2,360.2 ns | 0.1411 |     - |     - |     984 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,374.4 ns |   452.75 ns |  24.82 ns | 14.33 ns | 2,346.0 ns | 2,391.6 ns | 2,385.6 ns | 0.1488 |     - |     - |    1024 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,456.0 ns | 1,194.49 ns |  65.47 ns | 37.80 ns | 2,392.4 ns | 2,523.2 ns | 2,452.3 ns | 0.1411 |     - |     - |     976 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,479.3 ns |   784.16 ns |  42.98 ns | 24.82 ns | 2,434.9 ns | 2,520.6 ns | 2,482.5 ns | 0.1411 |     - |     - |     968 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,592.3 ns | 1,270.76 ns |  69.65 ns | 40.22 ns | 2,512.5 ns | 2,640.9 ns | 2,623.6 ns | 0.1411 |     - |     - |     984 B |
