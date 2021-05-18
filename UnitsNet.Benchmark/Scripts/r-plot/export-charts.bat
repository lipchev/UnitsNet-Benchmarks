@echo off
cd %~p1 
echo Generating plots...
%1 1> nul 2> nul
mkdir plots
move *.png plots
