``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-UEYVMW : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                                 Method |                               Categories |      Mean |    Error |    StdDev |   StdErr |    Median |       Min |       Max | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------------- |----------------------------------------- |----------:|---------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|    Length&lt;DerivedUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  13.56 ns | 0.194 ns |  0.181 ns | 0.047 ns |  13.47 ns |  13.32 ns |  13.86 ns |  0.94 |            Same |    0.03 |      - |     - |     - |         - |
|       Length&lt;BaseUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  14.38 ns | 0.272 ns |  0.291 ns | 0.069 ns |  14.28 ns |  13.97 ns |  14.85 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  18.04 ns | 0.218 ns |  0.204 ns | 0.053 ns |  17.98 ns |  17.74 ns |  18.35 ns |  1.25 |          Slower |    0.03 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  18.27 ns | 0.300 ns |  0.280 ns | 0.072 ns |  18.22 ns |  17.65 ns |  18.73 ns |  1.27 |          Slower |    0.04 |      - |     - |     - |         - |
|    IQuantity&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  83.34 ns | 1.173 ns |  1.040 ns | 0.278 ns |  83.29 ns |  81.84 ns |  85.53 ns |  5.77 |          Slower |    0.13 |      - |     - |     - |         - |
|    IQuantity&lt;DerivedUnit&gt;.As(baseUnit) |    Interface,Unit,Value,Micro,Conversion |  85.25 ns | 1.094 ns |  0.970 ns | 0.259 ns |  85.09 ns |  83.86 ns |  87.23 ns |  5.91 |          Slower |    0.14 |      - |     - |     - |         - |
| IQuantity&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion | 100.60 ns | 1.955 ns |  3.266 ns | 0.544 ns | 100.19 ns |  94.25 ns | 108.78 ns |  7.03 |          Slower |    0.32 |      - |     - |     - |         - |
|         Length&lt;BaseUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 371.25 ns | 7.387 ns | 19.719 ns | 2.164 ns | 377.38 ns | 318.20 ns | 410.11 ns | 24.38 |          Slower |    0.94 | 0.0072 |     - |     - |     192 B |
|      Length&lt;DerivedUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 394.78 ns | 7.501 ns |  8.338 ns | 1.913 ns | 393.23 ns | 377.79 ns | 409.47 ns | 27.49 |          Slower |    0.96 | 0.0068 |     - |     - |     192 B |
