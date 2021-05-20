``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-QJPRVZ : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                                Method |                    Categories |      Mean |     Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|----------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  15.02 ns |  2.411 ns | 0.132 ns | 0.076 ns |  14.93 ns |  15.17 ns |  14.97 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  31.43 ns |  4.203 ns | 0.230 ns | 0.133 ns |  31.27 ns |  31.70 ns |  31.34 ns |  2.09 |               ? |    0.00 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  62.48 ns | 24.140 ns | 1.323 ns | 0.764 ns |  61.41 ns |  63.96 ns |  62.07 ns |  4.16 |               ? |    0.05 | 0.0049 |     - |     - |      32 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction | 102.32 ns | 54.229 ns | 2.972 ns | 1.716 ns |  99.03 ns | 104.80 ns | 103.15 ns |  6.81 |               ? |    0.26 | 0.0045 |     - |     - |      32 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction | 103.76 ns | 14.524 ns | 0.796 ns | 0.460 ns | 103.00 ns | 104.58 ns | 103.70 ns |  6.91 |               ? |    0.04 | 0.0083 |     - |     - |      56 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 138.67 ns | 37.576 ns | 2.060 ns | 1.189 ns | 136.31 ns | 140.15 ns | 139.53 ns |  9.23 |               ? |    0.09 | 0.0045 |     - |     - |      32 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 581.76 ns | 54.013 ns | 2.961 ns | 1.709 ns | 578.50 ns | 584.27 ns | 582.52 ns | 38.72 |               ? |    0.32 | 0.0281 |     - |     - |     192 B |
