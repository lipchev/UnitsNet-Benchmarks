``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-ALFHIG : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                                     Method |                                  Categories |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------------------------------- |-------------------------------------------- |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|    Length&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  20.19 ns | 0.284 ns | 0.252 ns | 0.067 ns |  19.84 ns |  20.57 ns |  20.12 ns |  0.98 |            Same |    0.02 |      - |     - |     - |         - |
|       Length&lt;BaseUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  20.53 ns | 0.401 ns | 0.429 ns | 0.101 ns |  19.75 ns |  21.34 ns |  20.57 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  27.24 ns | 0.440 ns | 0.452 ns | 0.110 ns |  26.33 ns |  27.95 ns |  27.21 ns |  1.33 |          Slower |    0.03 | 0.0012 |     - |     - |      32 B |
|   ILength&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  28.02 ns | 0.559 ns | 0.523 ns | 0.135 ns |  26.80 ns |  28.85 ns |  28.15 ns |  1.36 |          Slower |    0.03 | 0.0012 |     - |     - |      32 B |
|    IQuantity&lt;DerivedUnit&gt;.ToUnit(baseUnit) |    Interface,Unit,Quantity,Micro,Conversion | 102.34 ns | 2.041 ns | 2.654 ns | 0.542 ns |  96.32 ns | 107.57 ns | 102.18 ns |  5.00 |          Slower |    0.16 | 0.0012 |     - |     - |      32 B |
|    IQuantity&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 103.44 ns | 1.647 ns | 1.541 ns | 0.398 ns | 100.55 ns | 105.41 ns | 103.62 ns |  5.02 |          Slower |    0.15 | 0.0012 |     - |     - |      33 B |
| IQuantity&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 121.12 ns | 2.261 ns | 2.115 ns | 0.546 ns | 117.85 ns | 124.95 ns | 121.44 ns |  5.88 |          Slower |    0.13 | 0.0012 |     - |     - |      32 B |
|         Length&lt;BaseUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 333.33 ns | 6.570 ns | 7.566 ns | 1.692 ns | 317.91 ns | 346.93 ns | 334.32 ns | 16.21 |          Slower |    0.47 | 0.0072 |     - |     - |     192 B |
|      Length&lt;DerivedUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 356.95 ns | 7.107 ns | 8.729 ns | 1.861 ns | 343.61 ns | 376.30 ns | 355.45 ns | 17.41 |          Slower |    0.58 | 0.0072 |     - |     - |     192 B |
