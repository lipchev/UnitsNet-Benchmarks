``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-OIKLQF : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|         Method |       Mean |     Error |    StdDev |    StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |-----------:|----------:|----------:|----------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|
|         Equals |  0.9019 ns | 0.0158 ns | 0.0147 ns | 0.0038 ns |  0.8802 ns |  0.9383 ns |  0.9004 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals | 10.2651 ns | 0.1318 ns | 0.1233 ns | 0.0318 ns | 10.0813 ns | 10.4560 ns | 10.2490 ns | 11.38 |          Slower |    0.19 |
|         MinMax |  0.5019 ns | 0.0053 ns | 0.0050 ns | 0.0013 ns |  0.4926 ns |  0.5100 ns |  0.5016 ns |  0.56 |          Faster |    0.01 |
| Decimal_MinMax | 15.5543 ns | 0.2772 ns | 0.2593 ns | 0.0669 ns | 15.3045 ns | 16.1395 ns | 15.4690 ns | 17.25 |          Slower |    0.41 |
