``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-GVRMZE : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                                Method |                    Categories |      Mean |     Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  15.59 ns |  0.154 ns |  0.144 ns | 0.037 ns |  15.33 ns |  15.83 ns |  15.57 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  32.61 ns |  0.551 ns |  0.460 ns | 0.128 ns |  31.82 ns |  33.51 ns |  32.61 ns |  2.10 |          Slower |    0.04 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  63.29 ns |  1.242 ns |  1.329 ns | 0.313 ns |  61.44 ns |  65.67 ns |  63.15 ns |  4.06 |          Slower |    0.11 | 0.0050 |     - |     - |      32 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction | 106.29 ns |  2.055 ns |  2.199 ns | 0.518 ns | 102.78 ns | 110.37 ns | 106.18 ns |  6.82 |          Slower |    0.17 | 0.0047 |     - |     - |      32 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction | 108.50 ns |  1.975 ns |  1.939 ns | 0.485 ns | 105.08 ns | 112.37 ns | 108.71 ns |  6.96 |          Slower |    0.16 | 0.0085 |     - |     - |      56 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 133.95 ns |  2.190 ns |  2.048 ns | 0.529 ns | 131.10 ns | 137.58 ns | 133.81 ns |  8.59 |          Slower |    0.14 | 0.0047 |     - |     - |      32 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 616.81 ns | 12.237 ns | 13.601 ns | 3.120 ns | 591.46 ns | 642.19 ns | 616.64 ns | 39.43 |          Slower |    0.90 | 0.0288 |     - |     - |     192 B |
