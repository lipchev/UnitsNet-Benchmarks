``` ini

BenchmarkDotNet=v0.12.1, OS=Windows 10.0.17763.1879 (1809/October2018Update/Redstone5)
Intel Xeon CPU E5-2673 v3 2.40GHz, 1 CPU, 2 logical and 2 physical cores
.NET Core SDK=5.0.202
  [Host]     : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT
  Job-NKFHHU : .NET Core 5.0.5 (CoreCLR 5.0.521.16609, CoreFX 5.0.521.16609), X64 RyuJIT

Runtime=.NET Core 5.0  Toolchain=netcoreapp50  IterationCount=100  
LaunchCount=3  WarmupCount=15  

```
|                 Method |          Mean |       Error |        StdDev |        Median |  Gen 0 |  Gen 1 | Gen 2 | Allocated |
|----------------------- |--------------:|------------:|--------------:|--------------:|-------:|-------:|------:|----------:|
|            Constructor |     10.823 ns |   0.0786 ns |     0.4098 ns |     10.799 ns |      - |      - |     - |         - |
|         Constructor_SI |    338.310 ns |   2.9911 ns |    15.5359 ns |    337.621 ns | 0.0119 |      - |     - |     192 B |
|             FromMethod |     28.656 ns |   0.1688 ns |     0.8798 ns |     28.522 ns |      - |      - |     - |         - |
|             ToProperty |      9.308 ns |   0.0667 ns |     0.3477 ns |      9.285 ns |      - |      - |     - |         - |
|                     As |      8.809 ns |   0.0759 ns |     0.3923 ns |      8.841 ns |      - |      - |     - |         - |
|                  As_SI |    325.996 ns |   2.7733 ns |    14.3058 ns |    321.525 ns | 0.0119 |      - |     - |     192 B |
|                 ToUnit |     17.885 ns |   0.0873 ns |     0.4494 ns |     17.818 ns |      - |      - |     - |         - |
|              ToUnit_SI |    348.735 ns |   3.1473 ns |    16.3469 ns |    350.235 ns | 0.0119 |      - |     - |     192 B |
|           ToStringTest |  1,499.167 ns |   6.3192 ns |    32.8778 ns |  1,503.593 ns | 0.0591 |      - |     - |     944 B |
|                  Parse | 54,498.271 ns | 222.2889 ns | 1,156.5411 ns | 54,556.342 ns | 2.0752 | 0.0610 |     - |   33344 B |
|          TryParseValid | 53,416.893 ns | 232.7248 ns | 1,183.6825 ns | 53,424.551 ns | 2.0752 | 0.0610 |     - |   33320 B |
|        TryParseInvalid | 53,698.881 ns | 601.1341 ns | 3,127.6255 ns | 52,931.915 ns | 2.0752 | 0.0610 |     - |   32928 B |
|           QuantityFrom |  3,195.730 ns |  45.6032 ns |   229.8670 ns |  3,100.000 ns |      - |      - |     - |      56 B |
|           IQuantity_As |     18.395 ns |   0.2037 ns |     1.0490 ns |     18.065 ns | 0.0015 |      - |     - |      24 B |
|        IQuantity_As_SI |    351.035 ns |   3.1998 ns |    16.6767 ns |    351.375 ns | 0.0119 |      - |     - |     192 B |
|       IQuantity_ToUnit |     26.600 ns |   0.2259 ns |     1.1653 ns |     26.446 ns | 0.0035 |      - |     - |      56 B |
| IQuantity_ToStringTest |  1,459.107 ns |  13.8966 ns |    72.3022 ns |  1,486.644 ns | 0.0591 |      - |     - |     944 B |
