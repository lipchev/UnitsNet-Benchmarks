``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-IAQUSK : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|         Method |      Mean |     Error |    StdDev |    StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |----------:|----------:|----------:|----------:|----------:|----------:|----------:|------:|---------------- |--------:|
|         Equals | 0.3872 ns | 0.0057 ns | 0.0053 ns | 0.0014 ns | 0.3774 ns | 0.3961 ns | 0.3867 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals | 5.2590 ns | 0.0896 ns | 0.0794 ns | 0.0212 ns | 5.1047 ns | 5.3647 ns | 5.2686 ns | 13.58 |          Slower |    0.32 |
|         MinMax | 0.3843 ns | 0.0073 ns | 0.0075 ns | 0.0018 ns | 0.3684 ns | 0.3980 ns | 0.3846 ns |  0.99 |            Same |    0.02 |
| Decimal_MinMax | 6.4725 ns | 0.0993 ns | 0.0880 ns | 0.0235 ns | 6.2769 ns | 6.6143 ns | 6.4717 ns | 16.71 |          Slower |    0.32 |
