``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-YBRKHT : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                                     Method |                                  Categories |      Mean |     Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------------------------------- |-------------------------------------------- |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|       Length&lt;BaseUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  24.44 ns |  0.445 ns |  0.417 ns | 0.108 ns |  23.75 ns |  25.16 ns |  24.30 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|    Length&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  25.37 ns |  0.499 ns |  0.847 ns | 0.139 ns |  23.60 ns |  26.83 ns |  25.42 ns |  1.04 |            Same |    0.04 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  32.74 ns |  0.623 ns |  0.583 ns | 0.150 ns |  31.43 ns |  33.49 ns |  32.77 ns |  1.34 |          Slower |    0.03 | 0.0050 |     - |     - |      32 B |
|   ILength&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  33.10 ns |  0.650 ns |  0.973 ns | 0.178 ns |  31.80 ns |  35.03 ns |  32.83 ns |  1.35 |          Slower |    0.04 | 0.0050 |     - |     - |      32 B |
|    IQuantity&lt;DerivedUnit&gt;.ToUnit(baseUnit) |    Interface,Unit,Quantity,Micro,Conversion | 120.22 ns |  2.378 ns |  2.830 ns | 0.618 ns | 115.63 ns | 126.42 ns | 120.19 ns |  4.89 |          Slower |    0.13 | 0.0049 |     - |     - |      33 B |
|    IQuantity&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 122.86 ns |  2.414 ns |  2.258 ns | 0.583 ns | 118.89 ns | 127.33 ns | 122.96 ns |  5.03 |          Slower |    0.11 | 0.0048 |     - |     - |      33 B |
| IQuantity&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 146.85 ns |  2.930 ns |  4.107 ns | 0.790 ns | 140.04 ns | 153.67 ns | 147.54 ns |  6.02 |          Slower |    0.23 | 0.0046 |     - |     - |      33 B |
|      Length&lt;DerivedUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 564.00 ns | 11.182 ns | 15.676 ns | 3.017 ns | 541.25 ns | 596.94 ns | 561.58 ns | 22.85 |          Slower |    0.62 | 0.0303 |     - |     - |     201 B |
|         Length&lt;BaseUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 571.77 ns | 11.145 ns | 20.098 ns | 3.139 ns | 540.69 ns | 616.99 ns | 570.97 ns | 24.15 |          Slower |    0.66 | 0.0303 |     - |     - |     201 B |
