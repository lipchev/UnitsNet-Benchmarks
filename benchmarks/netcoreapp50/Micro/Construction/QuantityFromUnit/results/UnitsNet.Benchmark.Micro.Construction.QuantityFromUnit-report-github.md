``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-QNNZPM : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                                Method |                    Categories |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  13.27 ns | 0.226 ns | 0.211 ns | 0.055 ns |  12.85 ns |  13.50 ns |  13.31 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  28.52 ns | 0.532 ns | 0.523 ns | 0.131 ns |  27.81 ns |  29.64 ns |  28.38 ns |  2.15 |          Slower |    0.05 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  54.38 ns | 1.029 ns | 1.185 ns | 0.265 ns |  51.80 ns |  55.88 ns |  54.82 ns |  4.11 |          Slower |    0.10 | 0.0020 |     - |     - |      32 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction |  77.66 ns | 1.484 ns | 1.877 ns | 0.391 ns |  74.59 ns |  81.31 ns |  77.38 ns |  5.85 |          Slower |    0.18 | 0.0020 |     - |     - |      32 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction |  80.68 ns | 1.328 ns | 1.530 ns | 0.342 ns |  77.97 ns |  83.42 ns |  80.50 ns |  6.10 |          Slower |    0.17 | 0.0035 |     - |     - |      56 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 107.33 ns | 2.106 ns | 2.068 ns | 0.517 ns | 103.25 ns | 110.74 ns | 107.19 ns |  8.10 |          Slower |    0.19 | 0.0019 |     - |     - |      32 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 338.97 ns | 6.494 ns | 6.948 ns | 1.638 ns | 328.52 ns | 352.46 ns | 337.79 ns | 25.61 |          Slower |    0.57 | 0.0121 |     - |     - |     192 B |
