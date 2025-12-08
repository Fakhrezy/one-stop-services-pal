@echo off
title Paljaya Services Launcher
echo ========================================
echo     PALJAYA SERVICES LAUNCHER
echo ========================================
echo.
echo Starting all services...
echo.

REM Start React Development Server (OSS-PAL)
echo [1/3] Starting React Development Server (OSS-PAL)...
start "OSS-PAL React Dev" cmd /k "cd /d C:\Laragon\www\oss-pal\oss-pal && npm run dev"

REM Wait 2 seconds before starting next service
timeout /t 2 /nobreak >nul

REM Start PHP Laravel Server - SISMON (Port 8001)
echo [2/3] Starting SISMON-PAL Laravel Server (Port 8001)...
start "SISMON-PAL Server" cmd /k "cd /d C:\Laragon\www\sismon-pal && php artisan serve --host=192.168.1.111 --port=8001"

REM Wait 2 seconds before starting next service  
timeout /t 2 /nobreak >nul

REM Start PHP Laravel Server - SISTAMU (Port 8002)
echo [3/3] Starting SISTAMU-PAL Laravel Server (Port 8002)...
start "SISTAMU-PAL Server" cmd /k "cd /d C:\Laragon\www\sistamu-pal && php artisan serve --host=192.168.1.111 --port=8002"

echo.
echo ========================================
echo All services are starting...
echo.
echo Services will be available at:
echo - React App: http://localhost:5173 or http://192.168.1.111:5173
echo - SISMON-PAL: http://192.168.1.111:8001  
echo - SISTAMU-PAL: http://192.168.1.111:8002
echo.
echo Press any key to close this window...
echo ========================================
pause >nul