``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-CPEYKB : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                                Method |                    Categories |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  15.64 ns | 0.275 ns | 0.257 ns | 0.066 ns |  15.25 ns |  16.17 ns |  15.65 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  30.98 ns | 0.568 ns | 0.994 ns | 0.159 ns |  29.91 ns |  33.51 ns |  30.69 ns |  2.03 |          Slower |    0.08 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  58.66 ns | 0.812 ns | 0.720 ns | 0.192 ns |  57.26 ns |  59.74 ns |  58.71 ns |  3.75 |          Slower |    0.09 | 0.0049 |     - |     - |      32 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction |  94.09 ns | 1.789 ns | 2.130 ns | 0.465 ns |  90.14 ns |  97.69 ns |  94.36 ns |  6.03 |          Slower |    0.17 | 0.0083 |     - |     - |      56 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction |  98.83 ns | 1.624 ns | 1.519 ns | 0.392 ns |  96.75 ns | 101.50 ns |  99.09 ns |  6.32 |          Slower |    0.11 | 0.0045 |     - |     - |      32 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 131.89 ns | 2.588 ns | 2.542 ns | 0.636 ns | 127.65 ns | 136.50 ns | 131.71 ns |  8.42 |          Slower |    0.20 | 0.0045 |     - |     - |      32 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 554.61 ns | 8.459 ns | 7.498 ns | 2.004 ns | 544.91 ns | 571.93 ns | 553.83 ns | 35.44 |          Slower |    0.90 | 0.0281 |     - |     - |     192 B |
