``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-KCQESU : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                                     Method |                                  Categories |      Mean |     Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------------------------------- |-------------------------------------------- |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|    Length&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  26.72 ns |  0.453 ns |  0.423 ns | 0.109 ns |  25.87 ns |  27.34 ns |  26.89 ns |  0.99 |            Same |    0.03 |      - |     - |     - |         - |
|       Length&lt;BaseUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  26.83 ns |  0.522 ns |  0.601 ns | 0.134 ns |  25.92 ns |  27.94 ns |  26.64 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  36.46 ns |  0.426 ns |  0.399 ns | 0.103 ns |  35.30 ns |  36.95 ns |  36.50 ns |  1.35 |          Slower |    0.03 | 0.0049 |     - |     - |      32 B |
|   ILength&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  37.64 ns |  0.643 ns |  0.660 ns | 0.160 ns |  36.21 ns |  38.70 ns |  37.72 ns |  1.40 |          Slower |    0.04 | 0.0049 |     - |     - |      32 B |
|    IQuantity&lt;DerivedUnit&gt;.ToUnit(baseUnit) |    Interface,Unit,Quantity,Micro,Conversion | 133.83 ns |  2.276 ns |  2.129 ns | 0.550 ns | 130.45 ns | 137.38 ns | 133.69 ns |  4.97 |          Slower |    0.14 | 0.0047 |     - |     - |      33 B |
|    IQuantity&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 143.17 ns |  2.521 ns |  2.358 ns | 0.609 ns | 138.69 ns | 147.29 ns | 142.85 ns |  5.32 |          Slower |    0.16 | 0.0043 |     - |     - |      33 B |
| IQuantity&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 161.69 ns |  1.959 ns |  1.832 ns | 0.473 ns | 158.42 ns | 164.23 ns | 161.78 ns |  6.00 |          Slower |    0.18 | 0.0041 |     - |     - |      33 B |
|         Length&lt;BaseUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 619.43 ns | 10.709 ns | 10.017 ns | 2.586 ns | 597.74 ns | 634.58 ns | 619.12 ns | 23.00 |          Slower |    0.63 | 0.0288 |     - |     - |     201 B |
|      Length&lt;DerivedUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 632.99 ns | 12.164 ns | 14.008 ns | 3.132 ns | 613.45 ns | 656.12 ns | 627.80 ns | 23.60 |          Slower |    0.55 | 0.0288 |     - |     - |     201 B |
