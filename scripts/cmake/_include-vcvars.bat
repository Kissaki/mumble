IF [%VCVARSCALLED%] == [1] goto skipvcvars
SET VCVARSCALLED=1

IF NOT EXIST "C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvars64.bat" (
  echo ERROR: Missing expected VS installation
  EXIT /B 1
)

call "C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvars64.bat"
IF ERRORLEVEL 1 (
  EXIT /B 1
)

SET PATH=%PATH%;C:\Program Files\WixSharp

:skipvcvars
EXIT /B 0
