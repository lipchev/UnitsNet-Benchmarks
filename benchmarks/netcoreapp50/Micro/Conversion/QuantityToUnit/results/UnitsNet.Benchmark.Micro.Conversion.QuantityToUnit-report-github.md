``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-JICFLT : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                                     Method |                                  Categories |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------------------------------- |-------------------------------------------- |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|       Length&lt;BaseUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  22.89 ns | 0.406 ns | 0.398 ns | 0.100 ns |  22.48 ns |  23.93 ns |  22.84 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|    Length&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  23.39 ns | 0.358 ns | 0.335 ns | 0.086 ns |  22.97 ns |  24.07 ns |  23.32 ns |  1.02 |            Same |    0.02 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  28.76 ns | 0.568 ns | 1.052 ns | 0.160 ns |  26.74 ns |  31.23 ns |  28.66 ns |  1.27 |          Slower |    0.06 | 0.0012 |     - |     - |      32 B |
|      ILength&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  30.22 ns | 0.600 ns | 1.171 ns | 0.171 ns |  27.61 ns |  32.58 ns |  30.41 ns |  1.36 |          Slower |    0.04 | 0.0012 |     - |     - |      32 B |
|    IQuantity&lt;DerivedUnit&gt;.ToUnit(baseUnit) |    Interface,Unit,Quantity,Micro,Conversion |  92.97 ns | 1.859 ns | 2.481 ns | 0.496 ns |  89.53 ns |  97.63 ns |  92.10 ns |  4.07 |          Slower |    0.13 | 0.0012 |     - |     - |      32 B |
|    IQuantity&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 101.05 ns | 2.016 ns | 5.239 ns | 0.589 ns |  92.16 ns | 113.01 ns | 100.33 ns |  4.57 |          Slower |    0.16 | 0.0012 |     - |     - |      33 B |
| IQuantity&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 110.05 ns | 2.044 ns | 2.008 ns | 0.502 ns | 105.93 ns | 114.07 ns | 110.06 ns |  4.81 |          Slower |    0.09 | 0.0012 |     - |     - |      32 B |
|      Length&lt;DerivedUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 316.81 ns | 6.111 ns | 8.158 ns | 1.632 ns | 299.32 ns | 335.38 ns | 317.18 ns | 13.78 |          Slower |    0.41 | 0.0072 |     - |     - |     192 B |
|         Length&lt;BaseUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 317.44 ns | 6.255 ns | 7.446 ns | 1.625 ns | 304.94 ns | 331.73 ns | 316.13 ns | 13.88 |          Slower |    0.43 | 0.0072 |     - |     - |     192 B |
