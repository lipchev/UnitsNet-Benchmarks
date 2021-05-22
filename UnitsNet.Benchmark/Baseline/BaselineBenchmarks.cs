// Licensed under MIT No Attribution, see LICENSE file at the root.
// Copyright 2013 Andreas Gullberg Larsen (andreas.larsen84@gmail.com). Maintained at https://github.com/angularsen/UnitsNet.

using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Configs;
using BenchmarkDotNet.Engines;
using UnitsNet.Benchmark;

namespace Baseline
{
    [MinColumn]
    [MaxColumn]
    [MedianColumn]
    [StdErrorColumn]
    [GroupBenchmarksBy(BenchmarkLogicalGroupRule.ByCategory)]
    [BenchmarkCategory(BenchmarkCategories.Baseline)]
    // [Orderer(SummaryOrderPolicy.FastestToSlowest, MethodOrderPolicy.Declared)]
    public partial class BaselineBenchmarks
    {
        private const double DoubleValue = 1234.56789; // 0.0004;
        private const decimal DecimalValue = 1234.56789m; // 0.0004m;

        public const int NbIterations = BenchmarkConstants.NbUnits; // same as 5000 or 25000

        private readonly Consumer _consumer = new Consumer();
    }
}
