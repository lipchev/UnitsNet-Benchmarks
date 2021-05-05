``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-NKPVMV : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  

```
|                 Method |         Mean |        Error |       StdDev |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |-------------:|-------------:|-------------:|-------:|-------:|------:|----------:|
|            Constructor |     11.17 ns |     0.232 ns |     0.206 ns |      - |      - |     - |         - |
|         Constructor_SI |    380.12 ns |     6.449 ns |     6.032 ns | 0.0100 |      - |     - |     192 B |
|             FromMethod |     29.12 ns |     0.480 ns |     0.401 ns |      - |      - |     - |         - |
|             ToProperty |     10.71 ns |     0.253 ns |     0.260 ns |      - |      - |     - |         - |
|                     As |     10.01 ns |     0.195 ns |     0.172 ns |      - |      - |     - |         - |
|                  As_SI |    381.14 ns |     6.614 ns |     5.863 ns | 0.0100 |      - |     - |     192 B |
|                 ToUnit |     19.41 ns |     0.430 ns |     0.422 ns |      - |      - |     - |         - |
|              ToUnit_SI |    386.34 ns |     4.926 ns |     4.608 ns | 0.0100 |      - |     - |     192 B |
|           ToStringTest |  1,546.41 ns |    20.532 ns |    18.201 ns | 0.0496 |      - |     - |     944 B |
|                  Parse | 51,559.64 ns | 1,012.484 ns | 1,351.638 ns | 1.7700 | 0.0610 |     - |   33344 B |
|          TryParseValid | 51,735.15 ns |   463.307 ns |   433.377 ns | 1.7700 | 0.0610 |     - |   33320 B |
|        TryParseInvalid | 55,365.13 ns | 1,020.113 ns |   954.214 ns | 1.7090 | 0.0610 |     - |   32928 B |
|           QuantityFrom |  3,147.92 ns |    90.097 ns |   259.951 ns |      - |      - |     - |      56 B |
|           IQuantity_As |     22.40 ns |     0.469 ns |     0.502 ns | 0.0013 |      - |     - |      24 B |
|        IQuantity_As_SI |    386.96 ns |     3.792 ns |     3.547 ns | 0.0100 |      - |     - |     192 B |
|       IQuantity_ToUnit |     32.88 ns |     0.717 ns |     0.671 ns | 0.0030 |      - |     - |      56 B |
| IQuantity_ToStringTest |  1,577.41 ns |    27.985 ns |    26.178 ns | 0.0496 |      - |     - |     944 B |
