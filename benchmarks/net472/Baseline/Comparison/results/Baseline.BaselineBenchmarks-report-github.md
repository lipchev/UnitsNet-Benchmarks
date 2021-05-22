``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-CZEOMP : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|         Method |       Mean |     Error |    StdDev |    StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |-----------:|----------:|----------:|----------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|
|         Equals |  0.7323 ns | 0.0098 ns | 0.0092 ns | 0.0024 ns |  0.7116 ns |  0.7456 ns |  0.7326 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals | 10.8857 ns | 0.0932 ns | 0.0872 ns | 0.0225 ns | 10.7529 ns | 10.9979 ns | 10.8759 ns | 14.87 |          Slower |    0.20 |
|         MinMax |  0.4126 ns | 0.0077 ns | 0.0072 ns | 0.0019 ns |  0.4005 ns |  0.4234 ns |  0.4110 ns |  0.56 |          Faster |    0.01 |
| Decimal_MinMax | 17.9431 ns | 0.2051 ns | 0.1919 ns | 0.0495 ns | 17.5054 ns | 18.3137 ns | 17.9199 ns | 24.51 |          Slower |    0.45 |
