``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-NSLWMF : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                                Method |                    Categories |      Mean |      Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|-----------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  14.29 ns |   1.643 ns | 0.090 ns | 0.052 ns |  14.23 ns |  14.39 ns |  14.25 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  31.58 ns |   7.987 ns | 0.438 ns | 0.253 ns |  31.10 ns |  31.96 ns |  31.68 ns |  2.21 |               ? |    0.04 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  60.69 ns |  26.624 ns | 1.459 ns | 0.843 ns |  59.38 ns |  62.27 ns |  60.43 ns |  4.25 |               ? |    0.11 | 0.0049 |     - |     - |      32 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction |  96.65 ns |  12.452 ns | 0.683 ns | 0.394 ns |  96.00 ns |  97.36 ns |  96.60 ns |  6.76 |               ? |    0.02 | 0.0045 |     - |     - |      32 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction | 103.13 ns |  41.361 ns | 2.267 ns | 1.309 ns | 100.84 ns | 105.38 ns | 103.17 ns |  7.22 |               ? |    0.12 | 0.0083 |     - |     - |      56 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 138.35 ns |  86.963 ns | 4.767 ns | 2.752 ns | 134.16 ns | 143.54 ns | 137.35 ns |  9.68 |               ? |    0.35 | 0.0045 |     - |     - |      32 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 558.88 ns | 148.438 ns | 8.136 ns | 4.698 ns | 551.36 ns | 567.52 ns | 557.77 ns | 39.11 |               ? |    0.63 | 0.0281 |     - |     - |     192 B |
