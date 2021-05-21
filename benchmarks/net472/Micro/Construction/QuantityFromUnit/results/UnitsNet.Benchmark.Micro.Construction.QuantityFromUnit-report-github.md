``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-OXHWBH : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                                Method |                    Categories |      Mean |     Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|----------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  14.02 ns |  3.541 ns | 0.194 ns | 0.112 ns |  13.84 ns |  14.22 ns |  14.01 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  30.98 ns | 10.085 ns | 0.553 ns | 0.319 ns |  30.45 ns |  31.56 ns |  30.94 ns |  2.21 |               ? |    0.06 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  64.18 ns | 36.869 ns | 2.021 ns | 1.167 ns |  62.84 ns |  66.50 ns |  63.20 ns |  4.58 |               ? |    0.20 | 0.0049 |     - |     - |      32 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction | 100.97 ns | 53.780 ns | 2.948 ns | 1.702 ns |  98.68 ns | 104.29 ns |  99.92 ns |  7.20 |               ? |    0.22 | 0.0083 |     - |     - |      57 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction | 102.70 ns | 34.420 ns | 1.887 ns | 1.089 ns | 101.46 ns | 104.87 ns | 101.77 ns |  7.32 |               ? |    0.18 | 0.0048 |     - |     - |      33 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 155.56 ns | 29.603 ns | 1.623 ns | 0.937 ns | 154.31 ns | 157.40 ns | 154.99 ns | 11.09 |               ? |    0.10 | 0.0045 |     - |     - |      33 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 477.01 ns | 72.524 ns | 3.975 ns | 2.295 ns | 474.14 ns | 481.55 ns | 475.36 ns | 34.02 |               ? |    0.71 | 0.0288 |     - |     - |     201 B |
