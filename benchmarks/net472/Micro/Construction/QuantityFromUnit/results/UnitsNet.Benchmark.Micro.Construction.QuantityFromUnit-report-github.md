``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-XFBKNO : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                                Method |                    Categories |      Mean |      Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|-----------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  17.64 ns |   2.413 ns | 0.132 ns | 0.076 ns |  17.54 ns |  17.79 ns |  17.58 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  41.95 ns |   9.788 ns | 0.537 ns | 0.310 ns |  41.59 ns |  42.57 ns |  41.70 ns |  2.38 |               ? |    0.01 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  83.41 ns | 119.281 ns | 6.538 ns | 3.775 ns |  77.04 ns |  90.10 ns |  83.08 ns |  4.73 |               ? |    0.37 | 0.0046 |     - |     - |      32 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction | 114.69 ns |  38.445 ns | 2.107 ns | 1.217 ns | 112.64 ns | 116.85 ns | 114.56 ns |  6.50 |               ? |    0.16 | 0.0083 |     - |     - |      57 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction | 115.57 ns |  45.785 ns | 2.510 ns | 1.449 ns | 112.67 ns | 117.05 ns | 116.98 ns |  6.55 |               ? |    0.19 | 0.0045 |     - |     - |      33 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 158.09 ns |  68.365 ns | 3.747 ns | 2.164 ns | 154.58 ns | 162.04 ns | 157.64 ns |  8.96 |               ? |    0.15 | 0.0045 |     - |     - |      33 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 612.85 ns | 138.276 ns | 7.579 ns | 4.376 ns | 604.80 ns | 619.86 ns | 613.88 ns | 34.75 |               ? |    0.30 | 0.0288 |     - |     - |     201 B |
