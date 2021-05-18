``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-IYDQJQ : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                                Method |                    Categories |      Mean |     Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  17.07 ns |  0.325 ns |  0.304 ns | 0.078 ns |  16.68 ns |  17.57 ns |  17.07 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  36.60 ns |  0.431 ns |  0.360 ns | 0.100 ns |  35.92 ns |  37.29 ns |  36.57 ns |  2.15 |          Slower |    0.05 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  70.78 ns |  1.392 ns |  2.040 ns | 0.379 ns |  67.22 ns |  75.42 ns |  70.55 ns |  4.13 |          Slower |    0.15 | 0.0049 |     - |     - |      32 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction | 102.70 ns |  2.032 ns |  2.258 ns | 0.518 ns |  99.17 ns | 107.02 ns | 101.99 ns |  6.03 |          Slower |    0.16 | 0.0085 |     - |     - |      57 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction | 104.47 ns |  2.077 ns |  2.701 ns | 0.551 ns | 100.13 ns | 109.27 ns | 104.38 ns |  6.13 |          Slower |    0.23 | 0.0047 |     - |     - |      33 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 141.58 ns |  2.512 ns |  2.990 ns | 0.652 ns | 136.94 ns | 147.13 ns | 141.51 ns |  8.27 |          Slower |    0.24 | 0.0047 |     - |     - |      33 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 575.70 ns | 11.488 ns | 12.292 ns | 2.897 ns | 550.40 ns | 599.70 ns | 577.92 ns | 33.71 |          Slower |    0.83 | 0.0303 |     - |     - |     201 B |
