``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon Platinum 8272CL CPU 2.60GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-RRJOXA : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationTime=125.0000 ms  

```
|                 Method |          Mean |         Error |        StdDev |        Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|--------------:|-------:|------:|------:|----------:|
|            Constructor |     12.166 ns |     0.2812 ns |     0.6290 ns |     12.568 ns |      - |     - |     - |         - |
|         Constructor_SI |    500.465 ns |     9.9946 ns |    20.1896 ns |    508.956 ns | 0.0221 |     - |     - |     201 B |
|             FromMethod |     28.353 ns |     0.6050 ns |     1.4612 ns |     29.356 ns |      - |     - |     - |         - |
|             ToProperty |      8.555 ns |     0.2084 ns |     0.2046 ns |      8.623 ns |      - |     - |     - |         - |
|                     As |      8.598 ns |     0.2073 ns |     0.4419 ns |      8.855 ns |      - |     - |     - |         - |
|                  As_SI |    494.355 ns |     9.7164 ns |    18.4864 ns |    503.726 ns | 0.0203 |     - |     - |     201 B |
|                 ToUnit |     18.422 ns |     0.4065 ns |     1.0122 ns |     19.014 ns |      - |     - |     - |         - |
|              ToUnit_SI |    502.504 ns |    10.0816 ns |    20.5941 ns |    514.395 ns | 0.0206 |     - |     - |     201 B |
|           ToStringTest | 13,995.745 ns |   263.8157 ns |   514.5523 ns | 13,900.000 ns |      - |     - |     - |    8192 B |
|                  Parse | 92,763.043 ns | 1,826.9941 ns | 3,519.9974 ns | 90,900.000 ns |      - |     - |     - |   57344 B |
|          TryParseValid | 81,037.500 ns | 1,557.9214 ns | 1,530.0871 ns | 80,450.000 ns |      - |     - |     - |   57344 B |
|        TryParseInvalid | 81,909.091 ns |   988.0233 ns | 1,213.3814 ns | 81,450.000 ns |      - |     - |     - |   57344 B |
|           QuantityFrom |  1,551.087 ns |    31.3146 ns |    88.3233 ns |  1,550.000 ns |      - |     - |     - |    8192 B |
|           IQuantity_As |     19.621 ns |     0.4279 ns |     0.9658 ns |     19.835 ns | 0.0034 |     - |     - |      24 B |
|        IQuantity_As_SI |    501.375 ns |    10.0562 ns |    19.6138 ns |    506.542 ns | 0.0204 |     - |     - |     201 B |
|       IQuantity_ToUnit |     28.513 ns |     0.6549 ns |     1.5942 ns |     29.110 ns | 0.0081 |     - |     - |      56 B |
| IQuantity_ToStringTest | 15,034.568 ns |   297.8149 ns |   784.5637 ns | 15,200.000 ns |      - |     - |     - |    8192 B |
