``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-NLRCHK : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|             Method |                        Categories |    quantity | format | culture |       Mean |      Error |    StdDev |   StdErr |        Min |        Max |     Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------- |---------------------------------- |------------ |------- |-------- |-----------:|-----------:|----------:|---------:|-----------:|-----------:|-----------:|-------:|------:|------:|----------:|
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      a |         |   584.9 ns |   626.6 ns |  34.34 ns | 19.83 ns |   547.9 ns |   615.7 ns |   591.1 ns | 0.1097 |     - |     - |     714 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      a |         |   594.3 ns |   483.6 ns |  26.51 ns | 15.30 ns |   565.6 ns |   617.8 ns |   599.7 ns | 0.1097 |     - |     - |     714 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      v |         |   829.7 ns |   416.5 ns |  22.83 ns | 13.18 ns |   804.3 ns |   848.5 ns |   836.3 ns | 0.0305 |     - |     - |     217 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |     a2 |         |   842.1 ns |   322.0 ns |  17.65 ns | 10.19 ns |   830.9 ns |   862.5 ns |   833.1 ns | 0.1173 |     - |     - |     762 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |     a2 |         |   863.6 ns |   206.6 ns |  11.33 ns |  6.54 ns |   854.3 ns |   876.2 ns |   860.4 ns | 0.1173 |     - |     - |     762 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      v |         |   871.7 ns |   163.1 ns |   8.94 ns |  5.16 ns |   861.7 ns |   878.9 ns |   874.5 ns | 0.0305 |     - |     - |     217 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,785.0 ns |   824.7 ns |  45.20 ns | 26.10 ns | 1,751.4 ns | 1,836.4 ns | 1,767.1 ns | 0.1602 |     - |     - |    1051 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,837.4 ns |   599.7 ns |  32.87 ns | 18.98 ns | 1,800.2 ns | 1,862.7 ns | 1,849.2 ns | 0.1602 |     - |     - |    1051 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,002.7 ns |   548.0 ns |  30.04 ns | 17.34 ns | 1,974.2 ns | 2,034.1 ns | 1,999.8 ns | 0.1907 |     - |     - |    1284 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,074.4 ns |   771.5 ns |  42.29 ns | 24.42 ns | 2,047.6 ns | 2,123.1 ns | 2,052.3 ns | 0.1869 |     - |     - |    1276 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,120.8 ns | 2,051.7 ns | 112.46 ns | 64.93 ns | 2,027.4 ns | 2,245.7 ns | 2,089.4 ns | 0.1869 |     - |     - |    1276 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,130.4 ns | 1,051.8 ns |  57.65 ns | 33.29 ns | 2,065.5 ns | 2,175.6 ns | 2,150.2 ns | 0.1907 |     - |     - |    1284 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,163.8 ns |   477.8 ns |  26.19 ns | 15.12 ns | 2,139.8 ns | 2,191.8 ns | 2,159.8 ns | 0.1869 |     - |     - |    1276 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,368.9 ns |   828.4 ns |  45.41 ns | 26.21 ns | 2,332.9 ns | 2,419.9 ns | 2,353.8 ns | 0.1907 |     - |     - |    1284 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,422.1 ns | 1,124.1 ns |  61.61 ns | 35.57 ns | 2,356.5 ns | 2,478.8 ns | 2,430.9 ns | 0.1869 |     - |     - |    1276 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,459.6 ns | 1,495.9 ns |  82.00 ns | 47.34 ns | 2,379.3 ns | 2,543.2 ns | 2,456.4 ns | 0.1907 |     - |     - |    1284 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,532.0 ns |   900.3 ns |  49.35 ns | 28.49 ns | 2,493.6 ns | 2,587.7 ns | 2,514.8 ns | 0.1984 |     - |     - |    1340 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,544.5 ns | 1,083.1 ns |  59.37 ns | 34.28 ns | 2,490.0 ns | 2,607.7 ns | 2,535.7 ns | 0.1984 |     - |     - |    1340 B |
