``` ini

BenchmarkDotNet=v0.13.0, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET SDK=5.0.203
  [Host]     : .NET 5.0.6 (5.0.621.22011), X64 RyuJIT
  Job-YQLSNG : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET Framework 4.7.2  Toolchain=net472  

```
|                                     Method |                                  Categories |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|------------------------------------------- |-------------------------------------------- |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|    Length&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  22.87 ns | 0.307 ns | 0.288 ns | 0.074 ns |  22.47 ns |  23.45 ns |  22.83 ns |  1.00 |            Same |    0.02 |      - |     - |     - |         - |
|       Length&lt;BaseUnit&gt;.ToUnit(derivedUnit) |       Struct,Unit,Quantity,Micro,Conversion |  22.89 ns | 0.432 ns | 0.425 ns | 0.106 ns |  22.35 ns |  23.84 ns |  22.78 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|   ILength&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  30.14 ns | 0.584 ns | 0.625 ns | 0.147 ns |  29.25 ns |  31.44 ns |  30.25 ns |  1.32 |          Slower |    0.03 | 0.0050 |     - |     - |      32 B |
|      ILength&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion |  30.18 ns | 0.490 ns | 0.459 ns | 0.118 ns |  29.40 ns |  30.93 ns |  30.15 ns |  1.32 |          Slower |    0.03 | 0.0050 |     - |     - |      32 B |
|    IQuantity&lt;DerivedUnit&gt;.ToUnit(baseUnit) |    Interface,Unit,Quantity,Micro,Conversion | 106.14 ns | 1.225 ns | 1.023 ns | 0.284 ns | 104.93 ns | 108.83 ns | 105.88 ns |  4.62 |          Slower |    0.11 | 0.0049 |     - |     - |      33 B |
|    IQuantity&lt;BaseUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 111.62 ns | 2.009 ns | 1.879 ns | 0.485 ns | 109.05 ns | 114.80 ns | 111.44 ns |  4.87 |          Slower |    0.12 | 0.0048 |     - |     - |      33 B |
| IQuantity&lt;DerivedUnit&gt;.ToUnit(derivedUnit) |    Interface,Unit,Quantity,Micro,Conversion | 129.69 ns | 1.315 ns | 1.230 ns | 0.318 ns | 127.77 ns | 131.70 ns | 129.30 ns |  5.66 |          Slower |    0.11 | 0.0049 |     - |     - |      33 B |
|         Length&lt;BaseUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 511.70 ns | 7.770 ns | 7.268 ns | 1.877 ns | 502.94 ns | 523.81 ns | 511.15 ns | 22.35 |          Slower |    0.53 | 0.0303 |     - |     - |     201 B |
|      Length&lt;DerivedUnit&gt;.ToUnit(untSystem) | Struct,UnitSystem,Quantity,Micro,Conversion | 519.83 ns | 8.806 ns | 9.043 ns | 2.193 ns | 509.76 ns | 542.92 ns | 517.44 ns | 22.71 |          Slower |    0.48 | 0.0303 |     - |     - |     201 B |
