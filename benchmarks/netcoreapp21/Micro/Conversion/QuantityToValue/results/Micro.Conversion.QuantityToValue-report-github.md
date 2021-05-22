``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-QVYIGA : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                                 Method |                               Categories |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------------- |----------------------------------------- |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|       Length&lt;BaseUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  12.08 ns | 0.233 ns | 0.249 ns | 0.059 ns |  11.65 ns |  12.48 ns |  12.03 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|    Length&lt;DerivedUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  12.38 ns | 0.245 ns | 0.217 ns | 0.058 ns |  12.10 ns |  12.66 ns |  12.44 ns |  1.03 |            Same |    0.03 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  17.12 ns | 0.176 ns | 0.165 ns | 0.042 ns |  16.80 ns |  17.39 ns |  17.13 ns |  1.42 |          Slower |    0.03 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  17.21 ns | 0.338 ns | 0.362 ns | 0.085 ns |  16.74 ns |  17.85 ns |  17.03 ns |  1.43 |          Slower |    0.05 |      - |     - |     - |         - |
|    IQuantity&lt;DerivedUnit&gt;.As(baseUnit) |    Interface,Unit,Value,Micro,Conversion |  84.69 ns | 1.275 ns | 1.131 ns | 0.302 ns |  83.03 ns |  86.72 ns |  84.34 ns |  7.03 |          Slower |    0.20 |      - |     - |     - |         - |
|    IQuantity&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  88.29 ns | 1.567 ns | 1.465 ns | 0.378 ns |  86.00 ns |  91.25 ns |  88.08 ns |  7.32 |          Slower |    0.21 |      - |     - |     - |         - |
| IQuantity&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion | 109.59 ns | 1.551 ns | 1.451 ns | 0.375 ns | 107.83 ns | 112.22 ns | 109.38 ns |  9.08 |          Slower |    0.19 |      - |     - |     - |         - |
|         Length&lt;BaseUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 534.54 ns | 7.736 ns | 7.237 ns | 1.869 ns | 526.45 ns | 546.40 ns | 535.09 ns | 44.31 |          Slower |    1.20 | 0.0288 |     - |     - |     192 B |
|      Length&lt;DerivedUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 541.98 ns | 6.431 ns | 6.016 ns | 1.553 ns | 532.89 ns | 551.93 ns | 540.28 ns | 44.93 |          Slower |    1.31 | 0.0288 |     - |     - |     192 B |
