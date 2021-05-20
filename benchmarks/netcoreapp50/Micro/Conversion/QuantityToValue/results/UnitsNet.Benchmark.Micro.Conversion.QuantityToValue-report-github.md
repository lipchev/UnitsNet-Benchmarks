``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-NXAETD : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                                 Method |                               Categories |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------------- |----------------------------------------- |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|       Length&lt;BaseUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  11.28 ns | 0.217 ns | 0.232 ns | 0.055 ns |  10.99 ns |  11.74 ns |  11.31 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|    Length&lt;DerivedUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  12.31 ns | 0.234 ns | 0.250 ns | 0.059 ns |  11.72 ns |  12.68 ns |  12.31 ns |  1.09 |          Slower |    0.04 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  14.57 ns | 0.289 ns | 0.475 ns | 0.080 ns |  13.89 ns |  15.53 ns |  14.46 ns |  1.32 |          Slower |    0.05 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  14.79 ns | 0.291 ns | 0.272 ns | 0.070 ns |  14.38 ns |  15.31 ns |  14.78 ns |  1.31 |          Slower |    0.04 |      - |     - |     - |         - |
|    IQuantity&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  70.67 ns | 1.408 ns | 2.064 ns | 0.383 ns |  67.14 ns |  75.28 ns |  70.36 ns |  6.23 |          Slower |    0.19 |      - |     - |     - |         - |
|    IQuantity&lt;DerivedUnit&gt;.As(baseUnit) |    Interface,Unit,Value,Micro,Conversion |  72.85 ns | 1.450 ns | 1.552 ns | 0.366 ns |  70.11 ns |  75.96 ns |  72.98 ns |  6.46 |          Slower |    0.18 |      - |     - |     - |         - |
| IQuantity&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  91.01 ns | 1.801 ns | 2.074 ns | 0.464 ns |  87.98 ns |  94.78 ns |  90.90 ns |  8.07 |          Slower |    0.27 |      - |     - |     - |         - |
|         Length&lt;BaseUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 301.63 ns | 5.111 ns | 8.107 ns | 1.411 ns | 288.05 ns | 321.52 ns | 300.57 ns | 26.89 |          Slower |    0.96 | 0.0072 |     - |     - |     192 B |
|      Length&lt;DerivedUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 311.13 ns | 6.216 ns | 5.510 ns | 1.473 ns | 300.70 ns | 321.20 ns | 311.35 ns | 27.48 |          Slower |    0.65 | 0.0072 |     - |     - |     192 B |
