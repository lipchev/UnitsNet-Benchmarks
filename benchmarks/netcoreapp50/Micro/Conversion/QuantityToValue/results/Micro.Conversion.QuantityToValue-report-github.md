``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-PRMIWK : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                                 Method |                               Categories |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------------- |----------------------------------------- |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|    Length&lt;DerivedUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  15.79 ns | 0.174 ns | 0.163 ns | 0.042 ns |  15.55 ns |  16.03 ns |  15.81 ns |  0.95 |            Same |    0.02 |      - |     - |     - |         - |
|       Length&lt;BaseUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  16.56 ns | 0.162 ns | 0.151 ns | 0.039 ns |  16.22 ns |  16.85 ns |  16.58 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  19.04 ns | 0.230 ns | 0.215 ns | 0.056 ns |  18.78 ns |  19.45 ns |  19.05 ns |  1.15 |          Slower |    0.01 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  19.17 ns | 0.202 ns | 0.189 ns | 0.049 ns |  18.73 ns |  19.43 ns |  19.17 ns |  1.16 |          Slower |    0.01 |      - |     - |     - |         - |
|    IQuantity&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  80.43 ns | 0.945 ns | 0.838 ns | 0.224 ns |  78.90 ns |  81.82 ns |  80.47 ns |  4.85 |          Slower |    0.08 |      - |     - |     - |         - |
|    IQuantity&lt;DerivedUnit&gt;.As(baseUnit) |    Interface,Unit,Value,Micro,Conversion |  83.26 ns | 1.243 ns | 1.163 ns | 0.300 ns |  80.99 ns |  85.15 ns |  83.09 ns |  5.03 |          Slower |    0.10 |      - |     - |     - |         - |
| IQuantity&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion | 100.97 ns | 1.063 ns | 0.995 ns | 0.257 ns |  99.24 ns | 102.41 ns | 101.18 ns |  6.10 |          Slower |    0.08 |      - |     - |     - |         - |
|         Length&lt;BaseUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 374.73 ns | 4.678 ns | 4.376 ns | 1.130 ns | 367.26 ns | 381.30 ns | 374.70 ns | 22.63 |          Slower |    0.33 | 0.0099 |     - |     - |     192 B |
|      Length&lt;DerivedUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 382.58 ns | 4.576 ns | 4.057 ns | 1.084 ns | 377.47 ns | 390.93 ns | 382.10 ns | 23.08 |          Slower |    0.28 | 0.0099 |     - |     - |     192 B |
