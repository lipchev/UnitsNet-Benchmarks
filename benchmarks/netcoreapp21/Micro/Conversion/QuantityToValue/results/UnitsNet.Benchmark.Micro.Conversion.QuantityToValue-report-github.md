``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-IAPCYQ : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                                 Method |                               Categories |      Mean |     Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------------- |----------------------------------------- |----------:|----------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|       Length&lt;BaseUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  10.76 ns |  0.215 ns | 0.413 ns | 0.061 ns |  10.20 ns |  12.01 ns |  10.63 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|    Length&lt;DerivedUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  10.86 ns |  0.178 ns | 0.167 ns | 0.043 ns |  10.62 ns |  11.22 ns |  10.82 ns |  0.98 |            Same |    0.04 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  15.51 ns |  0.274 ns | 0.229 ns | 0.063 ns |  15.26 ns |  15.97 ns |  15.55 ns |  1.38 |          Slower |    0.06 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  15.97 ns |  0.319 ns | 0.706 ns | 0.092 ns |  14.89 ns |  17.92 ns |  15.81 ns |  1.49 |          Slower |    0.07 |      - |     - |     - |         - |
|    IQuantity&lt;DerivedUnit&gt;.As(baseUnit) |    Interface,Unit,Value,Micro,Conversion |  87.50 ns |  1.703 ns | 1.593 ns | 0.411 ns |  85.54 ns |  91.10 ns |  87.20 ns |  7.87 |          Slower |    0.38 |      - |     - |     - |         - |
|    IQuantity&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  87.70 ns |  1.732 ns | 4.150 ns | 0.503 ns |  77.13 ns |  94.00 ns |  88.52 ns |  8.01 |          Slower |    0.47 |      - |     - |     - |         - |
| IQuantity&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion | 111.46 ns |  1.352 ns | 1.265 ns | 0.327 ns | 108.68 ns | 113.39 ns | 111.75 ns | 10.02 |          Slower |    0.45 |      - |     - |     - |         - |
|         Length&lt;BaseUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 562.37 ns |  6.337 ns | 5.928 ns | 1.531 ns | 552.22 ns | 572.59 ns | 563.41 ns | 50.56 |          Slower |    2.16 | 0.0281 |     - |     - |     192 B |
|      Length&lt;DerivedUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 583.89 ns | 10.243 ns | 9.581 ns | 2.474 ns | 565.41 ns | 604.73 ns | 585.03 ns | 52.50 |          Slower |    2.39 | 0.0281 |     - |     - |     192 B |
