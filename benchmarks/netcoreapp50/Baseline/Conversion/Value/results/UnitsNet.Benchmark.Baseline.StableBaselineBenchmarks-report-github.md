``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-RXYRGQ : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|          Method |      Mean |    Error |   StdDev |   StdErr |       Min |       Max |    Median | Ratio | MannWhitney(5%) | RatioSD |
|---------------- |----------:|---------:|---------:|---------:|----------:|----------:|----------:|------:|---------------- |--------:|
|         ToValue |  11.65 ns | 0.154 ns | 0.144 ns | 0.037 ns |  11.44 ns |  11.94 ns |  11.67 ns |  1.00 |            Base |    0.00 |
| Decimal_ToValue | 357.23 ns | 4.614 ns | 3.853 ns | 1.069 ns | 351.05 ns | 362.73 ns | 358.74 ns | 30.69 |          Slower |    0.45 |
