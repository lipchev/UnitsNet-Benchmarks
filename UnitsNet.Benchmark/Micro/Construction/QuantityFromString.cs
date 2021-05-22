// Licensed under MIT No Attribution, see LICENSE file at the root.
// Copyright 2013 Andreas Gullberg Larsen (andreas.larsen84@gmail.com). Maintained at https://github.com/angularsen/UnitsNet.

using System;
using System.Collections.Generic;
using System.Linq;
using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Engines;
using BenchmarkDotNet.Order;
using UnitsNet;
using UnitsNet.Benchmark;

namespace Micro.Construction
{
    [MemoryDiagnoser]
    [CategoriesColumn]
    [MinColumn]
    [MaxColumn]
    [MedianColumn]
    [StdErrorColumn]
    [BenchmarkCategory(BenchmarkCategories.Micro, BenchmarkCategories.Construction, BenchmarkCategories.Quantity, BenchmarkCategories.String)]
    [Orderer(SummaryOrderPolicy.FastestToSlowest)]
    public class QuantityFromString
    {
        private const double DoubleValue = BenchmarkConstants.DoubleValue;
        private readonly Consumer _consumer = new Consumer();

        private int _nbDoubleUnits, _nbDecimalUnits;

        private (Type ValueType, string StringValue)[] _validStrings;
        private string[] _invalidStrings;
        private int _lengthStringIndex, _powerStringIndex;

        [GlobalSetup]
        public void GlobalSetup()
        {
            _nbDoubleUnits = Quantity.Infos.Where(x => !(x.Zero is IDecimalQuantity)).Sum(x => x.UnitInfos.Length);
            _nbDecimalUnits = Quantity.Infos.Where(x => x.Zero is IDecimalQuantity).Sum(x => x.UnitInfos.Length);

            _validStrings = GetValidStrings().Shuffle().ToArray();

            if (_validStrings.Length != BenchmarkConstants.NbAbbreviations)
            {
                throw new ArgumentOutOfRangeException(nameof(_validStrings.Length), _validStrings.Length, $"Expected : {BenchmarkConstants.NbAbbreviations}");
            }

            _lengthStringIndex = Array.FindIndex(_validStrings, x => x.ValueType == typeof(Length) && x.StringValue == $"{DoubleValue} m");
            _powerStringIndex = Array.FindIndex(_validStrings, x => x.ValueType == typeof(Power) && x.StringValue == $"{DoubleValue} W");

            _invalidStrings = new[] {"ABCDEF" + GetLengthString(), "ABCDEF" + GetPowerString()};

            Console.Out.WriteLine("Testing with {0} valid strings: Length = '{1}', Power = '{2}'", _validStrings.Length, GetLengthString(), GetPowerString());
        }

        private static IEnumerable<(Type ValueType, string)> GetValidStrings()
        {
            return from quantityInfo in Quantity.Infos
                from validAbbreviation in UnitAbbreviationsCache.Default.GetAllUnitAbbreviationsForQuantity(quantityInfo.UnitType)
                    .Where(a => Quantity.TryParse(quantityInfo.ValueType, $"{0} {a}", out _))
                select (quantityInfo.ValueType, $"{DoubleValue} {validAbbreviation}");
        }

        private string GetLengthString()
        {
            return _validStrings[_lengthStringIndex].StringValue;
        }

        private string GetPowerString()
        {
            return _validStrings[_powerStringIndex].StringValue;
        }

        private string GetInvalidLengthString()
        {
            return _invalidStrings[0];
        }

        private string GetInvalidPowerString()
        {
            return _invalidStrings[1];
        }

        [Benchmark(Baseline = true, OperationsPerInvoke = BenchmarkConstants.NbUnits, Description = "Parse(validString)")]
        public void Parse()
        {
            for (var i = 0; i < _nbDoubleUnits; i++)
            {
                _consumer.Consume(Length.Parse(GetLengthString()));
            }

            for (var i = 0; i < _nbDecimalUnits; i++)
            {
                _consumer.Consume(Power.Parse(GetPowerString()));
            }
        }

        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbUnits, Description = "TryParse(validString)")]
        public void TryParse_Valid()
        {
            for (var i = 0; i < _nbDoubleUnits; i++)
            {
                _consumer.Consume(Length.TryParse(GetLengthString(), out _));
            }

            for (var i = 0; i < _nbDecimalUnits; i++)
            {
                _consumer.Consume(Power.TryParse(GetPowerString(), out _));
            }
        }

        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbUnits, Description = "TryParse(invalidUnit)")]
        public void TryParse_InvalidUnit()
        {
            for (var i = 0; i < _nbDoubleUnits; i++)
            {
                _consumer.Consume(Length.TryParse(GetPowerString(), out _));
            }

            for (var i = 0; i < _nbDecimalUnits; i++)
            {
                _consumer.Consume(Power.TryParse(GetLengthString(), out _));
            }
        }

        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbUnits, Description = "TryParse(invalidNumber)")]
        public void TryParse_InvalidNumber()
        {
            for (var i = 0; i < _nbDoubleUnits; i++)
            {
                _consumer.Consume(Length.TryParse(GetInvalidLengthString(), out _));
            }

            for (var i = 0; i < _nbDecimalUnits; i++)
            {
                _consumer.Consume(Power.TryParse(GetInvalidPowerString(), out _));
            }
        }

        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbAbbreviations, Description = "Quantity.Parse(validString)")]
        public void Quantity_Parse()
        {
            for (var i = 0; i < _validStrings.Length; i++)
            {
                var (quantityType, quantityString) = _validStrings[i];
                _consumer.Consume(Quantity.Parse(quantityType, quantityString));
            }
        }

        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbAbbreviations, Description = "Quantity.TryParse(validString)")]
        public void Quantity_TryParse()
        {
            for (var i = 0; i < _validStrings.Length; i++)
            {
                var (quantityType, quantityString) = _validStrings[i];
                _consumer.Consume(Quantity.TryParse(quantityType, quantityString, out _));
            }
        }
        
        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbUnits, Description = "Quantity.TryParse(invalidUnit)")]
        public void QuantityTryParse_InvalidUnit()
        {
            for (var i = 0; i < _nbDoubleUnits; i++)
            {
                _consumer.Consume(Quantity.TryParse(typeof(Length), GetPowerString(), out _));
            }

            for (var i = 0; i < _nbDecimalUnits; i++)
            {
                _consumer.Consume(Quantity.TryParse(typeof(Power), GetLengthString(), out _));
            }
        }

        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbUnits, Description = "Quantity.TryParse(invalidNumber)")]
        public void QuantityTryParse_InvalidNumber()
        {
            for (var i = 0; i < _nbDoubleUnits; i++)
            {
                _consumer.Consume(Quantity.TryParse(typeof(Length), GetInvalidLengthString(), out _));
            }

            for (var i = 0; i < _nbDecimalUnits; i++)
            {
                _consumer.Consume(Quantity.TryParse(typeof(Power), GetInvalidPowerString(), out _));
            }
        }
    }
}
