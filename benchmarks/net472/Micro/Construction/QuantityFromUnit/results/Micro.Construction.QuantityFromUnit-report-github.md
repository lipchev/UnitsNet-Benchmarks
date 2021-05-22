``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-NTTZFS : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                                Method |                    Categories |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  15.94 ns | 0.250 ns | 0.222 ns | 0.059 ns |  15.70 ns |  16.43 ns |  15.87 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  34.71 ns | 0.417 ns | 0.390 ns | 0.101 ns |  33.99 ns |  35.33 ns |  34.70 ns |  2.18 |          Slower |    0.04 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  67.38 ns | 0.771 ns | 0.644 ns | 0.179 ns |  66.42 ns |  68.36 ns |  67.29 ns |  4.22 |          Slower |    0.07 | 0.0050 |     - |     - |      32 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction |  99.78 ns | 1.745 ns | 1.547 ns | 0.413 ns |  97.95 ns | 103.29 ns |  99.23 ns |  6.26 |          Slower |    0.12 | 0.0047 |     - |     - |      33 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction | 101.01 ns | 1.770 ns | 1.655 ns | 0.427 ns |  98.85 ns | 104.32 ns | 100.69 ns |  6.32 |          Slower |    0.14 | 0.0085 |     - |     - |      57 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 137.43 ns | 2.169 ns | 1.923 ns | 0.514 ns | 133.38 ns | 139.92 ns | 137.64 ns |  8.62 |          Slower |    0.15 | 0.0047 |     - |     - |      33 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 542.73 ns | 9.011 ns | 7.988 ns | 2.135 ns | 530.66 ns | 557.42 ns | 543.16 ns | 34.05 |          Slower |    0.67 | 0.0303 |     - |     - |     201 B |
