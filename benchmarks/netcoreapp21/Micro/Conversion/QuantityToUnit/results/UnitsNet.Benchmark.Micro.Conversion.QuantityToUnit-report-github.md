``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-QUDNPW : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                                     Method |                                  Categories |      Mean |     Error |    StdDev |   StdErr |    Median |       Min |       Max | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------------------------------- |-------------------------------------------- |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|       Length&lt;BaseUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  21.42 ns |  0.421 ns |  0.517 ns | 0.110 ns |  21.27 ns |  20.78 ns |  22.51 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|    Length&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  24.20 ns |  0.473 ns |  0.866 ns | 0.134 ns |  24.02 ns |  23.05 ns |  26.14 ns |  1.15 |          Slower |    0.05 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  31.51 ns |  0.535 ns |  0.500 ns | 0.129 ns |  31.39 ns |  30.76 ns |  32.47 ns |  1.46 |          Slower |    0.04 | 0.0049 |     - |     - |      32 B |
|   ILength&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  35.69 ns |  0.875 ns |  2.579 ns | 0.258 ns |  35.77 ns |  30.75 ns |  40.95 ns |  1.62 |          Slower |    0.17 | 0.0049 |     - |     - |      32 B |
|    IQuantity&lt;DerivedUnit&gt;.ToUnit(baseUnit) |    Interface,Unit,Quantity,Micro,Conversion | 121.08 ns |  2.417 ns |  4.938 ns | 0.691 ns | 123.04 ns | 109.26 ns | 127.85 ns |  5.54 |          Slower |    0.29 | 0.0046 |     - |     - |      32 B |
|    IQuantity&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 127.53 ns |  2.544 ns |  5.476 ns | 0.732 ns | 126.19 ns | 116.95 ns | 140.43 ns |  5.86 |          Slower |    0.29 | 0.0043 |     - |     - |      33 B |
| IQuantity&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 145.85 ns |  1.682 ns |  1.313 ns | 0.379 ns | 145.69 ns | 144.29 ns | 148.00 ns |  6.80 |          Slower |    0.17 | 0.0041 |     - |     - |      32 B |
|         Length&lt;BaseUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 586.87 ns | 11.730 ns | 10.972 ns | 2.833 ns | 585.93 ns | 567.46 ns | 609.90 ns | 27.25 |          Slower |    1.03 | 0.0281 |     - |     - |     192 B |
|      Length&lt;DerivedUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 669.41 ns |  7.878 ns |  7.369 ns | 1.903 ns | 668.85 ns | 655.93 ns | 679.33 ns | 31.08 |          Slower |    0.98 | 0.0281 |     - |     - |     192 B |
