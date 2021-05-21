``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-SNPCSZ : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                                Method |                    Categories |      Mean |      Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|-----------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  15.79 ns |   4.192 ns | 0.230 ns | 0.133 ns |  15.64 ns |  16.05 ns |  15.67 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  35.61 ns |  10.218 ns | 0.560 ns | 0.323 ns |  35.15 ns |  36.23 ns |  35.45 ns |  2.26 |               ? |    0.01 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  65.98 ns |  13.307 ns | 0.729 ns | 0.421 ns |  65.15 ns |  66.52 ns |  66.27 ns |  4.18 |               ? |    0.07 | 0.0049 |     - |     - |      32 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction | 106.62 ns |  36.457 ns | 1.998 ns | 1.154 ns | 104.58 ns | 108.58 ns | 106.69 ns |  6.75 |               ? |    0.16 | 0.0045 |     - |     - |      32 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction | 112.58 ns |  39.283 ns | 2.153 ns | 1.243 ns | 111.08 ns | 115.05 ns | 111.61 ns |  7.13 |               ? |    0.03 | 0.0083 |     - |     - |      56 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 149.77 ns |  74.901 ns | 4.106 ns | 2.370 ns | 145.80 ns | 154.00 ns | 149.51 ns |  9.49 |               ? |    0.38 | 0.0045 |     - |     - |      32 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 645.84 ns | 177.010 ns | 9.703 ns | 5.602 ns | 636.50 ns | 655.87 ns | 645.16 ns | 40.91 |               ? |    0.23 | 0.0281 |     - |     - |     192 B |
