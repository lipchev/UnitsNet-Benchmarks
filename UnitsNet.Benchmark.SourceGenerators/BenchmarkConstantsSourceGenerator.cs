using System;
using System.Linq;
using Microsoft.CodeAnalysis;

namespace UnitsNet.Benchmark.SourceGenerators
{
    [Generator]
    public class BenchmarkConstantsSourceGenerator : ISourceGenerator
    {
        public void Initialize(GeneratorInitializationContext context)
        {
            // No initialization required
        }

        public void Execute(GeneratorExecutionContext context)
        {
            var nbQuantities = Quantity.Infos.Length;
            var nbUnits = Quantity.Infos.Sum(x => x.UnitInfos.Length);
            var nbConversions = Quantity.Infos.Sum(x => (x.UnitInfos.Length - 1) * (x.UnitInfos.Length - 2));
            var nbAbbreviations = Quantity.Infos.Sum(u =>
                UnitAbbreviationsCache.Default.GetAllUnitAbbreviationsForQuantity(u.UnitType).Count(a => Quantity.TryParse(u.ValueType, $"{0} {a}", out _)));

            var source = $@"
namespace UnitsNet.Benchmark
{{
    public static class BenchmarkConstants
    {{
        public const int NbQuantities = {nbQuantities};
        public const int NbUnits = {nbUnits};
        public const int NbConversions = {nbConversions};
        public const int NbAbbreviations = {nbAbbreviations};

        public const double DoubleValue = 1234.56;
        public const decimal DecimalValue = 1234.56m;
    }}
}}";
            context.AddSource("BenchmarkConstants.cs", source);
        }
    }
}
