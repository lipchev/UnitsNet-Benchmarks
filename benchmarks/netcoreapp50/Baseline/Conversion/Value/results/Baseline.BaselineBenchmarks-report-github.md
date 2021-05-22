``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-OTRDBN : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|          Method |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |
|---------------- |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|
|         ToValue |  12.63 ns | 0.249 ns | 0.287 ns | 0.064 ns |  12.13 ns |  13.30 ns |  12.62 ns |  1.00 |            Base |    0.00 |
| Decimal_ToValue | 400.19 ns | 7.898 ns | 9.096 ns | 2.034 ns | 385.08 ns | 416.18 ns | 399.13 ns | 31.70 |          Slower |    0.90 |
