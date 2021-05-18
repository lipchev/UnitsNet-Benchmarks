// Licensed under MIT No Attribution, see LICENSE file at the root.
// Copyright 2013 Andreas Gullberg Larsen (andreas.larsen84@gmail.com). Maintained at https://github.com/angularsen/UnitsNet.

using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Order;
using UnitsNet.Units;

namespace UnitsNet.Benchmark.Micro.Conversion
{
    [MemoryDiagnoser]
    [CategoriesColumn]
    [MinColumn]
    [MaxColumn]
    [MedianColumn]
    [StdErrorColumn]
    // [GroupBenchmarksBy(BenchmarkLogicalGroupRule.ByCategory)]
    [Orderer(SummaryOrderPolicy.FastestToSlowest, MethodOrderPolicy.Declared)]
    [BenchmarkCategory(BenchmarkCategories.Micro, BenchmarkCategories.Conversion)]
    public class QuantityToUnit: UnitConversionsBase
    {
        [Benchmark(Baseline = true, OperationsPerInvoke = BenchmarkConstants.NbUnits, Description = "Length<BaseUnit>.ToUnit(derivedUnit)")]
        [BenchmarkCategory(BenchmarkCategories.Struct, BenchmarkCategories.Unit, BenchmarkCategories.Quantity)]
        public void BaseQuantity_ToUnit()
        {
            for (var i = 0; i < BenchmarkConstants.NbUnits; i++)
            {
                var conversion = BaseUnitConversions[BaseQuantityIndex];
                Consumer.Consume(BaseQuantity.ToUnit((LengthUnit) conversion.Value));
            }
        }

        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbUnits, Description = "Length<DerivedUnit>.ToUnit(derivedUnit)")]
        [BenchmarkCategory(BenchmarkCategories.Struct, BenchmarkCategories.Unit, BenchmarkCategories.Quantity)]
        public void DerivedQuantity_ToUnit()
        {
            for (var i = 0; i < BenchmarkConstants.NbUnits; i++)
            {
                var conversion = DerivedUnitConversions[DerivedQuantityIndex];
                Consumer.Consume(DerivedQuantity.ToUnit((LengthUnit) conversion.Value));
            }
        }

        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbUnits, Description = "ILength<BaseUnit>.ToUnit(derivedUnit)")]
        [BenchmarkCategory(BenchmarkCategories.Interface, BenchmarkCategories.Unit, BenchmarkCategories.Quantity)]
        public void IBaseQuantity_ToUnit()
        {
            for (var i = 0; i < BenchmarkConstants.NbUnits; i++)
            {
                var conversion = BaseUnitConversions[BaseQuantityIndex];
                Consumer.Consume(conversion.Quantity.ToUnit(conversion.Value));
            }
        }

        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbUnits, Description = "ILength<DerivedUnit>.ToUnit(derivedUnit)")]
        [BenchmarkCategory(BenchmarkCategories.Interface, BenchmarkCategories.Unit, BenchmarkCategories.Quantity)]
        public void IDerivedQuantity_ToUnit()
        {
            for (var i = 0; i < BenchmarkConstants.NbUnits; i++)
            {
                var conversion = DerivedUnitConversions[DerivedQuantityIndex];
                Consumer.Consume(conversion.Quantity.ToUnit(conversion.Value));
            }
        }

        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbUnits - BenchmarkConstants.NbQuantities, Description = "IQuantity<BaseUnit>.ToUnit(derivedUnit)")]
        [BenchmarkCategory(BenchmarkCategories.Interface, BenchmarkCategories.Unit, BenchmarkCategories.Quantity)]
        public void IRandomBaseQuantity_ToUnit()
        {
            for (var i = 0; i < BenchmarkConstants.NbUnits - BenchmarkConstants.NbQuantities; i++)
            {
                var conversion = BaseUnitConversions[i];
                Consumer.Consume(conversion.Quantity.ToUnit(conversion.Value));
            }
        }

        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbConversions, Description = "IQuantity<DerivedUnit>.ToUnit(baseUnit)")]
        [BenchmarkCategory(BenchmarkCategories.Interface, BenchmarkCategories.Unit, BenchmarkCategories.Quantity)]
        public void IRandomDerivedQuantity_ToBaseUnit()
        {
            for (var i = 0; i < BenchmarkConstants.NbConversions; i++)
            {
                var conversion = DerivedUnitConversions[i];
                Consumer.Consume(conversion.Quantity.ToUnit(conversion.Quantity.QuantityInfo.BaseUnitInfo.Value));
            }
        }

        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbConversions, Description = "IQuantity<DerivedUnit>.ToUnit(derivedUnit)")]
        [BenchmarkCategory(BenchmarkCategories.Interface, BenchmarkCategories.Unit, BenchmarkCategories.Quantity)]
        public void IRandomDerivedQuantity_ToUnit()
        {
            for (var i = 0; i < BenchmarkConstants.NbConversions; i++)
            {
                var conversion = DerivedUnitConversions[i];
                Consumer.Consume(conversion.Quantity.ToUnit(conversion.Value));
            }
        }

        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbUnits, Description = "Length<BaseUnit>.ToUnit(untSystem)")]
        [BenchmarkCategory(BenchmarkCategories.Struct, BenchmarkCategories.UnitSystem, BenchmarkCategories.Quantity)]
        public void BaseQuantity_ToUnitSystem()
        {
            for (var i = 0; i < BenchmarkConstants.NbUnits; i++)
            {
                Consumer.Consume(BaseQuantity.ToUnit(UnitSystems[0]));
            }
        }

        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbUnits, Description = "Length<DerivedUnit>.ToUnit(untSystem)")]
        [BenchmarkCategory(BenchmarkCategories.Struct, BenchmarkCategories.UnitSystem, BenchmarkCategories.Quantity)]
        public void DerivedQuantity_ToUnitSystem()
        {
            for (var i = 0; i < BenchmarkConstants.NbUnits; i++)
            {
                Consumer.Consume(DerivedQuantity.ToUnit(UnitSystems[0]));
            }
        }
        
        #region UnitSystem is still not supported by all quantities

        // [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbUnits - BenchmarkConstants.NbQuantities, Description = "IQuantity<BaseUnit>.ToUnit(unitSystem)")]
        // [BenchmarkCategory(BenchmarkCategories.Interface, BenchmarkCategories.UnitSystem, BenchmarkCategories.Quantity)]
        public void IRandomBaseQuantity_ToUnitSystem()
        {
            for (var i = 0; i < BenchmarkConstants.NbUnits - BenchmarkConstants.NbQuantities; i++)
            {
                var conversion = BaseUnitConversions[i];
                Consumer.Consume(conversion.Quantity.ToUnit(UnitSystems[0]));
            }
        }
        
        // [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbConversions, Description = "IQuantity<DerivedUnit>.ToUnit(unitSystem)")]
        // [BenchmarkCategory(BenchmarkCategories.Interface, BenchmarkCategories.UnitSystem, BenchmarkCategories.Quantity)]
        public void IRandomDerivedQuantity_ToUnitSystem()
        {
            for (var i = 0; i < BenchmarkConstants.NbConversions; i++)
            {
                var conversion = DerivedUnitConversions[i];
                Consumer.Consume(conversion.Quantity.ToUnit(UnitSystems[0]));
            }
        }

        #endregion
    }
}
