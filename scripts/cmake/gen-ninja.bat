call "C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\VC\Auxiliary\Build\vcvars64.bat"
IF ERRORLEVEL 1 (
   echo ERROR: Failed to call vcvars64
   EXIT /B 1
)

mkdir %~dp0..\..\build\ninja
pushd %~dp0..\..\build\ninja
cmake -G "Ninja" ^
      "-DVCPKG_TARGET_TRIPLET=x64-windows-static-md" ^
      "-Dstatic=ON" ^
      "-DCMAKE_TOOLCHAIN_FILE=%USERPROFILE%/vcpkg/scripts/buildsystems/vcpkg.cmake" ^
      "-DIce_HOME=%USERPROFILE%/vcpkg/installed/x64-windows-static-md" ^
      "-DCMAKE_BUILD_TYPE=Release" ^
      ..\..
popd
