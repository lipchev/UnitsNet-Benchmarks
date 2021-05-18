@echo off
rem The ResultsComparer is currently limited to one framework per comparison (System.ArgumentException is thrown if you compare results created with --framework 472 netcoreapp50)
setlocal enabledelayedexpansion
SET scriptdir=%~dp0
SET projectdir=%scriptdir%..\..
rem the path to the results comparer from dotnet\performance (currently not part of the solution)
SET comparer=%projectdir%\..\performance\src\tools\ResultsComparer
SET run-comparer=dotnet run --project %comparer% -c Release --top 20 --threshold 1%% --noise 0.3ns --base
SET exportdir=%projectdir%\Artifacts\Benchmark
SET benchmarks=(^
Micro\Construction\QuantityFromUnit, ^
Micro\Construction\UnitFromString, ^
Micro\Construction\QuantityFromString, ^
Micro\Comparison, ^
Micro\Conversion\QuantityToValue, ^
Micro\Conversion\QuantityToUnit, ^
Micro\Conversion\QuantityToString, ^
Micro\Init, ^
Gradient\Quantity\QuantityFromUnit, ^
Gradient\Unit\QuantityToUnit ^
Gradient\Unit\QuantityToValue ^
Gradient\Unit\QuantityToString ^
)

if not exist %comparer%\ (
  echo This script currently relies on the ResultsComparer from dotnet\performance. Please check the path specified for 'comparer' variable.
  echo Current path specified: %comparer%
  goto :END
)

rem Running the benchmarks with the --noOverwrite option places the result in a time-stamped sub-folder (of the form YYYYMMDD-hhmmss)
if exist %exportdir%\Micro\ (
  rem call run-micro-benchmarks.bat %* --noOverwrite  
  if exist %exportdir%\Gradient\ (
    call run-gradient-benchmarks.bat %* --noOverwrite
  )
) else (
  if exist %exportdir%\Gradient\ (
    call run-gradient-benchmarks.bat %* --noOverwrite
  ) else (
    echo No previous benchmarks found in %exportdir%
	goto :END
  )
)

FOR %%B IN %benchmarks% do (
  echo.
  
  SET basedir=%exportdir%\%%B%
  SET base=!basedir!\results

  if exist !base!\ (
    rem  Looking for the latest folder that is not the 'results' folder
    FOR /F "delims=" %%i IN ('dir !basedir! /b /ad-h /t:c /od') DO SET diff=!basedir!\%%i
    
    if !base! == !diff! (
      echo No corresponding results found for baseline %%B%
    ) else (	  
      echo Comparing benchmarks from %%B%:
	  
      %run-comparer% !base! --diff !diff! --csv !diff!\comparison.csv --xml !diff!\comparison.xml > !diff!\comparison.md
      type !diff!\comparison.md
	
	  if exist !diff!\BuildPlots.R (
	    if not exist !diff!\GeneratePlots.R (
	      echo Generating r-plots for !diff!
	      if exist !base!\GeneratePlots.R (
		    (copy !base!\GeneratePlots.R !diff!\GeneratePlots.R) 1> nul
	      ) else (
		    echo No previous plots found for %%B%: generating with default settings
		    call %scriptdir%\r-plot\flip-charts.bat !base!\BuildPlots.R !diff!\GeneratePlots.R
	      )
	      call %scriptdir%\r-plot\export-charts.bat !diff!\GeneratePlots.R 1> nul
		)
	  )
    )
  ) else (
    echo No baseline results for %%B% were found in !base!
  )
)
:END