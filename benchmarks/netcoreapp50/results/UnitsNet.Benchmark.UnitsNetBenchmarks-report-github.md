``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-KVKPRA : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                 Method |          Mean |         Error |        StdDev |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|-------:|------:|------:|----------:|
|            Constructor |     10.436 ns |     10.645 ns |     0.5835 ns |      - |     - |     - |         - |
|         Constructor_SI |    378.873 ns |     96.813 ns |     5.3066 ns | 0.0072 |     - |     - |     192 B |
|             FromMethod |     28.911 ns |     12.955 ns |     0.7101 ns |      - |     - |     - |         - |
|             ToProperty |      9.120 ns |      6.444 ns |     0.3532 ns |      - |     - |     - |         - |
|                     As |      8.927 ns |      1.434 ns |     0.0786 ns |      - |     - |     - |         - |
|                  As_SI |    348.200 ns |    161.768 ns |     8.8670 ns | 0.0072 |     - |     - |     192 B |
|                 ToUnit |     18.837 ns |     13.870 ns |     0.7603 ns |      - |     - |     - |         - |
|              ToUnit_SI |    360.537 ns |     60.323 ns |     3.3065 ns | 0.0072 |     - |     - |     192 B |
|           ToStringTest |  1,482.371 ns |    413.751 ns |    22.6791 ns | 0.0343 |     - |     - |     944 B |
|                  Parse | 50,529.704 ns | 15,343.385 ns |   841.0227 ns | 1.2207 |     - |     - |   33344 B |
|          TryParseValid | 52,621.936 ns | 45,849.311 ns | 2,513.1555 ns | 1.2207 |     - |     - |   33320 B |
|        TryParseInvalid | 57,800.002 ns | 14,351.599 ns |   786.6596 ns | 1.2207 |     - |     - |   32928 B |
|           QuantityFrom |  3,833.333 ns |  2,786.775 ns |   152.7525 ns |      - |     - |     - |      56 B |
|           IQuantity_As |     19.344 ns |     14.982 ns |     0.8212 ns | 0.0009 |     - |     - |      24 B |
|        IQuantity_As_SI |    371.420 ns |    210.845 ns |    11.5571 ns | 0.0072 |     - |     - |     192 B |
|       IQuantity_ToUnit |     30.643 ns |     21.673 ns |     1.1880 ns | 0.0021 |     - |     - |      56 B |
| IQuantity_ToStringTest |  1,501.271 ns |    413.985 ns |    22.6919 ns | 0.0343 |     - |     - |     944 B |
