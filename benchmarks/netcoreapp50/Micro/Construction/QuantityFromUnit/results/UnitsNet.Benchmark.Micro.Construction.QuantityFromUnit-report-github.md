``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-MOYAFX : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                                Method |                    Categories |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  13.43 ns | 0.190 ns | 0.178 ns | 0.046 ns |  13.27 ns |  13.78 ns |  13.36 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  29.16 ns | 0.542 ns | 0.507 ns | 0.131 ns |  28.40 ns |  30.08 ns |  29.02 ns |  2.17 |          Slower |    0.04 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  59.09 ns | 1.146 ns | 1.490 ns | 0.304 ns |  56.00 ns |  61.28 ns |  59.20 ns |  4.41 |          Slower |    0.13 | 0.0012 |     - |     - |      32 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction |  77.04 ns | 0.958 ns | 0.849 ns | 0.227 ns |  75.12 ns |  78.52 ns |  77.18 ns |  5.75 |          Slower |    0.11 | 0.0012 |     - |     - |      32 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction |  79.54 ns | 1.547 ns | 1.447 ns | 0.374 ns |  76.85 ns |  82.13 ns |  79.29 ns |  5.92 |          Slower |    0.13 | 0.0021 |     - |     - |      56 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 109.02 ns | 2.168 ns | 2.818 ns | 0.575 ns | 103.70 ns | 113.21 ns | 109.45 ns |  8.07 |          Slower |    0.25 | 0.0011 |     - |     - |      32 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 344.09 ns | 6.824 ns | 7.302 ns | 1.721 ns | 331.46 ns | 360.71 ns | 344.48 ns | 25.56 |          Slower |    0.47 | 0.0072 |     - |     - |     192 B |
