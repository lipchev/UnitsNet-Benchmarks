// Licensed under MIT No Attribution, see LICENSE file at the root.
// Copyright 2013 Andreas Gullberg Larsen (andreas.larsen84@gmail.com). Maintained at https://github.com/angularsen/UnitsNet.

using System.Collections.Generic;
using BenchmarkDotNet.Attributes;
using UnitsNet.Benchmark;

namespace Baseline
{
    public partial class BaselineBenchmarks
    {
        [Benchmark(Baseline = true)]
        [ArgumentsSource(nameof(GetStrings))]
        [BenchmarkCategory(BenchmarkCategories.Construction)]
        public double Parse(string textValue)
        {
            return double.Parse(textValue);
        }

        [Benchmark]
        [ArgumentsSource(nameof(GetStrings))]
        [BenchmarkCategory(BenchmarkCategories.Construction)]
        public decimal Decimal_Parse(string textValue)
        {
            return decimal.Parse(textValue);
        }

        public static IEnumerable<string> GetStrings()
        {
            yield return DecimalValue.ToString("g");
        }
    }
}
