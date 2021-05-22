``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-MSHCDF : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                                Method |                    Categories |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  17.05 ns | 0.181 ns | 0.170 ns | 0.044 ns |  16.72 ns |  17.38 ns |  17.05 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  35.53 ns | 0.444 ns | 0.415 ns | 0.107 ns |  34.93 ns |  36.45 ns |  35.48 ns |  2.08 |          Slower |    0.04 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  72.98 ns | 1.377 ns | 1.530 ns | 0.351 ns |  70.06 ns |  75.65 ns |  73.04 ns |  4.29 |          Slower |    0.07 | 0.0048 |     - |     - |      32 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction | 107.19 ns | 2.083 ns | 1.948 ns | 0.503 ns | 104.39 ns | 111.48 ns | 107.70 ns |  6.29 |          Slower |    0.15 | 0.0047 |     - |     - |      33 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction | 111.18 ns | 2.181 ns | 2.040 ns | 0.527 ns | 108.54 ns | 114.39 ns | 111.76 ns |  6.52 |          Slower |    0.15 | 0.0085 |     - |     - |      57 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 136.26 ns | 1.755 ns | 1.466 ns | 0.406 ns | 133.91 ns | 138.92 ns | 136.70 ns |  7.98 |          Slower |    0.12 | 0.0047 |     - |     - |      33 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 562.27 ns | 8.927 ns | 8.351 ns | 2.156 ns | 549.34 ns | 573.12 ns | 563.98 ns | 32.98 |          Slower |    0.57 | 0.0303 |     - |     - |     201 B |
