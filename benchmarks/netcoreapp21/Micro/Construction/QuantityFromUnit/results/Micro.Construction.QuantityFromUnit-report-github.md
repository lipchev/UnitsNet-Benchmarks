``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-EUEFPN : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                                Method |                    Categories |      Mean |     Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|----------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  13.99 ns |  0.279 ns | 0.373 ns | 0.075 ns |  13.32 ns |  14.85 ns |  13.97 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  31.66 ns |  0.632 ns | 0.966 ns | 0.173 ns |  30.43 ns |  34.18 ns |  31.45 ns |  2.27 |          Slower |    0.06 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  53.76 ns |  1.066 ns | 1.185 ns | 0.272 ns |  51.39 ns |  55.96 ns |  53.59 ns |  3.85 |          Slower |    0.14 | 0.0050 |     - |     - |      32 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction |  88.58 ns |  1.400 ns | 1.241 ns | 0.332 ns |  85.98 ns |  89.99 ns |  88.99 ns |  6.37 |          Slower |    0.25 | 0.0049 |     - |     - |      32 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction |  93.12 ns |  1.670 ns | 1.562 ns | 0.403 ns |  90.89 ns |  96.63 ns |  93.20 ns |  6.68 |          Slower |    0.23 | 0.0087 |     - |     - |      56 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 113.69 ns |  1.626 ns | 1.521 ns | 0.393 ns | 111.52 ns | 116.12 ns | 113.40 ns |  8.15 |          Slower |    0.30 | 0.0047 |     - |     - |      32 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 520.77 ns | 10.345 ns | 9.677 ns | 2.499 ns | 505.32 ns | 540.45 ns | 520.60 ns | 37.33 |          Slower |    1.21 | 0.0288 |     - |     - |     192 B |
