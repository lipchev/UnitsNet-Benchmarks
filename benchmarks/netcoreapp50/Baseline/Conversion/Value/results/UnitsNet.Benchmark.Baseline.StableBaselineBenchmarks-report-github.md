``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-ZNLSTH : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|          Method |       Mean |     Error |     StdDev |    StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |
|---------------- |-----------:|----------:|-----------:|----------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|
|         ToValue |   7.935 ns | 0.1579 ns |  0.2214 ns | 0.0426 ns |   7.601 ns |   8.539 ns |   7.888 ns |  1.00 |            Base |    0.00 |
| Decimal_ToValue | 338.055 ns | 6.7451 ns | 12.8333 ns | 1.9131 ns | 318.197 ns | 370.104 ns | 336.351 ns | 42.92 |          Slower |    2.32 |
