@echo off
title Stop Paljaya Services
echo ========================================
echo     STOP PALJAYA SERVICES
echo ========================================
echo.
echo Stopping all running services...
echo.

REM Kill Node.js processes (React Development Server)
echo [1/3] Stopping React Development Servers...
taskkill /f /im node.exe >nul 2>&1
if %errorlevel%==0 (
    echo ✓ Node.js processes stopped
) else (
    echo ✗ No Node.js processes found
)

REM Kill PHP processes (Laravel Servers)
echo [2/3] Stopping PHP Laravel Servers...
taskkill /f /im php.exe >nul 2>&1
if %errorlevel%==0 (
    echo ✓ PHP processes stopped
) else (
    echo ✗ No PHP processes found
)

REM Kill Command Prompt windows with specific titles
echo [3/3] Closing service terminals...
taskkill /f /fi "WINDOWTITLE eq OSS-PAL React Dev*" >nul 2>&1
taskkill /f /fi "WINDOWTITLE eq SISMON-PAL Server*" >nul 2>&1
taskkill /f /fi "WINDOWTITLE eq SISTAMU-PAL Server*" >nul 2>&1

echo.
echo ========================================
echo All services have been stopped!
echo.
echo Press any key to close this window...
echo ========================================
pause >nul