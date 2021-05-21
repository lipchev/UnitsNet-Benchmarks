``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-COFGYB : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|          Method |       Mean |      Error |     StdDev |     StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |
|---------------- |-----------:|-----------:|-----------:|-----------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|
|         ToValue |   8.838 ns |   4.466 ns |  0.2448 ns |  0.1413 ns |   8.602 ns |   9.090 ns |   8.822 ns |  1.00 |            Base |    0.00 |
| Decimal_ToValue | 817.115 ns | 407.914 ns | 22.3591 ns | 12.9090 ns | 803.317 ns | 842.912 ns | 805.115 ns | 92.54 |               ? |    4.94 |
