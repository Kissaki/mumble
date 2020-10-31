mkdir %~dp0..\..\build
cd %~dp0..\..\build
cmake -G "NMake Makefiles JOM" ^
      "-DVCPKG_TARGET_TRIPLET=x64-windows-static-md" ^
      "-Dstatic=ON" ^
      "-DCMAKE_TOOLCHAIN_FILE=%USERPROFILE%/vcpkg/scripts/buildsystems/vcpkg.cmake" ^
      "-DIce_HOME=%USERPROFILE%/vcpkg/installed/x64-windows-static-md" ^
      "-DCMAKE_BUILD_TYPE=Release" ^
      ..
