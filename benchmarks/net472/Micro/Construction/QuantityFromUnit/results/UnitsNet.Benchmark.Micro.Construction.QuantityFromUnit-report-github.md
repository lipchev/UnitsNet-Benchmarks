``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-OOBOKF : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|                                Method |                    Categories |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|-------------------------------------- |------------------------------ |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|-------:|------:|------:|----------:|
|                   &#39;new (value, unit)&#39; |       Unit,Micro,Construction |  16.28 ns | 0.157 ns | 0.139 ns | 0.037 ns |  16.05 ns |  16.51 ns |  16.26 ns |  1.00 |            Base |    0.00 |      - |     - |     - |         - |
|               FromUnit(quantityValue) |       Unit,Micro,Construction |  35.73 ns | 0.698 ns | 0.882 ns | 0.184 ns |  34.46 ns |  37.57 ns |  35.64 ns |  2.22 |          Slower |    0.05 |      - |     - |     - |         - |
| &#39;FromQuantityInfo(randomInfo, value)&#39; |   Quantity,Micro,Construction |  70.76 ns | 1.270 ns | 1.126 ns | 0.301 ns |  69.09 ns |  73.30 ns |  70.60 ns |  4.35 |          Slower |    0.08 | 0.0046 |     - |     - |      32 B |
|     &#39;Quantity&lt;Q,U&gt;.From(value, unit)&#39; |       Unit,Micro,Construction | 105.16 ns | 1.066 ns | 0.890 ns | 0.247 ns | 103.36 ns | 106.49 ns | 105.26 ns |  6.45 |          Slower |    0.07 | 0.0083 |     - |     - |      57 B |
|          &#39;Quantity.From(value, unit)&#39; |       Unit,Micro,Construction | 106.42 ns | 1.666 ns | 1.477 ns | 0.395 ns | 103.78 ns | 109.75 ns | 106.36 ns |  6.54 |          Slower |    0.13 | 0.0045 |     - |     - |      33 B |
|    &#39;Quantity.From(value, randomUnit)&#39; |       Unit,Micro,Construction | 156.27 ns | 1.960 ns | 1.737 ns | 0.464 ns | 154.09 ns | 159.70 ns | 155.74 ns |  9.60 |          Slower |    0.15 | 0.0045 |     - |     - |      33 B |
|             &#39;new (value, unitSystem)&#39; | UnitSystem,Micro,Construction | 575.11 ns | 6.753 ns | 6.316 ns | 1.631 ns | 563.74 ns | 585.41 ns | 575.13 ns | 35.31 |          Slower |    0.51 | 0.0288 |     - |     - |     201 B |
