``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-VNYUUE : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                                     Method |                                  Categories |      Mean |     Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------------------------------- |-------------------------------------------- |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|    Length&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  22.46 ns |  0.436 ns |  0.467 ns | 0.110 ns |  21.96 ns |  23.36 ns |  22.30 ns |  0.89 |          Faster |    0.03 |      - |     - |     - |         - |
|       Length&lt;BaseUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  25.29 ns |  0.411 ns |  0.384 ns | 0.099 ns |  24.84 ns |  26.12 ns |  25.19 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  30.42 ns |  0.412 ns |  0.365 ns | 0.098 ns |  29.74 ns |  31.04 ns |  30.48 ns |  1.20 |          Slower |    0.03 | 0.0049 |     - |     - |      32 B |
|   ILength&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  33.29 ns |  0.413 ns |  0.366 ns | 0.098 ns |  32.65 ns |  33.73 ns |  33.35 ns |  1.32 |          Slower |    0.03 | 0.0049 |     - |     - |      32 B |
|    IQuantity&lt;DerivedUnit&gt;.ToUnit(baseUnit) |    Interface,Unit,Quantity,Micro,Conversion | 110.72 ns |  1.908 ns |  1.784 ns | 0.461 ns | 108.20 ns | 114.07 ns | 110.45 ns |  4.38 |          Slower |    0.09 | 0.0047 |     - |     - |      33 B |
|    IQuantity&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 125.59 ns |  2.476 ns |  3.998 ns | 0.686 ns | 117.00 ns | 131.82 ns | 126.85 ns |  5.00 |          Slower |    0.12 | 0.0043 |     - |     - |      33 B |
| IQuantity&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 135.58 ns |  2.688 ns |  6.067 ns | 0.777 ns | 128.82 ns | 149.26 ns | 133.74 ns |  5.64 |          Slower |    0.33 | 0.0047 |     - |     - |      33 B |
|      Length&lt;DerivedUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 547.36 ns |  6.750 ns |  5.984 ns | 1.599 ns | 535.23 ns | 556.82 ns | 547.85 ns | 21.64 |          Slower |    0.37 | 0.0288 |     - |     - |     201 B |
|         Length&lt;BaseUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 559.09 ns | 11.012 ns | 12.682 ns | 2.836 ns | 539.98 ns | 583.72 ns | 556.04 ns | 22.25 |          Slower |    0.58 | 0.0288 |     - |     - |     201 B |
