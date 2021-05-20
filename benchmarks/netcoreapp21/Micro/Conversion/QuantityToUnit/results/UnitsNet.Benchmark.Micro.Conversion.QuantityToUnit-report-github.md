``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-JAQLFZ : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                                     Method |                                  Categories |      Mean |     Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------------------------------- |-------------------------------------------- |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|       Length&lt;BaseUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  22.01 ns |  0.418 ns |  0.391 ns | 0.101 ns |  21.13 ns |  22.70 ns |  22.04 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|    Length&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  22.22 ns |  0.443 ns |  0.528 ns | 0.115 ns |  21.25 ns |  23.27 ns |  22.31 ns |  1.00 |            Same |    0.03 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  32.52 ns |  0.642 ns |  0.764 ns | 0.167 ns |  30.98 ns |  34.18 ns |  32.59 ns |  1.47 |          Slower |    0.04 | 0.0049 |     - |     - |      32 B |
|      ILength&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  32.62 ns |  0.649 ns |  0.910 ns | 0.175 ns |  30.87 ns |  33.97 ns |  32.84 ns |  1.48 |          Slower |    0.04 | 0.0049 |     - |     - |      32 B |
|    IQuantity&lt;DerivedUnit&gt;.ToUnit(baseUnit) |    Interface,Unit,Quantity,Micro,Conversion | 117.89 ns |  2.138 ns |  2.000 ns | 0.516 ns | 113.29 ns | 121.54 ns | 117.81 ns |  5.36 |          Slower |    0.14 | 0.0046 |     - |     - |      32 B |
|    IQuantity&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 125.37 ns |  2.504 ns |  3.343 ns | 0.669 ns | 119.16 ns | 131.93 ns | 126.26 ns |  5.66 |          Slower |    0.17 | 0.0043 |     - |     - |      33 B |
| IQuantity&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 151.08 ns |  2.988 ns |  3.779 ns | 0.788 ns | 143.41 ns | 158.18 ns | 151.52 ns |  6.87 |          Slower |    0.24 | 0.0041 |     - |     - |      32 B |
|         Length&lt;BaseUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 600.71 ns | 11.523 ns | 13.717 ns | 2.993 ns | 569.55 ns | 626.39 ns | 598.91 ns | 27.11 |          Slower |    0.82 | 0.0281 |     - |     - |     192 B |
|      Length&lt;DerivedUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 618.99 ns |  9.690 ns |  8.590 ns | 2.296 ns | 603.28 ns | 631.55 ns | 621.37 ns | 28.11 |          Slower |    0.68 | 0.0281 |     - |     - |     192 B |
