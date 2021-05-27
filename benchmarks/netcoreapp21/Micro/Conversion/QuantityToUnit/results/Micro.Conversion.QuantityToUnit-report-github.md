``` ini

BenchmarkDotNet=v0.13.0, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-MXHATL : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                                     Method |                                  Categories |      Mean |     Error |    StdDev |   StdErr |    Median |       Min |       Max | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------------------------------- |-------------------------------------------- |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|    Length&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  22.17 ns |  0.494 ns |  1.458 ns | 0.146 ns |  22.37 ns |  19.09 ns |  25.08 ns |  0.94 |            Same |    0.08 |      - |     - |     - |         - |
|       Length&lt;BaseUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  23.15 ns |  0.462 ns |  0.964 ns | 0.132 ns |  23.45 ns |  20.85 ns |  25.39 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  33.22 ns |  1.151 ns |  3.393 ns | 0.339 ns |  32.95 ns |  26.17 ns |  38.99 ns |  1.42 |          Slower |    0.11 | 0.0049 |     - |     - |      32 B |
|      ILength&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  37.85 ns |  1.340 ns |  3.951 ns | 0.395 ns |  38.03 ns |  27.20 ns |  48.87 ns |  1.63 |          Slower |    0.10 | 0.0049 |     - |     - |      32 B |
|    IQuantity&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 116.03 ns |  2.187 ns |  4.316 ns | 0.623 ns | 115.74 ns | 110.04 ns | 126.30 ns |  5.03 |          Slower |    0.28 | 0.0043 |     - |     - |      33 B |
|    IQuantity&lt;DerivedUnit&gt;.ToUnit(baseUnit) |    Interface,Unit,Quantity,Micro,Conversion | 120.22 ns |  4.818 ns | 14.207 ns | 1.421 ns | 120.31 ns | 100.30 ns | 152.20 ns |  5.27 |          Slower |    0.89 | 0.0041 |     - |     - |      32 B |
| IQuantity&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 135.06 ns |  3.933 ns | 11.536 ns | 1.159 ns | 131.75 ns | 118.08 ns | 161.48 ns |  6.07 |          Slower |    0.59 | 0.0041 |     - |     - |      32 B |
|         Length&lt;BaseUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 546.77 ns | 13.451 ns | 38.595 ns | 3.960 ns | 535.00 ns | 498.32 ns | 652.09 ns | 23.46 |          Slower |    1.85 | 0.0281 |     - |     - |     192 B |
|      Length&lt;DerivedUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 611.83 ns | 24.357 ns | 71.051 ns | 7.177 ns | 617.24 ns | 500.28 ns | 800.60 ns | 26.48 |          Slower |    3.24 | 0.0281 |     - |     - |     192 B |
