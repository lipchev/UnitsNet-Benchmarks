// Licensed under MIT No Attribution, see LICENSE file at the root.
// Copyright 2013 Andreas Gullberg Larsen (andreas.larsen84@gmail.com). Maintained at https://github.com/angularsen/UnitsNet.

using System;
using System.Collections.Generic;
using System.Linq;
using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Engines;
using BenchmarkDotNet.Order;
using UnitsNet.Units;

namespace UnitsNet.Benchmark.Micro.Conversion
{
    public abstract class UnitConversionsBase
    {
        private const double DoubleValue = BenchmarkConstants.DoubleValue;

        protected readonly Consumer Consumer = new Consumer();
        protected Length BaseQuantity, DerivedQuantity;
        protected int BaseQuantityIndex, DerivedQuantityIndex;
        protected (IQuantity Quantity, Enum Value)[] BaseUnitConversions; // size = NbUnits - NbQuantities (excluding base -> base)
        protected (IQuantity Quantity, Enum Value)[] DerivedUnitConversions; // size = NbConversions (each x -> y with x != y != base)
        
        protected UnitSystem[] UnitSystems;

        [GlobalSetup]
        public void InitConversions()
        {
            UnitSystems = new[] {UnitSystem.SI};

            BaseUnitConversions = FromBaseToDerived().Shuffle().ToArray();

            if (BaseUnitConversions.Length != BenchmarkConstants.NbUnits - BenchmarkConstants.NbQuantities)
            {
                throw new ArgumentOutOfRangeException(nameof(BaseUnitConversions), BaseUnitConversions.Length,
                    $"Expected : {BenchmarkConstants.NbUnits - BenchmarkConstants.NbQuantities}");
            }

            BaseQuantityIndex = Array.FindIndex(BaseUnitConversions, x => x.Value.Equals(LengthUnit.Millimeter));
            BaseQuantity = (Length) BaseUnitConversions[BaseQuantityIndex].Quantity; //  Meter -> Millimeter 

            DerivedUnitConversions = FromDerivedToDerived().Shuffle().ToArray();

            if (DerivedUnitConversions.Length != BenchmarkConstants.NbConversions)
            {
                throw new ArgumentOutOfRangeException(nameof(DerivedUnitConversions), DerivedUnitConversions.Length,
                    $"Expected : {BenchmarkConstants.NbConversions}");
            }

            DerivedQuantityIndex = Array.FindIndex(DerivedUnitConversions, x => x.Quantity.Unit.Equals(LengthUnit.Kilometer) && x.Value.Equals(LengthUnit.Millimeter));
            DerivedQuantity = (Length) DerivedUnitConversions[DerivedQuantityIndex].Quantity;  //  Kilometer -> Millimeter 
            
            Console.Out.WriteLine("Base conversion = {0} -> {1}", BaseQuantity.Unit, BaseUnitConversions[BaseQuantityIndex].Value);
            Console.Out.WriteLine("Derived conversion = {0} -> {1}", DerivedQuantity.Unit, DerivedUnitConversions[DerivedQuantityIndex].Value);
        }

        public static IEnumerable<(IQuantity quantity, Enum Value)> FromDerivedToDerived()
        {
            return (from quantityInfo in Quantity.Infos
                from derivedUnit in quantityInfo.UnitInfos.Where(x => x != quantityInfo.BaseUnitInfo)
                let quantity = Quantity.From(GetValueForUnit(derivedUnit.Value), derivedUnit.Value)
                from otherDerivedUnit in quantityInfo.UnitInfos.Where(x => x != quantityInfo.BaseUnitInfo && x != derivedUnit)
                select (quantity, otherDerivedUnit.Value));
        }

        public static IEnumerable<(IQuantity quantity, Enum Value)> FromBaseToDerived()
        {
            return (from quantityInfo in Quantity.Infos
                let quantity = Quantity.From(DoubleValue, quantityInfo.BaseUnitInfo.Value)
                from unitInfo in quantityInfo.UnitInfos.Where(x => x != quantityInfo.BaseUnitInfo)
                select (quantity, unitInfo.Value));
        }

        private static double GetValueForUnit(Enum unit)
        {
            if (unit is AngleUnit.Tilt)
            {
                return 0.98765;
            }

            if (!(unit is  PowerUnit))
            {
                return DoubleValue;
            }

            switch (unit)
            {
                case PowerUnit.Femtowatt:
                    return DoubleValue * 1E5;
                case PowerUnit.Petawatt:
                    return DoubleValue / 1E5;
                default:
                    return DoubleValue / 1E3;
            }
        }

    }
}
