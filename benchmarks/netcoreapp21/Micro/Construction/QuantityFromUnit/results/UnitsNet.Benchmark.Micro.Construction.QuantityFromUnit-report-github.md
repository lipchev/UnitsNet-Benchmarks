``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-CXGBEM : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                                Method |                    Categories |      Mean |     Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  15.23 ns |  0.299 ns |  0.344 ns | 0.077 ns |  14.64 ns |  15.91 ns |  15.18 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  30.53 ns |  0.608 ns |  1.127 ns | 0.172 ns |  28.07 ns |  32.43 ns |  30.78 ns |  2.05 |          Slower |    0.07 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  55.75 ns |  1.056 ns |  1.130 ns | 0.266 ns |  53.73 ns |  58.03 ns |  55.79 ns |  3.66 |          Slower |    0.12 | 0.0049 |     - |     - |      32 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction |  84.73 ns |  1.694 ns |  1.883 ns | 0.432 ns |  81.35 ns |  88.58 ns |  84.43 ns |  5.57 |          Slower |    0.15 | 0.0086 |     - |     - |      56 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction |  89.79 ns |  1.764 ns |  1.733 ns | 0.433 ns |  87.37 ns |  93.20 ns |  89.78 ns |  5.89 |          Slower |    0.17 | 0.0048 |     - |     - |      32 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 123.15 ns |  2.360 ns |  3.069 ns | 0.626 ns | 118.06 ns | 128.92 ns | 122.95 ns |  8.06 |          Slower |    0.18 | 0.0045 |     - |     - |      32 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 553.30 ns | 11.046 ns | 11.819 ns | 2.786 ns | 535.27 ns | 578.45 ns | 550.70 ns | 36.35 |          Slower |    1.28 | 0.0281 |     - |     - |     192 B |
