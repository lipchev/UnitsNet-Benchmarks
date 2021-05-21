``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-YOZWFA : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                                Method |                    Categories |      Mean |      Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|-----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  17.14 ns |   5.128 ns |  0.281 ns | 0.162 ns |  16.95 ns |  17.47 ns |  17.02 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  62.83 ns |  23.928 ns |  1.312 ns | 0.757 ns |  61.32 ns |  63.61 ns |  63.56 ns |  3.67 |               ? |    0.08 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  67.86 ns |  20.886 ns |  1.145 ns | 0.661 ns |  66.72 ns |  69.01 ns |  67.86 ns |  3.96 |               ? |    0.09 | 0.0046 |     - |     - |      32 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction | 104.24 ns |  37.770 ns |  2.070 ns | 1.195 ns | 101.84 ns | 105.45 ns | 105.41 ns |  6.08 |               ? |    0.12 | 0.0045 |     - |     - |      33 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction | 106.90 ns |  44.627 ns |  2.446 ns | 1.412 ns | 105.44 ns | 109.72 ns | 105.53 ns |  6.24 |               ? |    0.21 | 0.0083 |     - |     - |      57 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 145.64 ns |  47.343 ns |  2.595 ns | 1.498 ns | 143.58 ns | 148.55 ns | 144.77 ns |  8.50 |               ? |    0.24 | 0.0045 |     - |     - |      33 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 620.12 ns | 224.327 ns | 12.296 ns | 7.099 ns | 607.28 ns | 631.79 ns | 621.28 ns | 36.18 |               ? |    1.25 | 0.0288 |     - |     - |     201 B |
