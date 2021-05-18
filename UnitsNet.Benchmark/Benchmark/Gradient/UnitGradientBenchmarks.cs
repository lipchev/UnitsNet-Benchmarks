// Licensed under MIT No Attribution, see LICENSE file at the root.
// Copyright 2013 Andreas Gullberg Larsen (andreas.larsen84@gmail.com). Maintained at https://github.com/angularsen/UnitsNet.

using System;
using System.Collections.Generic;
using System.Linq;
using BenchmarkDotNet.Attributes;
using UnitsNet.Units;

namespace UnitsNet.Benchmark.Gradient
{
    /// <summary>
    ///     Can be used to compare the performance gradient for the most common methods when used with a quantity/unit that is
    ///     closer/further away in terms of the search that has to be performed by the internal
    ///     lookup (currently these are mostly linear- over relatively short lists, but that might change)
    /// </summary>
    /// <remarks>
    ///     These 'benchmarks' if not filtered result in 100+ individual jobs (per framework) that, although not particularly
    ///     slow, produce a significant amount of data, which is a little difficult to read "join"-tly.
    ///     I'm currently not aware of any way to parametrize the GenericTypeArguments (maybe something like
    ///     'GenericTypeArgumentSources' could come about)
    /// </remarks>
    /// <example>
    ///     A typical 'experiment' might target --allCategories Conversion String (which demonstrates a small difference,
    ///     depending on the number of associated abbreviations)
    /// </example>
    /// <typeparam name="TQuantity"></typeparam>
    /// <typeparam name="TUnit"></typeparam>
    // [GenericTypeArguments(typeof(Acceleration), typeof(AccelerationUnit))]
    [GenericTypeArguments(typeof(Length), typeof(LengthUnit))]
    // [GenericTypeArguments(typeof(Mass), typeof(MassUnit))]
    // [GenericTypeArguments(typeof(Ratio), typeof(RatioUnit))]
    // [GenericTypeArguments(typeof(Volume), typeof(VolumeUnit))]
    // [Orderer(SummaryOrderPolicy.Declared, MethodOrderPolicy.Declared)]
    [MinColumn]
    [MaxColumn]
    [MedianColumn]
    [StdErrorColumn]
    [BenchmarkCategory(BenchmarkCategories.Gradient, BenchmarkCategories.Unit)]
    public class UnitGradientBenchmarks<TQuantity, TUnit>
        where TQuantity : struct, IQuantity<TUnit>
        where TUnit : Enum
    {
        private const double DoubleValue = 1234.56;
        private static TQuantity _quantity = (TQuantity) Quantity.From(DoubleValue, default(TQuantity).Unit);

        public static IEnumerable<TUnit> DerivedUnits => Quantity.Infos.SelectMany(x => x.UnitInfos.Select(s => s.Value)).OfType<TUnit>()
            .Where(u => !u.Equals(default(TQuantity).Unit));

        [GlobalSetup]
        public void GlobalSetup()
        {
            Console.Out.WriteLine("Testing with {0} ({1} units)", typeof(TQuantity),
                DerivedUnits.Count()); // fetching the units once removes the static construction overhead
        }

        public static IEnumerable<object[]> Quantities()
        {
            return DerivedUnits.Append(default(TQuantity).Unit).Select(x => new object[] {x, (TQuantity) Quantity.From(DoubleValue, x)});
        }

        [Benchmark]
        [ArgumentsSource(nameof(DerivedUnits))]
        [BenchmarkCategory(BenchmarkCategories.Conversion, BenchmarkCategories.Value)]
        public double As(TUnit unit)
        {
            return _quantity.As(unit);
        }

        [Benchmark]
        [ArgumentsSource(nameof(DerivedUnits))]
        [BenchmarkCategory(BenchmarkCategories.Conversion, BenchmarkCategories.Quantity)]
        public IQuantity<TUnit> ToUnit(TUnit unit)
        {
            return _quantity.ToUnit(unit);
        }

        [Benchmark]
        [ArgumentsSource(nameof(Quantities))]
        [BenchmarkCategory(BenchmarkCategories.Conversion, BenchmarkCategories.String)]
        public string ToString(TUnit unit, TQuantity value) // the first param adds a 'display' column
        {
            return value.ToString();
        }
    }
}
