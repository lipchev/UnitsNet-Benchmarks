``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-UCJDHU : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|         Method |      Mean |     Error |    StdDev |    StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |----------:|----------:|----------:|----------:|----------:|----------:|----------:|------:|---------------- |--------:|
|         Equals | 0.3636 ns | 0.0069 ns | 0.0124 ns | 0.0019 ns | 0.3474 ns | 0.3926 ns | 0.3602 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals | 4.8310 ns | 0.0948 ns | 0.1390 ns | 0.0258 ns | 4.6387 ns | 5.2043 ns | 4.8092 ns | 13.19 |          Slower |    0.70 |
|         MinMax | 0.3628 ns | 0.0054 ns | 0.0048 ns | 0.0013 ns | 0.3509 ns | 0.3703 ns | 0.3642 ns |  0.97 |            Same |    0.04 |
| Decimal_MinMax | 6.5328 ns | 0.1279 ns | 0.1473 ns | 0.0329 ns | 6.3051 ns | 6.8587 ns | 6.5351 ns | 17.58 |          Slower |    0.78 |
