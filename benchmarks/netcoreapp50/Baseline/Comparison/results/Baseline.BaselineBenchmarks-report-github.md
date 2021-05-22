``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-KQADVQ : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|         Method |      Mean |     Error |    StdDev |    StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |----------:|----------:|----------:|----------:|----------:|----------:|----------:|------:|---------------- |--------:|
|         Equals | 0.3973 ns | 0.0052 ns | 0.0046 ns | 0.0012 ns | 0.3866 ns | 0.4016 ns | 0.3988 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals | 5.5550 ns | 0.0822 ns | 0.0769 ns | 0.0198 ns | 5.3822 ns | 5.6659 ns | 5.5598 ns | 13.98 |          Slower |    0.27 |
|         MinMax | 0.4094 ns | 0.0030 ns | 0.0028 ns | 0.0007 ns | 0.4039 ns | 0.4134 ns | 0.4090 ns |  1.03 |            Same |    0.02 |
| Decimal_MinMax | 7.4490 ns | 0.1029 ns | 0.0962 ns | 0.0248 ns | 7.2599 ns | 7.6062 ns | 7.4390 ns | 18.75 |          Slower |    0.40 |
