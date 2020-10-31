call "C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\VC\Auxiliary\Build\vcvars64.bat"
IF ERRORLEVEL 1 (
   echo ERROR: Failed to call vcvars64
   EXIT /B 1
)

SET TARGETPATH=%~dp0..\..\build\ninja
SET VCPKGPATH=%USERPROFILE%\vcpkg

REM SET PATH=%VCPKGPATH%\downloads\tools\ninja\1.10.1-windows\;%PATH%

pushd "%TARGETPATH%"
IF ERRORLEVEL 1 (
   pause
   EXIT /B 1
)

cmake --build . --parallel
IF ERRORLEVEL 1 (
   pause
   popd
   EXIT /B 1
)

popd
