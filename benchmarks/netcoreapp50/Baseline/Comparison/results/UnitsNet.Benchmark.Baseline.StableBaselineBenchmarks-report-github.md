``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-YFGBCU : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|         Method |      Mean |     Error |    StdDev |    StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |----------:|----------:|----------:|----------:|----------:|----------:|----------:|------:|---------------- |--------:|
|         Equals | 0.3315 ns | 0.0064 ns | 0.0088 ns | 0.0017 ns | 0.3187 ns | 0.3546 ns | 0.3313 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals | 4.5705 ns | 0.0862 ns | 0.0846 ns | 0.0212 ns | 4.4228 ns | 4.7281 ns | 4.5945 ns | 13.83 |          Slower |    0.45 |
|         MinMax | 0.3275 ns | 0.0063 ns | 0.0056 ns | 0.0015 ns | 0.3210 ns | 0.3388 ns | 0.3255 ns |  1.00 |            Same |    0.03 |
| Decimal_MinMax | 5.8349 ns | 0.1071 ns | 0.1635 ns | 0.0294 ns | 5.5796 ns | 6.1831 ns | 5.8469 ns | 17.62 |          Slower |    0.70 |
