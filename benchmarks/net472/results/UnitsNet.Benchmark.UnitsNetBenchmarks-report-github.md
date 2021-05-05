``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8272CL CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-FNCDAC : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationCount=3  
LaunchCount=1  WarmupCount=3  

```
|                 Method |          Mean |         Error |      StdDev |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|------------:|-------:|-------:|------:|----------:|
|            Constructor |     12.504 ns |     0.4412 ns |   0.0242 ns |      - |      - |     - |         - |
|         Constructor_SI |    494.479 ns |    64.6371 ns |   3.5430 ns | 0.0296 |      - |     - |     201 B |
|             FromMethod |     29.515 ns |     1.6122 ns |   0.0884 ns |      - |      - |     - |         - |
|             ToProperty |      8.773 ns |     0.2680 ns |   0.0147 ns |      - |      - |     - |         - |
|                     As |      8.776 ns |     0.6454 ns |   0.0354 ns |      - |      - |     - |         - |
|                  As_SI |    488.575 ns |    37.4325 ns |   2.0518 ns | 0.0296 |      - |     - |     201 B |
|                 ToUnit |     19.471 ns |     0.4239 ns |   0.0232 ns |      - |      - |     - |         - |
|              ToUnit_SI |    496.381 ns |    15.0547 ns |   0.8252 ns | 0.0296 |      - |     - |     201 B |
|           ToStringTest |  1,834.189 ns |   204.6145 ns |  11.2156 ns | 0.1926 |      - |     - |    1244 B |
|                  Parse | 51,688.281 ns | 3,466.8787 ns | 190.0313 ns | 8.4839 | 0.3052 |     - |   54376 B |
|          TryParseValid | 53,952.783 ns | 4,039.5607 ns | 221.4220 ns | 8.4839 | 0.3662 |     - |   54352 B |
|        TryParseInvalid | 57,584.009 ns | 5,202.1436 ns | 285.1470 ns | 8.4229 | 0.3052 |     - |   53895 B |
|           QuantityFrom |  2,100.000 ns | 8,360.3240 ns | 458.2576 ns |      - |      - |     - |    8192 B |
|           IQuantity_As |     18.445 ns |     1.0290 ns |   0.0564 ns | 0.0038 |      - |     - |      24 B |
|        IQuantity_As_SI |    485.414 ns |    36.3274 ns |   1.9912 ns | 0.0296 |      - |     - |     201 B |
|       IQuantity_ToUnit |     29.414 ns |     6.6205 ns |   0.3629 ns | 0.0088 |      - |     - |      56 B |
| IQuantity_ToStringTest |  1,811.484 ns |   837.5692 ns |  45.9100 ns | 0.1926 |      - |     - |    1244 B |
