@echo off
cd %~p1 
if exist %1 (
  echo Re-generating plots using %~s1
  del *.png
  Rscript %1 1> nul 2> nul
)
else(
  echo Re-using the previously generated plots (output from BuildPlots.R)
)
mkdir plots
move *.png plots
