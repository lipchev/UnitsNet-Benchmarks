@echo off
SET scriptdir=%~dp0
SET projectdir=%scriptdir%..\..
SET exportdir=%projectdir%\Artifacts\Benchmark\Micro
SET filter=UnitsNet.Benchmark.Micro
SET build-plots=results\BuildPlots.R
SET generate-plots=results\GeneratePlots.R

SET run-benchmarks=dotnet run --project "%projectdir%\UnitsNet.Benchmark" -c Release --statisticalTest "5 %%"
::SET run-benchmarks=dotnet run --project "%projectdir%\UnitsNet.Benchmark" -c Release --framework "net5.0" --statisticalTest "5 %%" --exporters fullJson rplot 

setlocal

%run-benchmarks% --artifacts=%exportdir%\Init --filter %filter%.Init* --runtimes %*
if exist %exportdir%\Init\%build-plots% (
  if not exist %exportdir%\Init\%generate-plots% (
    call %scriptdir%\r-plot\resize-labels.bat %exportdir%\Init\%build-plots% %exportdir%\Init\%generate-plots%
    call %scriptdir%\r-plot\export-charts.bat %exportdir%\Init\%generate-plots%
  )
)

%run-benchmarks% --artifacts=%exportdir%\Construction\QuantityFromUnit --filter %filter%.Construction.QuantityFromUnit* --runtimes %*
if exist %exportdir%\Construction\QuantityFromUnit\%build-plots% (
  if not exist %exportdir%\Construction\QuantityFromUnit\%generate-plots% (
    call %scriptdir%\r-plot\flip-charts.bat %exportdir%\Construction\QuantityFromUnit\%build-plots% %exportdir%\Construction\QuantityFromUnit\%generate-plots%
    call %scriptdir%\r-plot\export-charts.bat %exportdir%\Construction\QuantityFromUnit\%generate-plots%
  )
)

%run-benchmarks% --artifacts=%exportdir%\Construction\UnitFromString --filter %filter%.Construction.UnitFromString* --runtimes %*
if exist %exportdir%\Construction\UnitFromString\%build-plots% (
  if not exist %exportdir%\Construction\UnitFromString\%generate-plots% (
    call %scriptdir%\r-plot\flip-charts.bat %exportdir%\Construction\UnitFromString\%build-plots% %exportdir%\Construction\UnitFromString\%generate-plots%
    call %scriptdir%\r-plot\export-charts.bat %exportdir%\Construction\UnitFromString\%generate-plots%
  )
)

%run-benchmarks% --artifacts=%exportdir%\Construction\QuantityFromString --filter %filter%.Construction.QuantityFromString* --runtimes %*
if exist %exportdir%\Construction\QuantityFromString\%build-plots% (
  if not exist %exportdir%\Construction\QuantityFromString\%generate-plots% (
    call %scriptdir%\r-plot\flip-charts.bat %exportdir%\Construction\QuantityFromString\%build-plots% %exportdir%\Construction\QuantityFromString\%generate-plots%
    call %scriptdir%\r-plot\export-charts.bat %exportdir%\Construction\QuantityFromString\%generate-plots%
  )
)

%run-benchmarks% --artifacts=%exportdir%\Comparison --filter %filter%.Comparison* --runtimes %*
if exist %exportdir%\Comparison\%build-plots% (
  if not exist %exportdir%\Comparison\%generate-plots% (
    call %scriptdir%\r-plot\rotate-labels.bat %exportdir%\Comparison\%build-plots% %exportdir%\Comparison\%generate-plots%
    call %scriptdir%\r-plot\export-charts.bat %exportdir%\Comparison\%generate-plots%
  )
)

%run-benchmarks% --artifacts=%exportdir%\Conversion\QuantityToUnit --filter %filter%.Conversion.QuantityToUnit* --runtimes %*
if exist %exportdir%\Conversion\QuantityToUnit\%build-plots% (
  if not exist %exportdir%\Conversion\QuantityToUnit\%generate-plots% (
    call %scriptdir%\r-plot\flip-charts.bat %exportdir%\Conversion\QuantityToUnit\%build-plots% %exportdir%\Conversion\QuantityToUnit\%generate-plots% 
    call %scriptdir%\r-plot\export-charts.bat %exportdir%\Conversion\QuantityToUnit\%generate-plots%
  )
)

%run-benchmarks% --artifacts=%exportdir%\Conversion\QuantityToValue --filter %filter%.Conversion.QuantityToValue* --runtimes %*
if exist %exportdir%\Conversion\QuantityToValue\%build-plots% (
  if not exist %exportdir%\Conversion\QuantityToValue\%generate-plots% (
    call %scriptdir%\r-plot\flip-charts.bat %exportdir%\Conversion\QuantityToValue\%build-plots% %exportdir%\Conversion\QuantityToValue\%generate-plots%
    call %scriptdir%\r-plot\export-charts.bat %exportdir%\Conversion\QuantityToValue\%generate-plots%
  )
)

%run-benchmarks% --artifacts=%exportdir%\Conversion\QuantityToString --filter %filter%.Conversion.QuantityToString* --runtimes %*
if exist %exportdir%\Conversion\QuantityToString\%build-plots% (
  if not exist %exportdir%\Conversion\QuantityToString\%generate-plots% (
    call %scriptdir%\r-plot\resize-labels.bat %exportdir%\Conversion\QuantityToString\%build-plots% %exportdir%\Conversion\QuantityToString\%generate-plots%
    call %scriptdir%\r-plot\export-charts.bat %exportdir%\Conversion\QuantityToString\%generate-plots%
  )
)

endlocal