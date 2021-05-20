``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8272CL CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-QBBNBG : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|        Method |  textValue |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) |
|-------------- |----------- |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |
|         Parse | 1234.56789 |  96.52 ns | 5.486 ns | 0.301 ns | 0.174 ns |  96.19 ns |  96.77 ns |  96.61 ns |  1.00 |            Base |
| Decimal_Parse | 1234.56789 | 104.40 ns | 6.340 ns | 0.348 ns | 0.201 ns | 104.02 ns | 104.68 ns | 104.52 ns |  1.08 |               ? |
