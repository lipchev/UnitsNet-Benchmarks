``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-UCGFUR : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|          Method |      Mean |     Error |    StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |
|---------------- |----------:|----------:|----------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|
|         ToValue |  11.74 ns |  0.170 ns |  0.159 ns | 0.041 ns |  11.54 ns |  12.05 ns |  11.67 ns |  1.00 |            Base |    0.00 |
| Decimal_ToValue | 931.77 ns | 16.112 ns | 15.071 ns | 3.891 ns | 908.82 ns | 957.49 ns | 928.13 ns | 79.39 |          Slower |    1.52 |
