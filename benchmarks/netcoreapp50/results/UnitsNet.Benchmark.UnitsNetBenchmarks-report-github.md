``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-DVMDJV : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                 Method |          Mean |         Error |        StdDev |        Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|--------------:|-------:|------:|------:|----------:|
|            Constructor |     11.122 ns |     0.2182 ns |     0.2041 ns |     11.036 ns |      - |     - |     - |         - |
|         Constructor_SI |    351.877 ns |     6.9074 ns |     6.4611 ns |    351.208 ns | 0.0072 |     - |     - |     192 B |
|             FromMethod |     30.353 ns |     0.5750 ns |     0.5378 ns |     30.225 ns |      - |     - |     - |         - |
|             ToProperty |      9.089 ns |     0.2009 ns |     0.1879 ns |      9.094 ns |      - |     - |     - |         - |
|                     As |      9.004 ns |     0.1055 ns |     0.0986 ns |      8.982 ns |      - |     - |     - |         - |
|                  As_SI |    355.089 ns |     6.9057 ns |     7.0916 ns |    355.818 ns | 0.0072 |     - |     - |     192 B |
|                 ToUnit |     19.153 ns |     0.1409 ns |     0.1177 ns |     19.146 ns |      - |     - |     - |         - |
|              ToUnit_SI |    365.229 ns |     6.4818 ns |     6.0631 ns |    364.304 ns | 0.0072 |     - |     - |     192 B |
|           ToStringTest |  1,449.864 ns |    28.9216 ns |    39.5883 ns |  1,441.779 ns | 0.0343 |     - |     - |     944 B |
|                  Parse | 50,081.205 ns |   664.8394 ns |   555.1710 ns | 50,229.376 ns | 1.2207 |     - |     - |   33344 B |
|          TryParseValid | 51,390.632 ns | 1,024.8171 ns | 1,006.5075 ns | 51,289.102 ns | 1.2207 |     - |     - |   33320 B |
|        TryParseInvalid | 49,823.092 ns |   986.5908 ns | 2,015.3436 ns | 49,916.754 ns | 1.2207 |     - |     - |   32928 B |
|           QuantityFrom |  3,193.814 ns |    87.7112 ns |   254.4661 ns |  3,100.000 ns |      - |     - |     - |      56 B |
|           IQuantity_As |     17.749 ns |     0.3883 ns |     1.1204 ns |     17.647 ns | 0.0009 |     - |     - |      24 B |
|        IQuantity_As_SI |    305.276 ns |     5.9865 ns |     9.6671 ns |    303.440 ns | 0.0072 |     - |     - |     192 B |
|       IQuantity_ToUnit |     24.833 ns |     0.5836 ns |     0.6245 ns |     24.837 ns | 0.0021 |     - |     - |      56 B |
| IQuantity_ToStringTest |  1,188.200 ns |    23.4618 ns |    36.5272 ns |  1,193.014 ns | 0.0343 |     - |     - |     944 B |
|             Min_Double |  9,883.386 ns |   195.9572 ns |   343.2031 ns |  9,848.531 ns |      - |     - |     - |         - |
