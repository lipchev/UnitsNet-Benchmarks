using System;
using System.Collections.Generic;
using System.Linq;

namespace UnitsNet.Benchmark
{
    public static class BenchmarkExtensions
    {
        public static IEnumerable<T> Shuffle<T>(this IEnumerable<T> collection, int seed = 42)
        {
            var random = new Random(seed);
            return collection.OrderBy(_ => random.Next());
        }
    }
}
