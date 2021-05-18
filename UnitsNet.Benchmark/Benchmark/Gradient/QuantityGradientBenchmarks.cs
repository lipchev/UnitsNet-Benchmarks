// Licensed under MIT No Attribution, see LICENSE file at the root.
// Copyright 2013 Andreas Gullberg Larsen (andreas.larsen84@gmail.com). Maintained at https://github.com/angularsen/UnitsNet.

using System;
using System.Collections.Generic;
using System.Linq;
using BenchmarkDotNet.Attributes;

namespace UnitsNet.Benchmark.Gradient
{
    /// <summary>
    ///     Can be used to compare the performance gradient for the most common methods when used with a quantity/unit that is
    ///     closer/further away in terms of the search that has to be performed by the internal
    ///     lookup (currently these are mostly linear- over relatively short lists, but that might change)
    /// </summary>
    /// <remarks>
    ///     This benchmark result in 100+ individual jobs (per framework) taking about 45 minutes to run
    ///     (or ~15 minutes with --job Short)
    /// </remarks>
    /// <example>
    ///     A typical 'experiment' might target --allCategories Construction Unit (which shows ~3x difference between
    ///     Quantity.From(..) with <see cref="Acceleration" /> and <see cref="WarpingMomentOfInertia" />)
    /// </example>
    [MinColumn]
    [MaxColumn]
    [MedianColumn]
    [StdErrorColumn]
    [BenchmarkCategory(BenchmarkCategories.Gradient, BenchmarkCategories.Quantity)]
    public class QuantityGradientBenchmarks
    {
        private const double DoubleValue = 1234.56;

        [GlobalSetup]
        public void GlobalSetup()
        {
            var nbUnitsTested = Units().Count();
            Console.Out.WriteLine("Testing with {0} units ({1} per quantity)", nbUnitsTested,
                nbUnitsTested / Quantity.Infos.Length); // fetching the units once removes the static construction overhead
        }

        public static IEnumerable<object[]> Units()
        {
            return Quantity.Infos.Select(x => new object[] {x.Name, x.BaseUnitInfo.Value});
        }


        [Benchmark]
        [ArgumentsSource(nameof(Units))]
        [BenchmarkCategory(BenchmarkCategories.Construction, BenchmarkCategories.Unit)]
        public IQuantity QuantityFrom(string quantity, Enum unit) // the first param adds a 'display' column
        {
            return Quantity.From(DoubleValue, unit);
        }
        
    }
}
