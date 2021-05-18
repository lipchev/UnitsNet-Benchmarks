``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-PAWHDO : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                                 Method |                               Categories |      Mean |     Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------------- |----------------------------------------- |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|    Length&lt;DerivedUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  14.16 ns |  0.279 ns |  0.287 ns | 0.070 ns |  13.58 ns |  14.80 ns |  14.18 ns |  0.96 |            Same |    0.03 |      - |     - |     - |         - |
|       Length&lt;BaseUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  14.71 ns |  0.280 ns |  0.300 ns | 0.071 ns |  14.12 ns |  15.16 ns |  14.71 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  20.45 ns |  0.395 ns |  0.527 ns | 0.105 ns |  19.49 ns |  21.49 ns |  20.38 ns |  1.40 |          Slower |    0.05 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  21.04 ns |  0.404 ns |  0.378 ns | 0.098 ns |  20.32 ns |  21.67 ns |  21.10 ns |  1.43 |          Slower |    0.04 |      - |     - |     - |         - |
|    IQuantity&lt;DerivedUnit&gt;.As(baseUnit) |    Interface,Unit,Value,Micro,Conversion |  89.05 ns |  1.669 ns |  1.561 ns | 0.403 ns |  87.18 ns |  93.15 ns |  88.67 ns |  6.05 |          Slower |    0.12 |      - |     - |     - |         - |
|    IQuantity&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  90.84 ns |  1.736 ns |  1.858 ns | 0.438 ns |  86.84 ns |  93.67 ns |  90.81 ns |  6.18 |          Slower |    0.20 |      - |     - |     - |         - |
| IQuantity&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion | 115.60 ns |  2.285 ns |  2.445 ns | 0.576 ns | 111.82 ns | 119.21 ns | 115.26 ns |  7.86 |          Slower |    0.18 |      - |     - |     - |         - |
|         Length&lt;BaseUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 594.24 ns |  8.837 ns |  8.266 ns | 2.134 ns | 581.11 ns | 608.60 ns | 593.88 ns | 40.40 |          Slower |    1.29 | 0.0303 |     - |     - |     201 B |
|      Length&lt;DerivedUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 602.81 ns | 11.419 ns | 13.150 ns | 2.940 ns | 579.75 ns | 624.41 ns | 603.94 ns | 40.93 |          Slower |    1.28 | 0.0303 |     - |     - |     201 B |
