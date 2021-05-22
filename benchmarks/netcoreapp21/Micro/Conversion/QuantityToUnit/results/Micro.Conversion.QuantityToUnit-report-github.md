``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-PQULAZ : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                                     Method |                                  Categories |      Mean |     Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------------------------------- |-------------------------------------------- |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|    Length&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  24.10 ns |  0.368 ns |  0.344 ns | 0.089 ns |  23.59 ns |  24.71 ns |  24.12 ns |  0.99 |            Same |    0.02 |      - |     - |     - |         - |
|       Length&lt;BaseUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  24.33 ns |  0.481 ns |  0.494 ns | 0.120 ns |  23.58 ns |  25.48 ns |  24.23 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  31.68 ns |  0.627 ns |  0.586 ns | 0.151 ns |  30.80 ns |  32.80 ns |  31.78 ns |  1.30 |          Slower |    0.04 | 0.0050 |     - |     - |      32 B |
|   ILength&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  32.41 ns |  0.600 ns |  0.561 ns | 0.145 ns |  31.39 ns |  33.54 ns |  32.40 ns |  1.33 |          Slower |    0.03 | 0.0050 |     - |     - |      32 B |
|    IQuantity&lt;DerivedUnit&gt;.ToUnit(baseUnit) |    Interface,Unit,Quantity,Micro,Conversion | 107.21 ns |  1.514 ns |  1.416 ns | 0.366 ns | 104.72 ns | 109.52 ns | 107.50 ns |  4.40 |          Slower |    0.12 | 0.0049 |     - |     - |      32 B |
|    IQuantity&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 114.64 ns |  2.059 ns |  1.926 ns | 0.497 ns | 110.26 ns | 118.14 ns | 114.63 ns |  4.71 |          Slower |    0.14 | 0.0048 |     - |     - |      33 B |
| IQuantity&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 134.62 ns |  2.501 ns |  2.339 ns | 0.604 ns | 130.57 ns | 139.34 ns | 135.12 ns |  5.53 |          Slower |    0.16 | 0.0046 |     - |     - |      32 B |
|         Length&lt;BaseUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 625.91 ns | 11.552 ns | 10.240 ns | 2.737 ns | 603.52 ns | 640.73 ns | 626.48 ns | 25.64 |          Slower |    0.74 | 0.0288 |     - |     - |     192 B |
|      Length&lt;DerivedUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 633.56 ns |  9.351 ns |  8.747 ns | 2.258 ns | 622.90 ns | 646.82 ns | 633.28 ns | 26.01 |          Slower |    0.69 | 0.0288 |     - |     - |     192 B |
