``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-UXGZMK : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|         Method |      Mean |     Error |    StdDev |    StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |----------:|----------:|----------:|----------:|----------:|----------:|----------:|------:|---------------- |--------:|
|         Equals | 0.3896 ns | 0.1742 ns | 0.0095 ns | 0.0055 ns | 0.3810 ns | 0.3998 ns | 0.3879 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals | 5.3622 ns | 1.2745 ns | 0.0699 ns | 0.0403 ns | 5.2920 ns | 5.4317 ns | 5.3629 ns | 13.77 |               ? |    0.16 |
|         MinMax | 0.3915 ns | 0.0881 ns | 0.0048 ns | 0.0028 ns | 0.3866 ns | 0.3962 ns | 0.3918 ns |  1.01 |               ? |    0.04 |
| Decimal_MinMax | 6.2743 ns | 2.2524 ns | 0.1235 ns | 0.0713 ns | 6.1681 ns | 6.4097 ns | 6.2450 ns | 16.11 |               ? |    0.46 |
