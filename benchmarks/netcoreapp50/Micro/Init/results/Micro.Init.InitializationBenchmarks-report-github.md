``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1935 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.203
  [Host]     : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT
  Job-VFFSXB : .NET Core 5.0.6 (CoreCLR 5.0.621.22011, CoreFX 5.0.621.22011), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                     Method |       Mean |    Error |   StdDev |  StdErr |        Min |        Max |     Median |   Gen 0 |   Gen 1 | Gen 2 |  Allocated |
|--------------------------- |-----------:|---------:|---------:|--------:|-----------:|-----------:|-----------:|--------:|--------:|------:|-----------:|
| InitUnitAbbreviationsCache | 1,845.3 μs | 35.74 μs | 36.70 μs | 8.90 μs | 1,790.9 μs | 1,902.4 μs | 1,839.2 μs | 80.0781 | 39.0625 |     - | 1234.65 KB |
|          InitUnitConverter |   575.8 μs | 17.09 μs | 49.29 μs | 5.03 μs |   478.9 μs |   709.4 μs |   571.1 μs |       - |       - |     - |  718.66 KB |
