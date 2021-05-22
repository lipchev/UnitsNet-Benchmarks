using BenchmarkDotNet.Attributes;
using UnitsNet;
using UnitsNet.Benchmark;

namespace Micro.Init
{
    [MemoryDiagnoser]
    [MinColumn]
    [MaxColumn]
    [MedianColumn]
    [StdErrorColumn]
    [BenchmarkCategory(BenchmarkCategories.Init)]
    public class InitializationBenchmarks
    {
        // [Benchmark]
        // [BenchmarkCategory(BenchmarkCategories.Init)]
        // public int Init_Quantities()
        // {
        //     return Quantity.Names.Length; // how do you benchmark a static constructor?
        // }
        //
        // [Benchmark]
        // [BenchmarkCategory(BenchmarkCategories.Init)]
        // public int Init_QuantityInfos()
        // {
        //     return Quantity.Infos.Length; // static lazy initialization?
        // }
        
        [Benchmark]
        public UnitAbbreviationsCache InitUnitAbbreviationsCache()
        {
            return new UnitAbbreviationsCache();
        }

        [Benchmark]
        public UnitConverter InitUnitConverter() 
        {
            var converter = new UnitConverter();
            UnitConverter.RegisterDefaultConversions(converter);
            return converter;
        }
    }
}
