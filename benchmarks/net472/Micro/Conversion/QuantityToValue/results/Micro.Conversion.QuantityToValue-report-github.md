``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-SRIDLY : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                                 Method |                               Categories |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------------- |----------------------------------------- |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|       Length&lt;BaseUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  13.53 ns | 0.262 ns | 0.269 ns | 0.065 ns |  13.01 ns |  14.15 ns |  13.53 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|    Length&lt;DerivedUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  13.91 ns | 0.242 ns | 0.226 ns | 0.058 ns |  13.63 ns |  14.28 ns |  13.87 ns |  1.03 |            Same |    0.03 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  19.14 ns | 0.272 ns | 0.255 ns | 0.066 ns |  18.78 ns |  19.63 ns |  19.11 ns |  1.42 |          Slower |    0.04 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  19.24 ns | 0.332 ns | 0.311 ns | 0.080 ns |  18.57 ns |  19.66 ns |  19.24 ns |  1.42 |          Slower |    0.04 |      - |     - |     - |         - |
|    IQuantity&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  96.34 ns | 1.913 ns | 2.349 ns | 0.501 ns |  91.87 ns | 100.93 ns |  95.58 ns |  7.15 |          Slower |    0.23 |      - |     - |     - |         - |
|    IQuantity&lt;DerivedUnit&gt;.As(baseUnit) |    Interface,Unit,Value,Micro,Conversion |  96.67 ns | 1.526 ns | 1.428 ns | 0.369 ns |  93.81 ns |  98.86 ns |  96.94 ns |  7.15 |          Slower |    0.16 |      - |     - |     - |         - |
| IQuantity&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion | 126.45 ns | 1.788 ns | 1.672 ns | 0.432 ns | 123.87 ns | 129.32 ns | 125.98 ns |  9.36 |          Slower |    0.27 |      - |     - |     - |         - |
|         Length&lt;BaseUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 595.02 ns | 5.377 ns | 4.767 ns | 1.274 ns | 587.53 ns | 603.93 ns | 595.68 ns | 43.95 |          Slower |    0.94 | 0.0288 |     - |     - |     201 B |
|      Length&lt;DerivedUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 616.02 ns | 6.729 ns | 5.965 ns | 1.594 ns | 601.22 ns | 623.64 ns | 616.32 ns | 45.50 |          Slower |    0.93 | 0.0288 |     - |     - |     201 B |
