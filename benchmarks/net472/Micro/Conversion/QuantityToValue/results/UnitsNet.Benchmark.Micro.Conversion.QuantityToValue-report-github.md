``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-MLHJQY : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                                 Method |                               Categories |      Mean |      Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------------- |----------------------------------------- |----------:|-----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|       Length&lt;BaseUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  15.32 ns |   3.481 ns |  0.191 ns | 0.110 ns |  15.14 ns |  15.52 ns |  15.28 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|    Length&lt;DerivedUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  15.40 ns |   6.410 ns |  0.351 ns | 0.203 ns |  15.00 ns |  15.64 ns |  15.57 ns |  1.01 |               ? |    0.02 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  19.32 ns |   4.514 ns |  0.247 ns | 0.143 ns |  19.04 ns |  19.50 ns |  19.43 ns |  1.26 |               ? |    0.02 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  19.53 ns |   4.447 ns |  0.244 ns | 0.141 ns |  19.38 ns |  19.81 ns |  19.40 ns |  1.28 |               ? |    0.03 |      - |     - |     - |         - |
|    IQuantity&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  97.86 ns |   4.673 ns |  0.256 ns | 0.148 ns |  97.57 ns |  98.03 ns |  97.99 ns |  6.39 |               ? |    0.08 |      - |     - |     - |         - |
|    IQuantity&lt;DerivedUnit&gt;.As(baseUnit) |    Interface,Unit,Value,Micro,Conversion | 102.26 ns |  16.264 ns |  0.891 ns | 0.515 ns | 101.32 ns | 103.09 ns | 102.36 ns |  6.68 |               ? |    0.13 |      - |     - |     - |         - |
| IQuantity&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion | 128.01 ns |  26.549 ns |  1.455 ns | 0.840 ns | 126.34 ns | 129.01 ns | 128.69 ns |  8.36 |               ? |    0.12 |      - |     - |     - |         - |
|         Length&lt;BaseUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 607.38 ns | 236.791 ns | 12.979 ns | 7.494 ns | 595.89 ns | 621.46 ns | 604.78 ns | 39.66 |               ? |    0.57 | 0.0288 |     - |     - |     201 B |
|      Length&lt;DerivedUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 624.57 ns | 122.150 ns |  6.695 ns | 3.866 ns | 617.87 ns | 631.27 ns | 624.56 ns | 40.78 |               ? |    0.10 | 0.0288 |     - |     - |     201 B |
