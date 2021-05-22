``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-ASFYXH : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|         Method |       Mean |     Error |    StdDev |    StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |-----------:|----------:|----------:|----------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|
|         Equals |  0.9343 ns | 0.0128 ns | 0.0120 ns | 0.0031 ns |  0.9166 ns |  0.9629 ns |  0.9328 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals | 10.7069 ns | 0.1611 ns | 0.1507 ns | 0.0389 ns | 10.4796 ns | 11.0373 ns | 10.7228 ns | 11.46 |          Slower |    0.24 |
|         MinMax |  0.5151 ns | 0.0085 ns | 0.0079 ns | 0.0021 ns |  0.5051 ns |  0.5332 ns |  0.5162 ns |  0.55 |          Faster |    0.01 |
| Decimal_MinMax | 15.7956 ns | 0.1647 ns | 0.1460 ns | 0.0390 ns | 15.5183 ns | 15.9672 ns | 15.8395 ns | 16.90 |          Slower |    0.32 |
