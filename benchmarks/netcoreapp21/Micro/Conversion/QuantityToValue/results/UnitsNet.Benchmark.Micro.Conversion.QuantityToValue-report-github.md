``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-DCZIQK : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                                 Method |                               Categories |      Mean |     Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------------- |----------------------------------------- |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|       Length&lt;BaseUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  12.64 ns |  0.238 ns |  0.310 ns | 0.063 ns |  12.01 ns |  13.22 ns |  12.66 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|    Length&lt;DerivedUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  13.10 ns |  0.261 ns |  0.515 ns | 0.074 ns |  11.96 ns |  14.13 ns |  13.05 ns |  1.04 |            Same |    0.05 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  17.68 ns |  0.350 ns |  0.374 ns | 0.088 ns |  16.99 ns |  18.47 ns |  17.69 ns |  1.40 |          Slower |    0.04 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  17.91 ns |  0.353 ns |  0.446 ns | 0.093 ns |  17.24 ns |  18.78 ns |  17.99 ns |  1.42 |          Slower |    0.05 |      - |     - |     - |         - |
|    IQuantity&lt;DerivedUnit&gt;.As(baseUnit) |    Interface,Unit,Value,Micro,Conversion |  86.55 ns |  1.689 ns |  1.945 ns | 0.435 ns |  83.37 ns |  89.47 ns |  86.34 ns |  6.86 |          Slower |    0.26 |      - |     - |     - |         - |
|    IQuantity&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  89.65 ns |  1.733 ns |  2.253 ns | 0.460 ns |  84.96 ns |  94.84 ns |  89.52 ns |  7.09 |          Slower |    0.18 |      - |     - |     - |         - |
| IQuantity&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion | 117.44 ns |  2.165 ns |  2.126 ns | 0.532 ns | 112.38 ns | 120.91 ns | 117.44 ns |  9.25 |          Slower |    0.26 |      - |     - |     - |         - |
|         Length&lt;BaseUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 581.83 ns |  8.976 ns |  7.957 ns | 2.127 ns | 563.86 ns | 593.28 ns | 580.18 ns | 45.86 |          Slower |    1.07 | 0.0281 |     - |     - |     192 B |
|      Length&lt;DerivedUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 654.33 ns | 12.565 ns | 11.139 ns | 2.977 ns | 639.53 ns | 675.69 ns | 652.27 ns | 51.58 |          Slower |    1.31 | 0.0281 |     - |     - |     192 B |
