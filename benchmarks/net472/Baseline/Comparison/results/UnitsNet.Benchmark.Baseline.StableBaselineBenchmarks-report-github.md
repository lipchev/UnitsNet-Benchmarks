``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-KBRNNT : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|         Method |       Mean |     Error |    StdDev |    StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |-----------:|----------:|----------:|----------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|
|         Equals |  0.9170 ns | 0.0165 ns | 0.0162 ns | 0.0041 ns |  0.8663 ns |  0.9370 ns |  0.9215 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals | 11.0550 ns | 0.2106 ns | 0.2663 ns | 0.0555 ns | 10.5218 ns | 11.6657 ns | 11.0830 ns | 12.10 |          Slower |    0.40 |
|         MinMax |  0.4993 ns | 0.0098 ns | 0.0112 ns | 0.0025 ns |  0.4741 ns |  0.5149 ns |  0.5001 ns |  0.54 |          Faster |    0.02 |
| Decimal_MinMax | 15.9076 ns | 0.2738 ns | 0.2561 ns | 0.0661 ns | 15.5726 ns | 16.3708 ns | 15.8440 ns | 17.37 |          Slower |    0.52 |
