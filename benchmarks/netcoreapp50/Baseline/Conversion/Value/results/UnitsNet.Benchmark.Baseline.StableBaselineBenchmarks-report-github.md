``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-VLWIQV : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|          Method |      Mean |     Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |
|---------------- |----------:|----------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|
|         ToValue |  11.65 ns |  5.515 ns | 0.302 ns | 0.175 ns |  11.35 ns |  11.95 ns |  11.65 ns |  1.00 |            Base |    0.00 |
| Decimal_ToValue | 362.69 ns | 70.261 ns | 3.851 ns | 2.224 ns | 358.68 ns | 366.36 ns | 363.03 ns | 31.15 |               ? |    1.02 |
