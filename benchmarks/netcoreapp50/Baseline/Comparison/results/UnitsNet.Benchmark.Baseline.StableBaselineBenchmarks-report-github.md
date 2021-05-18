``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-OJHKCF : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|         Method |      Mean |     Error |    StdDev |    StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |----------:|----------:|----------:|----------:|----------:|----------:|----------:|------:|---------------- |--------:|
|         Equals | 0.3977 ns | 0.0077 ns | 0.0072 ns | 0.0019 ns | 0.3855 ns | 0.4079 ns | 0.3970 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals | 5.1530 ns | 0.0730 ns | 0.0683 ns | 0.0176 ns | 5.0071 ns | 5.2359 ns | 5.1526 ns | 12.96 |          Slower |    0.30 |
|         MinMax | 0.3940 ns | 0.0052 ns | 0.0049 ns | 0.0013 ns | 0.3865 ns | 0.4021 ns | 0.3942 ns |  0.99 |            Same |    0.02 |
| Decimal_MinMax | 6.6612 ns | 0.1055 ns | 0.0987 ns | 0.0255 ns | 6.4995 ns | 6.8046 ns | 6.6512 ns | 16.75 |          Slower |    0.34 |
