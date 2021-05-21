``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-IYLJYD : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                                Method |                    Categories |      Mean |      Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|-----------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  15.28 ns |   2.568 ns | 0.141 ns | 0.081 ns |  15.19 ns |  15.44 ns |  15.21 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  33.20 ns |   5.578 ns | 0.306 ns | 0.177 ns |  32.92 ns |  33.52 ns |  33.15 ns |  2.17 |               ? |    0.01 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  67.92 ns |  44.934 ns | 2.463 ns | 1.422 ns |  65.42 ns |  70.35 ns |  67.99 ns |  4.45 |               ? |    0.17 | 0.0049 |     - |     - |      32 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction | 103.86 ns |   9.409 ns | 0.516 ns | 0.298 ns | 103.41 ns | 104.43 ns | 103.74 ns |  6.80 |               ? |    0.09 | 0.0045 |     - |     - |      32 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction | 104.75 ns |  69.538 ns | 3.812 ns | 2.201 ns | 101.93 ns | 109.09 ns | 103.23 ns |  6.86 |               ? |    0.28 | 0.0083 |     - |     - |      56 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 149.93 ns |  94.477 ns | 5.179 ns | 2.990 ns | 144.76 ns | 155.12 ns | 149.90 ns |  9.81 |               ? |    0.35 | 0.0045 |     - |     - |      32 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 602.45 ns | 176.419 ns | 9.670 ns | 5.583 ns | 594.90 ns | 613.35 ns | 599.11 ns | 39.43 |               ? |    0.28 | 0.0281 |     - |     - |     192 B |
