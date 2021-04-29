``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8171M CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-OYNRBM : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationTime=125.0000 ms  

```
|                 Method |          Mean |         Error |         StdDev |        Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|---------------:|--------------:|-------:|------:|------:|----------:|
|            Constructor |     13.885 ns |     0.3165 ns |      0.7209 ns |     13.823 ns |      - |     - |     - |         - |
|         Constructor_SI |    562.613 ns |    10.7182 ns |     17.3078 ns |    565.409 ns | 0.0205 |     - |     - |     201 B |
|             FromMethod |     32.284 ns |     0.6904 ns |      1.8429 ns |     32.155 ns |      - |     - |     - |         - |
|             ToProperty |      9.671 ns |     0.2399 ns |      0.3941 ns |      9.722 ns |      - |     - |     - |         - |
|                     As |      9.703 ns |     0.2389 ns |      0.3789 ns |      9.677 ns |      - |     - |     - |         - |
|                  As_SI |    563.740 ns |    11.1023 ns |     16.2737 ns |    562.903 ns | 0.0185 |     - |     - |     201 B |
|                 ToUnit |     21.000 ns |     0.4626 ns |      1.1605 ns |     20.835 ns |      - |     - |     - |         - |
|              ToUnit_SI |    561.793 ns |    11.2092 ns |     28.5309 ns |    560.098 ns | 0.0213 |     - |     - |     201 B |
|           ToStringTest | 16,146.316 ns |   366.5945 ns |  1,051.8282 ns | 16,200.000 ns |      - |     - |     - |    8192 B |
|                  Parse | 94,052.525 ns | 3,794.3686 ns | 11,128.2261 ns | 98,600.000 ns |      - |     - |     - |   57344 B |
|          TryParseValid | 92,148.485 ns | 3,610.2450 ns | 10,588.2238 ns | 88,600.000 ns |      - |     - |     - |   57344 B |
|        TryParseInvalid | 96,197.980 ns | 3,389.9157 ns |  9,942.0359 ns | 98,400.000 ns |      - |     - |     - |   57344 B |
|           QuantityFrom |  1,767.677 ns |    64.0358 ns |    187.8060 ns |  1,800.000 ns |      - |     - |     - |    8192 B |
|           IQuantity_As |     21.092 ns |     0.4649 ns |      0.9906 ns |     21.124 ns | 0.0033 |     - |     - |      24 B |
|        IQuantity_As_SI |    559.675 ns |    11.1309 ns |     22.4850 ns |    561.111 ns | 0.0210 |     - |     - |     201 B |
|       IQuantity_ToUnit |     32.849 ns |     0.7538 ns |      1.4880 ns |     32.803 ns | 0.0081 |     - |     - |      56 B |
| IQuantity_ToStringTest | 16,455.670 ns |   454.8633 ns |  1,319.6408 ns | 16,500.000 ns |      - |     - |     - |    8192 B |
