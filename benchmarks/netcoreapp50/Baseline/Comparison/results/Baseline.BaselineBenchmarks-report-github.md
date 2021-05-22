``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-PPXMRV : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|         Method |      Mean |     Error |    StdDev |    StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |----------:|----------:|----------:|----------:|----------:|----------:|----------:|------:|---------------- |--------:|
|         Equals | 0.5120 ns | 0.0053 ns | 0.0047 ns | 0.0013 ns | 0.5045 ns | 0.5186 ns | 0.5127 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals | 5.6435 ns | 0.0835 ns | 0.0781 ns | 0.0202 ns | 5.4996 ns | 5.7609 ns | 5.6515 ns | 11.01 |          Slower |    0.17 |
|         MinMax | 0.4190 ns | 0.0050 ns | 0.0047 ns | 0.0012 ns | 0.4105 ns | 0.4271 ns | 0.4183 ns |  0.82 |          Faster |    0.01 |
| Decimal_MinMax | 6.9918 ns | 0.1075 ns | 0.1006 ns | 0.0260 ns | 6.7745 ns | 7.1714 ns | 6.9718 ns | 13.66 |          Slower |    0.23 |
