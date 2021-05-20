``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-QXVIXF : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|         Method |       Mean |     Error |    StdDev |    StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |-----------:|----------:|----------:|----------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|
|         Equals |  0.7566 ns | 0.3136 ns | 0.0172 ns | 0.0099 ns |  0.7457 ns |  0.7764 ns |  0.7476 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals | 11.3075 ns | 1.1713 ns | 0.0642 ns | 0.0371 ns | 11.2362 ns | 11.3607 ns | 11.3257 ns | 14.95 |               ? |    0.29 |
|         MinMax |  0.4134 ns | 0.1891 ns | 0.0104 ns | 0.0060 ns |  0.4017 ns |  0.4216 ns |  0.4168 ns |  0.55 |               ? |    0.01 |
| Decimal_MinMax | 18.1888 ns | 3.9044 ns | 0.2140 ns | 0.1236 ns | 18.0235 ns | 18.4305 ns | 18.1123 ns | 24.05 |               ? |    0.77 |
