``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v4 2.30GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-WFPLFK : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                 Method |          Mean |         Error |        StdDev |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|-------:|------:|------:|----------:|
|            Constructor |     11.312 ns |     0.1117 ns |     0.1045 ns |      - |     - |     - |         - |
|         Constructor_SI |    383.259 ns |     7.4487 ns |     8.5779 ns | 0.0072 |     - |     - |     192 B |
|             FromMethod |     31.298 ns |     0.4684 ns |     0.4381 ns |      - |     - |     - |         - |
|             ToProperty |      8.923 ns |     0.2283 ns |     0.3275 ns |      - |     - |     - |         - |
|                     As |      9.660 ns |     0.2379 ns |     0.4039 ns |      - |     - |     - |         - |
|                  As_SI |    371.948 ns |     7.4599 ns |    12.6675 ns | 0.0072 |     - |     - |     192 B |
|                 ToUnit |     18.742 ns |     0.4133 ns |     0.7129 ns |      - |     - |     - |         - |
|              ToUnit_SI |    391.884 ns |     7.5837 ns |    10.6313 ns | 0.0072 |     - |     - |     192 B |
|           ToStringTest |  1,522.627 ns |    29.9609 ns |    47.5212 ns | 0.0343 |     - |     - |     944 B |
|                  Parse | 55,608.898 ns | 1,068.4209 ns | 1,049.3322 ns | 1.2207 |     - |     - |   33344 B |
|          TryParseValid | 55,068.387 ns | 1,089.2817 ns | 1,663.4483 ns | 1.2207 |     - |     - |   33320 B |
|        TryParseInvalid | 58,181.309 ns | 1,027.9211 ns |   961.5180 ns | 1.2207 |     - |     - |   32928 B |
|           QuantityFrom |  3,237.234 ns |    78.6242 ns |   224.3193 ns |      - |     - |     - |      56 B |
|           IQuantity_As |     21.959 ns |     0.4837 ns |     0.9881 ns | 0.0009 |     - |     - |      24 B |
|        IQuantity_As_SI |    381.395 ns |     7.4693 ns |     8.3021 ns | 0.0072 |     - |     - |     192 B |
|       IQuantity_ToUnit |     37.126 ns |     0.7776 ns |     0.7273 ns | 0.0021 |     - |     - |      56 B |
| IQuantity_ToStringTest |  1,564.117 ns |    24.5882 ns |    19.1968 ns | 0.0343 |     - |     - |     944 B |
|             Min_Double | 11,751.455 ns |   213.1579 ns |   261.7771 ns |      - |     - |     - |         - |
