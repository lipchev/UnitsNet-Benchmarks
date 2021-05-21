``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-YDWKVS : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                                     Method |                                  Categories |      Mean |      Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------------------------------- |-------------------------------------------- |----------:|-----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|    Length&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  24.93 ns |   5.616 ns |  0.308 ns | 0.178 ns |  24.58 ns |  25.11 ns |  25.11 ns |  0.93 |               ? |    0.01 |      - |     - |     - |         - |
|       Length&lt;BaseUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  26.84 ns |   0.513 ns |  0.028 ns | 0.016 ns |  26.81 ns |  26.87 ns |  26.83 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  34.49 ns |  18.942 ns |  1.038 ns | 0.599 ns |  33.82 ns |  35.69 ns |  33.97 ns |  1.29 |               ? |    0.04 | 0.0049 |     - |     - |      32 B |
|      ILength&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  35.03 ns |  13.771 ns |  0.755 ns | 0.436 ns |  34.49 ns |  35.89 ns |  34.70 ns |  1.31 |               ? |    0.03 | 0.0049 |     - |     - |      32 B |
|    IQuantity&lt;DerivedUnit&gt;.ToUnit(baseUnit) |    Interface,Unit,Quantity,Micro,Conversion | 122.13 ns |  17.701 ns |  0.970 ns | 0.560 ns | 121.05 ns | 122.93 ns | 122.39 ns |  4.55 |               ? |    0.04 | 0.0047 |     - |     - |      33 B |
|    IQuantity&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 136.88 ns |  38.520 ns |  2.111 ns | 1.219 ns | 135.55 ns | 139.31 ns | 135.76 ns |  5.10 |               ? |    0.08 | 0.0043 |     - |     - |      33 B |
| IQuantity&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 151.90 ns |  70.253 ns |  3.851 ns | 2.223 ns | 149.35 ns | 156.33 ns | 150.02 ns |  5.66 |               ? |    0.14 | 0.0041 |     - |     - |      33 B |
|         Length&lt;BaseUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 582.05 ns | 220.852 ns | 12.106 ns | 6.989 ns | 569.99 ns | 594.20 ns | 581.94 ns | 21.69 |               ? |    0.44 | 0.0288 |     - |     - |     201 B |
|      Length&lt;DerivedUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 590.03 ns | 221.145 ns | 12.122 ns | 6.998 ns | 577.03 ns | 601.02 ns | 592.04 ns | 21.98 |               ? |    0.46 | 0.0288 |     - |     - |     201 B |
