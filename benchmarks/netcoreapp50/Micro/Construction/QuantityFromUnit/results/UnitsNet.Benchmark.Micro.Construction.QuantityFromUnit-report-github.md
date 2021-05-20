``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-GNBTDV : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                                Method |                    Categories |      Mean |     Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|----------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  14.77 ns |  4.103 ns | 0.225 ns | 0.130 ns |  14.60 ns |  15.03 ns |  14.69 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  31.78 ns |  7.476 ns | 0.410 ns | 0.237 ns |  31.51 ns |  32.25 ns |  31.58 ns |  2.15 |               ? |    0.01 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  60.99 ns | 11.548 ns | 0.633 ns | 0.365 ns |  60.28 ns |  61.51 ns |  61.17 ns |  4.13 |               ? |    0.06 | 0.0020 |     - |     - |      32 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction |  84.77 ns | 47.966 ns | 2.629 ns | 1.518 ns |  82.80 ns |  87.76 ns |  83.75 ns |  5.74 |               ? |    0.25 | 0.0020 |     - |     - |      32 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction |  86.30 ns |  6.734 ns | 0.369 ns | 0.213 ns |  86.04 ns |  86.73 ns |  86.14 ns |  5.84 |               ? |    0.07 | 0.0035 |     - |     - |      56 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 116.94 ns |  6.816 ns | 0.374 ns | 0.216 ns | 116.52 ns | 117.24 ns | 117.06 ns |  7.92 |               ? |    0.11 | 0.0019 |     - |     - |      32 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 389.32 ns | 64.529 ns | 3.537 ns | 2.042 ns | 385.25 ns | 391.67 ns | 391.04 ns | 26.36 |               ? |    0.63 | 0.0121 |     - |     - |     192 B |
