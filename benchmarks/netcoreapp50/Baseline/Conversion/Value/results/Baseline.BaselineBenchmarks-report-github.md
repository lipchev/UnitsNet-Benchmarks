``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-JJUMRK : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|          Method |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |
|---------------- |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|
|         ToValue |  10.30 ns | 0.107 ns | 0.095 ns | 0.025 ns |  10.14 ns |  10.49 ns |  10.30 ns |  1.00 |            Base |    0.00 |
| Decimal_ToValue | 397.11 ns | 7.694 ns | 8.861 ns | 1.981 ns | 381.32 ns | 410.73 ns | 399.44 ns | 38.63 |          Slower |    0.90 |
