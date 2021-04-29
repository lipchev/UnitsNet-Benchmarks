``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-FCXYBK : .NET Core 2.1.27 (CoreCLR 4.6.29916.01, CoreFX 4.6.29916.03), X64 RyuJIT

Runtime=.NET Core 2.1  Toolchain=netcoreapp21  IterationTime=125.0000 ms  

```
|                 Method |           Mean |         Error |        StdDev |         Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------------- |---------------:|--------------:|--------------:|---------------:|-------:|------:|------:|----------:|
|            Constructor |      12.184 ns |     0.2733 ns |     0.3919 ns |      12.232 ns |      - |     - |     - |         - |
|         Constructor_SI |     588.671 ns |    11.5414 ns |    17.6250 ns |     590.813 ns | 0.0182 |     - |     - |     192 B |
|             FromMethod |      27.557 ns |     0.5841 ns |     0.8377 ns |      27.587 ns |      - |     - |     - |         - |
|             ToProperty |       9.574 ns |     0.2319 ns |     0.2932 ns |       9.619 ns |      - |     - |     - |         - |
|                     As |       8.924 ns |     0.2212 ns |     0.2953 ns |       8.882 ns |      - |     - |     - |         - |
|                  As_SI |     559.160 ns |    10.8786 ns |    17.5670 ns |     558.374 ns | 0.0175 |     - |     - |     192 B |
|                 ToUnit |      19.024 ns |     0.3747 ns |     0.5492 ns |      19.028 ns |      - |     - |     - |         - |
|              ToUnit_SI |     574.141 ns |    11.5260 ns |    20.4875 ns |     576.709 ns | 0.0184 |     - |     - |     192 B |
|           ToStringTest |  15,167.045 ns |   311.8741 ns |   858.9919 ns |  15,100.000 ns |      - |     - |     - |     952 B |
|                  Parse | 111,112.791 ns | 2,203.7285 ns | 5,995.4060 ns | 110,550.000 ns |      - |     - |     - |   44816 B |
|          TryParseValid | 112,836.667 ns | 2,246.3780 ns | 5,024.3464 ns | 110,300.000 ns |      - |     - |     - |   44792 B |
|        TryParseInvalid | 114,048.958 ns | 2,348.7545 ns | 6,776.6937 ns | 112,200.000 ns |      - |     - |     - |   44392 B |
|           QuantityFrom |   1,886.957 ns |    45.2812 ns |   127.7165 ns |   1,900.000 ns |      - |     - |     - |      56 B |
|           IQuantity_As |      22.397 ns |     0.3778 ns |     0.3534 ns |      22.389 ns | 0.0033 |     - |     - |      24 B |
|        IQuantity_As_SI |     563.335 ns |    11.2007 ns |    23.1314 ns |     563.038 ns | 0.0188 |     - |     - |     192 B |
|       IQuantity_ToUnit |      31.381 ns |     0.7056 ns |     1.0343 ns |      31.339 ns | 0.0083 |     - |     - |      56 B |
| IQuantity_ToStringTest |  16,243.617 ns |   463.3293 ns | 1,321.9047 ns |  16,100.000 ns |      - |     - |     - |     952 B |
