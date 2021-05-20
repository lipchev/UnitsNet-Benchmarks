``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8272CL CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-BGNEIT : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|           Method |      Mean |     Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) |
|----------------- |----------:|----------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |
|         ToString | 213.16 ns | 29.658 ns | 1.626 ns | 0.939 ns | 211.29 ns | 214.27 ns | 213.91 ns |  1.00 |            Base |
| Decimal_ToString |  89.83 ns |  5.527 ns | 0.303 ns | 0.175 ns |  89.53 ns |  90.14 ns |  89.82 ns |  0.42 |               ? |
