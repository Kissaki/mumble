call %~dp0_include-vcvars.bat

SET TARGETPATH=%~dp0..\..\build\ninja
SET VCPKGPATH=%USERPROFILE%\vcpkg

IF NOT EXIST "%TARGETPATH%" (
   mkdir "%TARGETPATH%"
   IF ERRORLEVEL 1 (
     pause
     EXIT /B 1
   )
)

pushd "%TARGETPATH%"
IF ERRORLEVEL 1 (
   pause
   EXIT /B 1
)

cmake -G "Ninja" ^
      "-DVCPKG_TARGET_TRIPLET=x64-windows-static-md" ^
      "-Dstatic=ON" ^
      "-DCMAKE_TOOLCHAIN_FILE=%VCPKGPATH%/scripts/buildsystems/vcpkg.cmake" ^
      "-DIce_HOME=%VCPKGPATH%/installed/x64-windows-static-md" ^
      "-DCMAKE_BUILD_TYPE=Release" ^
      ..\..
IF ERRORLEVEL 1 (
   pause
   popd
   EXIT /B 1
)

popd
