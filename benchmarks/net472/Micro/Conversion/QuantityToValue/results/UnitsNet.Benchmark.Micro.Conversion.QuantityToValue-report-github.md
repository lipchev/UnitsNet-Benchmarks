``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-YVPOSN : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                                 Method |                               Categories |      Mean |     Error |    StdDev |   StdErr |    Median |       Min |       Max | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------------- |----------------------------------------- |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|    Length&lt;DerivedUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  12.07 ns |  0.213 ns |  0.178 ns | 0.049 ns |  12.11 ns |  11.77 ns |  12.37 ns |  0.99 |            Same |    0.03 |      - |     - |     - |         - |
|       Length&lt;BaseUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  12.21 ns |  0.214 ns |  0.190 ns | 0.051 ns |  12.25 ns |  11.83 ns |  12.59 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  16.91 ns |  0.331 ns |  0.431 ns | 0.088 ns |  16.91 ns |  16.14 ns |  17.56 ns |  1.37 |          Slower |    0.05 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  16.96 ns |  0.288 ns |  0.256 ns | 0.068 ns |  16.97 ns |  16.55 ns |  17.37 ns |  1.39 |          Slower |    0.03 |      - |     - |     - |         - |
|    IQuantity&lt;DerivedUnit&gt;.As(baseUnit) |    Interface,Unit,Value,Micro,Conversion |  85.26 ns |  1.683 ns |  2.903 ns | 0.471 ns |  84.17 ns |  80.03 ns |  90.75 ns |  7.02 |          Slower |    0.26 |      - |     - |     - |         - |
|    IQuantity&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  85.75 ns |  1.707 ns |  2.159 ns | 0.450 ns |  85.58 ns |  82.35 ns |  89.69 ns |  7.04 |          Slower |    0.22 |      - |     - |     - |         - |
| IQuantity&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion | 110.88 ns |  2.111 ns |  5.059 ns | 0.613 ns | 109.03 ns | 103.71 ns | 123.49 ns |  9.67 |          Slower |    0.47 |      - |     - |     - |         - |
|         Length&lt;BaseUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 506.76 ns |  9.933 ns | 15.465 ns | 2.734 ns | 501.55 ns | 487.22 ns | 543.81 ns | 41.07 |          Slower |    0.84 | 0.0288 |     - |     - |     201 B |
|      Length&lt;DerivedUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 522.64 ns | 10.388 ns | 11.546 ns | 2.649 ns | 520.62 ns | 501.67 ns | 544.49 ns | 42.71 |          Slower |    1.12 | 0.0288 |     - |     - |     201 B |
