``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-KOLOGT : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|        Method |  textValue |     Mean |   Error |  StdDev |  StdErr |      Min |      Max |   Median | Ratio | MannWhitney(5%) |
|-------------- |----------- |---------:|--------:|--------:|--------:|---------:|---------:|---------:|------:|---------------- |
|         Parse | 1234.56789 | 130.1 ns | 1.97 ns | 1.75 ns | 0.47 ns | 126.8 ns | 132.8 ns | 130.4 ns |  1.00 |            Base |
| Decimal_Parse | 1234.56789 | 140.2 ns | 2.24 ns | 2.10 ns | 0.54 ns | 137.3 ns | 144.3 ns | 139.8 ns |  1.08 |          Slower |
