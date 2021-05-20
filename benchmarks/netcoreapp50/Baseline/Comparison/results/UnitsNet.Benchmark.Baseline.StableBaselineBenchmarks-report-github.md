``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8272CL CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-PNMALV : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|         Method |      Mean |     Error |    StdDev |    StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |----------:|----------:|----------:|----------:|----------:|----------:|----------:|------:|---------------- |--------:|
|         Equals | 0.2987 ns | 0.0178 ns | 0.0010 ns | 0.0006 ns | 0.2980 ns | 0.2998 ns | 0.2983 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals | 4.2379 ns | 0.3208 ns | 0.0176 ns | 0.0102 ns | 4.2177 ns | 4.2498 ns | 4.2461 ns | 14.19 |               ? |    0.04 |
|         MinMax | 0.2997 ns | 0.0130 ns | 0.0007 ns | 0.0004 ns | 0.2992 ns | 0.3005 ns | 0.2993 ns |  1.00 |               ? |    0.00 |
| Decimal_MinMax | 5.4313 ns | 0.1058 ns | 0.0058 ns | 0.0033 ns | 5.4257 ns | 5.4373 ns | 5.4310 ns | 18.18 |               ? |    0.06 |
