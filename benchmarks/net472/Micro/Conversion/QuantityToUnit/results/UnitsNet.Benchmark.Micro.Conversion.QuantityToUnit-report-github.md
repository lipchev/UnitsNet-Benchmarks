``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-XMKOYN : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                                     Method |                                  Categories |      Mean |      Error |    StdDev |    StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------------------------------- |-------------------------------------------- |----------:|-----------:|----------:|----------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|       Length&lt;BaseUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  26.27 ns |   7.115 ns |  0.390 ns |  0.225 ns |  25.84 ns |  26.61 ns |  26.37 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|    Length&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  28.18 ns |   3.914 ns |  0.215 ns |  0.124 ns |  27.94 ns |  28.34 ns |  28.26 ns |  1.07 |               ? |    0.02 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  36.39 ns |   9.868 ns |  0.541 ns |  0.312 ns |  35.89 ns |  36.96 ns |  36.33 ns |  1.39 |               ? |    0.04 | 0.0049 |     - |     - |      32 B |
|      ILength&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  36.94 ns |  22.389 ns |  1.227 ns |  0.709 ns |  35.88 ns |  38.28 ns |  36.66 ns |  1.41 |               ? |    0.03 | 0.0049 |     - |     - |      32 B |
|    IQuantity&lt;DerivedUnit&gt;.ToUnit(baseUnit) |    Interface,Unit,Quantity,Micro,Conversion | 133.87 ns |  75.362 ns |  4.131 ns |  2.385 ns | 129.10 ns | 136.45 ns | 136.05 ns |  5.10 |               ? |    0.19 | 0.0047 |     - |     - |      33 B |
|    IQuantity&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 142.54 ns |  45.732 ns |  2.507 ns |  1.447 ns | 139.90 ns | 144.89 ns | 142.84 ns |  5.43 |               ? |    0.02 | 0.0043 |     - |     - |      33 B |
| IQuantity&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 159.33 ns |  84.103 ns |  4.610 ns |  2.662 ns | 155.16 ns | 164.28 ns | 158.54 ns |  6.06 |               ? |    0.10 | 0.0041 |     - |     - |      33 B |
|         Length&lt;BaseUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 638.04 ns | 154.417 ns |  8.464 ns |  4.887 ns | 631.98 ns | 647.71 ns | 634.44 ns | 24.29 |               ? |    0.46 | 0.0288 |     - |     - |     201 B |
|      Length&lt;DerivedUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 661.62 ns | 573.663 ns | 31.444 ns | 18.154 ns | 637.77 ns | 697.25 ns | 649.83 ns | 25.18 |               ? |    1.10 | 0.0288 |     - |     - |     201 B |
