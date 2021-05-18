``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-HQHSQV : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|          Method |      Mean |     Error |    StdDev |   StdErr |       Min |         Max |    Median | Ratio | MannWhitney(5%) | RatioSD |
|---------------- |----------:|----------:|----------:|---------:|----------:|------------:|----------:|------:|---------------- |--------:|
|         ToValue |  11.96 ns |  0.215 ns |  0.256 ns | 0.056 ns |  11.46 ns |    12.46 ns |  11.89 ns |  1.00 |            Base |    0.00 |
| Decimal_ToValue | 949.74 ns | 18.805 ns | 23.095 ns | 4.924 ns | 919.64 ns | 1,000.50 ns | 946.11 ns | 79.44 |          Slower |    2.63 |
