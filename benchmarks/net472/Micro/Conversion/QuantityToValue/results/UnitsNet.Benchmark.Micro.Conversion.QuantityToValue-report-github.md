``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-FGEIIW : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                                 Method |                               Categories |      Mean |     Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------------- |----------------------------------------- |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|       Length&lt;BaseUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  12.99 ns |  0.259 ns |  0.318 ns | 0.068 ns |  12.32 ns |  13.56 ns |  12.97 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|    Length&lt;DerivedUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  13.00 ns |  0.250 ns |  0.278 ns | 0.064 ns |  12.56 ns |  13.52 ns |  13.02 ns |  1.00 |            Same |    0.03 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  17.77 ns |  0.345 ns |  0.449 ns | 0.092 ns |  17.07 ns |  18.63 ns |  17.71 ns |  1.37 |          Slower |    0.05 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  17.84 ns |  0.347 ns |  0.341 ns | 0.085 ns |  17.42 ns |  18.46 ns |  17.76 ns |  1.38 |          Slower |    0.04 |      - |     - |     - |         - |
|    IQuantity&lt;DerivedUnit&gt;.As(baseUnit) |    Interface,Unit,Value,Micro,Conversion |  88.65 ns |  1.263 ns |  1.055 ns | 0.293 ns |  87.17 ns |  90.70 ns |  88.32 ns |  6.83 |          Slower |    0.21 |      - |     - |     - |         - |
|    IQuantity&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  89.49 ns |  1.739 ns |  1.861 ns | 0.439 ns |  87.37 ns |  93.59 ns |  89.30 ns |  6.89 |          Slower |    0.26 |      - |     - |     - |         - |
| IQuantity&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion | 116.30 ns |  2.324 ns |  2.387 ns | 0.579 ns | 113.32 ns | 120.62 ns | 116.53 ns |  8.96 |          Slower |    0.28 |      - |     - |     - |         - |
|         Length&lt;BaseUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 545.39 ns | 10.583 ns | 13.761 ns | 2.809 ns | 516.01 ns | 572.17 ns | 543.78 ns | 42.09 |          Slower |    1.37 | 0.0303 |     - |     - |     201 B |
|      Length&lt;DerivedUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 555.61 ns | 10.838 ns | 14.835 ns | 2.909 ns | 531.49 ns | 585.25 ns | 553.56 ns | 42.79 |          Slower |    1.42 | 0.0303 |     - |     - |     201 B |
