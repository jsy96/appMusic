@echo off
REM One-click: stage all, commit, push to gitee (origin master).
REM Usage:
REM   1git.bat              -> commit message defaults to "update"
REM   1git.bat your message -> commit message is "your message"
cd /d "%~dp0"
set "MSG=%*"
if "%MSG%"=="" set "MSG=update"

echo Staging changes...
git add -A

echo Committing: %MSG%
git commit -m "%MSG%"
if errorlevel 1 echo Nothing new to commit.

echo Pushing to gitee (origin master)...
git push origin master

echo.
echo Done.
pause
