@echo off
cd %~p1 
echo Generating plots:
dir %1
type %1
echo Before run:
dir
del *.png
Rscript %1
echo After run:
dir
mkdir plots
move *.png plots
