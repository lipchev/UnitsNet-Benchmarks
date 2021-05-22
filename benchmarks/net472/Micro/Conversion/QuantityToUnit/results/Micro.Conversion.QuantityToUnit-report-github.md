``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-CYKKMK : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                                     Method |                                  Categories |      Mean |     Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------------------------------- |-------------------------------------------- |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|    Length&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  25.12 ns |  0.481 ns |  0.450 ns | 0.116 ns |  24.39 ns |  25.99 ns |  25.22 ns |  1.00 |            Same |    0.03 |      - |     - |     - |         - |
|       Length&lt;BaseUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  25.21 ns |  0.504 ns |  0.518 ns | 0.126 ns |  24.26 ns |  26.23 ns |  25.08 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  33.95 ns |  0.640 ns |  0.599 ns | 0.155 ns |  33.21 ns |  35.06 ns |  33.81 ns |  1.35 |          Slower |    0.03 | 0.0050 |     - |     - |      32 B |
|   ILength&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  34.81 ns |  0.689 ns |  0.966 ns | 0.186 ns |  33.42 ns |  37.20 ns |  34.59 ns |  1.39 |          Slower |    0.06 | 0.0050 |     - |     - |      32 B |
|    IQuantity&lt;DerivedUnit&gt;.ToUnit(baseUnit) |    Interface,Unit,Quantity,Micro,Conversion | 107.55 ns |  2.069 ns |  2.032 ns | 0.508 ns | 105.15 ns | 111.74 ns | 107.28 ns |  4.27 |          Slower |    0.14 | 0.0049 |     - |     - |      33 B |
|    IQuantity&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 113.72 ns |  2.241 ns |  2.668 ns | 0.582 ns | 109.40 ns | 119.67 ns | 113.07 ns |  4.53 |          Slower |    0.11 | 0.0048 |     - |     - |      33 B |
| IQuantity&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 133.72 ns |  2.573 ns |  2.407 ns | 0.622 ns | 131.09 ns | 139.63 ns | 132.76 ns |  5.30 |          Slower |    0.14 | 0.0049 |     - |     - |      33 B |
|         Length&lt;BaseUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 573.74 ns | 11.195 ns | 11.979 ns | 2.823 ns | 555.29 ns | 601.50 ns | 568.57 ns | 22.76 |          Slower |    0.56 | 0.0303 |     - |     - |     201 B |
|      Length&lt;DerivedUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 608.02 ns | 12.075 ns | 13.421 ns | 3.079 ns | 579.72 ns | 627.73 ns | 608.63 ns | 24.08 |          Slower |    0.86 | 0.0303 |     - |     - |     201 B |
