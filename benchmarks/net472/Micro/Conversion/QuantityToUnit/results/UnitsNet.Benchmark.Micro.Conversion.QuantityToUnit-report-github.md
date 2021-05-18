``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-ULCKHL : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                                     Method |                                  Categories |      Mean |     Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------------------------------- |-------------------------------------------- |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|    Length&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  26.24 ns |  0.508 ns |  0.679 ns | 0.136 ns |  24.98 ns |  27.77 ns |  26.18 ns |  0.99 |            Same |    0.02 |      - |     - |     - |         - |
|       Length&lt;BaseUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  26.80 ns |  0.469 ns |  0.439 ns | 0.113 ns |  26.23 ns |  27.66 ns |  26.75 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  33.87 ns |  0.666 ns |  0.623 ns | 0.161 ns |  32.59 ns |  35.09 ns |  33.99 ns |  1.26 |          Slower |    0.03 | 0.0050 |     - |     - |      32 B |
|   ILength&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  35.38 ns |  0.702 ns |  1.007 ns | 0.190 ns |  33.78 ns |  37.63 ns |  35.25 ns |  1.32 |          Slower |    0.05 | 0.0050 |     - |     - |      32 B |
|    IQuantity&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 112.67 ns |  2.217 ns |  3.452 ns | 0.610 ns | 106.63 ns | 119.74 ns | 112.42 ns |  4.14 |          Slower |    0.11 | 0.0048 |     - |     - |      33 B |
|    IQuantity&lt;DerivedUnit&gt;.ToUnit(baseUnit) |    Interface,Unit,Quantity,Micro,Conversion | 114.63 ns |  2.274 ns |  3.737 ns | 0.632 ns | 108.93 ns | 121.66 ns | 114.77 ns |  4.28 |          Slower |    0.17 | 0.0049 |     - |     - |      33 B |
| IQuantity&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 133.98 ns |  2.573 ns |  2.527 ns | 0.632 ns | 130.20 ns | 138.94 ns | 133.65 ns |  5.00 |          Slower |    0.14 | 0.0046 |     - |     - |      33 B |
|         Length&lt;BaseUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 580.19 ns | 11.387 ns | 19.336 ns | 3.179 ns | 550.29 ns | 625.48 ns | 576.09 ns | 22.03 |          Slower |    0.70 | 0.0303 |     - |     - |     201 B |
|      Length&lt;DerivedUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 592.35 ns | 11.516 ns |  9.617 ns | 2.667 ns | 566.82 ns | 605.75 ns | 593.46 ns | 22.08 |          Slower |    0.51 | 0.0303 |     - |     - |     201 B |
