``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-IXQDML : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                                Method |                    Categories |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  13.14 ns | 0.246 ns | 0.263 ns | 0.062 ns |  12.69 ns |  13.68 ns |  13.21 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  28.70 ns | 0.571 ns | 0.634 ns | 0.146 ns |  27.79 ns |  30.01 ns |  28.60 ns |  2.19 |          Slower |    0.07 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  51.38 ns | 1.022 ns | 1.177 ns | 0.263 ns |  49.78 ns |  53.65 ns |  51.32 ns |  3.91 |          Slower |    0.13 | 0.0012 |     - |     - |      32 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction |  73.61 ns | 1.434 ns | 1.652 ns | 0.369 ns |  70.97 ns |  76.32 ns |  73.52 ns |  5.60 |          Slower |    0.15 | 0.0012 |     - |     - |      32 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction |  76.65 ns | 1.456 ns | 1.558 ns | 0.367 ns |  74.42 ns |  79.35 ns |  76.68 ns |  5.83 |          Slower |    0.14 | 0.0021 |     - |     - |      56 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 105.12 ns | 2.070 ns | 2.902 ns | 0.559 ns |  98.60 ns | 110.68 ns | 105.35 ns |  7.94 |          Slower |    0.27 | 0.0011 |     - |     - |      32 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 328.06 ns | 6.451 ns | 6.336 ns | 1.584 ns | 319.26 ns | 340.42 ns | 326.98 ns | 25.00 |          Slower |    0.62 | 0.0072 |     - |     - |     192 B |
