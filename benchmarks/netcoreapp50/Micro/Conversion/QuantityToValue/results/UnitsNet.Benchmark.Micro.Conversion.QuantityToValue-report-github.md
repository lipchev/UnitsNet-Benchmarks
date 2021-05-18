``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-QCULOC : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                                 Method |                               Categories |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------------- |----------------------------------------- |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|    Length&lt;DerivedUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  13.58 ns | 0.182 ns | 0.170 ns | 0.044 ns |  13.29 ns |  13.89 ns |  13.59 ns |  1.00 |            Same |    0.02 |      - |     - |     - |         - |
|       Length&lt;BaseUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  13.60 ns | 0.261 ns | 0.256 ns | 0.064 ns |  13.13 ns |  14.06 ns |  13.63 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  15.68 ns | 0.306 ns | 0.255 ns | 0.071 ns |  15.31 ns |  16.22 ns |  15.64 ns |  1.15 |          Slower |    0.03 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  16.44 ns | 0.318 ns | 0.340 ns | 0.080 ns |  15.91 ns |  17.05 ns |  16.44 ns |  1.21 |          Slower |    0.04 |      - |     - |     - |         - |
|    IQuantity&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  76.54 ns | 1.412 ns | 1.321 ns | 0.341 ns |  74.08 ns |  78.51 ns |  77.05 ns |  5.63 |          Slower |    0.13 |      - |     - |     - |         - |
|    IQuantity&lt;DerivedUnit&gt;.As(baseUnit) |    Interface,Unit,Value,Micro,Conversion |  80.57 ns | 1.137 ns | 1.008 ns | 0.269 ns |  78.65 ns |  82.17 ns |  80.96 ns |  5.93 |          Slower |    0.12 |      - |     - |     - |         - |
| IQuantity&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion | 100.45 ns | 1.791 ns | 1.675 ns | 0.432 ns |  96.90 ns | 102.53 ns | 100.69 ns |  7.39 |          Slower |    0.16 |      - |     - |     - |         - |
|         Length&lt;BaseUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 331.33 ns | 6.041 ns | 5.651 ns | 1.459 ns | 321.95 ns | 341.53 ns | 333.14 ns | 24.39 |          Slower |    0.70 | 0.0121 |     - |     - |     192 B |
|      Length&lt;DerivedUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 344.30 ns | 6.247 ns | 7.194 ns | 1.609 ns | 333.75 ns | 359.92 ns | 342.80 ns | 25.39 |          Slower |    0.84 | 0.0121 |     - |     - |     192 B |
