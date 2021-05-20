``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-CKAJFG : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|             Method |                        Categories |    quantity | format | culture |       Mean |       Error |   StdDev |   StdErr |        Min |        Max |     Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------- |---------------------------------- |------------ |------- |-------- |-----------:|------------:|---------:|---------:|-----------:|-----------:|-----------:|-------:|------:|------:|----------:|
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      v |         |   469.4 ns |    20.37 ns |  1.12 ns |  0.64 ns |   468.4 ns |   470.6 ns |   469.2 ns | 0.0267 |     - |     - |     192 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      v |         |   479.4 ns |    96.70 ns |  5.30 ns |  3.06 ns |   476.1 ns |   485.5 ns |   476.5 ns | 0.0267 |     - |     - |     192 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      a |         |   837.2 ns |   265.51 ns | 14.55 ns |  8.40 ns |   821.7 ns |   850.6 ns |   839.4 ns | 0.0992 |     - |     - |     648 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      a |         |   853.5 ns |   353.32 ns | 19.37 ns | 11.18 ns |   838.9 ns |   875.4 ns |   846.0 ns | 0.0992 |     - |     - |     648 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |     a2 |         | 1,128.1 ns |   310.83 ns | 17.04 ns |  9.84 ns | 1,108.6 ns | 1,140.1 ns | 1,135.7 ns | 0.1068 |     - |     - |     712 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |     a2 |         | 1,146.9 ns |   265.75 ns | 14.57 ns |  8.41 ns | 1,133.5 ns | 1,162.4 ns | 1,144.9 ns | 0.1068 |     - |     - |     712 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,597.1 ns |   230.17 ns | 12.62 ns |  7.28 ns | 1,586.8 ns | 1,611.2 ns | 1,593.2 ns | 0.1144 |     - |     - |     768 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |     f2 |         | 1,597.4 ns |   354.04 ns | 19.41 ns | 11.20 ns | 1,575.0 ns | 1,608.7 ns | 1,608.6 ns | 0.1144 |     - |     - |     768 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,227.1 ns | 1,065.09 ns | 58.38 ns | 33.71 ns | 2,170.1 ns | 2,286.7 ns | 2,224.7 ns | 0.1411 |     - |     - |     976 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |      ? |         | 2,231.5 ns |   737.15 ns | 40.41 ns | 23.33 ns | 2,189.5 ns | 2,270.1 ns | 2,234.7 ns | 0.1411 |     - |     - |     976 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,239.2 ns |   501.55 ns | 27.49 ns | 15.87 ns | 2,211.7 ns | 2,266.7 ns | 2,239.1 ns | 0.1411 |     - |     - |     968 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,262.7 ns |   991.65 ns | 54.36 ns | 31.38 ns | 2,205.8 ns | 2,314.1 ns | 2,268.1 ns | 0.1411 |     - |     - |     976 B |
|           ToString |    Struct,Micro,Conversion,String |  1,234.56 m |      ? |         | 2,266.7 ns |   961.18 ns | 52.69 ns | 30.42 ns | 2,206.7 ns | 2,305.6 ns | 2,287.6 ns | 0.1411 |     - |     - |     968 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |   ru-RU | 2,299.6 ns | 1,433.89 ns | 78.60 ns | 45.38 ns | 2,221.1 ns | 2,378.3 ns | 2,299.5 ns | 0.1411 |     - |     - |     976 B |
| IQuantity_ToString | Interface,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,433.8 ns |   962.34 ns | 52.75 ns | 30.45 ns | 2,381.9 ns | 2,487.3 ns | 2,432.3 ns | 0.1411 |     - |     - |     984 B |
|           ToString |    Struct,Micro,Conversion,String | 1,234.56 ft |      ? |         | 2,443.4 ns | 1,145.47 ns | 62.79 ns | 36.25 ns | 2,401.8 ns | 2,515.6 ns | 2,412.7 ns | 0.1411 |     - |     - |     984 B |
|           ToString |    Struct,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,485.4 ns |   494.69 ns | 27.12 ns | 15.66 ns | 2,460.8 ns | 2,514.5 ns | 2,481.1 ns | 0.1488 |     - |     - |    1024 B |
| IQuantity_ToString | Interface,Micro,Conversion,String |   8.1e-04 m |     s4 |         | 2,617.3 ns |   669.75 ns | 36.71 ns | 21.20 ns | 2,586.6 ns | 2,657.9 ns | 2,607.4 ns | 0.1488 |     - |     - |    1024 B |
