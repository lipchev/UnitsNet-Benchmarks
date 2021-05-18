// Licensed under MIT No Attribution, see LICENSE file at the root.
// Copyright 2013 Andreas Gullberg Larsen (andreas.larsen84@gmail.com). Maintained at https://github.com/angularsen/UnitsNet.

using System;
using System.Collections.Generic;
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
    [BenchmarkCategory(BenchmarkCategories.Micro, BenchmarkCategories.Construction, BenchmarkCategories.Unit, BenchmarkCategories.String)]
    [Orderer(SummaryOrderPolicy.FastestToSlowest)]
    public class UnitFromString
    {
        private readonly Consumer _consumer = new Consumer();
        
        private int _nbDoubleUnits, _nbDecimalUnits;

        private (Type UnitType, string UnitAbbreviation)[] _validAbbreviations;
        private int _lengthStringIndex, _powerStringIndex;

        [GlobalSetup]
        public void GlobalSetup()
        {
            _nbDoubleUnits = Quantity.Infos.Where(x => !(x.Zero is IDecimalQuantity)).Sum(x => x.UnitInfos.Length);
            _nbDecimalUnits = Quantity.Infos.Where(x => x.Zero is IDecimalQuantity).Sum(x => x.UnitInfos.Length);

            _validAbbreviations = GetValidAbbreviations().Shuffle().ToArray();

            if (_validAbbreviations.Length != BenchmarkConstants.NbAbbreviations)
            {
                throw new ArgumentOutOfRangeException(nameof(_validAbbreviations.Length), _validAbbreviations.Length,
                    $"Expected : {BenchmarkConstants.NbAbbreviations}");
            }

            _lengthStringIndex = Array.FindIndex(_validAbbreviations, x => x.UnitType == typeof(LengthUnit) && x.UnitAbbreviation == "m");
            _powerStringIndex = Array.FindIndex(_validAbbreviations, x => x.UnitType == typeof(PowerUnit) && x.UnitAbbreviation == "W");

            Console.Out.WriteLine("Testing with {0} valid abbreviations: Length = '{1}', Power = '{2}'", _validAbbreviations.Length, GetLengthAbbreviation(),
                GetPowerAbbreviation());
        }

        private static IEnumerable<(Type UnitType, string validAbbreviation)> GetValidAbbreviations()
        {
            return from quantityInfo in Quantity.Infos
                from validAbbreviation in UnitAbbreviationsCache.Default.GetAllUnitAbbreviationsForQuantity(quantityInfo.UnitType)
                    .Where(a => Quantity.TryParse(quantityInfo.ValueType, $"{0} {a}", out _))
                select (quantityInfo.UnitType, validAbbreviation);
        }

        private string GetLengthAbbreviation()
        {
            return _validAbbreviations[_lengthStringIndex].UnitAbbreviation;
        }

        private string GetPowerAbbreviation()
        {
            return _validAbbreviations[_powerStringIndex].UnitAbbreviation;
        }

        [Benchmark(Baseline = true, OperationsPerInvoke = BenchmarkConstants.NbUnits, Description = "ParseUnit(validString)")]
        public void ParseUnit()
        {
            for (var i = 0; i < _nbDoubleUnits; i++)
            {
                _consumer.Consume(Length.ParseUnit(GetLengthAbbreviation()));
            }

            for (var i = 0; i < _nbDecimalUnits; i++)
            {
                _consumer.Consume(Power.ParseUnit(GetPowerAbbreviation()));
            }
        }

        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbUnits, Description = "TryParseUnit(validString)")]
        public void TryParseUnit_Valid()
        {
            for (var i = 0; i < _nbDoubleUnits; i++)
            {
                _consumer.Consume(Length.TryParseUnit(GetLengthAbbreviation(), out _));
            }

            for (var i = 0; i < _nbDecimalUnits; i++)
            {
                _consumer.Consume(Power.TryParseUnit(GetPowerAbbreviation(), out _));
            }
        }

        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbUnits, Description = "TryParseUnit(invalidUnit)")]
        public void TryParseUnit_Invalid()
        {
            for (var i = 0; i < _nbDoubleUnits; i++)
            {
                _consumer.Consume(Length.TryParseUnit(GetPowerAbbreviation(), out _));
            }

            for (var i = 0; i < _nbDecimalUnits; i++)
            {
                _consumer.Consume(Power.TryParseUnit(GetLengthAbbreviation(), out _));
            }
        }

        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbAbbreviations, Description = "UnitParser.Parse(validString)")]
        public void UnitParser_Parse()
        {
            for (var i = 0; i < _validAbbreviations.Length; i++)
            {
                var (quantityType, unitAbbreviation) = _validAbbreviations[i];
                _consumer.Consume(UnitParser.Default.Parse(unitAbbreviation, quantityType));
            }
        }

        [Benchmark(OperationsPerInvoke = BenchmarkConstants.NbAbbreviations, Description = "UnitParser.TryParse(validString)")]
        public void UnitParser_TryParse()
        {
            for (var i = 0; i < _validAbbreviations.Length; i++)
            {
                var (quantityType, unitAbbreviation) = _validAbbreviations[i];
                _consumer.Consume(UnitParser.Default.TryParse(unitAbbreviation, quantityType, out _));
            }
        }
    }
}
