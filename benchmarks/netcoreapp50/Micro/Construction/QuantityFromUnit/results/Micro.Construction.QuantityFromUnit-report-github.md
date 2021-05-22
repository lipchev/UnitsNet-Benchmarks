``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-IXZOAR : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                                Method |                    Categories |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  14.47 ns | 0.277 ns | 0.285 ns | 0.069 ns |  14.06 ns |  15.03 ns |  14.44 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  30.35 ns | 0.551 ns | 0.516 ns | 0.133 ns |  29.56 ns |  31.43 ns |  30.43 ns |  2.10 |          Slower |    0.05 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  62.26 ns | 1.188 ns | 1.166 ns | 0.292 ns |  60.06 ns |  64.30 ns |  62.44 ns |  4.31 |          Slower |    0.12 | 0.0017 |     - |     - |      32 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction |  79.04 ns | 1.138 ns | 0.951 ns | 0.264 ns |  77.20 ns |  80.51 ns |  79.19 ns |  5.48 |          Slower |    0.12 | 0.0017 |     - |     - |      32 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction |  85.73 ns | 1.670 ns | 2.113 ns | 0.441 ns |  83.39 ns |  90.53 ns |  85.21 ns |  5.94 |          Slower |    0.21 | 0.0029 |     - |     - |      56 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 104.69 ns | 2.065 ns | 1.932 ns | 0.499 ns | 101.37 ns | 106.97 ns | 104.81 ns |  7.24 |          Slower |    0.18 | 0.0017 |     - |     - |      32 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 371.48 ns | 4.999 ns | 4.431 ns | 1.184 ns | 359.58 ns | 378.69 ns | 372.50 ns | 25.69 |          Slower |    0.58 | 0.0102 |     - |     - |     192 B |
