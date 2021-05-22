``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-YCQGFP : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                                 Method |                               Categories |      Mean |     Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------------- |----------------------------------------- |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|    Length&lt;DerivedUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  14.34 ns |  0.210 ns |  0.197 ns | 0.051 ns |  14.01 ns |  14.77 ns |  14.37 ns |  0.99 |            Same |    0.02 |      - |     - |     - |         - |
|       Length&lt;BaseUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  14.45 ns |  0.201 ns |  0.188 ns | 0.048 ns |  14.22 ns |  14.83 ns |  14.40 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  20.11 ns |  0.241 ns |  0.213 ns | 0.057 ns |  19.73 ns |  20.51 ns |  20.15 ns |  1.39 |          Slower |    0.02 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  20.26 ns |  0.168 ns |  0.140 ns | 0.039 ns |  20.03 ns |  20.59 ns |  20.23 ns |  1.40 |          Slower |    0.02 |      - |     - |     - |         - |
|    IQuantity&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  89.95 ns |  1.309 ns |  1.225 ns | 0.316 ns |  87.31 ns |  91.86 ns |  89.91 ns |  6.22 |          Slower |    0.10 |      - |     - |     - |         - |
|    IQuantity&lt;DerivedUnit&gt;.As(baseUnit) |    Interface,Unit,Value,Micro,Conversion |  90.03 ns |  1.764 ns |  1.732 ns | 0.433 ns |  87.78 ns |  93.35 ns |  89.78 ns |  6.23 |          Slower |    0.14 |      - |     - |     - |         - |
| IQuantity&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion | 115.49 ns |  1.362 ns |  1.207 ns | 0.323 ns | 112.45 ns | 117.67 ns | 115.44 ns |  8.00 |          Slower |    0.10 |      - |     - |     - |         - |
|         Length&lt;BaseUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 604.52 ns | 10.892 ns | 10.188 ns | 2.631 ns | 588.88 ns | 623.48 ns | 601.05 ns | 41.83 |          Slower |    0.91 | 0.0288 |     - |     - |     192 B |
|      Length&lt;DerivedUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 617.71 ns | 11.671 ns | 11.462 ns | 2.866 ns | 602.45 ns | 642.03 ns | 618.05 ns | 42.70 |          Slower |    1.03 | 0.0288 |     - |     - |     192 B |
