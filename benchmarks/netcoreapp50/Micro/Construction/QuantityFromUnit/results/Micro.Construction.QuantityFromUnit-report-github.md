``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-DVSYLM : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                                Method |                    Categories |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  14.09 ns | 0.278 ns | 0.260 ns | 0.067 ns |  13.55 ns |  14.57 ns |  14.09 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  30.50 ns | 0.581 ns | 0.622 ns | 0.147 ns |  29.29 ns |  31.56 ns |  30.59 ns |  2.16 |          Slower |    0.07 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  57.51 ns | 1.143 ns | 1.270 ns | 0.291 ns |  55.82 ns |  60.17 ns |  57.44 ns |  4.10 |          Slower |    0.11 | 0.0020 |     - |     - |      32 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction |  82.47 ns | 1.034 ns | 0.807 ns | 0.233 ns |  80.42 ns |  83.62 ns |  82.59 ns |  5.86 |          Slower |    0.11 | 0.0020 |     - |     - |      32 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction |  84.34 ns | 1.150 ns | 1.076 ns | 0.278 ns |  82.16 ns |  85.70 ns |  84.64 ns |  5.99 |          Slower |    0.15 | 0.0035 |     - |     - |      56 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 118.45 ns | 2.141 ns | 2.003 ns | 0.517 ns | 114.45 ns | 121.08 ns | 118.63 ns |  8.41 |          Slower |    0.24 | 0.0019 |     - |     - |      32 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 350.21 ns | 6.901 ns | 6.777 ns | 1.694 ns | 339.93 ns | 363.76 ns | 349.32 ns | 24.86 |          Slower |    0.61 | 0.0121 |     - |     - |     192 B |
