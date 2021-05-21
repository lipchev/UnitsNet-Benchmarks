``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-CSKCWN : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|         Method |      Mean |     Error |    StdDev |    StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |----------:|----------:|----------:|----------:|----------:|----------:|----------:|------:|---------------- |--------:|
|         Equals | 0.4221 ns | 0.2422 ns | 0.0133 ns | 0.0077 ns | 0.4073 ns | 0.4330 ns | 0.4259 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals | 5.8713 ns | 0.5785 ns | 0.0317 ns | 0.0183 ns | 5.8347 ns | 5.8897 ns | 5.8895 ns | 13.92 |               ? |    0.37 |
|         MinMax | 0.7094 ns | 0.0887 ns | 0.0049 ns | 0.0028 ns | 0.7042 ns | 0.7138 ns | 0.7101 ns |  1.68 |               ? |    0.04 |
| Decimal_MinMax | 7.5597 ns | 3.7976 ns | 0.2082 ns | 0.1202 ns | 7.4209 ns | 7.7990 ns | 7.4591 ns | 17.92 |               ? |    0.60 |
