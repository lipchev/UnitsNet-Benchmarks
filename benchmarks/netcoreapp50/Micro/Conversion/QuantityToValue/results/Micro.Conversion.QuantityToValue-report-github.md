``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-NLIWHY : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                                 Method |                               Categories |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------------- |----------------------------------------- |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|    Length&lt;DerivedUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  16.50 ns | 0.262 ns | 0.232 ns | 0.062 ns |  16.21 ns |  16.89 ns |  16.45 ns |  0.98 |            Same |    0.02 |      - |     - |     - |         - |
|       Length&lt;BaseUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  16.76 ns | 0.144 ns | 0.135 ns | 0.035 ns |  16.58 ns |  17.02 ns |  16.76 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  19.03 ns | 0.280 ns | 0.262 ns | 0.068 ns |  18.56 ns |  19.57 ns |  19.05 ns |  1.14 |          Slower |    0.02 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  19.41 ns | 0.194 ns | 0.162 ns | 0.045 ns |  19.07 ns |  19.58 ns |  19.44 ns |  1.16 |          Slower |    0.01 |      - |     - |     - |         - |
|    IQuantity&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  83.53 ns | 1.317 ns | 1.232 ns | 0.318 ns |  81.78 ns |  85.65 ns |  83.28 ns |  4.98 |          Slower |    0.08 |      - |     - |     - |         - |
|    IQuantity&lt;DerivedUnit&gt;.As(baseUnit) |    Interface,Unit,Value,Micro,Conversion |  87.68 ns | 1.750 ns | 2.276 ns | 0.465 ns |  84.94 ns |  92.87 ns |  86.72 ns |  5.30 |          Slower |    0.13 |      - |     - |     - |         - |
| IQuantity&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion | 105.95 ns | 1.356 ns | 1.202 ns | 0.321 ns | 103.30 ns | 107.64 ns | 106.05 ns |  6.32 |          Slower |    0.09 |      - |     - |     - |         - |
|         Length&lt;BaseUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 377.72 ns | 4.376 ns | 3.880 ns | 1.037 ns | 370.92 ns | 383.94 ns | 377.98 ns | 22.52 |          Slower |    0.21 | 0.0102 |     - |     - |     192 B |
|      Length&lt;DerivedUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 386.30 ns | 4.885 ns | 3.814 ns | 1.101 ns | 380.01 ns | 392.02 ns | 386.27 ns | 22.99 |          Slower |    0.18 | 0.0099 |     - |     - |     192 B |
