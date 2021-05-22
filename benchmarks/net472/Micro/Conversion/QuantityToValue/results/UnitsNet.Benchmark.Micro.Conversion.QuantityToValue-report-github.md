``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-LQFONK : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                                 Method |                               Categories |      Mean |     Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------------- |----------------------------------------- |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|       Length&lt;BaseUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  13.98 ns |  0.226 ns |  0.211 ns | 0.055 ns |  13.71 ns |  14.43 ns |  13.98 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|    Length&lt;DerivedUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  14.32 ns |  0.267 ns |  0.262 ns | 0.066 ns |  13.82 ns |  14.82 ns |  14.32 ns |  1.02 |            Same |    0.02 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  19.95 ns |  0.252 ns |  0.236 ns | 0.061 ns |  19.44 ns |  20.35 ns |  20.02 ns |  1.43 |          Slower |    0.02 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  20.04 ns |  0.318 ns |  0.298 ns | 0.077 ns |  19.64 ns |  20.73 ns |  20.13 ns |  1.43 |          Slower |    0.03 |      - |     - |     - |         - |
|    IQuantity&lt;DerivedUnit&gt;.As(baseUnit) |    Interface,Unit,Value,Micro,Conversion |  86.93 ns |  1.242 ns |  1.162 ns | 0.300 ns |  85.30 ns |  89.37 ns |  86.96 ns |  6.22 |          Slower |    0.11 |      - |     - |     - |         - |
|    IQuantity&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  88.07 ns |  1.021 ns |  0.955 ns | 0.247 ns |  85.52 ns |  89.31 ns |  88.28 ns |  6.30 |          Slower |    0.08 |      - |     - |     - |         - |
| IQuantity&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion | 113.94 ns |  2.195 ns |  2.053 ns | 0.530 ns | 109.91 ns | 116.85 ns | 113.29 ns |  8.15 |          Slower |    0.21 |      - |     - |     - |         - |
|         Length&lt;BaseUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 557.61 ns |  8.281 ns |  7.746 ns | 2.000 ns | 545.14 ns | 574.71 ns | 554.65 ns | 39.88 |          Slower |    0.74 | 0.0303 |     - |     - |     201 B |
|      Length&lt;DerivedUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 585.97 ns | 11.039 ns | 10.326 ns | 2.666 ns | 567.52 ns | 605.29 ns | 588.32 ns | 41.91 |          Slower |    0.94 | 0.0303 |     - |     - |     201 B |
