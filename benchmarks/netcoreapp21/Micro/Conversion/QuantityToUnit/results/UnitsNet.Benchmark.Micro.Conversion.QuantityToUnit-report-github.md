``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-NHGTQM : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                                     Method |                                  Categories |      Mean |     Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------------------------------- |-------------------------------------------- |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|    Length&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  18.73 ns |  0.354 ns |  0.363 ns | 0.088 ns |  18.19 ns |  19.63 ns |  18.63 ns |  0.99 |            Same |    0.03 |      - |     - |     - |         - |
|       Length&lt;BaseUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  18.86 ns |  0.356 ns |  0.366 ns | 0.089 ns |  18.36 ns |  19.64 ns |  18.67 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  27.56 ns |  0.524 ns |  0.490 ns | 0.126 ns |  26.88 ns |  28.42 ns |  27.53 ns |  1.46 |          Slower |    0.04 | 0.0049 |     - |     - |      32 B |
|      ILength&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  27.69 ns |  0.481 ns |  0.426 ns | 0.114 ns |  27.00 ns |  28.51 ns |  27.79 ns |  1.47 |          Slower |    0.03 | 0.0049 |     - |     - |      32 B |
|    IQuantity&lt;DerivedUnit&gt;.ToUnit(baseUnit) |    Interface,Unit,Quantity,Micro,Conversion |  96.69 ns |  1.340 ns |  1.253 ns | 0.324 ns |  94.17 ns |  98.23 ns |  96.64 ns |  5.12 |          Slower |    0.13 | 0.0046 |     - |     - |      32 B |
|    IQuantity&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 105.46 ns |  2.097 ns |  2.415 ns | 0.540 ns | 102.13 ns | 111.81 ns | 105.75 ns |  5.60 |          Slower |    0.19 | 0.0043 |     - |     - |      33 B |
| IQuantity&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 121.28 ns |  1.529 ns |  1.277 ns | 0.354 ns | 117.99 ns | 123.19 ns | 121.20 ns |  6.42 |          Slower |    0.13 | 0.0046 |     - |     - |      32 B |
|         Length&lt;BaseUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 507.77 ns | 10.133 ns | 16.649 ns | 2.814 ns | 487.21 ns | 548.84 ns | 502.97 ns | 27.19 |          Slower |    1.19 | 0.0281 |     - |     - |     192 B |
|      Length&lt;DerivedUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 508.47 ns |  9.922 ns |  9.745 ns | 2.436 ns | 493.16 ns | 526.02 ns | 508.59 ns | 26.96 |          Slower |    0.79 | 0.0281 |     - |     - |     192 B |
