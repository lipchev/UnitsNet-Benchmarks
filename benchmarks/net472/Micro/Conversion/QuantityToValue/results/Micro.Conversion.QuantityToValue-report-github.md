``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-FZQUUR : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                                 Method |                               Categories |      Mean |     Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------------- |----------------------------------------- |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|       Length&lt;BaseUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  13.92 ns |  0.237 ns |  0.210 ns | 0.056 ns |  13.60 ns |  14.40 ns |  13.91 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|    Length&lt;DerivedUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  14.65 ns |  0.291 ns |  0.335 ns | 0.075 ns |  14.17 ns |  15.30 ns |  14.65 ns |  1.06 |            Same |    0.03 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  19.76 ns |  0.292 ns |  0.258 ns | 0.069 ns |  19.30 ns |  20.24 ns |  19.81 ns |  1.42 |          Slower |    0.03 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  20.56 ns |  0.383 ns |  0.441 ns | 0.099 ns |  19.93 ns |  21.30 ns |  20.46 ns |  1.48 |          Slower |    0.05 |      - |     - |     - |         - |
|    IQuantity&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  91.53 ns |  1.722 ns |  1.611 ns | 0.416 ns |  89.08 ns |  94.55 ns |  91.79 ns |  6.59 |          Slower |    0.15 |      - |     - |     - |         - |
|    IQuantity&lt;DerivedUnit&gt;.As(baseUnit) |    Interface,Unit,Value,Micro,Conversion |  92.05 ns |  1.799 ns |  1.767 ns | 0.442 ns |  89.23 ns |  95.02 ns |  91.85 ns |  6.61 |          Slower |    0.13 |      - |     - |     - |         - |
| IQuantity&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion | 118.61 ns |  1.695 ns |  1.585 ns | 0.409 ns | 115.79 ns | 121.43 ns | 118.75 ns |  8.54 |          Slower |    0.19 |      - |     - |     - |         - |
|         Length&lt;BaseUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 602.13 ns | 11.480 ns | 10.177 ns | 2.720 ns | 579.95 ns | 616.36 ns | 604.13 ns | 43.28 |          Slower |    1.15 | 0.0303 |     - |     - |     201 B |
|      Length&lt;DerivedUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 606.30 ns |  8.139 ns |  7.613 ns | 1.966 ns | 591.45 ns | 621.58 ns | 605.42 ns | 43.66 |          Slower |    0.78 | 0.0303 |     - |     - |     201 B |
