``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-QBQIGS : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|         Method |      Mean |     Error |    StdDev |    StdErr |       Min |        Max |    Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |----------:|----------:|----------:|----------:|----------:|-----------:|----------:|------:|---------------- |--------:|
|         Equals | 0.5718 ns | 0.0100 ns | 0.0089 ns | 0.0024 ns | 0.5564 ns |  0.5885 ns | 0.5710 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals | 8.4704 ns | 0.1686 ns | 0.1655 ns | 0.0414 ns | 8.1496 ns |  8.7617 ns | 8.4565 ns | 14.78 |          Slower |    0.36 |
|         MinMax | 0.3590 ns | 0.0047 ns | 0.0044 ns | 0.0011 ns | 0.3541 ns |  0.3688 ns | 0.3583 ns |  0.63 |          Faster |    0.01 |
| Decimal_MinMax | 9.7935 ns | 0.1665 ns | 0.1558 ns | 0.0402 ns | 9.5408 ns | 10.0418 ns | 9.8252 ns | 17.13 |          Slower |    0.40 |
