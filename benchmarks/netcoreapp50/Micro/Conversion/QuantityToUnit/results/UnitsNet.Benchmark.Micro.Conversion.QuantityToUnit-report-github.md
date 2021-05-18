``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-OVTLMT : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                                     Method |                                  Categories |      Mean |    Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------------------------------- |-------------------------------------------- |----------:|---------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|       Length&lt;BaseUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  22.09 ns | 0.435 ns |  0.427 ns | 0.107 ns |  21.27 ns |  22.78 ns |  22.02 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|    Length&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  22.73 ns | 0.445 ns |  0.494 ns | 0.113 ns |  21.72 ns |  23.43 ns |  22.84 ns |  1.03 |            Same |    0.04 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  31.56 ns | 0.629 ns |  1.721 ns | 0.185 ns |  27.94 ns |  34.84 ns |  31.69 ns |  1.43 |          Slower |    0.08 | 0.0012 |     - |     - |      32 B |
|      ILength&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  31.99 ns | 0.639 ns |  1.694 ns | 0.187 ns |  28.48 ns |  36.54 ns |  32.23 ns |  1.45 |          Slower |    0.07 | 0.0012 |     - |     - |      32 B |
|    IQuantity&lt;DerivedUnit&gt;.ToUnit(baseUnit) |    Interface,Unit,Quantity,Micro,Conversion | 116.87 ns | 1.646 ns |  1.539 ns | 0.397 ns | 114.65 ns | 119.71 ns | 116.59 ns |  5.29 |          Slower |    0.12 | 0.0012 |     - |     - |      32 B |
|    IQuantity&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 120.80 ns | 2.283 ns |  2.443 ns | 0.576 ns | 116.33 ns | 124.88 ns | 121.03 ns |  5.47 |          Slower |    0.19 | 0.0012 |     - |     - |      33 B |
| IQuantity&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 136.18 ns | 2.693 ns |  2.519 ns | 0.650 ns | 132.47 ns | 140.71 ns | 135.92 ns |  6.16 |          Slower |    0.17 | 0.0012 |     - |     - |      32 B |
|         Length&lt;BaseUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 389.67 ns | 7.772 ns | 20.202 ns | 2.273 ns | 334.34 ns | 431.56 ns | 392.99 ns | 17.29 |          Slower |    1.03 | 0.0068 |     - |     - |     192 B |
|      Length&lt;DerivedUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 415.80 ns | 8.236 ns | 11.546 ns | 2.222 ns | 391.07 ns | 440.50 ns | 411.81 ns | 19.05 |          Slower |    0.59 | 0.0068 |     - |     - |     192 B |
