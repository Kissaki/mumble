call %~dp0_include-vcvars.bat
cd %~dp0..\..
python scripts\updatetranslations.py --vcpkg-triplet x64-windows-static-md
