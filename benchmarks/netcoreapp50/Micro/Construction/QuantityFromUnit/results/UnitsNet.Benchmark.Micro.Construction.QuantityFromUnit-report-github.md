``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-IGLRZW : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                                Method |                    Categories |      Mean |    Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|---------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  19.41 ns | 0.260 ns |  0.243 ns | 0.063 ns |  19.04 ns |  19.73 ns |  19.46 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  31.86 ns | 0.630 ns |  1.569 ns | 0.184 ns |  28.69 ns |  35.02 ns |  32.10 ns |  1.62 |          Slower |    0.09 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  64.07 ns | 1.277 ns |  3.085 ns | 0.371 ns |  55.95 ns |  70.13 ns |  64.51 ns |  3.30 |          Slower |    0.11 | 0.0012 |     - |     - |      32 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction |  84.71 ns | 1.631 ns |  1.745 ns | 0.411 ns |  80.46 ns |  87.97 ns |  84.96 ns |  4.37 |          Slower |    0.13 | 0.0012 |     - |     - |      32 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction |  94.66 ns | 1.866 ns |  2.426 ns | 0.495 ns |  88.91 ns |  99.19 ns |  95.04 ns |  4.85 |          Slower |    0.17 | 0.0021 |     - |     - |      56 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 120.64 ns | 1.983 ns |  1.855 ns | 0.479 ns | 117.99 ns | 124.61 ns | 120.93 ns |  6.22 |          Slower |    0.15 | 0.0011 |     - |     - |      32 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 385.01 ns | 7.693 ns | 16.057 ns | 2.206 ns | 330.34 ns | 409.55 ns | 386.98 ns | 20.00 |          Slower |    0.58 | 0.0068 |     - |     - |     192 B |
