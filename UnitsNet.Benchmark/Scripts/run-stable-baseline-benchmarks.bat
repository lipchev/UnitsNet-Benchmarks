@echo off
SET scriptdir=%~dp0
SET projectdir=%scriptdir%..\..
SET exportdir=%projectdir%\Artifacts\Benchmark\Baseline
SET filter=Baseline
SET build-plots=results\BuildPlots.R
SET generate-plots=results\GeneratePlots.R

SET run-benchmarks=dotnet run --project "%projectdir%\UnitsNet.Benchmark" -c Release --statisticalTest "5 %%" --filter=%filter%*
::SET run-benchmarks=dotnet run --project "%projectdir%\UnitsNet.Benchmark" -c Release --framework "net5.0" --statisticalTest "5 %%" --exporters fullJson rplot 

%run-benchmarks% --anyCategories Construction --artifacts=%exportdir%\Construction --runtimes %*
if exist %exportdir%\Construction\%build-plots% (
  if not exist %exportdir%\Construction\%generate-plots% (
    call %scriptdir%\r-plot\resize-labels.bat %exportdir%\Construction\%build-plots% %exportdir%\Construction\%generate-plots%
    call %scriptdir%\r-plot\export-charts.bat %exportdir%\Construction\%generate-plots%
  )
)

%run-benchmarks% --anyCategories Comparison --artifacts=%exportdir%\Comparison --runtimes %*
if exist %exportdir%\Comparison\%build-plots% (
  if not exist %exportdir%\Comparison\%generate-plots% (
    call %scriptdir%\r-plot\resize-labels.bat %exportdir%\Comparison\%build-plots% %exportdir%\Comparison\%generate-plots%
    call %scriptdir%\r-plot\export-charts.bat %exportdir%\Comparison\%generate-plots%
  )
)

%run-benchmarks% --anyCategories Value --artifacts=%exportdir%\Conversion\Value --runtimes %*
if exist %exportdir%\Conversion\Value\%build-plots% (
  if not exist %exportdir%\Conversion\Value\%generate-plots% (
    call %scriptdir%\r-plot\resize-labels.bat %exportdir%\Conversion\Value\%build-plots% %exportdir%\Conversion\Value\%generate-plots%
    call %scriptdir%\r-plot\export-charts.bat %exportdir%\Conversion\Value\%generate-plots%
  )
)

%run-benchmarks% --anyCategories String --artifacts=%exportdir%\Conversion\String --runtimes %*
if exist %exportdir%\Conversion\String\%build-plots% (
  if not exist %exportdir%\Conversion\String\%generate-plots% (
    call %scriptdir%\r-plot\resize-labels.bat %exportdir%\Conversion\String\%build-plots% %exportdir%\Conversion\String\%generate-plots%
    call %scriptdir%\r-plot\export-charts.bat %exportdir%\Conversion\String\%generate-plots%
  )
)