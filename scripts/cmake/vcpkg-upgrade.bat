pushd %USERPROFILE%\vcpkg
git pull --rebase
vcpkg.exe upgrade --no-dry-run
popd
