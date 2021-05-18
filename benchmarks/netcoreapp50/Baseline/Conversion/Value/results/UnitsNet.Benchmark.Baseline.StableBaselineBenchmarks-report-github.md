``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-CRDFJK : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|          Method |       Mean |     Error |    StdDev |    StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |
|---------------- |-----------:|----------:|----------:|----------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|
|         ToValue |   8.527 ns | 0.1552 ns | 0.1376 ns | 0.0368 ns |   8.229 ns |   8.808 ns |   8.532 ns |  1.00 |            Base |    0.00 |
| Decimal_ToValue | 352.954 ns | 4.5851 ns | 4.0646 ns | 1.0863 ns | 346.903 ns | 361.943 ns | 352.558 ns | 41.40 |          Slower |    0.88 |
