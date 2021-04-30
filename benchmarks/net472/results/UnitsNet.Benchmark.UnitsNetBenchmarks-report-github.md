``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-LUMAFO : .NET Framework 4.8 (4.8.4341.0), X64 RyuJIT

Runtime=.NET 4.7.2  Toolchain=net472  IterationTime=125.0000 ms  

```
|                 Method |          Mean |         Error |        StdDev |        Median |  Gen 0 | Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|--------------:|--------------:|--------------:|-------:|------:|------:|----------:|
|            Constructor |     13.058 ns |     0.2118 ns |     0.2354 ns |     13.017 ns |      - |     - |     - |         - |
|         Constructor_SI |    509.130 ns |     9.9213 ns |    10.1884 ns |    506.664 ns | 0.0244 |     - |     - |     201 B |
|             FromMethod |     32.180 ns |     0.6722 ns |     1.1231 ns |     31.966 ns |      - |     - |     - |         - |
|             ToProperty |      7.732 ns |     0.1951 ns |     0.1825 ns |      7.700 ns |      - |     - |     - |         - |
|                     As |      7.942 ns |     0.1679 ns |     0.1402 ns |      7.904 ns |      - |     - |     - |         - |
|                  As_SI |    500.022 ns |     9.6520 ns |     9.4796 ns |    497.068 ns | 0.0241 |     - |     - |     201 B |
|                 ToUnit |     19.936 ns |     0.3357 ns |     0.2976 ns |     19.896 ns |      - |     - |     - |         - |
|              ToUnit_SI |    512.896 ns |     9.1831 ns |     7.6683 ns |    510.931 ns | 0.0247 |     - |     - |     201 B |
|           ToStringTest | 15,339.706 ns |   303.1362 ns |   726.2950 ns | 15,050.000 ns |      - |     - |     - |    8192 B |
|                  Parse | 89,870.833 ns | 1,962.4691 ns | 5,662.1721 ns | 86,300.000 ns |      - |     - |     - |   57344 B |
|          TryParseValid | 90,490.217 ns | 2,388.5480 ns | 6,736.9419 ns | 87,600.000 ns |      - |     - |     - |   57344 B |
|        TryParseInvalid | 88,175.000 ns | 1,692.5676 ns | 1,662.3277 ns | 88,000.000 ns |      - |     - |     - |   57344 B |
|           QuantityFrom |  2,130.508 ns |    42.1126 ns |    93.3186 ns |  2,100.000 ns |      - |     - |     - |    8192 B |
|           IQuantity_As |     18.926 ns |     0.3365 ns |     0.3147 ns |     18.812 ns | 0.0035 |     - |     - |      24 B |
|        IQuantity_As_SI |    509.552 ns |    10.1691 ns |    11.3029 ns |    505.852 ns | 0.0242 |     - |     - |     201 B |
|       IQuantity_ToUnit |     28.305 ns |     0.6313 ns |     0.5596 ns |     28.090 ns | 0.0084 |     - |     - |      56 B |
| IQuantity_ToStringTest | 15,235.938 ns |   304.4531 ns |   705.6163 ns | 15,000.000 ns |      - |     - |     - |    8192 B |
