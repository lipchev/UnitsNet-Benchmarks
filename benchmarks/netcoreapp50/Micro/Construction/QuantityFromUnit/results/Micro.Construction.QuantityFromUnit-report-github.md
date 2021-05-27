``` ini

BenchmarkDotNet=v0.13.0, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET SDK=5.0.203
  [Host]     : .NET 5.0.6 (5.0.621.22011), X64 RyuJIT
  Job-BMHMKH : .NET 5.0.6 (5.0.621.22011), X64 RyuJIT

Runtime=.NET 5.0  Toolchain=netcoreapp50  

```
|                             Method |                          Categories |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------------------------- |------------------------------------ |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                    new(value,unit) |       Unit,Micro,Construction,Value |  14.99 ns | 0.289 ns | 0.296 ns | 0.072 ns |  14.38 ns |  15.58 ns |  14.97 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|            FromUnit(quantityValue) |       Unit,Micro,Construction,Value |  31.31 ns | 0.510 ns | 0.452 ns | 0.121 ns |  30.58 ns |  32.34 ns |  31.34 ns |  2.09 |          Slower |    0.04 |      - |     - |     - |         - |
| FromQuantityInfo(randomInfo,value) |   Quantity,Micro,Construction,Value |  64.98 ns | 0.991 ns | 0.927 ns | 0.239 ns |  63.36 ns |  66.47 ns |  64.99 ns |  4.33 |          Slower |    0.09 | 0.0017 |     - |     - |      32 B |
|          Quantity.From(value,unit) |       Unit,Micro,Construction,Value |  83.88 ns | 1.133 ns | 1.059 ns | 0.274 ns |  82.42 ns |  86.34 ns |  83.82 ns |  5.58 |          Slower |    0.12 | 0.0017 |     - |     - |      32 B |
|     Quantity&lt;Q,U&gt;.From(value,unit) |       Unit,Micro,Construction,Value |  92.46 ns | 1.089 ns | 1.019 ns | 0.263 ns |  91.03 ns |  94.43 ns |  92.37 ns |  6.16 |          Slower |    0.14 | 0.0029 |     - |     - |      56 B |
|    Quantity.From(value,randomUnit) |       Unit,Micro,Construction,Value | 109.56 ns | 1.692 ns | 1.500 ns | 0.401 ns | 106.96 ns | 112.46 ns | 109.47 ns |  7.31 |          Slower |    0.15 | 0.0017 |     - |     - |      32 B |
|              new(value,unitSystem) | UnitSystem,Micro,Construction,Value | 393.85 ns | 7.595 ns | 8.746 ns | 1.956 ns | 377.97 ns | 414.86 ns | 393.32 ns | 26.29 |          Slower |    0.64 | 0.0099 |     - |     - |     192 B |
