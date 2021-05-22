``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-XNRIAG : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|          Method |      Mean |     Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |
|---------------- |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|
|         ToValue |  10.57 ns |  0.146 ns |  0.136 ns | 0.035 ns |  10.41 ns |  10.82 ns |  10.54 ns |  1.00 |            Base |    0.00 |
| Decimal_ToValue | 975.46 ns | 15.754 ns | 14.736 ns | 3.805 ns | 943.47 ns | 994.64 ns | 978.28 ns | 92.28 |          Slower |    1.96 |
