``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-UAJAWB : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|          Method |       Mean |      Error |     StdDev |    StdErr |        Min |        Max |     Median |  Ratio | MannWhitney(5%) | RatioSD |
|---------------- |-----------:|-----------:|-----------:|----------:|-----------:|-----------:|-----------:|-------:|---------------- |--------:|
|         ToValue |   8.615 ns |  0.1565 ns |  0.1464 ns | 0.0378 ns |   8.398 ns |   8.920 ns |   8.614 ns |   1.00 |            Base |    0.00 |
| Decimal_ToValue | 931.856 ns | 16.0630 ns | 15.0253 ns | 3.8795 ns | 906.926 ns | 955.106 ns | 938.075 ns | 108.19 |          Slower |    2.43 |
