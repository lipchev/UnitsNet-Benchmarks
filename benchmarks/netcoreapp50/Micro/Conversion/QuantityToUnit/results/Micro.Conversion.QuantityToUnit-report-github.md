``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-UAURYW : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                                     Method |                                  Categories |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------------------------------- |-------------------------------------------- |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|    Length&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  22.43 ns | 0.352 ns | 0.329 ns | 0.085 ns |  21.90 ns |  23.03 ns |  22.43 ns |  0.98 |            Same |    0.02 |      - |     - |     - |         - |
|       Length&lt;BaseUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  22.85 ns | 0.304 ns | 0.284 ns | 0.073 ns |  22.17 ns |  23.16 ns |  22.95 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  32.79 ns | 0.654 ns | 0.727 ns | 0.167 ns |  31.64 ns |  34.13 ns |  32.75 ns |  1.44 |          Slower |    0.04 | 0.0017 |     - |     - |      32 B |
|      ILength&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  33.76 ns | 0.660 ns | 0.858 ns | 0.175 ns |  32.41 ns |  35.58 ns |  33.70 ns |  1.48 |          Slower |    0.05 | 0.0017 |     - |     - |      32 B |
|    IQuantity&lt;DerivedUnit&gt;.ToUnit(baseUnit) |    Interface,Unit,Quantity,Micro,Conversion | 103.93 ns | 1.409 ns | 1.318 ns | 0.340 ns | 101.85 ns | 106.39 ns | 103.60 ns |  4.55 |          Slower |    0.07 | 0.0016 |     - |     - |      32 B |
|    IQuantity&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 104.97 ns | 0.966 ns | 0.904 ns | 0.233 ns | 102.91 ns | 106.34 ns | 105.25 ns |  4.59 |          Slower |    0.07 | 0.0017 |     - |     - |      33 B |
| IQuantity&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 120.66 ns | 1.903 ns | 1.780 ns | 0.460 ns | 116.94 ns | 122.99 ns | 120.63 ns |  5.28 |          Slower |    0.09 | 0.0016 |     - |     - |      32 B |
|         Length&lt;BaseUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 386.31 ns | 7.586 ns | 8.736 ns | 1.953 ns | 374.43 ns | 405.31 ns | 386.57 ns | 17.00 |          Slower |    0.48 | 0.0099 |     - |     - |     192 B |
|      Length&lt;DerivedUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 398.35 ns | 7.764 ns | 7.625 ns | 1.906 ns | 386.14 ns | 410.60 ns | 398.02 ns | 17.44 |          Slower |    0.31 | 0.0099 |     - |     - |     192 B |
