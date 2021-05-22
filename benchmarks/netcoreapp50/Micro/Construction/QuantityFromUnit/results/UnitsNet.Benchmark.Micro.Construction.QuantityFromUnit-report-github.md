``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-YHHUOM : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                                Method |                    Categories |      Mean |    Error |   StdDev |   StdErr |    Median |       Min |       Max | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  14.58 ns | 0.167 ns | 0.156 ns | 0.040 ns |  14.59 ns |  14.34 ns |  14.89 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  31.03 ns | 0.569 ns | 0.504 ns | 0.135 ns |  30.83 ns |  30.44 ns |  32.16 ns |  2.13 |          Slower |    0.04 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  66.17 ns | 1.163 ns | 1.088 ns | 0.281 ns |  66.41 ns |  64.81 ns |  68.06 ns |  4.54 |          Slower |    0.09 | 0.0017 |     - |     - |      32 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction |  83.31 ns | 1.174 ns | 1.041 ns | 0.278 ns |  83.20 ns |  81.99 ns |  85.34 ns |  5.71 |          Slower |    0.11 | 0.0017 |     - |     - |      32 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction |  91.40 ns | 1.803 ns | 2.807 ns | 0.496 ns |  90.87 ns |  87.23 ns |  98.11 ns |  6.19 |          Slower |    0.23 | 0.0029 |     - |     - |      56 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 114.94 ns | 2.294 ns | 5.363 ns | 0.665 ns | 112.96 ns | 108.21 ns | 130.04 ns |  8.11 |          Slower |    0.41 | 0.0017 |     - |     - |      32 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 389.67 ns | 4.700 ns | 4.396 ns | 1.135 ns | 390.91 ns | 383.66 ns | 398.77 ns | 26.72 |          Slower |    0.47 | 0.0099 |     - |     - |     192 B |
