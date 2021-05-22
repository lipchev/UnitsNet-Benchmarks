``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-HHYYES : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                                Method |                    Categories |      Mean |     Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|----------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  17.36 ns |  0.190 ns | 0.169 ns | 0.045 ns |  17.10 ns |  17.65 ns |  17.33 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  41.52 ns |  0.782 ns | 0.731 ns | 0.189 ns |  39.88 ns |  42.70 ns |  41.49 ns |  2.39 |          Slower |    0.05 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  75.38 ns |  1.059 ns | 0.990 ns | 0.256 ns |  73.79 ns |  77.16 ns |  75.30 ns |  4.34 |          Slower |    0.09 | 0.0046 |     - |     - |      32 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction | 111.65 ns |  1.641 ns | 1.455 ns | 0.389 ns | 108.59 ns | 114.66 ns | 111.49 ns |  6.43 |          Slower |    0.10 | 0.0083 |     - |     - |      57 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction | 111.74 ns |  2.176 ns | 3.257 ns | 0.595 ns | 106.75 ns | 118.32 ns | 112.03 ns |  6.48 |          Slower |    0.19 | 0.0045 |     - |     - |      33 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 156.25 ns |  1.454 ns | 1.214 ns | 0.337 ns | 154.15 ns | 158.28 ns | 156.46 ns |  9.01 |          Slower |    0.10 | 0.0045 |     - |     - |      33 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 601.80 ns | 10.061 ns | 9.411 ns | 2.430 ns | 583.02 ns | 616.99 ns | 601.60 ns | 34.60 |          Slower |    0.44 | 0.0288 |     - |     - |     201 B |
