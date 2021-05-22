``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-SQWPPX : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                                     Method |                                  Categories |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------------------------------- |-------------------------------------------- |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|    Length&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  20.97 ns | 0.328 ns | 0.307 ns | 0.079 ns |  20.63 ns |  21.59 ns |  20.91 ns |  0.98 |            Same |    0.02 |      - |     - |     - |         - |
|       Length&lt;BaseUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  21.36 ns | 0.336 ns | 0.314 ns | 0.081 ns |  20.93 ns |  22.00 ns |  21.27 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  30.45 ns | 0.444 ns | 0.394 ns | 0.105 ns |  29.78 ns |  31.24 ns |  30.53 ns |  1.43 |          Slower |    0.03 | 0.0050 |     - |     - |      32 B |
|   ILength&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  30.65 ns | 0.605 ns | 0.566 ns | 0.146 ns |  29.89 ns |  31.75 ns |  30.56 ns |  1.44 |          Slower |    0.04 | 0.0050 |     - |     - |      32 B |
|    IQuantity&lt;DerivedUnit&gt;.ToUnit(baseUnit) |    Interface,Unit,Quantity,Micro,Conversion | 107.96 ns | 2.102 ns | 1.966 ns | 0.508 ns | 104.96 ns | 110.50 ns | 108.36 ns |  5.06 |          Slower |    0.12 | 0.0049 |     - |     - |      32 B |
|    IQuantity&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 115.93 ns | 1.596 ns | 1.415 ns | 0.378 ns | 113.66 ns | 118.75 ns | 115.63 ns |  5.43 |          Slower |    0.10 | 0.0048 |     - |     - |      33 B |
| IQuantity&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 134.16 ns | 2.299 ns | 2.150 ns | 0.555 ns | 130.93 ns | 137.55 ns | 134.08 ns |  6.28 |          Slower |    0.10 | 0.0049 |     - |     - |      32 B |
|         Length&lt;BaseUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 548.14 ns | 6.900 ns | 6.454 ns | 1.666 ns | 539.05 ns | 561.32 ns | 547.23 ns | 25.67 |          Slower |    0.41 | 0.0288 |     - |     - |     192 B |
|      Length&lt;DerivedUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 562.37 ns | 5.340 ns | 4.995 ns | 1.290 ns | 554.02 ns | 569.35 ns | 562.09 ns | 26.34 |          Slower |    0.47 | 0.0288 |     - |     - |     192 B |
