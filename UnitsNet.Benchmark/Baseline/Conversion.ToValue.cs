// Licensed under MIT No Attribution, see LICENSE file at the root.
// Copyright 2013 Andreas Gullberg Larsen (andreas.larsen84@gmail.com). Maintained at https://github.com/angularsen/UnitsNet.

using BenchmarkDotNet.Attributes;
using UnitsNet.Benchmark;

namespace Baseline
{
    public partial class BaselineBenchmarks
    {
        [Benchmark(Baseline = true, OperationsPerInvoke = NbIterations)]
        [BenchmarkCategory(BenchmarkCategories.Conversion, BenchmarkCategories.Value)]
        public double ToValue()
        {
            var result = DoubleValue;
        
            for (var i = 0; i < NbIterations; i++)
            {
                result += (result * DoubleValue + DoubleValue) / (result * DoubleValue - DoubleValue);
            }
        
            return result;
        }

        [Benchmark(OperationsPerInvoke = NbIterations)]
        [BenchmarkCategory(BenchmarkCategories.Conversion, BenchmarkCategories.Value)]
        public decimal Decimal_ToValue()
        {
            decimal result = DecimalValue;

            for (var i = 0; i < NbIterations; i++)
            {
                result += (result * DecimalValue + DecimalValue) / (result * DecimalValue - DecimalValue);
            }

            return result;
        }
    }
}
