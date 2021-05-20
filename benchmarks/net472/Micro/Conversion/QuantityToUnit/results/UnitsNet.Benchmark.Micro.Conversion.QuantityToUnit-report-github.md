``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-WUCJLE : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                                     Method |                                  Categories |      Mean |      Error |    StdDev |    StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------------------------------- |-------------------------------------------- |----------:|-----------:|----------:|----------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|    Length&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  23.26 ns |   0.125 ns |  0.007 ns |  0.004 ns |  23.25 ns |  23.26 ns |  23.25 ns |  0.91 |               ? |    0.03 |      - |     - |     - |         - |
|       Length&lt;BaseUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  25.51 ns |  15.630 ns |  0.857 ns |  0.495 ns |  24.73 ns |  26.42 ns |  25.37 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  31.69 ns |   3.413 ns |  0.187 ns |  0.108 ns |  31.48 ns |  31.85 ns |  31.72 ns |  1.24 |               ? |    0.04 | 0.0049 |     - |     - |      32 B |
|   ILength&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  32.45 ns |   9.588 ns |  0.526 ns |  0.303 ns |  31.86 ns |  32.86 ns |  32.64 ns |  1.27 |               ? |    0.06 | 0.0049 |     - |     - |      32 B |
|    IQuantity&lt;DerivedUnit&gt;.ToUnit(baseUnit) |    Interface,Unit,Quantity,Micro,Conversion | 115.74 ns |  56.501 ns |  3.097 ns |  1.788 ns | 112.17 ns | 117.69 ns | 117.37 ns |  4.54 |               ? |    0.09 | 0.0047 |     - |     - |      33 B |
|    IQuantity&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 127.02 ns |  40.678 ns |  2.230 ns |  1.287 ns | 124.72 ns | 129.17 ns | 127.17 ns |  4.98 |               ? |    0.15 | 0.0043 |     - |     - |      33 B |
| IQuantity&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 148.39 ns |  58.334 ns |  3.197 ns |  1.846 ns | 144.70 ns | 150.39 ns | 150.08 ns |  5.82 |               ? |    0.21 | 0.0041 |     - |     - |      33 B |
|         Length&lt;BaseUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 542.16 ns | 395.216 ns | 21.663 ns | 12.507 ns | 522.45 ns | 565.36 ns | 538.69 ns | 21.28 |               ? |    1.37 | 0.0288 |     - |     - |     201 B |
|      Length&lt;DerivedUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 573.27 ns | 368.897 ns | 20.221 ns | 11.674 ns | 550.10 ns | 587.37 ns | 582.33 ns | 22.51 |               ? |    1.52 | 0.0288 |     - |     - |     201 B |
