``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-JSLFTT : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                                 Method |                               Categories |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------------- |----------------------------------------- |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|       Length&lt;BaseUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  12.83 ns | 0.256 ns | 0.263 ns | 0.064 ns |  12.43 ns |  13.27 ns |  12.80 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|    Length&lt;DerivedUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  12.83 ns | 0.254 ns | 0.340 ns | 0.068 ns |  12.32 ns |  13.55 ns |  12.83 ns |  1.00 |            Same |    0.03 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  16.22 ns | 0.263 ns | 0.233 ns | 0.062 ns |  15.91 ns |  16.75 ns |  16.21 ns |  1.27 |          Slower |    0.03 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  16.34 ns | 0.201 ns | 0.188 ns | 0.049 ns |  16.10 ns |  16.71 ns |  16.32 ns |  1.27 |          Slower |    0.04 |      - |     - |     - |         - |
|    IQuantity&lt;DerivedUnit&gt;.As(baseUnit) |    Interface,Unit,Value,Micro,Conversion |  79.41 ns | 1.443 ns | 1.544 ns | 0.364 ns |  76.92 ns |  82.61 ns |  79.65 ns |  6.20 |          Slower |    0.18 |      - |     - |     - |         - |
|    IQuantity&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  79.81 ns | 0.985 ns | 0.922 ns | 0.238 ns |  78.73 ns |  81.35 ns |  79.88 ns |  6.23 |          Slower |    0.12 |      - |     - |     - |         - |
| IQuantity&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion | 100.84 ns | 1.845 ns | 1.726 ns | 0.446 ns |  97.50 ns | 104.45 ns | 101.28 ns |  7.87 |          Slower |    0.20 |      - |     - |     - |         - |
|         Length&lt;BaseUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 336.16 ns | 6.595 ns | 6.773 ns | 1.643 ns | 325.69 ns | 352.04 ns | 335.05 ns | 26.22 |          Slower |    0.90 | 0.0072 |     - |     - |     192 B |
|      Length&lt;DerivedUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 347.53 ns | 6.667 ns | 6.236 ns | 1.610 ns | 338.07 ns | 361.28 ns | 345.32 ns | 27.11 |          Slower |    0.58 | 0.0072 |     - |     - |     192 B |
