``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-CVNAWX : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                                     Method |                                  Categories |      Mean |      Error |    StdDev |    StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------------------------------- |-------------------------------------------- |----------:|-----------:|----------:|----------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|    Length&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  20.86 ns |  11.858 ns |  0.650 ns |  0.375 ns |  20.29 ns |  21.57 ns |  20.74 ns |  0.85 |               ? |    0.01 |      - |     - |     - |         - |
|       Length&lt;BaseUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  24.50 ns |   8.985 ns |  0.492 ns |  0.284 ns |  24.15 ns |  25.07 ns |  24.29 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  28.89 ns |  20.390 ns |  1.118 ns |  0.645 ns |  27.63 ns |  29.77 ns |  29.27 ns |  1.18 |               ? |    0.03 | 0.0049 |     - |     - |      32 B |
|   ILength&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  29.50 ns |   7.017 ns |  0.385 ns |  0.222 ns |  29.07 ns |  29.80 ns |  29.63 ns |  1.20 |               ? |    0.02 | 0.0049 |     - |     - |      32 B |
|    IQuantity&lt;DerivedUnit&gt;.ToUnit(baseUnit) |    Interface,Unit,Quantity,Micro,Conversion | 108.10 ns |  22.023 ns |  1.207 ns |  0.697 ns | 107.23 ns | 109.48 ns | 107.58 ns |  4.41 |               ? |    0.04 | 0.0046 |     - |     - |      32 B |
|    IQuantity&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 117.59 ns |  81.579 ns |  4.472 ns |  2.582 ns | 113.28 ns | 122.21 ns | 117.28 ns |  4.80 |               ? |    0.20 | 0.0043 |     - |     - |      33 B |
| IQuantity&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 139.27 ns | 119.570 ns |  6.554 ns |  3.784 ns | 131.96 ns | 144.61 ns | 141.25 ns |  5.68 |               ? |    0.19 | 0.0041 |     - |     - |      32 B |
|         Length&lt;BaseUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 517.62 ns | 185.884 ns | 10.189 ns |  5.883 ns | 505.98 ns | 524.94 ns | 521.95 ns | 21.13 |               ? |    0.53 | 0.0281 |     - |     - |     192 B |
|      Length&lt;DerivedUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 639.71 ns | 463.644 ns | 25.414 ns | 14.673 ns | 610.57 ns | 657.33 ns | 651.22 ns | 26.11 |               ? |    1.05 | 0.0281 |     - |     - |     192 B |
