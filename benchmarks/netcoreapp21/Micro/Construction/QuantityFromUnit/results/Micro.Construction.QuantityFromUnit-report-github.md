``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-KXLEUY : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                                Method |                    Categories |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  14.53 ns | 0.284 ns | 0.304 ns | 0.072 ns |  14.04 ns |  15.02 ns |  14.49 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  29.92 ns | 0.245 ns | 0.229 ns | 0.059 ns |  29.54 ns |  30.22 ns |  29.80 ns |  2.06 |          Slower |    0.04 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  59.52 ns | 0.750 ns | 0.627 ns | 0.174 ns |  58.59 ns |  60.54 ns |  59.57 ns |  4.09 |          Slower |    0.08 | 0.0050 |     - |     - |      32 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction |  89.61 ns | 1.280 ns | 1.197 ns | 0.309 ns |  87.32 ns |  90.99 ns |  89.72 ns |  6.18 |          Slower |    0.13 | 0.0088 |     - |     - |      56 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction |  95.31 ns | 1.741 ns | 1.629 ns | 0.421 ns |  93.08 ns |  98.88 ns |  95.15 ns |  6.57 |          Slower |    0.16 | 0.0047 |     - |     - |      32 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 128.76 ns | 2.489 ns | 3.057 ns | 0.652 ns | 123.60 ns | 136.03 ns | 128.75 ns |  8.86 |          Slower |    0.25 | 0.0047 |     - |     - |      32 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 537.99 ns | 8.019 ns | 7.109 ns | 1.900 ns | 525.46 ns | 550.60 ns | 536.92 ns | 37.07 |          Slower |    0.89 | 0.0288 |     - |     - |     192 B |
