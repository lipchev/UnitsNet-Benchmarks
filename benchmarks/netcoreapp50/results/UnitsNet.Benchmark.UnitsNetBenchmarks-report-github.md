``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-WBWJHR : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                 Method |         Mean |        Error |       StdDev |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |-------------:|-------------:|-------------:|-------:|-------:|------:|----------:|
|            Constructor |     11.98 ns |     0.260 ns |     0.243 ns |      - |      - |     - |         - |
|         Constructor_SI |    408.77 ns |     3.256 ns |     3.046 ns | 0.0100 |      - |     - |     192 B |
|             FromMethod |     30.87 ns |     0.482 ns |     0.451 ns |      - |      - |     - |         - |
|             ToProperty |     11.18 ns |     0.172 ns |     0.144 ns |      - |      - |     - |         - |
|                     As |     10.62 ns |     0.186 ns |     0.164 ns |      - |      - |     - |         - |
|                  As_SI |    397.16 ns |     4.170 ns |     3.697 ns | 0.0100 |      - |     - |     192 B |
|                 ToUnit |     20.30 ns |     0.204 ns |     0.170 ns |      - |      - |     - |         - |
|              ToUnit_SI |    408.16 ns |     4.676 ns |     3.905 ns | 0.0100 |      - |     - |     192 B |
|           ToStringTest |  1,698.48 ns |    33.858 ns |    41.581 ns | 0.0496 |      - |     - |     944 B |
|                  Parse | 54,677.39 ns |   597.712 ns |   559.100 ns | 1.7700 | 0.0610 |     - |   33344 B |
|          TryParseValid | 55,453.02 ns |   617.780 ns |   547.646 ns | 1.7700 | 0.0610 |     - |   33320 B |
|        TryParseInvalid | 59,706.61 ns | 1,072.429 ns | 1,003.151 ns | 1.7090 | 0.0610 |     - |   32928 B |
|           QuantityFrom |  3,145.74 ns |    67.541 ns |   192.697 ns |      - |      - |     - |      56 B |
|           IQuantity_As |     23.83 ns |     0.424 ns |     0.375 ns | 0.0013 |      - |     - |      24 B |
|        IQuantity_As_SI |    403.70 ns |     7.004 ns |     6.552 ns | 0.0100 |      - |     - |     192 B |
|       IQuantity_ToUnit |     35.46 ns |     0.697 ns |     0.618 ns | 0.0030 |      - |     - |      56 B |
| IQuantity_ToStringTest |  1,663.08 ns |    13.946 ns |    13.045 ns | 0.0496 |      - |     - |     944 B |
