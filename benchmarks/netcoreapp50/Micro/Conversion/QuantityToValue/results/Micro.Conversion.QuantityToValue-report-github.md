``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-UZLHGL : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                                 Method |                               Categories |      Mean |    Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------------- |----------------------------------------- |----------:|---------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|    Length&lt;DerivedUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  12.67 ns | 0.246 ns |  0.273 ns | 0.063 ns |  12.15 ns |  13.12 ns |  12.70 ns |  0.99 |            Same |    0.03 |      - |     - |     - |         - |
|       Length&lt;BaseUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  12.76 ns | 0.187 ns |  0.166 ns | 0.044 ns |  12.53 ns |  13.14 ns |  12.73 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  17.52 ns | 0.266 ns |  0.249 ns | 0.064 ns |  17.05 ns |  18.09 ns |  17.53 ns |  1.37 |          Slower |    0.03 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  17.70 ns | 0.335 ns |  0.313 ns | 0.081 ns |  17.12 ns |  18.16 ns |  17.72 ns |  1.39 |          Slower |    0.02 |      - |     - |     - |         - |
|    IQuantity&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  85.40 ns | 0.890 ns |  0.833 ns | 0.215 ns |  84.14 ns |  86.57 ns |  85.51 ns |  6.70 |          Slower |    0.12 |      - |     - |     - |         - |
|    IQuantity&lt;DerivedUnit&gt;.As(baseUnit) |    Interface,Unit,Value,Micro,Conversion |  86.21 ns | 1.426 ns |  1.334 ns | 0.344 ns |  83.41 ns |  88.64 ns |  86.20 ns |  6.76 |          Slower |    0.14 |      - |     - |     - |         - |
| IQuantity&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion | 108.29 ns | 1.821 ns |  1.704 ns | 0.440 ns | 105.51 ns | 110.84 ns | 108.56 ns |  8.50 |          Slower |    0.16 |      - |     - |     - |         - |
|         Length&lt;BaseUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 345.84 ns | 5.729 ns |  5.359 ns | 1.384 ns | 338.74 ns | 355.62 ns | 343.79 ns | 27.14 |          Slower |    0.46 | 0.0121 |     - |     - |     192 B |
|      Length&lt;DerivedUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 379.57 ns | 7.534 ns | 10.058 ns | 2.012 ns | 363.89 ns | 401.88 ns | 380.42 ns | 29.80 |          Slower |    0.99 | 0.0121 |     - |     - |     192 B |
