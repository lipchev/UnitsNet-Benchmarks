``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-BQWJKB : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                                     Method |                                  Categories |      Mean |     Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------------------------------- |-------------------------------------------- |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|       Length&lt;BaseUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  20.59 ns |  0.411 ns |  0.403 ns | 0.101 ns |  19.92 ns |  21.33 ns |  20.61 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|    Length&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  20.71 ns |  0.339 ns |  0.301 ns | 0.080 ns |  20.26 ns |  21.17 ns |  20.72 ns |  1.01 |            Same |    0.03 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  28.05 ns |  0.543 ns |  0.625 ns | 0.140 ns |  26.95 ns |  29.43 ns |  27.99 ns |  1.36 |          Slower |    0.03 | 0.0050 |     - |     - |      32 B |
|      ILength&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  28.25 ns |  0.548 ns |  0.713 ns | 0.146 ns |  27.07 ns |  29.75 ns |  28.14 ns |  1.38 |          Slower |    0.04 | 0.0050 |     - |     - |      32 B |
|    IQuantity&lt;DerivedUnit&gt;.ToUnit(baseUnit) |    Interface,Unit,Quantity,Micro,Conversion |  91.74 ns |  1.206 ns |  1.128 ns | 0.291 ns |  90.02 ns |  93.50 ns |  91.88 ns |  4.45 |          Slower |    0.11 | 0.0049 |     - |     - |      32 B |
|    IQuantity&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  94.74 ns |  1.489 ns |  1.243 ns | 0.345 ns |  92.62 ns |  97.26 ns |  94.98 ns |  4.60 |          Slower |    0.11 | 0.0050 |     - |     - |      33 B |
| IQuantity&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 113.02 ns |  1.984 ns |  1.758 ns | 0.470 ns | 109.98 ns | 116.25 ns | 112.81 ns |  5.49 |          Slower |    0.15 | 0.0049 |     - |     - |      32 B |
|      Length&lt;DerivedUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 520.01 ns |  9.430 ns |  8.821 ns | 2.278 ns | 502.30 ns | 537.68 ns | 518.70 ns | 25.25 |          Slower |    0.62 | 0.0288 |     - |     - |     192 B |
|         Length&lt;BaseUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 541.53 ns | 10.436 ns | 14.629 ns | 2.815 ns | 519.20 ns | 581.95 ns | 539.44 ns | 26.34 |          Slower |    1.11 | 0.0288 |     - |     - |     192 B |
