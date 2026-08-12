@echo off
setlocal enableextensions
cd /d "%~dp0"

rem ---------- locate uv: PATH first, then chocolatey shim ----------
set "UV="
where uv >nul 2>nul && set "UV=uv"
if not defined UV if exist "C:\ProgramData\chocolatey\bin\uv.exe" set "UV=C:\ProgramData\chocolatey\bin\uv.exe"
if not defined UV (
  echo [ERROR] uv was not found in PATH or at C:\ProgramData\chocolatey\bin\uv.exe
  echo Install uv: https://docs.astral.sh/uv/
  echo.
  pause
  exit /b 1
)

rem ---------- port (default 8000, or first arg) ----------
set "PORT=8000"
if not "%~1"=="" set "PORT=%~1"

echo Starting EmotionChord static server ...
echo URL:  http://localhost:%PORT%
echo Press Ctrl+C to stop.
echo.

rem Open the browser after a short delay so the server is ready
start "" /b powershell -NoProfile -Command "Start-Sleep -Seconds 2; Start-Process 'http://localhost:%PORT%'"

rem Serve this directory (no project, isolated CPython via uv)
"%UV%" run --no-project -m http.server %PORT%

echo.
echo Server exited. If it failed to start, port %PORT% may already be in use.
echo Try another port, e.g.:  start.bat 8080
echo.
pause
