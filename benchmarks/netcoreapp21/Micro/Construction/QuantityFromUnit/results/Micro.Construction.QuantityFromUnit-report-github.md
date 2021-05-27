``` ini

BenchmarkDotNet=v0.13.0, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5), VM=Hyper-V
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET SDK=5.0.203
  [Host]     : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT
  Job-NQYETT : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|                             Method |                          Categories |      Mean |     Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------------------------- |------------------------------------ |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                    new(value,unit) |       Unit,Micro,Construction,Value |  14.18 ns |  0.282 ns |  0.523 ns | 0.080 ns |  13.35 ns |  15.56 ns |  14.05 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|            FromUnit(quantityValue) |       Unit,Micro,Construction,Value |  28.06 ns |  0.467 ns |  0.437 ns | 0.113 ns |  27.43 ns |  28.79 ns |  28.16 ns |  1.94 |          Slower |    0.08 |      - |     - |     - |         - |
| FromQuantityInfo(randomInfo,value) |   Quantity,Micro,Construction,Value |  59.40 ns |  1.180 ns |  2.188 ns | 0.334 ns |  55.68 ns |  63.99 ns |  59.24 ns |  4.19 |          Slower |    0.22 | 0.0049 |     - |     - |      32 B |
|          Quantity.From(value,unit) |       Unit,Micro,Construction,Value |  99.19 ns |  1.977 ns |  5.411 ns | 0.580 ns |  88.93 ns | 111.32 ns |  99.25 ns |  6.81 |          Slower |    0.42 | 0.0048 |     - |     - |      32 B |
|     Quantity&lt;Q,U&gt;.From(value,unit) |       Unit,Micro,Construction,Value | 110.57 ns |  2.194 ns |  2.928 ns | 0.586 ns | 104.65 ns | 116.36 ns | 110.63 ns |  7.75 |          Slower |    0.40 | 0.0083 |     - |     - |      56 B |
|    Quantity.From(value,randomUnit) |       Unit,Micro,Construction,Value | 148.47 ns |  2.962 ns |  5.109 ns | 0.829 ns | 138.84 ns | 155.46 ns | 149.88 ns | 10.51 |          Slower |    0.62 | 0.0045 |     - |     - |      32 B |
|              new(value,unitSystem) | UnitSystem,Micro,Construction,Value | 534.46 ns | 10.149 ns | 26.198 ns | 2.966 ns | 477.43 ns | 592.33 ns | 528.93 ns | 38.37 |          Slower |    3.07 | 0.0281 |     - |     - |     192 B |
