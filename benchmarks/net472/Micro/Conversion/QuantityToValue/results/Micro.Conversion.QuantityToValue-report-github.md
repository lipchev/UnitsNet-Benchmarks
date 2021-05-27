``` ini

BenchmarkDotNet=v0.13.0, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET SDK=5.0.203
  [Host]     : .NET 5.0.6 (5.0.621.22011), X64 RyuJIT
  Job-FOKOKN : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET Framework 4.7.2  Toolchain=net472  

```
|                                 Method |                               Categories |      Mean |    Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------------- |----------------------------------------- |----------:|---------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|    Length&lt;DerivedUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  12.30 ns | 0.228 ns |  0.224 ns | 0.056 ns |  12.00 ns |  12.71 ns |  12.29 ns |  1.00 |            Same |    0.03 |      - |     - |     - |         - |
|       Length&lt;BaseUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  12.35 ns | 0.245 ns |  0.557 ns | 0.071 ns |  11.65 ns |  13.51 ns |  12.18 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  15.87 ns | 0.220 ns |  0.195 ns | 0.052 ns |  15.66 ns |  16.27 ns |  15.82 ns |  1.30 |          Slower |    0.03 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  15.96 ns | 0.315 ns |  0.295 ns | 0.076 ns |  15.60 ns |  16.59 ns |  15.94 ns |  1.30 |          Slower |    0.04 |      - |     - |     - |         - |
|    IQuantity&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  84.24 ns | 1.633 ns |  2.235 ns | 0.438 ns |  81.58 ns |  88.27 ns |  83.43 ns |  6.68 |          Slower |    0.42 |      - |     - |     - |         - |
|    IQuantity&lt;DerivedUnit&gt;.As(baseUnit) |    Interface,Unit,Value,Micro,Conversion |  87.46 ns | 1.067 ns |  0.891 ns | 0.247 ns |  86.24 ns |  89.15 ns |  87.40 ns |  7.18 |          Slower |    0.15 |      - |     - |     - |         - |
| IQuantity&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion | 110.54 ns | 2.178 ns |  3.579 ns | 0.605 ns | 105.18 ns | 117.94 ns | 110.89 ns |  8.75 |          Slower |    0.53 |      - |     - |     - |         - |
|         Length&lt;BaseUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 493.41 ns | 9.852 ns | 12.099 ns | 2.580 ns | 479.71 ns | 525.16 ns | 488.79 ns | 39.39 |          Slower |    1.95 | 0.0303 |     - |     - |     201 B |
|      Length&lt;DerivedUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 502.55 ns | 9.539 ns | 11.715 ns | 2.498 ns | 487.09 ns | 528.21 ns | 497.07 ns | 40.13 |          Slower |    2.09 | 0.0303 |     - |     - |     201 B |
