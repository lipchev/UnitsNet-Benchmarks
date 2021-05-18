``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-CGSENY : .NET Core 2.1.28 (CoreCLR 4.6.30015.01, CoreFX 4.6.30015.01), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  

```
|         Method |       Mean |     Error |    StdDev |    StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |-----------:|----------:|----------:|----------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|
|         Equals |  0.7323 ns | 0.0075 ns | 0.0070 ns | 0.0018 ns |  0.7231 ns |  0.7461 ns |  0.7309 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals | 10.8918 ns | 0.1249 ns | 0.1107 ns | 0.0296 ns | 10.7288 ns | 11.1263 ns | 10.8669 ns | 14.87 |          Slower |    0.23 |
|         MinMax |  0.4619 ns | 0.0041 ns | 0.0038 ns | 0.0010 ns |  0.4570 ns |  0.4706 ns |  0.4607 ns |  0.63 |          Faster |    0.01 |
| Decimal_MinMax | 11.8742 ns | 0.0549 ns | 0.0486 ns | 0.0130 ns | 11.7827 ns | 11.9326 ns | 11.8931 ns | 16.21 |          Slower |    0.16 |
