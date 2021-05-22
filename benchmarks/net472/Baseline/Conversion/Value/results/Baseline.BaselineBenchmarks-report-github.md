``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-ZTPSXV : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|          Method |        Mean |     Error |   StdDev |   StdErr |       Min |         Max |      Median | Ratio | MannWhitney(5%) | RatioSD |
|---------------- |------------:|----------:|---------:|---------:|----------:|------------:|------------:|------:|---------------- |--------:|
|         ToValue |    10.83 ns |  0.156 ns | 0.146 ns | 0.038 ns |  10.64 ns |    11.07 ns |    10.82 ns |  1.00 |            Base |    0.00 |
| Decimal_ToValue | 1,007.88 ns | 11.202 ns | 9.930 ns | 2.654 ns | 992.04 ns | 1,026.56 ns | 1,005.13 ns | 93.01 |          Slower |    1.46 |
