``` ini

BenchmarkDotNet=v0.13.0, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET SDK=5.0.203
  [Host]     : .NET 5.0.6 (5.0.621.22011), X64 RyuJIT
  Job-DOXYRI : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET Framework 4.7.2  Toolchain=net472  

```
|                             Method |                          Categories |      Mean |     Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------------------------- |------------------------------------ |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                    new(value,unit) |       Unit,Micro,Construction,Value |  14.95 ns |  0.219 ns |  0.215 ns | 0.054 ns |  14.61 ns |  15.32 ns |  14.93 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|            FromUnit(quantityValue) |       Unit,Micro,Construction,Value |  32.67 ns |  0.575 ns |  0.538 ns | 0.139 ns |  31.74 ns |  33.48 ns |  32.73 ns |  2.18 |          Slower |    0.04 |      - |     - |     - |         - |
| FromQuantityInfo(randomInfo,value) |   Quantity,Micro,Construction,Value |  68.67 ns |  1.270 ns |  1.188 ns | 0.307 ns |  66.74 ns |  71.21 ns |  68.48 ns |  4.59 |          Slower |    0.09 | 0.0050 |     - |     - |      32 B |
|     Quantity&lt;Q,U&gt;.From(value,unit) |       Unit,Micro,Construction,Value |  96.28 ns |  1.630 ns |  1.445 ns | 0.386 ns |  94.30 ns |  99.59 ns |  95.91 ns |  6.44 |          Slower |    0.13 | 0.0085 |     - |     - |      57 B |
|          Quantity.From(value,unit) |       Unit,Micro,Construction,Value | 107.57 ns |  1.482 ns |  1.387 ns | 0.358 ns | 105.45 ns | 109.99 ns | 107.25 ns |  7.19 |          Slower |    0.17 | 0.0047 |     - |     - |      33 B |
|    Quantity.From(value,randomUnit) |       Unit,Micro,Construction,Value | 138.78 ns |  2.713 ns |  4.680 ns | 0.759 ns | 128.86 ns | 147.29 ns | 138.24 ns |  9.10 |          Slower |    0.28 | 0.0047 |     - |     - |      33 B |
|              new(value,unitSystem) | UnitSystem,Micro,Construction,Value | 516.75 ns | 10.333 ns | 21.340 ns | 2.959 ns | 491.33 ns | 578.10 ns | 511.75 ns | 34.58 |          Slower |    1.74 | 0.0303 |     - |     - |     201 B |
