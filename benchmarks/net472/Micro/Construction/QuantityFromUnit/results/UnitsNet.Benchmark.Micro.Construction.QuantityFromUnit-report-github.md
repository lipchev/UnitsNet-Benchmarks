``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-DALUAW : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                                Method |                    Categories |      Mean |     Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  15.95 ns |  10.76 ns |  0.590 ns | 0.340 ns |  15.58 ns |  16.63 ns |  15.64 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  37.76 ns |  31.30 ns |  1.716 ns | 0.991 ns |  36.44 ns |  39.70 ns |  37.15 ns |  2.37 |               ? |    0.03 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  68.76 ns |  27.58 ns |  1.512 ns | 0.873 ns |  67.34 ns |  70.35 ns |  68.58 ns |  4.32 |               ? |    0.19 | 0.0046 |     - |     - |      32 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction |  97.57 ns |  29.01 ns |  1.590 ns | 0.918 ns |  96.50 ns |  99.40 ns |  96.81 ns |  6.12 |               ? |    0.28 | 0.0045 |     - |     - |      33 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction | 102.27 ns |  25.08 ns |  1.375 ns | 0.794 ns | 100.81 ns | 103.54 ns | 102.47 ns |  6.42 |               ? |    0.31 | 0.0083 |     - |     - |      57 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 137.04 ns |  17.46 ns |  0.957 ns | 0.553 ns | 136.28 ns | 138.12 ns | 136.73 ns |  8.60 |               ? |    0.26 | 0.0045 |     - |     - |      33 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 552.40 ns | 269.05 ns | 14.748 ns | 8.514 ns | 536.08 ns | 564.77 ns | 556.33 ns | 34.65 |               ? |    0.83 | 0.0288 |     - |     - |     201 B |
