``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-IJMXDH : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                                Method |                    Categories |      Mean |     Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  15.06 ns |  0.278 ns |  0.424 ns | 0.076 ns |  14.18 ns |  15.76 ns |  15.15 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  33.40 ns |  0.660 ns |  0.946 ns | 0.179 ns |  31.76 ns |  35.60 ns |  33.30 ns |  2.22 |          Slower |    0.09 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  61.76 ns |  1.221 ns |  1.307 ns | 0.308 ns |  59.50 ns |  64.14 ns |  61.79 ns |  4.13 |          Slower |    0.12 | 0.0049 |     - |     - |      32 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction |  98.44 ns |  1.922 ns |  2.057 ns | 0.485 ns |  95.06 ns | 102.46 ns |  98.08 ns |  6.58 |          Slower |    0.29 | 0.0083 |     - |     - |      56 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction |  99.67 ns |  1.917 ns |  2.282 ns | 0.498 ns |  96.56 ns | 105.12 ns |  99.28 ns |  6.67 |          Slower |    0.23 | 0.0045 |     - |     - |      32 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 138.74 ns |  2.746 ns |  2.938 ns | 0.692 ns | 132.59 ns | 144.13 ns | 138.56 ns |  9.27 |          Slower |    0.35 | 0.0045 |     - |     - |      32 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 575.75 ns | 11.477 ns | 16.460 ns | 3.111 ns | 533.49 ns | 612.38 ns | 573.16 ns | 38.29 |          Slower |    1.32 | 0.0281 |     - |     - |     192 B |
