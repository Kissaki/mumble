IF [%VCVARSCALLED%] == [1] goto skipvcvars
SET VCVARSCALLED=1
call "C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\VC\Auxiliary\Build\vcvars64.bat"
IF ERRORLEVEL 1 (
   echo ERROR: Failed to call vcvars64
   EXIT /B 1
)
:skipvcvars
