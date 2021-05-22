``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-VJWDWC : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                                 Method |                               Categories |      Mean |     Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------------- |----------------------------------------- |----------:|----------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|       Length&lt;BaseUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  12.22 ns |  0.241 ns | 0.322 ns | 0.064 ns |  11.70 ns |  13.01 ns |  12.18 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|    Length&lt;DerivedUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  12.27 ns |  0.245 ns | 0.478 ns | 0.070 ns |  11.51 ns |  13.32 ns |  12.23 ns |  1.02 |            Same |    0.05 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  17.37 ns |  0.337 ns | 0.450 ns | 0.090 ns |  16.62 ns |  18.28 ns |  17.38 ns |  1.42 |          Slower |    0.06 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  17.42 ns |  0.341 ns | 0.443 ns | 0.090 ns |  16.84 ns |  18.53 ns |  17.22 ns |  1.43 |          Slower |    0.05 |      - |     - |     - |         - |
|    IQuantity&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  76.80 ns |  1.529 ns | 1.820 ns | 0.397 ns |  74.59 ns |  80.80 ns |  76.57 ns |  6.30 |          Slower |    0.24 |      - |     - |     - |         - |
|    IQuantity&lt;DerivedUnit&gt;.As(baseUnit) |    Interface,Unit,Value,Micro,Conversion |  76.96 ns |  1.538 ns | 2.653 ns | 0.430 ns |  72.57 ns |  81.55 ns |  76.67 ns |  6.34 |          Slower |    0.21 |      - |     - |     - |         - |
| IQuantity&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  98.13 ns |  1.923 ns | 2.137 ns | 0.490 ns |  94.15 ns | 101.68 ns |  98.14 ns |  8.04 |          Slower |    0.19 |      - |     - |     - |         - |
|         Length&lt;BaseUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 508.44 ns |  7.829 ns | 6.940 ns | 1.855 ns | 497.86 ns | 519.65 ns | 507.32 ns | 41.47 |          Slower |    1.42 | 0.0288 |     - |     - |     192 B |
|      Length&lt;DerivedUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 521.52 ns | 10.190 ns | 9.034 ns | 2.414 ns | 506.90 ns | 542.60 ns | 520.52 ns | 42.53 |          Slower |    1.34 | 0.0288 |     - |     - |     192 B |
