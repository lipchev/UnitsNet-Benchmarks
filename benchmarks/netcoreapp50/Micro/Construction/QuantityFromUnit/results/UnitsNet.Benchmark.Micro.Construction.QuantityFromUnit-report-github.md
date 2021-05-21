``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-COUTUG : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                                Method |                    Categories |      Mean |     Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|----------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  14.80 ns |  5.279 ns | 0.289 ns | 0.167 ns |  14.61 ns |  15.14 ns |  14.66 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  31.03 ns |  4.662 ns | 0.256 ns | 0.148 ns |  30.74 ns |  31.21 ns |  31.14 ns |  2.10 |               ? |    0.06 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  63.23 ns |  7.852 ns | 0.430 ns | 0.248 ns |  62.81 ns |  63.67 ns |  63.22 ns |  4.27 |               ? |    0.06 | 0.0017 |     - |     - |      32 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction |  83.34 ns | 15.369 ns | 0.842 ns | 0.486 ns |  82.43 ns |  84.10 ns |  83.49 ns |  5.63 |               ? |    0.07 | 0.0017 |     - |     - |      32 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction |  91.80 ns | 28.248 ns | 1.548 ns | 0.894 ns |  90.06 ns |  93.03 ns |  92.31 ns |  6.20 |               ? |    0.13 | 0.0029 |     - |     - |      56 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 111.64 ns | 31.175 ns | 1.709 ns | 0.987 ns | 109.85 ns | 113.26 ns | 111.80 ns |  7.54 |               ? |    0.19 | 0.0017 |     - |     - |      32 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 396.25 ns | 34.986 ns | 1.918 ns | 1.107 ns | 394.26 ns | 398.08 ns | 396.42 ns | 26.78 |               ? |    0.51 | 0.0099 |     - |     - |     192 B |
