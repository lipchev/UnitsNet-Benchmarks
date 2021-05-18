// Licensed under MIT No Attribution, see LICENSE file at the root.
// Copyright 2013 Andreas Gullberg Larsen (andreas.larsen84@gmail.com). Maintained at https://github.com/angularsen/UnitsNet.

using System;
using System.Linq;
using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Engines;
using BenchmarkDotNet.Order;
using UnitsNet.Units;

namespace UnitsNet.Benchmark.Micro.Construction
{
    [MemoryDiagnoser]
    [CategoriesColumn]
    [MinColumn]
    [MaxColumn]
    [MedianColumn]
    [StdErrorColumn]
    [BenchmarkCategory(BenchmarkCategories.Micro, BenchmarkCategories.Construction)]
    [Orderer(SummaryOrderPolicy.FastestToSlowest)]
    public class QuantityFromUnit
    {
        private const double DoubleValue = BenchmarkConstants.DoubleValue;
        private const decimal DecimalValue = BenchmarkConstants.DecimalValue;
        private readonly Consumer _consumer = new Consumer();

        private QuantityInfo[] _doubleInfos, _decimalInfos;
        private Enum[] _doubleUnits, _decimalUnits;
        private int _lengthUnitIndex, _powerUnitIndex;

        private UnitSystem[] _unitSystems;

        [GlobalSetup]
        public void GlobalSetup()
        {
            _doubleInfos = Quantity.Infos.Where(x => !(x.Zero is IDecimalQuantity)).Shuffle().ToArray();
            _decimalInfos = Quantity.Infos.Where(x => x.Zero is IDecimalQuantity).Shuffle().ToArray();
            _doubleUnits = _doubleInfos.SelectMany(x => x.UnitInfos).Select(x => x.Value).Shuffle().ToArray();
            _decimalUnits = _decimalInfos.SelectMany(x => x.UnitInfos).Select(x => x.Value).Shuffle().ToArray();
            _lengthUnitIndex = Array.IndexOf(_doubleUnits, Length.BaseUnit);
            _powerUnitIndex = Array.IndexOf(_decimalUnits, Power.BaseUnit);
        }
        
        [GlobalSetup(Target = nameof(Constructor_UnitSystem))]
        public void InitUnitSystems()
        {
            _unitSystems = new[] {UnitSystem.SI};
        }

        [Benchmark(Baseline = true, OperationsPerInvoke = BenchmarkConstants.NbUnits, Description = "new (value, unit)")]
        [BenchmarkCategory(BenchmarkCategories.Unit)]
        public void Constructor()
        {
            for (var i = 0; i < _doubleUnits.Length; i++)
            {
                _consumer.Consume(new Length(DoubleValue, (LengthUnit) _doubleUnits[_lengthUnitIndex]));
            }

            for (var i = 0; i < _decimalUnits.Length; i++)
            {
                _consumer.Consume(new Power(DecimalValue, (PowerUnit) _decimalUnits[_powerUnitIndex]));
            }
        }

        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbUnits, Description = "new (value, unitSystem)")]
        [BenchmarkCategory(BenchmarkCategories.UnitSystem)]
        public void Constructor_UnitSystem()
        {
            for (var i = 0; i < BenchmarkConstants.NbUnits; i++)
            {
                _consumer.Consume(new Length(DoubleValue, _unitSystems[0]));
                // _consumer.Consume(new Power(DecimalValue, _unitSystems[0])); // currently not supported
            }
        }
        
        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbUnits, Description = "FromUnit(quantityValue)")]
        [BenchmarkCategory(BenchmarkCategories.Unit)]
        public void Constructor_FromUnit()
        {
            for (var i = 0; i < _doubleUnits.Length; i++)
            {
                QuantityValue doubleValue = DoubleValue;
                _consumer.Consume(new Length((double) doubleValue, (LengthUnit) _doubleUnits[_lengthUnitIndex])); // same as Length.FromMeters(DoubleValue)
            }
        
            for (var i = 0; i < _decimalUnits.Length; i++)
            {
                QuantityValue decimalValue = DecimalValue;
                _consumer.Consume(new Power((decimal) decimalValue, (PowerUnit) _decimalUnits[_powerUnitIndex])); // same as Power.FromWatts(DecimalValue)
            }
        }
        
        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbUnits, Description = "Quantity.From(value, unit)")]
        [BenchmarkCategory(BenchmarkCategories.Unit)]
        public void QuantityFrom()
        {
            for (var i = 0; i < _doubleUnits.Length; i++)
            {
                _consumer.Consume(Quantity.From(DoubleValue, _doubleUnits[_lengthUnitIndex]));
            }
        
            for (var i = 0; i < _decimalUnits.Length; i++)
            {
                _consumer.Consume(Quantity.From(DecimalValue, _decimalUnits[_powerUnitIndex]));
            }
        }
        
        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbUnits, Description = "Quantity<Q,U>.From(value, unit)")]
        [BenchmarkCategory(BenchmarkCategories.Unit)]
        public void QuantityFrom_Generic() // as if there was a Quantity.From<TQuantity, TUnit>(..) overload
        {
            for (var i = 0; i < _doubleUnits.Length; i++)
            {
                _consumer.Consume((Length) Quantity.From(DoubleValue, (LengthUnit) _doubleUnits[_lengthUnitIndex]));
            }
        
            for (var i = 0; i < _decimalUnits.Length; i++)
            {
                _consumer.Consume((Power) Quantity.From(DecimalValue, (PowerUnit) _decimalUnits[_powerUnitIndex]));
            }
        }
        
        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbUnits, Description = "Quantity.From(value, randomUnit)")]
        [BenchmarkCategory(BenchmarkCategories.Unit)]
        public void QuantityFrom_RandomUnit()
        {
            for (var i = 0; i < _doubleUnits.Length; i++)
            {
                _consumer.Consume(Quantity.From(DoubleValue, _doubleUnits[i]));
            }
        
            for (var i = 0; i < _decimalUnits.Length; i++)
            {
                _consumer.Consume(Quantity.From(DecimalValue, _decimalUnits[i]));
            }
        }
        
        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbQuantities, Description = "FromQuantityInfo(randomInfo, value)")]
        [BenchmarkCategory(BenchmarkCategories.Quantity)]
        public void QuantityFromQuantityInfo()
        {
            for (var i = 0; i < _doubleInfos.Length; i++)
            {
                _consumer.Consume(Quantity.FromQuantityInfo(_doubleInfos[i], DoubleValue));
            }
        
            for (var i = 0; i < _decimalInfos.Length; i++)
            {
                _consumer.Consume(Quantity.FromQuantityInfo(_decimalInfos[i], DecimalValue));
            }
        }
        
    }
}
