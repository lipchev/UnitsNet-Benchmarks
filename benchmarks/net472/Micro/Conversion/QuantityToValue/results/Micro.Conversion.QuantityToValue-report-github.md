``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-JJDOIB : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                                 Method |                               Categories |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------------- |----------------------------------------- |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|       Length&lt;BaseUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  12.43 ns | 0.245 ns | 0.230 ns | 0.059 ns |  12.02 ns |  12.96 ns |  12.41 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|    Length&lt;DerivedUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  12.57 ns | 0.231 ns | 0.216 ns | 0.056 ns |  12.12 ns |  12.95 ns |  12.61 ns |  1.01 |            Same |    0.03 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  17.27 ns | 0.345 ns | 0.323 ns | 0.083 ns |  16.85 ns |  17.94 ns |  17.16 ns |  1.39 |          Slower |    0.03 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  17.33 ns | 0.274 ns | 0.257 ns | 0.066 ns |  16.82 ns |  17.72 ns |  17.34 ns |  1.39 |          Slower |    0.04 |      - |     - |     - |         - |
|    IQuantity&lt;DerivedUnit&gt;.As(baseUnit) |    Interface,Unit,Value,Micro,Conversion |  87.53 ns | 1.572 ns | 1.544 ns | 0.386 ns |  85.95 ns |  91.12 ns |  86.86 ns |  7.04 |          Slower |    0.15 |      - |     - |     - |         - |
|    IQuantity&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  88.31 ns | 1.428 ns | 1.336 ns | 0.345 ns |  86.56 ns |  90.72 ns |  88.03 ns |  7.10 |          Slower |    0.19 |      - |     - |     - |         - |
| IQuantity&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion | 111.46 ns | 1.859 ns | 1.739 ns | 0.449 ns | 109.07 ns | 115.63 ns | 111.35 ns |  8.97 |          Slower |    0.18 |      - |     - |     - |         - |
|         Length&lt;BaseUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 521.13 ns | 6.888 ns | 6.443 ns | 1.664 ns | 509.52 ns | 534.25 ns | 521.27 ns | 41.92 |          Slower |    0.85 | 0.0303 |     - |     - |     201 B |
|      Length&lt;DerivedUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 537.34 ns | 7.619 ns | 6.754 ns | 1.805 ns | 525.42 ns | 550.01 ns | 540.02 ns | 43.19 |          Slower |    1.14 | 0.0303 |     - |     - |     201 B |
