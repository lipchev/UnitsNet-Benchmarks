``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-YOBMLA : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|          Method |      Mean |     Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |
|---------------- |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|
|         ToValue |  10.59 ns |  0.210 ns |  0.307 ns | 0.057 ns |  10.09 ns |  11.31 ns |  10.62 ns |  1.00 |            Base |    0.00 |
| Decimal_ToValue | 956.41 ns | 18.203 ns | 19.477 ns | 4.591 ns | 929.11 ns | 989.10 ns | 955.62 ns | 89.91 |          Slower |    3.61 |
