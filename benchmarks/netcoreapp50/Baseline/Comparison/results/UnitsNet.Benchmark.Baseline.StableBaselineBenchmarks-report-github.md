``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-FURZWH : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|         Method |      Mean |     Error |    StdDev |    StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |----------:|----------:|----------:|----------:|----------:|----------:|----------:|------:|---------------- |--------:|
|         Equals | 0.3604 ns | 0.0434 ns | 0.0024 ns | 0.0014 ns | 0.3583 ns | 0.3630 ns | 0.3599 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals | 4.7819 ns | 1.6900 ns | 0.0926 ns | 0.0535 ns | 4.6996 ns | 4.8822 ns | 4.7639 ns | 13.27 |               ? |    0.34 |
|         MinMax | 0.3768 ns | 0.1023 ns | 0.0056 ns | 0.0032 ns | 0.3705 ns | 0.3812 ns | 0.3788 ns |  1.05 |               ? |    0.02 |
| Decimal_MinMax | 6.3095 ns | 1.9878 ns | 0.1090 ns | 0.0629 ns | 6.1848 ns | 6.3868 ns | 6.3568 ns | 17.51 |               ? |    0.32 |
