``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-KKKIEZ : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  

```
|         Method |       Mean |     Error |    StdDev |    StdErr |        Min |        Max |     Median | Ratio | MannWhitney(5%) | RatioSD |
|--------------- |-----------:|----------:|----------:|----------:|-----------:|-----------:|-----------:|------:|---------------- |--------:|
|         Equals |  0.6156 ns | 0.0047 ns | 0.0039 ns | 0.0011 ns |  0.6066 ns |  0.6199 ns |  0.6158 ns |  1.00 |            Base |    0.00 |
| Decimal_Equals |  9.4014 ns | 0.1706 ns | 0.1512 ns | 0.0404 ns |  9.1033 ns |  9.6045 ns |  9.4101 ns | 15.26 |          Slower |    0.30 |
|         MinMax |  0.3509 ns | 0.0068 ns | 0.0078 ns | 0.0017 ns |  0.3392 ns |  0.3641 ns |  0.3487 ns |  0.57 |          Faster |    0.02 |
| Decimal_MinMax | 15.1963 ns | 0.2353 ns | 0.2201 ns | 0.0568 ns | 14.8255 ns | 15.5375 ns | 15.1709 ns | 24.69 |          Slower |    0.34 |
