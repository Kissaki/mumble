call "C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\VC\Auxiliary\Build\vcvars64.bat"
IF ERRORLEVEL 1 (
   echo ERROR: Failed to call vcvars64
   EXIT /B 1
)

pushd %~dp0..\..\build\ninja
cmake --build . --parallel
popd
