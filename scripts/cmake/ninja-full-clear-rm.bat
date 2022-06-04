pushd "%~dp0..\..\build"
IF ERRORLEVEL 1 (
   pause
   EXIT /B 1
)

rmdir /S /Q ninja
IF ERRORLEVEL 1 (
   pause
   popd
   EXIT /B 1
)

popd
