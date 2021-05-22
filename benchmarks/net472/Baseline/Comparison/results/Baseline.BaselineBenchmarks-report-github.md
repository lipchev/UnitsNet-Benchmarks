``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-UYTENO : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|         Method |       Mean |     Error |    StdDev |    StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |-----------:|----------:|----------:|----------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|
|         Equals |  0.6648 ns | 0.0078 ns | 0.0073 ns | 0.0019 ns |  0.6510 ns |  0.6767 ns |  0.6666 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals |  9.8128 ns | 0.1617 ns | 0.1512 ns | 0.0390 ns |  9.5368 ns | 10.0523 ns |  9.7973 ns | 14.76 |          Slower |    0.30 |
|         MinMax |  0.3716 ns | 0.0068 ns | 0.0064 ns | 0.0017 ns |  0.3608 ns |  0.3836 ns |  0.3707 ns |  0.56 |          Faster |    0.01 |
| Decimal_MinMax | 18.1710 ns | 0.3065 ns | 0.2867 ns | 0.0740 ns | 17.7919 ns | 18.5809 ns | 18.1466 ns | 27.34 |          Slower |    0.68 |
