``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-KBHAVI : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|         Method |      Mean |     Error |    StdDev |    StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |----------:|----------:|----------:|----------:|----------:|----------:|----------:|------:|---------------- |--------:|
|         Equals | 0.3750 ns | 0.0072 ns | 0.0074 ns | 0.0018 ns | 0.3629 ns | 0.3900 ns | 0.3743 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals | 5.0010 ns | 0.0961 ns | 0.0899 ns | 0.0232 ns | 4.8864 ns | 5.1800 ns | 4.9844 ns | 13.34 |          Slower |    0.36 |
|         MinMax | 0.3688 ns | 0.0039 ns | 0.0037 ns | 0.0010 ns | 0.3627 ns | 0.3770 ns | 0.3688 ns |  0.98 |            Same |    0.02 |
| Decimal_MinMax | 6.2129 ns | 0.0804 ns | 0.0752 ns | 0.0194 ns | 6.1097 ns | 6.3947 ns | 6.2044 ns | 16.58 |          Slower |    0.30 |
