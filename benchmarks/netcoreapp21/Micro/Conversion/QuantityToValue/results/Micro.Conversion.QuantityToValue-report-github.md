``` ini

BenchmarkDotNet=v0.13.0, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-URBUDG : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                                 Method |                               Categories |      Mean |     Error |    StdDev |   StdErr |    Median |       Min |       Max | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|--------------------------------------- |----------------------------------------- |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|    Length&lt;DerivedUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  14.83 ns |  0.439 ns |  1.295 ns | 0.129 ns |  15.21 ns |  11.73 ns |  17.18 ns |  0.91 |            Same |    0.11 |      - |     - |     - |         - |
|       Length&lt;BaseUnit&gt;.As(derivedUnit) |       Struct,Unit,Value,Micro,Conversion |  15.94 ns |  0.318 ns |  0.738 ns | 0.092 ns |  16.01 ns |  12.19 ns |  16.87 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  20.29 ns |  0.358 ns |  0.383 ns | 0.090 ns |  20.23 ns |  19.74 ns |  21.12 ns |  1.30 |          Slower |    0.14 |      - |     - |     - |         - |
|      ILength&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  20.81 ns |  0.410 ns |  0.488 ns | 0.107 ns |  20.76 ns |  20.03 ns |  21.74 ns |  1.33 |          Slower |    0.12 |      - |     - |     - |         - |
|    IQuantity&lt;DerivedUnit&gt;.As(baseUnit) |    Interface,Unit,Value,Micro,Conversion |  98.39 ns |  2.529 ns |  7.416 ns | 0.745 ns |  97.42 ns |  82.41 ns | 116.25 ns |  6.37 |          Slower |    0.63 |      - |     - |     - |         - |
|    IQuantity&lt;BaseUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion |  99.82 ns |  1.996 ns |  2.863 ns | 0.541 ns |  99.11 ns |  95.14 ns | 107.10 ns |  6.35 |          Slower |    0.59 |      - |     - |     - |         - |
| IQuantity&lt;DerivedUnit&gt;.As(derivedUnit) |    Interface,Unit,Value,Micro,Conversion | 121.89 ns |  2.422 ns |  6.590 ns | 0.711 ns | 122.22 ns | 108.42 ns | 135.34 ns |  7.70 |          Slower |    0.72 |      - |     - |     - |         - |
|         Length&lt;BaseUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 547.64 ns | 11.673 ns | 34.236 ns | 3.441 ns | 548.01 ns | 484.20 ns | 623.99 ns | 34.73 |          Slower |    2.96 | 0.0281 |     - |     - |     192 B |
|      Length&lt;DerivedUnit&gt;.As(untSystem) | Struct,UnitSystem,Value,Micro,Conversion | 633.39 ns | 13.265 ns | 37.845 ns | 3.903 ns | 632.03 ns | 552.66 ns | 728.18 ns | 40.18 |          Slower |    3.31 | 0.0281 |     - |     - |     192 B |
