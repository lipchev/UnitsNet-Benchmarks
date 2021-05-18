``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-DVBMTE : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                                Method |                    Categories |      Mean |     Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  17.56 ns |  0.347 ns |  0.509 ns | 0.095 ns |  16.31 ns |  18.34 ns |  17.63 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  37.18 ns |  0.694 ns |  0.682 ns | 0.171 ns |  35.89 ns |  38.04 ns |  37.30 ns |  2.13 |          Slower |    0.08 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  75.89 ns |  1.426 ns |  1.464 ns | 0.355 ns |  72.59 ns |  78.77 ns |  75.92 ns |  4.34 |          Slower |    0.15 | 0.0048 |     - |     - |      32 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction | 111.72 ns |  2.219 ns |  2.885 ns | 0.589 ns | 106.58 ns | 117.66 ns | 111.23 ns |  6.35 |          Slower |    0.25 | 0.0085 |     - |     - |      57 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction | 111.91 ns |  2.211 ns |  2.270 ns | 0.551 ns | 108.25 ns | 115.65 ns | 111.69 ns |  6.40 |          Slower |    0.25 | 0.0047 |     - |     - |      33 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 139.96 ns |  2.775 ns |  4.068 ns | 0.755 ns | 130.91 ns | 146.60 ns | 140.35 ns |  7.98 |          Slower |    0.31 | 0.0047 |     - |     - |      33 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 579.36 ns | 11.475 ns | 13.215 ns | 2.955 ns | 542.74 ns | 596.88 ns | 579.46 ns | 33.09 |          Slower |    1.34 | 0.0303 |     - |     - |     201 B |
