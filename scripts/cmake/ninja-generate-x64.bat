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
      "-DCMAKE_UNITY_BUILD=ON" ^
      "-Dpackaging=ON" ^
      "-DBUILD_NUMBER=1" ^
      ..\..
IF ERRORLEVEL 1 (
   pause
   popd
   EXIT /B 1
)

popd
EXIT /B 0

Kissaki:   The build docs say you can manually enable a unity build for compilation speedup. It does not say why it's not a default or why one would not use that though?
Krzmbrzl:  It's because it breaks the compilation database that is needed for clang-based tools
           Also incremental builds don't play nice with unity builds as you are usually rebuilding more than would be necessary with a regular build
Kissaki:   clang based tools would be stuff that operates on the sources, e.g. the source formatter?
Krzmbrzl:  Yes. Or the clangd language server used in a few IDEs

BUILD_NUMBER is required for PACKAGING
g15 is required for PACKAGING

REM       "-Dg15=ON" ^
