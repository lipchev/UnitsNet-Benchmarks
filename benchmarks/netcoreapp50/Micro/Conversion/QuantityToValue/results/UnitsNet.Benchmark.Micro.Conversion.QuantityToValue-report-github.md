``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-VZOJZV : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                                 Method |                               Categories |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------------- |----------------------------------------- |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|    Length&lt;DerivedUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  16.53 ns | 0.325 ns | 0.561 ns | 0.091 ns |  15.78 ns |  17.93 ns |  16.34 ns |  0.97 |            Same |    0.05 |      - |     - |     - |         - |
|       Length&lt;BaseUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  16.89 ns | 0.336 ns | 0.298 ns | 0.080 ns |  16.61 ns |  17.45 ns |  16.73 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  19.38 ns | 0.152 ns | 0.127 ns | 0.035 ns |  19.13 ns |  19.54 ns |  19.41 ns |  1.15 |          Slower |    0.02 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  19.44 ns | 0.378 ns | 0.465 ns | 0.099 ns |  18.88 ns |  20.63 ns |  19.38 ns |  1.15 |          Slower |    0.04 |      - |     - |     - |         - |
|    IQuantity&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  83.73 ns | 1.602 ns | 1.907 ns | 0.416 ns |  81.34 ns |  88.38 ns |  83.14 ns |  4.99 |          Slower |    0.14 |      - |     - |     - |         - |
|    IQuantity&lt;DerivedUnit&gt;.As(baseUnit) |    Interface,Unit,Value,Micro,Conversion |  85.48 ns | 0.885 ns | 0.785 ns | 0.210 ns |  84.46 ns |  87.13 ns |  85.35 ns |  5.06 |          Slower |    0.08 |      - |     - |     - |         - |
| IQuantity&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion | 105.58 ns | 2.061 ns | 2.117 ns | 0.513 ns | 102.70 ns | 110.49 ns | 104.98 ns |  6.25 |          Slower |    0.16 |      - |     - |     - |         - |
|         Length&lt;BaseUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 395.01 ns | 7.769 ns | 8.635 ns | 1.981 ns | 383.25 ns | 412.50 ns | 392.96 ns | 23.46 |          Slower |    0.73 | 0.0099 |     - |     - |     192 B |
|      Length&lt;DerivedUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 408.33 ns | 8.049 ns | 9.582 ns | 2.091 ns | 395.58 ns | 424.26 ns | 405.68 ns | 24.35 |          Slower |    0.75 | 0.0099 |     - |     - |     192 B |
