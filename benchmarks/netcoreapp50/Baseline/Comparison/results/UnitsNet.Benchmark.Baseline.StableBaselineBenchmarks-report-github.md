``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-JLRNAM : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|         Method |      Mean |     Error |    StdDev |    StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |----------:|----------:|----------:|----------:|----------:|----------:|----------:|------:|---------------- |--------:|
|         Equals | 0.5176 ns | 0.0075 ns | 0.0070 ns | 0.0018 ns | 0.5062 ns | 0.5292 ns | 0.5176 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals | 5.7419 ns | 0.0779 ns | 0.0729 ns | 0.0188 ns | 5.6429 ns | 5.8921 ns | 5.7289 ns | 11.10 |          Slower |    0.20 |
|         MinMax | 0.4179 ns | 0.0083 ns | 0.0126 ns | 0.0023 ns | 0.4049 ns | 0.4490 ns | 0.4125 ns |  0.81 |          Faster |    0.03 |
| Decimal_MinMax | 7.7255 ns | 0.1525 ns | 0.2374 ns | 0.0420 ns | 7.3812 ns | 8.1753 ns | 7.7266 ns | 14.97 |          Slower |    0.53 |
