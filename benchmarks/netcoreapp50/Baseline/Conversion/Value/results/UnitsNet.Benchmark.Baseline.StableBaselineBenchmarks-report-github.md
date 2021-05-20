``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-LYVVJG : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|          Method |      Mean |      Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |
|---------------- |----------:|-----------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|
|         ToValue |  12.40 ns |   6.036 ns | 0.331 ns | 0.191 ns |  12.02 ns |  12.64 ns |  12.54 ns |  1.00 |            Base |    0.00 |
| Decimal_ToValue | 388.80 ns | 102.342 ns | 5.610 ns | 3.239 ns | 382.36 ns | 392.64 ns | 391.39 ns | 31.37 |               ? |    1.14 |
