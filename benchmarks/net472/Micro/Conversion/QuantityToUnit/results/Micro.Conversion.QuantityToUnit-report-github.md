``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-PIJCAQ : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                                     Method |                                  Categories |      Mean |     Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------------------------------- |-------------------------------------------- |----------:|----------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|       Length&lt;BaseUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  23.89 ns |  0.312 ns | 0.277 ns | 0.074 ns |  23.54 ns |  24.46 ns |  23.83 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|    Length&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  24.22 ns |  0.360 ns | 0.337 ns | 0.087 ns |  23.68 ns |  24.71 ns |  24.16 ns |  1.02 |            Same |    0.02 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  32.25 ns |  0.600 ns | 0.532 ns | 0.142 ns |  31.24 ns |  33.06 ns |  32.34 ns |  1.35 |          Slower |    0.02 | 0.0050 |     - |     - |      32 B |
|   ILength&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  32.30 ns |  0.498 ns | 0.466 ns | 0.120 ns |  31.73 ns |  33.25 ns |  32.10 ns |  1.35 |          Slower |    0.03 | 0.0050 |     - |     - |      32 B |
|    IQuantity&lt;DerivedUnit&gt;.ToUnit(baseUnit) |    Interface,Unit,Quantity,Micro,Conversion | 118.04 ns |  2.330 ns | 2.590 ns | 0.594 ns | 112.93 ns | 121.76 ns | 118.04 ns |  4.93 |          Slower |    0.14 | 0.0049 |     - |     - |      33 B |
|    IQuantity&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 124.27 ns |  2.393 ns | 2.457 ns | 0.596 ns | 121.06 ns | 129.22 ns | 124.27 ns |  5.21 |          Slower |    0.13 | 0.0048 |     - |     - |      33 B |
| IQuantity&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 138.11 ns |  2.733 ns | 3.648 ns | 0.730 ns | 132.54 ns | 146.45 ns | 137.89 ns |  5.77 |          Slower |    0.16 | 0.0046 |     - |     - |      33 B |
|      Length&lt;DerivedUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 547.95 ns |  7.311 ns | 6.481 ns | 1.732 ns | 540.85 ns | 565.33 ns | 546.12 ns | 22.93 |          Slower |    0.29 | 0.0303 |     - |     - |     201 B |
|         Length&lt;BaseUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 552.64 ns | 10.045 ns | 9.865 ns | 2.466 ns | 538.69 ns | 570.54 ns | 549.63 ns | 23.17 |          Slower |    0.39 | 0.0303 |     - |     - |     201 B |
