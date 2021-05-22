``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-JVCVVR : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                                 Method |                               Categories |      Mean |     Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------------- |----------------------------------------- |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|    Length&lt;DerivedUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  12.46 ns |  0.240 ns |  0.213 ns | 0.057 ns |  12.06 ns |  12.89 ns |  12.49 ns |  0.98 |            Same |    0.03 |      - |     - |     - |         - |
|       Length&lt;BaseUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  12.63 ns |  0.239 ns |  0.223 ns | 0.058 ns |  12.14 ns |  12.94 ns |  12.64 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  17.93 ns |  0.316 ns |  0.296 ns | 0.076 ns |  17.40 ns |  18.41 ns |  17.98 ns |  1.42 |          Slower |    0.03 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  18.12 ns |  0.359 ns |  0.479 ns | 0.096 ns |  17.14 ns |  19.31 ns |  17.97 ns |  1.44 |          Slower |    0.06 |      - |     - |     - |         - |
|    IQuantity&lt;DerivedUnit&gt;.As(baseUnit) |    Interface,Unit,Value,Micro,Conversion |  88.52 ns |  1.586 ns |  1.484 ns | 0.383 ns |  85.43 ns |  90.98 ns |  88.80 ns |  7.01 |          Slower |    0.17 |      - |     - |     - |         - |
|    IQuantity&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  89.89 ns |  1.505 ns |  1.408 ns | 0.364 ns |  87.57 ns |  92.25 ns |  89.89 ns |  7.12 |          Slower |    0.19 |      - |     - |     - |         - |
| IQuantity&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion | 116.19 ns |  2.267 ns |  3.103 ns | 0.608 ns | 109.48 ns | 120.65 ns | 116.36 ns |  9.21 |          Slower |    0.29 |      - |     - |     - |         - |
|      Length&lt;DerivedUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 561.30 ns | 11.001 ns | 15.422 ns | 2.968 ns | 541.10 ns | 595.46 ns | 556.63 ns | 44.66 |          Slower |    1.06 | 0.0288 |     - |     - |     192 B |
|         Length&lt;BaseUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 573.95 ns | 10.706 ns |  8.940 ns | 2.479 ns | 554.58 ns | 589.43 ns | 575.33 ns | 45.29 |          Slower |    0.89 | 0.0288 |     - |     - |     192 B |
