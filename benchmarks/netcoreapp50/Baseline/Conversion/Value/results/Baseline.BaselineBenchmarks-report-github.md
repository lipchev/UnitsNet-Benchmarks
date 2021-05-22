``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-YJREBG : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|          Method |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |
|---------------- |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|
|         ToValue |  10.67 ns | 0.156 ns | 0.146 ns | 0.038 ns |  10.44 ns |  10.93 ns |  10.68 ns |  1.00 |            Base |    0.00 |
| Decimal_ToValue | 409.28 ns | 4.534 ns | 4.241 ns | 1.095 ns | 401.90 ns | 415.53 ns | 408.69 ns | 38.35 |          Slower |    0.72 |
