@echo off
SET scriptdir=%~dp0
SET projectdir=%scriptdir%..\..
SET exportdir=%projectdir%\Artifacts\Benchmark\Gradient
SET filter=UnitsNet.Benchmark.Gradient
SET build-plots=results\BuildPlots.R
SET generate-plots=results\GeneratePlots.R

SET run-benchmarks=dotnet run --project "%projectdir%\UnitsNet.Benchmark" -c Release --statisticalTest "5 %%"
::SET run-benchmarks=dotnet run --project "%projectdir%\UnitsNet.Benchmark" -c Release --framework "net5.0" --statisticalTest "5 %%" --exporters fullJson rplot 

setlocal

%run-benchmarks% --artifacts=%exportdir%\Quantity\QuantityFromUnit --filter %filter%.QuantityGradientBenchmarks* --runtimes %*
if exist %exportdir%\Quantity\QuantityFromUnit\%build-plots% (
  if not exist %exportdir%\Quantity\QuantityFromUnit\%generate-plots% (
    call %scriptdir%\r-plot\flip-charts.bat %exportdir%\Quantity\QuantityFromUnit\%build-plots% %exportdir%\Quantity\QuantityFromUnit\%generate-plots%
    call %scriptdir%\r-plot\export-charts.bat %exportdir%\Quantity\QuantityFromUnit\%generate-plots%
  )
)

%run-benchmarks% --artifacts=%exportdir%\Unit\QuantityToUnit --filter %filter%.UnitGradientBenchmarks* --anyCategories Quantity --runtimes %*
if exist %exportdir%\Unit\QuantityToUnit\%build-plots% (
  if not exist %exportdir%\Unit\QuantityToUnit\%generate-plots% (
    call %scriptdir%\r-plot\flip-charts.bat %exportdir%\Unit\QuantityToUnit\%build-plots% %exportdir%\Unit\QuantityToUnit\%generate-plots%
    call %scriptdir%\r-plot\export-charts.bat %exportdir%\Unit\QuantityToUnit\%generate-plots%
  )
)

%run-benchmarks% --artifacts=%exportdir%\Unit\QuantityToValue --filter %filter%.UnitGradientBenchmarks* --anyCategories Value --runtimes %*
if exist %exportdir%\Unit\QuantityToValue\%build-plots% (
  if not exist %exportdir%\Unit\QuantityToValue\%generate-plots% (
    call %scriptdir%\r-plot\flip-charts.bat %exportdir%\Unit\QuantityToValue\%build-plots% %exportdir%\Unit\QuantityToValue\%generate-plots%
    call %scriptdir%\r-plot\export-charts.bat %exportdir%\Unit\QuantityToValue\%generate-plots%
  )
)

%run-benchmarks% --artifacts=%exportdir%\Unit\QuantityToUnit --filter %filter%.UnitGradientBenchmarks* --anyCategories String --runtimes %*
if exist %exportdir%\Unit\QuantityToUnit\%build-plots% (
  if not exist %exportdir%\Unit\QuantityToUnit\%generate-plots% (
    call %scriptdir%\r-plot\flip-charts.bat %exportdir%\Unit\QuantityToUnit\%build-plots% %exportdir%\Unit\QuantityToUnit\%generate-plots%
    call %scriptdir%\r-plot\export-charts.bat %exportdir%\Unit\QuantityToUnit\%generate-plots%
  )
)

endlocal