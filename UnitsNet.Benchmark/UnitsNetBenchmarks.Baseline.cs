// Licensed under MIT No Attribution, see LICENSE file at the root.
// Copyright 2013 Andreas Gullberg Larsen (andreas.larsen84@gmail.com). Maintained at https://github.com/angularsen/UnitsNet.

using System;
using BenchmarkDotNet.Attributes;

namespace UnitsNet.Benchmark
{
    public partial class UnitsNetBenchmarks
    {
        // double has a machine epsilon of approx: 2.22e-16. However, due to floating-point precision
        // errors, this is too accurate when aggregating values of a set of iterations. Using the
        // single-precision machine epsilon as our epsilon should be 'good enough' for the purposes
        // of the perf testing as it ensures we get the expected value and that it is at least as precise
        // as we would have computed with the single-precision version of the function (without aggregation).
        public const double DoubleEpsilon = 1.19e-07;

        // 5000 iterations is enough to cover the full domain of inputs for certain functions (such
        // as Cos, which has a domain of 0 to PI) at reasonable intervals (in the case of Cos, the
        // interval is PI / 5000 which is 0.0006283185307180). It should also give reasonable coverage
        // for functions which have a larger domain (such as Atan, which covers the full set of real numbers).
        public const int Iterations = 5000;

        // Tests Math.Min(double) over 5000 iterations for the domain -1, +1

        private const double minDelta = 0.0004;
        private const double minExpectedResult = 1.0;

        [Benchmark]
        [BenchmarkCategory("Comparable, Baseline")]
        public void Min_Double() => MinTest();

        public static void MinTest()
        {
            double result = 0.0, val1 = 1.0, val2 = 1.0 + minDelta;

            for (int iteration = 0; iteration < Iterations; iteration++)
            {
                val2 -= minDelta;
                result += Math.Min(val1, val2);
            }

            double diff = Math.Abs(minExpectedResult - result);

            if (diff > DoubleEpsilon)
            {
                throw new Exception($"Expected Result {minExpectedResult,20:g17}; Actual Result {result,20:g17}");
            }
        }
    }
}
