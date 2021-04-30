``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-VAMCVA : .NET Core 2.1.27 (CoreCLR 4.6.29916.01, CoreFX 4.6.29916.03), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationTime=125.0000 ms  

```
|                 Method |           Mean |         Error |         StdDev |         Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------------- |---------------:|--------------:|---------------:|---------------:|-------:|------:|------:|----------:|
|            Constructor |      11.790 ns |     0.2735 ns |      0.3557 ns |      11.743 ns |      - |     - |     - |         - |
|         Constructor_SI |     562.933 ns |    10.5265 ns |      8.7901 ns |     563.396 ns | 0.0226 |     - |     - |     192 B |
|             FromMethod |      29.070 ns |     0.6201 ns |      0.6090 ns |      28.959 ns |      - |     - |     - |         - |
|             ToProperty |       8.328 ns |     0.2073 ns |      0.3166 ns |       8.262 ns |      - |     - |     - |         - |
|                     As |       8.541 ns |     0.2133 ns |      0.2095 ns |       8.531 ns |      - |     - |     - |         - |
|                  As_SI |     589.577 ns |    11.5778 ns |     14.6423 ns |     590.432 ns | 0.0228 |     - |     - |     192 B |
|                 ToUnit |      19.105 ns |     0.4030 ns |      0.4139 ns |      19.202 ns |      - |     - |     - |         - |
|              ToUnit_SI |     588.624 ns |    11.6890 ns |     20.7773 ns |     585.087 ns | 0.0230 |     - |     - |     192 B |
|           ToStringTest |  14,943.678 ns |   320.0496 ns |    876.1307 ns |  14,800.000 ns |      - |     - |     - |     952 B |
|                  Parse | 104,642.708 ns | 3,653.2965 ns | 10,540.5957 ns | 100,900.000 ns |      - |     - |     - |   44816 B |
|          TryParseValid | 110,640.000 ns | 4,568.3020 ns | 13,469.7416 ns | 110,200.000 ns |      - |     - |     - |   44792 B |
|        TryParseInvalid | 115,145.361 ns | 3,934.2875 ns | 11,414.0814 ns | 114,500.000 ns |      - |     - |     - |   44392 B |
|           QuantityFrom |   2,221.429 ns |    46.2427 ns |    134.8921 ns |   2,200.000 ns |      - |     - |     - |      56 B |
|           IQuantity_As |      19.048 ns |     0.3969 ns |      0.3099 ns |      19.061 ns | 0.0034 |     - |     - |      24 B |
|        IQuantity_As_SI |     573.126 ns |    11.3971 ns |     20.2583 ns |     572.074 ns | 0.0220 |     - |     - |     192 B |
|       IQuantity_ToUnit |      31.552 ns |     0.7212 ns |      1.5054 ns |      31.332 ns | 0.0084 |     - |     - |      56 B |
| IQuantity_ToStringTest |  16,347.826 ns |   325.5606 ns |    918.2494 ns |  16,200.000 ns |      - |     - |     - |     952 B |
