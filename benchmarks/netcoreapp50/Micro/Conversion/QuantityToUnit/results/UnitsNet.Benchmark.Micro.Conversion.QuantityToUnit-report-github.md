``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-DTKREZ : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                                     Method |                                  Categories |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------------------------------- |-------------------------------------------- |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|    Length&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  21.00 ns | 0.282 ns | 0.264 ns | 0.068 ns |  20.54 ns |  21.36 ns |  20.99 ns |  0.99 |            Same |    0.01 |      - |     - |     - |         - |
|       Length&lt;BaseUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  21.28 ns | 0.253 ns | 0.211 ns | 0.059 ns |  20.95 ns |  21.80 ns |  21.24 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  29.40 ns | 0.587 ns | 0.914 ns | 0.161 ns |  28.00 ns |  31.47 ns |  29.20 ns |  1.41 |          Slower |    0.05 | 0.0020 |     - |     - |      32 B |
|      ILength&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  30.17 ns | 0.601 ns | 0.533 ns | 0.142 ns |  29.04 ns |  31.20 ns |  30.25 ns |  1.42 |          Slower |    0.03 | 0.0020 |     - |     - |      32 B |
|    IQuantity&lt;DerivedUnit&gt;.ToUnit(baseUnit) |    Interface,Unit,Quantity,Micro,Conversion | 102.08 ns | 1.842 ns | 1.633 ns | 0.436 ns |  99.36 ns | 105.02 ns | 102.07 ns |  4.80 |          Slower |    0.10 | 0.0020 |     - |     - |      32 B |
|    IQuantity&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 104.70 ns | 1.930 ns | 1.711 ns | 0.457 ns | 101.07 ns | 107.84 ns | 104.90 ns |  4.92 |          Slower |    0.09 | 0.0021 |     - |     - |      33 B |
| IQuantity&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 117.60 ns | 2.091 ns | 1.956 ns | 0.505 ns | 114.64 ns | 121.53 ns | 117.38 ns |  5.54 |          Slower |    0.09 | 0.0020 |     - |     - |      32 B |
|         Length&lt;BaseUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 344.59 ns | 6.889 ns | 7.074 ns | 1.716 ns | 332.95 ns | 357.64 ns | 343.84 ns | 16.17 |          Slower |    0.36 | 0.0121 |     - |     - |     192 B |
|      Length&lt;DerivedUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 359.85 ns | 5.926 ns | 5.253 ns | 1.404 ns | 350.47 ns | 368.51 ns | 360.13 ns | 16.90 |          Slower |    0.28 | 0.0121 |     - |     - |     192 B |
