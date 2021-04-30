``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-YKIQYP : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationTime=125.0000 ms  

```
|                 Method |           Mean |         Error |        StdDev |         Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------------- |---------------:|--------------:|--------------:|---------------:|-------:|------:|------:|----------:|
|            Constructor |      10.705 ns |     0.2311 ns |     0.2162 ns |      10.745 ns |      - |     - |     - |         - |
|         Constructor_SI |     352.768 ns |     4.9637 ns |     4.6431 ns |     353.064 ns | 0.0115 |     - |     - |     192 B |
|             FromMethod |      28.884 ns |     0.4297 ns |     0.3809 ns |      28.750 ns |      - |     - |     - |         - |
|             ToProperty |       8.713 ns |     0.1780 ns |     0.1665 ns |       8.652 ns |      - |     - |     - |         - |
|                     As |       8.769 ns |     0.2112 ns |     0.2347 ns |       8.833 ns |      - |     - |     - |         - |
|                  As_SI |     355.453 ns |     7.0951 ns |    12.6115 ns |     354.627 ns | 0.0114 |     - |     - |     192 B |
|                 ToUnit |      17.830 ns |     0.4041 ns |     0.5531 ns |      17.946 ns |      - |     - |     - |         - |
|              ToUnit_SI |     358.611 ns |     7.1741 ns |    14.9750 ns |     362.479 ns | 0.0118 |     - |     - |     192 B |
|           ToStringTest |  18,843.820 ns |   376.7299 ns | 1,043.9169 ns |  18,700.000 ns |      - |     - |     - |     944 B |
|                  Parse | 119,869.118 ns | 2,273.2201 ns | 5,446.4902 ns | 119,100.000 ns |      - |     - |     - |   33632 B |
|          TryParseValid | 122,266.304 ns | 2,795.7447 ns | 7,885.4474 ns | 121,650.000 ns |      - |     - |     - |   33608 B |
|        TryParseInvalid | 124,635.870 ns | 3,425.6637 ns | 9,662.1453 ns | 121,550.000 ns |      - |     - |     - |   33216 B |
|           QuantityFrom |   3,675.000 ns |    62.9773 ns |   105.2209 ns |   3,700.000 ns |      - |     - |     - |      56 B |
|           IQuantity_As |      20.357 ns |     0.4379 ns |     1.0659 ns |      20.631 ns | 0.0015 |     - |     - |      24 B |
|        IQuantity_As_SI |     349.981 ns |     6.9820 ns |    18.3933 ns |     352.783 ns | 0.0109 |     - |     - |     192 B |
|       IQuantity_ToUnit |      27.436 ns |     0.8308 ns |     2.4366 ns |      27.421 ns | 0.0033 |     - |     - |      56 B |
| IQuantity_ToStringTest |   1,444.987 ns |    28.6225 ns |    65.7650 ns |   1,457.136 ns | 0.0565 |     - |     - |     944 B |
