// Licensed under MIT No Attribution, see LICENSE file at the root.
// Copyright 2013 Andreas Gullberg Larsen (andreas.larsen84@gmail.com). Maintained at https://github.com/angularsen/UnitsNet.

using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Order;
using UnitsNet.Benchmark;
using UnitsNet.Units;

namespace Micro.Conversion
{
    [MemoryDiagnoser]
    [CategoriesColumn]
    [MinColumn]
    [MaxColumn]
    [MedianColumn]
    [StdErrorColumn]
    // [GroupBenchmarksBy(BenchmarkLogicalGroupRule.ByCategory)]
    [Orderer(SummaryOrderPolicy.FastestToSlowest)]
    [BenchmarkCategory(BenchmarkCategories.Micro, BenchmarkCategories.Conversion)]
    public class QuantityToValue : UnitConversionsBase
    {
        [Benchmark(Baseline = true, OperationsPerInvoke = BenchmarkConstants.NbUnits, Description = "Length<BaseUnit>.As(derivedUnit)")]
        [BenchmarkCategory(BenchmarkCategories.Struct, BenchmarkCategories.Unit, BenchmarkCategories.Value)]
        public void BaseQuantity_As()
        {
            for (var i = 0; i < BenchmarkConstants.NbUnits; i++)
            {
                var conversion = BaseUnitConversions[BaseQuantityIndex];
                Consumer.Consume(BaseQuantity.As((LengthUnit) conversion.Value));
            }
        }

        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbUnits, Description = "Length<DerivedUnit>.As(derivedUnit)")]
        [BenchmarkCategory(BenchmarkCategories.Struct, BenchmarkCategories.Unit, BenchmarkCategories.Value)]
        public void DerivedQuantity_As()
        {
            for (var i = 0; i < BenchmarkConstants.NbUnits; i++)
            {
                var conversion = DerivedUnitConversions[DerivedQuantityIndex];
                Consumer.Consume(DerivedQuantity.As((LengthUnit) conversion.Value));
            }
        }

        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbUnits, Description = "ILength<BaseUnit>.As(derivedUnit)")]
        [BenchmarkCategory(BenchmarkCategories.Interface, BenchmarkCategories.Unit, BenchmarkCategories.Value)]
        public void IBaseQuantity_As()
        {
            for (var i = 0; i < BenchmarkConstants.NbUnits; i++)
            {
                var conversion = BaseUnitConversions[BaseQuantityIndex];
                Consumer.Consume(conversion.Quantity.As(conversion.Value));
            }
        }

        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbUnits, Description = "ILength<DerivedUnit>.As(derivedUnit)")]
        [BenchmarkCategory(BenchmarkCategories.Interface, BenchmarkCategories.Unit, BenchmarkCategories.Value)]
        public void IDerivedQuantity_As()
        {
            for (var i = 0; i < BenchmarkConstants.NbUnits; i++)
            {
                var conversion = DerivedUnitConversions[DerivedQuantityIndex];
                Consumer.Consume(conversion.Quantity.As(conversion.Value));
            }
        }

        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbUnits - BenchmarkConstants.NbQuantities, Description = "IQuantity<BaseUnit>.As(derivedUnit)")]
        [BenchmarkCategory(BenchmarkCategories.Interface, BenchmarkCategories.Unit, BenchmarkCategories.Value)]
        public void IRandomBaseQuantity_As()
        {
            for (var i = 0; i < BenchmarkConstants.NbUnits - BenchmarkConstants.NbQuantities; i++)
            {
                var conversion = BaseUnitConversions[i];
                Consumer.Consume(conversion.Quantity.As(conversion.Value));
            }
        }

        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbConversions, Description = "IQuantity<DerivedUnit>.As(baseUnit)")]
        [BenchmarkCategory(BenchmarkCategories.Interface, BenchmarkCategories.Unit, BenchmarkCategories.Value)]
        public void IRandomDerivedQuantity_AsBase()
        {
            for (var i = 0; i < BenchmarkConstants.NbConversions; i++)
            {
                var conversion = DerivedUnitConversions[i];
                Consumer.Consume(conversion.Quantity.As(conversion.Quantity.QuantityInfo.BaseUnitInfo.Value));
            }
        }

        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbConversions, Description = "IQuantity<DerivedUnit>.As(derivedUnit)")]
        [BenchmarkCategory(BenchmarkCategories.Interface, BenchmarkCategories.Unit, BenchmarkCategories.Value)]
        public void IRandomDerivedQuantity_As()
        {
            for (var i = 0; i < BenchmarkConstants.NbConversions; i++)
            {
                var conversion = DerivedUnitConversions[i];
                Consumer.Consume(conversion.Quantity.As(conversion.Value));
            }
        }

        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbUnits, Description = "Length<BaseUnit>.As(untSystem)")]
        [BenchmarkCategory(BenchmarkCategories.Struct, BenchmarkCategories.UnitSystem, BenchmarkCategories.Value)]
        public void BaseQuantity_AsUnitSystem()
        {
            for (var i = 0; i < BenchmarkConstants.NbUnits; i++)
            {
                Consumer.Consume(BaseQuantity.As(UnitSystems[0]));
            }
        }

        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbUnits, Description = "Length<DerivedUnit>.As(untSystem)")]
        [BenchmarkCategory(BenchmarkCategories.Struct, BenchmarkCategories.UnitSystem, BenchmarkCategories.Value)]
        public void DerivedQuantity_AsUnitSystem()
        {
            for (var i = 0; i < BenchmarkConstants.NbUnits; i++)
            {
                Consumer.Consume(DerivedQuantity.As(UnitSystems[0]));
            }
        }

        #region UnitSystem is still not supported by all quantities

        // [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbUnits - BenchmarkConstants.NbQuantities, Description = "IQuantity<BaseUnit>.As(unitSystem)")]
        // [BenchmarkCategory(BenchmarkCategories.Interface, BenchmarkCategories.UnitSystem, BenchmarkCategories.Value)]
        public void IRandomBaseQuantity_AsUnitSystem()
        {
            for (var i = 0; i < BenchmarkConstants.NbUnits - BenchmarkConstants.NbQuantities; i++)
            {
                var conversion = BaseUnitConversions[i];
                Consumer.Consume(conversion.Quantity.As(UnitSystems[0]));
            }
        }

        // [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbConversions, Description = "IQuantity<DerivedUnit>.As(unitSystem)")]
        // [BenchmarkCategory(BenchmarkCategories.Interface, BenchmarkCategories.UnitSystem, BenchmarkCategories.Value)]
        public void IRandomDerivedQuantity_AsUnitSystem()
        {
            for (var i = 0; i < BenchmarkConstants.NbConversions; i++)
            {
                var conversion = DerivedUnitConversions[i];
                Consumer.Consume(conversion.Quantity.As(UnitSystems[0]));
            }
        }

        #endregion
    }
}
