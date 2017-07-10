@echo off

set base="%~dp0.."

set envdir=C:\MumbleBuild
if NOT exist "%envdir%" (
    echo Need a %envdir% folder with an environment
    echo See 
    exit /B 1
)
pushd %envdir%
rem Make sure its empty as default
set BUILDENV=
rem Get the last buildenvironment folder
for /f %%a in ('dir /B /ON win* ^| findstr /V ".build"') do set BUILDENV=%envdir%\%%a
popd

if [%BUILDENV%] == "" (
    echo Failed to locate buildenvironment
    exit /B 1
)
echo Using build environment %BUILDENV%

pushd "%BUILDENV%"
call "prep.cmd"
popd

pushd %base%
if NOT [%1] == [] (
    cd "%1"
    if NOT ERRORLEVEL 0 (
        echo Could not change into the specified directory
        exit /B 1
    )
)

nmake

if ERRORLEVEL 0 (
    echo SUCCESS %ERRORLEVEL%
) else (
    echo FAILURE %ERRORLEVEL%
)

popd
