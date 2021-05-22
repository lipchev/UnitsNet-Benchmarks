// Licensed under MIT No Attribution, see LICENSE file at the root.
// Copyright 2013 Andreas Gullberg Larsen (andreas.larsen84@gmail.com). Maintained at https://github.com/angularsen/UnitsNet.

using BenchmarkDotNet.Attributes;
using UnitsNet.Benchmark;

namespace Baseline
{
    public partial class BaselineBenchmarks
    {
        [Benchmark(Baseline = true, Description = "ToString")]
        [BenchmarkCategory(BenchmarkCategories.Conversion, BenchmarkCategories.String)]
        public string ToString_()
        {
            return DoubleValue.ToString("g");
        }

        [Benchmark]
        [BenchmarkCategory(BenchmarkCategories.Conversion, BenchmarkCategories.String)]
        public string Decimal_ToString()
        {
            return DecimalValue.ToString("g");
        }
    }
}
