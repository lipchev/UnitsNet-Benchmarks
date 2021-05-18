// Licensed under MIT No Attribution, see LICENSE file at the root.
// Copyright 2013 Andreas Gullberg Larsen (andreas.larsen84@gmail.com). Maintained at https://github.com/angularsen/UnitsNet.

using System;
using BenchmarkDotNet.Attributes;

namespace UnitsNet.Benchmark.Baseline
{
    public partial class StableBaselineBenchmarks
    {
        [Benchmark(Baseline = true, OperationsPerInvoke = NbIterations * 4)]
        [BenchmarkCategory(BenchmarkCategories.Comparison)]
        public void Equals() // Faster: 1.02, 1, 1.01
        {
            const double zero = 0.0;
            for (var i = 0; i < NbIterations; i++)
            {
                _consumer.Consume(DoubleValue.Equals(DoubleValue));
                _consumer.Consume(DoubleValue.Equals(zero));
                _consumer.Consume(zero.Equals(zero));
                _consumer.Consume(zero.Equals(DoubleValue));
            }
        }
        
        [Benchmark(OperationsPerInvoke = NbIterations * 4)]
        [BenchmarkCategory(BenchmarkCategories.Comparison)]
        public void Decimal_Equals() // Faster: 1.01, 1.02, 1.01
        {
            const decimal zero = 0.0m;
            for (var i = 0; i < NbIterations; i++)
            {
                _consumer.Consume(DecimalValue.Equals(DecimalValue));
                _consumer.Consume(DecimalValue.Equals(zero));
                _consumer.Consume(zero.Equals(zero));
                _consumer.Consume(zero.Equals(DecimalValue));
            }
        }
        
        [Benchmark(OperationsPerInvoke = NbIterations * 4)]
        [BenchmarkCategory(BenchmarkCategories.Comparison)]
        public void MinMax() // Faster 1.87 (long job -> default job )
        {
            const double zero = 0.0;
            for (var i = 0; i < NbIterations; i++)
            {
                _consumer.Consume(Math.Min(Math.Max(Math.Max(DoubleValue, zero), Math.Min(zero, DoubleValue)), DoubleValue));
            }
        }

        [Benchmark(OperationsPerInvoke = NbIterations * 4)]
        [BenchmarkCategory(BenchmarkCategories.Comparison)]
        public void Decimal_MinMax() // Slower: 1.13, 1, 1.01, Faster 1.13, Faster 1.10 (long job -> default job )
        {
            const decimal zero = 0.0m;
            for (var i = 0; i < NbIterations; i++)
            {
                _consumer.Consume(Math.Min(Math.Max(Math.Max(DecimalValue, zero), Math.Min(zero, DecimalValue)), DecimalValue));
            }
        }
    }
}
