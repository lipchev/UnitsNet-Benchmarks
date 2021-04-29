``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-RUPGHS : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationTime=125.0000 ms  

```
|                 Method |           Mean |         Error |         StdDev |         Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------------- |---------------:|--------------:|---------------:|---------------:|-------:|------:|------:|----------:|
|            Constructor |      15.113 ns |     0.3449 ns |      0.6888 ns |      15.217 ns |      - |     - |     - |         - |
|         Constructor_SI |     648.451 ns |    12.9828 ns |     20.2127 ns |     649.508 ns | 0.0109 |     - |     - |     201 B |
|             FromMethod |      41.702 ns |     0.8813 ns |      1.2354 ns |      41.956 ns |      - |     - |     - |         - |
|             ToProperty |       9.555 ns |     0.2247 ns |      0.4165 ns |       9.501 ns |      - |     - |     - |         - |
|                     As |       9.849 ns |     0.2421 ns |      0.4426 ns |       9.704 ns |      - |     - |     - |         - |
|                  As_SI |     652.056 ns |    12.5573 ns |     20.6320 ns |     651.609 ns | 0.0149 |     - |     - |     201 B |
|                 ToUnit |      23.386 ns |     0.5072 ns |      0.7435 ns |      23.473 ns |      - |     - |     - |         - |
|              ToUnit_SI |     691.984 ns |    13.2888 ns |     11.7802 ns |     692.689 ns | 0.0110 |     - |     - |     201 B |
|           ToStringTest |  17,140.217 ns |   684.9326 ns |  1,931.8647 ns |  16,900.000 ns |      - |     - |     - |    8192 B |
|                  Parse | 107,503.659 ns | 3,418.8859 ns |  9,066.4004 ns | 104,850.000 ns |      - |     - |     - |   57344 B |
|          TryParseValid | 105,059.091 ns | 4,414.3820 ns | 12,158.4901 ns | 102,450.000 ns |      - |     - |     - |   57344 B |
|        TryParseInvalid | 105,937.778 ns | 3,974.6434 ns | 11,079.7170 ns | 103,950.000 ns |      - |     - |     - |   57344 B |
|           QuantityFrom |   2,195.918 ns |    70.8085 ns |    206.5516 ns |   2,200.000 ns |      - |     - |     - |    8192 B |
|           IQuantity_As |      24.803 ns |     0.5434 ns |      1.5504 ns |      24.794 ns | 0.0030 |     - |     - |      24 B |
|        IQuantity_As_SI |     655.033 ns |    12.2673 ns |     23.3398 ns |     654.862 ns | 0.0108 |     - |     - |     201 B |
|       IQuantity_ToUnit |      39.026 ns |     0.8846 ns |      2.1024 ns |      38.803 ns | 0.0077 |     - |     - |      56 B |
| IQuantity_ToStringTest |  16,427.273 ns |   617.9359 ns |  1,701.9750 ns |  16,050.000 ns |      - |     - |     - |    8192 B |
