``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-AJWNRX : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|         Method |       Mean |     Error |    StdDev |    StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |-----------:|----------:|----------:|----------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|
|         Equals |  0.6772 ns | 0.0092 ns | 0.0081 ns | 0.0022 ns |  0.6680 ns |  0.6935 ns |  0.6746 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals | 10.1707 ns | 0.1986 ns | 0.2040 ns | 0.0495 ns |  9.8519 ns | 10.5948 ns | 10.1375 ns | 15.00 |          Slower |    0.37 |
|         MinMax |  0.3777 ns | 0.0068 ns | 0.0060 ns | 0.0016 ns |  0.3700 ns |  0.3905 ns |  0.3776 ns |  0.56 |          Faster |    0.01 |
| Decimal_MinMax | 15.2007 ns | 0.2987 ns | 0.3884 ns | 0.0793 ns | 14.7090 ns | 15.9992 ns | 15.0561 ns | 22.54 |          Slower |    0.72 |
