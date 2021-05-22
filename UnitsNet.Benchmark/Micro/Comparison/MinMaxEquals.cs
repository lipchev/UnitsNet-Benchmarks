// Licensed under MIT No Attribution, see LICENSE file at the root.
// Copyright 2013 Andreas Gullberg Larsen (andreas.larsen84@gmail.com). Maintained at https://github.com/angularsen/UnitsNet.

using System.Collections.Generic;
using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Engines;
using BenchmarkDotNet.Order;
using UnitsNet;
using UnitsNet.Benchmark;
using UnitsNet.Units;

namespace Micro.Comparison
{
    [MemoryDiagnoser]
    [CategoriesColumn]
    [MinColumn]
    [MaxColumn]
    [MedianColumn]
    [StdErrorColumn]
    [BenchmarkCategory(BenchmarkCategories.Micro, BenchmarkCategories.Comparison, BenchmarkCategories.Quantity)]
    [Orderer(SummaryOrderPolicy.FastestToSlowest)]
    public class MinMaxEquals
    {
        private readonly Consumer _consumer = new Consumer();

        public static IEnumerable<object[]> UnitComparisons()
        {
            var baseQuantity = new Length(BenchmarkConstants.DoubleValue, Length.BaseUnit);
            var derivedQuantity = new Length(BenchmarkConstants.DoubleValue, LengthUnit.Centimeter);

            yield return new object[] {baseQuantity, baseQuantity};
            yield return new object[] {derivedQuantity, derivedQuantity};
            yield return new object[] {baseQuantity, Length.Zero};
            yield return new object[] {derivedQuantity, Length.Zero};
            yield return new object[] {derivedQuantity, Length.Zero.ToUnit(LengthUnit.Kilometer)};
        }

        [Benchmark(OperationsPerInvoke = 2)]
        [BenchmarkCategory(BenchmarkCategories.Struct)]
        [ArgumentsSource(nameof(UnitComparisons))]
        public void Equals(Length x, Length y)
        {
            var comparer = EqualityComparer<Length>.Default;
            _consumer.Consume(comparer.Equals(x, y));
            _consumer.Consume(comparer.Equals(y, x));
        }

        [Benchmark(OperationsPerInvoke = 2)]
        [BenchmarkCategory(BenchmarkCategories.Interface)]
        [ArgumentsSource(nameof(UnitComparisons))]
        public void IQuantity_Equals(IQuantity x, IQuantity y)
        {
            var comparer = EqualityComparer<IQuantity>.Default;
            _consumer.Consume(comparer.Equals(x, y));
            _consumer.Consume(comparer.Equals(y, x));
        }

        [Benchmark(OperationsPerInvoke = 2)]
        [BenchmarkCategory(BenchmarkCategories.Struct)]
        [ArgumentsSource(nameof(UnitComparisons))]
        public void Equals_Absolute(Length x, Length y)
        {
            _consumer.Consume(x.Equals(y, 0.01, ComparisonType.Absolute));
            _consumer.Consume(y.Equals(x, 0.01, ComparisonType.Absolute));
        }

        [Benchmark(OperationsPerInvoke = 2)]
        [BenchmarkCategory(BenchmarkCategories.Struct)]
        [ArgumentsSource(nameof(UnitComparisons))]
        public void Equals_Relative(Length x, Length y)
        {
            _consumer.Consume(x.Equals(y, 0.01, ComparisonType.Relative));
            _consumer.Consume(y.Equals(x, 0.01, ComparisonType.Relative));
        }

        [Benchmark(OperationsPerInvoke = 4)]
        [BenchmarkCategory(BenchmarkCategories.Struct)]
        [ArgumentsSource(nameof(UnitComparisons))]
        public Length MinMax(Length x, Length y)
        {
            return UnitMath.Min(UnitMath.Max(UnitMath.Max(x, y), UnitMath.Min(y, x)), x);
        }
    }
}
