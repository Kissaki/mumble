pushd %USERPROFILE%\vcpkg
git pull --rebase
vcpkg.exe upgrade --no-dry-run
vcpkg.exe remove --outdated
popd
