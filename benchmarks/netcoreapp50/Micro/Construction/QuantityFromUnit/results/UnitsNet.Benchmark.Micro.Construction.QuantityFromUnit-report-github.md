``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8272CL CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-MYKRZM : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                                Method |                    Categories |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  11.99 ns | 1.090 ns | 0.060 ns | 0.034 ns |  11.94 ns |  12.06 ns |  11.97 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  25.39 ns | 1.789 ns | 0.098 ns | 0.057 ns |  25.28 ns |  25.46 ns |  25.43 ns |  2.12 |               ? |    0.01 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  49.12 ns | 3.709 ns | 0.203 ns | 0.117 ns |  49.00 ns |  49.36 ns |  49.01 ns |  4.10 |               ? |    0.03 | 0.0017 |     - |     - |      32 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction |  68.88 ns | 5.690 ns | 0.312 ns | 0.180 ns |  68.68 ns |  69.24 ns |  68.73 ns |  5.75 |               ? |    0.05 | 0.0017 |     - |     - |      32 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction |  73.14 ns | 8.005 ns | 0.439 ns | 0.253 ns |  72.80 ns |  73.63 ns |  72.97 ns |  6.10 |               ? |    0.06 | 0.0029 |     - |     - |      56 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction |  89.03 ns | 7.622 ns | 0.418 ns | 0.241 ns |  88.78 ns |  89.51 ns |  88.80 ns |  7.43 |               ? |    0.06 | 0.0017 |     - |     - |      32 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 331.39 ns | 5.234 ns | 0.287 ns | 0.166 ns | 331.19 ns | 331.72 ns | 331.27 ns | 27.64 |               ? |    0.12 | 0.0102 |     - |     - |     192 B |
