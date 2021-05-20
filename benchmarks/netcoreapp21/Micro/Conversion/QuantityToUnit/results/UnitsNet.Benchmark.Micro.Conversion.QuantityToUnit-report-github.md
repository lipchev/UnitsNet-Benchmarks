``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-XVIKQE : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                                     Method |                                  Categories |      Mean |      Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------------------------------- |-------------------------------------------- |----------:|-----------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|    Length&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  21.88 ns |   3.020 ns | 0.166 ns | 0.096 ns |  21.76 ns |  22.07 ns |  21.80 ns |  1.00 |               ? |    0.01 |      - |     - |     - |         - |
|       Length&lt;BaseUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  21.98 ns |   3.301 ns | 0.181 ns | 0.104 ns |  21.77 ns |  22.11 ns |  22.04 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  31.17 ns |   9.528 ns | 0.522 ns | 0.302 ns |  30.77 ns |  31.76 ns |  30.98 ns |  1.42 |               ? |    0.02 | 0.0049 |     - |     - |      32 B |
|   ILength&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  31.93 ns |   6.623 ns | 0.363 ns | 0.210 ns |  31.70 ns |  32.35 ns |  31.74 ns |  1.45 |               ? |    0.03 | 0.0049 |     - |     - |      32 B |
|    IQuantity&lt;DerivedUnit&gt;.ToUnit(baseUnit) |    Interface,Unit,Quantity,Micro,Conversion | 110.44 ns |  22.231 ns | 1.219 ns | 0.704 ns | 109.10 ns | 111.49 ns | 110.72 ns |  5.03 |               ? |    0.02 | 0.0046 |     - |     - |      32 B |
|    IQuantity&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 126.33 ns |  27.390 ns | 1.501 ns | 0.867 ns | 124.63 ns | 127.46 ns | 126.91 ns |  5.75 |               ? |    0.03 | 0.0043 |     - |     - |      33 B |
| IQuantity&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 150.12 ns |  32.858 ns | 1.801 ns | 1.040 ns | 148.57 ns | 152.10 ns | 149.71 ns |  6.83 |               ? |    0.10 | 0.0041 |     - |     - |      32 B |
|         Length&lt;BaseUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 584.31 ns |  96.790 ns | 5.305 ns | 3.063 ns | 578.20 ns | 587.68 ns | 587.06 ns | 26.59 |               ? |    0.37 | 0.0281 |     - |     - |     192 B |
|      Length&lt;DerivedUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 593.73 ns | 102.831 ns | 5.637 ns | 3.254 ns | 587.95 ns | 599.21 ns | 594.05 ns | 27.02 |               ? |    0.45 | 0.0281 |     - |     - |     192 B |
