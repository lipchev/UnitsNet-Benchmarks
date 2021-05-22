``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-YZTCIV : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                                Method |                    Categories |      Mean |     Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  17.74 ns |  0.167 ns |  0.157 ns | 0.040 ns |  17.41 ns |  17.97 ns |  17.77 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  36.90 ns |  0.667 ns |  0.624 ns | 0.161 ns |  35.96 ns |  38.03 ns |  36.66 ns |  2.08 |          Slower |    0.03 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  73.05 ns |  0.975 ns |  0.864 ns | 0.231 ns |  71.48 ns |  74.68 ns |  72.92 ns |  4.12 |          Slower |    0.04 | 0.0050 |     - |     - |      32 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction | 111.94 ns |  2.174 ns |  2.670 ns | 0.569 ns | 104.72 ns | 116.07 ns | 112.03 ns |  6.29 |          Slower |    0.17 | 0.0047 |     - |     - |      33 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction | 113.19 ns |  2.243 ns |  3.928 ns | 0.629 ns | 107.31 ns | 121.90 ns | 112.95 ns |  6.60 |          Slower |    0.16 | 0.0085 |     - |     - |      57 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 137.81 ns |  2.708 ns |  2.533 ns | 0.654 ns | 133.00 ns | 142.71 ns | 138.25 ns |  7.77 |          Slower |    0.14 | 0.0047 |     - |     - |      33 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 582.38 ns | 11.100 ns | 10.383 ns | 2.681 ns | 566.41 ns | 605.70 ns | 584.37 ns | 32.83 |          Slower |    0.70 | 0.0303 |     - |     - |     201 B |
