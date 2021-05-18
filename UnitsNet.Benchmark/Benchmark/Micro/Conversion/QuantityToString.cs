// Licensed under MIT No Attribution, see LICENSE file at the root.
// Copyright 2013 Andreas Gullberg Larsen (andreas.larsen84@gmail.com). Maintained at https://github.com/angularsen/UnitsNet.

using System;
using System.Collections.Generic;
using System.Globalization;
using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Order;

namespace UnitsNet.Benchmark.Micro.Conversion
{
    [MemoryDiagnoser]
    [CategoriesColumn]
    [MinColumn]
    [MaxColumn]
    [MedianColumn]
    [StdErrorColumn]
    [BenchmarkCategory(BenchmarkCategories.Micro, BenchmarkCategories.Conversion, BenchmarkCategories.String)]
    [Orderer(SummaryOrderPolicy.FastestToSlowest)]
    public class QuantityToString
    {
        [GlobalSetup]
        public void GlobalInit()
        {
            // removes the static initialization overhead
            Console.Out.WriteLine("ToString benchmarks for {0} with {1} units and {2} abbreviations",
                nameof(Length), Length.Info.UnitInfos.Length,
                UnitAbbreviationsCache.Default.GetAllUnitAbbreviationsForQuantity(typeof(Length)));
        }

        [Benchmark(Description = "ToString")]
        [ArgumentsSource(nameof(StringFormatValues))]
        [BenchmarkCategory(BenchmarkCategories.Struct)]
        public string ToString_(Length quantity, string format, IFormatProvider culture)
        {
            return quantity.ToString(format, culture);
        }

        [Benchmark]
        [ArgumentsSource(nameof(StringFormatValues))]
        [BenchmarkCategory(BenchmarkCategories.Interface)]
        public string IQuantity_ToString(IQuantity quantity, string format, IFormatProvider culture)
        {
            return quantity.ToString(format, culture);
        }

        public static IEnumerable<object[]> StringFormatValues()
        {
            const double value = 1234.56;
            // the second parameter is the string format
            yield return new object[] {Length.FromMeters(value), "v", CultureInfo.InvariantCulture};
            yield return new object[] {Length.FromMeters(value), "f2", CultureInfo.InvariantCulture};
            yield return new object[] {Length.FromMeters(value), "a", CultureInfo.InvariantCulture};
            yield return new object[] {Length.FromFeet(value), "a2", CultureInfo.InvariantCulture};
            yield return new object[] {Length.FromFeet(value), null, CultureInfo.InvariantCulture};
            yield return new object[] {Length.FromFeet(value), null, CultureInfo.GetCultureInfo("ru-RU")};
            yield return new object[] {Length.FromMeters(value), null, CultureInfo.InvariantCulture};
            yield return new object[] {Length.FromMeters(1 / value), null, CultureInfo.InvariantCulture};
            yield return new object[] {Length.FromMeters(1 / value), "s4", CultureInfo.InvariantCulture};
        }
    }
}
