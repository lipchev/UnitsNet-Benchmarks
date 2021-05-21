``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-RWGJPW : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|             Method |                        Categories |    quantity | format | culture |       Mean |     Error |   StdDev |   StdErr |        Min |        Max |     Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------- |---------------------------------- |------------ |------- |-------- |-----------:|----------:|---------:|---------:|-----------:|-----------:|-----------:|-------:|------:|------:|----------:|
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      v |         |   453.1 ns |  87.11 ns |  4.77 ns |  2.76 ns |   447.7 ns |   456.5 ns |   455.2 ns | 0.0100 |     - |     - |     192 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      v |         |   471.4 ns | 129.51 ns |  7.10 ns |  4.10 ns |   465.5 ns |   479.3 ns |   469.5 ns | 0.0100 |     - |     - |     192 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      a |         |   623.5 ns | 119.27 ns |  6.54 ns |  3.77 ns |   616.0 ns |   628.2 ns |   626.2 ns | 0.0334 |     - |     - |     640 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      a |         |   643.3 ns | 213.02 ns | 11.68 ns |  6.74 ns |   633.3 ns |   656.1 ns |   640.5 ns | 0.0334 |     - |     - |     640 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |     a2 |         |   788.7 ns | 340.80 ns | 18.68 ns | 10.78 ns |   775.1 ns |   810.0 ns |   781.0 ns | 0.0372 |     - |     - |     696 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |     a2 |         |   803.9 ns | 305.98 ns | 16.77 ns |  9.68 ns |   790.9 ns |   822.8 ns |   798.0 ns | 0.0372 |     - |     - |     696 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,314.9 ns | 549.05 ns | 30.10 ns | 17.38 ns | 1,282.9 ns | 1,342.7 ns | 1,319.1 ns | 0.0401 |     - |     - |     752 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,330.7 ns | 578.54 ns | 31.71 ns | 18.31 ns | 1,312.4 ns | 1,367.3 ns | 1,312.4 ns | 0.0401 |     - |     - |     752 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |      ? |         | 1,590.1 ns | 651.77 ns | 35.73 ns | 20.63 ns | 1,550.6 ns | 1,620.2 ns | 1,599.4 ns | 0.0496 |     - |     - |     952 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |      ? |         | 1,594.8 ns | 505.51 ns | 27.71 ns | 16.00 ns | 1,564.0 ns | 1,617.8 ns | 1,602.5 ns | 0.0496 |     - |     - |     952 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      ? |         | 1,649.3 ns | 224.82 ns | 12.32 ns |  7.11 ns | 1,637.0 ns | 1,661.6 ns | 1,649.3 ns | 0.0496 |     - |     - |     960 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 1,674.2 ns | 515.21 ns | 28.24 ns | 16.30 ns | 1,650.7 ns | 1,705.6 ns | 1,666.4 ns | 0.0496 |     - |     - |     960 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      ? |         | 1,675.5 ns | 651.23 ns | 35.70 ns | 20.61 ns | 1,636.2 ns | 1,705.9 ns | 1,684.5 ns | 0.0496 |     - |     - |     960 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 1,684.8 ns | 276.67 ns | 15.17 ns |  8.76 ns | 1,672.9 ns | 1,701.9 ns | 1,679.7 ns | 0.0496 |     - |     - |     960 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 1,709.9 ns | 145.50 ns |  7.98 ns |  4.60 ns | 1,700.7 ns | 1,714.8 ns | 1,714.2 ns | 0.0515 |     - |     - |     992 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 1,713.6 ns | 287.71 ns | 15.77 ns |  9.10 ns | 1,696.4 ns | 1,727.5 ns | 1,716.9 ns | 0.0515 |     - |     - |     992 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |         | 1,723.4 ns | 170.41 ns |  9.34 ns |  5.39 ns | 1,717.6 ns | 1,734.2 ns | 1,718.4 ns | 0.0515 |     - |     - |     976 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |         | 1,791.1 ns | 239.59 ns | 13.13 ns |  7.58 ns | 1,776.0 ns | 1,799.8 ns | 1,797.5 ns | 0.0515 |     - |     - |     976 B |
