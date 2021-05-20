``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-KNECSO : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|           Method |      Mean |     Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |
|----------------- |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|
|         ToString | 273.67 ns | 11.217 ns | 33.074 ns | 3.307 ns | 224.08 ns | 350.94 ns | 274.07 ns |  1.00 |            Base |    0.00 |
| Decimal_ToString |  91.02 ns |  1.888 ns |  2.020 ns | 0.476 ns |  87.49 ns |  94.41 ns |  90.52 ns |  0.30 |          Faster |    0.02 |
