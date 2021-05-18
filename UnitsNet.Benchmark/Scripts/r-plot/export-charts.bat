@echo off
cd %~p1 
echo Generating plots:
dir %1
type %1
%1 rem 1> nul 2> nul
mkdir plots
move *.png plots
