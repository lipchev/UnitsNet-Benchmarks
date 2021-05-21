``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-DMIMTA : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                                Method |                    Categories |      Mean |      Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|-----------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  14.31 ns |   0.573 ns | 0.031 ns | 0.018 ns |  14.28 ns |  14.34 ns |  14.30 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  31.13 ns |  23.451 ns | 1.285 ns | 0.742 ns |  30.36 ns |  32.62 ns |  30.43 ns |  2.18 |               ? |    0.09 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  60.23 ns |  11.850 ns | 0.650 ns | 0.375 ns |  59.53 ns |  60.81 ns |  60.36 ns |  4.21 |               ? |    0.05 | 0.0020 |     - |     - |      32 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction |  83.67 ns |   4.144 ns | 0.227 ns | 0.131 ns |  83.41 ns |  83.84 ns |  83.77 ns |  5.85 |               ? |    0.03 | 0.0020 |     - |     - |      32 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction |  84.93 ns |  17.340 ns | 0.950 ns | 0.549 ns |  84.09 ns |  85.96 ns |  84.73 ns |  5.94 |               ? |    0.08 | 0.0035 |     - |     - |      56 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 110.58 ns |  16.183 ns | 0.887 ns | 0.512 ns | 109.59 ns | 111.30 ns | 110.85 ns |  7.73 |               ? |    0.06 | 0.0019 |     - |     - |      32 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 373.55 ns | 120.352 ns | 6.597 ns | 3.809 ns | 366.72 ns | 379.89 ns | 374.03 ns | 26.11 |               ? |    0.48 | 0.0121 |     - |     - |     192 B |
