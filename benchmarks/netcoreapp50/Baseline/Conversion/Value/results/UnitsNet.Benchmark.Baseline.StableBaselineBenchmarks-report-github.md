``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-ZLPUOE : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|          Method |      Mean |     Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |
|---------------- |----------:|----------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|
|         ToValue |  10.76 ns |  1.205 ns | 0.066 ns | 0.038 ns |  10.69 ns |  10.83 ns |  10.76 ns |  1.00 |            Base |    0.00 |
| Decimal_ToValue | 413.92 ns | 76.679 ns | 4.203 ns | 2.427 ns | 409.39 ns | 417.70 ns | 414.67 ns | 38.47 |               ? |    0.38 |
