``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-XCAUKZ : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                                 Method |                               Categories |      Mean |     Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------------- |----------------------------------------- |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|       Length&lt;BaseUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  11.92 ns |  0.191 ns |  0.149 ns | 0.043 ns |  11.69 ns |  12.15 ns |  11.92 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|    Length&lt;DerivedUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  13.58 ns |  0.263 ns |  0.447 ns | 0.073 ns |  12.31 ns |  14.37 ns |  13.66 ns |  1.12 |          Slower |    0.04 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  17.64 ns |  0.317 ns |  0.265 ns | 0.073 ns |  17.35 ns |  18.20 ns |  17.53 ns |  1.48 |          Slower |    0.03 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  19.40 ns |  0.107 ns |  0.095 ns | 0.025 ns |  19.19 ns |  19.56 ns |  19.40 ns |  1.63 |          Slower |    0.02 |      - |     - |     - |         - |
|    IQuantity&lt;DerivedUnit&gt;.As(baseUnit) |    Interface,Unit,Value,Micro,Conversion |  92.72 ns |  1.288 ns |  1.205 ns | 0.311 ns |  90.55 ns |  95.08 ns |  92.50 ns |  7.76 |          Slower |    0.18 |      - |     - |     - |         - |
|    IQuantity&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  94.20 ns |  1.589 ns |  1.486 ns | 0.384 ns |  92.71 ns |  97.04 ns |  93.79 ns |  7.91 |          Slower |    0.17 |      - |     - |     - |         - |
| IQuantity&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion | 123.80 ns |  2.232 ns |  2.087 ns | 0.539 ns | 119.01 ns | 127.10 ns | 123.96 ns | 10.44 |          Slower |    0.15 |      - |     - |     - |         - |
|         Length&lt;BaseUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 566.78 ns | 11.125 ns | 10.927 ns | 2.732 ns | 554.81 ns | 588.39 ns | 563.20 ns | 47.40 |          Slower |    0.83 | 0.0281 |     - |     - |     192 B |
|      Length&lt;DerivedUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 637.19 ns | 12.541 ns | 19.525 ns | 3.452 ns | 606.73 ns | 669.69 ns | 635.74 ns | 55.15 |          Slower |    0.72 | 0.0281 |     - |     - |     192 B |
