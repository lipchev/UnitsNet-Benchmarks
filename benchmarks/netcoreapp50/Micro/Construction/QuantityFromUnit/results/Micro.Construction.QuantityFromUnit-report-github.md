``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-PWUJJT : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                                Method |                    Categories |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  14.90 ns | 0.217 ns | 0.192 ns | 0.051 ns |  14.56 ns |  15.27 ns |  14.90 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  29.19 ns | 0.467 ns | 0.436 ns | 0.113 ns |  28.44 ns |  29.93 ns |  29.05 ns |  1.96 |          Slower |    0.03 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  56.30 ns | 1.075 ns | 1.006 ns | 0.260 ns |  54.22 ns |  57.64 ns |  56.41 ns |  3.78 |          Slower |    0.09 | 0.0017 |     - |     - |      32 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction |  79.73 ns | 1.412 ns | 1.320 ns | 0.341 ns |  77.93 ns |  82.21 ns |  79.70 ns |  5.36 |          Slower |    0.15 | 0.0017 |     - |     - |      32 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction |  83.74 ns | 1.488 ns | 1.392 ns | 0.359 ns |  81.32 ns |  85.91 ns |  83.93 ns |  5.63 |          Slower |    0.10 | 0.0029 |     - |     - |      56 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 104.41 ns | 1.843 ns | 1.724 ns | 0.445 ns | 100.75 ns | 107.56 ns | 104.75 ns |  7.02 |          Slower |    0.17 | 0.0017 |     - |     - |      32 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 379.02 ns | 7.286 ns | 8.099 ns | 1.858 ns | 366.91 ns | 392.20 ns | 378.81 ns | 25.59 |          Slower |    0.65 | 0.0099 |     - |     - |     192 B |
