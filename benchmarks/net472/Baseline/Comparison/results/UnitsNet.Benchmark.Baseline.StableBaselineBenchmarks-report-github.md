``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-YRBMZO : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|         Method |       Mean |     Error |    StdDev |    StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |-----------:|----------:|----------:|----------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|
|         Equals |  0.7089 ns | 0.1142 ns | 0.0063 ns | 0.0036 ns |  0.7039 ns |  0.7159 ns |  0.7069 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals | 10.9807 ns | 0.4742 ns | 0.0260 ns | 0.0150 ns | 10.9530 ns | 11.0046 ns | 10.9845 ns | 15.49 |               ? |    0.12 |
|         MinMax |  0.3734 ns | 0.1953 ns | 0.0107 ns | 0.0062 ns |  0.3612 ns |  0.3811 ns |  0.3779 ns |  0.53 |               ? |    0.02 |
| Decimal_MinMax | 17.1229 ns | 4.2312 ns | 0.2319 ns | 0.1339 ns | 16.9053 ns | 17.3669 ns | 17.0965 ns | 24.16 |               ? |    0.49 |
