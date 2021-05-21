``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-SHCPZM : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                                     Method |                                  Categories |      Mean |      Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------------------------------- |-------------------------------------------- |----------:|-----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|    Length&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  22.73 ns |  14.397 ns |  0.789 ns | 0.456 ns |  22.19 ns |  23.64 ns |  22.38 ns |  0.99 |               ? |    0.04 |      - |     - |     - |         - |
|       Length&lt;BaseUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  23.08 ns |   4.521 ns |  0.248 ns | 0.143 ns |  22.83 ns |  23.32 ns |  23.09 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  32.41 ns |   9.662 ns |  0.530 ns | 0.306 ns |  31.84 ns |  32.90 ns |  32.48 ns |  1.40 |               ? |    0.02 | 0.0049 |     - |     - |      32 B |
|   ILength&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  32.54 ns |   5.141 ns |  0.282 ns | 0.163 ns |  32.23 ns |  32.77 ns |  32.63 ns |  1.41 |               ? |    0.03 | 0.0049 |     - |     - |      32 B |
|    IQuantity&lt;DerivedUnit&gt;.ToUnit(baseUnit) |    Interface,Unit,Quantity,Micro,Conversion | 118.36 ns |  63.975 ns |  3.507 ns | 2.025 ns | 115.32 ns | 122.20 ns | 117.56 ns |  5.13 |               ? |    0.14 | 0.0046 |     - |     - |      32 B |
|    IQuantity&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 131.31 ns |  34.538 ns |  1.893 ns | 1.093 ns | 129.13 ns | 132.58 ns | 132.21 ns |  5.69 |               ? |    0.05 | 0.0043 |     - |     - |      33 B |
| IQuantity&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 158.62 ns |  27.366 ns |  1.500 ns | 0.866 ns | 157.61 ns | 160.34 ns | 157.91 ns |  6.87 |               ? |    0.09 | 0.0041 |     - |     - |      32 B |
|      Length&lt;DerivedUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 596.23 ns | 225.480 ns | 12.359 ns | 7.136 ns | 589.09 ns | 610.50 ns | 589.10 ns | 25.84 |               ? |    0.79 | 0.0281 |     - |     - |     192 B |
|         Length&lt;BaseUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 596.24 ns | 115.692 ns |  6.341 ns | 3.661 ns | 589.07 ns | 601.12 ns | 598.53 ns | 25.84 |               ? |    0.44 | 0.0281 |     - |     - |     192 B |
